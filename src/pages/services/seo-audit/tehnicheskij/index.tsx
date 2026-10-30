import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ShoppingCart,
  Link2,
  Network,
  Clock,
  Sparkles,
  FileSpreadsheet,
  FileText,
  BadgePercent,
  Check,
  Server,
  Compass,
  Heading,
  Layers,
  Image,
  Code2,
  ShieldCheck,
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
 * Страница «Технический SEO-аудит сайта»
 * Физический путь: src/pages/services/seo-audit/tehnicheskij/index.tsx
 * Основана на автоматизированном сканировании + анализе редиректов и sitemap.
 * Выявляет все критические технические ошибки с выдачей Excel-реестра и Word-отчета.
 */
export const TechnicalAuditPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const pageTitle = 'Технический SEO-аудит сайта от 10 000 ₽ за 24 часа — Михаил Павлов';
  const pageDescription =
    'Полный технический SEO-аудит сайта по расширенному набору параметров за 24 часа. Сводная таблица «Результаты проверок.xlsx» и Word-отчет с ТЗ для разработчиков. 100% стоимости засчитываем в первый месяц продвижения.';
  const pageUrl = '/uslugi/seo-audit/tehnicheskij/';

  const ogMeta = generateOgMeta(pageUrl, pageTitle, pageDescription);

  // Тарифная сетка в зависимости от количества страниц
  const volumeTiers = [
    {
      pages: 'До 500 страниц',
      price: '10 000 ₽',
      type: 'Сайты услуг, лендинги, визитки',
      duration: '24 часа (1 раб. день)',
      features: [
        'Сквозное сканирование всех страниц до 500 URL',
        'Проверка всех ключевых технических параметров',
        'Таблица «Результаты проверок.xlsx» со ссылками на ошибки',
        'Готовый клиентский отчёт «Технический аудит.docx»',
        '100% стоимости засчитывается в оплату продвижения',
      ],
    },
    {
      pages: 'До 3 000 страниц',
      price: '15 000 ₽',
      popular: true,
      type: 'Корпоративные сайты, небольшие каталоги',
      duration: '24–48 часов',
      features: [
        'Сканирование структуры и каталога до 3 000 URL',
        'Глубокий анализ фильтрации, пагинации и canonical',
        'Таблица «Результаты проверок.xlsx» со всеми выгрузками',
        'Развернутый Word-отчет с пошаговыми инструкциями для разработчиков',
        '100% стоимости засчитывается в оплату продвижения',
      ],
    },
    {
      pages: 'От 3 000 до 20 000+ страниц',
      price: 'от 20 000 ₽',
      type: 'Интернет-магазины, маркетплейсы, порталы',
      duration: '2–3 рабочих дня',
      features: [
        'Сканирование сотен тысяч динамических URL и фильтров',
        'Оптимизация лимитов поискового сканирования и навигации',
        'Полная книга «Результаты проверок.xlsx» по всем вкладкам',
        'Индивидуальные ТЗ для команды программистов',
        '100% стоимости засчитывается в оплату продвижения',
      ],
    },
  ];

  // 8 ключевых направлений технического аудита
  const auditDirections = [
    {
      id: 1,
      title: '1. Серверные настройки, зеркала и перенаправления',
      badge: 'Серверный уровень',
      icon: Server,
      text: 'Корректность ответов сервера — фундамент доступности сайта для поисковых роботов. В рамках этого направления проверяется безошибочная склейка зеркал с префиксом www и без него, принудительный 301-редирект с протокола HTTP на защищенный HTTPS, а также обработка адресных строк с заглавными буквами и множественными слэшами. Выявление циклических перенаправлений, серверных сбоев 5xx и цепочек редиректов позволяет исключить потерю ссылочного веса, сохранить лимит поискового сканирования и гарантировать быструю загрузку страниц.',
      keyItems: ['Склейка зеркал www / без-www', 'Редирект HTTP → HTTPS', 'Цепочки и циклы перенаправлений', 'Ошибки сервера (5xx) и тайм-ауты'],
    },
    {
      id: 2,
      title: '2. XML-карта сайта (Sitemap) и управление индексацией',
      badge: 'Индексация и карты',
      icon: Compass,
      text: 'Файл sitemap.xml служит прямой инструкцией для поисковых систем, указывая приоритетные и актуальные страницы для индексации. В этом блоке проводится перекрестная сверка XML-карты с реальными кодами ответа сервера и результатами сканирования сайта. Анализ находит страницы-сироты, битые ссылки (коды 4xx и 5xx), случайные внешние URL и нестыковки с запрещающими правилами в robots.txt, устраняя критические барьеры для попадания новых товаров и услуг в поисковую выдачу.',
      keyItems: ['Сверка sitemap с реальным сканированием', 'Поиск битых страниц в карте (4xx/5xx)', 'Конфликты директив с robots.txt', 'Страницы-сироты без внутренних ссылок'],
    },
    {
      id: 3,
      title: '3. Заголовки страниц (Title) и релевантность',
      badge: 'Заголовки и сниппеты',
      icon: FileText,
      text: 'Тег Title остается главным текстовым ориентиром для алгоритмов текстового ранжирования Яндекса и Google, а также формирует кликабельный заголовок в результатах поиска. Проверка выявляет отсутствующие, дублирующиеся и некорректно оформленные заголовки (короче 30 или длиннее 70 символов), теги за пределами блока head, а также посимвольное совпадение с заголовком первого уровня H1. Это помогает устранить внутреннюю конкуренцию страниц между собой и повысить точность поисковых сниппетов.',
      keyItems: ['Отсутствующие и дублирующиеся Title', 'Длина заголовков (30–70 символов)', 'Размещение тега строго внутри head', 'Устранение дублирования Title и H1'],
    },
    {
      id: 4,
      title: '4. Метаописания (Description) и привлекательность в поиске',
      badge: 'Метатеги и CTR',
      icon: Layers,
      text: 'Метатег Description напрямую влияет на показатель кликабельности (CTR) в органической выдаче поисковых систем. Диагностика контролирует наличие описаний на всех посадочных страницах, выявляет полные дубли между разделами, а также отсекает слишком короткие (менее 70 знаков) или обрезанные длинные тексты (более 160 знаков). Качественно оптимизированные метаописания привлекают больше целевых переходов из поиска без дополнительных вложений в платную рекламу.',
      keyItems: ['Наличие Description на всех страницах', 'Устранение дубликатов между разделами', 'Оптимальная длина под сниппеты', 'Привлекательность формулировок для кликов'],
    },
    {
      id: 5,
      title: '5. Иерархия заголовков H1 и H2',
      badge: 'Структура документов',
      icon: Heading,
      text: 'Логическая структура заголовков показывает поисковому роботу смысловое ядро документа и помогает пользователям быстро ориентироваться в информации. Проверка фиксирует пропущенные и множественные теги h1 на одной странице, находит повторяющиеся заголовки в разных разделах и оценивает наличие подзаголовков второго уровня h2 в объемных текстах. Правильная разметка H1–H2 повышает текстовое доверие к странице и улучшает понимание ее тематики поисковиками.',
      keyItems: ['Контроль единственного H1 на странице', 'Устранение дубликатов H1 по сайту', 'Логика подзаголовков H2 в текстах', 'Семантическая иерархия структуры'],
    },
    {
      id: 6,
      title: '6. Канонические адреса (Rel Canonical) и защита от дублей',
      badge: 'Канонизация и дубли',
      icon: ShieldCheck,
      text: 'Тег rel="canonical" защищает сайт от появления дублей страниц, которые неизбежно возникают из-за параметров сортировки, фильтров, пагинации и меток отслеживания. Аудит проверяет корректность указания абсолютных канонических адресов, отсутствие конфликтующих тегов, их размещение строго в контейнере head, а также исключает указание неканонических адресов на страницы с ошибками или перенаправлениями, предотвращая вымывание полезных страниц из индекса.',
      keyItems: ['Наличие canonical на индексируемых URL', 'Исключение конфликтующих тегов', 'Абсолютные адреса с протоколом HTTPS', 'Защита от дублей фильтров и сортировок'],
    },
    {
      id: 7,
      title: '7. Оптимизация изображений и скорость загрузки',
      badge: 'Скорость и графика',
      icon: Image,
      text: 'Графический контент формирует до 70% общего веса веб-страницы и напрямую определяет скорость отрисовки (метрика LCP из стандартов Core Web Vitals). Мы находим тяжелые файлы без современного сжатия (WebP/AVIF) весом свыше 200 КБ, а также изображения с пустыми атрибутами alt. Оптимизация картинок ускоряет отклик сайта на мобильных устройствах и привлекает дополнительный поисковый трафик из поиска по картинкам Яндекса и Google.',
      keyItems: ['Поиск тяжелых файлов свыше 200 КБ', 'Внедрение форматов WebP и AVIF', 'Заполнение атрибутов alt для поиска', 'Ускорение метрики скорости LCP'],
    },
    {
      id: 8,
      title: '8. Валидация HTML-кода и техническая чистота верстки',
      badge: 'Чистота верстки',
      icon: Code2,
      text: 'Ошибки в коде и некорректная структура DOM могут привести к тому, что браузер или поисковый бот преждевременно закроет служебный блок head и проигнорирует критически важные метатеги, аналитические счетчики и стили. Анализ находит некорректные блочные теги внутри заголовка документа, множественные служебные контейнеры и битые внутренние ссылки 4xx, обеспечивая стабильную работу сайта и корректное отображение во всех браузерах.',
      keyItems: ['Битые внутренние ссылки (коды 4xx)', 'Недопустимые элементы внутри head', 'Исключение множественных тегов head', 'Корректность DOM-дерева документа'],
    },
  ];

  const faqList = [
    {
      question: 'Как работает зачет стоимости аудита в первый месяц продвижения?',
      answer: 'Очень просто и прозрачно: вы оплачиваете аудит (от 10 000 ₽) и получаете два файла с полным анализом (Excel + Word). Если в течение 30 дней после сдачи аудита мы подписываем договор на регулярное ежемесячное SEO-продвижение, вся сумма, уплаченная за аудит, в полном объеме (100%) вычитается из стоимости первого месяца абонентской платы. Таким образом, для постоянных клиентов аудит становится абсолютно бесплатным.',
    },
    {
      question: 'Что именно я получаю по итогам аудита?',
      answer: 'Вы получаете два готовых файла: 1) Сводную книгу «Результаты проверок.xlsx», где по каждому направлению выгружен точный список страниц с ошибками, кодами ответа и адресами перенаправлений; 2) Официальный клиентский отчет в формате Word (.docx) с разбором каждой ошибки, степенью критичности и пошаговым ТЗ для веб-программистов.',
    },
    {
      question: 'Почему аудит делается так быстро — всего за 24 часа?',
      answer: 'Я использую собственный автоматизированный программный комплекс на базе Screaming Frog CLI, модулей проверки редиректов и сопоставления XML-карт. Скрипт мгновенно исключает человеческий фактор, сканирует весь массив страниц и автоматически формирует чистые структурированные отчеты без «воды» и мусорных пустых вкладок.',
    },
    {
      question: 'Поможете ли вы разработчикам исправить найденные ошибки?',
      answer: 'Да. Все технические задания в отчете сформулированы на профессиональном языке разработчиков с примерами конфигураций Nginx, правил htaccess, шаблонов canonical и кодов ответа. При необходимости я провожу бесплатную повторную валидацию сайта после того, как ваши программисты зальют исправления.',
    },
  ];

  const relatedAudits = [
    { slug: 'kommercheskij', title: 'Коммерческий аудит', price: 'от 25 000 ₽', icon: ShoppingCart, desc: 'Анализ факторов доверия Яндекса, удобства корзины, форм и 152-ФЗ.' },
    { slug: 'ssylochnyj', title: 'Ссылочный аудит', price: 'от 20 000 ₽', icon: Link2, desc: 'Проверка профиля входящих ссылок, анкор-листа, токсичных доноров и конкурентов.' },
    { slug: 'struktury-i-semantiki', title: 'Аудит структуры и семантики', price: 'от 30 000 ₽', icon: Network, desc: 'Полнота семантического ядра, упущенный спрос и внутренняя перелинковка.' },
  ];

  const serviceSchema = generateServiceSchema({
    name: 'Технический SEO-аудит сайта',
    description: pageDescription,
    url: pageUrl,
    price: 10000,
    serviceType: 'Технический аудит сайта',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/uslugi/' },
    { name: 'SEO-аудит сайта', url: '/uslugi/seo-audit/' },
    { name: 'Технический аудит', url: pageUrl },
  ]);

  const faqSchema = generateFAQPageSchema(faqList);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${SITE_URL}${pageUrl}`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={`tech-${key}`} property={key} content={value} />
        ))}
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* 1. Первый экран (Hero) */}
      <section className="py-12 md:py-20 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 grid-bg transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <Link
                to="/uslugi/seo-audit/"
                className="inline-flex items-center gap-2 text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 text-xs font-mono transition-colors font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Все виды аудитов</span>
              </Link>
              <span className="text-slate-300 dark:text-obsidian-700">/</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Технический аудит</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 text-xs font-mono font-medium mb-5">
              <Sparkles className="w-3.5 h-3.5 text-growth-500" />
              <span>Глубокая диагностика • Готовность за 24 часа • Автоматизированная точность</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Технический SEO-аудит сайта <span className="text-transparent bg-clip-text bg-gradient-to-r from-growth-600 to-emerald-400">за 24 часа</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-sans leading-relaxed mb-6 max-w-3xl">
              Сквозная диагностика сайта по ключевым техническим направлениям: серверные настройки, зеркала, цепочки редиректов, ошибки XML-карт, дубли Title/H1, canonical и чистота HTML. Вы получаете сводную книгу <code>Результаты проверок.xlsx</code> с конкретными ссылками и клиентский Word-отчет с ТЗ для разработчиков.
            </p>

            {/* Специальное предложение: Зачет стоимости в тариф */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-growth-500/15 via-growth-500/10 to-transparent border-2 border-growth-500/30 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-growth-600 text-obsidian-950 flex items-center justify-center shrink-0 mt-0.5">
                  <BadgePercent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Стоимость аудита полностью засчитывается в первый месяц продвижения!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Аудит <strong>от 10 000 ₽</strong> в зависимости от количества страниц сайта. Если в течение <strong>30 дней</strong> после получения отчета мы заключаем договор на регулярное SEO-продвижение — <strong>100% стоимости аудита вычитается из первого месяца ведения</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-200 dark:border-obsidian-800">
              <div className="p-3.5 px-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-0.5">Стоимость</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white">от 10 000 ₽</span>
              </div>
              <div className="p-3.5 px-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-0.5">Срок сдачи</span>
                <span className="text-xl font-bold text-growth-600 dark:text-growth-400">от 24 часов</span>
              </div>
              <a
                href="#pricing-tiers"
                className="px-6 py-4 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-growth-600/20"
              >
                <span>Выбрать тариф по объему</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Два реальных артефакта, которые получает клиент */}
      <section className="py-16 md:py-20 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Итоговые материалы
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              В каком виде вы получаете результаты аудита
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Никаких абстрактных скриншотов. Вы получаете два готовых документа: структурированную рабочую таблицу для программистов и отчет для руководителя.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-growth-500/10 text-growth-600 dark:text-growth-400 flex items-center justify-center mb-5">
                  <FileSpreadsheet className="w-7 h-7" />
                </div>
                <div className="inline-block px-2.5 py-1 rounded bg-slate-200 dark:bg-obsidian-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 mb-3">
                  Файл: Результаты проверок.xlsx
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Сводная Excel-книга со всеми ошибками
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Каждая из обнаруженных проблем вынесена на отдельный лист с полным перечнем конкретных URL:
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Лист «Ошибки настройки сервера» и «Множественные редиректы»',
                    'Листы «Конфликты robots», «Sitemap битые URL», «Сироты sitemap»',
                    'Листы «Title дубликаты / короткие / длинные», «H1 ошибки»',
                    'Листы «Canonical ошибки», «Картинки без alt и >200 КБ»',
                    'Лист «Ошибки HTML» и битые внутренние ссылки 4xx',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-obsidian-800 text-xs font-mono text-slate-500 dark:text-slate-400">
                Пустые срезы автоматически фильтруются — в файле только реальные ошибки!
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-growth-500/10 text-growth-600 dark:text-growth-400 flex items-center justify-center mb-5">
                  <FileText className="w-7 h-7" />
                </div>
                <div className="inline-block px-2.5 py-1 rounded bg-slate-200 dark:bg-obsidian-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 mb-3">
                  Файл: Технический аудит &lt;domain&gt;.docx
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Клиентский отчет Word с пошаговыми ТЗ
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Официальный документ с описанием сути каждой проблемы и четкими инструкциями для программистов:
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Общая сводка SEO Health Score (индекс здоровья сайта)',
                    'Приоритезация задач (P0 критично, P1 важно, P2 рекомендовано)',
                    'Примеры конфигураций для Nginx и правил для .htaccess',
                    'Точные формулы формирования canonical и генерации sitemap',
                    'Понятный язык для руководства и технический — для разработчиков',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-obsidian-800 text-xs font-mono text-slate-500 dark:text-slate-400">
                Разработчик сразу берет задачи в спринт без лишних уточнений!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ключевые направления технической диагностики */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-obsidian-900/40 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Программа технического аудита
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              8 направлений технической диагностики сайта
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Диагностика охватывает полный комплекс параметров поисковой оптимизации, сгруппированных по 8 ключевым блокам. По каждому направлению формируются конкретные списки адресов с ошибками в таблице Excel и готовые технические задания в отчете Word.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {auditDirections.map((dir) => {
              const DirIcon = dir.icon;
              return (
                <div
                  key={dir.id}
                  className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 flex flex-col justify-between hover:border-growth-500/40 hover:shadow-xl hover:shadow-growth-500/5 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 flex items-center justify-center shrink-0">
                        <DirIcon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-growth-500/10 text-growth-700 dark:text-growth-300 border border-growth-500/20">
                        {dir.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {dir.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                      {dir.text}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-obsidian-800">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2.5 font-semibold">
                      Ключевые точки контроля:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dir.keyItems.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Тарифная сетка в зависимости от количества страниц */}
      <section id="pricing-tiers" className="py-16 md:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Прозрачные фиксированные цены
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Стоимость технического аудита
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Цена зависит только от объема страниц сайта. Вся сумма засчитывается в оплату первого месяца продвижения при подписании договора в течение 30 дней.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {volumeTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  tier.popular
                    ? 'bg-slate-50 dark:bg-obsidian-900 border-2 border-growth-500 shadow-2xl shadow-growth-500/10 scale-100 lg:-translate-y-2'
                    : 'bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-growth-600 text-obsidian-950 text-xs font-mono font-bold tracking-wide">
                    Популярный выбор
                  </div>
                )}

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {tier.pages}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    {tier.type}
                  </p>

                  <div className="mb-6 p-4 rounded-xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-obsidian-800">
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                      {tier.price}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400" />
                      <span>Срок: {tier.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
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
                      : 'bg-white hover:bg-slate-200 dark:bg-obsidian-800 dark:hover:bg-obsidian-750 text-slate-900 dark:text-white border border-slate-200 dark:border-obsidian-700'
                  }`}
                >
                  <span>Заказать аудит</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Перелинковка: Основной раздел и смежные аудиты */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-obsidian-900/50 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-obsidian-900 to-obsidian-850 border border-growth-500/30 text-white mb-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-black/40">
            <div className="max-w-2xl">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-growth-500/20 text-growth-300 border border-growth-500/30 mb-3 inline-block">
                Комплексный подход
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
                Нужен не только технический анализ, но и коммерческие факторы?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Закажите комплексный аудит сайта в основном разделе аудитов. Вы получите все 4 аудита (Технический + Коммерческий + Ссылочный + Семантику) единым пакетом со скидкой и видеоразбором от эксперта.
              </p>
            </div>
            <Link
              to="/uslugi/seo-audit/"
              className="px-6 py-4 rounded-xl bg-growth-500 hover:bg-growth-400 text-obsidian-950 font-bold text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 shadow-lg shadow-growth-500/20 shrink-0"
            >
              <span>К полному аудиту сайта</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Другие направления аудита:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedAudits.map((rel) => {
                const RelIcon = rel.icon;
                return (
                  <Link
                    key={rel.slug}
                    to={`/uslugi/seo-audit/${rel.slug}/`}
                    className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/40 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-growth-500/10 text-growth-600 dark:text-growth-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <RelIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                          {rel.price}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-growth-600 dark:group-hover:text-growth-400 transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {rel.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-obsidian-800 flex items-center justify-between text-xs font-semibold text-growth-600 dark:text-growth-400">
                      <span>Посмотреть список проверок</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-16 md:py-20 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Частые вопросы по техническому аудиту
            </h2>
          </div>

          <div className="space-y-4">
            {faqList.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-obsidian-800 bg-slate-50 dark:bg-obsidian-900 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors"
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-growth-600 dark:text-growth-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-200/60 dark:border-obsidian-800 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Заявка на аудит */}
      <div id="order-form">
        <CTASection />
      </div>
    </>
  );
};
