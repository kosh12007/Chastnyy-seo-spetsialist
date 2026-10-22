import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Адаптивное текстовое поле ввода.
 * Поддерживает адаптивную светлую тему и ночную Obsidian.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  leftIcon,
  rightIcon,
  className,
  id,
  ...props
}, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5 font-mono text-xs">
      {label && (
        <label htmlFor={inputId} className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={twMerge(
            clsx(
              'w-full rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-300 dark:border-obsidian-750 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-sans',
              'focus:border-growth-500 focus:outline-none focus:ring-1 focus:ring-growth-500',
              'transition-colors duration-200',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              className
            )
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <span className="text-xs text-red-500 font-mono">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
