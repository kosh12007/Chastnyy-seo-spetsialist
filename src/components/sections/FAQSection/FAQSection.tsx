import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '@data/faq';
import { clsx } from 'clsx';

/**
 * Секция часто задаваемых вопросов (FAQ)
 * Оформлена в темной премиальной палитре с акцентами изумрудного роста.
 * Включает разъяснения по гарантиям, срокам и работе с самозанятым по 422-ФЗ.
 */
export const FAQSection: React.FC = () => {
  // По умолчанию открыт первый вопрос
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-b border-obsidian-850 bg-obsidian-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-growth-400 mb-2">
            Вопросы и ответы
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            Часто задаваемые вопросы
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
            Честные и прямые ответы о сроках, гарантиях, оплате и формате сотрудничества
          </p>
        </div>

        {/* Список вопросов аккордеона */}
        <div className="space-y-3 font-mono text-xs">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-obsidian-800 bg-obsidian-900 overflow-hidden transition-colors hover:border-obsidian-750"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-white flex items-center justify-between gap-4 hover:bg-obsidian-850/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-sans font-medium text-slate-100">
                    {index + 1}. {item.question}
                  </span>
                  <ChevronDown
                    className={clsx(
                      'w-4 h-4 text-growth-400 flex-shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-180 text-growth-300'
                    )}
                  />
                </button>

                <div
                  className={clsx(
                    'transition-all duration-300 ease-in-out overflow-hidden',
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="p-4 sm:p-5 pt-0 text-slate-300 font-sans leading-relaxed text-xs sm:text-sm border-t border-obsidian-800/60 bg-obsidian-950/40">
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
