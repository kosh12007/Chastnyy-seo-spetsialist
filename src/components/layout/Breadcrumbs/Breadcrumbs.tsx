import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { services } from '@data/index';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    '/uslugi/': [{ label: 'Услуги' }],
    '/ceny/': [{ label: 'Тарифы' }],
    '/portfolio/': [{ label: 'Кейсы' }],
    '/otzyvy/': [{ label: 'Отзывы' }],
    '/obo-mne/': [{ label: 'Обо мне' }],
    '/kontakty/': [{ label: 'Контакты' }],
    '/blog/': [{ label: 'Блог' }],
    '/rekvizity/': [{ label: 'Реквизиты и условия для юрлиц' }],
    '/politika-konfidentsialnosti/': [{ label: 'Политика конфиденциальности' }],
    '/soglasie-opd/': [{ label: 'Согласие на обработку данных' }],
  };

  // Не показываем хлебные крошки на главной странице
  if (location.pathname === '/') return null;

  // Динамические страницы услуг
  const serviceMatch = location.pathname.match(/^\/uslugi\/(.+)\/$/);
  if (serviceMatch) {
    const service = services.find((s) => s.slug === serviceMatch[1]);
    if (service) {
      return (
        <div className="border-b border-slate-200 bg-slate-100/60 dark:border-obsidian-850/60 dark:bg-obsidian-950/40 transition-colors">
          <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3" aria-label="Хлебные крошки">
            <ol className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 flex-wrap">
              <li>
                <Link to="/" className="flex items-center gap-1 hover:text-growth-600 dark:hover:text-growth-400 transition-colors">
                  <Home className="w-3.5 h-3.5" />
                  <span>Главная</span>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-obsidian-700" />
                <Link to="/uslugi/" className="hover:text-growth-600 dark:hover:text-growth-400 transition-colors">Услуги</Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-obsidian-700" />
                <span className="text-slate-900 dark:text-slate-200 font-medium">{service.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      );
    }
  }

  const breadcrumbs = breadcrumbMap[location.pathname] || [];
  if (breadcrumbs.length === 0) return null;

  return (
    <div className="border-b border-slate-200 bg-slate-100/60 dark:border-obsidian-850/60 dark:bg-obsidian-950/40 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3" aria-label="Хлебные крошки">
        <ol className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 flex-wrap">
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-growth-600 dark:hover:text-growth-400 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Главная</span>
            </Link>
          </li>
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-obsidian-700" />
              {item.href ? (
                <Link to={item.href} className="hover:text-growth-600 dark:hover:text-growth-400 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900 dark:text-slate-200 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
