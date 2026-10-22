import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Баннер согласия на использование файлов cookie (152-ФЗ).
 * Запоминает выбор пользователя в localStorage.
 * Оформлен в темном стиле Obsidian & Emerald Growth.
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
      aria-label="Уведомление об использовании cookie"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-4 rounded-xl bg-obsidian-900/95 border border-obsidian-800 backdrop-blur-md shadow-2xl text-xs font-mono text-slate-300 flex items-center justify-between gap-4 animate-slide-up"
    >
      <div className="text-[11px] leading-relaxed font-sans text-slate-300">
        Сайт использует файлы cookie и сервисы веб-аналитики для сбора обезличенных данных. Подробнее — в{' '}
        <Link to="/politika-konfidentsialnosti/" className="text-growth-400 underline hover:text-growth-300 font-medium">
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
