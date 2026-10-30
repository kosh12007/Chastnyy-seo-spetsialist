import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Target,
  CheckCircle2,
  MapPin,
  Clock,
  BarChart3,
} from 'lucide-react';
import { getSeoData, generateOgMeta, generateBreadcrumbSchema } from '@utils/helpers';
import { SITE_URL, SITE_NAME } from '@utils/constants';
import { AnimatedSection } from '@components/common';
import { CasesSection, CTASection } from '@components/sections';
import { cases } from '@data/index';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';

/**
 * Страница портфолио (/portfolio/) и детального разбора отдельного кейса (/portfolio/:slug/).
 * Поддерживает адаптивную светлую тему и ночную эстетику Dark Obsidian & Emerald Growth.
 * Изображение кейса (в верстке, Open Graph и Schema.org) выводится только если оно реально указано.
 */
export const CasesPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentCase = cases.find((c) => c.slug === slug);
  const [imgError, setImgError] = useState(false);

  // Сбрасываем флаг ошибки картинки при переходе между кейсами
  useEffect(() => {
    setImgError(false);
  }, [slug]);

  // Если запрошен несуществующий slug кейса — отдаём страницу 404 со статусом 404 Not Found
  if (slug && !currentCase) {
    return <NotFoundPage />;
  }

  // 1. Детальная страница конкретного кейса (/portfolio/:slug/)
  if (currentCase) {
    const pageTitle = `${currentCase.title} — Кейс SEO-продвижения | Михаил Павлов`;
    const pageDesc = `${currentCase.niche} (${currentCase.region}): ${currentCase.result}`;
    const canonicalUrl = `${SITE_URL}/portfolio/${currentCase.slug}/`;
    const cleanImage = currentCase.image?.trim();
    const hasImage = Boolean(cleanImage && !imgError);
    const fullImageUrl = cleanImage
      ? cleanImage.startsWith('http')
        ? cleanImage
        : `${SITE_URL}${cleanImage.startsWith('/') ? cleanImage : `/${cleanImage}`}`
      : undefined;

    // В Open Graph передаем картинку только если она задана в объекте кейса
    const ogMeta = generateOgMeta(
      `/portfolio/${currentCase.slug}/`,
      pageTitle,
      pageDesc,
      hasImage ? cleanImage : undefined,
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Главная', url: '/' },
      { name: 'Кейсы', url: '/portfolio/' },
      { name: currentCase.title },
    ]);

    // Микроразметка Schema.org для страницы кейса (поле image включается только при наличии картинки)
    const caseArticleSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: currentCase.title,
      description: pageDesc,
      author: {
        '@type': 'Person',
        name: SITE_NAME,
        url: SITE_URL,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      ...(hasImage && fullImageUrl ? { image: [fullImageUrl] } : {}),
    };

    const otherCases = cases.filter((c) => c.slug !== currentCase.slug);

    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDesc} />
          <link rel="canonical" href={canonicalUrl} />
          {Object.entries(ogMeta).map(([key, value]) => (
            <meta key={`case-${key}`} property={key} content={value} />
          ))}
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(caseArticleSchema)}</script>
        </Helmet>

        <AnimatedSection variant="fade" duration={0.8}>
          {/* Шапка детального кейса */}
          <section className="py-12 md:py-16 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 grid-bg transition-colors">
            <div className="max-w-5xl mx-auto px-4 sm:px-8">
              <Link
                to="/portfolio/"
                className="inline-flex items-center gap-2 text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 text-xs font-mono mb-6 transition-colors font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Все кейсы портфолио</span>
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-700 dark:text-growth-400 font-semibold">
                  {currentCase.niche}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400" />
                  <span>{currentCase.region}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 text-slate-600 dark:text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400" />
                  <span>Срок реализации: {currentCase.duration}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                {currentCase.title}
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-3xl font-sans leading-relaxed">
                {currentCase.result}
              </p>
            </div>
          </section>

          {/* Ключевые показатели До / После / Динамика */}
          <AnimatedSection variant="slide-up">
            <section className="py-12 md:py-16 bg-white dark:bg-obsidian-950 transition-colors">
              <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
                {/* Иллюстрация / скриншот графиков проекта (рендерится только если задано поле image) */}
                {hasImage && (
                  <figure className="rounded-2xl overflow-hidden border border-slate-200 dark:border-obsidian-800 bg-slate-50 dark:bg-obsidian-900 shadow-lg">
                    <img
                      src={cleanImage}
                      alt={currentCase.title}
                      loading="lazy"
                      onError={() => setImgError(true)}
                      className="w-full max-h-[520px] object-cover"
                    />
                    <figcaption className="px-5 py-3 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-obsidian-800">
                      Динамика показателей проекта: {currentCase.title}
                    </figcaption>
                  </figure>
                )}

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                    <BarChart3 className="w-6 h-6 text-growth-600 dark:text-growth-400" />
                    <span>Ключевые метрики проекта (Было → Стало)</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono">
                    {/* Трафик */}
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm">
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        {currentCase.metricLabels?.trafficTitle || 'Органический трафик (визиты/мес)'}
                      </div>
                      <div className="flex items-baseline justify-between gap-2 mb-3">
                        <div>
                          <span className="text-xs text-slate-400 block">Было:</span>
                          <span className="text-base font-semibold text-slate-600 dark:text-slate-400">
                            {currentCase.before.traffic.toLocaleString('ru-RU')}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                        <div>
                          <span className="text-xs text-slate-400 block">Стало:</span>
                          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                            {currentCase.after.traffic.toLocaleString('ru-RU')}
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-growth-500/10 text-growth-700 dark:text-growth-400 text-xs font-bold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{currentCase.metricLabels?.growthTrafficText || `Рост +${currentCase.growth.traffic}%`}</span>
                      </div>
                    </div>

                    {/* Позиции */}
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm">
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        {currentCase.metricLabels?.positionsTitle || 'Средняя позиция / Видимость'}
                      </div>
                      <div className="flex items-baseline justify-between gap-2 mb-3">
                        <div>
                          <span className="text-xs text-slate-400 block">Было:</span>
                          <span className="text-base font-semibold text-slate-600 dark:text-slate-400">
                            {currentCase.metricLabels?.beforePositionsText || `ТОП-${currentCase.before.positions}`}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                        <div>
                          <span className="text-xs text-slate-400 block">Стало:</span>
                          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                            {currentCase.metricLabels?.afterPositionsText || `ТОП-${currentCase.after.positions}`}
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-growth-500/10 text-growth-700 dark:text-growth-400 text-xs font-bold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{currentCase.metricLabels?.growthPositionsText || currentCase.metrics.positions}</span>
                      </div>
                    </div>

                    {/* Конверсия */}
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 shadow-sm">
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        {currentCase.metricLabels?.conversionTitle || 'Конверсия в заявку (CR)'}
                      </div>
                      <div className="flex items-baseline justify-between gap-2 mb-3">
                        <div>
                          <span className="text-xs text-slate-400 block">Было:</span>
                          <span className="text-base font-semibold text-slate-600 dark:text-slate-400">
                            {currentCase.metricLabels?.beforeConversionText || `${currentCase.before.conversion}%`}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                        <div>
                          <span className="text-xs text-slate-400 block">Стало:</span>
                          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                            {currentCase.metricLabels?.afterConversionText || `${currentCase.after.conversion}%`}
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-growth-500/10 text-growth-700 dark:text-growth-400 text-xs font-bold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{currentCase.metricLabels?.growthConversionText || `Прирост CR +${currentCase.growth.conversion}%`}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Исходная ситуация и Задачи */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-4">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                      1. Исходная точка и проблемы
                    </h2>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      {currentCase.problem}
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-4">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
                      <Target className="w-5 h-5 text-growth-600 dark:text-growth-400" />
                      <span>2. Поставленные задачи</span>
                    </h2>
                    <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300 font-sans">
                      {currentCase.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-1" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Что конкретно было внедрено */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 space-y-5">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white font-mono">
                    3. Что конкретно было сделано и внедрено на проекте
                  </h2>
                  <div className="space-y-3">
                    {currentCase.done.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white dark:bg-obsidian-950 border border-slate-200 dark:border-obsidian-800 flex items-start gap-3.5 text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed"
                      >
                        <span className="font-mono font-bold text-growth-600 dark:text-growth-400 shrink-0">
                          0{idx + 1}.
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Итоговый бизнес-результат */}
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/80 dark:bg-obsidian-900 border border-emerald-200 dark:border-growth-500/30 space-y-3">
                  <h2 className="text-lg font-bold text-growth-700 dark:text-growth-400 font-mono uppercase tracking-wider">
                    4. Итоговый результат для бизнеса
                  </h2>
                  <p className="text-base text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
                    {currentCase.result}
                  </p>
                </div>

                {/* Дисклеймер NDA */}
                <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-obsidian-900/40 border border-slate-200 dark:border-obsidian-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-growth-600 dark:text-growth-400 shrink-0 mt-0.5" />
                  <span>
                    Домен проекта скрыт в соответствии с соглашением о неразглашении (NDA). Динамика позиций и трафика приведена по данным Яндекс.Метрики и систем съёма позиций. Показатели каждого проекта индивидуальны и зависят от исходного состояния сайта и скорости внедрения рекомендаций.
                  </span>
                </div>

                {/* Перелинковка на другие кейсы */}
                {otherCases.length > 0 && (
                  <div className="pt-6 border-t border-slate-200 dark:border-obsidian-850">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
                      Другие кейсы из практики
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {otherCases.map((item) => (
                        <Link
                          key={item.id}
                          to={`/portfolio/${item.slug}/`}
                          className="p-5 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/50 transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="text-[11px] font-mono text-growth-600 dark:text-growth-400 mb-1">
                              {item.niche}
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-growth-600 dark:group-hover:text-growth-300 transition-colors mb-3">
                              {item.title}
                            </h3>
                          </div>
                          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/70 dark:border-obsidian-800">
                            <span>Трафик: {item.metrics.traffic}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </AnimatedSection>

          {/* Форма заявки на аудит */}
          <AnimatedSection variant="slide-up">
            <CTASection />
          </AnimatedSection>
        </AnimatedSection>
      </>
    );
  }

  // 2. Общий каталог всех кейсов (/portfolio/)
  const seo = getSeoData('cases');
  const ogMeta = generateOgMeta('/portfolio/', seo.title, seo.description);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${SITE_URL}/portfolio/`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        {/* Шапка страницы кейсов */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 grid-bg transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-700 dark:text-growth-400 font-mono text-xs uppercase tracking-wider mb-4 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Подтвержденная аналитика Яндекс и Google</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Кейсы и реальные результаты
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
              Примеры поискового продвижения в e-commerce, медицине, производственном B2B и сфере услуг с детальным разбором выполненных работ.
            </p>
          </div>
        </section>

        {/* Секция кейсов с переходом на детальные страницы */}
        <AnimatedSection variant="slide-up">
          <CasesSection />
        </AnimatedSection>

        {/* Форма заявки на аудит */}
        <AnimatedSection variant="slide-up">
          <CTASection />
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
