import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Send } from 'lucide-react';
import { Button } from '@ui/Button';
import { CallbackModal } from '@components/common/CallbackModal';
import { MobileMenu } from '@components/navigation/MobileMenu';
import { contactInfo } from '@data/contactInfo';
import { navigationLinks } from '@data/navigation';

/**
 * Шапка сайта частного SEO-эксперта.
 * Содержит юридический статус самозанятого (НПД), контакты и навигацию.
 */
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
      {/* Верхняя информационная полоса (Юридическая открытость: Самозанятый / НПД) */}
      <div className="bg-dark-900 border-b border-dark-800 text-xs text-dark-300">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center space-x-3 font-mono text-[11px] sm:text-xs">
            <span className="inline-flex items-center text-accent-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent-500 mr-2 animate-pulse" />
              Частная практика
            </span>
            <span className="text-dark-700">|</span>
            <span className="text-dark-300 hidden sm:inline">
              Павлов М.В. • Самозанятый (НПД) • Договор и чеки «Мой налог»
            </span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
            <Link to="/rekvizity/" className="text-dark-300 hover:text-white transition-colors underline decoration-dark-700">
              Условия для юрлиц
            </Link>
            <a
              href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
              className="flex items-center gap-1.5 text-white hover:text-accent-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-accent-400" />
              <span>{contactInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Основная навигация */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2.5' : 'py-3.5'}`}>
        <div className="container flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-750 flex items-center justify-center text-accent-400 font-bold font-mono text-base group-hover:border-accent-500 transition-colors">
              МП
            </div>
            <div>
              <span className="text-lg font-bold font-heading text-dark-900 leading-tight block">
                Михаил Павлов
              </span>
              <span className="text-[11px] text-dark-500 font-mono">
                Частный SEO-эксперт
              </span>
            </div>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === link.href ? 'text-primary-600 font-semibold' : 'text-dark-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Бургер */}
          <div className="flex items-center gap-3">
            <a
              href={`https://t.me/${contactInfo.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-50 hover:bg-dark-100 border border-dark-200 text-xs font-mono text-dark-800 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-sky-500" />
              <span>@{contactInfo.telegram}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex bg-accent-600 hover:bg-accent-700 text-white font-medium shadow-sm"
              onClick={() => setIsCallbackOpen(true)}
            >
              Оценка проекта
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

      {/* Модалка заказа звонка / оценки проекта */}
      <CallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
    </header>
  );
};
