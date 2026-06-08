import { programs, siteContact } from './siteData.js';

export const siteUrl = 'https://kevinnanbamninmolfoundation.com.ng';
export const siteName = 'Kevin Nambam Ninmol Foundation';
export const defaultMetaDescription =
  'Fear No Fear – Empowering Youth Through Sports, Education & Opportunity.';
export const defaultShareImage = '/media/founder-action.jpeg';
const cleanMetaDescription =
  'Fear No Fear - Empowering Youth Through Sports, Education & Opportunity.';

const baseRouteMeta = [
  {
    path: '/',
    title: 'Kevin NanBam Ninmol Foundation | Fear No Fear',
    description: cleanMetaDescription,
    image: '/media/founder-action.jpeg',
  },
  {
    path: '/about',
    title: 'About Kevin NanBam Ninmol Foundation',
    description:
      'Read the founder story, mission, vision, values, and youth development commitment behind Kevin NanBam Ninmol Foundation.',
    image: '/media/founder-national.jpeg',
  },
  {
    path: '/programs',
    title: 'Programs | Sports, Education and Opportunity',
    description:
      'Explore the foundation programs across sports, education support, mentorship, life skills, and opportunity creation.',
    image: '/media/hero-court.jpeg',
  },
  {
    path: '/impact',
    title: 'Impact | Kevin NanBam Ninmol Foundation',
    description:
      'See measurable impact, activity photos, case stories, and evidence of the foundation’s work with youth and communities.',
    image: '/media/community-group.jpeg',
  },
  {
    path: '/get-involved',
    title: 'Get Involved | Kevin NanBam Ninmol Foundation',
    description:
      'Volunteer, partner, sponsor, or support youth development initiatives through Kevin NanBam Ninmol Foundation.',
    image: '/media/outreach-school.jpeg',
  },
  {
    path: '/donate',
    title: 'Donate to Kevin Nambam Ninmol Foundation',
    description:
      'Use the GTBank NGN, USD, EUR, and GBP accounts to support Kevin Nambam Ninmol Foundation.',
    image: '/media/program-certificate.jpeg',
  },
  {
    path: '/contact',
    title: 'Contact Kevin NanBam Ninmol Foundation',
    description:
      'Contact Kevin NanBam Ninmol Foundation by email, phone, WhatsApp, or office address in Jos, Plateau State.',
    image: '/media/community-group.jpeg',
  },
];

const programRouteMeta = programs.map((program) => ({
  path: `/programs/${program.slug}`,
  title: `${program.title} | Kevin NanBam Ninmol Foundation`,
  description: program.summary || program.description,
  image: program.image || defaultShareImage,
}));

export const routeMeta = [...baseRouteMeta, ...programRouteMeta];
export const staticRoutes = routeMeta.map((route) => route.path);

export function normalizePath(pathname = '/') {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.replace(/\/$/, '');
}

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) {
    return path;
  }

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getSeoForPath(pathname = '/') {
  const normalizedPath = normalizePath(pathname);
  return routeMeta.find((route) => route.path === normalizedPath) || routeMeta[0];
}

export function buildStructuredData(pathname = '/') {
  const meta = getSeoForPath(pathname);
  const canonicalUrl = absoluteUrl(meta.path);
  const sameAs = Object.values(siteContact.socialLinks || {}).filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NGO',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        alternateName: 'Fear No Fear',
        url: siteUrl,
        description: cleanMetaDescription,
        email: siteContact.email,
        telephone: siteContact.phone,
        foundingLocation: 'Jos, Plateau State, Nigeria',
        areaServed: ['Nigeria', 'Plateau State', 'Youth and communities'],
        sameAs,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Peter Anikwe Estate, Block B, Flat 3, Rantya',
          addressLocality: 'Jos',
          addressRegion: 'Plateau State',
          addressCountry: 'NG',
        },
        founder: {
          '@type': 'Person',
          name: 'Kevin Nambam Ninmol',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Foundation enquiries',
          email: siteContact.email,
          telephone: siteContact.phone,
          availableLanguage: ['English', 'French', 'Hausa', 'Yoruba', 'Igbo'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: meta.title,
        description: meta.description,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#organization`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: absoluteUrl(meta.image || defaultShareImage),
        },
      },
    ],
  };
}
