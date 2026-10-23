import { defineConfig, Plugin, ViteDevServer, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

/**
 * Извлекает все активные маршруты <Route path="..." /> из src/App.tsx
 * (исключая технические редиректы <Navigate /> и 404 '*').
 */
function extractStaticPathsFromApp(): string[] {
  try {
    const appFile = path.resolve(__dirname, 'src/App.tsx');
    const content = fs.readFileSync(appFile, 'utf-8');
    const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{([^}]+)\}/g;
    const paths: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = routeRegex.exec(content)) !== null) {
      const routePath = match[1];
      const elementExpr = match[2];
      if (!elementExpr.includes('Navigate') && routePath !== '*') {
        paths.push(routePath);
      }
    }
    return paths;
  } catch {
    return [];
  }
}

/**
 * Вычисляет дату последнего изменения исходного файла страницы в формате YYYY-MM-DD.
 */
function resolveFileLastMod(relFilePath?: string, fallback?: string): string {
  if (relFilePath) {
    try {
      const absPath = path.resolve(__dirname, relFilePath);
      if (fs.existsSync(absPath)) {
        const stat = fs.statSync(absPath);
        return stat.mtime.toISOString().split('T')[0];
      }
    } catch {
      // Игнорируем ошибку чтения stat
    }
  }
  return fallback || new Date().toISOString().split('T')[0];
}

/**
 * Плагин серверного рендеринга (SSR) и автоматической генерации sitemap.xml в режиме разработки.
 * 1. Автоматически пересобирает public/sitemap.xml при старте и при добавлении/удалении/редактировании страниц и данных.
 * 2. При запросе любой страницы рендерит React на сервере и отдает готовый HTML.
 */
function viteDevSSRPlugin(): Plugin {
  let envSiteUrl = 'http://localhost:8085';

  async function regenerateSitemap(server: ViteDevServer): Promise<string> {
    const { generateSitemapXml } = await server.ssrLoadModule('/src/entry-server.tsx');
    const staticPathsFromApp = extractStaticPathsFromApp();
    const xml = generateSitemapXml({
      siteUrl: envSiteUrl,
      staticPathsFromApp,
      resolveLastMod: (entry: { lastmod?: string; sourceFile?: string }) =>
        entry.lastmod || resolveFileLastMod(entry.sourceFile),
    });

    const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
    const currentXml = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf-8') : '';
    if (currentXml !== xml) {
      fs.writeFileSync(sitemapPath, xml, 'utf-8');
    }

    // Синхронизируем директиву Sitemap в public/robots.txt
    const robotsPath = path.resolve(__dirname, 'public/robots.txt');
    if (fs.existsSync(robotsPath)) {
      const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
      const cleanSiteUrl = envSiteUrl.replace(/\/+$/, '');
      const updatedRobots = robotsContent.replace(
        /^Sitemap:.*$/m,
        `Sitemap: ${cleanSiteUrl}/sitemap.xml`
      );
      if (updatedRobots !== robotsContent) {
        fs.writeFileSync(robotsPath, updatedRobots, 'utf-8');
      }
    }

    return xml;
  }

  return {
    name: 'vite-dev-ssr-plugin',
    configResolved(config) {
      const env = loadEnv(config.mode, process.cwd(), '');
      envSiteUrl = env.VITE_APP_SITE_URL || process.env.VITE_APP_SITE_URL || 'http://localhost:8085';
    },
    configureServer(server) {
      // Первичная генерация sitemap.xml при запуске dev-сервера
      setTimeout(() => {
        regenerateSitemap(server).catch((e) =>
          console.warn('[Sitemap] Ошибка автогенерации при старте:', e)
        );
      }, 300);

      // Автоматическое обновление sitemap.xml при добавлении, изменении или удалении страниц/данных
      const handleFileChange = (filePath: string) => {
        const normalized = filePath.replace(/\\/g, '/');
        if (
          normalized.includes('/src/pages/') ||
          normalized.includes('/src/data/') ||
          normalized.endsWith('/src/App.tsx')
        ) {
          regenerateSitemap(server).catch((e) =>
            console.warn('[Sitemap] Ошибка обновления sitemap.xml:', e)
          );
        }
      };

      server.watcher.on('add', handleFileChange);
      server.watcher.on('change', handleFileChange);
      server.watcher.on('unlink', handleFileChange);

      server.middlewares.use(async (req, res, next) => {
        try {
          const url = req.originalUrl || req.url || '/';
          const cleanPath = url.split('?')[0];

          // Динамическая отдача всегда актуального /sitemap.xml
          if (req.method === 'GET' && cleanPath === '/sitemap.xml') {
            const xml = await regenerateSitemap(server);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            return res.end(xml);
          }

          // Пропускаем не-GET запросы, внутренние модули Vite и статические файлы с расширениями
          if (
            req.method !== 'GET' ||
            cleanPath.startsWith('/@') ||
            cleanPath.startsWith('/__') ||
            cleanPath.startsWith('/src/') ||
            cleanPath.startsWith('/node_modules/') ||
            (path.extname(cleanPath) !== '' && cleanPath !== '/index.html')
          ) {
            return next();
          }

          // Читаем исходный шаблон index.html и прогоняем через трансформер Vite (HMR-клиент)
          const indexHtmlPath = path.resolve(__dirname, 'index.html');
          let template = fs.readFileSync(indexHtmlPath, 'utf-8');
          template = await server.transformIndexHtml(cleanPath, template);

          // Загружаем серверный модуль рендеринга через Vite SSR
          const { render, injectSSRHtml } = await server.ssrLoadModule('/src/entry-server.tsx');
          const { appHtml, headTags } = render(cleanPath);
          const finalHtml = injectSSRHtml(template, appHtml, headTags);

          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(finalHtml);
        } catch (err) {
          server.ssrFixStacktrace(err as Error);
          next(err);
        }
      });
    },
  };
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), viteDevSSRPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@data': path.resolve(__dirname, './src/data'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  ssr: {
    // Включаем CJS-зависимости в бандл при SSR-сборке, а в dev-режиме позволяем Node загружать CJS напрямую
    noExternal: isSsrBuild ? ['react-helmet-async', 'react-phone-input-2'] : ['react-helmet-async'],
  },
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    // Разрешаем проксирование запросов от Nginx и локальных хостов
    // @ts-expect-error - параметр поддерживается в Vite 5.4+ / 6.x
    allowedHosts: true,
  },
  build: {
    outDir: isSsrBuild ? 'dist-ssr' : 'dist',
    sourcemap: !isSsrBuild,
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'ui-vendor': ['lucide-react'],
              // Анимации — меняются редко, кэшируется надолго отдельно от кода секций
              'motion-vendor': ['framer-motion'],
              // Формы-стек: валидация + маски телефона (модалки и формы заявок)
              'forms-vendor': [
                'react-hook-form',
                '@hookform/resolvers',
                'zod',
                'libphonenumber-js',
                'react-phone-input-2',
              ],
            },
          },
        },
  },
  preview: {
    port: 4173,
  },
}));
