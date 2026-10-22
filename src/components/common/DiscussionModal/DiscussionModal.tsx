import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { Textarea } from '@ui/Textarea';
import { PhoneInputField } from '@ui/PhoneInput';
import { discussionFormSchema, type DiscussionFormData } from '@utils/discussionValidation';
import { contactInfo } from '@data/contactInfo';

interface DiscussionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscussionModal: React.FC<DiscussionModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    console.log('Discussion submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-slide-up relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-dark-500 hover:text-dark-900 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-dark-800">Свяжусь с вами в течение 30 минут для обсуждения проекта</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold mb-2 font-heading">Обсудить проект</h3>
            <p className="text-dark-800 mb-6 text-sm">
              Расскажите о вашем проекте — рассчитаю стоимость и стратегию продвижения
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Ваше имя"
                type="text"
                placeholder="Иван"
                error={errors.name?.message}
                {...register('name')}
              />
              <PhoneInputField
                label="Телефон"
                value={phoneValue}
                onChange={(value) => setValue('phone', value, { shouldValidate: true })}
                error={errors.phone?.message}
              />
              <Input
                label="Адрес сайта (если есть)"
                type="text"
                placeholder="https://example.ru"
                error={errors.websiteUrl?.message}
                {...register('websiteUrl')}
              />
              <Textarea
                label="Описание проекта"
                placeholder="Расскажите о вашем бизнесе, целях и задачах..."
                rows={3}
                error={errors.message?.message}
                {...register('message')}
              />
              <Button variant="primary" size="lg" className="w-full">
                Обсудить проект
              </Button>
              <p className="text-xs text-dark-800 text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/politika-konfidentsialnosti/" className="text-primary-600 hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>

            <div className="mt-6 pt-4 border-t border-dark-100 text-center">
              <p className="text-sm text-dark-800 mb-1">или позвоните напрямую:</p>
              <a href={`tel:${contactInfo.phone}`} className="text-lg font-bold text-primary-600 hover:text-primary-700">
                {contactInfo.phone}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
