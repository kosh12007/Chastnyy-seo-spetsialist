import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@ui/Input';
import { Textarea } from '@ui/Textarea';
import { Button } from '@ui/Button';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа'),
  phone: z.string().min(10, 'Введите корректный телефон'),
  email: z.string().email('Введите корректный email').optional().or(z.literal('')),
  message: z.string().min(10, 'Минимум 10 символов').optional().or(z.literal('')),
  agree: z.literal(true, { errorMap: () => ({ message: 'Необходимо согласие' }) }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // TODO: Реальная отправка
    console.log('Form submitted:', data);
    reset();
    alert('Сообщение отправлено! Перезвоню в течение часа.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Ваше имя *"
        type="text"
        placeholder="Иван Иванов"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Телефон *"
        type="tel"
        placeholder="+7 (___) ___-__-__"
        error={errors.phone?.message}
        {...register('phone')}
      />
      <Input
        label="Email"
        type="email"
        placeholder="email@example.com"
        error={errors.email?.message}
        {...register('email')}
      />
      <Textarea
        label="Сообщение"
        placeholder="Опишите вашу задачу или вопрос..."
        rows={4}
        error={errors.message?.message}
        {...register('message')}
      />
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="agree"
          className="mt-1 w-4 h-4 text-primary-600 border-dark-100 rounded focus:ring-primary-600"
          {...register('agree')}
        />
        <label htmlFor="agree" className="text-sm text-dark-800">
          Согласен с{' '}
          <a href="/politika-konfidentsialnosti/" className="text-primary-600 hover:underline">
            политикой конфиденциальности
          </a>{' '}
          и обработкой персональных данных *
        </label>
      </div>
      {errors.agree && <p className="text-sm text-accent-600">{errors.agree.message}</p>}

      <Button variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
        Отправить сообщение
      </Button>
    </form>
  );
};
