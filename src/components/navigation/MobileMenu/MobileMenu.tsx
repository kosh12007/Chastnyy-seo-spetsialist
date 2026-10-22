import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@ui/Button';
import { navigationLinks } from '@data/navigation';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const location = useLocation();

  return (
    <div className="lg:hidden animate-slide-down">
      <nav className="container py-4 flex flex-col gap-3 border-t border-dark-100">
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className={`py-2 px-4 rounded-lg text-base font-medium transition-colors ${
              location.pathname === link.href
                ? 'bg-primary-50 text-primary-600'
                : 'text-dark-800 hover:bg-dark-50'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Button
          variant="primary"
          size="lg"
          className="mt-2"
          onClick={onClose}
        >
          Заказать звонок
        </Button>
      </nav>
    </div>
  );
};
