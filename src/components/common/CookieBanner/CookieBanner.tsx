import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Баннер согласия на использование файлов cookie (152-ФЗ).
 * Запоминает выбор пользователя в localStorage.
 * Поддерживает адаптивную светлую тему и ночную Obsidian & Emerald Growth.
 */
export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies_accepted');
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Уведомление для пользователей"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 right-auto w-auto max-w-[calc(100vw-5.5rem)] sm:max-w-md z-50 p-4 rounded-xl bg-white/95 dark:bg-obsidian-900/95 border border-slate-300 dark:border-obsidian-800 backdrop-blur-md shadow-xl dark:shadow-2xl text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center justify-between gap-4 animate-slide-up transition-colors"
    >
      <div className="text-[11px] leading-relaxed font-sans text-slate-700 dark:text-slate-300">
        Сайт использует файлы cookie и сервисы веб-аналитики для сбора обезличенных данных. Подробнее — в{' '}
        <Link to="/politika-konfidentsialnosti/" className="text-growth-700 dark:text-growth-400 underline hover:text-growth-800 dark:hover:text-growth-300 font-medium">
          Политике конфиденциальности
        </Link>
        .
      </div>
      <button
        onClick={handleAccept}
        className="px-3.5 py-1.5 rounded-lg bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold shrink-0 text-xs font-mono transition-colors cursor-pointer shadow-sm"
      >
        Понятно
      </button>
    </aside>
  );
};
