import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Sparkles, Building, GraduationCap, 
  Users, ShoppingBag, BookOpen, Layers, ShieldCheck, 
  Compass, Droplets, Check, FileCheck2 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TrustStrip } from '../components/common/TrustStrip';
import { MaterialMetamorphosis } from '../components/common/MaterialMetamorphosis';
import { ImpactDashboard } from '../components/common/ImpactDashboard';
import { ProductInquiryModal } from '../components/forms/ProductInquiryModal';
import { productsData } from '../config/productsData';
import { Product } from '../types';
import { useSEO } from '../hooks/useSEO';

export const HomePage: React.FC = () => {
  useSEO({
    title: 'PaperX — Good Paper. Better Future. | Circular Sustainable Paper & Recycling',
    description: 'We give waste paper a second life through thoughtfully made recycled paper products and smarter paper recovery solutions for businesses, institutions, and everyday life in India.',
    canonicalPath: '/',
  });

  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Hero interactive material swatch explorer
  const [heroMaterialTab, setHeroMaterialTab] = useState<'raw' | 'journal' | 'kraft'>('journal');

  const heroMaterialDetails = {
    journal: {
      title: '80 GSM Recycled Book Paper',
      tagline: 'Smooth, dense, unbleached sheets made from university exam booklets',
      specs: '100% Post-Consumer • Non-Chlorine Pulp • 180° Lay-Flat Thread Binding',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=85',
    },
    raw: {
      title: 'Reprocessed Cellulosic Fiber',
      tagline: 'Hydropulped secondary fiber slurry without harmful dioxins',
      specs: 'Saves 26,000L Water / Ton • 0% Virgin Timber • Certified Mill Partner Processed',
      image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1200&q=85',
    },
    kraft: {
      title: '140 GSM High-Tensile Kraft',
      tagline: 'Tear-resistant unbleached board for retail bags and office folders',
      specs: 'Tested to 6.5 kg Load • Braided Paper Handles • Fully Compostable',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85',
    },
  };

  const handleInquireProduct = (product: Product) => {
    setSelectedProduct(product);
    setInquiryModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section — Sophisticated Editorial Layout */}
      <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 border-b border-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Editorial Eyebrow & Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-warm-beige/80">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
              <span className="text-xs uppercase font-bold tracking-widest text-forest">
                CIRCULAR PAPER ECOSYSTEM • MAHARASHTRA PILOT
              </span>
            </div>
            <div className="text-[11px] font-mono text-charcoal-400 hidden sm:block">
              Pune Operational Hub • Zero Virgin Forest Timber
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Bold Typography & Art Direction */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-charcoal tracking-tight leading-[1.06]">
                Good Paper. <br />
                <span className="text-forest relative">
                  Better Future.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-leaf/40 -z-10" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                    <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-base sm:text-xl text-charcoal-500 leading-relaxed max-w-2xl font-normal">
                We give waste paper a second life through thoughtfully made recycled paper products and smarter paper recovery solutions for businesses, institutions, and everyday life.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  to="/products"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Explore Our Products
                </Button>
                <Button
                  to="/for-businesses"
                  variant="outline"
                  size="lg"
                >
                  Start a Recycling Partnership
                </Button>
              </div>

              {/* Interactive Material Swatch Switcher (Non-generic, tangible design) */}
              <div className="pt-6 border-t border-warm-beige">
                <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal-400 block mb-2.5">
                  Inspect Our Circular Material Grades
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'journal', label: '80 GSM Journal Paper' },
                    { id: 'raw', label: 'Reprocessed Fiber' },
                    { id: 'kraft', label: '140 GSM Heavy Kraft' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setHeroMaterialTab(tab.id as any)}
                      className={`text-xs px-3.5 py-1.5 rounded-xl font-semibold transition-all border ${
                        heroMaterialTab === tab.id
                          ? 'bg-forest text-warm-white border-forest shadow-sm'
                          : 'bg-warm-white border-warm-beige text-charcoal-600 hover:bg-warm'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Art-Directed Material & Product Stage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Organic backdrop shadow & paper angle */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-warm-kraft/30 via-warm-beige to-forest/10 rounded-3xl transform rotate-1 -z-0" />

                {/* Primary Photo Showcase Frame */}
                <div className="relative rounded-3xl overflow-hidden bg-warm-white border border-warm-beige shadow-paper-xl z-10 transition-all duration-500">
                  <div className="aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden bg-warm relative">
                    <img
                      src={heroMaterialDetails[heroMaterialTab].image}
                      alt={heroMaterialDetails[heroMaterialTab].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                    
                    {/* Bottom Metadata Label */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-warm-white/95 backdrop-blur-md border border-warm-beige/80 shadow-paper">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-wider text-forest block">
                            Material Architecture
                          </span>
                          <h4 className="text-sm sm:text-base font-display font-extrabold text-charcoal">
                            {heroMaterialDetails[heroMaterialTab].title}
                          </h4>
                          <p className="text-xs text-charcoal-500 mt-0.5 leading-snug">
                            {heroMaterialDetails[heroMaterialTab].tagline}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2.5 pt-2 border-t border-warm-beige/60 text-[11px] font-mono text-forest font-medium">
                        {heroMaterialDetails[heroMaterialTab].specs}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlapping Tactile Detail Box */}
                <div className="hidden sm:block absolute -top-5 -right-5 p-3.5 rounded-2xl bg-warm-white border border-warm-beige shadow-paper-lg z-20 max-w-[190px]">
                  <div className="flex items-center gap-1.5 text-forest font-bold text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-leaf" />
                    <span>Closed-Loop</span>
                  </div>
                  <p className="text-[10px] text-charcoal-500 mt-1 leading-tight">
                    Recovered locally, reprocessed cleanly, delivered thoughtfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust and Value Strip */}
      <TrustStrip />

      {/* 3. Products Showcase — Asymmetric Brand Presentation */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-forest block mb-2">
              Curated Recycled Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal tracking-tight">
              Functional Stationery, Elevated.
            </h2>
            <p className="mt-3 text-base text-charcoal-500 leading-relaxed">
              We replaced virgin pulp with sanitized secondary fibers to create durable notebooks, jam-free copiers, and heavy kraft retail bags.
            </p>
          </div>
          <Button
            to="/products"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Complete Catalog
          </Button>
        </div>

        {/* Editorial Product Spotlight (Asymmetrical layout eliminating generic card repetition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Hero Product Feature */}
          <div className="lg:col-span-7 rounded-3xl bg-warm-white border border-warm-beige shadow-paper-lg overflow-hidden flex flex-col justify-between group">
            <div className="aspect-[16/10] w-full overflow-hidden bg-warm relative">
              <img
                src={productsData[0].imageUrl}
                alt={productsData[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="leaf" size="sm">Flagship Notebook</Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <Badge variant="kraft" size="sm">100% Recycled Fibers</Badge>
              </div>
            </div>

            <div className="p-8 text-left space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-display font-extrabold text-charcoal group-hover:text-forest transition-colors">
                  {productsData[0].name}
                </h3>
              </div>
              <p className="text-xs font-semibold text-forest">
                {productsData[0].tagline}
              </p>
              <p className="text-sm text-charcoal-500 leading-relaxed">
                {productsData[0].description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-warm-beige text-xs font-mono">
                <div>
                  <span className="text-charcoal-400 block text-[10px]">WEIGHT</span>
                  <span className="font-bold text-charcoal">80 GSM</span>
                </div>
                <div>
                  <span className="text-charcoal-400 block text-[10px]">BINDING</span>
                  <span className="font-bold text-charcoal">Smyth Sewn</span>
                </div>
                <div>
                  <span className="text-charcoal-400 block text-[10px]">PAGES</span>
                  <span className="font-bold text-charcoal">192 Pages</span>
                </div>
                <div>
                  <span className="text-charcoal-400 block text-[10px]">BATCH MOQ</span>
                  <span className="font-bold text-charcoal">50 Units</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-charcoal-400">
                  Ideal for universities, corporate welcome packs & executive logging.
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleInquireProduct(productsData[0])}
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Complementary Spotlights */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Bag Card */}
            <div className="rounded-3xl bg-warm-white border border-warm-beige shadow-paper p-6 flex flex-col justify-between text-left group">
              <div className="flex gap-5 items-center">
                <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 bg-warm border border-warm-beige">
                  <img
                    src={productsData[3].imageUrl}
                    alt={productsData[3].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <Badge variant="green" size="sm" className="mb-1">Heavy-Duty Packaging</Badge>
                  <h4 className="font-display font-bold text-base text-charcoal">
                    {productsData[3].name}
                  </h4>
                  <p className="text-xs text-charcoal-400 mt-1 line-clamp-2">
                    {productsData[3].tagline}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-warm-beige flex items-center justify-between text-xs">
                <span className="text-charcoal-400 font-mono">140 GSM Kraft • 6.5 kg Load</span>
                <button
                  onClick={() => handleInquireProduct(productsData[3])}
                  className="font-bold text-forest hover:text-forest-700"
                >
                  Enquire →
                </button>
              </div>
            </div>

            {/* Copier Paper Card */}
            <div className="rounded-3xl bg-warm-white border border-warm-beige shadow-paper p-6 flex flex-col justify-between text-left group">
              <div className="flex gap-5 items-center">
                <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 bg-warm border border-warm-beige">
                  <img
                    src={productsData[5].imageUrl}
                    alt={productsData[5].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <Badge variant="green" size="sm" className="mb-1">Circular Copier Paper</Badge>
                  <h4 className="font-display font-bold text-base text-charcoal">
                    {productsData[5].name}
                  </h4>
                  <p className="text-xs text-charcoal-400 mt-1 line-clamp-2">
                    {productsData[5].tagline}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-warm-beige flex items-center justify-between text-xs">
                <span className="text-charcoal-400 font-mono">75 GSM • 500 Sheets/Ream</span>
                <button
                  onClick={() => handleInquireProduct(productsData[5])}
                  className="font-bold text-forest hover:text-forest-700"
                >
                  Enquire →
                </button>
              </div>
            </div>

            {/* Plantable Seed Cards Banner */}
            <div className="p-6 rounded-3xl bg-charcoal text-warm-white border border-charcoal-600 flex items-center justify-between text-left">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-leaf block mb-1">
                  Plantable Seed Paper
                </span>
                <h4 className="font-display font-bold text-base text-warm-white">
                  Greeting Cards That Sprout Wildflowers
                </h4>
                <p className="text-xs text-warm-kraft/70 mt-1">
                  Embedded with sweet basil and marigold seeds.
                </p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleInquireProduct(productsData[7])}
                className="shrink-0"
              >
                Inquire
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visual Storytelling: The Material Metamorphosis */}
      <section className="py-20 sm:py-28 bg-warm-white border-y border-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Storytelling"
            title="The PaperX Transformation"
            description="Witness the direct journey from discarded campus exam scripts and office filings into high-grade stationery."
          />
          <MaterialMetamorphosis />
        </div>
      </section>

      {/* 5. Business Solutions — Strategic Indian Institutional Focus */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Strategic Institutional Tracks"
          title="Designed for Indian Campuses & Workplaces"
          description="Structured programs tailored to the compliance, logistics, and procurement needs of Indian colleges, schools, and corporate parks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Schools & Colleges */}
          <div className="p-7 rounded-3xl bg-warm-white border border-warm-beige shadow-paper flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest/10 border border-forest/15 flex items-center justify-center text-forest mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-charcoal">
                Colleges & Universities
              </h3>
              <p className="text-xs text-charcoal-500 mt-2 leading-relaxed">
                Semester exam booklet disposal, NAAC Criterion 7 environmental compliance reports, and customized student orientation notebooks.
              </p>
              <div className="mt-4 pt-3 border-t border-warm-beige text-xs text-charcoal-600 space-y-1.5 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-forest" /> Exam shredding certificates
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-forest" /> Closed-loop campus return
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-warm-beige">
              <Link to="/for-businesses" className="text-xs font-bold text-forest hover:underline">
                Campus Model & NAAC Alignment →
              </Link>
            </div>
          </div>

          {/* Card 2: Corporate Offices */}
          <div className="p-7 rounded-3xl bg-warm-white border border-warm-beige shadow-paper flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest/10 border border-forest/15 flex items-center justify-center text-forest mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-charcoal">
                Corporate Workspaces
              </h3>
              <p className="text-xs text-charcoal-500 mt-2 leading-relaxed">
                Scheduled confidential file recycling, 75 GSM recycled copier reams, plastic-free conference kits, and ESG auditable metrics.
              </p>
              <div className="mt-4 pt-3 border-t border-warm-beige text-xs text-charcoal-600 space-y-1.5 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-forest" /> Scheduled office pickup
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-forest" /> Corporate gifting sets
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-warm-beige">
              <Link to="/for-businesses" className="text-xs font-bold text-forest hover:underline">
                Corporate Procurement Model →
              </Link>
            </div>
          </div>

          {/* Card 3: Bulk Buyers */}
          <div className="p-7 rounded-3xl bg-warm-white border border-warm-beige shadow-paper flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest/10 border border-forest/15 flex items-center justify-center text-forest mb-4">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-charcoal">
                Bulk Buyers & Retail
              </h3>
              <p className="text-xs text-charcoal-500 mt-2 leading-relaxed">
                Heavy-duty recycled shopping bags, wholesale stationery cartons, and custom printed packaging for conscious retail brands.
              </p>
              <div className="mt-4 pt-3 border-t border-warm-beige text-xs text-charcoal-600 space-y-1.5 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-forest" /> Tiered wholesale quotation
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-forest" /> Custom soy ink branding
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-warm-beige">
              <Link to="/products" className="text-xs font-bold text-forest hover:underline">
                Browse Bulk SKUs →
              </Link>
            </div>
          </div>

          {/* Card 4: Households & Citizens */}
          <div className="p-7 rounded-3xl bg-warm-white border border-warm-beige shadow-paper flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest/10 border border-forest/15 flex items-center justify-center text-forest mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-charcoal">
                Communities & Homes
              </h3>
              <p className="text-xs text-charcoal-500 mt-2 leading-relaxed">
                Residential neighborhood newspaper drives, community drop-off centers, and plantable seed paper gifts for family celebrations.
              </p>
              <div className="mt-4 pt-3 border-t border-warm-beige text-xs text-charcoal-600 space-y-1.5 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-forest" /> Community drop-off days
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-forest" /> Plantable seed packs
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-warm-beige">
              <Link to="/contact" className="text-xs font-bold text-forest hover:underline">
                Get Involved →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Honest Impact Dashboard */}
      <section className="py-20 sm:py-28 bg-warm border-y border-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Target Impact Metrics"
            title="Measured Responsibility, Not Marketing Claims"
            description="Our Phase 1 operational capacity targets for Maharashtra. Clear, editable, and held to rigorous environmental standards."
          />
          <ImpactDashboard />
        </div>
      </section>

      {/* 7. Brand Story Editorial */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-warm-beige shadow-paper-lg">
              <img
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80"
                alt="Craftsman inspecting clean recycled paper sheets on wooden table"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-forest block">
              The PaperX Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal tracking-tight">
              Making Sustainable Paper Practical, Not Merely Symbolic.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-500 leading-relaxed">
              Every academic year, thousands of tons of evaluated answer sheets and project drafts are generated across Indian colleges. In parallel, corporate office archives discard massive volumes of invoices and printouts.
            </p>
            <p className="text-sm sm:text-base text-charcoal-500 leading-relaxed">
              PaperX exists to bridge this gap. True sustainability is achieved not through expensive green luxury, but by engineering practical, accessible, and commercially viable recycled stationery that schools and enterprises are eager to use every single day.
            </p>
            <div className="pt-2">
              <Button to="/about" variant="outline" size="md">
                Read Our Story & Values →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Conversion CTA */}
      <section className="py-20 sm:py-28 bg-forest text-warm-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-leaf px-3.5 py-1 rounded-full bg-forest-700 border border-forest-500">
            Join the Movement
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-warm-white tracking-tight">
            Let's make every sheet count.
          </h2>
          <p className="text-sm sm:text-lg text-warm-kraft/90 max-w-2xl mx-auto leading-relaxed">
            Whether you manage an engineering campus with tons of semester archives or an office team looking to switch to recycled desk supplies, we are ready to partner with you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              to="/for-businesses"
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Become a Partner
            </Button>
            <Button
              to="/contact"
              variant="white"
              size="lg"
            >
              Contact PaperX
            </Button>
          </div>
        </div>
      </section>

      {/* Product Quotation & Sample Kit Modal */}
      <ProductInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        selectedProduct={selectedProduct}
        allProducts={productsData}
      />
    </div>
  );
};
