import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/Card/Card';
import { reviews } from '@data/index';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { AnimatedSection } from '@components/common';

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
        <AnimatedSection variant="slide-up">
          <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Отзывы клиентов</h1>
              <p className="text-lg text-dark-800">
                Реальные отзывы клиентов. Средний рейтинг: ⭐ 4.9 из 5 (на основе 20+ отзывов)
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection variant="slide-up">
          <section className="py-16">
            <div className="container">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                  <Card key={review.id} variant="bordered" padding="lg">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-dark-800 mb-6 italic">"{review.text}"</p>
                    <div className="pt-4 border-t border-dark-100">
                      <p className="font-semibold">{review.author}</p>
                      <p className="text-sm text-dark-800">{review.company}</p>
                      {review.period && <p className="text-xs text-dark-800 mt-2">Период: {review.period}</p>}
                    </div>
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
