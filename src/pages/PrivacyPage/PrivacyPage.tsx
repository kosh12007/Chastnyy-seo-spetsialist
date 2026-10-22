import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@utils/constants';
import { AnimatedSection } from '@components/common';

interface PrivacyPageProps {
  type?: 'privacy' | 'consent';
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ type = 'privacy' }) => {
  return (
    <>
      <Helmet>
        <title>{type === 'privacy' ? 'Политика конфиденциальности' : 'Согласие на обработку ПД'}</title>
        <link rel="canonical" href={`${SITE_URL}/${type === 'privacy' ? 'politika-konfidentsialnosti' : 'soglasie-opd'}/`} />
      </Helmet>

      <AnimatedSection variant="fade" duration={0.8}>
        <AnimatedSection variant="slide-up">
          <article className="py-16">
            <div className="container max-w-4xl">
              <h1 className="text-4xl font-bold font-heading mb-8">
                {type === 'privacy' ? 'Политика конфиденциальности' : 'Согласие на обработку персональных данных'}
              </h1>

              <div className="prose prose-lg max-w-none text-dark-800">
                <p className="mb-4">
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты
                  персональных данных пользователей сайта.
                </p>

                <h2 className="text-2xl font-bold font-heading mt-8 mb-4">1. Общие положения</h2>
                <p className="mb-4">
                  1.1. Оператор обрабатывает персональные данные в соответствии с ФЗ-152 «О персональных данных».
                </p>

                <h2 className="text-2xl font-bold font-heading mt-8 mb-4">2. Цели обработки</h2>
                <p className="mb-4">
                  2.1. Обработка данных осуществляется для связи с пользователем, оказания услуг и улучшения качества обслуживания.
                </p>

                <h2 className="text-2xl font-bold font-heading mt-8 mb-4">3. Защита данных</h2>
                <p className="mb-4">
                  3.1. Оператор принимает необходимые организационные и технические меры для защиты персональных данных.
                </p>
              </div>
            </div>
          </article>
        </AnimatedSection>
      </AnimatedSection>
    </>
  );
};

