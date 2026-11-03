import React from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Интерфейс отдельного документа/результата
 */
export interface DeliverableItem {
  icon: LucideIcon;
  badge?: string;
  badgeType?: 'default' | 'accent';
  title: string;
  description: string;
}

/**
 * Свойства компонента итоговых документов
 */
export interface DeliverablesSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: React.ReactNode;
  items: DeliverableItem[];
}

/**
 * Универсальная секция «Итоговые документы» (Что вы получаете в результате аудита).
 * Карточки документов с иконками, бейджами и пояснениями.
 */
export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({
  id = 'deliverables',
  eyebrow = 'Итоговые документы',
  title = 'Что вы получаете, решив заказать аудит сайта',
  subtitle = 'По итогам проверки передаются структурированные рабочие документы с перечнем всех найденных ошибок, приоритетами и техническими заданиями для внедрения.',
  items,
}) => {
  return (
    <section
      id={id}
      className="py-16 md:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {eyebrow && (
            <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {subtitle}
            </div>
          )}
        </div>

        {/* Сетка карточек документов */}
        <div className={`grid grid-cols-1 ${items.length === 2 ? 'sm:grid-cols-2 max-w-4xl mx-auto' : 'sm:grid-cols-3'} gap-6`}>
          {items.map((item, idx) => {
            const Icon = item.icon;
            const isAccent = item.badgeType === 'accent';

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:border-growth-500/40 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  {item.badge && (
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-mono mb-2 ${
                        isAccent
                          ? 'bg-growth-500/15 text-growth-700 dark:text-growth-400 font-semibold'
                          : 'bg-slate-200 dark:bg-obsidian-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}

                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
