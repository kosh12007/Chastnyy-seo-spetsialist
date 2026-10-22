import { SITE_URL, SITE_NAME, PHONE, EMAIL } from './constants';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description: 'Частный SEO-специалист. Продвижение сайтов в ТОП Яндекс и Google.',
    url: SITE_URL,
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
        url: `${SITE_URL}/logo.png`,
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
