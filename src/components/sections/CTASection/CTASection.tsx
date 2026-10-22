import React, { useState } from 'react';
import { Send, CheckCircle, ShieldCheck, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo } from '@data/contactInfo';

type ReplyChannel = 'telegram' | 'whatsapp' | 'call';

/**
 * Секция призыва к действию (CTA) с формой экспресс-оценки проекта.
 * Полностью соответствует требованиям 152-ФЗ (согласие не предзаполнено)
 * и закона о рекламе 38-ФЗ (без нереалистичных 100% обещаний).
 */
export const CTASection: React.FC = () => {
  const [siteUrl, setSiteUrl] = useState('');
  const [contact, setContact] = useState('');
  const [replyChannel, setReplyChannel] = useState<ReplyChannel>('telegram');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!siteUrl.trim() || !contact.trim()) {
      setErrorMessage('Пожалуйста, заполните адрес сайта и контактные данные.');
      return;
    }

    if (!consent) {
      setErrorMessage('Необходимо подтвердить согласие на обработку персональных данных.');
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    // Имитация безопасной отправки заявки
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="audit-form" className="py-16 md:py-24 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 border-t border-obsidian-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-obsidian-900/90 border border-obsidian-800 shadow-2xl backdrop-blur-sm">
          
          {/* Верхняя плашка */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-400 font-mono text-xs uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Без навязчивых продаж и спама</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              Получить предварительную оценку проекта
            </h2>
            <p className="text-slate-300 text-sm font-sans leading-relaxed max-w-2xl">
              Пришлите ссылку на сайт. Я проведу предварительную оценку по открытым данным, определю критические точки потерь органики и сориентирую по реалистичным срокам и вилке бюджета.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-6 sm:p-8 rounded-xl bg-growth-950/40 border border-growth-500/40 text-growth-400 font-mono text-sm animate-fade-in">
              <div className="flex items-center gap-3 text-white font-bold text-lg mb-2">
                <CheckCircle className="w-6 h-6 text-growth-400" />
                <span>Спасибо! Запрос успешно принят.</span>
              </div>
              <p className="text-slate-300 font-sans leading-relaxed text-sm">
                Я лично ознакомлюсь с вашим сайтом (<span className="text-white font-mono">{siteUrl}</span>) и свяжусь с вами через выбранный канал (<span className="text-growth-300 capitalize">{replyChannel}</span>) в течение рабочего дня. Конфиденциальность гарантируется.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setSiteUrl('');
                  setContact('');
                  setConsent(false);
                }}
                className="mt-5 text-xs text-slate-400 hover:text-white underline font-mono cursor-pointer"
              >
                Отправить еще один запрос
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/40 text-red-300 text-xs font-sans">
                  {errorMessage}
                </div>
              )}

              {/* Поля сайта и контакта */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-site" className="block text-slate-300 uppercase tracking-wider mb-2 font-mono text-xs">
                    Адрес сайта *
                  </label>
                  <input
                    type="text"
                    id="form-site"
                    value={siteUrl}
                    onChange={(e) => setSiteUrl(e.target.value)}
                    required
                    placeholder="mysite.ru"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-obsidian-750 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-growth-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-contact" className="block text-slate-300 uppercase tracking-wider mb-2 font-mono text-xs">
                    Телефон или Telegram *
                  </label>
                  <input
                    type="text"
                    id="form-contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    placeholder="+7 (___) ___-__-__ или @username"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-obsidian-750 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-growth-500 transition-colors"
                  />
                </div>
              </div>

              {/* Выбор канала ответа */}
              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-2 font-mono text-xs">
                  Куда удобнее ответить?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label
                    className={`p-3 rounded-lg border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      replyChannel === 'telegram'
                        ? 'bg-growth-500/10 border-growth-500 text-white'
                        : 'bg-obsidian-950 border-obsidian-750 text-slate-400 hover:border-obsidian-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="reply_channel"
                      value="telegram"
                      checked={replyChannel === 'telegram'}
                      onChange={() => setReplyChannel('telegram')}
                      className="sr-only"
                    />
                    <Send className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-xs font-mono font-medium">Telegram</span>
                  </label>

                  <label
                    className={`p-3 rounded-lg border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      replyChannel === 'whatsapp'
                        ? 'bg-growth-500/10 border-growth-500 text-white'
                        : 'bg-obsidian-950 border-obsidian-750 text-slate-400 hover:border-obsidian-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="reply_channel"
                      value="whatsapp"
                      checked={replyChannel === 'whatsapp'}
                      onChange={() => setReplyChannel('whatsapp')}
                      className="sr-only"
                    />
                    <MessageCircle className="w-3.5 h-3.5 text-growth-400" />
                    <span className="text-xs font-mono font-medium">WhatsApp</span>
                  </label>

                  <label
                    className={`p-3 rounded-lg border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      replyChannel === 'call'
                        ? 'bg-growth-500/10 border-growth-500 text-white'
                        : 'bg-obsidian-950 border-obsidian-750 text-slate-400 hover:border-obsidian-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="reply_channel"
                      value="call"
                      checked={replyChannel === 'call'}
                      onChange={() => setReplyChannel('call')}
                      className="sr-only"
                    />
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs font-mono font-medium">Звонок</span>
                  </label>
                </div>
              </div>

              {/* 152-ФЗ Чекбокс согласия (НЕ предзаполнен!) */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="pd-consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 rounded border-obsidian-700 bg-obsidian-950 text-growth-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-400 font-sans leading-relaxed select-none">
                    Я даю согласие на обработку моих персональных данных в соответствии с{' '}
                    <Link
                      to="/soglasie-opd/"
                      target="_blank"
                      className="text-growth-400 underline hover:text-growth-300 font-medium"
                    >
                      Согласием на обработку данных
                    </Link>{' '}
                    и принимаю условия{' '}
                    <Link
                      to="/politika-konfidentsialnosti/"
                      target="_blank"
                      className="text-growth-400 underline hover:text-growth-300 font-medium"
                    >
                      Политики конфиденциальности
                    </Link>.
                  </span>
                </label>
              </div>

              {/* Кнопка отправки */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-growth-600 hover:bg-growth-500 active:bg-growth-700 disabled:opacity-50 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-growth-950/50"
                >
                  <span>{isSubmitting ? 'Отправка данных...' : 'Отправить на экспресс-оценку'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Прямой контакт для тех, кто не хочет заполнять форму */}
          <div className="mt-8 pt-8 border-t border-obsidian-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="text-slate-400 font-sans">
              Предпочитаете написать напрямую без заполнения формы?
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`https://t.me/${contactInfo.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950 border border-obsidian-750 text-sky-400 hover:border-sky-500/50 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram</span>
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950 border border-obsidian-750 text-growth-400 hover:border-growth-500/50 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950 border border-obsidian-750 text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
