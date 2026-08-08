import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://www.supremasite.com.br/og-image.jpg',
  schema
}) => {
  useEffect(() => {
    // Ensure title ends properly and is not truncated
    document.title = title.includes('Suprema Site Express') 
      ? title 
      : `${title} | Suprema Site Express`;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical link with trailing slash standardization
    const currentUrl = canonicalUrl || window.location.href.split('?')[0];
    const standardizedCanonical = currentUrl.endsWith('/') ? currentUrl : `${currentUrl}/`;
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', standardizedCanonical);

    // OG Tags
    const updateOgTag = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOgTag('og:title', document.title);
    updateOgTag('og:description', description);
    updateOgTag('og:url', standardizedCanonical);
    updateOgTag('og:type', ogType);
    updateOgTag('og:image', ogImage);

    // Dynamic JSON-LD injection
    const scriptId = 'dynamic-jsonld-schema';
    let existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [title, description, canonicalUrl, ogType, ogImage, schema]);

  return null;
};
