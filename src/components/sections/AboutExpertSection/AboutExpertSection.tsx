import React from 'react';
import { UserCheck, Send, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo } from '@data/contactInfo';

/**
 * Секция "Обо мне" — человечный блок эксперта с личной позицией и биографией.
 * Поддерживает адаптивную светлую тему и ночную эстетику Dark Obsidian & Emerald Growth.
 */
export const AboutExpertSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-200 dark:border-obsidian-850 bg-slate-100/60 dark:bg-obsidian-900/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Фото / Профиль */}
          <div className="md:col-span-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-4 shadow-xl transition-colors">
              <div className="aspect-square rounded-xl bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-750 flex items-center justify-center">
                <UserCheck className="w-20 h-20 text-growth-600 dark:text-growth-400" />
              </div>
              <div className="text-center font-mono">
                <div className="font-bold text-slate-900 dark:text-white text-base">Михаил Павлов</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Практикующий SEO-специалист</div>
                <div className="text-[11px] text-growth-700 dark:text-growth-400 font-semibold mt-1">В поиске с 2012 года</div>
              </div>
            </div>
          </div>

          {/* Биография и философия */}
          <div className="md:col-span-7 space-y-4 text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
            <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 font-semibold">
              Личность и опыт
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              «Я сознательно не строю поточное агентство»
            </h2>
            
            <p>
              В SEO я пришел в 2012 году. Прошел путь от технического оптимизатора до тимлида отдела поисковой оптимизации в крупном московском digital-агентстве.
            </p>
            <p>
              С 2018 года работаю полностью самостоятельно как частный эксперт (плательщик налога на профессиональный доход). Мой выбор — вести небольшое количество проектов (до 5–6 одновременно), но делать это с глубоким погружением в бизнес заказчика, а не ставить работу на конвейер.
            </p>
            <p>
              Регулярно тестирую изменения алгоритмов Яндекса и Google, использую профессиональный софт (Keys.so, Screaming Frog, Топвизор) и несу персональную ответственность за каждый сайт.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href={`https://t.me/${contactInfo.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400 hover:underline font-semibold"
              >
                <Send className="w-4 h-4" />
                <span>Telegram: @{contactInfo.telegram}</span>
              </a>
              <span className="text-slate-300 dark:text-obsidian-700">|</span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{contactInfo.email}</span>
              </a>
              <span className="text-slate-300 dark:text-obsidian-700">|</span>
              <Link
                to="/rekvizity/"
                className="flex items-center gap-1 text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 transition-colors underline font-medium"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Реквизиты</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
