import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@utils/constants';
import { generateOgMeta } from '@utils/helpers';
import { generateLocalBusinessSchema } from '@utils/schemaGenerators';
import { AnimatedSection } from '@components/common';
import {
  HeroSection,
  SEOBasicsSection,
  CasesSection,
  StepsSection,
  TariffsSection,
  BudgetCalculatorSection,
  ModelComparisonSection,
  AboutExpertSection,
  FAQSection,
  CTASection,
} from '@components/sections';

// Метаданные главной страницы, согласованные с требованиями ФЗ № 38-ФЗ (без ложных 100% гарантий)
const HOME_TITLE = 'Частный SEO-специалист Михаил Павлов — Системное SEO в Яндекс и Google | От 35 000 ₽/мес';
const HOME_DESC = 'Системная поисковая оптимизация сайтов от частного эксперта (самозанятый). Прозрачные KPI, белые методы, официальный договор и чеки. Предварительная экспресс-оценка проекта.';
const ogMeta = generateOgMeta('/', HOME_TITLE, HOME_DESC);
const localBusinessSchema = generateLocalBusinessSchema();

/**
 * Главная страница сайта частного SEO-специалиста.
 * Архитектура секций соответствует проверенному макету mockup-v2.html:
 * 1. HeroSection — позиционирование эксперта и ключевые показатели
 * 2. SEOBasicsSection — сегментация бизнеса («С кем работаю наиболее эффективно»)
 * 3. CasesSection — доказанные результаты с дисклеймерами NDA и модальными окнами
 * 4. StepsSection — 5 регламентных шагов работы и прозрачность
 * 5. TariffsSection — сетка тарифов (Start, Growth, Scale) для самозанятого
 * 6. BudgetCalculatorSection — интерактивный калькулятор вилки бюджета
 * 7. ModelComparisonSection — объективное сравнение «Частный эксперт vs Агентство»
 * 8. AboutExpertSection — биография эксперта, принципы и стек инструментов
 * 9. FAQSection — честные ответы на вопросы (гарантии, сроки, 422-ФЗ)
 * 10. CTASection — форма экспресс-оценки с выбором мессенджера и соблюдением 152-ФЗ
 */
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

      {/* 1. Главный экран */}
      <AnimatedSection variant="fade" duration={0.8}>
        <HeroSection />
      </AnimatedSection>
      
      {/* 2. Кому подхожу (сегментация) */}
      <AnimatedSection variant="slide-up">
        <SEOBasicsSection />
      </AnimatedSection>
      
      {/* 3. Кейсы из практики */}
      <AnimatedSection variant="slide-up">
        <CasesSection />
      </AnimatedSection>

      {/* 4. Шаги рабочего процесса */}
      <AnimatedSection variant="slide-up">
        <StepsSection />
      </AnimatedSection>
      
      {/* 5. Тарифные планы */}
      <AnimatedSection variant="slide-up">
        <TariffsSection />
      </AnimatedSection>
      
      {/* 6. Калькулятор бюджета */}
      <AnimatedSection variant="slide-up">
        <BudgetCalculatorSection />
      </AnimatedSection>

      {/* 7. Сравнение моделей взаимодействия */}
      <AnimatedSection variant="slide-up">
        <ModelComparisonSection />
      </AnimatedSection>

      {/* 8. Обо мне и принципах работы */}
      <AnimatedSection variant="slide-up">
        <AboutExpertSection />
      </AnimatedSection>
      
      {/* 9. Частые вопросы (FAQ) */}
      <AnimatedSection variant="slide-up">
        <FAQSection />
      </AnimatedSection>
      
      {/* 10. Форма предварительной оценки проекта */}
      <AnimatedSection variant="slide-up">
        <CTASection />
      </AnimatedSection>
    </>
  );
};
