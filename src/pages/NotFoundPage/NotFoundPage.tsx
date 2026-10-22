import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@ui/Button';
import { AnimatedSection } from '@components/common';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <AnimatedSection variant="scale" duration={0.8}>
        <div className="text-center">
          <h1 className="text-8xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold font-heading mb-4">Страница не найдена</h2>
          <p className="text-dark-800 mb-8 max-w-md mx-auto">
            Страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg" leftIcon={<Home className="w-5 h-5" />}>
              На главную
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};
