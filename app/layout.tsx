import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig, absoluteUrl } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'PLASTEM | Discos Soporte para Baldosones y Pisos Flotantes',
    template: '%s | PLASTEM',
  },
  description: 'Fábrica líder en Argentina de discos soporte para baldosones, pisos flotantes exteriores y terrazas transitables. Venta directa de fábrica con envío a todo el país.',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    image: absoluteUrl('/logo.png'),
    '@id': siteConfig.siteUrl,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone.e164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.location.streetAddress,
      addressLocality: siteConfig.location.locality,
      addressRegion: siteConfig.location.region,
      postalCode: siteConfig.location.postalCode,
      addressCountry: siteConfig.location.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.latitude,
      longitude: siteConfig.location.longitude
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: siteConfig.openingHours.days,
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Script
          id="schema-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
