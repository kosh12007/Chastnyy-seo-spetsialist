import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@ui/Button';
import { generateArticleSchema } from '@utils/schemaGenerators';
import { generateBreadcrumbSchema } from '@utils/helpers';
import { AnimatedSection } from '@components/common';
import { blogArticles } from '@/data/blog';
import { formatDate } from '@/utils/helpers';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { SITE_URL } from '@/utils/constants';

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
        <title>{article.title} — Блог SEO специалиста</title>
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
        <article className="py-16">
          <div className="container max-w-4xl">
            <AnimatedSection variant="slide-up">
              <Link to="/blog/" className="inline-flex items-center gap-2 text-primary-600 mb-6 hover:underline">
                <ArrowLeft className="w-4 h-4" /> Назад к блогу
              </Link>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 leading-tight">
                {article.title}
              </h1>

              <div className="flex gap-4 text-sm text-dark-800 mb-8">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {formatDate(article.date)}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {article.readTime} чтения</span>
              </div>

              {article.image ? (
                <div className="rounded-2xl overflow-hidden mb-8 aspect-video">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="bg-dark-50 rounded-2xl h-64 mb-8 flex items-center justify-center border border-dark-100">
                  <span className="text-dark-800">Изображение статьи</span>
                </div>
              )}
            </AnimatedSection>

            <AnimatedSection variant="slide-up">
              <div 
                className="prose prose-lg max-w-none text-dark-800 prose-headings:font-heading prose-headings:font-bold prose-a:text-primary-600 hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </AnimatedSection>

            {/* CTA после статьи */}
            <AnimatedSection variant="slide-up">
              <div className="mt-12 p-8 bg-primary-50 rounded-2xl text-center">
                <h2 className="text-2xl font-bold font-heading mb-3">Нужна помощь с SEO?</h2>
                <p className="text-dark-800 mb-6">
                  Проведу бесплатный аудит вашего сайта и расскажу, что можно улучшить.
                </p>
                <Button variant="primary" size="lg">Получить бесплатный аудит</Button>
              </div>
            </AnimatedSection>
          </div>
        </article>
      </AnimatedSection>
    </>
  );
};
