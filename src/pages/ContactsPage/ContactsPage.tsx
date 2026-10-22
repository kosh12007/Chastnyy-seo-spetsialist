import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ShieldCheck } from 'lucide-react';
import { contactInfo } from '@data/contactInfo';
import { ContactForm } from '@/components/sections/ContactForm/ContactForm';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { generateLocalBusinessSchema } from '@utils/schemaGenerators';
import { AnimatedSection } from '@components/common';
import { Link } from 'react-router-dom';

/**
 * Страница контактов эксперта.
 * Поддерживает адаптивную светлую тему и ночную дизайн-систему Obsidian & Emerald Growth.
 */
export const ContactsPage: React.FC = () => {
  const seo = getSeoData('contacts');
  const ogMeta = generateOgMeta('/kontakty/', seo.title, seo.description);
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${SITE_URL}/kontakty/`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        {/* Шапка страницы контактов */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 grid-bg transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-700 dark:text-growth-400 font-mono text-xs uppercase tracking-wider mb-4 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Прямой контакт без посредников</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Контакты и связь
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
              Вы связываетесь напрямую со мной. Отвечаю на сообщения в Telegram и на заявки в течение 1–2 часов в рабочее время.
            </p>
          </div>
        </section>

        {/* Основной блок: Контакты + Форма */}
        <section className="py-12 md:py-16 bg-slate-50/50 dark:bg-obsidian-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Левая колонка: Прямые каналы */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
                    Каналы связи
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                    Прямая связь со специалистом
                  </h2>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <a
                    href={`https://t.me/${contactInfo.telegram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 rounded-xl hover:border-sky-500/50 hover:bg-slate-50 dark:hover:bg-obsidian-850 shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                        Telegram @{contactInfo.telegram}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-[11px] font-sans">Самый оперативный способ связи</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 rounded-xl hover:border-growth-500/50 hover:bg-slate-50 dark:hover:bg-obsidian-850 shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-growth-500/10 border border-growth-500/20 flex items-center justify-center text-growth-600 dark:text-growth-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white group-hover:text-growth-600 dark:group-hover:text-growth-300 transition-colors">
                        {contactInfo.phone}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-[11px] font-sans">Пн–Пт с 09:30 до 19:00 МСК</div>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 rounded-xl hover:border-growth-500/50 hover:bg-slate-50 dark:hover:bg-obsidian-850 shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">WhatsApp</div>
                      <div className="text-slate-500 dark:text-slate-400 text-[11px] font-sans">Сообщения и документы</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 rounded-xl hover:border-growth-500/50 hover:bg-slate-50 dark:hover:bg-obsidian-850 shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white group-hover:text-growth-600 dark:group-hover:text-growth-300 transition-colors">
                        {contactInfo.email}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-[11px] font-sans">Для ТЗ, доступов и отчётов</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-slate-100/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-850 rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-slate-200/80 dark:bg-obsidian-800/80 border border-slate-300 dark:border-obsidian-750 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 dark:text-slate-200">{contactInfo.workingHours}</div>
                      <div className="text-slate-500 text-[11px] font-sans">Суббота и воскресенье — дежурный мониторинг</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-100/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-850 rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-slate-200/80 dark:bg-obsidian-800/80 border border-slate-300 dark:border-obsidian-750 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 dark:text-slate-200">{contactInfo.address}</div>
                      <div className="text-slate-500 text-[11px] font-sans">Дистанционная работа по всей РФ</div>
                    </div>
                  </div>
                </div>

                {/* Плашка реквизитов */}
                <div className="p-4 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 text-xs font-mono space-y-2 shadow-sm transition-colors">
                  <div className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-growth-600 dark:text-growth-400" />
                    <span>Для бухгалтерии юрлиц</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-[11px]">
                    Официальный договор с самозанятым, закрывающие акты и электронные чеки ФНС «Мой налог».
                  </p>
                  <Link
                    to="/rekvizity/"
                    className="inline-block text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 underline font-mono text-[11px] font-semibold"
                  >
                    Открыть полные реквизиты →
                  </Link>
                </div>
              </div>

              {/* Правая колонка: Форма связи */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-xl dark:shadow-2xl transition-colors">
                  <div className="mb-6">
                    <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-1 font-semibold">
                      Форма заявки
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                      Напишите мне
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-sans">
                      Заполните форму, и я свяжусь с вами в течение рабочего дня.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};
