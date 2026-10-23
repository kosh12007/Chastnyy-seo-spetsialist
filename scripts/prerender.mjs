import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrDir = path.resolve(rootDir, 'dist-ssr');

/**
 * Извлекает активные статические маршруты <Route path="..." /> из src/App.tsx
 */
function extractStaticPathsFromApp() {
  try {
    const appFile = path.resolve(rootDir, 'src/App.tsx');
    const content = fs.readFileSync(appFile, 'utf-8');
    const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{([^}]+)\}/g;
    const paths = [];
    let match;
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
 * Читает VITE_APP_SITE_URL из .env или переменных окружения
 */
function resolveSiteUrl() {
  if (process.env.VITE_APP_SITE_URL) return process.env.VITE_APP_SITE_URL;
  try {
    const envPath = path.resolve(rootDir, '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      const m = envContent.match(/^VITE_APP_SITE_URL=(.+)$/m);
      if (m && m[1]) return m[1].trim();
    }
  } catch {
    // ignore
  }
  return 'http://localhost:8085';
}

/**
 * Вычисляет дату последнего изменения файла в формате YYYY-MM-DD
 */
function resolveFileLastMod(relFilePath, fallback) {
  if (relFilePath) {
    try {
      const absPath = path.resolve(rootDir, relFilePath);
      if (fs.existsSync(absPath)) {
        const stat = fs.statSync(absPath);
        return stat.mtime.toISOString().split('T')[0];
      }
    } catch {
      // ignore
    }
  }
  return fallback || new Date().toISOString().split('T')[0];
}

/**
 * Скрипт SSG-пререндеринга всех посадочных страниц сайта и автогенерации sitemap.xml.
 */
async function prerender() {
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('Шаблон dist/index.html не найден. Сначала выполните сборку клиента (vite build).');
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const ssrEntryPath = path.resolve(ssrDir, 'entry-server.js');
  const { render, injectSSRHtml, getSiteRoutes, generateSitemapXml } = await import(
    `file://${ssrEntryPath}`
  );

  const staticPathsFromApp = extractStaticPathsFromApp();
  const routesToRender = getSiteRoutes(staticPathsFromApp).map((r) => r.path);

  console.log(`[SSG Пререндеринг] Начинаем генерацию ${routesToRender.length} страниц...`);

  for (const route of routesToRender) {
    const { appHtml, headTags } = render(route);
    const fullHtml = injectSSRHtml(template, appHtml, headTags);

    const cleanRoute = route.replace(/^\/+|\/+$/g, '');
    const targetDir = cleanRoute ? path.resolve(distDir, cleanRoute) : distDir;
    fs.mkdirSync(targetDir, { recursive: true });

    const targetFile = path.resolve(targetDir, 'index.html');
    fs.writeFileSync(targetFile, fullHtml, 'utf-8');
    console.log(`  ✓ Сгенерирована страница: ${route} -> ${path.relative(rootDir, targetFile)}`);
  }

  // Генерируем страницу 404.html
  const notFoundRender = render('/404-page-not-found/');
  const notFoundHtml = injectSSRHtml(template, notFoundRender.appHtml, notFoundRender.headTags);
  fs.writeFileSync(path.resolve(distDir, '404.html'), notFoundHtml, 'utf-8');
  console.log('  ✓ Сгенерирована страница: /404.html');

  // Автоматическая генерация актуального sitemap.xml с тегом <lastmod>
  const siteUrl = resolveSiteUrl().replace(/\/+$/, '');
  const sitemapXml = generateSitemapXml({
    siteUrl,
    staticPathsFromApp,
    resolveLastMod: (entry) => entry.lastmod || resolveFileLastMod(entry.sourceFile),
  });

  fs.writeFileSync(path.resolve(rootDir, 'public/sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log('  ✓ Обновлен файл: public/sitemap.xml и dist/sitemap.xml');

  // Синхронизируем директиву Sitemap в robots.txt
  for (const robotsFile of [
    path.resolve(rootDir, 'public/robots.txt'),
    path.resolve(distDir, 'robots.txt'),
  ]) {
    if (fs.existsSync(robotsFile)) {
      const content = fs.readFileSync(robotsFile, 'utf-8');
      const updated = content.replace(/^Sitemap:.*$/m, `Sitemap: ${siteUrl}/sitemap.xml`);
      fs.writeFileSync(robotsFile, updated, 'utf-8');
    }
  }

  // Удаляем временную папку серверной сборки dist-ssr
  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log('[SSG Пререндеринг] Все страницы и sitemap.xml успешно сгенерированы!');
}

prerender().catch((err) => {
  console.error('[SSG Пререндеринг] Критическая ошибка:', err);
  process.exit(1);
});
