import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../common/BrandLogo';
import { siteConfig } from '../../config/siteConfig';
import { ArrowUpRight, Mail, MapPin, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-warm-white border-t border-charcoal-700 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-charcoal-700">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="lg" showTagline={true} />
            <p className="text-xs sm:text-sm text-warm-kraft/80 leading-relaxed max-w-sm mt-3">
              {siteConfig.mission}
            </p>
            <div className="pt-2 text-xs text-warm-kraft/60 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-leaf shrink-0" />
                <span>Headquarters Hub: {siteConfig.contact.city}, {siteConfig.contact.state}, {siteConfig.contact.country}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-leaf shrink-0" />
                <span>Inquiries: {siteConfig.contact.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-leaf shrink-0" />
                <span>Direct Line: {siteConfig.contact.phoneDisplay} (Business Desk)</span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-leaf font-display">
              Explore PaperX
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-warm-kraft/70">
              <li>
                <Link to="/" className="hover:text-warm-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-warm-white transition-colors">
                  Our Products Catalog
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-warm-white transition-colors">
                  How Recycling Works
                </Link>
              </li>
              <li>
                <Link to="/for-businesses" className="hover:text-warm-white transition-colors">
                  Institutional Partnerships
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-warm-white transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-warm-white transition-colors">
                  Contact & Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-leaf font-display">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-warm-kraft/70">
              <li>
                <Link to="/products?category=notebooks" className="hover:text-warm-white transition-colors">
                  Recycled Notebooks & Journals
                </Link>
              </li>
              <li>
                <Link to="/products?category=bags" className="hover:text-warm-white transition-colors">
                  Eco-Friendly Paper Bags
                </Link>
              </li>
              <li>
                <Link to="/products?category=printing" className="hover:text-warm-white transition-colors">
                  75 GSM Printing & Copier Paper
                </Link>
              </li>
              <li>
                <Link to="/products?category=packaging" className="hover:text-warm-white transition-colors">
                  Gift Cards & Seed Packaging
                </Link>
              </li>
              <li>
                <Link to="/products?category=stationery" className="hover:text-warm-white transition-colors">
                  Desk Stationery & Folders
                </Link>
              </li>
            </ul>
          </div>

          {/* Sustainability & Pilot Statement */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-leaf font-display">
              Circular Integrity
            </h4>
            <div className="p-4 rounded-2xl bg-charcoal-800 border border-charcoal-600 text-xs text-warm-kraft/80 leading-relaxed">
              <p className="font-semibold text-warm-white mb-1">
                Zero Greenwashing Policy
              </p>
              PaperX relies on accredited industrial reprocessing partners and verified recovery audits. All data is reported honestly without artificial certificates.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-kraft/60">
          <div>
            &copy; {currentYear} PaperX India. All rights reserved. Give paper a second life.
          </div>
          <div className="flex items-center gap-6">
            <span>Operating from {siteConfig.contact.city}, India</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[11px] text-warm-kraft/40">Production Quality Build</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
