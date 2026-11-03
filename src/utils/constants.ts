import { contactInfo } from '@data/contactInfo';

// Удаляем завершающий слэш из базового URL, чтобы все пути вида `${SITE_URL}/...` формировались единообразно без двойных слэшей
export const SITE_URL = (import.meta.env.VITE_APP_SITE_URL || 'http://localhost:8085').replace(/\/+$/, '');
export const SITE_NAME =
  import.meta.env.VITE_APP_TITLE || `${contactInfo.expertName} — Частный SEO-специалист`;
export const EXPERT_NAME = contactInfo.expertName;
export const EXPERT_FULL_NAME = contactInfo.expertFullName;
export const INN = contactInfo.inn;
export const LEGAL_STATUS_SHORT = contactInfo.legalStatusShort;
export const LEGAL_STATUS_FULL = contactInfo.legalStatusFull;
export const PHONE = contactInfo.phone;
export const EMAIL = contactInfo.email;
export const WHATSAPP = contactInfo.whatsapp;
export const TELEGRAM = contactInfo.telegram;
export const ADDRESS = contactInfo.address;
export const WORKING_HOURS = contactInfo.workingHours;
export const SITE_DESCRIPTION = `Частный SEO-специалист ${contactInfo.expertName} (${contactInfo.legalStatusShort}). Продвижение сайтов в ТОП Яндекс и Google.`;
