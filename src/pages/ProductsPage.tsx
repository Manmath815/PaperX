import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, Filter, Sparkles, CheckCircle2, PackageCheck, 
  Eye, ArrowRight, ShieldCheck, FileSpreadsheet, Box 
} from 'lucide-react';
import { productsData } from '../config/productsData';
import { Product, ProductCategory } from '../types';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { ProductInquiryModal } from '../components/forms/ProductInquiryModal';
import { useSEO } from '../hooks/useSEO';

export const ProductsPage: React.FC = () => {
  useSEO({
    title: 'Recycled Paper Products & Sustainable Stationery Catalog',
    description: 'Browse PaperX recycled notebooks, kraft carry bags, 75 GSM copier paper, plantable seed cards, and corporate office stationery in India.',
    canonicalPath: '/products',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as ProductCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [selectedFilterTag, setSelectedFilterTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeProductForQuote, setActiveProductForQuote] = useState<Product | null>(null);
  
  // Quick View / Deep Spec modal
  const [specProduct, setSpecProduct] = useState<Product | null>(null);

  // Sync category param if URL changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'notebooks', label: 'Notebooks & Journals' },
    { id: 'bags', label: 'Paper Carry Bags' },
    { id: 'printing', label: 'Copier & Writing Paper' },
    { id: 'packaging', label: 'Gift Cards & Packaging' },
    { id: 'stationery', label: 'Office Desk Supplies' },
  ];

  const filterTags = [
    { id: 'all', label: 'All Formats' },
    { id: 'layflat', label: '180° Lay-Flat' },
    { id: 'kraft', label: 'Natural Kraft' },
    { id: 'office', label: 'Bulk Office Reams' },
    { id: 'seed', label: 'Plantable Seed Paper' },
  ];

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.some(s => s.value.toLowerCase().includes(searchQuery.toLowerCase()));
      
      let matchesTag = true;
      if (selectedFilterTag === 'layflat') {
        matchesTag = product.specs.some(s => s.value.toLowerCase().includes('lay-flat') || s.value.toLowerCase().includes('twin-wire'));
      } else if (selectedFilterTag === 'kraft') {
        matchesTag = product.category === 'bags' || product.name.toLowerCase().includes('kraft');
      } else if (selectedFilterTag === 'office') {
        matchesTag = product.category === 'printing' || product.category === 'stationery';
      } else if (selectedFilterTag === 'seed') {
        matchesTag = product.name.toLowerCase().includes('seed');
      }

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [selectedCategory, searchQuery, selectedFilterTag]);

  const handleOpenQuote = (product: Product) => {
    setActiveProductForQuote(product);
    setQuoteModalOpen(true);
  };

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span className="text-xs font-bold uppercase tracking-widest text-forest">
              SUSTAINABLE STATIONERY CATALOGUE
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            Crafted from Discarded Paper. Refined for Daily Life.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-charcoal-500 leading-relaxed">
            Every notebook, copier ream, and retail bag is manufactured from post-consumer recovered paper. Designed for campus bookstores, corporate offices, and conscious stationery connoisseurs.
          </p>

          {/* Pricing Policy Box */}
          <div className="mt-5 p-4 rounded-2xl bg-forest/5 border border-forest/15 flex items-start gap-3.5 text-xs text-charcoal-600">
            <PackageCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-forest block">Direct-From-Mill Institutional Quotations:</span>
              Pricing is tiered based on volume batches, campus co-branding, and delivery locations across India. We provide formal GST invoices and digital test certificates with every batch.
            </div>
          </div>
        </div>

        {/* Primary Categories Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-forest text-warm-white shadow-paper ring-1 ring-forest'
                  : 'bg-warm-white border border-warm-beige text-charcoal-600 hover:bg-warm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Secondary Filter & Search Control Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-warm-beige">
          {/* Quick Attribute Tags */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 text-xs">
            <span className="text-charcoal-400 font-bold uppercase tracking-wider text-[10px] mr-1 hidden sm:inline">
              Filter by:
            </span>
            {filterTags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedFilterTag(tag.id)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedFilterTag === tag.id
                    ? 'bg-warm-beige text-charcoal font-bold border border-warm-kraft'
                    : 'text-charcoal-500 hover:bg-warm'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, GSM, size, binding..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-warm-white border border-warm-beige text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-charcoal"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-warm-white border border-warm-beige p-8">
            <Filter className="w-10 h-10 text-charcoal-300 mx-auto mb-3" />
            <h3 className="text-lg font-display font-bold text-charcoal">
              No matching stationery items found
            </h3>
            <p className="text-xs text-charcoal-400 mt-1 max-w-sm mx-auto">
              Try resetting your search query or switching to "All Categories" to view our complete range.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedFilterTag('all'); }}
              className="mt-4"
            >
              Reset All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl bg-warm-white border border-warm-beige shadow-paper hover:shadow-paper-lg transition-all duration-300 flex flex-col overflow-hidden group text-left"
              >
                {/* Product Photo Showcase */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-warm">
                  <img
                    src={product.imageUrl}
                    alt={product.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-warm-white/90 backdrop-blur-sm text-forest-900 text-[11px] font-bold border border-warm-beige/80 shadow-sm">
                      {product.categoryLabel}
                    </span>
                  </div>

                  {/* Material Accent Tag */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-charcoal/80 backdrop-blur-sm text-warm-white text-[10px] font-medium tracking-wide">
                      {product.materialHighlight}
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-charcoal group-hover:text-forest transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-semibold text-forest mt-1">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-charcoal-500 mt-2.5 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Compact Specs Row */}
                    <div className="mt-4 p-3 rounded-2xl bg-warm/80 border border-warm-beige/80 space-y-1.5 text-[11px]">
                      {product.specs.slice(0, 3).map((spec, sIdx) => (
                        <div key={sIdx} className="flex justify-between items-center text-charcoal-500">
                          <span className="text-charcoal-400 font-mono text-[10px] uppercase">{spec.label}</span>
                          <span className="font-semibold text-charcoal text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-3 border-t border-warm-beige flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSpecProduct(product)}
                      className="inline-flex items-center gap-1.5 text-xs text-charcoal-500 hover:text-forest font-semibold transition-colors"
                      aria-label={`View full specifications for ${product.name}`}
                    >
                      <Eye className="w-3.5 h-3.5" /> Full Specs
                    </button>

                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleOpenQuote(product)}
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Institutional Sample Kit & Gifting Pack Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-charcoal text-warm-white border border-charcoal-700 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-leaf block">
              Evaluation & Material Testing
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-warm-white">
              Order a Comprehensive Institutional Sample Kit
            </h2>
            <p className="text-xs sm:text-sm text-warm-kraft/80 leading-relaxed">
              We send college department heads and enterprise facilities managers a physical evaluation box containing 80 GSM journal samples, 75 GSM copier sheets, seed cards, and 140 GSM carry bags to test paper quality firsthand.
            </p>
          </div>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              setActiveProductForQuote(productsData[9]); // Kit
              setQuoteModalOpen(true);
            }}
            className="shrink-0"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Request Institutional Kit
          </Button>
        </div>
      </div>

      {/* Full Product Specifications Modal (Quick View) */}
      {specProduct && (
        <Modal
          isOpen={Boolean(specProduct)}
          onClose={() => setSpecProduct(null)}
          title={specProduct.name}
          description={specProduct.categoryLabel}
          maxWidth="lg"
        >
          <div className="space-y-6 text-left">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-warm border border-warm-beige">
              <img
                src={specProduct.imageUrl}
                alt={specProduct.altText}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h4 className="font-display font-bold text-base text-charcoal">
                About this SKU
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1 leading-relaxed">
                {specProduct.longDescription || specProduct.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-warm border border-warm-beige space-y-2 text-xs">
              <span className="font-bold text-charcoal block uppercase tracking-wider text-[10px]">
                Complete Technical Specifications
              </span>
              <div className="divide-y divide-warm-beige">
                {specProduct.specs.map((spec, i) => (
                  <div key={i} className="py-2 flex justify-between">
                    <span className="text-charcoal-400">{spec.label}:</span>
                    <span className="font-semibold text-charcoal">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-charcoal-400">
                MOQ: {specProduct.minOrderQuantity || 'Direct Quotation'}
              </span>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const p = specProduct;
                  setSpecProduct(null);
                  handleOpenQuote(p);
                }}
              >
                Request Quotation for this SKU
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Product Quotation & Sample Kit Modal */}
      <ProductInquiryModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedProduct={activeProductForQuote}
        allProducts={productsData}
      />
    </div>
  );
};
