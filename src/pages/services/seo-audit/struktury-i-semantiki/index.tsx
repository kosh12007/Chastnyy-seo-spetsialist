import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Network,
  ChevronDown,
  FileCode2,
  ShoppingCart,
  Link2,
  BadgePercent,
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
 * Страница «Аудит структуры сайта и семантического ядра»
 * Физический путь: src/pages/services/seo-audit/struktury-i-semantiki/index.tsx
 */
export const StructureAuditPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const pageTitle = 'Аудит структуры сайта и семантического ядра — поиск упущенного спроса | Сергей Кошелев';
  const pageDescription =
    'Анализ структуры сайта и семантики: аудит каталога, поиск упущенных кластеров запросов, устранение каннибализации и SILO-перелинковка для кратного роста охвата.';
  const pageUrl = '/uslugi/seo-audit/struktury-i-semantiki/';

  const ogMeta = generateOgMeta(pageUrl, pageTitle, pageDescription);

  const whoNeeds = [
    {
      title: 'Интернет-магазинам с широким ассортиментом',
      desc: 'Проектирование теговых страниц, посадочных страниц под комбинации параметров фильтра и оптимизация категорий.',
    },
    {
      title: 'Сайтам услуг, упершимся в «стеклянный потолок» трафика',
      desc: 'Сегментация общих услуг на узкие подуслуги по геолокации, объектам применения или видам работ.',
    },
    {
      title: 'Сайтам, где несколько страниц конкурируют друг с другом',
      desc: 'Устранение каннибализации, когда поиск мечется между блогом, категорией и главной страницей.',
    },
  ];

  const checklistGroups = [
    {
      groupName: 'Полнота семантического покрытия',
      items: [
        { name: 'Сравнение видимости с топ-конкурентами', desc: 'Выявление сотен и тысяч ключевых фраз, по которым ранжируются лидеры, но отсутствует ваш сайт' },
        { name: 'Анализ цели поискового запроса', desc: 'Проверка соответствия страниц типу запроса (информационный против коммерческого)' },
        { name: 'Оценка частотности и сезонности', desc: 'Распределение запросов по кластерам спроса с учетом сезонных пиков' },
      ],
    },
    {
      groupName: 'Архитектура каталога и глубина URL',
      items: [
        { name: 'Иерархия рубрикатора', desc: 'Логика разделения категорий, подкатегорий и брендовых листингов' },
        { name: 'Глубина клика (Click Depth)', desc: 'Доступность приоритетных товаров и услуг не глубже 3 кликов от главной' },
        { name: 'Тегирование и смарт-фильтры', desc: 'Возможность генерации статических оптимизированных страниц для популярных фильтров' },
      ],
    },
    {
      groupName: 'Внутренняя перелинковка и передача веса',
      items: [
        { name: 'Модель распределения ссылочного веса', desc: 'Анализ передачи веса внутри сайта, направление на маржинальные разделы' },
        { name: 'Хлебные крошки и меню', desc: 'Корректность навигационной цепочки и сквозных ссылок' },
        { name: 'Блоки перелинковки', desc: 'Наличие блоков «С этим товаром покупают», «Популярные категории», «Смежные услуги»' },
      ],
    },
  ];

  const deliverables = [
    { title: 'Наглядная схема структуры каталога', desc: 'Понятная схема рекомендуемой архитектуры каталога и посадочных страниц.' },
    { title: 'Матрица упущенных кластеров спроса', desc: 'Список конкретных страниц с потенциальным трафиком, которые нужно создать на сайте.' },
    { title: 'Схема внутренней перелинковки страниц', desc: 'Правила внутренней линковки страниц между разделами для максимальной передачи статического веса.' },
  ];

  const faqList = [
    {
      question: 'Засчитывается ли стоимость аудита структуры в дальнейшее продвижение?',
      answer: 'Да! Если в течение 30 дней после получения результатов аудита вы заключаете договор на постоянное ежемесячное SEO-продвижение, 100% стоимости проведенного аудита засчитывается в оплату первого месяца ведения проекта.',
    },
    {
      question: 'Что такое каннибализация ключевых слов?',
      answer: 'Это ситуация, когда за один и тот же запрос конкурируют две разные страницы вашего сайта (например, статья в блоге и страница услуги). В результате поисковик занижает позиции обеих. Аудит помогает разграничить типы запросов или склеить страницы.',
    },
    {
      question: 'Подойдет ли этот аудит для каталога без цен?',
      answer: 'Да. Структура и семантика одинаково критичны как для розничных интернет-магазинов, так и для оптовых компаний и сложных производственных предприятий.',
    },
    {
      question: 'Сколько времени занимает аудит структуры и семантики?',
      answer: 'Стандартный срок проведения анализа структуры — 4–6 рабочих дней.',
    },
  ];

  const relatedAudits = [
    { slug: 'tehnicheskij', title: 'Технический аудит', price: 'от 10 000 ₽', icon: FileCode2, desc: 'Диагностика по ключевым техническим направлениям, отчет в Excel и Word с ТЗ для разработчиков за 24 часа.' },
    { slug: 'kommercheskij', title: 'Коммерческий аудит', price: 'от 25 000 ₽', icon: ShoppingCart, desc: 'Анализ факторов доверия Яндекса, удобства корзины, форм и 152-ФЗ.' },
    { slug: 'ssylochnyj', title: 'Ссылочный аудит', price: 'от 20 000 ₽', icon: Link2, desc: 'Проверка профиля входящих ссылок, анкор-листа, токсичных доноров и конкурентов.' },
  ];

  const serviceSchema = generateServiceSchema({
    name: 'Аудит структуры сайта и семантического ядра',
    description: pageDescription,
    url: pageUrl,
    price: 30000,
    serviceType: 'Аудит структуры и семантики сайта',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/uslugi/' },
    { name: 'SEO-аудит сайта', url: '/uslugi/seo-audit/' },
    { name: 'Аудит структуры и семантики', url: pageUrl },
  ]);

  const faqSchema = generateFAQPageSchema(faqList);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${SITE_URL}${pageUrl}`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={`struct-${key}`} property={key} content={value} />
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
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Аудит структуры и семантики</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 text-xs font-mono font-medium mb-5">
              <Network className="w-3.5 h-3.5 text-growth-500" />
              <span>Охват поискового спроса</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Аудит структуры сайта и семантики
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-sans leading-relaxed mb-8 max-w-3xl">
              Если структура сайта не соответствует реальному спросу людей в поиске, сайт физически не может ранжироваться по тысячам целевых запросов. Аудит находит «белые пятна» в каталоге, ликвидирует каннибализацию страниц и выстраивает правильную архитектуру перелинковки.
            </p>

            {/* Специальное предложение: Стоимость засчитывается в тариф */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-growth-500/15 via-growth-500/10 to-transparent border-2 border-growth-500/30 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-growth-600 text-obsidian-950 flex items-center justify-center shrink-0 mt-0.5">
                  <BadgePercent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Стоимость аудита засчитывается в тариф продвижения!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    100% стоимости аудита структуры <strong>засчитываем в оплату первого месяца сотрудничества</strong>, если договор на комплексное SEO-продвижение подписан в течение 30 дней.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-200 dark:border-obsidian-800">
              <div className="p-3.5 px-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-0.5">Стоимость</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white">от 30 000 ₽</span>
              </div>
              <div className="p-3.5 px-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-0.5">Срок проведения</span>
                <span className="text-xl font-bold text-growth-600 dark:text-growth-400">4–6 рабочих дней</span>
              </div>
              <a
                href="#order-form"
                className="px-6 py-4 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-growth-600/20"
              >
                <span>Заказать аудит</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Кому необходим этот аудит */}
      <section className="py-16 md:py-20 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Целевая аудитория
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Кому и когда необходим аудит структуры и семантики
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoNeeds.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-growth-500/10 text-growth-600 dark:text-growth-400 font-mono font-bold flex items-center justify-center text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Список проверок */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-obsidian-900/40 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Глубокая методология
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Список проверок семантики и структуры каталога
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Анализируем поисковый спрос ниши, проектируем модель распределения ссылочного веса и выявляем слабые места в рубрикаторе.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {checklistGroups.map((group, gIdx) => (
              <div
                key={gIdx}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800"
              >
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-growth-500"></span>
                  <span>{group.groupName}</span>
                </h3>

                <div className="space-y-4">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-850 border border-slate-100 dark:border-obsidian-800/80">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5">
                            {item.name}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Артефакты сдачи */}
      <section className="py-16 md:py-20 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-growth-600 dark:text-growth-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Итоговые материалы
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Формат отчетов и артефакты сдачи
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800"
              >
                <div className="w-10 h-10 rounded-xl bg-growth-500/10 text-growth-600 dark:text-growth-400 flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
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
                Максимальная выгода
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
                Нужен полный анализ по всем 4 направлениям?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Закажите комплексный аудит сайта в основном разделе аудитов. Вы получите все 4 аудита (Технический + Коммерческий + Ссылочный + Семантику) единым пакетом со скидкой более 35% и видеоразбором от эксперта.
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
              Частые вопросы по аудиту структуры
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
