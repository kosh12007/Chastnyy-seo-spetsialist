import type { ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
  phone: import.meta.env.VITE_APP_PHONE || '+79991234567',
  email: import.meta.env.VITE_APP_EMAIL || 'info@example.ru',
  whatsapp: import.meta.env.VITE_APP_WHATSAPP || '79991234567',
  telegram: import.meta.env.VITE_APP_TELEGRAM || 'seo_specialist',
  address: import.meta.env.VITE_APP_ADDRESS || 'г. Москва, ул. Примерная, д. 1',
  workingHours: import.meta.env.VITE_APP_WORKING_HOURS || 'Пн-Пт: 10:00-19:00',
  mapLatitude: parseFloat(import.meta.env.VITE_APP_MAP_LATITUDE || '55.7558'),
  mapLongitude: parseFloat(import.meta.env.VITE_APP_MAP_LONGITUDE || '37.6173'),
};
