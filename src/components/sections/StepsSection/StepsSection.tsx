import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
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
 * Секция методологии: "Как я работаю (5 шагов процесса)".
 * Полностью выдержана в темной эстетике Dark Obsidian & Emerald Growth из mockup-v2.html.
 */
export const StepsSection: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 border-b border-obsidian-850 bg-obsidian-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Заголовок секции */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-growth-400 mb-2">
            Методология
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Понятный процесс от диагностики до регулярных продаж
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Никаких «размытых часов». Каждый этап решает конкретную бизнес-задачу.
          </p>
        </div>

        {/* 5 шагов процесса */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-obsidian-900 border border-obsidian-800 space-y-2 hover:border-obsidian-750 transition-colors"
            >
              <div className="text-growth-400 font-bold text-sm">{step.num}</div>
              <div className="font-sans text-slate-300 text-xs leading-relaxed">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Что получает бизнес на практике */}
        <div className="mt-8 p-6 rounded-2xl bg-obsidian-850 border border-obsidian-750">
          <div className="font-bold text-white text-sm mb-3 font-mono">
            Что получает ваш бизнес на практике:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-growth-400 shrink-0" />
              <span>Технически здоровый сайт без скрытых ошибок</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-growth-400 shrink-0" />
              <span>Максимальный охват спроса вашей ниши</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-growth-400 shrink-0" />
              <span>Привлекательные сниппеты с ценами и звездами</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-growth-400 shrink-0" />
              <span>Снижение стоимости привлечения клиента</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
