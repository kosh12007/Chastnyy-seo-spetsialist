import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '@data/faq';
import { clsx } from 'clsx';

/**
 * Интерфейс отдельного вопроса-ответа FAQ
 */
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Свойства компонента секции FAQ
 */
export interface FAQSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: React.ReactNode;
  items?: FAQItem[];
  initialOpenIndex?: number | null;
}

/**
 * Универсальная секция часто задаваемых вопросов (FAQ).
 * Поддерживает кастомные списки вопросов через props items, аккордеон и ночную тему.
 */
export const FAQSection: React.FC<FAQSectionProps> = ({
  id = 'faq',
  eyebrow = 'Вопросы и ответы',
  title = 'Часто задаваемые вопросы',
  subtitle = 'Честные и прямые ответы о сроках, гарантиях, оплате и формате сотрудничества',
  items = faqData,
  initialOpenIndex = 0,
}) => {
  // По умолчанию открыт первый вопрос (или переданный индекс)
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id={id}
      className="py-16 md:py-24 border-b border-slate-200 dark:border-obsidian-850 bg-slate-50 dark:bg-obsidian-950 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
            {eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            {title}
          </h2>
          {subtitle && (
            <div className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto font-sans leading-relaxed">
              {subtitle}
            </div>
          )}
        </div>

        {/* Список вопросов аккордеона */}
        <div className="space-y-3 font-mono text-xs">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 dark:border-obsidian-800 bg-white dark:bg-obsidian-900 overflow-hidden transition-colors hover:border-slate-300 dark:hover:border-obsidian-750 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-obsidian-850/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-sans font-medium text-slate-900 dark:text-slate-100">
                    {index + 1}. {item.question}
                  </span>
                  <ChevronDown
                    className={clsx(
                      'w-4 h-4 text-growth-600 dark:text-growth-400 flex-shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-180 text-growth-700 dark:text-growth-300'
                    )}
                  />
                </button>

                <div
                  className={clsx(
                    'transition-all duration-300 ease-in-out overflow-hidden',
                    isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="p-4 sm:p-5 pt-0 text-slate-700 dark:text-slate-300 font-sans leading-relaxed text-xs sm:text-sm border-t border-slate-100 dark:border-obsidian-800/60 bg-slate-50/70 dark:bg-obsidian-950/40">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
