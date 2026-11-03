import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ShoppingCart,
  Link2,
  Network,
  Sparkles,
  Server,
  Compass,
  Heading,
  Layers,
  Image,
  Code2,
  ShieldCheck,
  AlertTriangle,
  Cpu,
  FileText,
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
  RelatedServicesSection,
  SubServiceHero,
  DiagnosticScenariosSection,
  TariffComparisonTable,
  AuditTrustAndRulesSection,
  type TariffItem,
  type StepItem,
  type FAQItem,
  type HubCtaBanner,
} from '@/components/sections';
import { AnimatedSection } from '@/components/common';

/**
 * Страница «Технический SEO-аудит сайта»
 * Физический путь: src/pages/services/seo-audit/tehnicheskij/index.tsx
 * Целевые запросы кластера: «технический seo аудит сайта», «технический аудит сайта заказать»,
 * «проверка сайта на технические ошибки seo», «аудит индексации сайта»,
 * «проверка 404 ошибок и редиректов», «анализ карты сайта sitemap xml», «поиск дублей страниц сайта».
 */
export const TechnicalAuditPage: React.FC = () => {
  const pageTitle = 'Технический SEO-аудит сайта — заказать проверку на ошибки, от 10 000 ₽';
  const pageDescription =
    'Заказать технический SEO-аудит сайта за 24 часа: аудит индексации, проверка 404 ошибок и редиректов, анализ sitemap.xml и поиск дублей страниц. 100% зачет в продвижение.';
  const pageUrl = '/uslugi/seo-audit/tehnicheskij/';

  const ogMeta = generateOgMeta(pageUrl, pageTitle, pageDescription);

  // Тарифная сетка технического аудита
  const technicalTariffItems: TariffItem[] = [
    {
      id: 'tier500',
      name: 'До 500 страниц',
      badge: 'Сайты услуг, одностраничные проекты, небольшие компании',
      price: '10 000 ₽',
      duration: 'разово',
      description: 'Срок выполнения: 24 часа (1 рабочий день)',
      features: [
        'Сквозное сканирование всех страниц до 500 URL',
        'Проверка всех 8 базовых технических направлений',
        'Книга «Результаты проверок.xlsx» со ссылками на ошибки',
        'Клиентский отчет «Технический аудит.docx» с ТЗ для разработчиков',
        '100% стоимости засчитывается в первый месяц продвижения',
      ],
      link: '#order-form',
      linkText: 'Заказать технический аудит',
      isInternalRoute: false,
    },
    {
      id: 'tier3000',
      name: 'До 3 000 страниц',
      badge: 'Корпоративные порталы, региональные сети и каталоги',
      popular: true,
      price: '15 000 ₽',
      duration: 'разово',
      description: 'Срок выполнения: 24–48 часов (1–2 рабочих дня)',
      features: [
        'Полное сканирование структуры и каталога до 3 000 URL',
        'Проверка пагинации, сортировок, параметров фильтрации и canonical',
        'Книга «Результаты проверок.xlsx» со всеми тематическими вкладками',
        'Подробный отчет в Word с техническим заданием и приоритетами',
        '100% стоимости засчитывается в первый месяц продвижения',
      ],
      link: '#order-form',
      linkText: 'Заказать технический аудит',
      isInternalRoute: false,
    },
    {
      id: 'tierMax',
      name: 'Свыше 3 000 страниц',
      badge: 'Интернет-магазины, крупные каталоги и отраслевые площадки',
      price: '20 000 ₽',
      duration: 'разово',
      description: 'Срок выполнения: 2–3 рабочих дня',
      features: [
        'Сканирование крупных баз URL, карточек товаров и страниц фильтров',
        'Анализ расхода лимита поискового сканирования и дублей каталога',
        'Полная книга «Результаты проверок.xlsx» с разбивкой по типам ошибок',
        'Структурированное ТЗ для программистов по шаблонам страниц',
        '100% стоимости засчитывается в первый месяц продвижения',
      ],
      link: '#order-form',
      linkText: 'Заказать технический аудит',
      isInternalRoute: false,
    },
  ];

  // 8 ключевых направлений технического аудита
  const auditDirections = [
    {
      id: 1,
      title: '1. Серверные настройки, проверка 404 ошибок и редиректов',
      badge: 'Серверный уровень',
      icon: Server,
      text: 'Корректность ответов сервера определяет доступность сайта для поисковых роботов. Выполняется проверка 404 ошибок и редиректов, контролируется склейка зеркал с префиксом www и без него, принудительный 301-редирект с HTTP на защищенный протокол HTTPS, а также обработка адресов с заглавными буквами и завершающими слэшами. Выявление циклических перенаправлений, серверных сбоев 5xx и многоступенчатых цепочек редиректов помогает избежать потери ссылочного веса и сохранить лимит поискового сканирования.',
      keyItems: [
        'Склейка зеркал www / без www',
        'Перенаправление HTTP → HTTPS (301)',
        'Проверка 404 ошибок и цепочек редиректов',
        'Отсутствие сбоев сервера (5xx) и тайм-аутов',
      ],
    },
    {
      id: 2,
      title: '2. Аудит индексации сайта и анализ карты sitemap.xml',
      badge: 'Индексация и карты',
      icon: Compass,
      text: 'Глубокий аудит индексации сайта показывает, какие разделы реально участвуют в поиске, а какие скрыты от роботов. Проводится анализ карты сайта sitemap.xml и ее перекрестная сверка с фактическими кодами ответа сервера и результатами обхода. Диагностика выявляет страницы-сироты, неработающие адреса (коды 4xx и 5xx) внутри XML-карты, неканонические URL и противоречия с правилами в файле robots.txt, устраняя преграды для индексации коммерческих разделов.',
      keyItems: [
        'Анализ карты сайта sitemap.xml',
        'Поиск битых страниц в карте (4xx/5xx)',
        'Сверка директив robots.txt и метатегов',
        'Выявление страниц-сирот без внутренних ссылок',
      ],
    },
    {
      id: 3,
      title: '3. Заголовки страниц (Title) и поисковая релевантность',
      badge: 'Заголовки страниц',
      icon: FileText,
      text: 'Тег Title служит важнейшим текстовым ориентиром для алгоритмов ранжирования Яндекса и Google и формирует заголовок страницы в результатах поиска. Проверка выявляет пустые, дублирующиеся и неоптимальные по длине заголовки (короче 30 или длиннее 70 символов), теги за пределами служебного контейнера head, а также полное совпадение Title с заголовком H1. Это помогает исключить внутреннюю конкуренцию страниц и повысить точность представления сайта в выдаче.',
      keyItems: [
        'Отсутствующие и повторяющиеся Title',
        'Контроль длины заголовков (30–70 знаков)',
        'Размещение тега строго внутри head',
        'Разграничение формулировок Title и H1',
      ],
    },
    {
      id: 4,
      title: '4. Метаописания (Description) и информативность в выдаче',
      badge: 'Метатеги и привлекательность',
      icon: Layers,
      text: 'Метатег Description формирует краткую аннотацию страницы в поисковой выдаче и влияет на долю переходов по ссылке. Диагностика проверяет наличие описаний на всех коммерческих и информационных страницах, находит повторяющиеся шаблоны между разделами, а также отмечает слишком короткие (менее 70 символов) или чрезмерно растянутые тексты (свыше 160 символов). Грамотно составленные метаописания помогают пользователю сразу увидеть условия и преимущества предложения.',
      keyItems: [
        'Наличие Description на посадочных страницах',
        'Устранение дублей метаописаний по сайту',
        'Оптимальный объем текста (70–160 символов)',
        'Соответствие описания содержимому страницы',
      ],
    },
    {
      id: 5,
      title: '5. Иерархия заголовков H1 и подзаголовков H2',
      badge: 'Структура документа',
      icon: Heading,
      text: 'Логичная иерархия заголовков передает поисковым системам структуру документа и облегчает чтение страницы. Автоматическая и ручная ревизия фиксирует отсутствующие или множественные теги H1 на одном адресе, находит одинаковые заголовки первого уровня в разных разделах и проверяет наличие подзаголовков H2 на содержательных страницах. Упорядоченная разметка H1–H2 повышает текстовую релевантность посадочных страниц.',
      keyItems: [
        'Единственный заголовок H1 на странице',
        'Полнота охвата подзаголовков H2',
        'Устранение сквозных повторов H1 по сайту',
        'Отсутствие тегов верстки внутри заголовков',
      ],
    },
    {
      id: 6,
      title: '6. Оптимизация изображений и атрибутов Alt',
      badge: 'Медиаконтент и поиск по картинкам',
      icon: Image,
      text: 'Изображения создают значительную нагрузку на трафик и формируют дополнительный источник переходов из Яндекс.Картинок и Google Images. В ходе аудита выявляются тяжелые графические файлы (свыше 300 КБ), изображения без атрибутов alt или с шаблонными повторами названий, неработающие ссылки на медиафайлы и отсутствие современных форматов (WebP, AVIF). Корректная оптимизация графики ускоряет отрисовку и улучшает поведенческие показатели.',
      keyItems: [
        'Поиск «тяжелых» изображений (>300 КБ)',
        'Проверка заполнения атрибутов alt',
        'Контроль битых ссылок на графику',
        'Рекомендации по внедрению формата WebP',
      ],
    },
    {
      id: 7,
      title: '7. Корректность верстки и служебного блока Head',
      badge: 'Чистота HTML-кода',
      icon: Code2,
      text: 'Ошибки в разметке контейнера head могут приводить к игнорированию метатегов и скриптов роботами. Проверяется отсутствие блочных элементов (div, img, p) до тегов title и meta, устраняются дублирующие объявления кодировки и канонических ссылок, а также контролируется корректность мобильного метатега viewport. Чистый контейнер head гарантирует правильное считывание метаданных всеми роботами поисковых систем.',
      keyItems: [
        'Отсутствие блочных тегов внутри head',
        'Единственный метатег кодировки utf-8',
        'Корректность настройки тега viewport',
        'Чистота канонических указателей canonical',
      ],
    },
    {
      id: 8,
      title: '8. Скорость загрузки и базовые параметры безопасности',
      badge: 'Производительность и безопасность',
      icon: ShieldCheck,
      text: 'Быстрый и защищенный сайт получает преимущество в мобильной выдаче и обеспечивает комфортное взаимодействие. Диагностика оценивает базовые параметры времени ответа сервера (TTFB), стабильность SSL-сертификата (срок действия, цепочки доверия), отсутствие смешанного содержимого (Mixed Content) и доступность критических ресурсов. Выявление узких мест в производительности снижает процент отказов и удерживает аудиторию.',
      keyItems: [
        'Время первого байта сервера (TTFB)',
        'Проверка SSL-сертификата и шифрования',
        'Устранение смешанного контента (HTTP в HTTPS)',
        'Отсутствие блокирующих скриптов в head',
      ],
    },
  ];

  // 4 типовых сценария, когда технический аудит нужен срочно
  const diagnosticScenarios = [
    {
      icon: AlertTriangle,
      title: 'Внезапное падение трафика или позиций в Яндексе / Google',
      desc: 'Диагностируем серверные сбои, выпадение страниц из поискового индекса из-за случайного закрытия в robots.txt или появления циклических редиректов.',
      result: 'Находим причину просадки и готовим ТЗ на срочное исправление блокирующих ошибок.',
    },
    {
      icon: Compass,
      title: 'Запуск обновленного сайта, редизайн или смена CMS',
      desc: 'Контролируем сохранность URL-структуры, правильность переноса тегов Title и H1, корректность склейки главного зеркала и работу карты sitemap.xml.',
      result: 'Предотвращаем потерю накопленного поискового трафика при миграции на новую платформу.',
    },
    {
      icon: Layers,
      title: 'Появление тысяч неиндексируемых страниц или дублей',
      desc: 'Выявляем технические дубли от параметров фильтрации, сортировок и пагинации, настраиваем директивы canonical и правила в robots.txt.',
      result: 'Очищаем поисковый индекс от мусорных URL и концентрируем краулинговый бюджет на важных разделах.',
    },
    {
      icon: ShieldCheck,
      title: 'Подготовка к запуску SEO-продвижения или рекламы',
      desc: 'Перед вложением бюджета в развитие контента и ссылочного профиля необходимо убедиться, что сервер отдает корректные коды ответа, карта sitemap.xml актуальна, а верстка не содержит ошибок в контейнере head.',
      result: 'Устраняем технические препятствия на старте, а 100% стоимости аудита засчитываем в первый месяц продвижения.',
    },
  ];

  // Образец связки вкладок книги Excel и формулировок ТЗ в отчете Word
  const reportSampleRows = [
    {
      sheet: 'Цепочки и циклы редиректов',
      issue: 'Многоступенчатые перенаправления (HTTP → HTTPS → www → слэш) и редиректы, ведущие на страницы с кодом 404.',
      impact: 'Потеря ссылочного веса страниц, замедление обхода разделов поисковыми роботами.',
      task: 'Настроить прямое перенаправление 301 в один шаг на итоговый канонический адрес с кодом ответа 200 OK; заменить внутренние ссылки на прямые.',
    },
    {
      sheet: 'Битые URL в sitemap',
      issue: 'В файле sitemap.xml присутствуют адреса с кодами ответа 301, 404 и неканонические страницы с GET-параметрами.',
      impact: 'Нецелевой расход лимита поискового сканирования, предупреждения в панелях вебмастеров Яндекса и Google.',
      task: 'Исключить из генерации XML-карты все перенаправляемые и неканонические адреса; оставить только открытые к индексации страницы с кодом 200 OK.',
    },
    {
      sheet: 'Ошибки канонических адресов',
      issue: 'Страницы пагинации и сортировки не содержат согласованного атрибута rel="canonical" или указывают на нерабочий URL.',
      impact: 'Появление сотен дублей в поисковом индексе и размытие текстовой релевантности основных категорий каталога.',
      task: 'Указать корректный канонический адрес строго внутри контейнера head по согласованному правилу индексации пагинации и фильтров.',
    },
    {
      sheet: 'Нарушения структуры HTML',
      issue: 'Внутри служебного контейнера head размещены пользовательские теги (div, img, p) до объявления title и canonical.',
      impact: 'Преждевременное закрытие блока head парсером и риск игнорирования поисковым роботом метатегов и канонических ссылок.',
      task: 'Перенести все элементы визуальной верстки и пиксели счетчиков с блочными тегами в тело документа (body), оставив в head только метаданные.',
    },
  ];

  // Учет технических особенностей популярных платформ (CMS)
  const cmsSpecifics = [
    {
      platform: '1С-Битрикс',
      points: [
        'Контроль дублей умного фильтра каталога, постраничной навигации и параметров сортировки',
        'Проверка скорости ответа сервера, настроек кэширования и корректности генерации sitemap.xml',
      ],
    },
    {
      platform: 'WordPress и WooCommerce',
      points: [
        'Поиск дублей архивов авторов, дат, меток, страниц вложений и пагинации карточек товаров',
        'Проверка конфликтов модулей микроразметки и метатегов, ревизия тяжелых изображений и скриптов в head',
      ],
    },
    {
      platform: 'OpenCart и Tilda',
      points: [
        'В OpenCart: устранение дублей товаров с разными путями категорий и настройка канонических адресов',
        'В Tilda: проверка чистоты заголовков H1–H2 в произвольных блоках верстки, редиректов со служебных поддоменов и заполнения alt',
      ],
    },
    {
      platform: 'Сайты на Laravel, React и собственных решениях',
      points: [
        'Проверка предварительной серверной отрисовки HTML-кода для корректного чтения контента роботами Яндекса и Google',
        'Контроль отдачи правильных HTTP-кодов 404 вместо ложных страниц-заглушек с кодом 200 OK на несуществующих адресах',
      ],
    },
  ];

  // 4 этапа проведения технического аудита
  const processSteps: StepItem[] = [
    {
      num: '01',
      title: 'Первичный сбор данных',
      desc: 'Согласование задач проверки, проверка доступности сайта для роботов и запуск сквозного краулинга без ограничения глубины.',
    },
    {
      num: '02',
      title: 'Диагностика ошибок',
      desc: 'Анализ кодов ответа, поиск циклических редиректов, сверка XML-карты и выявление дублей страниц, метатегов и заголовков.',
    },
    {
      num: '03',
      title: 'Формирование отчетов',
      desc: 'Сборка книги Excel со всеми проблемными URL и подготовка клиентского отчета в Word с пошаговым техническим заданием.',
    },
    {
      num: '04',
      title: 'Передача заказчику',
      desc: 'Выдача готового пакета документов с разъяснениями, приоритетами доработок и консультацией разработчиков при внедрении.',
    },
  ];

  // Сравнительная матрица тарифов технического аудита и комплексного аудита
  const comparisonMatrixRows = [
    {
      param: 'Охват сканируемых страниц сайта',
      tier500: 'До 500 URL',
      tier3000: 'До 3 000 URL',
      tierMax: 'Свыше 3 000 URL',
      complex: 'До 3 000 URL (свыше — по тарифу 75 000 ₽)',
    },
    {
      param: 'Срок подготовки документов',
      tier500: '24 часа (1 рабочий день)',
      tier3000: '1–2 рабочих дня',
      tierMax: '2–3 рабочих дня',
      complex: '5–7 рабочих дней',
    },
    {
      param: 'Проверка 8 базовых технических направлений',
      tier500: 'Включено полностью',
      tier3000: 'Включено полностью',
      tierMax: 'Включено полностью',
      complex: 'Включено полностью',
    },
    {
      param: 'Глубокий разбор фильтров каталога и пагинации',
      tier500: 'Базовая проверка',
      tier3000: 'Полная проверка каталога',
      tierMax: 'Расширенная проверка крупных баз URL',
      complex: 'Полная проверка + проектирование структуры',
    },
    {
      param: 'Книга «Результаты проверок.xlsx» со списками URL',
      tier500: 'Да (все вкладки с ошибками)',
      tier3000: 'Да (все вкладки с ошибками)',
      tierMax: 'Да (все вкладки с ошибками)',
      complex: 'Да + таблицы семантики и ссылок',
    },
    {
      param: 'Отчет «Технический аудит.docx» с ТЗ для программистов',
      tier500: 'Да (с приоритетами задач)',
      tier3000: 'Да (с приоритетами задач)',
      tierMax: 'Да (по типам шаблонов страниц)',
      complex: 'Да (сводный план внедрения по всем направлениям)',
    },
    {
      param: 'Аудит коммерческих факторов, семантики и ссылок',
      tier500: 'Не входит (заказывается отдельно)',
      tier3000: 'Не входит (заказывается отдельно)',
      tierMax: 'Не входит (заказывается отдельно)',
      complex: 'Включены все 4 направления аудита',
    },
    {
      param: 'Онлайн-встреча для защиты отчета',
      tier500: 'Не входит (только файлы Excel + Word)',
      tier3000: 'Не входит (только файлы Excel + Word)',
      tierMax: 'Не входит (только файлы Excel + Word)',
      complex: 'Включена дистанционная встреча',
    },
    {
      param: 'Зачет 100% стоимости в 1-й месяц продвижения',
      tier500: 'Да (вычет 10 000 ₽ из тарифа)',
      tier3000: 'Да (вычет 15 000 ₽ из тарифа)',
      tierMax: 'Да (вычет 20 000 ₽ из тарифа)',
      complex: 'Не входит (только для техаудита)',
    },
    {
      param: 'Стоимость услуги',
      tier500: '10 000 ₽',
      tier3000: '15 000 ₽',
      tierMax: '20 000 ₽',
      complex: 'от 35 000 ₽',
    },
  ];

  // Дисклеймер с детальным сопоставлением тарифов
  const comparisonDisclaimer = (
    <TariffComparisonTable
      eyebrow="Детальное сопоставление форматов"
      title="Сравнение тарифов технического и комплексного SEO-аудита"
      subtitle={
        <>
          Таблица помогает сопоставить состав работ по трем тарифам технической диагностики и определить, в каких случаях целесообразно выбрать{' '}
          <Link
            to="/uslugi/seo-audit/"
            className="text-growth-700 dark:text-growth-400 underline hover:no-underline font-medium"
          >
            комплексный SEO-аудит сайта
          </Link>
          .
        </>
      }
      columns={[
        { key: 'tier500', label: 'До 500 страниц' },
        { key: 'tier3000', label: 'До 3 000 страниц', isHighlighted: true },
        { key: 'tierMax', label: 'Свыше 3 000 страниц' },
        { key: 'complex', label: 'Комплексный аудит' },
      ]}
      rows={comparisonMatrixRows}
    />
  );

  const faqList: FAQItem[] = [
    {
      question: 'Как работает зачет стоимости технического аудита в первый месяц продвижения?',
      answer:
        'Вы оплачиваете технический аудит (10 000 ₽ для сайтов до 500 страниц, 15 000 ₽ до 3 000 страниц или 20 000 ₽ свыше 3 000 страниц) и получаете полный комплект документов (Excel + Word). Если в течение 30 календарных дней после сдачи отчета мы заключаем договор на ежемесячное SEO-продвижение (тарифы от 35 000 ₽/мес.), 100% суммы, уплаченной за технический аудит, вычитается из стоимости первого месяца ведения проекта.',
    },
    {
      question: 'Что именно я получаю по итогам технического SEO-аудита?',
      answer:
        'Вы получаете два рабочих документа: 1) Сводную книгу «Результаты проверок.xlsx», где на отдельных тематических вкладках собраны точные адреса всех страниц с ошибками, кодами ответа сервера и цепочками редиректов; 2) Текстовый отчет «Технический аудит.docx» с описанием сути каждой проблемы, перечнем затронутых разделов, приоритетом исправления и понятным техническим заданием для разработчиков.',
    },
    {
      question: 'Входят ли в технический аудит созвоны и видеоразбор?',
      answer:
        'Нет, тариф технического аудита (10 000–20 000 ₽) сфокусирован на быстрой (от 24 часов) и точной выдаче реестра ошибок в Excel и технического задания в Word без наценки за онлайн-защиту и презентации. Если вам требуется комплексный разбор всех направлений с онлайн-встречей для обсуждения плана внедрения, выберите комплексный SEO-аудит сайта (от 35 000 ₽).',
    },
    {
      question: 'За счет чего технический аудит сайта до 500 страниц выполняется за 24 часа?',
      answer:
        'Сбор первичных данных автоматизирован: программные модули параллельно проверяют склейку зеркал и редиректов, валидируют XML-карту sitemap.xml и сканируют HTML-код всех страниц сайта. При этом пустые срезы без ошибок автоматически отсекаются, а эксперт концентрируется на проверке результатов, анализе причин дублей и составлении технического задания в Word.',
    },
    {
      question: 'В каком формате составляется техническое задание для программистов?',
      answer:
        'В отчете не навязывается шаблонный программный код, так как архитектура каждой CMS индивидуальна. Вместо этого разработчик получает четкую постановку задачи: описание обнаруженной ошибки, точный список URL в таблице Excel, требования поисковых систем Яндекс и Google к целевому результату (например, какой HTTP-код, заголовок или канонический адрес должен формироваться) и критерии проверки после релиза.',
    },
    {
      question: 'Какие доступы нужны для проведения технической проверки?',
      answer:
        'Для старта работы достаточно только доменного имени вашего сайта. Если вы дополнительно откроете гостевой доступ на чтение к Яндекс.Вебмастеру и Google Search Console, мы также сверим данные внешнего сканирования со статистикой обхода роботов и отчетами об исключенных страницах.',
    },
  ];

  const relatedAudits = [
    {
      slug: 'kommercheskij',
      title: 'Коммерческий аудит сайта',
      price: 'от 25 000 ₽',
      icon: ShoppingCart,
      desc: 'Проверка коммерческих факторов доверия Яндекса, удобства корзины, форм заявки, полноты реквизитов и соблюдения 152-ФЗ.',
      anchor: 'Перейти к коммерческому аудиту',
    },
    {
      slug: 'ssylochnyj',
      title: 'Аудит ссылочной массы',
      price: 'от 20 000 ₽',
      icon: Link2,
      desc: 'Проверка профиля обратных ссылок, анализ анкор-листа на переспам, поиск токсичных доноров и подготовка файла отклонения.',
      anchor: 'Перейти к ссылочному аудиту',
    },
    {
      slug: 'struktury-i-semantiki',
      title: 'Аудит структуры и семантики',
      price: 'от 30 000 ₽',
      icon: Network,
      desc: 'Анализ семантического ядра и архитектуры каталога, поиск упущенного спроса, устранение каннибализации и схема перелинковки.',
      anchor: 'Перейти к аудиту структуры',
    },
  ];

  const hubCtaBanner: HubCtaBanner = {
    badge: 'Единый пакет из 4 направлений',
    title: 'Нужна не только техническая проверка, но и разбор коммерции, структуры и ссылок?',
    description:
      'Перейдите в основной раздел и закажите комплексный SEO-аудит сайта (от 35 000 ₽). Он объединяет все направления диагностики: техническую базу, коммерческие факторы, семантику и ссылочную массу.',
    buttonText: 'Комплексный SEO-аудит сайта',
    buttonLink: '/uslugi/seo-audit/',
  };

  const baseServiceSchema = generateServiceSchema({
    name: 'Технический SEO-аудит сайта',
    description: pageDescription,
    url: pageUrl,
    price: 10000,
    serviceType: 'Технический аудит сайта',
  });

  const serviceSchema = {
    ...baseServiceSchema,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Тарифы на технический SEO-аудит сайта',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Технический аудит: до 500 страниц',
          price: '10000',
          priceCurrency: 'RUB',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}${pageUrl}#pricing-tiers`,
        },
        {
          '@type': 'Offer',
          name: 'Технический аудит: до 3 000 страниц',
          price: '15000',
          priceCurrency: 'RUB',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}${pageUrl}#pricing-tiers`,
        },
        {
          '@type': 'Offer',
          name: 'Технический аудит: свыше 3 000 страниц',
          price: '20000',
          priceCurrency: 'RUB',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}${pageUrl}#pricing-tiers`,
        },
      ],
    },
  };

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

      {/* 1. Первый экран (Hero) (Универсальный компонент) */}
      <SubServiceHero
        breadcrumbParentTitle="Комплексный SEO-аудит (все виды)"
        breadcrumbParentUrl="/uslugi/seo-audit/"
        breadcrumbCurrent="Технический аудит"
        badgeIcon={Sparkles}
        badgeText="8 направлений проверки • Готовность от 24 часов • Таблица Excel + ТЗ в Word"
        title="Технический SEO-аудит сайта"
        titleHighlight="от 24 часов"
        description={
          <>
            Если вам необходимо технический аудит сайта заказать перед запуском продвижения или после доработок, мы проведем полную проверку сайта на технические ошибки SEO: аудит индексации сайта, проверку 404 ошибок и редиректов, анализ карты сайта sitemap.xml и поиск дублей страниц сайта. Вы получаете сводную книгу{' '}
            <code>Результаты проверок.xlsx</code> со всеми проблемными адресами и отчет в Word с техническим заданием для разработчиков.
          </>
        }
        specialOfferBanner={
          <SpecialOfferBanner title="Специальное предложение: стоимость технического аудита засчитывается в тариф!">
            Стоимость проверки составляет <strong>от 10 000 до 20 000 ₽</strong> в зависимости от числа страниц. Если в течение <strong>30 дней</strong> после сдачи отчета мы подписываем договор на регулярное{' '}
            <Link
              to="/uslugi/seo-prodvizhenie/"
              className="text-growth-700 dark:text-growth-400 underline hover:no-underline font-medium"
            >
              SEO-продвижение сайта
            </Link>{' '}
            (тарифы от 35 000 ₽/мес.) — <strong>100% стоимости технического аудита вычитается из оплаты первого месяца</strong>.
          </SpecialOfferBanner>
        }
        price="10 000 – 20 000 ₽"
        duration="1–3 рабочих дня"
        pricingAnchor="#pricing-tiers"
        pricingButtonText="Выбрать тариф по объему"
      />

      {/* 2. В каких ситуациях технический аудит нужен в первую очередь (Универсальный компонент) */}
      <DiagnosticScenariosSection
        eyebrow="Симптомы и задачи"
        title="Когда сайту необходим технический аудит"
        subtitle="Своевременная диагностика помогает устранить блокирующие преграды до того, как они приведут к потере трафика и снижению позиций в Яндексе и Google."
        scenarios={diagnosticScenarios}
      />

      {/* 3. Что вы получаете в итоге (Excel + Word) */}
      <AnimatedSection variant="slide-up">
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-obsidian-900/40 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
                Итоговые документы
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Что входит в отчет по техническому аудиту
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Вы получаете не просто автоматическую выгрузку, а готовый инструментарий для разработчиков: таблицу со всеми проблемными URL и пошаговое техническое задание.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-growth-500/10 text-growth-700 dark:text-growth-400 font-mono text-xs font-semibold">
                      Документ 1: Реестр ошибок
                    </span>
                    <span className="text-xs font-mono text-slate-400">.xlsx</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Сводная книга «Результаты проверок.xlsx»
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                    Таблица содержит отдельные тематические вкладки по каждой выявленной категории ошибок. Программисту не нужно повторно сканировать сайт — адреса всех затронутых страниц уже структурированы.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 shrink-0" />
                      <span>Вкладка «404_редиректы» — все битые ссылки и цепочки</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 shrink-0" />
                      <span>Вкладка «Дубли_страниц» — URL с дублирующимся контентом</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 shrink-0" />
                      <span>Вкладка «Карта_sitemap» — расхождения между картой и кодами ответа</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 shrink-0" />
                      <span>Вкладка «Метатеги_Title» — пустые, дублирующиеся и длинные теги</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-700 dark:text-blue-400 font-mono text-xs font-semibold">
                      Документ 2: Клиентский отчет
                    </span>
                    <span className="text-xs font-mono text-slate-400">.docx</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Отчет «Технический аудит.docx» с готовым ТЗ
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                    Каждая ошибка подробно описана: почему она возникла, как влияет на индексацию, какой результат требуют поисковые системы и по каким критериям принимать работу у программиста.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 shrink-0" />
                      <span>Приоритеты внедрения: блокирующие, важные, рекомендованные</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 shrink-0" />
                      <span>Точные формулировки задач для веб-разработчика</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 shrink-0" />
                      <span>Ссылки на строки и вкладки таблицы «Результаты проверок»</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 shrink-0" />
                      <span>Критерии приемки после исправления (Acceptance Criteria)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Пример связки таблицы Excel и ТЗ в Word */}
            <div className="rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-200 dark:border-obsidian-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Пример представления ошибок в отчете: связка Excel и ТЗ в Word
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px] font-sans">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-obsidian-850 border-b border-slate-200 dark:border-obsidian-800 text-xs font-mono uppercase text-slate-600 dark:text-slate-300">
                      <th className="p-4 font-semibold w-1/4">Вкладка в Excel</th>
                      <th className="p-4 font-semibold w-1/4">Выявленная ошибка</th>
                      <th className="p-4 font-semibold w-1/4">Влияние на SEO</th>
                      <th className="p-4 font-semibold w-1/4">Формулировка ТЗ (Word)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-obsidian-800 text-xs sm:text-sm">
                    {reportSampleRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50/70 dark:hover:bg-obsidian-850/40 transition-colors"
                      >
                        <td className="p-4 font-mono font-medium text-growth-700 dark:text-growth-400 align-top">
                          {row.sheet}
                        </td>
                        <td className="p-4 text-slate-800 dark:text-slate-200 align-top">
                          {row.issue}
                        </td>
                        <td className="p-4 text-slate-600 dark:text-slate-300 align-top">
                          {row.impact}
                        </td>
                        <td className="p-4 text-slate-900 dark:text-white font-medium align-top">
                          {row.task}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. 8 ключевых направлений технической диагностики */}
      <AnimatedSection variant="slide-up">
        <section className="py-16 md:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
                Регламент проверок
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                8 ключевых направлений технического аудита сайта
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Сквозная диагностика охватывает все уровни технического фундамента сайта: от серверных настроек до чистоты исходного HTML-кода и скорости отображения контента.
              </p>
            </div>

            <div className="space-y-6">
              {auditDirections.map((dir) => {
                const DirIcon = dir.icon;
                return (
                  <div
                    key={dir.id}
                    className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-growth-500/10 text-growth-600 dark:text-growth-400 flex items-center justify-center shrink-0">
                            <DirIcon className="w-5 h-5" />
                          </div>
                          <span className="px-2.5 py-1 rounded bg-slate-200/80 dark:bg-obsidian-800 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                            {dir.badge}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                          {dir.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                          {dir.text}
                        </p>
                      </div>

                      <div className="lg:w-80 shrink-0 p-4 rounded-xl bg-white dark:bg-obsidian-850 border border-slate-200/70 dark:border-obsidian-800 space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-semibold mb-2">
                          Что фиксируется в отчете:
                        </span>
                        {dir.keyItems.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-mono"
                          >
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
      </AnimatedSection>

      {/* 5. Учет особенностей популярных CMS и платформ */}
      <AnimatedSection variant="slide-up">
        <section className="py-16 md:py-20 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
                Адаптация под движок сайта
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Учет технических особенностей популярных CMS и платформ
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                У каждой системы управления сайтом есть характерные уязвимости: от генерации тысяч дублей умного фильтра до некорректной отдачи кодов 404. Программа проверки учитывает архитектуру вашей платформы.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cmsSpecifics.map((cms, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:-translate-y-1 hover:shadow-xl hover:border-growth-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-growth-500/10 text-growth-600 dark:text-growth-400 flex items-center justify-center shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {cms.platform}
                    </h3>
                  </div>
                  <div className="space-y-2.5">
                    {cms.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans"
                      >
                        <CheckCircle2 className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 6. Как проводится технический аудит: 4 этапа (Универсальный компонент) */}
      <AnimatedSection variant="slide-up">
        <StepsSection
          id="process"
          eyebrow="Порядок выполнения"
          title="Как проводится технический аудит: 4 этапа"
          subtitle="Последовательный регламент обхода, анализа и оформления технического задания для программистов."
          steps={processSteps}
          columns={4}
          takeaways={[]}
        />
      </AnimatedSection>

      {/* 7. Тарифная сетка и сравнительная матрица форматов (Универсальный компонент) */}
      <AnimatedSection variant="slide-up">
        <TariffsSection
          id="pricing-tiers"
          eyebrow="Прозрачные тарифы"
          title="Стоимость технического SEO-аудита сайта"
          subtitle="Фиксированная стоимость без скрытых доплат. Официальный договор с самозанятым / ИП (ЭДО, чеки в приложении ФНС «Мой налог»). 100% стоимости засчитывается в оплату первого месяца продвижения."
          tariffs={technicalTariffItems}
          columns={3}
          disclaimer={comparisonDisclaimer}
        />
      </AnimatedSection>

      {/* 8. Правила зачета стоимости, границы услуги и подтверждение опыта (Универсальный компонент) */}
      <AuditTrustAndRulesSection
        ruleDeductionText={
          <>
            при переходе на ежемесячное{' '}
            <Link
              to="/uslugi/seo-prodvizhenie/"
              className="text-growth-700 dark:text-growth-400 underline hover:no-underline font-medium"
            >
              SEO-продвижение сайта
            </Link>{' '}
            (тарифы от 35 000 ₽/мес.) в течение <strong>30 календарных дней</strong> после сдачи отчета вся сумма технического аудита (<strong>10 000, 15 000 или 20 000 ₽</strong>) вычитается из счета за первый месяц работ.
          </>
        }
        ruleScopeText="технический аудит — это аналитическая услуга по поиску ошибок и составлению технического задания. Внесение правок в исходный код силами ваших разработчиков или в рамках нашего сопровождения выполняется отдельно по готовому ТЗ."
      />

      {/* 9. Перелинковка: Основной раздел и смежные аудиты (Универсальный компонент) */}
      <AnimatedSection variant="slide-up">
        <RelatedServicesSection
          ctaBanner={hubCtaBanner}
          title="Другие направления аудита сайта:"
          services={relatedAudits}
        />
      </AnimatedSection>

      {/* 10. Вопросы и ответы (Универсальный компонент) */}
      <AnimatedSection variant="slide-up">
        <FAQSection
          id="faq"
          eyebrow="Вопросы и ответы"
          title="Частые вопросы по техническому SEO-аудиту"
          items={faqList}
        />
      </AnimatedSection>

      {/* 11. Заявка на аудит */}
      <AnimatedSection variant="slide-up">
        <div id="order-form">
          <CTASection />
        </div>
      </AnimatedSection>
    </>
  );
};
