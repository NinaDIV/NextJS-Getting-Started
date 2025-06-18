// src/app/sitemap.xml/route.ts
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tu-dominio.com';

// Simulación de datos dinámicos (reemplaza con tu base de datos real)
const getDynamicRoutes = async () => {
  // Ejemplo: obtener productos de una API o base de datos
  // const products = await fetch('your-api/products').then(res => res.json());
  // return products.map(product => `/productos/${product.slug}`);
  
  // Por ahora, datos estáticos como ejemplo
  const products = [
    { slug: 'producto-1', updatedAt: '2024-12-01' },
    { slug: 'producto-2', updatedAt: '2024-12-05' },
    { slug: 'producto-3', updatedAt: '2024-12-10' }
  ];
  
  return products.map(product => ({
    url: `/productos/${product.slug}`,
    lastModified: product.updatedAt
  }));
};

export async function GET() {
  try {
    // Rutas estáticas con prioridades y frecuencias
    const staticRoutes = [
      {
        url: '/',
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 1.0
      },
      {
        url: '/about',
        lastModified: '2024-12-01',
        changeFrequency: 'monthly',
        priority: 0.8
      },
      {
        url: '/contacto',
        lastModified: '2024-12-01',
        changeFrequency: 'monthly',
        priority: 0.7
      },
      {
        url: '/productos-csr',
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9
      },
      {
        url: '/productos-api',
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9
      },
      {
        url: '/user-card',
        lastModified: '2024-12-01',
        changeFrequency: 'monthly',
        priority: 0.6
      },
      {
        url: '/tarea',
        lastModified: '2024-12-01',
        changeFrequency: 'monthly',
        priority: 0.5
      }
    ];

    // Obtener rutas dinámicas
    const dynamicRoutes = await getDynamicRoutes();
    
    // Combinar todas las rutas
    const allRoutes = [
      ...staticRoutes,
      ...dynamicRoutes.map(route => ({
        url: route.url,
        lastModified: route.lastModified,
        changeFrequency: 'weekly',
        priority: 0.8
      }))
    ];

    // Generar XML del sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    return `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate'
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}

// Opcional: También puedes crear un endpoint para robots.txt
// src/app/robots.txt/route.ts
/*
export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
*/