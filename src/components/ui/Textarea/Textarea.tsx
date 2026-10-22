import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

/**
 * Адаптивное многострочное поле ввода.
 * Поддерживает адаптивную светлую тему и ночную Obsidian.
 */
export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className,
  id,
  ...props
}) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5 font-mono text-xs">
      {label && (
        <label htmlFor={textareaId} className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={twMerge(
          clsx(
            'w-full rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-300 dark:border-obsidian-750 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-sans',
            'focus:border-growth-500 focus:outline-none focus:ring-1 focus:ring-growth-500',
            'transition-colors duration-200 resize-y min-h-[110px]',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500 font-mono">{error}</span>}
    </div>
  );
};
