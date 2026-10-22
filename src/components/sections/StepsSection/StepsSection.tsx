import React from 'react';
import { Button } from '@ui/Button';

const steps = [
  { num: '01', title: 'Консультация', desc: 'Бесплатно обсуждаем ваш проект, цели и задачи' },
  { num: '02', title: 'Анализ сайта', desc: 'Технический аудит, позиции, трафик, конкуренты' },
  { num: '03', title: 'Расчёт стоимости', desc: 'Называю точную стоимость работ' },
  { num: '04', title: 'Договор и оплата', desc: 'Подписываем договор, вы оплачиваете' },
  { num: '05', title: 'Старт работ', desc: 'Начинаю работу над вашим сайтом' },
  { num: '06', title: 'Мониторинг', desc: 'Отслеживаю позиции, трафик, конверсии' },
  { num: '07', title: 'Отчётность', desc: 'Ежемесячные отчёты с позициями и заявками' },
];

export const StepsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Как я работаю</h2>
          <p className="text-lg text-dark-800 max-w-2xl mx-auto">
            Прозрачный процесс от заявки до результата за 7 шагов
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.slice(0, 4).map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary-200 mb-2">{step.num}</div>
                  <h3 className="text-lg font-bold font-heading mb-2">{step.title}</h3>
                  <p className="text-sm text-dark-800">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-300" />
                )}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-3xl mx-auto">
            {steps.slice(4).map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-primary-200 mb-2">{step.num}</div>
                <h3 className="text-lg font-bold font-heading mb-2">{step.title}</h3>
                <p className="text-sm text-dark-800">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="primary" size="lg">
            Начать с бесплатного аудита
          </Button>
        </div>
      </div>
    </section>
  );
};
