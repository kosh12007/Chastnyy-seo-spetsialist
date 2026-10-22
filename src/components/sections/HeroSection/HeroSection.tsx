import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, ArrowDown, User, Check } from 'lucide-react';
import { DiscussionModal } from '@components/common/DiscussionModal';

/**
 * Главный экран сайта (Hero): спокойное, уверенное позиционирование частного SEO-эксперта.
 * Полностью выдержан в темной теме Dark Obsidian & Emerald Growth из mockup-v2.
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
    <section className="relative pt-12 pb-16 md:py-20 overflow-hidden grid-bg border-b border-obsidian-850 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Левая колонка: Оффер и преимущества прямого контакта (8 колонок) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Бейдж прямого контакта */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-850 border border-obsidian-750 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-growth-500 animate-pulse" />
              <span>Вы работаете напрямую со мной — без аккаунт-менеджеров и стажеров</span>
            </div>

            {/* Главный заголовок */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              SEO для коммерческих сайтов и e-commerce.{' '}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-400 to-emerald-200">
                Лично веду проект от стратегии до внедрения
              </span>
            </h1>

            {/* Позиционирование и подход */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              Не продаю «отчёты со ссылками» и не раздуваю штат. Выстраиваю технический фундамент сайта, проектирую посадочные страницы под реальный коммерческий спрос и беру на себя ответственность за выполнение оговоренного плана.
            </p>

            {/* 3 ключевых факта доверия */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs max-w-xl">
              <div className="p-3.5 rounded-xl bg-obsidian-900 border border-obsidian-800">
                <div className="text-white font-bold text-base mb-0.5">12+ лет</div>
                <div className="text-slate-400">в поисковой оптимизации</div>
              </div>
              <div className="p-3.5 rounded-xl bg-obsidian-900 border border-obsidian-800">
                <div className="text-white font-bold text-base mb-0.5">180+ проектов</div>
                <div className="text-slate-400">в e-com, B2B и услугах</div>
              </div>
              <div className="p-3.5 rounded-xl bg-obsidian-900 border border-obsidian-800">
                <div className="text-white font-bold text-base mb-0.5">По договору</div>
                <div className="text-slate-400">согласованные KPI и план</div>
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
                className="px-6 py-3.5 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-sm font-mono tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-growth-950/40 cursor-pointer"
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
                className="px-5 py-3.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 font-semibold text-sm border border-obsidian-750 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Посмотреть реальные кейсы</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="text-xs text-slate-400 font-mono flex items-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4 text-growth-400 shrink-0" />
              <span>Пришлите сайт — проведу предварительную оценку потенциала по открытым данным.</span>
            </div>
          </div>

          {/* Правая колонка: Карточка профиля эксперта (4 колонки) */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-obsidian-900 border border-obsidian-800 shadow-xl space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-obsidian-850 border-2 border-growth-500/30 overflow-hidden flex items-center justify-center shrink-0">
                  <User className="w-8 h-8 text-growth-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Михаил Павлов</h3>
                  <p className="text-xs text-slate-400 font-mono">Частный SEO-специалист</p>
                  <p className="text-xs text-growth-400 font-mono mt-0.5">Плательщик НПД (самозанятый)</p>
                </div>
              </div>

              <div className="border-t border-obsidian-800 pt-4 text-xs text-slate-300 space-y-2.5 font-sans leading-relaxed">
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Погружаюсь в экономику и маржинальность ваших товарных групп или услуг.</span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Прямой чат в Telegram без посредников — оперативные ответы в рабочее время.</span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <span>Использую консервативные методы SEO без намеренного нарушения требований поисковых систем, снижая риски санкций.</span>
                </p>
              </div>

              <div className="border-t border-obsidian-800 pt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Одновременно в работе:</span>
                <span className="text-white font-semibold">до 5–6 проектов</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <DiscussionModal isOpen={isDiscussionOpen} onClose={() => setIsDiscussionOpen(false)} />
    </section>
  );
};
