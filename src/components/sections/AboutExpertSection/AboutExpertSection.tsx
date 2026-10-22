import React from 'react';
import { UserCheck, Send, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo } from '@data/contactInfo';

/**
 * Секция "Обо мне" — человечный блок эксперта с личной позицией и биографией.
 */
export const AboutExpertSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-dark-200">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Фото / Профиль */}
          <div className="md:col-span-5">
            <div className="p-6 rounded-2xl bg-dark-900 text-white border border-dark-800 space-y-4 shadow-xl">
              <div className="aspect-square rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center">
                <UserCheck className="w-20 h-20 text-accent-400" />
              </div>
              <div className="text-center font-mono">
                <div className="font-bold text-white text-base font-heading">Михаил Павлов</div>
                <div className="text-xs text-dark-400">Практикующий SEO-специалист</div>
                <div className="text-[11px] text-accent-400 mt-1">В поиске с 2012 года</div>
              </div>
            </div>
          </div>

          {/* Биография и философия */}
          <div className="md:col-span-7 space-y-4 text-sm text-dark-700 font-sans leading-relaxed">
            <div className="text-xs font-mono uppercase tracking-widest text-accent-700 font-bold">
              Личность и опыт
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-dark-950 tracking-tight">
              «Я сознательно не строю поточное агентство»
            </h2>
            
            <p>
              В SEO я пришел в 2012 году. Прошел путь от технического оптимизатора до тимлида отдела поисковой оптимизации в крупном московском digital-агентстве.
            </p>
            <p>
              С 2018 года работаю полностью самостоятельно как частный эксперт (плательщик налога на профессиональный доход). Мой выбор — вести небольшое количество проектов (до 5–6 одновременно), но делать это с глубоким погружением в бизнес заказчика, а не ставить работу на бездушный конвейер.
            </p>
            <p>
              Регулярно тестирую изменения алгоритмов Яндекса и Google, использую профессиональный софт (Keys.so, Screaming Frog, Топвизор) и несу персональную ответственность за каждый сайт.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href={`https://t.me/${contactInfo.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sky-600 hover:underline font-semibold"
              >
                <Send className="w-4 h-4" />
                Telegram: @{contactInfo.telegram}
              </a>
              <span className="text-dark-300">|</span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-1.5 text-dark-700 hover:text-dark-950 transition-colors"
              >
                <Mail className="w-4 h-4 text-dark-400" />
                {contactInfo.email}
              </a>
              <span className="text-dark-300">|</span>
              <Link
                to="/rekvizity/"
                className="flex items-center gap-1 text-dark-700 hover:text-accent-700 transition-colors underline"
              >
                <FileText className="w-3.5 h-3.5" />
                Реквизиты
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

