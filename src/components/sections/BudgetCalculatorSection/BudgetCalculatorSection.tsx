import React, { useState } from 'react';

/**
 * Интерактивный калькулятор ориентира бюджета (без ложной псевдоточности).
 * Показывает вилку стоимости на основе типа сайта и региона.
 */
export const BudgetCalculatorSection: React.FC = () => {
  const [calcType, setCalcType] = useState<'service' | 'ecom'>('service');
  const [calcGeo, setCalcGeo] = useState<'msk' | 'regions'>('msk');

  const getRangeText = () => {
    if (calcType === 'service' && calcGeo === 'regions') {
      return '35 000 – 50 000 ₽';
    } else if (calcType === 'service' && calcGeo === 'msk') {
      return '50 000 – 70 000 ₽';
    } else if (calcType === 'ecom' && calcGeo === 'regions') {
      return '60 000 – 85 000 ₽';
    } else {
      return '75 000 – 110 000 ₽';
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('audit-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="calculator" className="py-16 md:py-20 bg-white border-b border-dark-200">
      <div className="container max-w-5xl">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-700 font-bold mb-2">
            Ориентировочная оценка
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-dark-950 tracking-tight mb-2">
            Калькулятор ориентира бюджета
          </h2>
          <p className="text-dark-600 text-sm leading-relaxed">
            SEO невозможно линейно рассчитать одной формулой. Этот расчет дает честный ориентир по вилке затрат перед детальной диагностикой.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-2xl bg-dark-50 border border-dark-200 shadow-clean-card">
          {/* Параметры */}
          <div className="md:col-span-7 space-y-5 font-mono text-xs">
            <div>
              <label className="block text-dark-700 uppercase tracking-wider mb-2 font-bold">
                1. Тип проекта
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCalcType('service')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    calcType === 'service'
                      ? 'bg-white border-accent-600 shadow-sm text-dark-950'
                      : 'bg-dark-100/60 border-dark-200 text-dark-500 hover:text-dark-800'
                  }`}
                >
                  <div className="font-bold">Сайт услуг / B2B</div>
                  <div className="text-[10px] text-dark-400">до 30–50 страниц</div>
                </button>
                <button
                  type="button"
                  onClick={() => setCalcType('ecom')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    calcType === 'ecom'
                      ? 'bg-white border-accent-600 shadow-sm text-dark-950'
                      : 'bg-dark-100/60 border-dark-200 text-dark-500 hover:text-dark-800'
                  }`}
                >
                  <div className="font-bold">Интернет-магазин</div>
                  <div className="text-[10px] text-dark-400">Каталог товаров</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-dark-700 uppercase tracking-wider mb-2 font-bold">
                2. Регион продвижения
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCalcGeo('msk')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    calcGeo === 'msk'
                      ? 'bg-white border-accent-600 shadow-sm text-dark-950'
                      : 'bg-dark-100/60 border-dark-200 text-dark-500 hover:text-dark-800'
                  }`}
                >
                  <div className="font-bold">Москва и СПб</div>
                  <div className="text-[10px] text-accent-700">Высокая конкуренция</div>
                </button>
                <button
                  type="button"
                  onClick={() => setCalcGeo('regions')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    calcGeo === 'regions'
                      ? 'bg-white border-accent-600 shadow-sm text-dark-950'
                      : 'bg-dark-100/60 border-dark-200 text-dark-500 hover:text-dark-800'
                  }`}
                >
                  <div className="font-bold">Регионы РФ</div>
                  <div className="text-[10px] text-dark-400">Средняя конкуренция</div>
                </button>
              </div>
            </div>
          </div>

          {/* Результат */}
          <div className="md:col-span-5 p-6 rounded-xl bg-white border border-dark-200 space-y-4 shadow-sm">
            <div className="text-xs font-mono text-dark-500 uppercase">Ориентир бюджета:</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-dark-950 font-mono tracking-tight">
              {getRangeText()} <span className="text-xs font-normal text-dark-500">/ мес</span>
            </div>
            <p className="text-xs text-dark-600 font-sans leading-relaxed">
              Точная стоимость определяется после экспресс-аудита: зависит от технического состояния сайта, глубины семантики и объема внедрения.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="w-full py-3 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-bold font-mono text-xs uppercase tracking-wider text-center transition-all shadow-sm"
            >
              Запросить точную оценку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

