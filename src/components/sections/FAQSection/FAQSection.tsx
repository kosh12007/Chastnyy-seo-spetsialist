import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '@data/faq';
import { clsx } from 'clsx';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-dark-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Частые вопросы</h2>
          <p className="text-lg text-dark-800 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о SEO-продвижении
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-dark-50 transition-colors"
              >
                <span className="font-semibold text-dark-900 pr-4">{item.question}</span>
                <ChevronDown
                  className={clsx(
                    'w-5 h-5 text-dark-800 flex-shrink-0 transition-transform duration-300',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={clsx(
                  'overflow-hidden transition-all duration-300',
                  openIndex === index ? 'max-h-96 pb-5 md:pb-6' : 'max-h-0'
                )}
              >
                <p className="px-5 md:px-6 text-dark-800 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
