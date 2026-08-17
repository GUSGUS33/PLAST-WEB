import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.plastem.com.ar'),
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
    name: 'PLASTEM',
    description: 'Fábrica de discos soporte para baldosones y pisos flotantes exteriores.',
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.plastem.com.ar'}/logo.png`,
    '@id': process.env.NEXT_PUBLIC_SITE_URL || 'https://www.plastem.com.ar',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.plastem.com.ar',
    telephone: '+5491130213258',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Turdera / Temperley',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR'
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
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
