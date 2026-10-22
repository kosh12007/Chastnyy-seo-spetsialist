import React from 'react';

/**
 * Секция "Частный эксперт vs Агентство".
 * Спокойное, зрелое сравнение форматов работы в темной эстетике Obsidian.
 */
export const ModelComparisonSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-obsidian-850 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Заголовок */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-growth-400 mb-2">
            Формат сотрудничества
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Когда частный эксперт действительно выгоднее агентства
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Агентство и частный специалист — это разные модели под разные задачи бизнеса. Давайте сравним их объективно.
          </p>
        </div>

        {/* Таблица сравнения */}
        <div className="overflow-x-auto rounded-2xl border border-obsidian-800 bg-obsidian-900 shadow-2xl">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-obsidian-800 bg-obsidian-850 text-slate-400 uppercase tracking-wider text-[11px]">
                <th className="py-4 px-4 sm:px-6">Критерий</th>
                <th className="py-4 px-4 sm:px-6 bg-growth-950/30 text-growth-400 border-x border-growth-500/30 font-bold">
                  Частный эксперт (Мой подход)
                </th>
                <th className="py-4 px-4 sm:px-6">Digital-агентство</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian-800 text-slate-300 font-sans text-xs">
              <tr className="hover:bg-obsidian-850/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-mono font-bold text-white">Прямой контакт</td>
                <td className="py-4 px-4 sm:px-6 bg-growth-950/20 text-growth-300 border-x border-growth-500/20 font-medium">
                  Напрямую со специалистом в Telegram за 15–30 мин
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-400">
                  Через цепочку: клиент → аккаунт → тимлид → исполнитель
                </td>
              </tr>
              <tr className="hover:bg-obsidian-850/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-mono font-bold text-white">Фокус внимания</td>
                <td className="py-4 px-4 sm:px-6 bg-growth-950/20 text-growth-300 border-x border-growth-500/20 font-medium">
                  До 5–6 проектов одновременно
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-400">
                  У одного специалиста в пуле 20–35 проектов
                </td>
              </tr>
              <tr className="hover:bg-obsidian-850/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-mono font-bold text-white">Структура цены</td>
                <td className="py-4 px-4 sm:px-6 bg-growth-950/20 text-growth-300 border-x border-growth-500/20 font-medium">
                  Оплата реальных часов глубокой работы над сайтом
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-400">
                  Включает аренду офиса, отдел продаж и менеджмент
                </td>
              </tr>
              <tr className="hover:bg-obsidian-850/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-mono font-bold text-white">Кому подходит</td>
                <td className="py-4 px-4 sm:px-6 bg-growth-950/20 text-growth-300 border-x border-growth-500/20 font-medium">
                  Собственникам и директорам, ценящим вовлеченность и персональный контакт
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-400">
                  Корпорациям, которым требуется комплексный подрядчик под ключ (SMM + PR + Дизайн)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
