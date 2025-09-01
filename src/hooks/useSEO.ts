import { useEffect } from 'react';

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export const useSEO = (options: SEOOptions) => {
  useEffect(() => {
    // Update document title
    if (options.title) {
      document.title = options.title;
    }

    // Update meta description
    if (options.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', options.description);
      }
    }

    // Update meta keywords
    if (options.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', options.keywords);
    }

    // Update Open Graph title
    if (options.ogTitle) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', options.ogTitle);
      }
    }

    // Update Open Graph description
    if (options.ogDescription) {
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', options.ogDescription);
      }
    }

    // Update canonical URL
    if (options.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', options.canonical);
    }
  }, [options]);
};