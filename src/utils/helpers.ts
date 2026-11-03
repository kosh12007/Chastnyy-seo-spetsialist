import { contactInfo } from '@data/contactInfo';
import { SITE_URL, SITE_NAME } from './constants';

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return `+${cleaned[0]} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`;
  }
  return phone;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU').format(price);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getSeoData(page: string) {
  const seoMap: Record<string, { title: string; description: string; schema?: object }> = {
    home: {
      title: `Частный SEO-специалист ${contactInfo.expertName} — продвижение сайтов в ТОП | Цена от 35 000 ₽`,
      description: `SEO-продвижение сайтов в Яндекс и Google от частного специалиста (${contactInfo.legalStatusShort}). Рост трафика и заявок, вывод в ТОП. Бесплатная экспресс-оценка.`,
    },
    services: {
      title: `Услуги SEO-продвижения — частный специалист ${contactInfo.expertName}`,
      description: 'Комплексное SEO-продвижение, аудит, продвижение в Яндекс и Google, контент-маркетинг. Индивидуальный подход.',
    },
    pricing: {
      title: `Цены на SEO-продвижение — тарифы от 35 000 ₽ | ${contactInfo.expertName}`,
      description: `Прозрачные тарифы: Базовый от 35 000 ₽, Оптимальный от 65 000 ₽, Максимальный от 110 000 ₽. Официальный договор (${contactInfo.legalStatusShort}).`,
    },
    cases: {
      title: `Кейсы по SEO-продвижению — результаты клиентов | ${contactInfo.expertName}`,
      description: 'Реальные кейсы: рост поискового трафика и заявок, вывод в ТОП за 3-8 месяцев. Смотрите результаты до/после.',
    },
    reviews: {
      title: `Отзывы клиентов о SEO-продвижении | ${contactInfo.expertName}`,
      description: 'Реальные отзывы клиентов о SEO-продвижении. Средний рейтинг 4.9/5 на основе 20+ отзывов.',
    },
    about: {
      title: `Обо мне — частный SEO-специалист ${contactInfo.expertName}`,
      description: `Частный SEO-специалист ${contactInfo.expertName} с опытом с 2012 года. 120+ проектов, персональное ведение по договору (${contactInfo.legalStatusShort}).`,
    },
    contacts: {
      title: `Контакты — телефон, email, мессенджеры | ${contactInfo.expertName}`,
      description: `Свяжитесь со мной напрямую: телефон ${contactInfo.phone}, email ${contactInfo.email}, WhatsApp, Telegram @${contactInfo.telegram}.`,
    },
    blog: {
      title: `Блог — статьи по SEO от частного специалиста | ${contactInfo.expertName}`,
      description: 'Экспертные статьи по SEO-продвижению: инструкции, разборы, аналитика, тренды.',
    },
  };

  return seoMap[page] || seoMap.home;
}

export function generateOgMeta(
  url: string,
  title: string,
  description: string,
  image?: string,
): Record<string, string> {
  const cleanImage = image?.trim();
  const fullImageUrl = cleanImage
    ? cleanImage.startsWith('http')
      ? cleanImage
      : `${SITE_URL}${cleanImage.startsWith('/') ? cleanImage : `/${cleanImage}`}`
    : undefined;

  const meta: Record<string, string> = {
    'og:type': 'website',
    'og:title': title,
    'og:description': description,
    'og:url': `${SITE_URL}${url}`,
    'og:site_name': SITE_NAME,
    'twitter:card': fullImageUrl ? 'summary_large_image' : 'summary',
    'twitter:title': title,
    'twitter:description': description,
  };

  // Выводим теги изображения в разметку только если картинка действительно задана
  if (fullImageUrl) {
    meta['og:image'] = fullImageUrl;
    meta['og:image:width'] = '1200';
    meta['og:image:height'] = '630';
    meta['og:image:alt'] = title;
    meta['twitter:image'] = fullImageUrl;
  }

  return meta;
}

export function generateBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `${import.meta.env.VITE_APP_SITE_URL || ''}${item.url}` }),
    })),
  };
}
