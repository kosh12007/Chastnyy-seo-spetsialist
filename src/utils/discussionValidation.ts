import { z } from 'zod';
import { validatePhone } from '@utils/phoneValidation';

export const discussionFormSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа'),
  phone: z.string().refine((val) => validatePhone(val) === undefined, {
    message: 'Некорректный номер телефона',
  }),
  websiteUrl: z.string().url('Введите корректный URL').or(z.string().min(2).optional()),
  message: z.string().min(10, 'Минимум 10 символов').optional().or(z.literal('')),
});

export type DiscussionFormData = z.infer<typeof discussionFormSchema>;
