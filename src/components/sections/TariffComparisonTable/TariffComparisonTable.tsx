import React from 'react';

/**
 * Описание колонки сравнительной таблицы тарифов
 */
export interface TariffComparisonColumn {
  key: string;
  label: string;
  isHighlighted?: boolean;
  widthClass?: string;
}

/**
 * Свойства компонента таблицы сравнения тарифов
 */
export interface TariffComparisonTableProps {
  eyebrow?: string;
  title?: string;
  subtitle?: React.ReactNode;
  columns: TariffComparisonColumn[];
  rows: Array<{
    param: string;
    [key: string]: string | React.ReactNode;
  }>;
}

/**
 * Универсальный блок/таблица сравнения тарифов и форматов аудита.
 * Используется как расширенное пояснение (disclaimer) внутри секции TariffsSection
 * либо как самостоятельная сравнительная матрица.
 */
export const TariffComparisonTable: React.FC<TariffComparisonTableProps> = ({
  eyebrow = 'Детальное сопоставление форматов',
  title = 'Сравнение тарифов и характеристик аудита',
  subtitle,
  columns,
  rows,
}) => {
  return (
    <div className="mt-8 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 p-6 sm:p-8">
      <div className="mb-6">
        {eyebrow && (
          <span className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 font-semibold block mb-1">
            {eyebrow}
          </span>
        )}
        {title && (
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {title}
          </h3>
        )}
        {subtitle && (
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            {subtitle}
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[650px] font-sans text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-obsidian-800 bg-white/50 dark:bg-obsidian-850/50">
              <th className="p-4 font-mono font-semibold text-slate-900 dark:text-white w-1/4">
                Параметр / Тариф
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`p-4 font-mono font-semibold ${col.widthClass || ''} ${
                    col.isHighlighted
                      ? 'text-growth-700 dark:text-growth-400 bg-growth-500/10'
                      : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-obsidian-800">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-white/80 dark:hover:bg-obsidian-850/40 transition-colors"
              >
                <td className="p-4 font-semibold text-slate-900 dark:text-white align-top">
                  {row.param}
                </td>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`p-4 align-top ${
                      col.isHighlighted
                        ? 'text-slate-900 dark:text-white font-medium bg-growth-500/5 dark:bg-growth-500/10'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
