import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

/**
 * Описание промо-баннера хабовой услуги
 */
export interface HubCtaBanner {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

/**
 * Описание отдельной сопутствующей услуги для перелинковки
 */
export interface RelatedServiceItem {
  slug: string;
  title: string;
  price: string;
  desc: string;
  anchor: string;
  icon: LucideIcon;
}

/**
 * Свойства компонента перелинковки / связанных услуг
 */
export interface RelatedServicesSectionProps {
  id?: string;
  ctaBanner?: HubCtaBanner;
  title?: string;
  services: RelatedServiceItem[];
}

/**
 * Универсальная секция перелинковки и связанных услуг.
 * Включает промо-блок перехода на хабовый раздел и сетку связанных направлений.
 */
export const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({
  id = 'related-services',
  ctaBanner,
  title = 'Другие направления аудита сайта:',
  services,
}) => {
  return (
    <section
      id={id}
      className="py-16 md:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Баннер перехода к главному комплексному аудиту */}
        {ctaBanner && (
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-obsidian-900 to-obsidian-850 border border-growth-500/30 text-white mb-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-black/40">
            <div className="max-w-2xl">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-growth-500/20 text-growth-300 border border-growth-500/30 mb-3 inline-block">
                {ctaBanner.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
                {ctaBanner.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {ctaBanner.description}
              </p>
            </div>
            <Link
              to={ctaBanner.buttonLink}
              className="px-6 py-4 rounded-xl bg-growth-500 hover:bg-growth-400 text-obsidian-950 font-bold text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 shadow-lg shadow-growth-500/20 shrink-0"
            >
              <span>{ctaBanner.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Сетка связанных направлений */}
        {services && services.length > 0 && (
          <div>
            {title && (
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {title}
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((rel) => {
                const RelIcon = rel.icon;
                const linkHref = rel.slug.startsWith('/')
                  ? rel.slug
                  : `/uslugi/seo-audit/${rel.slug}/`;

                return (
                  <Link
                    key={rel.slug}
                    to={linkHref}
                    className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-growth-500/10 text-growth-600 dark:text-growth-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <RelIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                          {rel.price}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-growth-600 dark:group-hover:text-growth-400 transition-colors">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {rel.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-obsidian-800 flex items-center justify-between text-xs font-semibold text-growth-600 dark:text-growth-400">
                      <span>{rel.anchor}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
