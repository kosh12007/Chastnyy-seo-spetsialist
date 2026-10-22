import React from 'react';
import { Helmet } from 'react-helmet-async';
import { contactInfo } from '@data/contactInfo';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { generateWebPageSchema } from '@utils/schemaGenerators';
import { AnimatedSection } from '@components/common';
import { AboutExpertSection, ModelComparisonSection } from '@components/sections';
import { ShieldCheck, Send, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Страница "Обо мне" — биография, методология и принципы работы эксперта Михаила Павлова.
 * Выдержана в строгой темной эстетике Dark Obsidian & Emerald Growth.
 */
export const AboutPage: React.FC = () => {
  const seo = getSeoData('about');
  const ogMeta = generateOgMeta('/obo-mne/', seo.title, seo.description);
  const aboutSchema = generateWebPageSchema(seo.title, seo.description, '/obo-mne/');

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${SITE_URL}/obo-mne/`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        {/* Шапка страницы "Обо мне" */}
        <section className="py-12 md:py-16 bg-obsidian-950 border-b border-obsidian-850 grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-400 font-mono text-xs uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Частная практика с 2012 года</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Обо мне — Михаил Павлов
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
              Частный SEO-специалист, инженер поисковой оптимизации. Лично веду проекты от технического аудита до вывода страниц в ТОП-10 Яндекс и Google.
            </p>
          </div>
        </section>

        {/* Основной подробный блок об эксперте */}
        <AnimatedSection variant="slide-up">
          <AboutExpertSection />
        </AnimatedSection>

        {/* Сравнение с агентством */}
        <AnimatedSection variant="slide-up">
          <ModelComparisonSection />
        </AnimatedSection>

        {/* Конверсионный блок для связи */}
        <AnimatedSection variant="slide-up">
          <section className="py-16 bg-obsidian-950 border-t border-obsidian-850 text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Обсудим ваш проект лично?
              </h2>
              <p className="text-slate-400 text-sm font-sans mb-6">
                Пришлите адрес сайта — я проведу предварительный анализ по открытым данным и расскажу о перспективах роста.
              </p>

              <div className="flex flex-wrap justify-center gap-3 font-mono text-xs mb-8">
                <a
                  href={`https://t.me/${contactInfo.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-900 border border-obsidian-750 text-sky-400 hover:border-sky-500/50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram @{contactInfo.telegram}</span>
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-900 border border-obsidian-750 text-growth-400 hover:border-growth-500/50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-900 border border-obsidian-750 text-slate-200 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-growth-400" />
                  <span>{contactInfo.phone}</span>
                </a>
              </div>

              <Link
                to="/#audit-form"
                className="inline-block px-8 py-3.5 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider font-mono transition-all shadow-lg shadow-growth-950/40"
              >
                Получить экспресс-оценку
              </Link>
            </div>
          </section>
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
