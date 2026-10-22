import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { contactInfo } from '@data/contactInfo';
import { ContactForm } from '@/components/sections/ContactForm/ContactForm';
import { getSeoData, generateOgMeta } from '@utils/helpers';
import { SITE_URL } from '@utils/constants';
import { generateLocalBusinessSchema } from '@utils/schemaGenerators';
import { AnimatedSection } from '@components/common';

export const ContactsPage: React.FC = () => {
  const seo = getSeoData('contacts');
  const ogMeta = generateOgMeta('/kontakty/', seo.title, seo.description);
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${SITE_URL}/kontakty/`} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        <AnimatedSection variant="slide-up">
          <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Контакты</h1>
              <p className="text-lg text-dark-800">
                Свяжитесь со мной удобным способом. Отвечаю в течение часа в рабочее время.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection variant="slide-up">
          <section className="py-16">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Контактная информация */}
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-6">Контактная информация</h2>
                  <div className="space-y-4">
                    <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-4 p-4 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors">
                      <Phone className="w-6 h-6 text-primary-600" />
                      <div>
                        <div className="font-semibold">{contactInfo.phone}</div>
                        <div className="text-sm text-dark-800">Кликните для звонка</div>
                      </div>
                    </a>
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 p-4 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors">
                      <Mail className="w-6 h-6 text-primary-600" />
                      <div>
                        <div className="font-semibold">{contactInfo.email}</div>
                        <div className="text-sm text-dark-800">Написать на почту</div>
                      </div>
                    </a>
                    <a href={`https://wa.me/${contactInfo.whatsapp}`} className="flex items-center gap-4 p-4 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors">
                      <MessageCircle className="w-6 h-6 text-success-600" />
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-sm text-dark-800">Написать в мессенджер</div>
                      </div>
                    </a>
                    <a href={`https://t.me/${contactInfo.telegram}`} className="flex items-center gap-4 p-4 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors">
                      <Send className="w-6 h-6 text-primary-600" />
                      <div>
                        <div className="font-semibold">Telegram</div>
                        <div className="text-sm text-dark-800">Написать в мессенджер</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-4 p-4 bg-dark-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary-600 mt-0.5" />
                      <div>
                        <div className="font-semibold">Адрес</div>
                        <div className="text-sm text-dark-800">{contactInfo.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-dark-50 rounded-xl">
                      <Clock className="w-6 h-6 text-primary-600" />
                      <div>
                        <div className="font-semibold">График работы</div>
                        <div className="text-sm text-dark-800">{contactInfo.workingHours}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Форма */}
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-6">Напишите мне</h2>
                  <ContactForm />
                </div>
              </div>

              {/* Карта */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold font-heading mb-4">Как найти</h2>
                <div className="bg-dark-50 rounded-2xl h-80 flex items-center justify-center">
                  <div className="text-center text-dark-800">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Яндекс.Карты iframe</p>
                    <p className="text-sm">📍 {contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};
