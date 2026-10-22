import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'shadow';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-white',
    bordered: 'bg-white border border-dark-100',
    shadow: 'bg-white shadow-lg',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-xl transition-all duration-200',
          variantClasses[variant],
          paddingClasses[padding],
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
