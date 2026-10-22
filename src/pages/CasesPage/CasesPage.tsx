import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card/Card';
import { cases } from '@data/index';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { AnimatedSection } from '@components/common';

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
        <AnimatedSection variant="slide-up">
          <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Кейсы и результаты</h1>
              <p className="text-lg text-dark-800">
                Реальные проекты с измеримыми результатами. Средний рост трафика: +280%, средний срок: 5 мес.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection variant="slide-up">
          <section className="py-16">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-6">
                {cases.map((item) => (
                  <Card key={item.id} variant="bordered" padding="lg">
                    <div className="bg-dark-50 rounded-lg h-48 mb-6 flex items-center justify-center">
                      <BarChart3 className="w-12 h-12 text-dark-100" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                    <p className="text-sm text-dark-800 mb-4">📍 {item.region} | ⏱️ {item.duration}</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-success-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-success-600 mx-auto mb-1" />
                        <div className="text-lg font-bold">+{item.growth.traffic}%</div>
                        <div className="text-xs text-dark-800">Трафик</div>
                      </div>
                      <div className="text-center p-3 bg-primary-50 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                        <div className="text-lg font-bold">{item.after.positions}</div>
                        <div className="text-xs text-dark-800">Позиции</div>
                      </div>
                      <div className="text-center p-3 bg-accent-50 rounded-lg">
                        <div className="text-lg font-bold">+{item.growth.conversion}%</div>
                        <div className="text-xs text-dark-800">Конверсия</div>
                      </div>
                    </div>
                    <Link to={`/portfolio/${item.slug}/`} className="inline-flex items-center gap-2 text-primary-600 font-medium">
                      Смотреть кейс <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
