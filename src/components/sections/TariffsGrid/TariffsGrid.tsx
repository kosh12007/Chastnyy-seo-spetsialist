import React from 'react';
import { Check, Star } from 'lucide-react';
import { Card } from '@/components/ui/Card/Card';
import { Button } from '@ui/Button';
import { Badge } from '@/components/ui/Badge/Badge';
import { tariffs } from '@data/index';
import { formatPrice } from '@utils/helpers';

interface TariffsGridProps {
  /** Показывать бейдж «Популярный» */
  showPopularBadge?: boolean;
  /** Сколько фич показывать (0 = все) */
  maxFeatures?: number;
  /** Заголовок секции */
  title?: string;
}

export const TariffsGrid: React.FC<TariffsGridProps> = ({
  showPopularBadge = true,
  maxFeatures = 0,
  title,
}) => {
  return (
    <section className="py-16">
      <div className="container">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{title}</h2>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tariffs.map((tariff) => {
            const features = maxFeatures > 0 ? tariff.features.slice(0, maxFeatures) : tariff.features;

            return (
              <Card
                key={tariff.id}
                variant={tariff.popular ? 'shadow' : 'bordered'}
                padding="lg"
                className={`relative transition-transform ${tariff.popular ? 'border-2 border-primary-600 md:scale-105' : ''}`}
              >
                {showPopularBadge && tariff.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="default" size="md">
                      <Star className="w-3 h-3 mr-1" /> Популярный
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold font-heading mb-2">{tariff.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {formatPrice(tariff.price)} ₽
                  </div>
                  <p className="text-sm text-dark-800">{tariff.priceLabel}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-dark-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tariff.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  Заказать
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
