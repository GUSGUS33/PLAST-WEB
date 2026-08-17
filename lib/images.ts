import { imageManifest, ImageMetadata } from '@/data/image-manifest';

export type ImageCategory = 'general' | 'productos' | 'soluciones' | 'guias' | 'envios';

/**
 * Obtiene los metadatos y la ruta de la imagen según categoría y slug.
 * Si no está registrada en el manifest, genera una estructura por defecto basada en convenciones.
 */
export function getPageImageData(category: ImageCategory, slug: string): ImageMetadata {
  const categoryMap = imageManifest[category];
  
  if (categoryMap && categoryMap[slug]) {
    return categoryMap[slug];
  }

  // Convención por defecto si no está explícitamente en el manifest
  const formattedTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    src: `/imagenes/${category}/${slug}.jpg`,
    alt: `PLASTEM - ${formattedTitle}`,
    title: formattedTitle,
    fallbackSvgTitle: `PLASTEM | ${formattedTitle}`,
    aspectRatio: category === 'productos' ? '1/1' : '16/9',
  };
}

/**
 * Genera un SVG Placeholder en Data URI con la identidad visual de PLASTEM (#1E3A8A / #0284C7).
 * Sirve como fallback instantáneo y elegante cuando el usuario aún no ha subido el archivo físico .jpg / .png.
 */
export function generatePlastemPlaceholderSvg(title: string, subtitle: string = 'PLASTEM ARGENTINA'): string {
  const cleanTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const cleanSubtitle = subtitle.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#1e3a8a" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1" />
    </pattern>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg)" />
  <rect width="100%" height="100%" fill="url(#grid)" />

  <!-- Abstract Geometry representing Discos Soporte / Precision -->
  <circle cx="600" cy="337" r="220" stroke="#0284c7" stroke-width="2" stroke-opacity="0.2" fill="none" />
  <circle cx="600" cy="337" r="160" stroke="#0284c7" stroke-width="1.5" stroke-opacity="0.3" fill="none" />
  <circle cx="600" cy="337" r="100" stroke="#38bdf8" stroke-width="2" stroke-opacity="0.4" fill="none" stroke-dasharray="8 8" />

  <!-- Center Logo Badge -->
  <rect x="550" y="160" width="100" height="100" rx="20" fill="#0284c7" />
  <text x="600" y="232" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" fill="#ffffff" text-anchor="middle">P</text>

  <!-- Main Title -->
  <text x="600" y="380" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="42" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">
    ${cleanTitle}
  </text>

  <!-- Subtitle Badge -->
  <rect x="420" y="420" width="360" height="36" rx="18" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.2" />
  <text x="600" y="443" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="14" fill="#38bdf8" text-anchor="middle" letter-spacing="2">
    ${cleanSubtitle.toUpperCase()}
  </text>
  
  <text x="600" y="590" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="14" fill="#94a3b8" text-anchor="middle">
    www.plastem.com.ar • Envíos a todo el país
  </text>
</svg>
  `.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
