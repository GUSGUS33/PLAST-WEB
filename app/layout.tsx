import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://plastem.com.ar'),
  title: {
    default: 'PLASTEM | Discos Soporte para Baldosones y Pisos Flotantes',
    template: '%s | PLASTEM',
  },
  description: 'Fábrica líder en Argentina de discos soporte para baldosones, pisos flotantes exteriores y terrazas transitables. Venta directa de fábrica con envío a todo el país.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'discos soporte para baldosones',
    'pisos flotantes exteriores',
    'plots para baldosas',
    'terrazas transitables',
    'colocación baldosones en seco',
    'fábrica de discos soporte',
    'plastem',
    'buches plásticos',
    'soportes para losetas',
    'terrazas sin filtraciones'
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://plastem.com.ar',
    siteName: 'PLASTEM',
    title: 'PLASTEM | Discos Soporte para Baldosones y Pisos Flotantes',
    description: 'Fábrica líder en Argentina de discos soporte para baldosones, pisos flotantes exteriores y terrazas transitables. Venta directa de fábrica con envío a todo el país.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PLASTEM | Discos Soporte para Baldosones y Pisos Flotantes',
    description: 'Fábrica líder en Argentina de discos soporte para baldosones, pisos flotantes exteriores y terrazas transitables. Venta directa de fábrica con envío a todo el país.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://plastem.com.ar';

  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PLASTEM',
    description: 'Fábrica líder en Argentina de discos soporte para baldosones y pisos flotantes exteriores.',
    image: `${siteUrl}/logo.png`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+5491130213258',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Turdera / Temperley',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -34.7865,
      longitude: -58.3985
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '08:00',
      closes: '18:00'
    }
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PLASTEM',
    url: siteUrl,
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          key="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          key="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
