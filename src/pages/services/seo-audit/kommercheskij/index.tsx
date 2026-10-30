import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShoppingCart,
  ChevronDown,
  FileCode2,
  Link2,
  Network,
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
 * Страница «Коммерческий аудит и оценка удобства (UX)»
 * Физический путь: src/pages/services/seo-audit/kommercheskij/index.tsx
 */
export const CommercialAuditPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const pageTitle = 'Коммерческий аудит сайта и удобство для пользователей (UX) — факторы доверия | Сергей Кошелев';
  const pageDescription =
    'Комплексный коммерческий аудит сайта: проверка факторов доверия Яндекса, удобства корзины, форм захвата, цен, контактов и 152-ФЗ для роста конверсии в заявки.';
  const pageUrl = '/uslugi/seo-audit/kommercheskij/';

  const ogMeta = generateOgMeta(pageUrl, pageTitle, pageDescription);

  const whoNeeds = [
    {
      title: 'Интернет-магазинам и онлайн-каталогам',
      desc: 'Устранение брошенных корзин, оптимизация процесса оформления заказа, фильтрации и коммерческих блоков в карточке товара.',
    },
    {
      title: 'B2B-компаниям и сфере услуг',
      desc: 'Усиление страниц услуг триггерами экспертности, кейсами, открытыми прайс-листами и прозрачными формами КП.',
    },
    {
      title: 'Сайтам с высоким трафиком, но низким числом звонков',
      desc: 'Анализ поведения пользователей (Webvisor, тепловые карты) и устранение неочевидных барьеров к покупке.',
    },
  ];

  const checklistGroups = [
    {
      groupName: 'Факторы доверия и репутационные маркеры (E-E-A-T)',
      items: [
        { name: 'Полнота страницы «Контакты»', desc: 'Наличие фактического адреса, интерактивной карты, телефонов 8-800/городских, мессенджеров, времени работы' },
        { name: 'Реквизиты юридического лица / ИП', desc: 'Проверка ИНН, ОГРН, КПП, банковских реквизитов и официального наименования компании' },
        { name: 'Лица компании и экспертность', desc: 'Наличие блока «О компании», фотографий реальной команды, опыта работы и сертификатов' },
        { name: 'Отзывы и живые кейсы', desc: 'Анализ достоверности отзывов, интеграция с Яндекс.Картами, 2ГИС, видеоотзывы' },
      ],
    },
    {
      groupName: 'Ценовая политика и ассортиментная матрица',
      items: [
        { name: 'Прозрачность ценообразования', desc: 'Наличие конкретных цен, вилок стоимости «от», калькуляторов расчета' },
        { name: 'Условия доставки, оплаты и возврата', desc: 'Понятные отдельные страницы с тарифами транспортных компаний, способами оплаты и гарантией' },
        { name: 'Статусы наличия товаров и услуг', desc: 'Отображение «В наличии», «Под заказ», сроков поставки и условий бронирования' },
      ],
    },
    {
      groupName: 'Маршруты пользователей и удобство форм',
      items: [
        { name: 'Формы обратной связи', desc: 'Проверка автозаполнения, маски телефона, валидации и понятных подсказок при ошибке' },
        { name: 'Путь к оформлению заказа', desc: 'Анализ шагов корзины, покупка в 1 клик, отсутствие принудительной долгой регистрации' },
        { name: 'Кликабельность контактных элементов', desc: 'Прямой набор номера по tel: и переход в мессенджеры WhatsApp/Telegram' },
        { name: 'Соответствие 152-ФЗ', desc: 'Наличие политики конфиденциальности и неотмеченного чекбокса согласия ОПД во всех формах' },
      ],
    },
  ];

  const deliverables = [
    { title: 'Матрица коммерческих факторов Яндекса', desc: 'Сравнительный анализ вашего сайта против топ-3 лидеров ниши по 35 коммерческим параметрам.' },
    { title: 'UX-прототипы конверсионных экранов', desc: 'Рекомендации по доработке первого экрана, карточек товаров/услуг и форм заказа.' },
    { title: 'Анализ тепловых карт и вебвизора', desc: 'Выявление точек ухода пользователей и мест, где посетители испытывают трудности с навигацией.' },
    { title: 'Итоговый отчет с приоритезацией доработок', desc: 'План внедрения с оценкой трудозатрат и ожидаемого прироста конверсии.' },
  ];

  const faqList = [
    {
      question: 'Засчитывается ли стоимость коммерческого аудита в дальнейшее продвижение?',
      answer: 'Да! Если в течение 30 дней после сдачи аудита вы заключаете договор на постоянное ежемесячное SEO-продвижение, 100% стоимости проведенного аудита засчитывается в оплату первого месяца сотрудничества.',
    },
    {
      question: 'Зачем поисковикам коммерческие факторы?',
      answer: 'Яндекс стремится показывать в топе сайты, на которых пользователю безопасно и удобно покупать. Если у вас нет прозрачных цен, реквизитов или отзывов, алгоритм сочтет сайт ненадежным и понизит в выдаче.',
    },
    {
      question: 'Потребуется ли доступ к Яндекс.Метрике?',
      answer: 'Желательно. Анализ Вебвизора и карты кликов позволяет увидеть реальные трудности пользователей, однако базовый аудит коммерческих факторов может быть выполнен и по внешним параметрам.',
    },
    {
      question: 'Какой рост конверсии можно ожидать?',
      answer: 'В зависимости от исходного состояния сайта устранение барьеров в формах и оформлении заказа повышает общую конверсию в заявки на 20–60%.',
    },
  ];

  const relatedAudits = [
    { slug: 'tehnicheskij', title: 'Технический аудит', price: 'от 10 000 ₽', icon: FileCode2, desc: 'Диагностика по ключевым техническим направлениям, отчет в Excel и Word с ТЗ для разработчиков за 24 часа.' },
    { slug: 'ssylochnyj', title: 'Ссылочный аудит', price: 'от 20 000 ₽', icon: Link2, desc: 'Проверка профиля входящих ссылок, анкор-листа, токсичных доноров и конкурентов.' },
    { slug: 'struktury-i-semantiki', title: 'Аудит структуры и семантики', price: 'от 30 000 ₽', icon: Network, desc: 'Полнота семантического ядра, упущенный спрос и внутренняя перелинковка.' },
  ];

  const serviceSchema = generateServiceSchema({
    name: 'Коммерческий аудит сайта и удобство для пользователей (UX)',
    description: pageDescription,
    url: pageUrl,
    price: 25000,
    serviceType: 'Коммерческий аудит сайта',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/uslugi/' },
    { name: 'SEO-аудит сайта', url: '/uslugi/seo-audit/' },
    { name: 'Коммерческий аудит', url: pageUrl },
  ]);

  const faqSchema = generateFAQPageSchema(faqList);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${SITE_URL}${pageUrl}`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={`com-${key}`} property={key} content={value} />
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
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Коммерческий аудит</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-600 dark:text-growth-400 text-xs font-mono font-medium mb-5">
              <ShoppingCart className="w-3.5 h-3.5 text-growth-500" />
              <span>Конверсия и продажи</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Коммерческий аудит сайта и оценка удобства (UX)
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-sans leading-relaxed mb-8 max-w-3xl">
              Поисковые алгоритмы Яндекса оценивают сайт глазами покупателя: есть ли понятные цены, прозрачные условия доставки, реквизиты юрлица, онлайн-калькуляторы и отзывы. Коммерческий аудит находит слабые места, снижающие конверсию и позиции по коммерческим запросам.
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
                    100% стоимости коммерческого аудита <strong>засчитываем в оплату первого месяца сотрудничества</strong>, если договор на комплексное SEO-продвижение подписан в течение 30 дней.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-200 dark:border-obsidian-800">
              <div className="p-3.5 px-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-0.5">Стоимость</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white">от 25 000 ₽</span>
              </div>
              <div className="p-3.5 px-5 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-0.5">Срок проведения</span>
                <span className="text-xl font-bold text-growth-600 dark:text-growth-400">3–5 рабочих дней</span>
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
              Кому и когда необходим коммерческий аудит
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
              Список проверок коммерческих факторов
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Оцениваем сайт по 35+ параметрам конверсии, удобства покупки и факторов доверия поисковых алгоритмов.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              Частые вопросы по коммерческому аудиту
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
