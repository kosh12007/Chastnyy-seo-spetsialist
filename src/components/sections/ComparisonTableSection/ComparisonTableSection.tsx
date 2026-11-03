import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Свойства компонента сравнительной таблицы / матрицы выбора
 */
export interface MatrixRowItem {
  goal: string;
  service: string;
  slug: string;
  price: string;
  time: string;
  result: string;
}

export interface ComparisonTableSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: React.ReactNode;
  headers?: string[];
  rows: MatrixRowItem[];
}

/**
 * Универсальная секция сравнительной таблицы (матрица выбора услуги под задачу бизнеса).
 * Адаптивная горизонтальная прокрутка, темная/светлая тема, поддержка внешних и внутренних ссылок.
 */
export const ComparisonTableSection: React.FC<ComparisonTableSectionProps> = ({
  id = 'comparison-matrix',
  eyebrow = 'Быстрый выбор формата',
  title = 'Какой вид поискового аудита выбрать под вашу задачу',
  subtitle = 'Если проблема локализована, не обязательно переплачивать за полный пакет — выберите профильное направление.',
  headers = ['Задача бизнеса', 'Рекомендуемая услуга', 'Цена', 'Срок', 'Итоговый документ'],
  rows,
}) => {
  return (
    <section
      id={id}
      className="py-16 md:py-20 bg-slate-50 dark:bg-obsidian-900/30 border-b border-slate-200 dark:border-obsidian-850 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Заголовок секции */}
        <div className="max-w-3xl mb-10">
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

        {/* Адаптивная таблица с горизонтальным скроллом */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-obsidian-800 bg-white dark:bg-obsidian-900 shadow-sm">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
            <thead>
              <tr className="border-b border-slate-200 dark:border-obsidian-800 bg-slate-100/80 dark:bg-obsidian-850 text-slate-600 dark:text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                {headers.map((h, i) => (
                  <th key={i} className="py-3.5 px-4 sm:px-6 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-obsidian-800 text-slate-700 dark:text-slate-300">
              {rows.map((row, idx) => {
                const isAnchor = row.slug.startsWith('#');
                return (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50 dark:hover:bg-obsidian-850/50 transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6 leading-relaxed font-sans">{row.goal}</td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                      {isAnchor ? (
                        <a
                          href={row.slug}
                          className="text-growth-700 dark:text-growth-400 hover:underline font-semibold"
                        >
                          {row.service}
                        </a>
                      ) : (
                        <Link
                          to={row.slug}
                          className="text-growth-700 dark:text-growth-400 hover:underline font-semibold"
                        >
                          {row.service}
                        </Link>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono font-bold text-slate-900 dark:text-white whitespace-nowrap">
                      {row.price}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {row.time}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 dark:text-slate-300 font-sans">
                      {row.result}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
