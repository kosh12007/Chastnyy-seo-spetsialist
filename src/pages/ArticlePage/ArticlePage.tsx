import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { generateArticleSchema } from '@utils/schemaGenerators';
import { generateBreadcrumbSchema } from '@utils/helpers';
import { AnimatedSection } from '@components/common';
import { blogArticles } from '@/data/blog';
import { formatDate } from '@/utils/helpers';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { SITE_URL } from '@/utils/constants';

/**
 * Детальная страница статьи блога.
 * Поддерживает адаптивную светлую тему и ночную Dark Obsidian & Emerald Growth.
 */
export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return <NotFoundPage />;
  }

  const articleSchema = generateArticleSchema(
    article.title,
    article.excerpt,
    article.date,
    article.date,
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Блог', url: '/blog/' },
    { name: article.title },
  ]);

  return (
    <>
      <Helmet>
        <title>{article.title} — Блог частного SEO-эксперта</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={`${SITE_URL}/blog/${article.slug}/`} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        <article className="py-12 md:py-16 bg-slate-50 dark:bg-obsidian-950 min-h-screen transition-colors">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <AnimatedSection variant="slide-up">
              <Link
                to="/blog/"
                className="inline-flex items-center gap-2 text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 text-xs font-mono mb-6 transition-colors font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Назад ко всем статьям</span>
              </Link>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 mb-8 border-b border-slate-200 dark:border-obsidian-800 pb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400" />
                  <span>{formatDate(article.date)}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>{article.readTime} мин чтения</span>
                </span>
              </div>
            </AnimatedSection>

            {/* Текст статьи */}
            <AnimatedSection variant="slide-up">
              <div
                className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed font-sans prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-growth-700 dark:prose-a:text-growth-400 hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </AnimatedSection>

            {/* CTA блок после статьи */}
            <AnimatedSection variant="slide-up">
              <div className="mt-12 p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 text-center shadow-lg transition-colors">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Хотите разобрать ваш проект индивидуально?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto font-sans mb-6">
                  Пришлите адрес сайта — проведу предварительную оценку по открытым данным и определю приоритетные точки роста.
                </p>
                <Link
                  to="/#audit-form"
                  className="inline-block px-8 py-3.5 rounded-xl bg-growth-600 hover:bg-growth-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider font-mono transition-all shadow-lg shadow-growth-950/20 dark:shadow-growth-950/40"
                >
                  Получить экспресс-оценку сайта
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </article>
      </AnimatedSection>
    </>
  );
};
