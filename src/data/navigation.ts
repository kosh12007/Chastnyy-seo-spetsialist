import type { NavItem, SocialLink } from '@/types';
import { contactInfo } from '@data/contactInfo';

export const navigationLinks: NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/uslugi/' },
  { label: 'Цены', href: '/ceny/' },
  { label: 'Кейсы', href: '/portfolio/' },
  { label: 'Отзывы', href: '/otzyvy/' },
  { label: 'Обо мне', href: '/obo-mne/' },
  { label: 'Блог', href: '/blog/' },
  { label: 'Контакты', href: '/kontakty/' },
];

export const socialLinks: SocialLink[] = [
  { name: 'WhatsApp', url: `https://wa.me/${contactInfo.whatsapp}`, icon: 'MessageCircle' },
  { name: 'Telegram', url: `https://t.me/${contactInfo.telegram}`, icon: 'Send' },
];
