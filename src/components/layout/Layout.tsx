import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const Layout: React.FC = () => {
  // Automatically scroll to top on every navigation
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-warm text-charcoal paper-texture selection:bg-leaf/30 selection:text-forest-900">
      {/* Skip to Content for screen reader & keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-forest text-warm-white px-4 py-2 rounded-xl shadow-paper-lg font-semibold text-sm outline-none ring-2 ring-leaf"
      >
        Skip to main content
      </a>

      {/* Sustainability Top Banner */}
      <AnnouncementBar />

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Page Content */}
      <main id="main-content" className="flex-1 flex flex-col focus:outline-none">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
