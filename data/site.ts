const fallbackSiteUrl = 'https://www.plastem.com.ar';

export const siteConfig = {
  name: 'PLASTEM',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl,
  description: 'Fábrica de discos soporte para baldosones y pisos flotantes exteriores.',
  phone: {
    e164: '+5491130213258',
    display: '+54 9 11 3021-3258',
    whatsapp: '5491130213258',
  },
  email: 'ventas@plastem.com.ar',
  location: {
    streetAddress: 'Parque Industrial',
    locality: 'Temperley',
    area: 'Turdera / Temperley',
    region: 'Buenos Aires',
    postalCode: '1834',
    country: 'AR',
    display: 'Turdera / Temperley, Buenos Aires, Argentina',
    latitude: -34.7725,
    longitude: -58.397,
  },
  openingHours: {
    display: 'Lunes a Viernes de 8:00 a 17:00 hs',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
} as const;

export function whatsappUrl(message?: string) {
  const baseUrl = `https://wa.me/${siteConfig.phone.whatsapp}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}
