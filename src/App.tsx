import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/context/ThemeContext';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/pages/HomePage/HomePage';
import { ServicesPage } from '@/pages/ServicesPage/ServicesPage';
import { PricingPage } from '@/pages/PricingPage/PricingPage';
import { CasesPage } from '@/pages/CasesPage/CasesPage';
import { ReviewsPage } from '@/pages/ReviewsPage/ReviewsPage';
import { AboutPage } from '@/pages/AboutPage/AboutPage';
import { ContactsPage } from '@/pages/ContactsPage/ContactsPage';
import { BlogPage } from '@/pages/BlogPage/BlogPage';
import { ArticlePage } from '@/pages/ArticlePage/ArticlePage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { PrivacyPage } from '@/pages/PrivacyPage/PrivacyPage';
import { RequisitesPage } from '@/pages/RequisitesPage/RequisitesPage';

/**
 * Дерево маршрутов приложения (используется как на клиенте в BrowserRouter,
 * так и на сервере/пререндере в StaticRouter для полноценного SSR/SSG).
 */
export const AppRoutes: React.FC = () => {
  return (
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
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <AppRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
};
