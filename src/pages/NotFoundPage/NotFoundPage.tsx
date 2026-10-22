import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AnimatedSection } from '@components/common';

/**
 * Страница 404 — страница не найдена.
 * Поддерживает адаптивную светлую тему и ночную эстетику Dark Obsidian & Emerald Growth.
 */
export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 grid-bg">
      <AnimatedSection variant="scale" duration={0.8}>
        <div className="text-center max-w-md mx-auto p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-xl transition-colors">
          <div className="text-8xl font-black text-growth-600 dark:text-growth-400 font-mono mb-4">
            404
          </div>
          <h1 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">
            Страница не найдена
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-sans mb-8 leading-relaxed">
            Страница, которую вы ищете, была перемещена, удалена или никогда не существовала.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider font-mono transition-all shadow-md shadow-growth-950/20 dark:shadow-growth-950/40"
          >
            <Home className="w-4 h-4" />
            <span>На главную страницу</span>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};
