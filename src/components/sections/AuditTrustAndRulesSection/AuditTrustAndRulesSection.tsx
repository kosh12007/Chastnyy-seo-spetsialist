import React from 'react';
import { Link } from 'react-router-dom';
import { BadgePercent, Award } from 'lucide-react';
import { AnimatedSection } from '@/components/common';

/**
 * Свойства секции правил зачета и доверия
 */
export interface AuditTrustAndRulesSectionProps {
  id?: string;
  rulesTitle?: string;
  ruleDeductionText: React.ReactNode;
  ruleScopeText: React.ReactNode;
  trustTitle?: string;
  trustText?: string;
}

/**
 * Универсальная секция «Правила зачета стоимости, границы услуги и подтверждение опыта».
 * Включает карточку с условиями 100% зачета в продвижение и карточку ссылок на кейсы/отзывы/реквизиты.
 */
export const AuditTrustAndRulesSection: React.FC<AuditTrustAndRulesSectionProps> = ({
  id = 'trust-rules',
  rulesTitle = 'Условия зачета 100% стоимости и границы услуги',
  ruleDeductionText,
  ruleScopeText,
  trustTitle = 'Кейсы, отзывы клиентов и официальные реквизиты',
  trustText = 'Все работы выполняются официально по договору с предоставлением закрывающих чеков. Ознакомьтесь с примерами решенных задач, отзывами заказчиков и юридической информацией в профильных разделах сайта:',
}) => {
  return (
    <AnimatedSection variant="slide-up">
      <section
        id={id}
        className="py-16 md:py-20 bg-slate-50 dark:bg-obsidian-900/40 border-b border-slate-200 dark:border-obsidian-850 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Карточка 1: Условия зачета стоимости и границы услуги */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-growth-500/10 text-growth-600 dark:text-growth-400 flex items-center justify-center shrink-0">
                  <BadgePercent className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {rulesTitle}
                </h2>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                <p>
                  <strong>1. Правило 100% зачета в тариф продвижения:</strong> {ruleDeductionText}
                </p>
                <p>
                  <strong>2. Разграничение диагностики и внедрения:</strong> {ruleScopeText}
                </p>
              </div>
            </div>

            {/* Карточка 2: Ссылки на кейсы, отзывы, эксперта и реквизиты */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-growth-500/10 text-growth-600 dark:text-growth-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {trustTitle}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                  {trustText}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Link
                  to="/portfolio/"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/40 text-center text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-growth-600 dark:hover:text-growth-400 transition-colors"
                >
                  Кейсы и портфолио
                </Link>
                <Link
                  to="/otzyvy/"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/40 text-center text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-growth-600 dark:hover:text-growth-400 transition-colors"
                >
                  Отзывы клиентов
                </Link>
                <Link
                  to="/obo-mne/"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/40 text-center text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-growth-600 dark:hover:text-growth-400 transition-colors"
                >
                  Об эксперте
                </Link>
                <Link
                  to="/rekvizity/"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/40 text-center text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-growth-600 dark:hover:text-growth-400 transition-colors"
                >
                  Реквизиты и ИНН
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};
