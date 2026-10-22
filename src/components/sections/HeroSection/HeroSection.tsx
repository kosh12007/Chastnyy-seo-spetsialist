import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, ArrowDown, User, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { DiscussionModal } from '@components/common/DiscussionModal';

/**
 * Главный экран сайта (Hero): спокойное, уверенное позиционирование частного SEO-эксперта.
 * Подчёркивает работу напрямую без аккаунт-менеджеров и стажеров.
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
    <section className="relative pt-10 pb-16 md:py-20 overflow-hidden bg-white border-b border-dark-100">
      {/* Деликатный фоновый свет */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-accent-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Левая колонка: Оффер и преимущества прямого контакта (8 колонок) */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Бейдж прямого контакта */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-50 border border-dark-200 text-xs text-dark-700 font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                <span>Вы работаете напрямую со мной — без аккаунт-менеджеров и стажеров</span>
              </div>

              {/* Главный заголовок */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-dark-950 tracking-tight leading-[1.12] mb-6">
                SEO для коммерческих сайтов и e-commerce.{' '}
                <span className="text-gradient-blue inline-block">
                  Лично веду проект от стратегии до внедрения
                </span>
              </h1>

              {/* Позиционирование и подход */}
              <p className="text-base sm:text-lg text-dark-600 leading-relaxed max-w-2xl mb-8 font-sans">
                Не продаю «отчёты со ссылками» и не раздуваю штат. Выстраиваю технический фундамент сайта, проектирую посадочные страницы под реальный коммерческий спрос и беру на себя ответственность за выполнение оговоренного плана.
              </p>

              {/* 3 ключевых факта доверия */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-xl font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-dark-50 border border-dark-200">
                  <div className="text-dark-900 font-bold text-base mb-0.5">12+ лет</div>
                  <div className="text-dark-500">в поисковой оптимизации</div>
                </div>
                <div className="p-3.5 rounded-xl bg-dark-50 border border-dark-200">
                  <div className="text-dark-900 font-bold text-base mb-0.5">180+ проектов</div>
                  <div className="text-dark-500">в e-com, B2B и услугах</div>
                </div>
                <div className="p-3.5 rounded-xl bg-dark-50 border border-dark-200">
                  <div className="text-dark-900 font-bold text-base mb-0.5">По договору</div>
                  <div className="text-dark-500">согласованные KPI и план</div>
                </div>
              </div>

              {/* CTA-кнопки */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('audit-form')}
                  className="px-6 py-3.5 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-semibold text-sm font-mono tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-accent-600/20 hover:-translate-y-0.5"
                >
                  <span>Получить предварительную оценку</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('cases')}
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-dark-50 text-dark-800 font-semibold text-sm border border-dark-200 transition-all flex items-center gap-2"
                >
                  <span>Посмотреть реальные кейсы</span>
                  <ArrowDown className="w-4 h-4 text-dark-400" />
                </button>
              </div>

              <div className="text-xs text-dark-500 font-mono flex items-center gap-2 mt-4">
                <ShieldCheck className="w-4 h-4 text-accent-600 shrink-0" />
                <span>Пришлите сайт — проведу предварительную оценку потенциала по открытым данным.</span>
              </div>
            </motion.div>
          </div>

          {/* Правая колонка: Лаконичная карточка специалиста (4 колонки) */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="p-6 rounded-2xl bg-dark-900 text-white border border-dark-800 shadow-xl space-y-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-dark-800 border-2 border-accent-500/40 overflow-hidden flex items-center justify-center shrink-0">
                  <User className="w-8 h-8 text-accent-400" />
                </div>
                <div>
                  <h2 className="font-bold text-white text-base font-heading">Михаил Павлов</h2>
                  <p className="text-xs text-dark-400 font-mono">Частный SEO-специалист</p>
                  <p className="text-xs text-accent-400 font-mono mt-0.5">Плательщик НПД (самозанятый)</p>
                </div>
              </div>

              <div className="border-t border-dark-800 pt-4 text-xs text-dark-300 space-y-2.5 font-sans leading-relaxed">
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                  <span>Погружаюсь в экономику и маржинальность ваших товарных групп или услуг.</span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                  <span>Прямой чат в Telegram без посредников — оперативные ответы в рабочее время.</span>
                </p>
                <p className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                  <span>Использую консервативные методы SEO без намеренного нарушения требований поисковых систем, снижая риски санкций.</span>
                </p>
              </div>

              <div className="border-t border-dark-800 pt-4 flex items-center justify-between text-xs font-mono text-dark-400">
                <span>Одновременно в работе:</span>
                <span className="text-white font-semibold">до 5–6 проектов</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <DiscussionModal isOpen={isDiscussionOpen} onClose={() => setIsDiscussionOpen(false)} />
    </section>
  );
};
