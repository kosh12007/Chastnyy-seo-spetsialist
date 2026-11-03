export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  content?: string;
}

export interface Tariff {
  id: string;
  name: string;
  price: number;
  priceLabel?: string;
  features: string[];
  popular?: boolean;
}

export interface Case {
  id: string;
  title: string;
  niche: string;
  region: string;
  duration: string;
  problem: string;
  result: string;
  metrics: {
    positions: string;
    traffic: string;
    duration: string;
  };
  before: { traffic: number; positions: number; conversion: number };
  after: { traffic: number; positions: number; conversion: number };
  growth: { traffic: number; positions: number; conversion: number };
  slug: string;
  /** Путь к изображению/скриншоту кейса в папке public/images/cases/ (необязательное поле) */
  image?: string;
  tasks: string[];
  done: string[];
  /** Кастомные подписи метрик под специфику ниши (E-com, Услуги, Медиа) */
  metricLabels?: {
    trafficTitle?: string;
    growthTrafficText?: string;
    positionsTitle?: string;
    positionsBadgeLabel?: string;
    conversionTitle?: string;
    beforePositionsText?: string;
    afterPositionsText?: string;
    growthPositionsText?: string;
    beforeConversionText?: string;
    afterConversionText?: string;
    growthConversionText?: string;
  };
}

export interface Review {
  id: string;
  author: string;
  company: string;
  position?: string;
  text: string;
  rating: number;
  period: string;
  logo?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  /** Краткое имя и фамилия специалиста (например, «Сергей Кошелев») */
  expertName: string;
  /** Полное ФИО специалиста (например, «Кошелев Сергей Иванович») */
  expertFullName: string;
  /** Полное ФИО в родительном падеже (например, «Кошелева Сергея Ивановича») */
  expertFullNameGenitive: string;
  /** Полное ФИО в творительном падеже (например, «Кошелевым Сергеем Ивановичем») */
  expertFullNameInstrumental: string;
  /** Полное ФИО в дательном падеже (например, «Кошелеву Сергею Ивановичу») */
  expertFullNameDative: string;
  /** Инициалы для значка логотипа в шапке (например, «СК») */
  expertInitials: string;
  /** ИНН плательщика НПД / ИП */
  inn: string;
  /** Краткий юридический/налоговый статус (например, «Самозанятый (НПД)») */
  legalStatusShort: string;
  /** Полный юридический/налоговый статус для реквизитов и политики 152-ФЗ */
  legalStatusFull: string;
  /** Регион постановки на налоговый учёт */
  taxRegion: string;
  phone: string;
  email: string;
  whatsapp: string;
  telegram: string;
  address: string;
  workingHours: string;
  mapLatitude: number;
  mapLongitude: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image?: string;
  category?: string;
}
