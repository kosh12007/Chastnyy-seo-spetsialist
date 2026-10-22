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
      title: 'Частный SEO-специалист — продвижение сайтов в ТОП | Цена от 35 000 ₽',
      description: 'SEO-продвижение сайтов в Яндекс и Google от частного специалиста. Рост трафика от 300%, вывод в ТОП. Бесплатный аудит.',
    },
    services: {
      title: 'Услуги SEO-продвижения — частный специалист',
      description: 'Комплексное SEO-продвижение, аудит, продвижение в Яндекс и Google, контент-маркетинг. Индивидуальный подход.',
    },
    pricing: {
      title: 'Цены на SEO-продвижение — тарифы от 35 000 ₽',
      description: 'Прозрачные тарифы: Базовый от 35 000 ₽, Оптимальный от 60 000 ₽, Максимальный от 90 000 ₽. Без скрытых платежей.',
    },
    cases: {
      title: 'Кейсы по SEO-продвижению — результаты клиентов',
      description: 'Реальные кейсы: рост трафика 150-500%, вывод в ТОП за 3-8 месяцев. Смотрите результаты до/после.',
    },
    reviews: {
      title: 'Отзывы клиентов — что говорят о работе со мной',
      description: 'Реальные отзывы клиентов о SEO-продвижении. Средний рейтинг 4.9/5 на основе 20+ отзывов.',
    },
    about: {
      title: 'Обо мне — SEO-специалист с опытом 8+ лет',
      description: 'Частный SEO-специалист с опытом 8+ лет. 150+ проектов, сертификаты. Читайте о моём подходе к работе.',
    },
    contacts: {
      title: 'Контакты — телефон, email, мессенджеры',
      description: 'Свяжитесь со мной: телефон, email, WhatsApp, Telegram. Форма обратной связи.',
    },
    blog: {
      title: 'Блог — статьи по SEO от частного специалиста',
      description: 'Экспертные статьи по SEO-продвижению: инструкции, кейсы, аналитика, тренды.',
    },
  };

  return seoMap[page] || seoMap.home;
}

export function generateOgMeta(url: string, title: string, description: string) {
  const SITE_URL = import.meta.env.VITE_APP_SITE_URL || 'http://localhost:3000';
  const SITE_NAME = 'SEO Специалист';
  const defaultOgImage = `${SITE_URL}/og-image.jpg`;

  return {
    'og:type': 'website',
    'og:title': title,
    'og:description': description,
    'og:url': `${SITE_URL}${url}`,
    'og:site_name': SITE_NAME,
    'og:image': defaultOgImage,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': title,
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': defaultOgImage,
  };
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
