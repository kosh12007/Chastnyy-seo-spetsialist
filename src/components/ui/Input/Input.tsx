import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

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
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-dark-800">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-100">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={twMerge(
            clsx(
              'w-full rounded-lg border border-dark-100 px-4 py-3 text-dark-900 placeholder:text-dark-500',
              'focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20',
              'transition-colors duration-200',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error && 'border-destructive-600 focus:border-destructive-600 focus:ring-destructive-600/20',
              className
            )
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-100">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <span className="text-sm text-destructive-600">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
