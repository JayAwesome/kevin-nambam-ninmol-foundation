import { programs, siteContact } from './siteData.js';

export const siteUrl = 'https://kevinnanbamninmolfoundation.com.ng';
export const siteName = 'Kevin NanBam Ninmol Foundation';
export const defaultMetaDescription =
  'Fear No Fear – Empowering Youth Through Sports, Education & Opportunity.';
export const defaultShareImage = '/media/founder-action.jpeg';

const baseRouteMeta = [
  {
    path: '/',
    title: 'Kevin NanBam Ninmol Foundation | Fear No Fear',
    description: defaultMetaDescription,
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
    path: '/leadership-governance',
    title: 'Leadership and Governance | Kevin NanBam Ninmol Foundation',
    description:
      'Meet the leadership structure, governance commitments, and accountability practices guiding the foundation.',
    image: '/media/founder-kids.jpeg',
  },
  {
    path: '/policies-safeguarding',
    title: 'Policies and Safeguarding | Kevin NanBam Ninmol Foundation',
    description:
      'Review child protection, code of conduct, transparency, accountability, and data privacy commitments.',
    image: '/media/community-group.jpeg',
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
    title: 'Donate | Kevin NanBam Ninmol Foundation',
    description:
      'Support Kevin NanBam Ninmol Foundation through NGN, USD, EUR, or GBP foundation bank accounts.',
    image: '/media/program-certificate.jpeg',
  },
  {
    path: '/news',
    title: 'News and Updates | Kevin NanBam Ninmol Foundation',
    description:
      'Read foundation news, activity updates, outreach stories, and reflections from youth development programs.',
    image: '/media/latest-outreach.jpeg',
  },
  {
    path: '/resources',
    title: 'Resources | Kevin NanBam Ninmol Foundation',
    description:
      'Access foundation reports, financial summaries, news updates, publications, and partner documents.',
    image: '/media/hero-community.jpeg',
  },
  {
    path: '/events',
    title: 'Events | Kevin NanBam Ninmol Foundation',
    description:
      'View upcoming clinics, workshops, outreach activities, and partner events connected to the foundation.',
    image: '/media/girls-training.jpeg',
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
        description: defaultMetaDescription,
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
          name: 'Kevin NanBam Ninmol',
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
