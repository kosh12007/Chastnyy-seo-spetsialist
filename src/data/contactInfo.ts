import type { ContactInfo } from '@/types';

/**
 * Персональные, юридические и контактные данные частного SEO-специалиста.
 * Все поля централизованно подтягиваются из переменных окружения (.env).
 */
export const contactInfo: ContactInfo = {
  expertName: import.meta.env.VITE_APP_EXPERT_NAME || 'Сергей Кошелев',
  expertFullName: import.meta.env.VITE_APP_EXPERT_FULL_NAME || 'Кошелев Сергей Иванович',
  expertFullNameGenitive:
    import.meta.env.VITE_APP_EXPERT_FULL_NAME_GENITIVE || 'Кошелева Сергея Ивановича',
  expertFullNameInstrumental:
    import.meta.env.VITE_APP_EXPERT_FULL_NAME_INSTRUMENTAL || 'Кошелевым Сергеем Ивановичем',
  expertFullNameDative:
    import.meta.env.VITE_APP_EXPERT_FULL_NAME_DATIVE || 'Кошелеву Сергею Ивановичу',
  expertInitials: import.meta.env.VITE_APP_EXPERT_INITIALS || 'СК',
  inn: import.meta.env.VITE_APP_INN || '772839102919',
  legalStatusShort: import.meta.env.VITE_APP_LEGAL_STATUS_SHORT || 'Самозанятый (НПД)',
  legalStatusFull:
    import.meta.env.VITE_APP_LEGAL_STATUS_FULL ||
    'Плательщик налога на профессиональный доход (НПД / самозанятый)',
  taxRegion: import.meta.env.VITE_APP_TAX_REGION || 'г. Москва (ИФНС России)',
  phone: import.meta.env.VITE_APP_PHONE || '+7 (495) 120-88-42',
  email: import.meta.env.VITE_APP_EMAIL || 'seo@koshelev.ru',
  whatsapp: import.meta.env.VITE_APP_WHATSAPP || '74951208842',
  telegram: import.meta.env.VITE_APP_TELEGRAM || 'seokoshelev',
  address: import.meta.env.VITE_APP_ADDRESS || 'г. Москва',
  workingHours: import.meta.env.VITE_APP_WORKING_HOURS || 'Пн–Пт: 09:30–19:00 МСК',
  mapLatitude: parseFloat(import.meta.env.VITE_APP_MAP_LATITUDE || '55.7558'),
  mapLongitude: parseFloat(import.meta.env.VITE_APP_MAP_LONGITUDE || '37.6173'),
};
