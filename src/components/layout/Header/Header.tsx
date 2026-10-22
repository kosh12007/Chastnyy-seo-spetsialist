import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Send } from 'lucide-react';
import { MobileMenu } from '@components/navigation/MobileMenu';
import { contactInfo } from '@data/contactInfo';
import { navigationLinks } from '@data/navigation';

/**
 * Шапка сайта частного SEO-эксперта.
 * Полностью выдержана в темной теме Dark Obsidian & Emerald Growth из mockup-v2.
 * Содержит юридический статус самозанятого (НПД), прямые контакты и чистую навигацию.
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* 1. Верхняя служебная полоса: Юридический статус плательщика НПД */}
      <div className="bg-obsidian-950 border-b border-obsidian-850 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
            <span className="inline-flex items-center text-growth-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-growth-500 mr-2 animate-pulse" />
              Частная практика
            </span>
            <span className="text-obsidian-700">|</span>
            <span className="text-slate-300 hidden sm:inline">
              Павлов М.В. • Самозанятый (НПД) • Договор и чеки «Мой налог»
            </span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
            <Link
              to="/rekvizity/"
              className="text-slate-400 hover:text-white transition-colors underline decoration-obsidian-700"
            >
              Условия для юрлиц
            </Link>
            <a
              href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-growth-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-growth-400" />
              <span>{contactInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Основная навигация: затемненное стекло с размытием */}
      <div
        className={`bg-obsidian-950/90 backdrop-blur-md border-b border-obsidian-850 transition-all duration-300 ${
          isScrolled ? 'py-2.5 shadow-2xl shadow-black/50' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-obsidian-850 border border-obsidian-700 flex items-center justify-center group-hover:border-growth-500/50 transition-colors">
              <span className="font-mono font-bold text-growth-400 text-base">МП</span>
            </div>
            <div>
              <span className="font-bold text-white tracking-tight text-sm flex items-center gap-1.5">
                Михаил Павлов
              </span>
              <span className="text-[11px] text-slate-400 font-mono block">
                Частный SEO-специалист
              </span>
            </div>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-300">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors hover:text-growth-400 text-xs uppercase tracking-wider font-mono ${
                    isActive ? 'text-growth-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA кнопки и контакты */}
          <div className="flex items-center space-x-3">
            <a
              href={`https://t.me/${contactInfo.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 border border-obsidian-750 text-xs font-mono text-slate-200 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span>@{contactInfo.telegram}</span>
            </a>

            <a
              href="#audit-form"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md shadow-growth-950/40"
            >
              <span>Оценка проекта</span>
            </a>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg bg-obsidian-850 border border-obsidian-750 text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
      </div>
    </header>
  );
};
