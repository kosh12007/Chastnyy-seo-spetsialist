import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className,
  id,
  ...props
}) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-dark-800">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={twMerge(
          clsx(
            'w-full rounded-lg border border-dark-100 px-4 py-3 text-dark-900 placeholder:text-dark-500',
            'focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20',
            'transition-colors duration-200 resize-y min-h-[120px]',
            error && 'border-accent-600 focus:border-accent-600 focus:ring-accent-600/20',
            className
          )
        )}
        {...props}
      />
      {error && <span className="text-sm text-accent-600">{error}</span>}
    </div>
  );
};
