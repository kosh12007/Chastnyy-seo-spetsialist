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
    '/ceny/': [{ label: 'Цены' }],
    '/portfolio/': [{ label: 'Кейсы' }],
    '/otzyvy/': [{ label: 'Отзывы' }],
    '/obo-mne/': [{ label: 'Обо мне' }],
    '/kontakty/': [{ label: 'Контакты' }],
    '/blog/': [{ label: 'Блог' }],
  };

  // Для динамических страниц (услуги)
  const serviceMatch = location.pathname.match(/^\/uslugi\/(.+)\/$/);
  if (serviceMatch) {
    const service = services.find((s) => s.slug === serviceMatch[1]);
    if (service) {
      return (
        <nav className="container py-4" aria-label="Хлебные крошки">
          <ol className="flex items-center gap-2 text-sm text-dark-800 flex-wrap">
            <li>
              <Link to="/" className="flex items-center gap-1 hover:text-primary-600 transition-colors">
                <Home className="w-4 h-4" />
                Главная
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-dark-100" />
              <Link to="/uslugi/" className="hover:text-primary-600 transition-colors">Услуги</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-dark-100" />
              <span className="text-dark-900 font-medium">{service.title}</span>
            </li>
          </ol>
        </nav>
      );
    }
  }

  const breadcrumbs = breadcrumbMap[location.pathname] || [];
  if (location.pathname === '/') return null;

  return (
    <nav className="container py-4" aria-label="Хлебные крошки">
      <ol className="flex items-center gap-2 text-sm text-dark-800 flex-wrap">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-primary-600 transition-colors">
            <Home className="w-4 h-4" />
            Главная
          </Link>
        </li>
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-dark-100" />
            {item.href ? (
              <Link to={item.href} className="hover:text-primary-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-dark-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
