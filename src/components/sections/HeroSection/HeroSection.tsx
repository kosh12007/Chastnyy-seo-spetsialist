import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, ArrowDown, Check, Layers, Clock } from 'lucide-react';
import { DiscussionModal } from '@components/common/DiscussionModal';

/**
 * Главный экран сайта (Hero): фокусировка на ценности для бизнеса, конверсиях и прозрачном формате работы.
 * Поддерживает адаптивную светлую тему и эстетику Dark Obsidian & Emerald Growth.
 */
export const HeroSection: React.FC = () => {
  const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsDiscussionOpen(true);
    }
  };

  return (
    <section className="relative pt-12 pb-16 md:py-20 overflow-hidden grid-bg border-b border-slate-200 dark:border-obsidian-850 bg-slate-50 dark:bg-obsidian-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Левая колонка: Оффер и преимущества прямого формата работы (8 колонок) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Бейдж прямого контакта */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-obsidian-850 border border-slate-300 dark:border-obsidian-750 text-xs text-slate-700 dark:text-slate-300 font-mono transition-colors">
              <span className="w-2 h-2 rounded-full bg-growth-500 animate-pulse" />
              <span>Прямой контакт с экспертом — без аккаунт-менеджеров и стажеров</span>
            </div>

            {/* Главный заголовок */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {'Комплексное SEO-продвижение в Яндекс и Google. '}
              <span className="sm:block text-transparent bg-clip-text bg-gradient-to-r from-growth-600 via-emerald-600 to-teal-700 dark:from-growth-400 dark:via-emerald-300 dark:to-emerald-200">
                Системный рост видимости, целевого трафика и заявок
              </span>
            </h1>

            {/* Позиционирование и подход */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-sans">
              Оптимизирую техническую часть сайта, расширяю структуру под поисковый спрос и привлекаю целевую аудиторию из Яндекса и Google. Проект ведется по понятному плану: вы всегда видите список задач на месяц, выполненные работы и реальный рост позиций.
            </p>

            {/* 3 ключевых факта доверия */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs max-w-xl">
              <div className="p-3.5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm dark:shadow-none">
                <div className="text-slate-900 dark:text-white font-bold text-base mb-0.5">12+ лет</div>
                <div className="text-slate-500 dark:text-slate-400">в поисковой оптимизации</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm dark:shadow-none">
                <div className="text-slate-900 dark:text-white font-bold text-base mb-0.5">120+ проектов</div>
                <div className="text-slate-500 dark:text-slate-400">в e-com, B2B, услугах и медиа</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm dark:shadow-none">
                <div className="text-slate-900 dark:text-white font-bold text-base mb-0.5">По договору</div>
                <div className="text-slate-500 dark:text-slate-400">фиксированный план работ и прозрачная отчетность</div>
              </div>
            </div>

            {/* CTA-кнопки */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#audit-form"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('audit-form');
                }}
                className="px-6 py-3.5 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-sm font-mono tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-growth-950/20 dark:shadow-growth-950/40 cursor-pointer"
              >
                <span>Получить предварительную оценку</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cases"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('cases');
                }}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 dark:bg-obsidian-850 dark:hover:bg-obsidian-800 dark:text-slate-200 font-semibold text-sm border border-slate-300 dark:border-obsidian-750 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Посмотреть реальные кейсы</span>
                <ArrowDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              </a>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0" />
              <span>Пришлите сайт — проведу предварительную оценку потенциала по открытым данным.</span>
            </div>
          </div>

          {/* Правая колонка: Карточка стандартов работы и формата сотрудничества (4 колонки) */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-xl space-y-5 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/30 flex items-center justify-center shrink-0 text-growth-600 dark:text-growth-400">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Формат ведения проекта</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Глубокое погружение вместо потока</p>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-obsidian-850 pt-4 text-xs text-slate-700 dark:text-slate-300 space-y-3 font-sans leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-semibold">Фокус на окупаемости:</strong> приоритетное развитие страниц и разделов, которые дают максимальную отдачу вашему бизнесу.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-semibold">Прямая связь:</strong> выделенный рабочий чат в Telegram, регулярные синхронизации и быстрые ответы без посредников.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-semibold">Безопасность сайта:</strong> консервативные белые методы оптимизации с защитой от алгоритмических фильтров поисковиков.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-semibold">Контроль внедрений:</strong> проверка каждого технического задания перед выкаткой изменений на боевой сайт.
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-obsidian-800 pt-4 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400" />
                  Лимит нагрузки:
                </span>
                <span className="text-growth-700 dark:text-growth-400 font-bold bg-growth-500/10 px-2.5 py-1 rounded-md border border-growth-500/20">
                  до 5–6 проектов
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <DiscussionModal isOpen={isDiscussionOpen} onClose={() => setIsDiscussionOpen(false)} />
    </section>
  );
};
