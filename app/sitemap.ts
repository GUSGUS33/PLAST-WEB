import { MetadataRoute } from 'next';
import { getPublishedGeoLocations } from '@/data/geo';
import { products } from '@/data/products';
import { solutions } from '@/data/solutions';
import { guides } from '@/data/guides';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://plastem.com.ar';
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/productos',
    ...Object.keys(products).map(slug => `/productos/${slug}`),
    '/soluciones',
    '/soluciones/para-arquitectos',
    '/soluciones/para-constructoras',
    '/soluciones/para-particulares',
    ...Object.keys(solutions).map(slug => `/soluciones/${slug}`),
    '/envios',
    '/envios/entrega-inmediata-discos-soporte',
  ];

  const geoRoutes = getPublishedGeoLocations().map(g => `/envios/${g.slug}`);

  const guideRoutes = [
    '/guias',
    ...Object.keys(guides).map(slug => `/guias/${slug}`),
    '/nosotros',
    '/contacto',
    '/preguntas-frecuentes',
    '/privacidad',
  ];

  // Remove duplicates if any
  const routes = Array.from(new Set([...staticRoutes, ...geoRoutes, ...guideRoutes]));

  return routes.map((route) => ({
    url: route === '' ? baseUrl : `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
