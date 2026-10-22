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

export const StepsSection: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-20 bg-dark-50 border-b border-dark-200">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-700 font-bold mb-2">
            Методология
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-dark-950 tracking-tight mb-3">
            Понятный процесс от диагностики до регулярных продаж
          </h2>
          <p className="text-dark-600 text-sm sm:text-base leading-relaxed">
            Никаких «размытых часов». Каждый этап решает конкретную бизнес-задачу.
          </p>
        </div>

        {/* 5 шагов процесса */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs mb-10">
          {steps.map((step, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-dark-200 shadow-clean-card space-y-2">
              <div className="text-accent-600 font-bold text-sm">{step.num}</div>
              <div className="font-sans text-dark-600 text-xs leading-relaxed">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Что получает бизнес на практике */}
        <div className="p-6 rounded-2xl bg-white border border-dark-200 shadow-clean-card">
          <div className="font-bold text-dark-900 text-sm mb-4 font-heading">
            Что получает ваш бизнес на практике:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans text-dark-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-600 shrink-0" />
              <span>Технически здоровый сайт без скрытых ошибок</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-600 shrink-0" />
              <span>Максимальный охват спроса вашей ниши</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-600 shrink-0" />
              <span>Привлекательные сниппеты с ценами и звездами</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent-600 shrink-0" />
              <span>Снижение стоимости привлечения клиента</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
