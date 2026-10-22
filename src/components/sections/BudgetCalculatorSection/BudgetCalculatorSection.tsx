import React, { useState } from 'react';

/**
 * Интерактивный калькулятор ориентира бюджета (без ложной псевдоточности).
 * Поддерживает адаптивную светлую тему и ночную Dark Obsidian & Emerald Growth.
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

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('audit-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="calculator" className="py-16 border-b border-slate-200 dark:border-obsidian-850 bg-slate-100/50 dark:bg-obsidian-900/40 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Заголовок */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
            Ориентировочная оценка
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Калькулятор ориентира бюджета
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm font-sans leading-relaxed">
            SEO невозможно линейно рассчитать одной формулой. Этот расчет дает честный ориентир по вилке затрат перед детальной диагностикой.
          </p>
        </div>

        {/* Интерактивная карточка */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm transition-colors">
          
          <div className="md:col-span-7 space-y-5 font-mono text-xs">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                1. Тип проекта
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCalcType('service')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    calcType === 'service'
                      ? 'bg-slate-100 border-growth-500 text-slate-900 shadow-sm dark:bg-obsidian-800 dark:border-growth-500/50 dark:text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:bg-obsidian-850 dark:border-obsidian-750 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <div className="font-bold">Сайт услуг / B2B</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">до 30–50 страниц</div>
                </button>
                <button
                  type="button"
                  onClick={() => setCalcType('ecom')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    calcType === 'ecom'
                      ? 'bg-slate-100 border-growth-500 text-slate-900 shadow-sm dark:bg-obsidian-800 dark:border-growth-500/50 dark:text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:bg-obsidian-850 dark:border-obsidian-750 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <div className="font-bold">Интернет-магазин</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Каталог товаров</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                2. Регион продвижения
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCalcGeo('msk')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    calcGeo === 'msk'
                      ? 'bg-slate-100 border-growth-500 text-slate-900 shadow-sm dark:bg-obsidian-800 dark:border-growth-500/50 dark:text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:bg-obsidian-850 dark:border-obsidian-750 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <div className="font-bold">Москва и СПб</div>
                  <div className="text-[10px] text-amber-600 dark:text-amberGold-400 font-medium">Высокая конкуренция</div>
                </button>
                <button
                  type="button"
                  onClick={() => setCalcGeo('regions')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    calcGeo === 'regions'
                      ? 'bg-slate-100 border-growth-500 text-slate-900 shadow-sm dark:bg-obsidian-800 dark:border-growth-500/50 dark:text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:bg-obsidian-850 dark:border-obsidian-750 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <div className="font-bold">Регионы РФ</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Средняя конкуренция</div>
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 p-6 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750 space-y-4 shadow-sm transition-colors">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Ориентир бюджета:</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              {getRangeText()} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ мес</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Точная стоимость определяется после экспресс-аудита: зависит от технического состояния сайта, глубины семантики и объема внедрения.
            </p>
            <a
              href="#audit-form"
              onClick={scrollToForm}
              className="inline-block w-full py-2.5 rounded-lg bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold font-mono text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-growth-950/20 dark:shadow-growth-950/40 cursor-pointer"
            >
              Запросить точную оценку
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
