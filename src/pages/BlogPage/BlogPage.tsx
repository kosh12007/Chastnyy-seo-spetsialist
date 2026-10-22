import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { getSeoData, generateOgMeta, generateBreadcrumbSchema } from '@utils/helpers';
import { generateWebPageSchema } from '@utils/schemaGenerators';
import { AnimatedSection } from '@components/common';
import { blogArticles } from '@/data/blog';
import { formatDate } from '@/utils/helpers';
import { SITE_URL } from '@/utils/constants';

/**
 * Страница блога с экспертными статьями по SEO.
 * Поддерживает адаптивную светлую тему и ночную эстетику Dark Obsidian & Emerald Growth.
 */
export const BlogPage: React.FC = () => {
  const seo = getSeoData('blog');
  const ogMeta = generateOgMeta('/blog/', seo.title, seo.description);
  const blogSchema = generateWebPageSchema(seo.title, seo.description, '/blog/');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Блог' },
  ]);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${SITE_URL}/blog/`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        {/* Шапка блога */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-obsidian-850 grid-bg transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-growth-500/10 border border-growth-500/20 text-growth-700 dark:text-growth-400 font-mono text-xs uppercase tracking-wider mb-4 font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>База знаний и практические разборы</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Блог о поисковом маркетинге
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
              Реальные механики поисковой оптимизации, анализ апдейтов поисковых систем, коммерческие факторы и технические тонкости.
            </p>
          </div>
        </section>

        {/* Сетка статей */}
        <AnimatedSection variant="slide-up">
          <section className="py-12 md:py-16 bg-slate-50/50 dark:bg-obsidian-950 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-obsidian-800 hover:border-growth-500/50 hover:bg-slate-50 dark:hover:bg-obsidian-850 shadow-sm transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-growth-600 dark:text-growth-400" />
                          <span>{formatDate(article.date)}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          <span>{article.readTime} мин</span>
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-growth-600 dark:group-hover:text-growth-300 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                    </div>

                    <Link
                      to={`/blog/${article.slug}/`}
                      className="inline-flex items-center gap-2 text-growth-700 dark:text-growth-400 hover:text-growth-800 dark:hover:text-growth-300 font-mono text-xs uppercase tracking-wider font-semibold transition-colors pt-4 border-t border-slate-100 dark:border-obsidian-800/80"
                    >
                      <span>Читать статью</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
