import React from 'react';
import { TariffsGrid } from '@components/sections/TariffsGrid/TariffsGrid';

export const TariffsSection: React.FC = () => {
  return (
    <div className="bg-dark-50">
      <div className="text-center pt-12 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Тарифы на SEO-продвижение</h2>
        <p className="text-lg text-dark-800 max-w-2xl mx-auto px-4">
          Прозрачные цены без скрытых платежей. Точная стоимость — после бесплатного аудита.
        </p>
      </div>
      <TariffsGrid showPopularBadge />
      <p className="text-center text-dark-800 pb-8 -mt-8">
        * Точная стоимость рассчитывается индивидуально после бесплатного аудита сайта
      </p>
    </div>
  );
};
