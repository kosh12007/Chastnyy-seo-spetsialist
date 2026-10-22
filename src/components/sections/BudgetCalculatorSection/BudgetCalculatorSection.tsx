import React, { useState } from 'react';

/**
 * Интерактивный калькулятор ориентира бюджета (без ложной псевдоточности).
 * Оформлен в теме Dark Obsidian & Emerald Growth точно как в mockup-v2.html.
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
    <section id="calculator" className="py-16 border-b border-obsidian-850 bg-obsidian-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Заголовок */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-growth-400 mb-2">
            Ориентировочная оценка
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            Калькулятор ориентира бюджета
          </h2>
          <p className="text-slate-300 text-sm font-sans leading-relaxed">
            SEO невозможно линейно рассчитать одной формулой. Этот расчет дает честный ориентир по вилке затрат перед детальной диагностикой.
          </p>
        </div>

        {/* Интерактивная карточка */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-2xl bg-obsidian-900 border border-obsidian-800">
          
          <div className="md:col-span-7 space-y-5 font-mono text-xs">
            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-2">
                1. Тип проекта
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCalcType('service')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    calcType === 'service'
                      ? 'bg-obsidian-800 border-growth-500/50 text-white'
                      : 'bg-obsidian-850 border-obsidian-750 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold">Сайт услуг / B2B</div>
                  <div className="text-[10px] text-slate-400">до 30–50 страниц</div>
                </button>
                <button
                  type="button"
                  onClick={() => setCalcType('ecom')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    calcType === 'ecom'
                      ? 'bg-obsidian-800 border-growth-500/50 text-white'
                      : 'bg-obsidian-850 border-obsidian-750 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold">Интернет-магазин</div>
                  <div className="text-[10px] text-slate-400">Каталог товаров</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-2">
                2. Регион продвижения
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCalcGeo('msk')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    calcGeo === 'msk'
                      ? 'bg-obsidian-800 border-growth-500/50 text-white'
                      : 'bg-obsidian-850 border-obsidian-750 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold">Москва и СПб</div>
                  <div className="text-[10px] text-amberGold-400">Высокая конкуренция</div>
                </button>
                <button
                  type="button"
                  onClick={() => setCalcGeo('regions')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    calcGeo === 'regions'
                      ? 'bg-obsidian-800 border-growth-500/50 text-white'
                      : 'bg-obsidian-850 border-obsidian-750 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold">Регионы РФ</div>
                  <div className="text-[10px] text-slate-400">Средняя конкуренция</div>
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 p-6 rounded-xl bg-obsidian-850 border border-obsidian-750 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase">Ориентир бюджета:</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              {getRangeText()} <span className="text-xs font-normal text-slate-400">/ мес</span>
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Точная стоимость определяется после экспресс-аудита: зависит от технического состояния сайта, глубины семантики и объема внедрения.
            </p>
            <a
              href="#audit-form"
              onClick={scrollToForm}
              className="inline-block w-full py-2.5 rounded-lg bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold font-mono text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-growth-950/40 cursor-pointer"
            >
              Запросить точную оценку
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
