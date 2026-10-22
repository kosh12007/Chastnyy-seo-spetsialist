import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Card } from '@/components/ui/Card/Card';
import { reviews } from '@data/index';

export const ReviewsSection: React.FC = () => {
  const displayReviews = reviews.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-dark-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-dark-800 max-w-2xl mx-auto">
            Реальные отзывы от компаний, с которыми я сотрудничал. Средний рейтинг: ⭐ 4.9 из 5
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {displayReviews.map((review) => (
            <Card key={review.id} variant="bordered" padding="lg" className="relative">
              <Quote className="w-8 h-8 text-primary-200 absolute top-4 right-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-dark-800 mb-6 italic leading-relaxed">"{review.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-dark-100">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-dark-900">{review.author}</p>
                  <p className="text-sm text-dark-800">{review.company}</p>
                </div>
              </div>

              {review.period && (
                <p className="text-xs text-dark-800 mt-3">Период сотрудничества: {review.period}</p>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/otzyvy/" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all">
            Все отзывы (20+) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
