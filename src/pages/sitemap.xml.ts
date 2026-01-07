import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.href || 'https://canadiancubesatconference.ca/';
  
  // Define your pages with their priorities and change frequencies
  const pages = [
    { url: '', priority: '1.0', changefreq: 'weekly' }, // home
    { url: 'en', priority: '1.0', changefreq: 'weekly' }, // en home
    { url: 'fr', priority: '1.0', changefreq: 'weekly' }, // fr home
    { url: 'en/team', priority: '0.8', changefreq: 'monthly' },
    { url: 'fr/team', priority: '0.8', changefreq: 'monthly' },
    { url: 'en/contact', priority: '0.7', changefreq: 'monthly' },
    { url: 'fr/contact', priority: '0.7', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${new URL(page.url, siteUrl).href}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
