import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Calendar, Users, Star, MessageCircle, Send, TrendingUp } from 'lucide-react';
import { Button } from '@ui/Button';
import { contactInfo } from '@data/contactInfo';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { generateWebPageSchema } from '@utils/schemaGenerators';
import { AnimatedSection } from '@components/common';

export const AboutPage: React.FC = () => {
  const seo = getSeoData('about');
  const ogMeta = generateOgMeta('/obo-mne/', seo.title, seo.description);
  const aboutSchema = generateWebPageSchema(seo.title, seo.description, '/obo-mne/');

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${SITE_URL}/obo-mne/`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        {/* HERO */}
        <AnimatedSection variant="slide-up">
          <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Обо мне — Имя Фамилия</h1>
                  <p className="text-lg text-dark-800">Частный SEO-специалист с опытом 8+ лет</p>
                </div>
                <div className="bg-dark-50 rounded-2xl h-80 flex items-center justify-center">
                  <div className="text-center text-dark-800">
                    <Users className="w-16 h-16 mx-auto mb-2" />
                    <p>Фото специалиста</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection variant="slide-up">
          <section className="py-16">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold font-heading mb-6">О себе</h2>
              <div className="prose prose-lg text-dark-800">
                <p className="mb-4">
                  Привет! Меня зовут [Имя], я частный SEO-специалист с опытом более 8 лет.
                  Начал карьеру в 2018 году, работал в ведущих SEO-агентствах Москвы.
                </p>
                <p className="mb-4">
                  За это время реализовал 150+ проектов в различных нишах: от локального бизнеса
                  до федеральных интернет-магазинов. Специализируюсь на комплексном SEO-продвижении
                  с фокусом на бизнес-результаты.
                </p>
                <p>
                  Мой подход — это прозрачность, погружение в проект и работа на результат.
                  Я не веду 20 проектов одновременно, поэтому каждый клиент получает максимум внимания.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Metrics */}
        <AnimatedSection variant="slide-up">
          <section className="py-16 bg-dark-50">
            <div className="container">
              <h2 className="text-3xl font-bold font-heading mb-8 text-center">В цифрах</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Calendar, value: '8+', label: 'лет в SEO' },
                  { icon: Award, value: '150+', label: 'проектов' },
                  { icon: Star, value: '93%', label: 'рекомендуют' },
                  { icon: TrendingUp, value: '280%', label: 'рост трафика' },
                ].map((m, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <m.icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-dark-900">{m.value}</div>
                    <div className="text-sm text-dark-800">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection variant="slide-up">
          <section className="py-16">
            <div className="container text-center">
              <h2 className="text-3xl font-bold font-heading mb-4">Давайте работать вместе!</h2>
              <p className="text-lg text-dark-800 mb-6">
                Готовы обсудить ваш проект? Свяжитесь со мной — бесплатная консультация.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a href={`tel:${contactInfo.phone}`} className="text-xl font-bold text-primary-600">{contactInfo.phone}</a>
                <a href={`https://wa.me/${contactInfo.whatsapp}`} className="flex items-center gap-2 px-4 py-2 bg-success-50 text-success-600 rounded-lg">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a href={`https://t.me/${contactInfo.telegram}`} className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg">
                  <Send className="w-5 h-5" /> Telegram
                </a>
              </div>
              <Button variant="primary" size="lg">Связаться со мной</Button>
            </div>
          </section>
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
