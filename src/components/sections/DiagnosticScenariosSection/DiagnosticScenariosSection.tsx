import React from 'react';
import { LucideIcon, AlertTriangle, Building2 } from 'lucide-react';
import { AnimatedSection } from '@/components/common';

/**
 * Интерфейс сценария диагностики (карточка симптома/проблемы)
 */
export interface DiagnosticScenarioItem {
  icon?: LucideIcon;
  title: string;
  desc: string;
  result: string;
  resultLabel?: string;
}

/**
 * Интерфейс блока «Кому подходит услуга»
 */
export interface WhoNeedsItem {
  title: string;
  desc: string;
}

/**
 * Свойства секции диагностических сценариев
 */
export interface DiagnosticScenariosSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: React.ReactNode;
  scenarios: DiagnosticScenarioItem[];
  defaultIcon?: LucideIcon;
  whoNeedsTitle?: string;
  whoNeedsIcon?: LucideIcon;
  whoNeeds?: WhoNeedsItem[];
}

/**
 * Универсальная секция «Симптомы и задачи / Когда необходим аудит».
 * Включает сетку карточек проблем с результатами решения,
 * а также опциональный блок целевой аудитории («Кому подходит услуга»).
 */
export const DiagnosticScenariosSection: React.FC<DiagnosticScenariosSectionProps> = ({
  id = 'diagnostic',
  eyebrow = 'Симптомы и задачи',
  title,
  subtitle,
  scenarios,
  defaultIcon = AlertTriangle,
  whoNeedsTitle,
  whoNeedsIcon: WhoNeedsIcon = Building2,
  whoNeeds,
}) => {
  return (
    <AnimatedSection variant="slide-up">
      <section
        id={id}
        className="py-16 md:py-20 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Заголовок секции */}
          <div className="max-w-3xl mb-12">
            {eyebrow && (
              <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
                {eyebrow}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {title}
            </h2>
            {subtitle && (
              <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {subtitle}
              </div>
            )}
          </div>

          {/* Сетка диагностических сценариев */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
              whoNeeds && whoNeeds.length > 0 ? 'mb-16' : ''
            }`}
          >
            {scenarios.map((sc, idx) => {
              const ScIcon = sc.icon || defaultIcon;
              const resultLabel = sc.resultLabel || 'Результат аудита:';

              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:-translate-y-1 hover:shadow-xl hover:border-growth-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-growth-500/10 text-growth-600 dark:text-growth-400 flex items-center justify-center mb-4">
                      <ScIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {sc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-sans">
                      {sc.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/70 dark:border-obsidian-800 text-xs font-medium text-growth-700 dark:text-growth-400">
                    <strong>{resultLabel}</strong> {sc.result}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Опциональный блок «Кому подходит услуга» */}
          {whoNeeds && whoNeeds.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-800">
              {whoNeedsTitle && (
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                  <WhoNeedsIcon className="w-5 h-5 text-growth-600 dark:text-growth-400" />
                  <span>{whoNeedsTitle}</span>
                </h3>
              )}
              <div
                className={`grid grid-cols-1 md:grid-cols-${Math.min(
                  whoNeeds.length,
                  3
                )} gap-6`}
              >
                {whoNeeds.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-obsidian-750"
                  >
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </AnimatedSection>
  );
};
