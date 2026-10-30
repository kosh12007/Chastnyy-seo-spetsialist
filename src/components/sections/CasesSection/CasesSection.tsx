import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { cases } from '@data/index';
import type { Case } from '@/types';

/**
 * Отдельная карточка кейса в сетке.
 * Выводит блок изображения только если поле image заполнено и файл успешно загружен.
 */
const CaseCard: React.FC<{ item: Case }> = ({ item }) => {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(item.image && item.image.trim() !== '' && !imgError);

  return (
    <article className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/50 dark:hover:border-obsidian-750 shadow-sm transition-all flex flex-col justify-between group">
      <div>
        {/* Превью-изображение кейса (выводится только при наличии картинки) */}
        {hasImage && (
          <Link
            to={`/portfolio/${item.slug}/`}
            className="block mb-4 rounded-xl overflow-hidden border border-slate-200 dark:border-obsidian-800 bg-white dark:bg-obsidian-950"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </Link>
        )}

        <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
          <span className="font-semibold text-slate-900 dark:text-white">{item.niche}</span>
          <span className="text-growth-600 dark:text-growth-400 font-mono font-medium">{item.region}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-growth-600 dark:group-hover:text-growth-300 transition-colors">
          <Link to={`/portfolio/${item.slug}/`}>{item.title}</Link>
        </h3>

        <div className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4 space-y-1.5">
          <p>
            <strong className="text-slate-700 dark:text-slate-400">Исходная точка:</strong> {item.problem}
          </p>
        </div>

        {/* Метрики */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white dark:bg-obsidian-950 font-mono text-center text-xs mb-4 border border-slate-200 dark:border-obsidian-800 shadow-sm">
          <div>
            <div className="text-growth-600 dark:text-growth-400 font-bold text-sm">{item.metrics.positions}</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">{item.metricLabels?.positionsBadgeLabel || 'Позиции'}</div>
          </div>
          <div>
            <div className="text-growth-600 dark:text-growth-400 font-bold text-sm">{item.metrics.traffic}</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Трафик</div>
          </div>
          <div>
            <div className="text-slate-700 dark:text-slate-300 font-bold text-sm">{item.metrics.duration}</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Срок</div>
          </div>
        </div>
      </div>

      <Link
        to={`/portfolio/${item.slug}/`}
        className="w-full text-xs font-mono text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 flex items-center justify-between pt-3 border-t border-slate-200 dark:border-obsidian-800 transition-colors font-semibold"
      >
        <span>Подробный разбор работ</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </article>
  );
};

/**
 * Секция кейсов из практики.
 * Поддерживает адаптивную светлую тему и ночную эстетику Dark Obsidian.
 * Использует единый источник данных из @data/index и ведет на индивидуальные SEO-страницы каждого кейса (/portfolio/:slug/).
 */
export const CasesSection: React.FC = () => {
  return (
    <section id="cases" className="py-16 md:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Заголовок */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
              Практика и результаты
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Примеры проектов из практики
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 max-w-md text-left sm:text-right">
            Данные подтверждены веб-аналитикой (Яндекс.Метрика). Названия проектов скрыты по условиям NDA.
          </div>
        </div>

        {/* Сетка кейсов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {cases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>

        {/* Юридический дисклеймер NDA по кейсам */}
        <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-obsidian-900/40 border border-slate-200 dark:border-obsidian-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-start gap-2.5 transition-colors">
          <ShieldCheck className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
          <span>
            Показатели роста индивидуальны и зависят от исходного технического состояния домена, возраста сайта, структуры спроса и скорости согласования технических заданий заказчиком. Конкретные цифры зафиксированы в аналитических отчетах.
          </span>
        </div>

      </div>
    </section>
  );
};
