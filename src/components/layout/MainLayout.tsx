import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs/Breadcrumbs';
import { ScrollToTop } from '@components/common/ScrollToTop';
import { CallbackButton } from '@components/common/CallbackButton';
import { CookieBanner } from '@components/common/CookieBanner/CookieBanner';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-dark-900 font-sans">
      <ScrollToTop />
      <Header />
      <Breadcrumbs />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CallbackButton />
      <CookieBanner />
    </div>
  );
};
