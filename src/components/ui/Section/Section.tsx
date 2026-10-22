import React from 'react';
import { clsx } from 'clsx';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  variant?: 'default' | 'gray' | 'dark';
}

export const Section: React.FC<SectionProps> = ({
  variant = 'default',
  className,
  children,
  id,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-white',
    gray: 'bg-dark-50',
    dark: 'bg-dark-900 text-white',
  };

  return (
    <section
      id={id}
      className={clsx('py-16 md:py-24', variantClasses[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
};
