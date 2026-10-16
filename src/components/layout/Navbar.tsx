import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { Button } from '../ui/Button';
import { siteConfig } from '../../config/siteConfig';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll state for subtle glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-warm-white/95 backdrop-blur-md shadow-paper border-b border-warm-beige' 
          : 'bg-warm/90 backdrop-blur-sm border-b border-warm-beige/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <BrandLogo size="md" showTagline={false} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-forest font-semibold bg-forest/10 border border-forest/15'
                      : 'text-charcoal-600 hover:text-charcoal hover:bg-warm-beige/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              to="/for-businesses"
              variant="primary"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              to="/for-businesses"
              variant="primary"
              size="sm"
              className="px-3 py-1.5 text-xs"
            >
              Partner
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-charcoal hover:bg-warm-beige/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-warm-beige bg-warm-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-paper-lg animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-forest font-bold bg-forest/10 border border-forest/20'
                      : 'text-charcoal-700 hover:bg-warm hover:text-charcoal'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-warm-beige flex flex-col gap-2.5">
              <Button
                to="/for-businesses"
                variant="primary"
                size="md"
                className="w-full justify-center"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Partner With Us
              </Button>
              <Button
                to="/products"
                variant="outline"
                size="md"
                className="w-full justify-center"
              >
                Explore Product Catalog
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
