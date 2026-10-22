import type { Service, Tariff, Case, Review } from '@/types';
import { service as seoProdvizhenie } from './services/seo-prodvizhenie';
import { service as seoAudit } from './services/seo-audit';
import { service as yandex } from './services/yandex';
import { service as google } from './services/google';
import { service as contentMarketing } from './services/content-marketing';
import { service as konsultatsiya } from './services/konsultatsiya';

export const services: Service[] = [
  seoProdvizhenie,
  seoAudit,
  yandex,
  google,
  contentMarketing,
  konsultatsiya,
];

export const tariffs: Tariff[] = [
  {
    id: 'basic',
    name: 'Базовый',
    price: 35000,
    priceLabel: 'от 35 000 ₽/мес',
    features: [
      'Технический аудит сайта',
      'Семантическое ядро (до 100 запросов)',
      '4 статьи в месяц',
      'Внутренняя оптимизация',
      'Настройка Яндекс.Метрики',
      'Ежемесячный отчёт',
      '1 специалист',
    ],
  },
  {
    id: 'optimal',
    name: 'Оптимальный',
    price: 60000,
    priceLabel: 'от 60 000 ₽/мес',
    popular: true,
    features: [
      'Всё из «Базового»',
      'Семантическое ядро (до 300 запросов)',
      '8 статей + 1 кейс в месяц',
      'Ссылочное продвижение',
      'Расширенная аналитика',
      '2 специалиста',
      'Рекомендации по коммерческим факторам',
    ],
  },
  {
    id: 'max',
    name: 'Максимальный',
    price: 90000,
    priceLabel: 'от 90 000 ₽/мес',
    features: [
      'Всё из «Оптимального»',
      'Семантическое ядро (до 500+ запросов)',
      '12 статей + 4 кейса в месяц',
      'PR-публикации в СМИ',
      'Аналитика + интеграция с CRM',
      'A/B тестирование',
      'Еженедельные отчёты',
      'Команда из 3 специалистов',
    ],
  },
];

export const cases: Case[] = [
  {
    id: 'case-1',
    title: 'SEO-продвижение интернет-магазина стройматериалов',
    niche: 'Интернет-магазин стройматериалов',
    region: 'Москва',
    duration: '6 месяцев',
    before: { traffic: 2500, positions: 15, conversion: 1.8 },
    after: { traffic: 10500, positions: 3, conversion: 3.4 },
    growth: { traffic: 320, positions: 80, conversion: 89 },
    slug: 'stroy-market',
    image: '/images/cases/stroy-market.webp',
    tasks: [
      'Увеличить органический трафик в 3 раза',
      'Вывести 80% запросов в ТОП-10 Яндекса',
      'Увеличить конверсию до 3%+',
    ],
    done: [
      'Найдено и исправлено 45 критических ошибок',
      'Собрано 350 ключевых запросов',
      'Написано и опубликовано 28 статей',
      'Размещено 35 качественных ссылок',
    ],
  },
  {
    id: 'case-2',
    title: 'SEO-продвижение медицинской клиники',
    niche: 'Медицинский сайт — стоматология',
    region: 'СПб + Москва',
    duration: '4 месяца',
    before: { traffic: 1800, positions: 25, conversion: 2.1 },
    after: { traffic: 5040, positions: 7, conversion: 4.6 },
    growth: { traffic: 180, positions: 72, conversion: 120 },
    slug: 'dental-clinic',
    image: '/images/cases/dental-clinic.webp',
  },
  {
    id: 'case-3',
    title: 'SEO-продвижение автосервиса',
    niche: 'Автосервис',
    region: 'Краснодар',
    duration: '3 месяца',
    before: { traffic: 800, positions: 18, conversion: 1.5 },
    after: { traffic: 2800, positions: 4, conversion: 3.8 },
    growth: { traffic: 250, positions: 78, conversion: 153 },
    slug: 'auto-service',
    image: '/images/cases/auto-service.webp',
  },
  {
    id: 'case-4',
    title: 'SEO-продвижение интернет-магазина мебели',
    niche: 'Интернет-магазин мебели',
    region: 'Вся Россия',
    duration: '8 месяцев',
    before: { traffic: 3200, positions: 30, conversion: 1.2 },
    after: { traffic: 16300, positions: 5, conversion: 3.6 },
    growth: { traffic: 410, positions: 83, conversion: 200 },
    slug: 'furniture-store',
    image: '/images/cases/furniture-store.webp',
  },
];

export const reviews: Review[] = [
  {
    id: 'review-1',
    author: 'Снитковский А.А.',
    company: 'ООО «Стоматология 22 Век»',
    text: 'Выражаем благодарность компании за многолетнее и плодотворное сотрудничество по продвижению сайта нашей стоматологической клиники. Уже более 12 лет стабильно держимся в ТОП-3 и ТОП-10.',
    rating: 5,
    period: 'с 2008 г.',
  },
  {
    id: 'review-2',
    author: 'Ахметжанов Б.',
    company: 'ООО «МосВодоПром»',
    text: 'Выражаем вам благодарность за многолетнюю работу по продвижению нашего сайта! Нам удалось в несколько раз увеличить поток заказов из интернета и значительно нарастить клиентскую базу.',
    rating: 5,
    period: '5 лет',
  },
  {
    id: 'review-3',
    author: 'Карпов С.Ю.',
    company: 'ИП Карпов',
    text: 'Совместными усилиями за несколько месяцев нам удалось значительно повысить посещаемость нашего сайта. Уверены, что в дальнейшем мы сумеем сохранить и продолжить наши партнерские отношения.',
    rating: 5,
    period: '6 месяцев',
  },
  {
    id: 'review-4',
    author: 'Быстрова Е.А.',
    company: 'ООО «Медиа Дизайн»',
    text: 'Все наши проекты стабильно держатся в ТОПе поисковых систем, а SEO уже много месяцев является нашим основным каналом по привлечению новых клиентов. Благодарим за оперативность и честность!',
    rating: 5,
    period: '3 года',
  },
  {
    id: 'review-5',
    author: 'Корнейчук Н.С.',
    company: 'ООО «Никастрой»',
    text: 'Специалисты быстро устранили все ошибки и наметили план развития. Наш сайт находится в ТОП-10 Яндекса по огромному количеству целевых запросов. Благодарим за эффективное продвижение!',
    rating: 5,
    period: '2 года',
  },
];
