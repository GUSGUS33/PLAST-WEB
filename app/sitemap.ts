import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { guides } from '@/data/guides';
import { products } from '@/data/products';
import { segments } from '@/data/segments';
import { solutions } from '@/data/solutions';
import { siteConfig } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/productos',
    ...Object.keys(products).map((slug) => `/productos/${slug}`),
    '/soluciones',
    ...Object.keys(segments).map((slug) => `/soluciones/${slug}`),
    ...Object.keys(solutions).map((slug) => `/soluciones/${slug}`),
    '/envios',
    ...Object.keys(cities).map((slug) => `/envios/${slug}`),
    '/envios/entrega-inmediata-discos-soporte',
    '/guias',
    ...Object.keys(guides).map((slug) => `/guias/${slug}`),
    '/nosotros',
    '/contacto',
    '/preguntas-frecuentes',
    '/privacidad',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
