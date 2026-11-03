import React from 'react';
import { BadgePercent } from 'lucide-react';

/**
 * Свойства компонента специального предложения (скидка/зачет стоимости)
 */
export interface SpecialOfferBannerProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Фирменный зеленый баннер специального предложения («Зачет стоимости аудита в тариф»).
 * Оформлен с соблюдением цветовой палитры Emerald Growth и Obsidian в светлой и темной теме.
 */
export const SpecialOfferBanner: React.FC<SpecialOfferBannerProps> = ({
  title = 'Специальное предложение: стоимость технического аудита засчитывается в тариф!',
  children,
  className = '',
}) => {
  return (
    <div
      className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-growth-500/15 via-growth-500/10 to-transparent border-2 border-growth-500/30 mb-8 transition-colors ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-growth-600 text-obsidian-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
          <BadgePercent className="w-6 h-6" />
        </div>
        <div className="flex-1">
          {title && (
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
              {title}
            </h2>
          )}
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
