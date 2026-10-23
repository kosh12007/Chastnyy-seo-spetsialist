import React from 'react';
import { ShoppingCart, Briefcase, Wrench, AlertCircle } from 'lucide-react';

/**
 * Секция селективности: "С кем я работаю наиболее эффективно".
 * Поддерживает адаптивную светлую тему и эстетику Dark Obsidian & Emerald Growth.
 */
export const SEOBasicsSection: React.FC = () => {
  return (
    <section id="fit" className="py-16 border-b border-slate-200 dark:border-obsidian-850 bg-slate-100/60 dark:bg-obsidian-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Заголовок */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
            Специализация и фокус
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            С какими сайтами я работаю наиболее эффективно
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-sans">
            Я не беру в работу все сайты. SEO работает только там, где есть реальный поисковый спрос и готовность развивать сайт.
          </p>
        </div>

        {/* Сетка аудиторий */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Сегмент 1: E-commerce */}
          <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-3 hover:border-slate-300 dark:hover:border-obsidian-750 shadow-sm transition-all">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-750 flex items-center justify-center text-growth-600 dark:text-growth-400">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Интернет-магазины (E-commerce)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Каталоги от 500 товаров. Оптимизация структуры, теговые страницы, фильтры, коммерческие сниппеты с ценами и разметка Schema.org.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono pt-2 border-t border-slate-200 dark:border-obsidian-800">
              Цель: рост заказов и снижение CPO
            </div>
          </div>

          {/* Сегмент 2: Услуги и B2B */}
          <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-3 hover:border-slate-300 dark:hover:border-obsidian-750 shadow-sm transition-all">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-750 flex items-center justify-center text-growth-600 dark:text-growth-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Сайты услуг и B2B компании</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Медицинские центры, производство, промышленность, юриспруденция. Проработка экспертности (E-E-A-T), региональное продвижение и конверсионные посадочные страницы.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono pt-2 border-t border-slate-200 dark:border-obsidian-800">
              Цель: входящие коммерческие заявки
            </div>
          </div>

          {/* Сегмент 3: Сложные задачи */}
          <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-3 hover:border-slate-300 dark:hover:border-obsidian-750 shadow-sm transition-all">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-750 flex items-center justify-center text-growth-600 dark:text-growth-400">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Сложные технические задачи</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Переезд сайтов на новый домен или CMS без потери органики, аудит после спам-атак, оптимизация скорости загрузки и индексации.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono pt-2 border-t border-slate-200 dark:border-obsidian-800">
              Цель: техническая чистота и восстановление
            </div>
          </div>

        </div>

        {/* Принцип честной селективности */}
        <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-obsidian-900 border border-emerald-300 dark:border-growth-500/30 flex items-center gap-3 text-xs font-mono text-emerald-950 dark:text-slate-300 shadow-sm transition-colors">
          <AlertCircle className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0" />
          <span>
            Я прямо откажусь от сотрудничества, если увижу, что в вашей нише SEO не окупится или бюджет целесообразнее направить в контекстную рекламу.
          </span>
        </div>

      </div>
    </section>
  );
};
