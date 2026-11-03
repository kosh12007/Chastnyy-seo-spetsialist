import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/common';

/**
 * Пункт регламента/чек-листа
 */
export interface ChecklistSubItem {
  name: string;
  desc: string;
}

/**
 * Группа пунктов регламента
 */
export interface ChecklistGroupItem {
  groupName: string;
  items: ChecklistSubItem[];
}

/**
 * Свойства секции групп чек-листа
 */
export interface ChecklistGroupsSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: React.ReactNode;
  groups: ChecklistGroupItem[];
  columns?: 2 | 3 | 'auto';
}

/**
 * Универсальная секция «Регламент аудита / Группы чек-листа».
 * Выводит 2 или 3 колонки с карточками категорий и детальным списком проверяемых пунктов с иконками.
 */
export const ChecklistGroupsSection: React.FC<ChecklistGroupsSectionProps> = ({
  id = 'checklist',
  eyebrow = 'Регламент аудита',
  title,
  subtitle,
  groups,
  columns = 'auto',
}) => {
  // Определение количества колонок
  const colCount =
    columns === 'auto' ? (groups.length === 2 || groups.length === 4 ? 2 : 3) : columns;
  const gridColClass = colCount === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <AnimatedSection variant="slide-up">
      <section
        id={id}
        className="py-16 md:py-24 bg-slate-50 dark:bg-obsidian-900/40 border-b border-slate-200 dark:border-obsidian-850 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Заголовок секции */}
          <div className="max-w-3xl mb-14">
            {eyebrow && (
              <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
                {eyebrow}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {title}
            </h2>
            {subtitle && (
              <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {subtitle}
              </div>
            )}
          </div>

          {/* Сетка групп чек-листа */}
          <div className={`grid grid-cols-1 ${gridColClass} gap-8`}>
            {groups.map((group, gIdx) => (
              <div
                key={gIdx}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-200/70 dark:border-obsidian-800">
                    {group.groupName}
                  </h3>
                  <div className="space-y-4">
                    {group.items.map((it, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm block mb-0.5">
                            {it.name}
                          </span>
                          <span className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed block font-sans">
                            {it.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};
