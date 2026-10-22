import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Input } from '@ui/Input';
import { Textarea } from '@ui/Textarea';
import { Button } from '@ui/Button';
import { CheckCircle } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  email: z.string().email('Введите корректный email').optional().or(z.literal('')),
  message: z.string().min(5, 'Минимум 5 символов').optional().or(z.literal('')),
  agree: z.boolean().refine((val) => val === true, {
    message: 'Необходимо подтвердить согласие на обработку данных',
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Форма обратной связи для страницы контактов.
 * Соответствует 152-ФЗ: содержит чекбокс согласия со ссылками на политику и согласие.
 */
export const ContactForm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
      agree: false, // Чекбокс согласия НЕ предзаполнен согласно 152-ФЗ
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (_data) => {
    // В реальном окружении данные отправляются на бэкенд или в Telegram-бот
    setIsSuccess(true);
    reset();
  };

  if (isSuccess) {
    return (
      <div className="p-6 rounded-xl bg-growth-950/40 border border-growth-500/40 text-growth-400 font-mono text-sm">
        <div className="flex items-center gap-3 text-white font-bold text-lg mb-2">
          <CheckCircle className="w-6 h-6 text-growth-400" />
          <span>Сообщение успешно отправлено!</span>
        </div>
        <p className="text-slate-300 font-sans leading-relaxed text-sm">
          Спасибо за обращение. Я лично отвечу вам в течение одного рабочего дня.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-4 text-xs text-slate-400 hover:text-white underline font-mono"
        >
          Отправить еще одно сообщение
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Ваше имя *"
        type="text"
        placeholder="Константин"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Телефон или Telegram *"
        type="text"
        placeholder="+7 (___) ___-__-__ или @username"
        error={errors.phone?.message}
        {...register('phone')}
      />
      <Input
        label="Email (по желанию)"
        type="email"
        placeholder="ceo@company.ru"
        error={errors.email?.message}
        {...register('email')}
      />
      <Textarea
        label="Адрес сайта или описание задачи"
        placeholder="mysite.ru — требуется аудит и вывод в ТОП Яндекс..."
        rows={4}
        error={errors.message?.message}
        {...register('message')}
      />

      {/* 152-ФЗ Чекбокс согласия (не предзаполнен!) */}
      <div className="space-y-1">
        <div className="flex items-start gap-2.5">
          <input
            type="checkbox"
            id="contact-agree"
            className="mt-1 w-4 h-4 rounded border-dark-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
            {...register('agree')}
          />
          <label htmlFor="contact-agree" className="text-xs text-dark-800 leading-relaxed cursor-pointer select-none">
            Я даю согласие на обработку моих персональных данных в соответствии с{' '}
            <Link
              to="/soglasie-opd/"
              target="_blank"
              className="text-primary-600 underline hover:text-primary-700 font-medium"
            >
              Согласием на обработку данных
            </Link>{' '}
            и принимаю условия{' '}
            <Link
              to="/politika-konfidentsialnosti/"
              target="_blank"
              className="text-primary-600 underline hover:text-primary-700 font-medium"
            >
              Политики конфиденциальности
            </Link> *
          </label>
        </div>
        {errors.agree && <p className="text-xs text-destructive-600">{errors.agree.message}</p>}
      </div>

      <Button variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
        Отправить сообщение
      </Button>
    </form>
  );
};
