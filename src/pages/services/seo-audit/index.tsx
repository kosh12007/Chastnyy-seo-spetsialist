import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileSpreadsheet,
  ArrowLeft,
  FileCode2,
  ShoppingCart,
  Link2,
  Network,
  Users,
  TrendingDown,
  RefreshCw,
  Rocket,
  ShieldCheck,
  FileText,
  Scale,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import { SITE_URL } from '@/utils/constants';
import { generateOgMeta } from '@/utils/helpers';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from '@/utils/schemaGenerators';
import {
  CTASection,
  TariffsSection,
  FAQSection,
  StepsSection,
  SpecialOfferBanner,
  ComparisonTableSection,
  DeliverablesSection,
  type TariffItem,
  type MatrixRowItem,
  type DeliverableItem,
  type StepItem,
  type FAQItem,
} from '@/components/sections';
import { AnimatedSection } from '@/components/common';

/**
 * Комплексный стержневой раздел «SEO-аудит сайта»
 * Физический путь: src/pages/services/seo-audit/index.tsx
 * Посадочная страница для кластера запросов: «seo аудит сайта», «сео аудит сайта»,
 * «заказать seo аудит», «комплексный seo аудит сайта», «стоимость seo аудита»,
 * «сео аудит сайта цена», «поисковый аудит сайта», «провести аудит сайта частный специалист».
 */
export const SeoAuditPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pageTitle = 'Комплексный SEO-аудит сайта — заказать аудит в Москве | Сергей Кошелев';
  const pageDescription =
    'Комплексный SEO-аудит сайта от частного эксперта: техническая часть, коммерческие факторы, семантика и ссылки. Полный отчет в Excel и подробное ТЗ в Word.';
  const pageUrl = '/uslugi/seo-audit/';

  const ogMeta = generateOgMeta(pageUrl, pageTitle, pageDescription);

  // Тарифы на проведение комплексного SEO-аудита сайта
  const auditTiers: TariffItem[] = [
    {
      id: 'services',
      name: 'Комплексный аудит: Услуги и B2B',
      badge: 'Все направления • До 500 страниц',
      price: '35 000 ₽',
      duration: '5–7 рабочих дней',
      description:
        'Сквозной поисковый аудит для сайтов услуг, корпоративных порталов и B2B-компаний. Полная диагностика по 4 ключевым направлениям.',
      features: [
        'Полная техническая диагностика (ответы сервера, зеркала, дубли, sitemap, скорость)',
        'Аудит коммерческих факторов доверия, E-E-A-T и соответствия законам (152-ФЗ, ЗоЗПП)',
        'Анализ структуры страниц услуг, конверсионных форм и точек захвата заявок',
        'Ревизия ссылочной массы и фильтрация некачественных внешних доноров',
        'Сравнительный анализ показателей с 3–5 прямыми конкурентами из ТОП-10',
        'Таблица «Результаты проверок.xlsx» со всеми проблемными URL сайта',
        'Клиентский отчет и готовое ТЗ для разработчиков в документе Word (.docx)',
        'Персональная онлайн-встреча для разбора отчета и ответов на вопросы',
      ],
      link: '#order-form',
      linkText: 'Заказать аудит сайта услуг',
      isInternalRoute: false,
    },
    {
      id: 'ecommerce',
      name: 'Комплексный аудит: Интернет-магазин',
      badge: 'Хит • До 3 000 страниц',
      price: '55 000 ₽',
      duration: '7–10 рабочих дней',
      popular: true,
      description:
        'Глубокий аудит для интернет-магазинов и каталогов до 3 000 страниц. Полный охват корзины, фильтрации и структуры каталога.',
      features: [
        'Все проверки базового пакета с акцентом на e-commerce специфику',
        'Аудит коммерческих факторов интернет-магазина (чекаут, корзина, доставка, оплата)',
        'Анализ структуры каталога, фасетной навигации и посадочных страниц ЧПУ-фильтров',
        'Поиск упущенного поискового спроса и каннибализации категорий и карточек',
        'Проверка товарной микроразметки Schema.org (Product, Offer, BreadcrumbList)',
        'Глубокий ссылочный срез и анализ ссылочной стратегии 5 конкурентов e-com',
        'Формирование файла отклонения токсичных ссылок disavow.txt для Google Search Console',
        'Таблица «Результаты проверок.xlsx» и пошаговое ТЗ в Word (.docx)',
        'Персональная онлайн-встреча для защиты отчета и согласования плана внедрения',
      ],
      link: '#order-form',
      linkText: 'Заказать аудит магазина',
      isInternalRoute: false,
    },
    {
      id: 'portal',
      name: 'Комплексный аудит: Крупный проект',
      badge: 'Свыше 3 000 страниц',
      price: 'от 80 000 ₽',
      duration: '10–14 рабочих дней',
      description:
        'Индивидуальный аудит для масштабных интернет-магазинов, маркетплейсов, агрегаторов и крупных каталогов от 3 000 страниц.',
      features: [
        'Все работы тарифа «Интернет-магазин» с кастомной выборкой сегментов каталога',
        'Анализ краулингового бюджета и индексации масштабных баз страниц',
        'Оптимизация внутренней перелинковки и распределения веса страниц',
        'Анализ генерации теговых подборок и автоматических листингов',
        'Разбор ссылочных профилей и видимости лидеров ниши в аналитических базах',
        'Сводная таблица Excel и развернутое ТЗ в Word (.docx) с приоритетами доработок',
        'Консультационная поддержка команды разработчиков при внедрении до 30 дней',
        'Персональная онлайн-встреча с руководством и технической командой проекта',
      ],
      link: '#order-form',
      linkText: 'Рассчитать для крупного проекта',
      isInternalRoute: false,
    },
  ];

  // 4 дочерних направления кластера
  const subAudits = [
    {
      slug: 'tehnicheskij',
      title: 'Технический SEO-аудит сайта',
      badge: 'Зачет 100% в тариф • от 24 часов',
      price: 'от 10 000 ₽',
      duration: '1–3 дня',
      icon: FileCode2,
      desc: 'Диагностика по 8 техническим направлениям: зеркала, редиректы, карта сайта, дубли, скорость и чистота HTML. Выгрузка в Excel со всеми URL и отчет в Word с ТЗ для разработчиков.',
      highlights: [
        'Ответы сервера и цепочки редиректов',
        'Файлы robots.txt и карта сайта sitemap.xml',
        'Скорость загрузки и стабильность верстки',
        'Дубли страниц и канонические адреса',
      ],
      anchorText: 'Технический аудит сайта',
    },
    {
      slug: 'kommercheskij',
      title: 'Коммерческий аудит и удобство заказа',
      badge: 'Конверсия и доверие',
      price: 'от 25 000 ₽',
      duration: '3–5 дней',
      icon: ShoppingCart,
      desc: 'Оценка коммерческих факторов ранжирования Яндекса и барьеров на пути к покупке: корзина, формы заявки, прайс-листы, реквизиты, соответствие 152-ФЗ и правилам дистанционной торговли.',
      highlights: [
        'Факторы доверия, реквизиты и контакты',
        'Прозрачность цен и расчет стоимости',
        'Удобство корзины и оформления заказа',
        'Проверка форм по 152-ФЗ и закону о защите прав потребителей',
      ],
      anchorText: 'Коммерческий аудит сайта',
    },
    {
      slug: 'ssylochnyj',
      title: 'Аудит ссылочной массы и анкоров',
      badge: 'Внешние факторы',
      price: 'от 20 000 ₽',
      duration: '2–3 дня',
      icon: Link2,
      desc: 'Глубокая проверка профиля обратных ссылок: фильтрация спамных и токсичных доноров, анализ текстов ссылок на переспам, диагностика ссылочных ограничений и план безопасного роста.',
      highlights: [
        'Качество и тематика сайтов-доноров',
        'Баланс анкорного и безанкорного профиля',
        'Список ссылок на отклонение (disavow.txt)',
        'Сравнение темпов прироста с лидерами выдачи',
      ],
      anchorText: 'Ссылочный аудит сайта',
    },
    {
      slug: 'struktury-i-semantiki',
      title: 'Аудит структуры и семантического ядра',
      badge: 'Охват спроса',
      price: 'от 30 000 ₽',
      duration: '4–6 дней',
      icon: Network,
      desc: 'Анализ полноты охвата целевых запросов ниши, поиск упущенного спроса, устранение каннибализации страниц и проектирование архитектуры каталога и внутренней перелинковки.',
      highlights: [
        'Поиск упущенных кластеров поискового спроса',
        'Устранение конкуренции страниц между собой',
        'Глубина вложенности разделов (до 3 кликов)',
        'Схема распределения внутреннего веса',
      ],
      anchorText: 'Аудит структуры и семантики',
    },
  ];

  // Сравнительная таблица выбора направления аудита
  const selectionMatrix: MatrixRowItem[] = [
    {
      goal: 'Проверить индексацию, ошибки сервера, редиректы, дубли и скорость перед запуском или после обновления сайта',
      service: 'Технический SEO-аудит',
      slug: '/uslugi/seo-audit/tehnicheskij/',
      price: '10 000–20 000 ₽',
      time: '1–3 дня',
      result: 'Таблица Результаты проверок.xlsx + ТЗ в Word',
    },
    {
      goal: 'Понять, почему посетители уходят без заявки, и усилить коммерческие факторы доверия в Яндексе',
      service: 'Коммерческий аудит сайта',
      slug: '/uslugi/seo-audit/kommercheskij/',
      price: 'от 25 000 ₽',
      time: '3–5 дней',
      result: 'Матрица 35+ факторов + ТЗ по формам и корзине',
    },
    {
      goal: 'Проверить безопасность обратных ссылок, снять подозрения на ссылочный спам и составить план размещений',
      service: 'Аудит ссылочной массы',
      slug: '/uslugi/seo-audit/ssylochnyj/',
      price: 'от 20 000 ₽',
      time: '2–3 дня',
      result: 'Реестр доноров + disavow.txt + ссылочная стратегия',
    },
    {
      goal: 'Расширить каталог новыми посадочными страницами, собрать упущенный спрос и убрать дублирование запросов',
      service: 'Аудит структуры и семантики',
      slug: '/uslugi/seo-audit/struktury-i-semantiki/',
      price: 'от 30 000 ₽',
      time: '4–6 дней',
      result: 'Схема структуры разделов + план новых страниц',
    },
    {
      goal: 'Получить полную картину по всем направлениям с отчетом, таблицами и защитой ТЗ',
      service: 'Комплексный SEO-аудит',
      slug: '#order-form',
      price: 'от 35 000 ₽',
      time: '5–14 дней',
      result: 'Все 4 направления + сводная таблица Excel + ТЗ в Word + онлайн-защита',
    },
  ];

  // В каких ситуациях аудит необходим в первую очередь
  const useCases = [
    {
      icon: TrendingDown,
      title: 'Трафик остановился или снижается',
      desc: 'Диагностируем причины просадки: выпадение страниц из индекса, технические дубли, потерю коммерческой релевантности или ссылочные ограничения.',
    },
    {
      icon: RefreshCw,
      title: 'После редизайна или смены CMS',
      desc: 'Проверяем корректность склейки зеркал, сохранность структуры адресов, работу 301-редиректов, перенос метатегов и кодов ответа сервера.',
    },
    {
      icon: Rocket,
      title: 'Перед стартом SEO-продвижения',
      desc: 'Оцениваем готовность фундамента сайта, чтобы вложения в контент и развитие каталога сразу давали рост позиций без технических преград.',
    },
    {
      icon: ShieldCheck,
      title: 'Для независимой оценки работ',
      desc: 'Проводим объективную ревизию текущего состояния проекта: проверяем выполненные настройки, находим узкие места и формируем понятный план действий.',
    },
  ];

  // Вкладки детального состава комплексного аудита
  const tabsData = [
    {
      title: '1. Техническая диагностика',
      icon: FileCode2,
      slug: '/uslugi/seo-audit/tehnicheskij/',
      linkLabel: 'Перейти к техническому аудиту (от 10 000 ₽)',
      items: [
        'Коды ответа сервера (200, 301, 302, 404, 500) и проверка цепочек редиректов',
        'Корректность склейки главного зеркала (HTTP/HTTPS, с www и без www)',
        'Анализ директив robots.txt и проверка доступности важных разделов для краулеров',
        'Валидация XML-карты сайта sitemap.xml: коды ответа, объем, сверка со страницами сайта',
        'Поиск и локализация полных и частичных дублей страниц, дублей Title и Description',
        'Проверка корректности тега rel="canonical" и предотвращение каннибализации URL',
        'Оценка скорости загрузки по метрикам Core Web Vitals (LCP, FID, CLS) для мобильных и ПК',
        'Аудит микроразметки Schema.org и корректности метатегов Open Graph',
      ],
    },
    {
      title: '2. Коммерческие факторы и E-E-A-T',
      icon: ShoppingCart,
      slug: '/uslugi/seo-audit/kommercheskij/',
      linkLabel: 'Перейти к коммерческому аудиту (от 25 000 ₽)',
      items: [
        'Полнота контактных данных: реквизиты ООО/ИП, фактический адрес, филиалы на картах',
        'Прозрачность ценообразования: наличие актуальных цен, калькуляторов и прайс-листов',
        'Диагностика форм обратной связи, онлайн-заявки и удобства оформления заказа (чекаут)',
        'Проверка соответствия 152-ФЗ: чекбоксы согласия на обработку персональных данных и политика',
        'Сигналы доверия E-E-A-T: отзывы клиентов, сертификаты, лицензии, экспертные авторские блоки',
        'Условия доставки, оплаты, гарантий и возврата для интернет-магазинов и сервисов',
      ],
    },
    {
      title: '3. Структура и семантический спрос',
      icon: Network,
      slug: '/uslugi/seo-audit/struktury-i-semantiki/',
      linkLabel: 'Перейти к аудиту структуры и семантики (от 30 000 ₽)',
      items: [
        'Полнота охвата маркерных поисковых запросов в названиях разделов и метатегах',
        'Поиск упущенных кластеров запросов, по которым сайт еще не имеет посадочных страниц',
        'Диагностика и устранение каннибализации (внутренней конкуренции страниц по одному запросу)',
        'Оценка глубины вложенности разделов каталога и доступности важных страниц в 2–3 клика',
        'Проектирование структуры подкатегорий, теговых подборок и посадочных страниц фильтров',
        'Разработка схемы внутренней перелинковки для передачи веса приоритетным коммерческим разделам',
      ],
    },
    {
      title: '4. Профиль внешних ссылок',
      icon: Link2,
      slug: '/uslugi/seo-audit/ssylochnyj/',
      linkLabel: 'Перейти к ссылочному аудиту (от 20 000 ₽)',
      items: [
        'Динамика изменения ссылочной массы и проверка на резкие неестественные всплески',
        'Анализ анкор-листа: баланс брендовых, безанкорных и коммерческих формулировок',
        'Оценка качества, тематического соответствия и региональности ссылающихся доменов',
        'Поиск спамных, арендных и некачественных доноров, создающих риск ограничений',
        'Формирование готового файла disavow.txt для отклонения нежелательных ссылок в Google',
        'Сравнение ссылочного профиля с лидерами выдачи и составление плана безопасных размещений',
      ],
    },
  ];

  // Итоговые документы аудита
  const deliverablesList: DeliverableItem[] = [
    {
      icon: FileSpreadsheet,
      badge: 'Документ 1',
      title: 'Результаты проверок.xlsx',
      description:
        'Сводная таблица Excel с отдельными вкладками по каждому направлению: полные списки проблемных URL, коды ответа сервера, цепочки редиректов, дубликаты и выгрузки.',
    },
    {
      icon: FileText,
      badge: 'Документ 2',
      title: 'Отчет и ТЗ в Word (.docx)',
      description:
        'Подробное техническое задание для программистов, верстальщиков и маркетологов: описание сути проблемы, списки URL, требования поисковых систем и критерии приемки.',
    },
    {
      icon: Users,
      badge: 'В комплексном тарифе',
      badgeType: 'accent',
      title: 'Онлайн-защита отчета',
      description:
        'Персональная дистанционная встреча с вами и командой разработки для детального разбора отчета, ответов на вопросы и согласования последовательности внедрения.',
    },
  ];

  // 5 этапов проведения комплексного аудита
  const auditSteps: StepItem[] = [
    {
      num: '01',
      title: 'Сбор исходных данных',
      desc: 'Согласование целей аудита, получение доступов к счетчикам веб-аналитики (Яндекс.Метрика, Google Analytics) и панелям вебмастеров.',
    },
    {
      num: '02',
      title: 'Сквозное сканирование',
      desc: 'Полный краулинг сайта парсерами без ограничения глубины, фиксация всех кодов ответов сервера, битых ссылок и скрытых редиректов.',
    },
    {
      num: '03',
      title: 'Экспертная аналитика',
      desc: 'Ручная проверка коммерческих факторов, ревизия структуры посадочных страниц, анализ анкор-листа и фильтрация спамных ссылок.',
    },
    {
      num: '04',
      title: 'Подготовка ТЗ и реестра',
      desc: 'Формирование сводной таблицы «Результаты проверок.xlsx» и пошагового технического задания в Word с приоритетами для разработчиков.',
    },
    {
      num: '05',
      title: 'Онлайн-защита и поддержка',
      desc: 'Презентация результатов руководству и технической команде проекта, ответы на вопросы и сопровождение внедрения до 30 дней.',
    },
  ];

  const auditTakeaways: string[] = [
    'Сводная таблица всех проблемных URL в Excel',
    'Пошаговое ТЗ в Word с критериями приемки',
    'Разделение задач по приоритетам (1, 2, 3)',
    'Онлайн-разбор результатов и ответов на вопросы',
  ];

  // Юридическая оговорка для комплексных тарифов
  const tariffsDisclaimer = (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 flex items-start gap-3.5">
        <Scale className="w-5 h-5 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          <span className="font-bold text-slate-900 dark:text-white block mb-1">
            Правила зачета стоимости технического аудита
          </span>
          Зачет 100% стоимости распространяется на тарифы технического SEO-аудита (10 000 ₽ до 500 страниц, 15 000 ₽ до 3 000 страниц, 20 000 ₽ свыше 3 000 страниц) при переходе на ежемесячное SEO-продвижение (тарифы от 35 000 ₽/мес.) в течение 30 календарных дней с даты сдачи отчета. Сумма вычитается из платежа за первый месяц работ.
        </div>
      </div>

      <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 flex items-start gap-3.5">
        <AlertCircle className="w-5 h-5 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          <span className="font-bold text-slate-900 dark:text-white block mb-1">
            Разграничение диагностики и внедрения
          </span>
          По итогам аудита вы получаете полный реестр ошибок и понятные технические задания. Внесение правок в код программистом, верстка новых блоков и написание текстов рассчитываются отдельно либо выполняются в рамках тарифа на{' '}
          <Link
            to="/ceny/"
            className="text-growth-700 dark:text-growth-400 underline hover:no-underline font-semibold"
          >
            ежемесячное сопровождение
          </Link>
          .
        </div>
      </div>
    </div>
  );

  // Частые вопросы про SEO аудит сайта
  const faqList: FAQItem[] = [
    {
      question: 'Сколько стоит заказать SEO-аудит сайта и от чего зависит цена?',
      answer:
        'Цена на сео аудит сайта зависит от выбранного направления и количества страниц. Технический аудит стоит от 10 000 ₽ (до 500 страниц), 15 000 ₽ (до 3 000 страниц) и 20 000 ₽ (крупные сайты). Узкопрофильные аудиты: ссылочный — от 20 000 ₽, коммерческий — от 25 000 ₽, структуры и семантики — от 30 000 ₽. Полный комплексный SEO-аудит сайта по всем 4 направлениям с подробным ТЗ и онлайн-встречей стоит от 35 000 ₽ (для сайтов услуг до 500 страниц), 55 000 ₽ (для интернет-магазинов до 3 000 страниц) и от 80 000 ₽ для крупных проектов.',
    },
    {
      question: 'Как работает зачет стоимости технического аудита в оплату продвижения?',
      answer:
        'При заказе технического SEO-аудита (стоимость от 10 000 до 20 000 ₽ в зависимости от объема сайта) вся уплаченная сумма в полном объеме (100%) вычитается из стоимости первого месяца комплексного SEO-продвижения (тарифы от 35 000 ₽/мес.), если договор на продвижение заключается в течение 30 календарных дней с даты передачи отчета. Условие фиксируется в договоре.',
    },
    {
      question: 'В каком виде передаются результаты и чем отличаются тарифы по формату сдачи?',
      answer:
        'Во всех тарифах вы получаете два практических документа: 1) Сводную таблицу «Результаты проверок.xlsx» с полным перечнем адресов страниц с ошибками, разбитых по вкладкам; 2) Отчет в формате Word (.docx) с описанием сути каждой проблемы, разъяснениями, списками затронутых URL и техническим заданием. В комплексных тарифах дополнительно проводится персональная онлайн-встреча для разбора результатов и ответов на вопросы.',
    },
    {
      question: 'Что представляет собой техническое задание для программистов?',
      answer:
        'В отчете Word по каждому найденному отклонению фиксируются четыре пункта: 1) Что обнаружено и как это влияет на индексацию или конверсию; 2) Точный перечень URL или ссылка на соответствующий лист в книге «Результаты проверок.xlsx»; 3) Требования поисковых систем Яндекс и Google к корректному результату (какой код ответа, заголовок или атрибут должен отдаваться); 4) Критерий приемки задачи после исправления. Способ программной реализации на конкретной CMS выбирает ваш разработчик.',
    },
    {
      question: 'Что не входит в стоимость разового SEO-аудита?',
      answer:
        'Аудит — это диагностика и подготовка технических заданий. В стоимость разового аудита не входит непосредственное внесение правок в исходный код сайта силами программиста, написание новых текстов, заполнение сотен карточек товаров или покупка внешних ссылок. Если вам требуется реализация найденных точек роста под ключ, эти работы выполняются в рамках ежемесячного SEO-продвижения (при этом стоимость технического аудита полностью засчитывается в первый месяц).',
    },
    {
      question: 'Как расставляются приоритеты исправления найденных ошибок?',
      answer:
        'Все замечания в отчете разделены на три уровня приоритета: 1) Критический уровень — ошибки, блокирующие индексацию страниц, вызывающие сбои сервера или потерю заявок (исправляются в первую очередь); 2) Важный уровень — дубли метатегов, ошибки канонических адресов, скорость загрузки и структура заголовков; 3) Рекомендованный уровень — планомерное расширение структуры, доработка коммерческих блоков и перелинковки.',
    },
    {
      question: 'Для сайтов из каких регионов и на каких CMS проводится аудит?',
      answer:
        'Поисковый аудит сайта проводится для компаний из Москвы, Санкт-Петербурга и всех регионов России, а также для русскоязычных проектов за рубежом. Диагностика выполняется для любых систем управления (1С-Битрикс, WordPress, OpenCart, Tilda, ModX, Laravel, React/Next.js и самописных платформ). Оформление договора и закрывающих документов (чеки ФНС «Мой налог», акты) осуществляется удаленно, в том числе через ЭДО.',
    },
    {
      question: 'Какие доступы нужны, чтобы провести сео аудит сайта?',
      answer:
        'Для запуска технического или коммерческого аудита достаточно только адреса (URL) вашего сайта. Чтобы глубже проанализировать историю индексации, поисковые запросы и поведение посетителей, рекомендуется предоставить гостевой доступ на чтение (без прав редактирования) к Яндекс.Вебмастеру, Google Search Console и счетчику Яндекс.Метрики. Доступы к панели администратора сайта или серверу (FTP/SSH) для проведения аудита не требуются.',
    },
  ];

  // Микроразметка Schema.org
  const baseServiceSchema = generateServiceSchema({
    name: 'Комплексный SEO-аудит сайта',
    description: pageDescription,
    url: pageUrl,
    price: 35000,
    serviceType: 'Поисковый SEO-аудит сайта',
  });

  const serviceSchema = {
    ...baseServiceSchema,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Тарифы на комплексный SEO-аудит сайта',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Комплексный аудит: Сайты услуг и B2B (до 500 страниц)',
          price: '35000',
          priceCurrency: 'RUB',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Комплексный аудит: Интернет-магазин (до 3 000 страниц)',
          price: '55000',
          priceCurrency: 'RUB',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Комплексный аудит: Крупный проект (от 3 000 страниц)',
          price: '80000',
          priceCurrency: 'RUB',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/uslugi/' },
    { name: 'SEO-аудит сайта', url: pageUrl },
  ]);

  const faqSchema = generateFAQPageSchema(faqList);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${SITE_URL}${pageUrl}`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={`hub-${key}`} property={key} content={value} />
        ))}
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* 1. Первый экран (Hero) */}
      <AnimatedSection variant="fade" duration={0.8}>
        <section className="py-12 md:py-20 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 grid-bg transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-4xl">
              <Link
                to="/uslugi/"
                className="inline-flex items-center gap-2 text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 text-xs font-mono mb-6 transition-colors font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Все услуги</span>
              </Link>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 text-xs font-mono font-medium mb-5">
                <span className="w-2 h-2 rounded-full bg-growth-500 animate-pulse shrink-0" />
                <Sparkles className="w-3.5 h-3.5 text-growth-500" />
                <span>Основной раздел аудитов: 4 специализированных направления</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.15]">
                Комплексный{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-600 to-emerald-400">
                  SEO-аудит
                </span>{' '}
                сайта
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg md:text-xl font-sans leading-relaxed mb-8 max-w-3xl">
                Сквозная диагностика сайта в Яндекс и Google по 4 ключевым направлениям: техническая база, коммерческие факторы ранжирования, структура каталога и семантики, а также ссылочный профиль. Вы получаете детальный анализ от частного эксперта: сводный реестр проблемных URL в Excel, пошаговое ТЗ в Word для разработчиков и защиту результатов на онлайн-встрече.
              </p>

              {/* Специальное предложение: Зачет стоимости технического аудита */}
              <SpecialOfferBanner title="Специальное предложение: стоимость технического аудита засчитывается в тариф!">
                Цена технического аудита составляет <strong>от 10 000 до 20 000 ₽</strong> в зависимости от числа страниц.{' '}
                <strong>Засчитываем 100% его стоимости в оплату первого месяца продвижения</strong> (тарифы от 35 000 ₽/мес.), если договор на{' '}
                <Link
                  to="/uslugi/seo-prodvizhenie/"
                  className="text-growth-700 dark:text-growth-400 underline hover:no-underline font-medium"
                >
                  комплексное SEO-продвижение
                </Link>{' '}
                подписан в течение <strong>30 дней</strong> после сдачи отчета.
              </SpecialOfferBanner>

              {/* Параметры комплексного аудита */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-obsidian-800 text-left">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-800">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">
                    Срок аудита
                  </span>
                  <span className="text-base sm:text-lg font-bold text-growth-600 dark:text-growth-400">
                    5–10 рабочих дней
                  </span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-800">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">
                    Охват анализа
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    4 направления
                  </span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-800">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">
                    Формат отчета
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Excel + ТЗ в Word
                  </span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-800">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">
                    Защита отчета
                  </span>
                  <span className="text-base sm:text-lg font-bold text-growth-600 dark:text-growth-400">
                    Онлайн-встреча
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 2. Сетка направлений: 4 специализированных аудита */}
      <AnimatedSection variant="slide-up">
        <section className="py-16 md:py-24 bg-white dark:bg-obsidian-950 transition-colors border-b border-slate-200 dark:border-obsidian-850">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
                Направления диагностики
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                4 специализированных аудита в единой системе
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Вы можете заказать как точечную проверку одного узкого сегмента, так и комплексный сквозной аудит по всем 4 направлениям со скидкой.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {subAudits.map((sub) => {
                const SubIcon = sub.icon;
                return (
                  <div
                    key={sub.slug}
                    className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <SubIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-200/80 dark:bg-obsidian-800 text-slate-700 dark:text-slate-300 font-medium">
                          {sub.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-growth-600 dark:group-hover:text-growth-400 transition-colors">
                        {sub.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                        {sub.desc}
                      </p>

                      <ul className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300 font-mono">
                        {sub.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200/70 dark:border-obsidian-800 flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">
                          Стоимость аудита:
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">
                            {sub.price}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            ({sub.duration})
                          </span>
                        </div>
                      </div>

                      <Link
                        to={`/uslugi/seo-audit/${sub.slug}/`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-semibold text-xs sm:text-sm transition-all duration-200 group-hover:translate-x-0.5"
                      >
                        <span>{sub.anchorText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 3. Навигационная матрица выбора аудита под задачу (Универсальный компонент) */}
      <AnimatedSection variant="slide-up">
        <ComparisonTableSection
          eyebrow="Быстрый выбор формата"
          title="Какой вид поискового аудита выбрать под вашу задачу"
          subtitle="Если проблема локализована (например, нужно проверить только индексацию после переезда или оценить профиль ссылок), не обязательно переплачивать за полный пакет — выберите профильное направление."
          rows={selectionMatrix}
        />
      </AnimatedSection>

      {/* 4. В каких ситуациях аудит необходим в первую очередь */}
      <AnimatedSection variant="slide-up">
        <section className="py-16 md:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
                Диагностика проблем
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Когда сайту необходим аудит
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Своевременная диагностика экономит бюджет на рекламу и защищает от длительной стагнации позиций.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((uc, i) => {
                const UcIcon = uc.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 flex items-center justify-center mb-4">
                        <UcIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                        {uc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {uc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 5. Детальный разбор 4 направлений (Интерактивные вкладки) */}
      <AnimatedSection variant="slide-up">
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-obsidian-900/30 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="text-xs font-mono uppercase tracking-widest text-growth-600 dark:text-growth-400 mb-2 font-semibold">
                Глубина исследования
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Что конкретно проверяется в комплексном аудите
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Переключайтесь между вкладками, чтобы изучить подробный чек-лист по каждому направлению поисковой диагностики.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {tabsData.map((tab, idx) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-growth-600 text-obsidian-950 shadow-md shadow-growth-500/20'
                        : 'bg-white dark:bg-obsidian-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-obsidian-800 hover:border-slate-300 dark:hover:border-obsidian-750'
                    }`}
                  >
                    <TabIcon className="w-4 h-4 shrink-0" />
                    <span>{tab.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/70 dark:border-obsidian-800">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {tabsData[activeTab].title}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Обязательный блок проверок в комплексном отчете
                  </span>
                </div>
                <Link
                  to={tabsData[activeTab].slug}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-growth-700 dark:text-growth-400 hover:underline"
                >
                  <span>{tabsData[activeTab].linkLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tabsData[activeTab].items.map((checkItem, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-obsidian-850/50 border border-slate-200/60 dark:border-obsidian-800 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-sans leading-relaxed">
                      {checkItem}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 6. Итоговые документы (Универсальный компонент) */}
      <AnimatedSection variant="slide-up">
        <DeliverablesSection
          eyebrow="Итоговые документы"
          title="Что вы получаете, решив заказать аудит сайта"
          subtitle="По итогам проверки передаются структурированные рабочие документы с перечнем всех найденных ошибок, приоритетами и техническими заданиями для внедрения."
          items={deliverablesList}
        />
      </AnimatedSection>

      {/* 7. Пошаговый процесс проведения аудита (Универсальный компонент) */}
      <AnimatedSection variant="slide-up">
        <StepsSection
          eyebrow="Этапы взаимодействия"
          title="Как проводится комплексный сео аудит сайта: 5 шагов"
          subtitle="Последовательный регламент диагностики — от первичного сканирования до передачи готового технического задания."
          steps={auditSteps}
          takeawaysTitle="Что входит в результаты по регламенту:"
          takeaways={auditTakeaways}
        />
      </AnimatedSection>

      {/* 8. Тарифы на аудит (Универсальный компонент) */}
      <AnimatedSection variant="slide-up">
        <TariffsSection
          id="pricing"
          eyebrow="Прозрачные тарифы"
          title="Стоимость и цены на SEO-аудит сайта"
          subtitle="Фиксированная стоимость без скрытых доплат. Официальный договор с самозанятым / ИП (ЭДО, чеки в приложении ФНС «Мой налог»). Без НДС."
          tariffs={auditTiers}
          columns={3}
          disclaimer={tariffsDisclaimer}
        />
      </AnimatedSection>

      {/* 9. Ссылки на подтверждение опыта и смежные разделы */}
      <AnimatedSection variant="slide-up">
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-obsidian-900/30 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-growth-600 dark:text-growth-400 font-semibold mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Практический опыт и прозрачность</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Провести аудит сайта у частного специалиста с опытом с 2012 года
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Каждый аудит выполняется лично, без передачи стажерам и подрядчикам. Перед заказом вы можете изучить реальные примеры роста проектов в портфолио, отзывы заказчиков и юридические реквизиты для заключения договора.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  to="/portfolio/"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-obsidian-850 dark:hover:bg-obsidian-800 text-slate-900 dark:text-white text-xs font-mono font-semibold transition-colors"
                >
                  Кейсы и результаты
                </Link>
                <Link
                  to="/otzyvy/"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-obsidian-850 dark:hover:bg-obsidian-800 text-slate-900 dark:text-white text-xs font-mono font-semibold transition-colors"
                >
                  Отзывы клиентов
                </Link>
                <Link
                  to="/obo-mne/"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-obsidian-850 dark:hover:bg-obsidian-800 text-slate-900 dark:text-white text-xs font-mono font-semibold transition-colors"
                >
                  Об эксперте
                </Link>
                <Link
                  to="/rekvizity/"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-obsidian-850 dark:hover:bg-obsidian-800 text-slate-900 dark:text-white text-xs font-mono font-semibold transition-colors"
                >
                  Реквизиты (НПД / ЭДО)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 10. Вопросы и ответы (Универсальный компонент) */}
      <AnimatedSection variant="slide-up">
        <FAQSection
          id="faq"
          eyebrow="Вопросы и ответы"
          title="Частые вопросы про SEO-аудит сайта"
          items={faqList}
        />
      </AnimatedSection>

      {/* 11. Заявка на экспресс-оценку и аудит */}
      <AnimatedSection variant="slide-up">
        <div id="order-form">
          <CTASection />
        </div>
      </AnimatedSection>
    </>
  );
};
