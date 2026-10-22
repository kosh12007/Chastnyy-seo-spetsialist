import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card/Card';
import { getSeoData, generateOgMeta, generateBreadcrumbSchema } from '@utils/helpers';
import { generateWebPageSchema } from '@utils/schemaGenerators';
import { AnimatedSection } from '@components/common';
import { blogArticles } from '@/data/blog';
import { formatDate } from '@/utils/helpers';
import { SITE_URL } from '@/utils/constants';

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
        <AnimatedSection variant="slide-up">
          <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Блог</h1>
              <p className="text-lg text-dark-800">Экспертные статьи по SEO-продвижению: инструкции, кейсы, тренды</p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection variant="slide-up">
          <section className="py-16">
            <div className="container">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogArticles.map((article) => (
                  <Card key={article.slug} variant="bordered" padding="lg">
                    <div className="bg-dark-50 rounded-lg h-40 mb-4 flex items-center justify-center">
                      <span className="text-dark-800 text-sm">Обложка статьи</span>
                    </div>
                    <h3 className="text-lg font-bold font-heading mb-2">{article.title}</h3>
                    <div className="flex gap-4 text-xs text-dark-800 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {formatDate(article.date)}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                    </div>
                    <p className="text-sm text-dark-800 mb-4">{article.excerpt}</p>
                    <Link to={`/blog/${article.slug}/`} className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm">
                      Читать <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
