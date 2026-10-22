import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Send, Phone } from 'lucide-react';
import { ThemeToggle } from '@components/common';
import { navigationLinks } from '@data/navigation';
import { contactInfo } from '@data/contactInfo';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const location = useLocation();

  return (
    <div className="lg:hidden animate-slide-down border-t border-slate-200 dark:border-obsidian-800 bg-white/98 dark:bg-obsidian-950 px-4 py-6 shadow-2xl backdrop-blur-lg transition-colors">
      <nav className="flex flex-col space-y-2 font-mono text-xs">
        {navigationLinks.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className={`py-2.5 px-3 rounded-lg uppercase tracking-wider transition-colors ${
                isActive
                  ? 'bg-growth-500/15 text-growth-700 dark:text-growth-400 font-bold border border-growth-500/30'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-obsidian-900 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <div className="pt-4 border-t border-slate-200 dark:border-obsidian-850 space-y-3">
          {/* Переключатель темы для мобильного интерфейса */}
          <div className="flex items-center justify-between py-1 px-3 rounded-lg bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
            <span className="text-slate-600 dark:text-slate-400 font-mono text-xs">Оформление:</span>
            <ThemeToggle showLabel={true} />
          </div>

          <a
            href={`https://t.me/${contactInfo.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 dark:bg-obsidian-900 border border-slate-300 dark:border-obsidian-750 text-slate-800 dark:text-slate-200 text-xs font-mono transition-colors"
          >
            <Send className="w-4 h-4 text-sky-500 dark:text-sky-400" />
            <span>Написать в Telegram @{contactInfo.telegram}</span>
          </a>

          <a
            href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 dark:bg-obsidian-900 border border-slate-300 dark:border-obsidian-750 text-slate-800 dark:text-slate-200 text-xs font-mono transition-colors"
          >
            <Phone className="w-4 h-4 text-growth-600 dark:text-growth-400" />
            <span>{contactInfo.phone}</span>
          </a>

          <a
            href="#audit-form"
            onClick={onClose}
            className="block text-center py-3 rounded-lg bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold uppercase tracking-wider transition-colors shadow-md shadow-growth-950/20"
          >
            Получить экспресс-оценку
          </a>
        </div>
      </nav>
    </div>
  );
};
