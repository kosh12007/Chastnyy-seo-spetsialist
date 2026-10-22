import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { TariffsGrid } from '@components/sections/TariffsGrid/TariffsGrid';
import { AnimatedSection } from '@components/common';

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
        {/* HERO */}
        <AnimatedSection variant="slide-up">
          <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Цены на SEO-продвижение</h1>
              <p className="text-lg text-dark-800 max-w-2xl">
                Прозрачные тарифы без скрытых платежей. Точная стоимость — после бесплатного аудита.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Tariffs */}
        <AnimatedSection variant="slide-up">
          <TariffsGrid showPopularBadge title="Сравнение тарифов" />
        </AnimatedSection>

        <AnimatedSection variant="slide-up">
          <section className="py-12 bg-dark-50">
            <div className="container text-center">
              <p className="text-dark-800 mb-2">Не можете определиться с тарифом?</p>
              <p className="text-lg font-semibold">Оставьте заявку — рассчитаю точную стоимость за 24 часа</p>
            </div>
          </section>
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
