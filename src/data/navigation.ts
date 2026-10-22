import type { NavItem, SocialLink } from '@/types';

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
  { name: 'WhatsApp', url: `https://wa.me/${import.meta.env.VITE_APP_WHATSAPP}`, icon: 'MessageCircle' },
  { name: 'Telegram', url: `https://t.me/${import.meta.env.VITE_APP_TELEGRAM}`, icon: 'Send' },
  { name: 'VK', url: 'https://vk.com/', icon: 'Users' },
];
