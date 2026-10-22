import type { ContactInfo } from '@/types';

/**
 * Контактные данные частного SEO-специалиста.
 * Официальный статус: плательщик налога на профессиональный доход (НПД / самозанятый).
 */
export const contactInfo: ContactInfo = {
  phone: import.meta.env.VITE_APP_PHONE || '+7 (495) 120-88-42',
  email: import.meta.env.VITE_APP_EMAIL || 'seo@pavlov-expert.ru',
  whatsapp: import.meta.env.VITE_APP_WHATSAPP || '74951208842',
  telegram: import.meta.env.VITE_APP_TELEGRAM || 'seopavlov',
  address: import.meta.env.VITE_APP_ADDRESS || 'г. Москва',
  workingHours: import.meta.env.VITE_APP_WORKING_HOURS || 'Пн–Пт: 09:30–19:00 МСК',
  mapLatitude: parseFloat(import.meta.env.VITE_APP_MAP_LATITUDE || '55.7558'),
  mapLongitude: parseFloat(import.meta.env.VITE_APP_MAP_LONGITUDE || '37.6173'),
};
