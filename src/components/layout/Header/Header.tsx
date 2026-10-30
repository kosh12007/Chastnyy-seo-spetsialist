import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Send } from 'lucide-react';
import { MobileMenu } from '@components/navigation/MobileMenu';
import { ThemeToggle } from '@components/common';
import { contactInfo } from '@data/contactInfo';
import { navigationLinks } from '@data/navigation';

/**
 * Шапка сайта частного SEO-эксперта.
 * Поддерживает адаптивную светлую тему и темную эстетику Dark Obsidian & Emerald Growth.
 * Содержит юридический статус самозанятого (НПД), прямые контакты, переключатель темы и чистую навигацию.
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
      {/* 1. Верхняя служебная полоса: Условия для бизнеса и прозрачность */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs font-mono text-slate-600 dark:bg-obsidian-950 dark:border-obsidian-850 dark:text-slate-400 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
            <span className="inline-flex items-center text-growth-600 dark:text-growth-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-growth-500 mr-2 animate-pulse" />
              Прямой формат сотрудничества
            </span>
            <span className="text-slate-300 dark:text-obsidian-700">|</span>
            <span className="text-slate-700 dark:text-slate-300 hidden sm:inline">
              Официальный договор с юрлицами и ИП • ЭДО и закрывающие документы • Без комиссии агентств
            </span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
            <Link
              to="/rekvizity/"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors underline decoration-slate-300 dark:decoration-obsidian-700"
            >
              Условия для юрлиц
            </Link>
            <a
              href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
              className="flex items-center gap-1.5 text-slate-800 hover:text-growth-600 dark:text-slate-200 dark:hover:text-growth-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400" />
              <span>{contactInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Основная навигация: полупрозрачное стекло с размытием */}
      <div
        className={`bg-white/95 dark:bg-obsidian-950/90 backdrop-blur-md border-b border-slate-200 dark:border-obsidian-850 transition-all duration-300 ${
          isScrolled ? 'py-2.5 shadow-lg shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/50' : 'py-3.5'
        }`}
      >
        {/* Контейнер навигации: при ширине экрана < 468px перестраивается в 2 строки */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-y-2.5 xs:gap-y-0">
          
          {/* Логотип и имя специалиста */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 dark:bg-obsidian-850 dark:border-obsidian-700 flex items-center justify-center group-hover:border-growth-500/50 transition-colors">
              <span className="font-mono font-bold text-growth-600 dark:text-growth-400 text-base">МП</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white tracking-tight text-sm flex items-center gap-1.5">
                Михаил Павлов
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block">
                Поисковая оптимизация сайтов
              </span>
            </div>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors hover:text-growth-600 dark:hover:text-growth-400 text-xs uppercase tracking-wider font-mono ${
                    isActive
                      ? 'text-growth-600 dark:text-growth-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Панель действий: переключатель темы, контакты, CTA-кнопка и гамбургер */}
          <div className="flex items-center justify-between xs:justify-end space-x-2 sm:space-x-3 w-full xs:w-auto">
            {/* Переключатель светлой / тёмной темы */}
            <ThemeToggle />

            <a
              href={`https://t.me/${contactInfo.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 hover:text-slate-900 dark:bg-obsidian-850 dark:hover:bg-obsidian-800 dark:border-obsidian-750 text-xs font-mono dark:text-slate-200 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
              <span>@{contactInfo.telegram}</span>
            </a>

            <a
              href="#audit-form"
              className="inline-flex items-center justify-center flex-1 xs:flex-initial gap-2 px-3.5 sm:px-4 py-2 rounded-lg bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md shadow-growth-950/20 dark:shadow-growth-950/40 text-center"
            >
              <span>Оценка проекта</span>
            </a>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 dark:bg-obsidian-850 dark:border-obsidian-750 dark:text-slate-300 dark:hover:text-white transition-colors flex-shrink-0"
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
