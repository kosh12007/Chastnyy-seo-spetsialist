import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { TariffsSection, BudgetCalculatorSection, ModelComparisonSection } from '@components/sections';
import { AnimatedSection } from '@components/common';
import { ShieldCheck } from 'lucide-react';

/**
 * Страница тарифов и расчета стоимости поискового продвижения.
 * Полностью оформлена в премиальной темной теме Obsidian & Emerald Growth.
 */
export const PricingPage: React.FC = () => {
  const seo = getSeoData('pricing');
  const ogMeta = generateOgMeta('/ceny/', seo.title, seo.description);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${SITE_URL}/ceny/`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        {/* Шапка страницы тарифов */}
        <section className="py-12 md:py-16 bg-obsidian-950 border-b border-obsidian-850 grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-400 font-mono text-xs uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Фиксация условий в договоре с самозанятым</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Тарифы и стоимость SEO-продвижения
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
              Прозрачные ежемесячные бюджеты без скрытых доплат. Точная смета формируется после экспресс-оценки текущего состояния сайта и объема спроса.
            </p>
          </div>
        </section>

        {/* Сетка тарифов (Start, Growth, Scale) */}
        <AnimatedSection variant="slide-up">
          <TariffsSection />
        </AnimatedSection>

        {/* Интерактивный калькулятор бюджета */}
        <AnimatedSection variant="slide-up">
          <BudgetCalculatorSection />
        </AnimatedSection>

        {/* Сравнение моделей взаимодействия */}
        <AnimatedSection variant="slide-up">
          <ModelComparisonSection />
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
