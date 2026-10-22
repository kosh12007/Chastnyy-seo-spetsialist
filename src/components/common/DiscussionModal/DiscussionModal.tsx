import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PhoneInputField } from '@ui/PhoneInput';
import { discussionFormSchema, type DiscussionFormData } from '@utils/discussionValidation';
import { contactInfo } from '@data/contactInfo';
import { Link } from 'react-router-dom';

interface DiscussionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Модальное окно обсуждения проекта.
 * Поддерживает адаптивную светлую тему и ночную эстетику Dark Obsidian & Emerald Growth.
 * Включает строгое соответствие 152-ФЗ.
 */
export const DiscussionModal: React.FC<DiscussionModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DiscussionFormData>({
    resolver: zodResolver(discussionFormSchema),
    defaultValues: { name: '', phone: '', websiteUrl: '', message: '' },
  });

  const phoneValue = watch('phone');

  const onSubmit = (data: DiscussionFormData) => {
    if (!consent) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    console.log('Discussion submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setConsent(false);
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 animate-slide-up relative max-h-[90vh] overflow-y-auto text-slate-800 dark:text-slate-100 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-obsidian-800 transition-colors"
          aria-label="Закрыть модальное окно"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-growth-500/15 border border-growth-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-growth-600 dark:text-growth-400">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-mono">Заявка отправлена!</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm font-sans">
              Свяжусь с вами в течение рабочего времени для предметного обсуждения задач сайта.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-1 font-semibold">
                Предварительная консультация
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Обсудить проект
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-sans mt-1">
                Расскажите о вашем проекте — определю точки роста и подготовлю варианты стратегии.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  placeholder="Иван"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-300 dark:border-obsidian-750 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-growth-500 transition-colors"
                  {...register('name')}
                />
                {errors.name?.message && (
                  <span className="text-xs text-red-500 mt-1 block font-mono">{errors.name.message}</span>
                )}
              </div>

              <div>
                <PhoneInputField
                  label="Телефон *"
                  value={phoneValue}
                  onChange={(value) => setValue('phone', value, { shouldValidate: true })}
                  error={errors.phone?.message}
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                  Адрес сайта
                </label>
                <input
                  type="text"
                  placeholder="https://mysite.ru"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-300 dark:border-obsidian-750 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-growth-500 transition-colors"
                  {...register('websiteUrl')}
                />
                {errors.websiteUrl?.message && (
                  <span className="text-xs text-red-500 mt-1 block font-mono">{errors.websiteUrl.message}</span>
                )}
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                  Описание проекта или задачи
                </label>
                <textarea
                  rows={3}
                  placeholder="Опишите нишу, текущую ситуацию с поисковым трафиком и цели..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-300 dark:border-obsidian-750 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-growth-500 transition-colors resize-none"
                  {...register('message')}
                />
                {errors.message?.message && (
                  <span className="text-xs text-red-500 mt-1 block font-mono">{errors.message.message}</span>
                )}
              </div>

              {/* 152-ФЗ Чекбокс согласия */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (e.target.checked) setConsentError(false);
                    }}
                    className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-obsidian-700 bg-white dark:bg-obsidian-950 text-growth-600 dark:text-growth-500 focus:ring-0 cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-sans leading-relaxed select-none">
                    Согласен с{' '}
                    <Link
                      to="/politika-konfidentsialnosti/"
                      target="_blank"
                      className="text-growth-700 dark:text-growth-400 underline hover:text-growth-800 dark:hover:text-growth-300 font-medium"
                    >
                      политикой конфиденциальности
                    </Link>{' '}
                    и{' '}
                    <Link
                      to="/soglasie-opd/"
                      target="_blank"
                      className="text-growth-700 dark:text-growth-400 underline hover:text-growth-800 dark:hover:text-growth-300 font-medium"
                    >
                      обработкой персональных данных
                    </Link>
                  </span>
                </label>
                {consentError && (
                  <span className="text-xs text-red-500 mt-1 block font-mono">
                    Подтвердите согласие для отправки формы
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-growth-600 hover:bg-growth-500 active:bg-growth-700 text-obsidian-950 font-bold text-xs uppercase tracking-wider font-mono transition-all cursor-pointer shadow-lg shadow-growth-950/20 dark:shadow-growth-950/40 flex items-center justify-center gap-2"
              >
                <span>Отправить проект на оценку</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-obsidian-800 text-center font-mono text-xs">
              <p className="text-slate-500 dark:text-slate-400 mb-1 font-sans">или напишите в Telegram / позвоните:</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={`https://t.me/${contactInfo.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-600 dark:text-sky-400 font-bold hover:underline"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>@{contactInfo.telegram}</span>
                </a>
                <span className="text-slate-300 dark:text-obsidian-700">|</span>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-slate-900 dark:text-white font-bold hover:text-growth-600 dark:hover:text-growth-400"
                >
                  <Phone className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400" />
                  <span>{contactInfo.phone}</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
