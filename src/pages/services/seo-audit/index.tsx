import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  Video,
  FileSpreadsheet,
  ChevronDown,
  ArrowLeft,
  FileCode2,
  ShoppingCart,
  Link2,
  Network,
  Users,
  BadgePercent,
  TrendingDown,
  RefreshCw,
  Rocket,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { SITE_URL } from '@/utils/constants';
import { generateOgMeta } from '@/utils/helpers';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from '@/utils/schemaGenerators';
import { CTASection } from '@/components/sections';

/**
 * Комплексный стержневой раздел «SEO-аудит сайта»
 * Физический путь: src/pages/services/seo-audit/index.tsx
 * Посадочная страница для кластера запросов: «seo аудит сайта», «сео аудит сайта», «заказать seo аудит», «поисковый аудит сайта», «стоимость seo аудита».
 */
export const SeoAuditPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<number>(0);

  const pageTitle = 'Комплексный SEO аудит сайта — заказать поисковый сео аудит, цены и стоимость';
  const pageDescription =
    'Заказать комплексный SEO аудит сайта. Профессиональный поисковый сео аудит: проверка технических и коммерческих факторов, цены от 10 000 ₽. 100% стоимости засчитываем в продвижение!';
  const pageUrl = '/uslugi/seo-audit/';

  const ogMeta = generateOgMeta(pageUrl, pageTitle, pageDescription);

  // Тарифы на проведение SEO аудита сайта
  const auditTiers = [
    {
      id: 'technical',
      name: 'Технический SEO аудит',
      badge: '100% зачет в тариф',
      price: 'от 10 000 ₽',
      duration: '24 часа (1 раб. день)',
      description: 'Сквозная техническая диагностика сайта по ключевым направлениям. Стоимость полностью засчитывается в первый месяц продвижения.',
      features: [
        'Сквозное автоматическое сканирование всех страниц',
        'Сводная таблица «Результаты проверок.xlsx» со всеми адресами страниц с ошибками',
        'Клиентский отчёт «Технический аудит.docx» с готовым ТЗ для программистов',
        'Проверка главного зеркала, редиректов, robots.txt и sitemap.xml',
        'Замер скорости загрузки страниц и ключевых метрик рендеринга',
        'Проверка адаптивности для смартфонов и ошибок верстки',
        '100% стоимости засчитывается в оплату первого месяца продвижения',
      ],
      link: '/uslugi/seo-audit/tehnicheskij/',
    },
    {
      id: 'complex',
      name: 'Комплексный сео аудит сайта',
      badge: 'Выбор 85% заказчиков',
      price: '45 000 ₽',
      duration: '5–7 рабочих дней',
      popular: true,
      description: 'Полный поисковый аудит сайта по всем 4 направлениям: техника, коммерческие факторы, семантика и ссылочный профиль.',
      features: [
        'Всё, что входит в Технический SEO аудит',
        'Анализ коммерческих факторов ранжирования Яндекса',
        'Аудит удобства оформления заказа и конверсионных форм',
        'Анализ структуры страниц и выявление упущенного поискового спроса',
        'Аудит ссылочной массы и выявление токсичных доноров',
        'Сравнительный анализ против трех ведущих конкурентов ниши',
        'Видеоразбор экрана (35–45 минут с подробными пояснениями)',
        'Персональный созвон-защита результатов и ответы на вопросы команды',
      ],
      link: '#order-form',
    },
    {
      id: 'ecommerce',
      name: 'Глубокий аудит сайта интернет-магазина / Портала',
      badge: 'Для крупных проектов',
      price: 'от 75 000 ₽',
      duration: '8–12 рабочих дней',
      description: 'Масштабный сео аудит для интернет-магазинов, каталогов и порталов от 3 000 страниц.',
      features: [
        'Всё, что входит в Комплексный аудит сайта',
        'Аудит генерации теговых страниц и фильтров каталога',
        'Устранение каннибализации в тысячах карточек товаров и категорий',
        'Оптимизация краулингового бюджета для сотен тысяч страниц',
        'Детальный анализ ссылочных стратегий пяти главных соперников',
        'Проверка товарной микроразметки Schema (Product, AggregateOffer)',
        'Индивидуальный план внедрений с приоритетами на 6 месяцев',
        'Прямое сопровождение и контроль программистов до 30 дней',
      ],
      link: '#order-form',
    },
  ];

  // 4 дочерних направления кластера
  const subAudits = [
    {
      slug: 'tehnicheskij',
      title: 'Технический SEO аудит сайта',
      badge: 'Зачет в тариф • 24 часа',
      price: 'от 10 000 ₽',
      duration: '24 часа',
      icon: FileCode2,
      desc: 'Диагностика по ключевым направлениям: зеркала, редиректы, карта сайта, дубли, скорость и HTML. Выгрузка в Excel и Word с ТЗ для разработчиков.',
      highlights: ['Ответы сервера и цепочки редиректов', 'Файлы robots.txt и sitemap.xml', 'Скорость загрузки и стабильность верстки', 'Дубли страниц и канонические адреса'],
    },
    {
      slug: 'kommercheskij',
      title: 'Коммерческий аудит и удобство сайта',
      badge: 'Конверсия и продажи',
      price: 'от 25 000 ₽',
      duration: '3–5 дней',
      icon: ShoppingCart,
      desc: 'Оценка факторов доверия Яндекса и барьеров на пути к покупке: корзина, формы, цены, реквизиты и соответствие закону 152-ФЗ.',
      highlights: ['Факторы доверия бизнеса и реквизиты', 'Прозрачность цен и калькуляторы', 'Удобство корзины и оформления заказа', 'Соответствие закону 152-ФЗ'],
    },
    {
      slug: 'ssylochnyj',
      title: 'Аудит ссылочной массы и анкоров',
      badge: 'Внешние факторы',
      price: 'от 20 000 ₽',
      duration: '2–3 дня',
      icon: Link2,
      desc: 'Глубокий анализ профиля входящих внешних ссылок: токсичные доноры, переспам коммерческих анкоров, риски фильтров и стратегии конкурентов.',
      highlights: ['Качество сайтов-доноров', 'Переспам коммерческих анкоров', 'Токсичные ссылки и файл отклонения', 'Сравнение со стратегией конкурентов'],
    },
    {
      slug: 'struktury-i-semantiki',
      title: 'Аудит структуры и семантики',
      badge: 'Охват спроса',
      price: 'от 30 000 ₽',
      duration: '4–6 дней',
      icon: Network,
      desc: 'Анализ полноты охвата поисковых запросов ниши, выявление упущенного спроса, устранение каннибализации и проектирование перелинковки.',
      highlights: ['Поиск упущенных групп запросов', 'Устранение дублирования страниц в поиске', 'Глубина вложенности (не более 3 кликов)', 'Схема внутренней перелинковки'],
    },
  ];

  // В каких ситуациях аудит необходим в первую очередь
  const useCases = [
    {
      icon: TrendingDown,
      title: 'Трафик остановился или падает',
      desc: 'Выявляем скрытые санкции поисковых систем, выпадение полезных страниц из индекса, технический мусор и фильтры за переспам ссылок.',
    },
    {
      icon: RefreshCw,
      title: 'После обновления или смены CMS',
      desc: 'Проверяем правильность склейки зеркал, сохранность структуры адресов, работу 301-редиректов, метатегов и кодов ответов сервера.',
    },
    {
      icon: Rocket,
      title: 'Перед стартом продвижения',
      desc: 'Диагностируем готовность сайта к продвижению, чтобы не тратить рекламные и ссылочные бюджеты впустую из-за технических блокировок.',
    },
    {
      icon: ShieldCheck,
      title: 'При смене подрядчика',
      desc: 'Независимая экспертная проверка проделанной работы, поиск точек роста и аудит реального состояния сайта без прикрас.',
    },
  ];

  // Пошаговый процесс проведения аудита сайта
  const auditSteps = [
    {
      step: '01',
      title: 'Подача заявки и первичный анализ',
      desc: 'Вы отправляете адрес сайта. Для начала работы достаточно только URL, гостевые доступы к метрикам подключаются по желанию.',
    },
    {
      step: '02',
      title: 'Автоматическое сканирование',
      desc: 'Запуск трех специализированных модулей: проверка зеркал и редиректов, анализ карты сайта sitemap.xml и сплошное сканирование HTML-кода.',
    },
    {
      step: '03',
      title: 'Экспертная диагностика',
      desc: 'Глубокий анализ коммерческих факторов, структуры каталога, удобства оформления заказов, семантического охвата и ссылочной массы.',
    },
    {
      step: '04',
      title: 'Подготовка файлов и видеоразбора',
      desc: 'Формирование таблицы «Результаты проверок.xlsx» со всеми адресами страниц с ошибками, отчета «Аудит сайта.docx» с ТЗ и запись скринкаста.',
    },
    {
      step: '05',
      title: 'Презентация и зачет в тариф',
      desc: 'Созвон с вами и разработчиками, ответы на все вопросы, передача ТЗ и зачет 100% стоимости аудита в первый месяц продвижения.',
    },
  ];

  // Детализация состава по вкладкам
  const compositionTabs = [
    {
      title: '1. Сервер и технический аудит',
      icon: FileCode2,
      items: [
        'Коды ответа HTTP сервера (200, 301, 302, 404, 500)',
        'Главное зеркало, редирект с www и без www, HTTPS-сертификат',
        'Директивы robots.txt и валидность XML-карты sitemap.xml',
        'Поиск страниц-сирот, дублей и настройка канонических адресов',
        'Скорость загрузки и ключевые показатели рендеринга страниц',
        'Адаптивность под мобильные устройства и чистота исходного кода',
      ],
    },
    {
      title: '2. Коммерческие факторы и удобство',
      icon: ShoppingCart,
      items: [
        'Полнота юридических реквизитов и факторы доверия поисковых систем',
        'Прозрачность ценообразования, калькуляторы и вилки цен',
        'Удобство корзины, быстрого заказа и форм обратной связи',
        'Интеграция с мессенджерами, чатами и телефонной связью',
        'Соответствие закону о защите персональных данных 152-ФЗ',
        'Наличие отзывов, гарантийных обязательств, условий доставки и оплаты',
      ],
    },
    {
      title: '3. Структура и семантическое ядро',
      icon: Network,
      items: [
        'Анализ полноты охвата поискового спроса в вашей нише',
        'Выявление упущенных групп запросов, по которым получают трафик конкуренты',
        'Устранение каннибализации и конкуренции между страницами сайта',
        'Оптимизация глубины вложенности страниц (не более трех кликов)',
        'Проектирование фильтров каталога и страниц под узкий спрос',
        'Схема внутренней перелинковки для передачи веса посадочным страницам',
      ],
    },
    {
      title: '4. Профиль внешних ссылок',
      icon: Link2,
      items: [
        'Динамика ссылочной массы и соотношение различных типов ссылок',
        'Анализ текстов ссылок на переспам коммерческими фразами',
        'Выявление сайтов-доноров низкого качества и спам-ссылок',
        'Сравнение ссылочной стратегии с ведущими игроками ниши',
        'Защита от алгоритмических фильтров за неестественные ссылки',
        'Формирование файла для отклонения токсичных ссылок в поисковиках',
      ],
    },
  ];

  // Частые вопросы про SEO аудит сайта
  const faqList = [
    {
      question: 'Сколько стоит заказать SEO аудит сайта и как формируется цена?',
      answer: 'Стоимость SEO аудита начинается от 10 000 ₽ для базовой технической проверки за 24 часа. Комплексный сео аудит сайта стоит 45 000 ₽ и включает диагностику коммерческих факторов, семантики и ссылочной массы с личным видеоразбором. Для крупных интернет-магазинов цена рассчитывается индивидуально в зависимости от структуры каталога и числа страниц.',
    },
    {
      question: 'Как работает зачет стоимости сео аудита в оплату первого месяца продвижения?',
      answer: 'Очень просто и прозрачно: стоимость аудита (от 10 000 ₽ в зависимости от объема страниц) полностью засчитывается в оплату первого месяца сотрудничества, если договор на комплексное поисковое продвижение подписан в течение 30 дней после сдачи отчета. Таким образом, профессиональный аудит становится для вас бесплатным подготовительным этапом.',
    },
    {
      question: 'В каком виде передаются результаты аудита?',
      answer: 'Заказчик получает комплект практических рабочих материалов: 1) Сводную таблицу «Результаты проверок.xlsx» со всеми адресами страниц с ошибками, отфильтрованными по степени критичности; 2) Клиентский отчет «Технический аудит.docx» с понятным ТЗ на исправление ошибок для разработчиков.',
    },
    {
      question: 'Что представляет собой техническое задание для программистов?',
      answer: 'В отчете формируется четкое техническое задание на исправление ошибок: формулируется суть проблемы, приводится точный список проблемных URL и описываются требования поисковых систем к корректной работе сайта. Программист получает прозрачную задачу без необходимости разбираться в тонкостях алгоритмов поисковых систем.',
    },
    {
      question: 'Как расставляются приоритеты исправления найденных ошибок?',
      answer: 'Все обнаруженные проблемы делятся по уровню критичности: 1) Критические ошибки (блокировка сканирования, некорректные ответы сервера, дубликаты), требующие первоочередного вмешательства; 2) Важные параметры (канонические теги, оптимизация скорости, микроразметка); 3) Рекомендации по развитию (доработка коммерческих элементов, расширение структуры). Это позволяет выстроить поэтапный план внедрения с быстрой отдачей для бизнеса.',
    },
    {
      question: 'Для сайтов из каких регионов проводится аудит?',
      answer: 'Аудит проводится для проектов из Москвы, Санкт-Петербурга и любых регионов России, а также для русскоязычных сайтов за рубежом. Все взаимодействие отлажено удаленно: выгрузки и технические задания передаются в электронном виде, а закрывающие документы оформляются через ЭДО.',
    },
    {
      question: 'Предусмотрена ли помощь во внедрении найденных правок?',
      answer: 'По согласованию возможно сопровождение процесса внедрения: проведение консультаций для команды разработки и повторная контрольная проверка сайта после публикации изменений на сервере.',
    },
    {
      question: 'Какие доступы необходимы, чтобы провести сео аудит сайта?',
      answer: 'Для начала аудита достаточно только адреса сайта. Для максимальной глубины исследования желательно предоставить гостевой доступ (без прав администратора) к системам веб-аналитики Яндекс.Метрика и панелям Яндекс.Вебмастер / Google Search Console.',
    },
  ];

  // Микроразметка Schema.org
  const serviceSchema = generateServiceSchema({
    name: 'Комплексный SEO аудит сайта',
    description: pageDescription,
    url: pageUrl,
    price: 45000,
    serviceType: 'Поисковый сео аудит сайта',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/uslugi/' },
    { name: 'SEO аудит сайта', url: pageUrl },
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
              <Sparkles className="w-3.5 h-3.5 text-growth-500" />
              <span>Центр аудитов: 4 специализированных направления</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.15]">
              Комплексный <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-600 to-emerald-400">SEO аудит</span> сайта
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg md:text-xl font-sans leading-relaxed mb-8 max-w-3xl">
              Глубокая проверка сайта по ключевым факторам ранжирования в Яндекс и Google. Если вы планируете заказать сео аудит сайта, комплексная диагностика выявит все скрытые технические ошибки, проблемы индексации и причины потери трафика. Вы получаете файл со всеми адресами страниц с ошибками, подробное ТЗ для разработчиков и сео-специалиста в зависимости от вида ошибки.
            </p>

            {/* Специальное предложение: Стоимость засчитывается в тариф */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-growth-500/15 via-growth-500/10 to-transparent border-2 border-growth-500/30 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-growth-600 text-obsidian-950 flex items-center justify-center shrink-0 mt-0.5">
                  <BadgePercent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Специальное предложение: стоимость SEO аудита засчитывается в тариф!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Цена аудита — <strong>от 10 000 ₽</strong> в зависимости от количества страниц сайта. <strong>Засчитываем 100% стоимости в оплату первого месяца сотрудничества</strong>, если договор на продвижение подписан в течение 30 дней.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-obsidian-800 text-left">
              <div className="p-3 rounded-xl bg-white/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">Срок отчета</span>
                <span className="text-base sm:text-lg font-bold text-growth-600 dark:text-growth-400">от 24 часов</span>
              </div>
              <div className="p-3 rounded-xl bg-white/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">Сквозные выгрузки</span>
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Excel со всеми URL</span>
              </div>
              <div className="p-3 rounded-xl bg-white/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">Формат ТЗ</span>
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Word с кодом для ТЗ</span>
              </div>
              <div className="p-3 rounded-xl bg-white/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">Презентация</span>
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Видео + Созвон</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Сетка направлений: 4 специализированных аудита */}
      <section className="py-16 md:py-24 bg-white dark:bg-obsidian-950 transition-colors border-b border-slate-200 dark:border-obsidian-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Направления диагностики
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Направления комплексного SEO аудита сайта
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Вы можете заказать поисковый сео аудит конкретного направления (технический, коммерческий, ссылочный, структуры) либо провести полный аудит сайта под ключ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {subAudits.map((sub) => {
              const IconComp = sub.icon;
              return (
                <div
                  key={sub.slug}
                  className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-900/80 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/50 dark:hover:border-growth-500/40 hover:shadow-xl hover:shadow-growth-500/5 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-200/70 dark:bg-obsidian-800 text-slate-700 dark:text-slate-300">
                        {sub.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-growth-600 dark:group-hover:text-growth-400 transition-colors">
                      {sub.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      {sub.desc}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-200 dark:border-obsidian-800">
                      <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 block mb-2">
                        Что проверяется:
                      </span>
                      {sub.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-obsidian-800 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Стоимость и срок</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-slate-900 dark:text-white">{sub.price}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">({sub.duration})</span>
                      </div>
                    </div>

                    <Link
                      to={`/uslugi/seo-audit/${sub.slug}/`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-semibold text-xs sm:text-sm transition-all duration-200 group-hover:translate-x-0.5"
                    >
                      <span>Подробнее</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. В каких ситуациях аудит необходим в первую очередь */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-obsidian-900/30 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Диагностика проблем
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Когда необходимо провести аудит сайта
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Своевременная экспертная проверка позволяет предотвратить потерю клиентов и исключить нецелевой расход маркетингового бюджета.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => {
              const IconComp = useCase.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/40 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                    {useCase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Состав комплексного аудита по направлениям */}
      <section className="py-16 md:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Программа проверок
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Что входит в полный поисковый сео аудит сайта
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Аудит объединяет автоматическую проверку программными модулями и глубокий ручной экспертный анализ всех факторов ранжирования.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {compositionTabs.map((tab, idx) => {
              const IconComp = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-growth-600 text-obsidian-950 shadow-md shadow-growth-600/20'
                      : 'bg-slate-100 dark:bg-obsidian-850 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-obsidian-800'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-obsidian-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-obsidian-800">
            <div className="flex items-center gap-3 mb-6">
              {React.createElement(compositionTabs[activeTab].icon, {
                className: 'w-6 h-6 text-growth-600 dark:text-growth-400',
              })}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {compositionTabs[activeTab].title}
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {compositionTabs[activeTab].items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-obsidian-850/60 border border-slate-200 dark:border-obsidian-800">
                  <CheckCircle2 className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Артефакты сдачи аудита */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-obsidian-900/40 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Прозрачность результатов
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Что вы получаете, решив заказать аудит сайта
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Никаких автоматических шаблонных отчетов общего вида. Вы получаете практические файлы для вашей команды с конкретными ответами на вопрос «Что исправить и как».
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
              <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Результаты проверок.xlsx</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Сводная таблица с полным списком всех адресов страниц с ошибками, кодами ответа, редиректами и привязкой к приоритету устранения.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
              <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Отчёт и ТЗ в Word (.docx)</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Понятные инструкции и технические задания для программистов с готовыми примерами кода, директив сервера и микроразметки.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
              <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 flex items-center justify-center mb-4">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Видеоразбор (35–45 мин)</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Запись скринкаста с демонстрацией вашего сайта и наглядным разбором ключевых точек потерь органического поискового трафика.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
              <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">Созвон-защита и поддержка</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Персональная онлайн-встреча для ответов на вопросы руководства и программистов, а также бесплатная повторная проверка после внедрений.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Пошаговый процесс проведения аудита */}
      <section className="py-16 md:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Этапы взаимодействия
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Как проводится комплексный сео аудит сайта: 5 шагов
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Прозрачный процесс работы без лишней бюрократии и задержек.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            {auditSteps.map((st, i) => (
              <div
                key={i}
                className="relative p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-growth-600 dark:text-growth-400 font-mono mb-3">
                    {st.step}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm sm:text-base">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Тарифы на аудит */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-obsidian-900/40 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Прозрачные фиксированные цены
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Стоимость и цены на SEO аудит сайта
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Прозрачные фиксированные цены на проведение аудита сайта без скрытых комиссий. Официальный договор с юрлицами и ИП через ЭДО.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {auditTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  tier.popular
                    ? 'bg-slate-50 dark:bg-obsidian-900 border-2 border-growth-500 shadow-2xl shadow-growth-500/10 scale-100 lg:-translate-y-2'
                    : 'bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-growth-600 text-obsidian-950 text-xs font-mono font-bold tracking-wide">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mb-6 p-4 rounded-xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                      {tier.price}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400" />
                      <span>Срок: {tier.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 block uppercase">
                      Состав пакета:
                    </span>
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#order-form"
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-center transition-all duration-200 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-growth-600 hover:bg-growth-500 text-obsidian-950 shadow-lg shadow-growth-600/30 font-bold'
                      : 'bg-slate-200 hover:bg-slate-300 dark:bg-obsidian-800 dark:hover:bg-obsidian-750 text-slate-900 dark:text-white'
                  }`}
                >
                  <span>Заказать этот тариф</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-obsidian-900/40 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Ответы на вопросы
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Частые вопросы про SEO аудит сайта
            </h2>
          </div>

          <div className="space-y-4">
            {faqList.map((faqItem, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-obsidian-800 bg-white dark:bg-obsidian-900 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {faqItem.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-growth-600 dark:text-growth-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-obsidian-800/80 pt-4">
                      {faqItem.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Заявка на экспресс-оценку и аудит */}
      <div id="order-form">
        <CTASection />
      </div>
    </>
  );
};
