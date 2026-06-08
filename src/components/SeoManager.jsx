import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { absoluteUrl, buildStructuredData, defaultShareImage, getSeoForPath, siteName } from '../seo';

function setMetaAttribute(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
}

function setStructuredData(data) {
  let script = document.getElementById('structured-data-ngo');

  if (!script) {
    script = document.createElement('script');
    script.id = 'structured-data-ngo';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const meta = getSeoForPath(location.pathname);
    const canonicalUrl = absoluteUrl(meta.path);
    const imageUrl = absoluteUrl(meta.image || defaultShareImage);

    document.title = meta.title;
    setMetaAttribute('meta[name="description"]', {
      name: 'description',
      content: meta.description,
    });
    setMetaAttribute('meta[property="og:title"]', {
      property: 'og:title',
      content: meta.title,
    });
    setMetaAttribute('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.description,
    });
    setMetaAttribute('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    setMetaAttribute('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    setMetaAttribute('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    });
    setMetaAttribute('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: siteName,
    });
    setMetaAttribute('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    setMetaAttribute('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: meta.title,
    });
    setMetaAttribute('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: meta.description,
    });
    setMetaAttribute('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    });
    setCanonical(canonicalUrl);
    setStructuredData(buildStructuredData(location.pathname));
  }, [location.pathname]);

  return null;
}

export default SeoManager;
