import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MessageCircle, Send, ShieldCheck } from 'lucide-react';
import { contactInfo } from '@data/contactInfo';

/**
 * Подвал сайта с официальными юридическими реквизитами самозанятого
 * и ссылками на документы в соответствии с 152-ФЗ и 422-ФЗ.
 * Выдержан в палитре Dark Obsidian & Emerald Growth.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian-950 text-slate-400 border-t border-obsidian-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Колонка 1: Эксперт и статус */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold font-heading text-white block">
              Михаил Павлов
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              Частное поисковое продвижение коммерческих сайтов и e-commerce в Яндекс и Google. Персональное ведение проектов без конвейера.
            </p>
            <div className="p-3.5 rounded-xl bg-obsidian-900 border border-obsidian-800 text-[11px] font-mono text-slate-300 space-y-1">
              <div className="text-white font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-growth-400" />
                <span>Самозанятый (НПД)</span>
              </div>
              <div className="text-slate-300">Павлов Михаил Васильевич</div>
              <div className="text-slate-400">ИНН: 772839102948 • г. Москва</div>
              <div className="text-slate-400 pt-1 border-t border-obsidian-800 text-[10px]">
                Официальный договор, чеки ФНС «Мой налог», без НДС
              </div>
            </div>
          </div>

          {/* Колонка 2: Услуги */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Услуги
            </h3>
            <ul className="space-y-2.5 text-xs font-sans">
              <li><Link to="/uslugi/seo-prodvizhenie/" className="hover:text-growth-400 transition-colors">Комплексное SEO-продвижение</Link></li>
              <li><Link to="/uslugi/seo-audit/" className="hover:text-growth-400 transition-colors">Технический SEO-аудит</Link></li>
              <li><Link to="/uslugi/yandex/" className="hover:text-growth-400 transition-colors">Продвижение в Яндекс</Link></li>
              <li><Link to="/uslugi/google/" className="hover:text-growth-400 transition-colors">Продвижение в Google</Link></li>
              <li><Link to="/uslugi/content-marketing/" className="hover:text-growth-400 transition-colors">Коммерческий контент-маркетинг</Link></li>
              <li><Link to="/uslugi/konsultatsiya/" className="hover:text-growth-400 transition-colors">SEO-консалтинг</Link></li>
            </ul>
          </div>

          {/* Колонка 3: Разделы сайта */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Навигация
            </h3>
            <ul className="space-y-2.5 text-xs font-sans">
              <li><Link to="/obo-mne/" className="hover:text-growth-400 transition-colors">Обо мне и опыт</Link></li>
              <li><Link to="/portfolio/" className="hover:text-growth-400 transition-colors">Кейсы с аналитикой</Link></li>
              <li><Link to="/ceny/" className="hover:text-growth-400 transition-colors">Тарифы и стоимость</Link></li>
              <li><Link to="/otzyvy/" className="hover:text-growth-400 transition-colors">Отзывы клиентов</Link></li>
              <li><Link to="/blog/" className="hover:text-growth-400 transition-colors">Блог и статьи</Link></li>
              <li><Link to="/rekvizity/" className="hover:text-growth-400 transition-colors font-medium text-slate-200">Реквизиты и условия для юрлиц</Link></li>
            </ul>
          </div>

          {/* Колонка 4: Прямая связь */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Прямая связь
            </h3>
            <ul className="space-y-3 text-xs font-sans">
              <li>
                <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 text-white hover:text-growth-400 font-semibold transition-colors">
                  <Phone className="w-4 h-4 text-growth-400" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`https://t.me/${contactInfo.telegram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors">
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Telegram: @{contactInfo.telegram}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-growth-400 transition-colors">
                  <MessageCircle className="w-4 h-4 text-growth-400" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 font-mono text-[11px] pt-1 border-t border-obsidian-800">
                <Clock className="w-3.5 h-3.5" />
                <span>{contactInfo.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Нижняя полоса с 152-ФЗ и реквизитами */}
        <div className="mt-12 pt-8 border-t border-obsidian-850 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
          <p>© {new Date().getFullYear()} Михаил Павлов. Частное продвижение сайтов.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link to="/rekvizity/" className="hover:text-white transition-colors">
              Реквизиты и условия для юрлиц
            </Link>
            <Link to="/politika-konfidentsialnosti/" className="hover:text-white transition-colors">
              Политика конфиденциальности (152-ФЗ)
            </Link>
            <Link to="/soglasie-opd/" className="hover:text-white transition-colors">
              Согласие на обработку данных
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
