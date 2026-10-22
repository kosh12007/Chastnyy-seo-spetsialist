import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-600',
  secondary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-600',
  ghost: 'text-primary-600 hover:text-primary-700 hover:bg-primary-50 focus:ring-primary-600',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    className,
    disabled,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          clsx(
            'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
            variantClasses[variant],
            sizeClasses[size],
            (disabled || isLoading) && 'opacity-50 cursor-not-allowed',
            className
          )
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          <>
            {leftIcon && <span className="w-5 h-5 mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="w-5 h-5 ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
