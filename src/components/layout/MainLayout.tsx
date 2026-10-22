import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs/Breadcrumbs';
import { ScrollToTop } from '@components/common/ScrollToTop';
import { CallbackButton } from '@components/common/CallbackButton';
import { CookieBanner } from '@components/common/CookieBanner/CookieBanner';

/**
 * Основной макет приложения.
 * Выдержан в премиальной темной эстетике Obsidian & Emerald Growth.
 */
export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-obsidian-950 text-slate-100 font-sans selection:bg-growth-500/20 selection:text-growth-300">
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
