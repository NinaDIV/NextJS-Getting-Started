const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tu-dominio.com';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Bloquear rutas privadas
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Crawl-delay
Crawl-delay: 1
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, s-maxage=86400'
    },
  });
}
