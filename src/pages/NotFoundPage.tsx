import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, BookOpen, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useSEO } from '../hooks/useSEO';

export const NotFoundPage: React.FC = () => {
  useSEO({
    title: 'Page Not Found (404) — PaperX',
    description: 'The requested page could not be located. Explore PaperX sustainable paper products and recycling solutions.',
  });

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-forest/10 border border-forest/20 text-forest text-3xl font-display font-extrabold">
          404
        </div>

        <h1 className="text-3xl font-display font-extrabold text-charcoal tracking-tight">
          Page Not Located
        </h1>

        <p className="text-sm text-charcoal-500 leading-relaxed">
          The link you followed may have moved or no longer exists. Let's get you back on track to explore our circular paper products.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Button
            to="/"
            variant="primary"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Back to Home
          </Button>
          <Button
            to="/products"
            variant="outline"
            size="md"
            leftIcon={<BookOpen className="w-4 h-4" />}
          >
            Browse Products
          </Button>
        </div>
      </div>
    </div>
  );
};
