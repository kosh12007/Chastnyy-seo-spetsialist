import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@utils/constants';
import { generateOgMeta } from '@utils/helpers';
import { generateLocalBusinessSchema } from '@utils/schemaGenerators';
import { AnimatedSection } from '@components/common';
import {
  HeroSection,
  SEOBasicsSection,
  ServicesSection,
  TariffsSection,
  AdvantagesSection,
  CasesSection,
  ReviewsSection,
  StepsSection,
  GuaranteesSection,
  FAQSection,
  CTASection,
} from '@components/sections';

const HOME_TITLE = 'Частный SEO-специалист — продвижение сайтов в ТОП | Цена от 35 000 ₽';
const HOME_DESC = 'SEO-продвижение сайтов в Яндекс и Google от частного специалиста. Рост трафика от 300%, вывод в ТОП. Бесплатный аудит.';
const ogMeta = generateOgMeta('/', HOME_TITLE, HOME_DESC);
const localBusinessSchema = generateLocalBusinessSchema();

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{HOME_TITLE}</title>
        <meta name="description" content={HOME_DESC} />
        <link rel="canonical" href={SITE_URL} />
        {Object.entries(ogMeta).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <AnimatedSection variant="fade" duration={1}>
        <HeroSection />
      </AnimatedSection>
      
      <AnimatedSection variant="slide-up">
        <SEOBasicsSection />
      </AnimatedSection>
      
      <AnimatedSection variant="slide-up">
        <ServicesSection />
      </AnimatedSection>
      
      <AnimatedSection variant="slide-up">
        <TariffsSection />
      </AnimatedSection>
      
      <AnimatedSection variant="slide-up">
        <AdvantagesSection />
      </AnimatedSection>
      
      <AnimatedSection variant="slide-up">
        <CasesSection />
      </AnimatedSection>
      
      <AnimatedSection variant="slide-up">
        <ReviewsSection />
      </AnimatedSection>
      
      <AnimatedSection variant="slide-up">
        <StepsSection />
      </AnimatedSection>
      
      <AnimatedSection variant="slide-up">
        <GuaranteesSection />
      </AnimatedSection>
      
      <AnimatedSection variant="slide-up">
        <FAQSection />
      </AnimatedSection>
      
      <AnimatedSection variant="slide-up">
        <CTASection />
      </AnimatedSection>
    </>
  );
};
