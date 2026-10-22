import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Расширяем интерфейс Window для безопасного вызова функций Яндекс.Метрики
declare global {
  interface Window {
    enableYandexMetrika?: () => void;
    disableYandexMetrika?: () => void;
    initYandexMetrika?: () => void;
    YANDEX_METRIKA_ID?: number;
  }
}

const STORAGE_KEY = 'analytics_consent';

/**
 * Баннер согласия на использование файлов cookie и аналитики (152-ФЗ).
 * Позволяет посетителю принять или отказаться от сбора аналитики.
 * Поддерживает адаптивную светлую тему и ночную Obsidian & Emerald Growth.
 */
export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем наличие зафиксированного согласия или отказа
    const consent = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('cookies_accepted');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  /**
   * Пользователь нажал "Принять"
   */
  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
      localStorage.setItem('cookies_accepted', 'true');
    } catch {
      // Игнорируем ошибки квоты или приватного режима
    }

    // Запускаем счетчик аналитики, если он не был активен
    if (typeof window !== 'undefined' && window.enableYandexMetrika) {
      window.enableYandexMetrika();
    }

    setIsVisible(false);
  };

  /**
   * Пользователь нажал "Отказаться"
   */
  const handleDecline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
      localStorage.setItem('cookies_accepted', 'false');
    } catch {
      // Игнорируем ошибки квоты
    }

    // Отключаем счетчик и удаляем аналитические cookies
    if (typeof window !== 'undefined' && window.disableYandexMetrika) {
      window.disableYandexMetrika();
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Уведомление для пользователей"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 right-auto w-auto max-w-[calc(100vw-5.5rem)] sm:max-w-lg z-50 p-4 sm:p-5 rounded-2xl bg-white/98 dark:bg-obsidian-900/98 border border-slate-300 dark:border-obsidian-800 backdrop-blur-md shadow-2xl text-xs font-mono text-slate-700 dark:text-slate-300 animate-slide-up transition-colors"
    >
      <div className="text-[11px] sm:text-xs leading-relaxed font-sans text-slate-700 dark:text-slate-300 mb-3 sm:mb-4">
        Мы используем файлы cookie для улучшения работы сайта и аналитики. Продолжая использовать сайт, вы выражаете согласие на обработку персональных данных в соответствии с{' '}
        <Link
          to="/politika-konfidentsialnosti/"
          className="text-growth-700 dark:text-growth-400 underline hover:text-growth-800 dark:hover:text-growth-300 font-medium"
        >
          Политикой конфиденциальности
        </Link>
        .
      </div>

      <div className="flex items-center gap-2 sm:gap-3 justify-end font-mono text-xs">
        <button
          type="button"
          onClick={handleDecline}
          className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-obsidian-800 dark:hover:bg-obsidian-750 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-obsidian-700 text-xs font-mono transition-colors cursor-pointer"
        >
          Отказаться
        </button>

        <button
          type="button"
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-xs font-mono transition-colors cursor-pointer shadow-md shadow-growth-950/20"
        >
          Принять
        </button>
      </div>
    </aside>
  );
};
