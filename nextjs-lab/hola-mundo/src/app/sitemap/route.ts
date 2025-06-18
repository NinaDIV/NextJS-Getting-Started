// src/app/sitemap/route.ts

const BASE_URL = 'http://172.23.4.197:3000'; // Cambia por tu dominio real

export async function GET() {
  const urls = ['/', '/about', '/contacto', '/products', '/tarea', '/Users'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        return `<url><loc>${BASE_URL}${url}</loc></url>`;
      })
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
