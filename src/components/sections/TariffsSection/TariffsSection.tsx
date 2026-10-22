import React from 'react';
import { TariffsGrid } from '@components/sections/TariffsGrid/TariffsGrid';
import { Info, Shield } from 'lucide-react';

export const TariffsSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-dark-50 border-b border-dark-200">
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-700 font-bold mb-2">
            Прозрачные тарифы
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-dark-950 mb-3 tracking-tight">
            Стоимость ежемесячного ведения проекта
          </h2>
          <p className="text-sm sm:text-base text-dark-600 max-w-2xl mx-auto px-4 font-sans">
            Работа по официальному договору с самозанятым. Выдаются фискальные чеки ФНС («Мой налог»). Без НДС.
          </p>
        </div>

        <TariffsGrid showPopularBadge />

        {/* Юридическая оговорка по ценам и KPI */}
        <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-dark-200 text-xs font-mono text-dark-600 space-y-2.5 shadow-sm mt-6">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-dark-900 font-semibold">Условия и договор:</span>{' '}
              Цены указаны для предварительного ознакомления. Итоговая стоимость определяется составом регламентных работ и фиксируется в договоре с самозанятым. На каждую оплату выдается официальный фискальный чек из приложения «Мой налог». Без НДС.
            </div>
          </div>
          <div className="flex items-start gap-2.5 pt-2 border-t border-dark-100">
            <Shield className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-dark-900 font-semibold">Позиция по гарантиям:</span>{' '}
              100% гарантировать конкретную строчку в поисковой выдаче невозможно: алгоритмы поисковых систем находятся вне контроля исполнителя. В договоре фиксируются объем регламентных задач, сроки, отчётность и согласованные KPI.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
