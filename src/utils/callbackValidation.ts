import { z } from 'zod';
import { validatePhone } from '@utils/phoneValidation';

export const callbackFormSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа'),
  phone: z.string().refine((val) => validatePhone(val) === undefined, {
    message: 'Некорректный номер телефона',
  }),
});

export type CallbackFormData = z.infer<typeof callbackFormSchema>;
