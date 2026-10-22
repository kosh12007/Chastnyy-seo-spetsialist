import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card/Card';
import { Button } from '@ui/Button';
import { services } from '@data/index';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { TariffsGrid } from '@components/sections/TariffsGrid/TariffsGrid';
import { AnimatedSection } from '@components/common';

export const ServicesPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentService = services.find((s) => s.slug === slug);

  // Если slug указан — показываем детальную страницу
  if (currentService) {
    const ogMeta = generateOgMeta(`/uslugi/${currentService.slug}/`, currentService.title, currentService.description);
    return (
      <>
        <Helmet>
          <title>{currentService.title} — Частный SEO-специалист</title>
          <meta name="description" content={currentService.description} />
          <link rel="canonical" href={`${SITE_URL}/uslugi/${currentService.slug}/`} />
          {Object.entries(ogMeta).map(([key, value]) => (
            <meta key={`detail-${key}`} property={key} content={value} />
          ))}
        </Helmet>

        <AnimatedSection variant="fade" duration={0.8}>
          {/* HERO */}
          <AnimatedSection variant="slide-up">
            <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
              <div className="container">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{currentService.title}</h1>
                <p className="text-lg text-dark-800 max-w-2xl">{currentService.description}</p>
              </div>
            </section>
          </AnimatedSection>

          {/* Динамический контент услуги */}
          {currentService.content && (
            <AnimatedSection variant="slide-up">
              <section className="py-16">
                <div className="container max-w-6xl">
                  <div 
                    className="service-content prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: currentService.content }}
                  />
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* Тарифы */}
          <AnimatedSection variant="slide-up">
            <TariffsGrid showPopularBadge title="Тарифы" />
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection variant="slide-up">
            <section className="py-16">
              <div className="container text-center">
                <h2 className="text-2xl font-bold font-heading mb-4">Заказать услугу</h2>
                <p className="text-dark-800 mb-6">Оставьте заявку — рассчитаю стоимость за 24 часа</p>
                <Button variant="primary" size="lg">Получить консультацию</Button>
              </div>
            </section>
          </AnimatedSection>
        </AnimatedSection>
      </>
    );
  }

  // Главная страница услуг (список всех)
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
        {/* HERO */}
        <AnimatedSection variant="slide-up">
          <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Услуги SEO-продвижения</h1>
              <p className="text-lg text-dark-800 max-w-2xl">
                Комплексная оптимизация сайта для роста в поисковых системах.
                Увеличу органический трафик на 200-500% за 6-12 месяцев.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection variant="slide-up">
          <section className="py-16">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service) => (
                  <Card key={service.id} variant="bordered" padding="lg">
                    <h2 className="text-2xl font-bold font-heading mb-3">{service.title}</h2>
                    <p className="text-dark-800 mb-4">{service.description}</p>
                    <Link to={`/uslugi/${service.slug}/`} className="inline-flex items-center gap-2 text-primary-600 font-medium">
                      Подробнее <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection variant="slide-up">
          <section className="py-16 bg-dark-50">
            <div className="container text-center">
              <h2 className="text-3xl font-bold font-heading mb-4">Заказать SEO-продвижение</h2>
              <p className="text-lg text-dark-800 mb-6">
                Оставьте заявку — рассчитаю стоимость для вашего сайта за 24 часа
              </p>
              <Button variant="primary" size="lg">Получить консультацию</Button>
            </div>
          </section>
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
