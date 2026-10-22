import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, ShieldCheck } from 'lucide-react';
import { reviews } from '@data/index';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { AnimatedSection } from '@components/common';
import { CTASection } from '@components/sections';

/**
 * Страница отзывов клиентов.
 * Оформлена в премиальной темной теме Obsidian & Emerald Growth.
 */
export const ReviewsPage: React.FC = () => {
  const seo = getSeoData('reviews');
  const ogMeta = generateOgMeta('/otzyvy/', seo.title, seo.description);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${SITE_URL}/otzyvy/`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        {/* Шапка страницы отзывов */}
        <section className="py-12 md:py-16 bg-obsidian-950 border-b border-obsidian-850 grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-400 font-mono text-xs uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Обратная связь реальных заказчиков</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Отзывы клиентов
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
              Мнения владельцев бизнеса, коммерческих директоров и маркетологов о результатах совместной работы.
            </p>
          </div>
        </section>

        {/* Сетка отзывов */}
        <AnimatedSection variant="slide-up">
          <section className="py-12 md:py-16 bg-obsidian-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-6 rounded-2xl bg-obsidian-900 border border-obsidian-800 flex flex-col justify-between hover:border-obsidian-750 transition-all shadow-clean-card"
                  >
                    <div>
                      {/* Звездочки */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-300 text-sm font-sans leading-relaxed mb-6">
                        «{review.text}»
                      </p>
                    </div>

                    <div className="pt-4 border-t border-obsidian-800 font-mono text-xs">
                      <p className="font-bold text-white font-sans">{review.author}</p>
                      <p className="text-slate-400">{review.company}</p>
                      {review.period && (
                        <p className="text-growth-400 text-[11px] mt-1.5">
                          Срок ведения: {review.period}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Форма заявки */}
        <AnimatedSection variant="slide-up">
          <CTASection />
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
