import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from '@/components/layout/MainLayout';
import { LoadingSpinner } from '@components/common';

/**
 * Ленивая загрузка страниц (код-сплиттинг).
 * Каждая страница попадает в отдельный чанк и грузится по требованию.
 */
const HomePage = lazy(() => import('@/pages/HomePage/HomePage').then(({ HomePage }) => ({ default: HomePage })));
const ServicesPage = lazy(() =>
  import('@/pages/ServicesPage/ServicesPage').then(({ ServicesPage }) => ({ default: ServicesPage }))
);
const PricingPage = lazy(() => import('@/pages/PricingPage/PricingPage').then(({ PricingPage }) => ({ default: PricingPage })));
const CasesPage = lazy(() => import('@/pages/CasesPage/CasesPage').then(({ CasesPage }) => ({ default: CasesPage })));
const ReviewsPage = lazy(() => import('@/pages/ReviewsPage/ReviewsPage').then(({ ReviewsPage }) => ({ default: ReviewsPage })));
const AboutPage = lazy(() => import('@/pages/AboutPage/AboutPage').then(({ AboutPage }) => ({ default: AboutPage })));
const ContactsPage = lazy(() => import('@/pages/ContactsPage/ContactsPage').then(({ ContactsPage }) => ({ default: ContactsPage })));
const BlogPage = lazy(() => import('@/pages/BlogPage/BlogPage').then(({ BlogPage }) => ({ default: BlogPage })));
const ArticlePage = lazy(() => import('@/pages/ArticlePage/ArticlePage').then(({ ArticlePage }) => ({ default: ArticlePage })));
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage/NotFoundPage').then(({ NotFoundPage }) => ({ default: NotFoundPage }))
);
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage/PrivacyPage').then(({ PrivacyPage }) => ({ default: PrivacyPage })));
const RequisitesPage = lazy(() =>
  import('@/pages/RequisitesPage/RequisitesPage').then(({ RequisitesPage }) => ({ default: RequisitesPage }))
);

const PageFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <LoadingSpinner size="lg" />
  </div>
);

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/uslugi/" element={<ServicesPage />} />
              <Route path="/uslugi/:slug/" element={<ServicesPage />} />
              <Route path="/ceny/" element={<PricingPage />} />
              <Route path="/portfolio/" element={<CasesPage />} />
              <Route path="/portfolio/:slug/" element={<CasesPage />} />
              <Route path="/otzyvy/" element={<ReviewsPage />} />
              <Route path="/obo-mne/" element={<AboutPage />} />
              <Route path="/kontakty/" element={<ContactsPage />} />
              <Route path="/blog/" element={<BlogPage />} />
              <Route path="/blog/:slug/" element={<ArticlePage />} />

              {/* Юридические страницы (152-ФЗ и 422-ФЗ) */}
              <Route path="/politika-konfidentsialnosti/" element={<PrivacyPage type="privacy" />} />
              <Route path="/soglasie-opd/" element={<PrivacyPage type="consent" />} />
              <Route path="/rekvizity/" element={<RequisitesPage />} />

              {/* Алиасы для удобства перехода */}
              <Route path="/privacy/" element={<Navigate to="/politika-konfidentsialnosti/" replace />} />
              <Route path="/consent/" element={<Navigate to="/soglasie-opd/" replace />} />
              <Route path="/requisites/" element={<Navigate to="/rekvizity/" replace />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};
