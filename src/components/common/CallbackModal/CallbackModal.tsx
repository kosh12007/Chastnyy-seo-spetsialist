import React, { useState } from 'react';
import { X, CheckCircle, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PhoneInputField } from '@ui/PhoneInput';
import { callbackFormSchema, type CallbackFormData } from '@utils/callbackValidation';
import { contactInfo } from '@data/contactInfo';
import { Link } from 'react-router-dom';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
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
  } = useForm<CallbackFormData>({
    resolver: zodResolver(callbackFormSchema),
    defaultValues: { name: '', phone: '' },
  });

  const phoneValue = watch('phone');

  const onSubmit = (data: CallbackFormData) => {
    if (!consent) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    console.log('Callback submitted:', data);
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-obsidian-900 border border-obsidian-800 rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 animate-slide-up relative text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-800 transition-colors"
          aria-label="Закрыть модальное окно"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-growth-500/10 border border-growth-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-growth-400">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">Заявка принята!</h3>
            <p className="text-slate-300 text-sm font-sans">
              Я лично свяжусь с вами в течение рабочего времени.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="text-xs font-mono uppercase tracking-widest text-growth-400 mb-1">
                Обратный звонок
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Заказать звонок
              </h3>
              <p className="text-slate-400 text-xs font-sans mt-1">
                Оставьте контактные данные — я перезвоню вам в рабочее время.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1.5">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Константин"
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-obsidian-750 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-growth-500"
                  {...register('name')}
                />
                {errors.name?.message && (
                  <span className="text-xs text-red-400 mt-1 block font-mono">{errors.name.message}</span>
                )}
              </div>

              <div>
                <PhoneInputField
                  label="Телефон"
                  value={phoneValue}
                  onChange={(value) => setValue('phone', value, { shouldValidate: true })}
                  error={errors.phone?.message}
                />
              </div>

              {/* Чекбокс согласия 152-ФЗ */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (e.target.checked) setConsentError(false);
                    }}
                    className="mt-1 w-4 h-4 rounded border-obsidian-700 bg-obsidian-950 text-growth-500 focus:ring-0 cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-400 font-sans leading-relaxed select-none">
                    Согласен с{' '}
                    <Link
                      to="/politika-konfidentsialnosti/"
                      target="_blank"
                      className="text-growth-400 underline hover:text-growth-300"
                    >
                      политикой конфиденциальности
                    </Link>{' '}
                    и{' '}
                    <Link
                      to="/soglasie-opd/"
                      target="_blank"
                      className="text-growth-400 underline hover:text-growth-300"
                    >
                      обработкой данных
                    </Link>
                  </span>
                </label>
                {consentError && (
                  <span className="text-xs text-red-400 mt-1 block font-mono">
                    Подтвердите согласие для отправки формы
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-growth-600 hover:bg-growth-500 active:bg-growth-700 text-obsidian-950 font-bold text-xs uppercase tracking-wider font-mono transition-all cursor-pointer shadow-lg shadow-growth-950/40"
              >
                Перезвоните мне
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-obsidian-800 text-center font-mono text-xs">
              <p className="text-slate-400 mb-1 font-sans">или наберите напрямую:</p>
              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-2 text-white font-bold hover:text-growth-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-growth-400" />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
