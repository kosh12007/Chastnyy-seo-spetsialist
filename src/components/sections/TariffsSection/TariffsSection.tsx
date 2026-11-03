import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, Shield, Star } from 'lucide-react';
import { contactInfo } from '@data/contactInfo';

/**
 * Интерфейс отдельного тарифного плана
 */
export interface TariffItem {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  price: string;
  duration?: string;
  description?: string;
  features: string[];
  link: string;
  linkText?: string;
  isInternalRoute?: boolean;
}

/**
 * Свойства компонента секции тарифов
 */
export interface TariffsSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: React.ReactNode;
  tariffs?: TariffItem[];
  columns?: 2 | 3 | 4 | 'auto';
  disclaimer?: React.ReactNode;
}

/**
 * Дефолтные тарифы на ежемесячное продвижение (используются на главной и странице цен)
 */
const defaultTariffs: TariffItem[] = [
  {
    id: 'start',
    name: 'SEO Start',
    badge: 'Для малого бизнеса',
    price: '35 000 ₽',
    duration: 'месяц',
    description: 'Сайты услуг, локальный бизнес до 30 страниц',
    features: [
      'Полный технический аудит и исправление базовых ошибок индексации',
      'Сбор ядра до 150 целевых коммерческих запросов',
      'Оптимизация метатегов и заголовков основных страниц',
      'Регистрация и оптимизация профиля в Яндекс.Бизнес и Картах',
      '15–20 часов работы специалиста в месяц',
    ],
    link: '#audit-form',
    linkText: 'Выбрать SEO Start',
    isInternalRoute: false,
  },
  {
    id: 'growth',
    name: 'SEO Growth',
    badge: 'Оптимальный рост',
    popular: true,
    price: '65 000 ₽',
    duration: 'месяц',
    description: 'Интернет-магазины до 3000 SKU, растущий бизнес',
    features: [
      'Глубокая семантика до 500+ кластеров (Keys.so)',
      'Проектирование и внедрение теговых страниц фильтрации',
      'Внедрение микроразметки Schema.org (Product, FAQ, Breadcrumbs)',
      'Анализ конверсии страниц и привлекательности сниппетов',
      '30–35 часов чистого времени эксперта в месяц',
    ],
    link: '#audit-form',
    linkText: 'Выбрать SEO Growth',
    isInternalRoute: false,
  },
  {
    id: 'scale',
    name: 'SEO Scale',
    badge: 'Для масштабных ресурсов',
    price: '110 000 ₽',
    duration: 'месяц',
    description: 'Крупные каталоги от 5000 SKU, порталы',
    features: [
      'Неограниченный пул семантики и работа с большими каталогами',
      'Прямой контроль внедрения доработок программистами на CMS',
      'Управление репутацией и SERM в поисковой выдаче',
      '50+ часов времени эксперта в месяц',
    ],
    link: '#audit-form',
    linkText: 'Выбрать SEO Scale',
    isInternalRoute: false,
  },
];

/**
 * Универсальная секция тарифных планов.
 * Поддерживает кастомные тарифы через props, автоматический выбор сетки колонок (2, 3 или 4)
 * и стандартные дефолтные тарифы с юридической оговоркой.
 */
export const TariffsSection: React.FC<TariffsSectionProps> = ({
  id = 'pricing',
  eyebrow = 'Прозрачные тарифы',
  title = 'Стоимость ежемесячного ведения проекта',
  subtitle = `Фиксированная стоимость без скрытых доплат. Официальный договор (${contactInfo.legalStatusShort}), чеки в приложении ФНС «Мой налог». Без НДС.`,
  tariffs = defaultTariffs,
  columns = 'auto',
  disclaimer,
}) => {
  // Вычисляем оптимальную сетку колонок в зависимости от количества тарифов
  const getGridClasses = () => {
    if (columns === 2 || (columns === 'auto' && tariffs.length === 2)) {
      return 'grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 items-stretch mb-10';
    }
    if (columns === 4 || (columns === 'auto' && tariffs.length >= 4)) {
      return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6 items-stretch mb-10';
    }
    return 'grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-8 items-stretch mb-10';
  };

  return (
    <section
      id={id}
      className="py-16 md:py-24 border-b border-slate-200 dark:border-obsidian-850 bg-slate-50 dark:bg-obsidian-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
            {eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {subtitle}
            </p>
          )}
        </div>

        {/* Сетка тарифов */}
        <div className={getGridClasses()}>
          {tariffs.map((tier) => {
            const isPopular = tier.popular;
            const buttonText = tier.linkText || `Выбрать ${tier.name}`;
            const isInternal =
              tier.isInternalRoute !== undefined
                ? tier.isInternalRoute
                : tier.link.startsWith('/') && !tier.link.startsWith('/#');

            return (
              <div
                key={tier.id}
                className={`p-6 rounded-2xl bg-white dark:bg-obsidian-900 border flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'border-2 border-growth-500 shadow-xl shadow-growth-950/10 dark:shadow-2xl dark:shadow-growth-950/40 relative sm:-translate-y-2'
                    : 'border-slate-200 dark:border-obsidian-800 hover:border-slate-300 dark:hover:border-obsidian-750 shadow-sm'
                }`}
              >
                {/* Бейдж популярного тарифа */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-growth-600 text-obsidian-950 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-obsidian-950" />
                    <span>Самый популярный выбор</span>
                  </div>
                )}

                <div>
                  {tier.badge && (
                    <div
                      className={`text-xs font-mono uppercase tracking-wider mb-2 ${
                        isPopular
                          ? 'text-growth-700 dark:text-growth-400 pt-2 sm:pt-0 font-semibold'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {tier.badge}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {tier.name}
                  </h3>

                  {tier.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
                      {tier.description}
                    </p>
                  )}

                  {/* Блок цены */}
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono mb-6">
                    {tier.price}{' '}
                    {tier.duration && (
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                        / {tier.duration}
                      </span>
                    )}
                  </div>

                  {/* Список включенных опций */}
                  <ul className="space-y-3 text-xs font-sans text-slate-700 dark:text-slate-300 mb-6">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Кнопка заказа / перехода */}
                {isInternal ? (
                  <Link
                    to={tier.link}
                    className={`w-full py-3 rounded-xl font-mono text-xs font-bold text-center tracking-wider transition-all uppercase block ${
                      isPopular
                        ? 'bg-growth-600 hover:bg-growth-500 text-obsidian-950 shadow-lg shadow-growth-950/20 dark:shadow-growth-950/60'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-obsidian-800 dark:hover:bg-obsidian-750 dark:text-white border border-slate-300 dark:border-obsidian-700'
                    }`}
                  >
                    {buttonText}
                  </Link>
                ) : (
                  <a
                    href={tier.link}
                    className={`w-full py-3 rounded-xl font-mono text-xs font-bold text-center tracking-wider transition-all uppercase block ${
                      isPopular
                        ? 'bg-growth-600 hover:bg-growth-500 text-obsidian-950 shadow-lg shadow-growth-950/20 dark:shadow-growth-950/60'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-obsidian-800 dark:hover:bg-obsidian-750 dark:text-white border border-slate-300 dark:border-obsidian-700'
                    }`}
                  >
                    {buttonText}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Дисклеймер / Юридическая оговорка */}
        {disclaimer !== undefined ? (
          disclaimer
        ) : (
          <div className="p-4 rounded-xl bg-white dark:bg-obsidian-900/80 border border-slate-200 dark:border-obsidian-800 text-xs font-mono text-slate-600 dark:text-slate-400 space-y-2 shadow-sm transition-colors">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-900 dark:text-slate-300 font-semibold">
                  Условия и договор:
                </span>{' '}
                Цены указаны для предварительного ознакомления. Итоговая стоимость определяется
                составом регламентных работ и фиксируется в договоре с самозанятым. На каждую оплату
                выдается официальный фискальный чек из приложения «Мой налог». Без НДС.
              </div>
            </div>
            <div className="flex items-start gap-2 pt-1 border-t border-slate-200 dark:border-obsidian-850">
              <Shield className="w-4 h-4 text-amber-500 dark:text-amberGold-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-900 dark:text-slate-300 font-semibold">
                  Позиция по гарантиям:
                </span>{' '}
                100% гарантировать конкретную строчку в поисковой выдаче невозможно: алгоритмы
                поисковых систем находятся вне контроля исполнителя. В договоре фиксируются объем
                регламентных задач, сроки, отчётность и согласованные KPI.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
