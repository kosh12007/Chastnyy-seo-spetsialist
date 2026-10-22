import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { contactInfo } from '@data/contactInfo';
import { socialLinks } from '@data/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="container py-12 md:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <Link to="/" className="text-xl font-bold font-heading mb-4 block">
              SEO Специалист
            </Link>
            <p className="text-dark-100 text-sm mb-4">
              Частный SEO-специалист с опытом 8+ лет.
              Продвижение сайтов в ТОП Яндекс и Google.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={link.name}
                >
                  {link.name === 'WhatsApp' && <MessageCircle className="w-5 h-5" />}
                  {link.name === 'Telegram' && <Send className="w-5 h-5" />}
                  {link.name === 'VK' && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.19 1.368 1.259 2.184 1.814.616.42 1.084.328 1.084.328l2.178-.03s1.14-.07.599-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.246.999-1.33 1.398-2.142 1.273-2.489-.12-.331-.853-.244-.853-.244l-2.445.015s-.182-.025-.316.056c-.131.079-.216.263-.216.263s-.388 1.035-.906 1.92c-1.094 1.86-1.533 1.96-1.712 1.844-.416-.27-.312-1.087-.312-1.665 0-1.809.274-2.563-.534-2.759-.268-.065-.465-.108-1.15-.115-.879-.009-1.625.003-2.045.21-.28.138-.496.446-.365.463.163.021.532.1.728.364.254.34.245 1.106.245 1.106s.146 2.13-.34 2.394c-.333.182-.789-.19-1.764-1.89-.502-.874-.88-1.84-.88-1.84s-.073-.178-.204-.274c-.158-.116-.38-.153-.38-.153l-2.324.015s-.35.01-.478.162c-.114.135-.009.414-.009.414s1.837 4.3 3.917 6.467c1.906 1.988 4.074 1.858 4.074 1.858h.982z"/></svg>}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/uslugi/seo-prodvizhenie/" className="text-dark-100 hover:text-white transition-colors">SEO-продвижение</Link></li>
              <li><Link to="/uslugi/seo-audit/" className="text-dark-100 hover:text-white transition-colors">SEO-аудит</Link></li>
              <li><Link to="/uslugi/yandex/" className="text-dark-100 hover:text-white transition-colors">Продвижение в Яндекс</Link></li>
              <li><Link to="/uslugi/google/" className="text-dark-100 hover:text-white transition-colors">Продвижение в Google</Link></li>
              <li><Link to="/uslugi/content-marketing/" className="text-dark-100 hover:text-white transition-colors">Контент-маркетинг</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/obo-mne/" className="text-dark-100 hover:text-white transition-colors">Обо мне</Link></li>
              <li><Link to="/portfolio/" className="text-dark-100 hover:text-white transition-colors">Кейсы</Link></li>
              <li><Link to="/otzyvy/" className="text-dark-100 hover:text-white transition-colors">Отзывы</Link></li>
              <li><Link to="/blog/" className="text-dark-100 hover:text-white transition-colors">Блог</Link></li>
              <li><Link to="/ceny/" className="text-dark-100 hover:text-white transition-colors">Цены</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-dark-100 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-dark-100 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-dark-100 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`https://t.me/${contactInfo.telegram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-dark-100 hover:text-white transition-colors">
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
              </li>
              <li className="flex items-start gap-2 text-dark-100">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-2 text-dark-100">
                <Clock className="w-4 h-4" />
                {contactInfo.workingHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-100">
          <p>© {new Date().getFullYear()} SEO Специалист. Все права защищены.</p>
          <div className="flex gap-6">
            <Link to="/politika-konfidentsialnosti/" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="/soglasie-opd/" className="hover:text-white transition-colors">Согласие на обработку ПД</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
