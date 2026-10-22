import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'seo_theme';

/**
 * Получение начальной темы оформления:
 * 1. Сохраненное значение из localStorage
 * 2. Значение по умолчанию из переменной окружения VITE_APP_DEFAULT_THEME ('dark' | 'light')
 * 3. Fallback: 'dark'
 */
const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';

  const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  const envDefault = import.meta.env.VITE_APP_DEFAULT_THEME;
  if (envDefault === 'light' || envDefault === 'dark') {
    return envDefault;
  }

  return 'dark';
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Провайдер темы оформления.
 * Управляет переключением класса 'dark' на элементе document.documentElement.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Игнорируем ошибки квоты или приватного режима
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Хук для использования контекста темы
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};

