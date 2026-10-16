import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
}

/**
 * Updates document head metadata dynamically for each page
 */
export function useSEO({ title, description, canonicalPath = '', ogType = 'website' }: SEOProps) {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title.includes('PaperX') ? title : `${title} | PaperX — Sustainable Paper & Circular Recycling`;
    document.title = formattedTitle;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', formattedTitle);
    }

    // 4. Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // 5. Open Graph Type
    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute('content', ogType);
    }

    // 6. Canonical link
    const baseUrl = 'https://paperx.in';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${baseUrl}${canonicalPath}`);
  }, [title, description, canonicalPath, ogType]);
}
