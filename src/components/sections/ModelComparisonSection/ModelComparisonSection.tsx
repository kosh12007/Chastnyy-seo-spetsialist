import React from 'react';

/**
 * Секция "Частный эксперт vs Агентство".
 * Спокойное, зрелое сравнение форматов работы без ярлыков и агрессии.
 */
export const ModelComparisonSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-50 border-b border-dark-200">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-700 font-bold mb-2">
            Формат сотрудничества
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-dark-950 tracking-tight mb-3">
            Когда частный эксперт действительно выгоднее агентства
          </h2>
          <p className="text-dark-600 text-sm sm:text-base leading-relaxed">
            Агентство и частный специалист — это разные модели под разные задачи бизнеса. Давайте сравним их объективно.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-dark-200 shadow-clean-card">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-dark-200 bg-dark-50 text-dark-500 uppercase tracking-wider text-[11px]">
                <th className="py-4 px-4 sm:px-6">Критерий</th>
                <th className="py-4 px-4 sm:px-6 bg-accent-50/60 text-accent-800 border-x border-accent-200">
                  Частный эксперт (Мой подход)
                </th>
                <th className="py-4 px-4 sm:px-6">Digital-агентство</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-100 text-dark-700 font-sans text-xs">
              <tr className="hover:bg-dark-50/50">
                <td className="py-4 px-4 sm:px-6 font-mono font-bold text-dark-900">Прямой контакт</td>
                <td className="py-4 px-4 sm:px-6 bg-accent-50/30 text-accent-900 font-medium border-x border-accent-100">
                  Напрямую со специалистом в Telegram за 15–30 мин
                </td>
                <td className="py-4 px-4 sm:px-6 text-dark-600">
                  Через цепочку: клиент → аккаунт → тимлид → исполнитель
                </td>
              </tr>
              <tr className="hover:bg-dark-50/50">
                <td className="py-4 px-4 sm:px-6 font-mono font-bold text-dark-900">Фокус внимания</td>
                <td className="py-4 px-4 sm:px-6 bg-accent-50/30 text-accent-900 font-medium border-x border-accent-100">
                  До 5–6 проектов одновременно
                </td>
                <td className="py-4 px-4 sm:px-6 text-dark-600">
                  У одного специалиста в пуле 20–35 проектов
                </td>
              </tr>
              <tr className="hover:bg-dark-50/50">
                <td className="py-4 px-4 sm:px-6 font-mono font-bold text-dark-900">Структура цены</td>
                <td className="py-4 px-4 sm:px-6 bg-accent-50/30 text-accent-900 font-medium border-x border-accent-100">
                  Оплата реальных часов глубокой работы над сайтом
                </td>
                <td className="py-4 px-4 sm:px-6 text-dark-600">
                  Включает аренду офиса, отдел продаж и менеджмент
                </td>
              </tr>
              <tr className="hover:bg-dark-50/50">
                <td className="py-4 px-4 sm:px-6 font-mono font-bold text-dark-900">Кому подходит</td>
                <td className="py-4 px-4 sm:px-6 bg-accent-50/30 text-accent-900 font-medium border-x border-accent-100">
                  Собственникам и директорам, ценящим вовлеченность и персональный контакт
                </td>
                <td className="py-4 px-4 sm:px-6 text-dark-600">
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

