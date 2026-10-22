import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import { services } from '@data/index';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { AnimatedSection } from '@components/common';
import { CTASection, TariffsSection } from '@components/sections';

/**
 * Страница услуг SEO-продвижения и детального просмотра конкретной услуги.
 * Поддерживает адаптивную светлую тему и ночную Dark Obsidian & Emerald Growth.
 */
export const ServicesPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentService = services.find((s) => s.slug === slug);

  // 1. Детальная страница услуги
  if (currentService) {
    const ogMeta = generateOgMeta(`/uslugi/${currentService.slug}/`, currentService.title, currentService.description);
    return (
      <>
        <Helmet>
          <title>{currentService.title} — Михаил Павлов | Частный SEO-специалист</title>
          <meta name="description" content={currentService.description} />
          <link rel="canonical" href={`${SITE_URL}/uslugi/${currentService.slug}/`} />
          {Object.entries(ogMeta).map(([key, value]) => (
            <meta key={`detail-${key}`} property={key} content={value} />
          ))}
        </Helmet>

        <AnimatedSection variant="fade" duration={0.8}>
          {/* Шапка детальной услуги */}
          <section className="py-12 md:py-16 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 grid-bg transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <Link
                to="/uslugi/"
                className="inline-flex items-center gap-2 text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 text-xs font-mono mb-6 transition-colors font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Все услуги</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                {currentService.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
                {currentService.description}
              </p>
            </div>
          </section>

          {/* Контент услуги */}
          {currentService.content && (
            <AnimatedSection variant="slide-up">
              <section className="py-12 md:py-16 bg-white dark:bg-obsidian-950 transition-colors">
                <div className="max-w-4xl mx-auto px-4 sm:px-8">
                  <div
                    className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed font-sans"
                    dangerouslySetInnerHTML={{ __html: currentService.content }}
                  />
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* Тарифные планы */}
          <AnimatedSection variant="slide-up">
            <TariffsSection />
          </AnimatedSection>

          {/* Заявка на экспресс-оценку */}
          <AnimatedSection variant="slide-up">
            <CTASection />
          </AnimatedSection>
        </AnimatedSection>
      </>
    );
  }

  // 2. Каталог услуг (список всех)
  const seo = getSeoData('services');
  const ogMeta = generateOgMeta('/uslugi/', seo.title, seo.description);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${SITE_URL}/uslugi/`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        {/* Шапка каталога услуг */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 grid-bg transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-700 dark:text-growth-400 font-mono text-xs uppercase tracking-wider mb-4 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Регламентные задачи и персональное ведение</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Услуги комплексного SEO-продвижения
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
              Поисковая оптимизация сайтов в Яндекс и Google с акцентом на целевой коммерческий трафик и рост заявок бизнеса.
            </p>
          </div>
        </section>

        {/* Сетка услуг */}
        <AnimatedSection variant="slide-up">
          <section className="py-12 md:py-16 bg-slate-50/50 dark:bg-obsidian-950 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/50 hover:bg-slate-50 dark:hover:bg-obsidian-850 shadow-sm transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-growth-600 dark:group-hover:text-growth-300 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      to={`/uslugi/${service.slug}/`}
                      className="inline-flex items-center gap-2 text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 font-mono text-xs uppercase tracking-wider font-semibold transition-colors pt-4 border-t border-slate-100 dark:border-obsidian-800/80"
                    >
                      <span>Подробнее об услуге</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Форма заявки на аудит */}
        <AnimatedSection variant="slide-up">
          <CTASection />
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
