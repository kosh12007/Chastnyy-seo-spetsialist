import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { AnimatedSection } from '@components/common';
import { CasesSection, CTASection } from '@components/sections';
import { ShieldCheck } from 'lucide-react';

/**
 * Страница портфолио и кейсов эксперта.
 * Выдержана в строгой темной эстетике Dark Obsidian & Emerald Growth с подробным техническим разбором.
 */
export const CasesPage: React.FC = () => {
  const seo = getSeoData('cases');
  const ogMeta = generateOgMeta('/portfolio/', seo.title, seo.description);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${SITE_URL}/portfolio/`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        {/* Шапка страницы кейсов */}
        <section className="py-12 md:py-16 bg-obsidian-950 border-b border-obsidian-850 grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-400 font-mono text-xs uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Подтвержденная аналитика Яндекс и Google</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Кейсы и реальные результаты
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
              Примеры поискового продвижения в e-commerce, производственном B2B и сфере сложных услуг с соблюдением стандартов конфиденциальности (NDA).
            </p>
          </div>
        </section>

        {/* Секция кейсов с интерактивными модалками */}
        <AnimatedSection variant="slide-up">
          <CasesSection />
        </AnimatedSection>

        {/* Форма заявки на аудит */}
        <AnimatedSection variant="slide-up">
          <CTASection />
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
