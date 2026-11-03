import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, LucideIcon } from 'lucide-react';
import { AnimatedSection } from '@/components/common';

/**
 * Свойства компонента SubServiceHero
 */
export interface SubServiceHeroProps {
  /** Название родительского раздела в хлебных крошках */
  breadcrumbParentTitle?: string;
  /** Ссылка на родительский раздел */
  breadcrumbParentUrl?: string;
  /** Название текущей под-услуги в хлебных крошках */
  breadcrumbCurrent: string;
  /** Иконка для плашки-бейджа */
  badgeIcon?: LucideIcon;
  /** Текст плашки-бейджа */
  badgeText: string;
  /** Основной заголовок (без выделенной части) */
  title: string;
  /** Выделенная градиентом часть заголовка */
  titleHighlight?: string;
  /** Подробное описание услуги */
  description: React.ReactNode;
  /** Блок специального предложения (баннер скидки/зачета) */
  specialOfferBanner?: React.ReactNode;
  /** Отображаемая стоимость (например, "10 000 – 20 000 ₽") */
  price: string;
  /** Срок выполнения (например, "1–3 рабочих дня") */
  duration: string;
  /** Якорь для кнопки перехода к тарифам */
  pricingAnchor?: string;
  /** Текст кнопки перехода к тарифам */
  pricingButtonText?: string;
}

/**
 * Универсальный первый экран (Hero) для детальных страниц подуслуг.
 * Включает хлебные крошки, бейдж с анимацией пульса, заголовок с градиентом,
 * текстовое описание, плашку спецпредложения и карточки стоимости/сроков с кнопкой.
 */
export const SubServiceHero: React.FC<SubServiceHeroProps> = ({
  breadcrumbParentTitle = 'Комплексный SEO-аудит (все виды)',
  breadcrumbParentUrl = '/uslugi/seo-audit/',
  breadcrumbCurrent,
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  titleHighlight,
  description,
  specialOfferBanner,
  price,
  duration,
  pricingAnchor = '#pricing-tiers',
  pricingButtonText = 'Выбрать тариф по объему',
}) => {
  return (
    <AnimatedSection variant="fade" duration={0.8}>
      <section className="py-12 md:py-20 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 grid-bg transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-4xl">
            {/* Хлебные крошки */}
            <div className="flex items-center gap-4 mb-6">
              <Link
                to={breadcrumbParentUrl}
                className="inline-flex items-center gap-2 text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 text-xs font-mono transition-colors font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{breadcrumbParentTitle}</span>
              </Link>
              <span className="text-slate-300 dark:text-obsidian-700">/</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {breadcrumbCurrent}
              </span>
            </div>

            {/* Плашка с бейджем и преимуществами */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 text-xs font-mono font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-growth-500 animate-pulse shrink-0" />
              {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-growth-500" />}
              <span>{badgeText}</span>
            </div>

            {/* Главный заголовок H1 с акцентным градиентом */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              {title}{' '}
              {titleHighlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-600 to-emerald-400">
                  {titleHighlight}
                </span>
              )}
            </h1>

            {/* Вводное описание */}
            <div className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-sans leading-relaxed mb-6 max-w-3xl">
              {description}
            </div>

            {/* Опциональный баннер специального предложения */}
            {specialOfferBanner}

            {/* Метрики стоимости, сроков и целевая кнопка */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-200 dark:border-obsidian-800">
              <div className="p-3.5 px-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-0.5">
                  Стоимость
                </span>
                <span className="text-xl font-bold text-slate-900 dark:text-white font-mono">
                  {price}
                </span>
              </div>
              <div className="p-3.5 px-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-0.5">
                  Срок сдачи
                </span>
                <span className="text-xl font-bold text-growth-600 dark:text-growth-400 font-mono">
                  {duration}
                </span>
              </div>
              <a
                href={pricingAnchor}
                className="px-6 py-4 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-growth-600/20 font-mono uppercase tracking-wider"
              >
                <span>{pricingButtonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};
