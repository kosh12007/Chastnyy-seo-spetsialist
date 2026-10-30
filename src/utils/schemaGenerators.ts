import { SITE_URL, SITE_NAME, PHONE, EMAIL } from './constants';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description: 'Частный SEO-специалист. Продвижение сайтов в ТОП Яндекс и Google.',
    url: `${SITE_URL}/`,
    telephone: PHONE,
    email: EMAIL,
    priceRange: 'от 35 000 ₽/мес',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU',
    },
    openingHours: 'Mo-Fr 10:00-19:00',
    sameAs: [],
  };
}

export function generateArticleSchema(title: string, description: string, datePublished: string, dateModified: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE_URL,
    },
  };
}

export function generateFAQPageSchema(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Генерация микроразметки конкретной коммерческой услуги (Service / ProfessionalService)
 * для формирования расширенных сниппетов в Яндексе и Google.
 */
export function generateServiceSchema(options: {
  name: string;
  description: string;
  url: string;
  price?: string | number;
  priceCurrency?: string;
  serviceType?: string;
}) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options.name,
    description: options.description,
    url: `${SITE_URL}${options.url}`,
    serviceType: options.serviceType || 'SEO-оптимизация и аудит сайта',
    provider: {
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      telephone: PHONE,
      email: EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Москва',
        addressCountry: 'RU',
      },
    },
  };

  if (options.price) {
    schema.offers = {
      '@type': 'Offer',
      price: String(options.price).replace(/[^0-9]/g, ''),
      priceCurrency: options.priceCurrency || 'RUB',
      availability: 'https://schema.org/InStock',
    };
  }

  return schema;
}

/**
 * Генерация микроразметки навигационной цепочки (BreadcrumbList)
 * для отображения кликабельных хлебных крошек в результатах поиска.
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
