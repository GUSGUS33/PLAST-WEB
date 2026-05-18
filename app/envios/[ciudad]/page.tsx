import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Package, Truck, MapPin } from 'lucide-react';
import { cities } from '@/data/cities';
import { whatsappUrl } from '@/data/site';

export async function generateStaticParams() {
  return Object.keys(cities).map((ciudad) => ({ ciudad }));
}

type Props = {
  params: Promise<{ ciudad: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ciudad: slug } = await params;
  const city = cities[slug];
  
  if (!city) {
    return { title: 'Ciudad no encontrada' };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `/envios/${slug}`,
    },
  };
}

export default async function CiudadPage({ params }: Props) {
  const { ciudad: slug } = await params;
  const city = cities[slug];

  if (!city) {
    notFound();
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  const whatsappMessage = `Hola PLASTEM, busco cotización para envío a ${city.name} (${city.province}).`;
  const whatsappLink = whatsappUrl(whatsappMessage);

  return (
    <div className="bg-white">
      <script key="faqSchema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Localized */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Envíos a {city.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            {city.h1.split(city.name)[0]}<span className="text-blue-600 underline decoration-blue-200">{city.name}</span>{city.h1.split(city.name)[1]}
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Abastecemos a constructoras, arquitectos y corralones en {city.name} ({city.province}) con insumos plásticos de alta resistencia. Despachamos directo de fábrica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-4 px-8 bg-green-500 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg shadow-green-200">
              Consultar Envíos
            </Link>
            <Link href="/#calculador" className="flex items-center justify-center py-4 px-8 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      </section>

      {/* Logística */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">¿Cómo coordinamos el envío hacia {city.name}?</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-full h-fit text-blue-600"><Package className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">1. Armado del Pedido</h4>
                    <p className="text-slate-600 text-sm mt-1">Cotice por volumen. Preparamos y embalamos su mercadería de manera segura en nuestro predio.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-full h-fit text-blue-600"><Truck className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">2. Despacho al Expreso o Vía Cargo</h4>
                    <p className="text-slate-600 text-sm mt-1">Llevamos la mercadería sin cargo hasta el expreso (Vía Cargo u otros) situado en GBA/CABA. Alternativamente, su comisionista puede retirar directo de nuestra fábrica en GBA Sur.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-full h-fit text-blue-600"><MapPin className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">3. Recepción en {city.name}</h4>
                    <p className="text-slate-600 text-sm mt-1">Recibe su pedido en terminal o domicilio y abona el flete a la empresa de transporte en destino.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 bg-green-50 rounded-xl p-5 border border-green-100 inline-block w-full">
                <p className="text-sm text-green-800 font-medium"><strong>¡Aviso importante sobre el envío!</strong> Despachar discos soporte es económico dado que se cobra por bajo peso o volumen pequeño. Comprando directo de fábrica, el ahorro supera ampliamente cualquier costo logístico.</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Productos Destacados</h3>
              <div className="space-y-4">
                <Link href="/productos/disco-soporte-baldosones" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-colors shadow-sm">
                  <div className="font-bold text-slate-800 mb-1">Discos Soporte para Baldosones</div>
                  <div className="text-sm text-slate-500">Perfecto para armar terrazas transitables y pisos flotantes exterior. Evita morteros en obra seca.</div>
                </Link>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-8">Guías Útiles</h3>
              <div className="space-y-4">
                 <Link href="/guias/como-instalar-discos-soporte" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-colors shadow-sm">
                  <div className="font-bold text-slate-800 mb-1">Guía paso a paso</div>
                  <div className="text-sm text-slate-500">Aprenda a instalar una terraza transitable sin obra húmeda.</div>
                </Link>
                <Link href="/guias/discos-soporte-por-m2" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-500 transition-colors shadow-sm">
                   <div className="font-bold text-slate-800 mb-1">Fórmula de cálculo</div>
                   <div className="text-sm text-slate-500">Aprenda cómo calcular la cantidad de discos soporte por m2.</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Local */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Consultas Frecuentes de {city.name}</h2>
          <div className="space-y-6">
            {city.faq.map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h4 className="font-bold text-lg mb-2">{item.question}</h4>
                <p className="text-slate-400">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/#calculador" className="inline-block py-4 px-10 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Pedir Cotización Hoy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
