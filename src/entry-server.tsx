import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { ThemeProvider } from '@/context/ThemeContext';
import { SITE_URL } from '@/utils/constants';
import { AppRoutes } from './App';
import { services, cases } from '@/data';
import { blogArticles } from '@/data/blog';

export interface SitemapEntry {
  /** Относительный маршрут страницы (например, '/uslugi/') */
  path: string;
  /** Частота обновления для sitemap.xml */
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  /** Приоритет страницы (от 0.1 до 1.0) */
  priority: string;
  /** Дата последнего изменения в формате YYYY-MM-DD */
  lastmod?: string;
  /** Включать ли страницу в sitemap.xml (false для закрытых в robots.txt страниц) */
  indexable: boolean;
  /** Путь к исходному файлу для автоматического вычисления lastmod по дате изменения файла */
  sourceFile?: string;
}

/**
 * Единый реестр всех маршрутов сайта.
 * Автоматически подтягивает статические разделы, услуги, кейсы и статьи блога.
 * При добавлении или удалении услуги, кейса, статьи или маршрута
 * автоматически обновляются и пререндер (SSG), и карта сайта (sitemap.xml).
 */
export function getSiteRoutes(customStaticPaths?: string[]): SitemapEntry[] {
  const baseStaticRoutes: SitemapEntry[] = [
    {
      path: '/',
      changefreq: 'weekly',
      priority: '1.0',
      indexable: true,
      sourceFile: 'src/pages/HomePage/HomePage.tsx',
    },
    {
      path: '/uslugi/',
      changefreq: 'monthly',
      priority: '0.9',
      indexable: true,
      sourceFile: 'src/pages/ServicesPage/ServicesPage.tsx',
    },
    ...services.map((s, idx): SitemapEntry => ({
      path: `/uslugi/${s.slug}/`,
      changefreq: 'monthly',
      priority: idx === 0 ? '0.9' : '0.8',
      indexable: true,
      sourceFile: `src/data/services/${s.slug}.ts`,
    })),
    {
      path: '/ceny/',
      changefreq: 'monthly',
      priority: '0.8',
      indexable: true,
      sourceFile: 'src/pages/PricingPage/PricingPage.tsx',
    },
    {
      path: '/portfolio/',
      changefreq: 'monthly',
      priority: '0.8',
      indexable: true,
      sourceFile: 'src/pages/CasesPage/CasesPage.tsx',
    },
    ...cases.map((c): SitemapEntry => ({
      path: `/portfolio/${c.slug}/`,
      changefreq: 'monthly',
      priority: '0.7',
      indexable: true,
      sourceFile: 'src/data/index.ts',
    })),
    {
      path: '/otzyvy/',
      changefreq: 'monthly',
      priority: '0.7',
      indexable: true,
      sourceFile: 'src/pages/ReviewsPage/ReviewsPage.tsx',
    },
    {
      path: '/obo-mne/',
      changefreq: 'monthly',
      priority: '0.7',
      indexable: true,
      sourceFile: 'src/pages/AboutPage/AboutPage.tsx',
    },
    {
      path: '/kontakty/',
      changefreq: 'monthly',
      priority: '0.8',
      indexable: true,
      sourceFile: 'src/pages/ContactsPage/ContactsPage.tsx',
    },
    {
      path: '/blog/',
      changefreq: 'weekly',
      priority: '0.7',
      indexable: true,
      sourceFile: 'src/pages/BlogPage/BlogPage.tsx',
    },
    ...blogArticles.map((a): SitemapEntry => ({
      path: `/blog/${a.slug}/`,
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: a.date,
      indexable: true,
      sourceFile: `src/data/blog/${a.slug}.ts`,
    })),
    {
      path: '/rekvizity/',
      changefreq: 'monthly',
      priority: '0.5',
      indexable: true,
      sourceFile: 'src/pages/RequisitesPage/RequisitesPage.tsx',
    },
    // Технические юридические страницы (закрыты в robots.txt, пререндерятся, но не входят в sitemap.xml)
    {
      path: '/politika-konfidentsialnosti/',
      changefreq: 'yearly',
      priority: '0.3',
      indexable: false,
      sourceFile: 'src/pages/PrivacyPage/PrivacyPage.tsx',
    },
    {
      path: '/soglasie-opd/',
      changefreq: 'yearly',
      priority: '0.3',
      indexable: false,
      sourceFile: 'src/pages/PrivacyPage/PrivacyPage.tsx',
    },
  ];

  // Если переданы актуальные статические пути из App.tsx, синхронизируем (добавляем новые и убираем удалённые)
  if (customStaticPaths && customStaticPaths.length > 0) {
    const allowedStatic = new Set(customStaticPaths);
    const filtered = baseStaticRoutes.filter((entry) => {
      // Динамические маршруты (/uslugi/:slug/, /portfolio/:slug/, /blog/:slug/) оставляем, если их родительский роут есть в App.tsx
      if (entry.path.startsWith('/uslugi/') && entry.path !== '/uslugi/') {
        return allowedStatic.has('/uslugi/:slug/');
      }
      if (entry.path.startsWith('/portfolio/') && entry.path !== '/portfolio/') {
        return allowedStatic.has('/portfolio/:slug/');
      }
      if (entry.path.startsWith('/blog/') && entry.path !== '/blog/') {
        return allowedStatic.has('/blog/:slug/');
      }
      return allowedStatic.has(entry.path);
    });

    // Если в App.tsx добавили новый статический Route, которого ещё нет в списке — автоматически включаем его
    const existingPaths = new Set(filtered.map((e) => e.path));
    for (const routePath of customStaticPaths) {
      if (
        !routePath.includes(':') &&
        !routePath.includes('*') &&
        !existingPaths.has(routePath)
      ) {
        filtered.push({
          path: routePath,
          changefreq: 'monthly',
          priority: '0.7',
          indexable: true,
          sourceFile: 'src/App.tsx',
        });
      }
    }

    return filtered;
  }

  return baseStaticRoutes;
}

/**
 * Полный список маршрутов сайта для SSG-пререндеринга при сборке (npm run build).
 */
export const PRERENDER_ROUTES: string[] = getSiteRoutes().map((r) => r.path);

/**
 * Генерирует содержимое файла sitemap.xml с обязательным тегом <lastmod>YYYY-MM-DD</lastmod>.
 */
export function generateSitemapXml(
  options?: {
    siteUrl?: string;
    staticPathsFromApp?: string[];
    resolveLastMod?: (entry: SitemapEntry) => string;
  }
): string {
  const rawSiteUrl = (options?.siteUrl || SITE_URL || 'http://localhost:8085').replace(/\/+$/, '');
  const fallbackDate = new Date().toISOString().split('T')[0];
  const entries = getSiteRoutes(options?.staticPathsFromApp).filter((e) => e.indexable);

  const urlBlocks = entries.map((entry) => {
    const loc = `${rawSiteUrl}${entry.path}`;
    const lastmod =
      (options?.resolveLastMod && options.resolveLastMod(entry)) ||
      entry.lastmod ||
      fallbackDate;

    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority}</priority>`,
      '  </url>',
    ].join('\n');
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlBlocks,
    '</urlset>',
    '',
  ].join('\n');
}

export interface SSRRenderResult {
  appHtml: string;
  headTags: string;
}

/**
 * Серверный рендеринг (SSR / SSG) приложения для указанного URL-адреса.
 * Возвращает сгенерированный HTML-код внутри #root и мета-теги для <head>.
 */
export function render(url: string): SSRRenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const appHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <ThemeProvider>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <AppRoutes />
          </StaticRouter>
        </HelmetProvider>
      </ThemeProvider>
    </React.StrictMode>
  );

  const { helmet } = helmetContext;
  const headTags = helmet
    ? [
        helmet.title.toString(),
        helmet.priority?.toString() || '',
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join('\n    ')
    : '';

  return { appHtml, headTags };
}

/**
 * Внедряет отрендеренный HTML-код приложения и мета-теги Helmet в шаблон index.html.
 * Удаляет дублирующиеся дефолтные <title> и <meta name="description">, если страница задала свои.
 */
export function injectSSRHtml(templateHtml: string, appHtml: string, headTags: string): string {
  let html = templateHtml;

  if (headTags) {
    // Если Helmet сгенерировал <title>, убираем дефолтный <title> из шаблона index.html
    if (headTags.includes('<title')) {
      html = html.replace(/<title>[\s\S]*?<\/title>/i, '');
    }
    // Если Helmet сгенерировал description, убираем дефолтный <meta name="description">
    if (headTags.includes('name="description"')) {
      html = html.replace(/<meta\s+name="description"[^>]*>/i, '');
    }
    html = html.replace('</head>', `    ${headTags}\n  </head>`);
  }

  // Вставляем сгенерированную разметку внутрь <div id="root"></div>
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  return html;
}
