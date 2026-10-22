import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@ui/Button';
import { CallbackModal } from '@components/common/CallbackModal';
import { SocialIcons } from '@components/common/SocialIcons';
import { MobileMenu } from '@components/navigation/MobileMenu';
import { contactInfo } from '@data/contactInfo';
import { navigationLinks } from '@data/navigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Верхняя полоса (контакты) */}
      <div className="bg-dark-50 border-b border-dark-100">
        <div className="container flex items-center justify-between py-2 text-sm text-dark-800">
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1.5 hover:text-primary-600 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-medium">{contactInfo.phone}</span>
          </a>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline">{contactInfo.workingHours}</span>
            <SocialIcons size="sm" />
          </div>
        </div>
      </div>

      {/* Основная навигация */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="container flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-bold font-heading text-dark-900">SEO Специалист</span>
            <span className="text-xs text-dark-800">Продвижение сайтов</span>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === link.href ? 'text-primary-600' : 'text-dark-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Бургер */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex"
              onClick={() => setIsCallbackOpen(true)}
            >
              Заказать звонок
            </Button>

            <button
              className="lg:hidden p-2 text-dark-800 hover:text-primary-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
      </div>

      {/* Модалка заказа звонка */}
      <CallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
    </header>
  );
};
