import React from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { contactInfo } from '@data/contactInfo';

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Готовы увеличить трафик и заявки?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Оставьте заявку — проведу бесплатный аудит вашего сайта и расскажу,
            как вывести его в ТОП за 30 минут.
          </p>

          {/* Форма */}
          <form className="flex flex-col sm:flex-row gap-4 mb-6 max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Ваше имя"
              className="bg-white text-dark-900 placeholder:text-dark-800 border-0"
            />
            <Input
              type="tel"
              placeholder="Телефон или Email"
              className="bg-white text-dark-900 placeholder:text-dark-800 border-0"
            />
          </form>

          <Button variant="primary" size="lg" className="bg-accent-600 hover:bg-accent-700 mb-6">
            Получить бесплатный аудит
          </Button>

          <p className="text-sm text-primary-200 mb-8">
            ☑️ Согласен с политикой конфиденциальности
          </p>

          {/* Альтернатива */}
          <div className="pt-8 border-t border-primary-500">
            <p className="text-primary-100 mb-3">или позвоните мне напрямую:</p>
            <a href={`tel:${contactInfo.phone}`} className="text-2xl md:text-3xl font-bold hover:text-primary-200 transition-colors">
              {contactInfo.phone}
            </a>
            <div className="flex justify-center gap-4 mt-4">
              <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a href={`https://t.me/${contactInfo.telegram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Send className="w-5 h-5" />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
