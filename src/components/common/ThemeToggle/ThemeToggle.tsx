import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  /**
   * Отображать ли текстовую подпись рядом с иконкой (удобно для мобильного меню)
   */
  showLabel?: boolean;
  /**
   * Дополнительные CSS классы для контейнера кнопки
   */
  className?: string;
}

/**
 * Компонент переключения цветовой темы (светлая / тёмная).
 * Выполнен с плавной микроанимацией и понятными подсказками на русском языке.
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ showLabel = false, className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  const titleText = isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={titleText}
      aria-label={titleText}
      className={`relative inline-flex items-center justify-center gap-2 p-2 rounded-lg border transition-all duration-300 select-none group focus:outline-none focus:ring-2 focus:ring-growth-500/50 ${
        isDark
          ? 'bg-obsidian-850 hover:bg-obsidian-800 border-obsidian-750 text-amber-400 hover:text-amber-300'
          : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 hover:text-slate-900'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-active:scale-90">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-all duration-300 animate-fade-in" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700 transition-all duration-300 animate-fade-in" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-medium">
          {isDark ? 'Светлая тема' : 'Тёмная тема'}
        </span>
      )}
    </button>
  );
};
