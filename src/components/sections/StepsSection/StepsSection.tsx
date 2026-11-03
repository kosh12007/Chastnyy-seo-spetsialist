import React from 'react';
import { CheckCircle } from 'lucide-react';

/**
 * Интерфейс отдельного этапа методологии
 */
export interface StepItem {
  num: string;
  title?: string;
  desc: string;
}

/**
 * Свойства компонента секции шагов процесса
 */
export interface StepsSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: React.ReactNode;
  steps?: StepItem[];
  columns?: 4 | 5 | 'auto';
  takeawaysTitle?: string;
  takeaways?: string[];
}

/**
 * Дефолтные шаги процесса ведения SEO-проекта
 */
const defaultSteps: StepItem[] = [
  {
    num: '01. Диагностика',
    desc: 'Аудит технических ошибок, проверка индексации, анализ коммерческих факторов и конкурентов в выдаче.',
  },
  {
    num: '02. Стратегия',
    desc: 'Сбор семантического спроса через Keys.so, проектирование структуры страниц с самым быстрым потенциалом возврата.',
  },
  {
    num: '03. Внедрение',
    desc: 'Устранение дублей, оптимизация скорости, внедрение микроразметки, составление ТЗ копирайтерам и программистам.',
  },
  {
    num: '04. Рост видимости',
    desc: 'Расширение охвата, точечная работа со сниппетами в ТОП-10, безопасное ссылочное усиление и карты (Яндекс/2ГИС).',
  },
  {
    num: '05. Контроль KPI',
    desc: 'Ежемесячный прозрачный отчёт: динамика позиций, целевой трафик, конверсии и план спринта на следующий месяц.',
  },
];

/**
 * Дефолтные преимущества («Что получает бизнес на практике»)
 */
const defaultTakeaways: string[] = [
  'Технически здоровый сайт без скрытых ошибок',
  'Максимальный охват спроса вашей ниши',
  'Привлекательные сниппеты с ценами и звездами',
  'Снижение стоимости привлечения клиента',
];

/**
 * Универсальная секция методологии («Как я работаю / Этапы взаимодействия»).
 * Поддерживает кастомный список шагов через props, автовыбор колонок сетки и адаптивную тему.
 */
export const StepsSection: React.FC<StepsSectionProps> = ({
  id = 'process',
  eyebrow = 'Методология',
  title = 'Понятный процесс от диагностики до регулярных продаж',
  subtitle = 'Никаких «размытых часов». Каждый этап решает конкретную бизнес-задачу.',
  steps = defaultSteps,
  columns = 'auto',
  takeawaysTitle = 'Что получает ваш бизнес на практике:',
  takeaways = defaultTakeaways,
}) => {
  // Вычисляем классы адаптивной сетки для шагов
  const getGridClasses = () => {
    if (columns === 4 || (columns === 'auto' && steps.length === 4)) {
      return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs';
    }
    return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs';
  };

  return (
    <section
      id={id}
      className="py-16 md:py-24 border-b border-slate-200 dark:border-obsidian-850 bg-slate-100/50 dark:bg-obsidian-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Заголовок секции */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
            {eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {subtitle}
            </p>
          )}
        </div>

        {/* Сетка шагов */}
        <div className={getGridClasses()}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-2 hover:border-slate-300 dark:hover:border-obsidian-750 shadow-sm transition-all"
            >
              <div className="text-growth-600 dark:text-growth-400 font-bold text-sm">
                {step.num}
              </div>
              {step.title && (
                <div className="font-bold text-slate-900 dark:text-white text-xs">
                  {step.title}
                </div>
              )}
              <div className="font-sans text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Блок результатов / преимуществ (если передан массив) */}
        {takeaways && takeaways.length > 0 && (
          <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750 shadow-sm transition-colors">
            {takeawaysTitle && (
              <div className="font-bold text-slate-900 dark:text-white text-sm mb-3 font-mono">
                {takeawaysTitle}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans text-slate-700 dark:text-slate-300">
              {takeaways.map((item, tIdx) => (
                <div key={tIdx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
