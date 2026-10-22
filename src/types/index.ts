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
  before: { traffic: number; positions: number; conversion: number };
  after: { traffic: number; positions: number; conversion: number };
  growth: { traffic: number; positions: number; conversion: number };
  slug: string;
  image: string;
  tasks?: string[];
  done?: string[];
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
