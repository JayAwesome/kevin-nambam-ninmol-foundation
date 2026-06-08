import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../dist-ssr/entry-server.js';
import {
  absoluteUrl,
  buildStructuredData,
  defaultShareImage,
  getSeoForPath,
  siteName,
  siteUrl,
  staticRoutes,
} from '../src/seo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const serverDistDir = path.join(projectRoot, 'dist-ssr');
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJsonForHtml(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function buildSeoHead(routePath) {
  const meta = getSeoForPath(routePath);
  const canonicalUrl = absoluteUrl(meta.path);
  const imageUrl = absoluteUrl(meta.image || defaultShareImage);
  const structuredData = buildStructuredData(routePath);

  return {
    title: meta.title,
    description: meta.description,
    tags: [
      `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
      `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
      '<meta property="og:type" content="website" />',
      `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
      `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
      `<meta property="og:site_name" content="${escapeHtml(siteName)}" />`,
      '<meta name="twitter:card" content="summary_large_image" />',
      `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
      `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
      `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
      `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
      `<script id="structured-data-ngo" type="application/ld+json">${escapeJsonForHtml(structuredData)}</script>`,
    ].join('\n    '),
  };
}

function routeOutputPath(routePath) {
  if (routePath === '/') {
    return path.join(distDir, 'index.html');
  }

  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
}

async function writeRoute(routePath) {
  const appHtml = render(routePath);
  const seo = buildSeoHead(routePath);
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    )
    .replace('</head>', `    ${seo.tags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outputPath = routeOutputPath(routePath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

async function writeSitemap() {
  const urls = staticRoutes
    .map(
      (routePath) => `  <url>
    <loc>${escapeHtml(absoluteUrl(routePath))}</loc>
  </url>`,
    )
    .join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  await writeFile(path.join(distDir, 'sitemap.xml'), sitemap);
}

async function writeRobotsTxt() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  await writeFile(path.join(distDir, 'robots.txt'), robots);
}

await Promise.all(staticRoutes.map((routePath) => writeRoute(routePath)));
await writeSitemap();
await writeRobotsTxt();
await rm(serverDistDir, { recursive: true, force: true });

console.log(`Pre-rendered ${staticRoutes.length} routes with SEO metadata.`);
