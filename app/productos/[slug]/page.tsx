import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle2, ChevronRight, HelpCircle, Package, Settings, Wrench, ArrowRight, ShieldCheck, Truck, Waves, Grid3X3, Layers, Sun, MousePointer2, Calculator, Info } from 'lucide-react';
import { products } from '@/data/products';
import { siteConfig } from '@/data/site';
import { ProductCalculator } from '@/components/ProductCalculator';
import { DynamicImage } from '@/components/DynamicImage';

import { InternalLinksSection } from '@/components/InternalLinksSection';

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  
  if (!product) {
    return { title: 'Producto no encontrado' };
  }
  
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `/productos/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products[slug];
  
  if (!product) {
    notFound();
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: 'PLASTEM'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
      offerCount: '1'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  const basePhone = "5491130213258";
  const whatsappCotizar = `https://wa.me/${basePhone}?text=${encodeURIComponent(`Hola, quiero cotizar ${product.name} y calcular cantidades.`)}`;
  const whatsappEnvio = `https://wa.me/${basePhone}?text=${encodeURIComponent(`Hola, quisiera saber el costo de envío de ${product.name} a mi ciudad.`)}`;
  const whatsappGeneral = `https://wa.me/${basePhone}?text=${encodeURIComponent(product.whatsappPreset)}`;

  if (slug === 'disco-soporte-baldosones') {
    return (
      <div className="bg-white">
        <script key="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <script key="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* 1. HERO DE VENTA */}
        <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <Grid3X3 className="w-full h-full text-blue-500" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
                  <Package className="w-4 h-4" /> Fabricación Propia
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase italic tracking-tighter">
                  Discos Soporte para <span className="text-blue-500">Baldosones</span> y Pisos Flotantes
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-8 font-medium leading-relaxed">
                  Apto para terrazas, patios y techos transitables. Instalación en seco, sin adhesivos, sin perforar y sin dañar la membrana.
                </p>
                
                <ul className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {[
                    { icon: <Layers className="w-5 h-5 text-blue-400" />, text: 'Altura 12 mm' },
                    { icon: <Grid3X3 className="w-5 h-5 text-blue-400" />, text: 'Junta 5 mm' },
                    { icon: <Waves className="w-5 h-5 text-blue-400" />, text: 'Diámetro 146 mm' },
                    { icon: <ShieldCheck className="w-5 h-5 text-blue-400" />, text: 'Polipropileno reciclable' },
                    { icon: <Sun className="w-5 h-5 text-blue-400" />, text: 'Colores negro y gris' },
                    { icon: <Truck className="w-5 h-5 text-blue-400" />, text: 'Stock inmediato' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-100 font-bold text-sm md:text-base uppercase tracking-tight">
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="#calculador-seccion" className="flex items-center justify-center py-5 px-10 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/40 group">
                    Calcular y presupuestar
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href={whatsappGeneral} target="_blank" className="flex items-center justify-center py-5 px-10 bg-green-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-green-500/40">
                    Consultar por WhatsApp
                  </Link>
                </div>
                <p className="text-slate-400 text-sm italic flex items-center gap-2">
                  <Info className="w-4 h-4" /> Te ayudamos a calcular la cantidad exacta según tus m² y medida de baldosón.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-800">
                  <DynamicImage category="productos" slug={slug} priority enableZoom showCaption aspectRatio="1/1" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-xl uppercase font-black text-xl italic leading-none">
                    ALTA <br/> RESISTENCIA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BLOQUE DE CONFIANZA */}
        <div className="bg-blue-600 text-white py-6 border-y border-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center divide-x divide-blue-500">
              <div className="px-2 group cursor-default">
                <p className="font-black italic uppercase text-lg group-hover:scale-110 transition-transform tracking-tight leading-none mb-1">Desde 1985</p>
                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Trayectoria Real</p>
              </div>
              <div className="px-2 group cursor-default border-none md:border-solid">
                <p className="font-black italic uppercase text-lg group-hover:scale-110 transition-transform tracking-tight leading-none mb-1">Fabricación</p>
                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Propia en Argentina</p>
              </div>
              <div className="px-2 group cursor-default">
                <p className="font-black italic uppercase text-lg group-hover:scale-110 transition-transform tracking-tight leading-none mb-1">Stock</p>
                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Inmediato Hoy</p>
              </div>
              <div className="px-2 group cursor-default">
                <p className="font-black italic uppercase text-lg group-hover:scale-110 transition-transform tracking-tight leading-none mb-1">Envíos</p>
                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">A todo el país</p>
              </div>
              <div className="px-2 group cursor-default border-none md:border-solid col-span-2 md:col-span-1 border-t md:border-t-0 pt-4 md:pt-0">
                <p className="font-black italic uppercase text-lg group-hover:scale-110 transition-transform tracking-tight leading-none mb-1 text-blue-100">Atención</p>
                <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Personalizada</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. POR QUÉ USAR DISCOS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tight mb-6 leading-none">
                Por qué elegir el sistema <span className="text-blue-600">Piso Flotante</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Olvidate de los contrapisos húmedos y las reparaciones costosas. El sistema de pisos elevados con discos soporte es la evolución en construcción en seco para exteriores.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Layers className="w-10 h-10 text-blue-600" />, title: 'Elevan el piso', desc: 'Separan el baldosón de la base, permitiendo que el agua corra libremente por debajo hacia los desagües.' },
                { icon: <Waves className="w-10 h-10 text-blue-600" />, title: 'Cámara de aire', desc: 'Generan una ventilación constante que evita el estancamiento de calor y humedad en la losa.' },
                { icon: <ShieldCheck className="w-10 h-10 text-blue-600" />, title: 'Protegen la membrana', desc: 'Evitan el punzonamiento y la degradación por rayos UV al mantener la impermeableización a la sombra.' },
                { icon: <Sun className="w-10 h-10 text-blue-600" />, title: 'Aislamiento Térmico', desc: 'Mejoran drásticamente la temperatura de los ambientes inferiores al reducir la radiación directa sobre la losa.' },
                { icon: <Wrench className="w-10 h-10 text-blue-600" />, title: 'Armado en seco', desc: 'Sin adhesivos ni mezclas. Se instalan apoyados, lo que permite el armado en tiempo récord.' },
                { icon: <MousePointer2 className="w-10 h-10 text-blue-600" />, title: 'Inspeccionable', desc: 'Cualquier baldosón se puede levantar a mano para limpiar desagües o inspeccionar la membrana.' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-400 transition-all hover:shadow-xl group">
                  <div className="mb-6 bg-white p-4 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3 leading-none">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. COMPATIBILIDAD */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-black uppercase italic text-blue-400 mb-8 border-b border-slate-700 pb-4 leading-none">Baldosones Compatibles</h3>
                <ul className="space-y-4">
                  {['30x30 cm', '40x40 cm', '30x60 cm', '40x60 cm', '50x60 cm', '60x60 cm'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-lg">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-black uppercase italic text-blue-400 mb-8 border-b border-slate-700 pb-4 leading-none">Superficies</h3>
                <ul className="space-y-4">
                  {['Membrana asfáltica', 'Membrana líquida', 'Geotextil', 'Carpeta existente', 'Impermeabilizantes'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-lg text-slate-200">
                      <ShieldCheck className="w-6 h-6 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-black uppercase italic text-blue-400 mb-8 border-b border-slate-700 pb-4 leading-none">Usos Principales</h3>
                <ul className="space-y-4">
                  {['Terrazas Transitables', 'Techos y Azoteas', 'Patios y Balcones', 'Pisos Elevados', 'Decks Autoportantes'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-lg text-slate-200">
                      <Waves className="w-6 h-6 text-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CÓMO SE COLOCAN */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tight mb-16 text-center leading-none">
              Instalación <span className="text-blue-600">Paso a Paso</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              <div className="hidden lg:block absolute top-12 inset-x-32 h-0.5 bg-slate-100 -z-10"></div>
              {[
                { step: '01', title: 'Colocación', desc: 'Se ubican los discos directamente sobre la membrana o carpeta base.' },
                { step: '02', title: 'Apoyo', desc: 'Se apoyan los baldosones sobre las aletas del disco para una junta de 5mm.' },
                { step: '03', title: 'Elevación', desc: 'Se genera automáticamente la cámara de aire técnica de 12 mm.' },
                { step: '04', title: 'Listo', desc: 'El piso queda transitable, perfectamente seco y 100% inspeccionable.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm relative pt-12">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black italic shadow-xl shadow-blue-600/30">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3 leading-none">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Link href={whatsappGeneral} target="_blank" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">
                Quiero asesoramiento para instalar
              </Link>
            </div>
          </div>
        </section>

        {/* 6. CÁLCULO RÁPIDO */}
        <section id="calculador-seccion" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tight mb-4 leading-none">
                Calculá cuántos <span className="text-blue-600">discos necesitás</span>
              </h2>
              <p className="text-slate-600 font-medium">Obtené una estimación precisa y recibí un presupuesto formal por WhatsApp.</p>
            </div>
            <ProductCalculator theme="light" />
          </div>
        </section>

        {/* 9. COLORES DISPONIBLES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tight mb-8 leading-none">
                  Disponibles en <span className="text-slate-400">Gris</span> y <span className="text-slate-800">Negro</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-16 h-16 rounded-3xl bg-slate-800 shrink-0 shadow-lg shadow-black/20"></div>
                    <div>
                      <h4 className="font-black uppercase italic text-slate-900">Color Negro</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">Ideal para integración discreta. Genera un contraste estético elegante y queda prácticamente invisible en las juntas.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-16 h-16 rounded-3xl bg-slate-400 shrink-0 shadow-lg shadow-slate-400/20"></div>
                    <div>
                      <h4 className="font-black uppercase italic text-slate-900">Color Gris</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">Perfecto para baldosones de hormigón claro, grises o superficies de color neutro, logrando una estética unificada.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
                <DynamicImage category="general" slug="fabrica-plastem" aspectRatio="16/9" enableZoom showCaption />
              </div>
            </div>
          </div>
        </section>

        {/* 7. OBJECIONES (FAQ) */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tight mb-16 text-center leading-none">
              Preguntas antes de <span className="text-blue-500">comprar</span>
            </h2>
            <div className="space-y-4">
              {product.faq.map((item, i) => (
                <div key={i} className="group bg-slate-800/50 rounded-3xl border border-slate-700 p-8 hover:border-blue-500 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-600/20 text-blue-400 p-2 rounded-xl">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-black text-xl text-slate-100 uppercase italic tracking-tight leading-none">{item.question}</h3>
                  </div>
                  <p className="text-slate-400 font-medium leading-relaxed pl-14">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. ENVÍOS */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 -mr-20 -mt-20 rounded-full"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-none">
                    Envíos a <span className="text-blue-600">todo el país</span>
                  </h2>
                  <div className="space-y-6 mb-10 text-lg text-slate-600 font-medium">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Truck className="w-6 h-6" /></div>
                      <span>Coordinamos el transporte con cada cliente.</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Package className="w-6 h-6" /></div>
                      <span>
                        {siteConfig.globalLogisticsOptions?.viaCargo?.enabled
                          ? `Puede consultarse ${siteConfig.globalLogisticsOptions.viaCargo.carrierName} u otros expresos de carga acordados.`
                          : 'Envíos por expresos de carga acordados previamente.'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Settings className="w-6 h-6" /></div>
                      <span>Opción de retiro directo en nuestra fábrica.</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Info className="w-6 h-6" /></div>
                      <span>El envío se cotiza según ciudad y volumen del pedido.</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={whatsappEnvio} target="_blank" className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30">
                      Consultar envío a mi ciudad
                      <Truck className="ml-2 w-5 h-5" />
                    </Link>
                    <Link href="/envios" className="inline-flex items-center justify-center gap-2 px-6 py-5 bg-slate-200 text-slate-800 rounded-2xl font-bold text-sm hover:bg-slate-300 transition-all">
                      <span>Ver cobertura y envíos a todo el país</span>
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                  <h4 className="text-xl font-black uppercase italic mb-4 leading-none">Stock Inmediato</h4>
                  <p className="text-slate-600 mb-6 font-medium">Como fabricantes directos, garantizamos el despacho rápido de pedidos grandes para que su obra no se detenga.</p>
                  <div className="flex items-center gap-4 text-green-600 font-black uppercase tracking-widest text-sm italic">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    Listo para despachar hoy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. BLOQUE FINAL */}
        <section className="py-24 bg-slate-950 text-white text-center border-t border-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
              ¿Listo para armar tu <br/> <span className="text-blue-500">terraza transitable?</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium mb-12">
              En PLASTEM te asesoramos para calcular la cantidad exacta, cotizar el producto y coordinar el envío a tu ciudad. Compra directo de fábrica.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="#calculador-seccion" className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/40 text-xl border-b-4 border-blue-800">
                Solicitar presupuesto ahora
              </Link>
              <Link href={whatsappGeneral} target="_blank" className="px-12 py-6 bg-green-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-2xl shadow-green-500/40 text-xl border-b-4 border-green-700">
                Hablar por WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <script key="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script key="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                 <div className="text-sm font-bold text-blue-600 uppercase tracking-widest">Línea Arquitectura</div>
                 <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full animate-pulse">Stock Inmediato</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">{product.h1}</h1>
              <p className="text-2xl font-bold text-blue-600 mb-6">Armá tu terraza transitable sin obra y sin dañar la membrana</p>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                {product.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link href={whatsappCotizar} target="_blank" className="flex items-center justify-center py-4 px-8 bg-green-500 text-white rounded-xl font-bold uppercase tracking-widest text-sm sm:text-base hover:bg-green-600 transition-all shadow-lg shadow-green-200">
                  Cotizar por WhatsApp
                </Link>
                <Link href="#contacto-form" className="flex items-center justify-center py-4 px-8 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest text-sm sm:text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  Calculador Online
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                 <p className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Stock disponible para entrega inmediata
                 </p>
                 <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
                    <span>⏱️</span> Respuesta en menos de 24hs
                 </p>
              </div>
            </div>
            <div className="relative">
               <div className="border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
                 <DynamicImage category="productos" slug={slug} aspectRatio="1/1" enableZoom />
               </div>
               
               <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100 flex items-center gap-4 z-10">
                 <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                   <CheckCircle2 className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-800">Clientes en todo el país</p>
                   <p className="text-xs text-slate-500">+40 años fabricando</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Ventajas del Sistema</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.benefits.map((beneficio, i) => (
              <div key={i} className="p-6 border border-slate-100 bg-white rounded-2xl shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">Ventaja Técnica {i + 1}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ficha Técnica y Usos */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Settings className="w-8 h-8 text-blue-600 shrink-0" />
                Especificaciones Técnicas
              </h2>
              <ul className="space-y-4">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-50 border-dashed gap-1 sm:gap-4">
                    <span className="font-bold text-slate-700 text-sm w-1/3">{spec.label}</span>
                    <span className="text-slate-600 text-sm">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Wrench className="w-8 h-8 text-blue-600" />
                Usos Recomendados
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Ideal comprobado en el ámbito de: <strong className="font-semibold">{product.uses}</strong>. Puede consultar nuestra <Link href="/guias/como-instalar-discos-soporte" className="text-blue-600 font-semibold hover:underline">guía paso a paso para armar terrazas transitables</Link> y aprender a implementar este sistema que reemplaza contrapisos, evitando sobrecargas en la losa estructural.
              </p>
              <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-600/20">
                <h4 className="text-xl font-bold mb-4">¿Necesita saber el costo de envío a su ciudad?</h4>
                <p className="text-blue-100 mb-6 text-sm">Despachamos desde fábrica en Buenos Aires hacia <Link href="/envios/cordoba" className="text-white font-medium hover:text-blue-200 underline">Córdoba</Link>, <Link href="/envios/buenos-aires" className="text-white font-medium hover:text-blue-200 underline">Gran Buenos Aires</Link> y todo el país. Contáctenos para calcular el flete logístico.</p>
                <Link href={whatsappEnvio} target="_blank" className="inline-block py-3 px-6 bg-white text-blue-900 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-slate-50 transition-colors">
                  Consultar Envío
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ejemplo Real */}
      <section className="py-16 bg-white border-b border-slate-100">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 shadow-sm">
               <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 mb-4">¿Cuántos discos necesito? Ejemplo real</h3>
                  <p className="text-slate-600 mb-6">Para una terraza promedio de <strong>50 m²</strong> utilizando baldosones de <strong>40x40 cm</strong>, el cálculo base sería:</p>
                  <ul className="space-y-3 mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> <strong className="text-slate-800">Superficie:</strong> <span className="text-slate-600">50 m²</span></li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> <strong className="text-slate-800">Rendimiento:</strong> <span className="text-slate-600">6.5 a 7 discos por m² (aprox. por bordes)</span></li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> <strong className="text-slate-800">Total estimado:</strong> <span className="text-slate-600">350 discos soporte</span></li>
                  </ul>
                  <p className="text-sm text-slate-500 italic max-w-xl">No se preocupe por la matemática. Envíenos sus metros cuadrados y nosotros calculamos la cantidad exacta que necesita, contemplando desperdicios y recortes, de forma totalmente gratuita.</p>
               </div>
               <div className="md:w-1/3 flex flex-col gap-4">
                  <Link href={whatsappCotizar} target="_blank" className="w-full py-4 px-6 bg-green-500 text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg text-center shadow-green-500/20">
                     Ayudame a calcular
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* Galería Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Clientes que ya lo usan</h2>
              <p className="text-slate-600">Constructoras, arquitectos y particulares en todo el país confían en nuestra calidad industrial.</p>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-square bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative group shadow-sm">
              <Image src="https://picsum.photos/seed/terrt1/600/600" alt="Terraza terminada" fill className="object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 flex flex-col justify-end h-1/2">
                 <span className="text-white font-bold text-sm tracking-wide">Edificio CABA</span>
                 <span className="text-slate-300 text-xs">Terraza verde transitable</span>
              </div>
            </div>
            <div className="aspect-square bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative group shadow-sm">
              <Image src="https://picsum.photos/seed/inst3/600/600" alt="Instalación en proceso" fill className="object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 flex flex-col justify-end h-1/2">
                 <span className="text-white font-bold text-sm tracking-wide">Patios de Córdoba</span>
                 <span className="text-slate-300 text-xs">Instalación en seco (60m²)</span>
              </div>
            </div>
            <div className="aspect-square bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative group shadow-sm">
              <Image src="https://picsum.photos/seed/det8/600/600" alt="Detalle del producto" fill className="object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 flex flex-col justify-end h-1/2">
                 <span className="text-white font-bold text-sm tracking-wide">Solarium Rosario</span>
                 <span className="text-slate-300 text-xs">Borde de piscina elevado</span>
              </div>
            </div>
            <div className="aspect-square bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative group shadow-sm">
              <Image src="https://picsum.photos/seed/obra5/600/600" alt="Obra seca" fill className="object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 flex flex-col justify-end h-1/2">
                 <span className="text-white font-bold text-sm tracking-wide">Casa Particular Norte</span>
                 <span className="text-slate-300 text-xs">Reemplazo de contrapiso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Envíos */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">¿Cuánto cuesta el envío?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-6">
                     <Package className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-3 text-lg">Transporte a todo el país</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Despachamos por expreso hacia su provincia o ciudad con logística coordinada según el destino.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-green-500"></div>
                  <div className="bg-green-100 text-green-600 p-4 rounded-full mb-6 mt-2">
                     <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-3 text-lg">Retiro en Fábrica</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Si prefiere evitar expresos, puede retirar su pedido directamente en nuestra planta ubicada en GBA Sur.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="bg-purple-100 text-purple-600 p-4 rounded-full mb-6">
                     <Settings className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-3 text-lg">Cotización Inmediata</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Le informamos el volumen y peso exacto al instante para que pueda estimar costos con su transporte de confianza.</p>
               </div>
            </div>
            <Link href={whatsappEnvio} target="_blank" className="inline-flex items-center justify-center py-4 px-10 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
               Consulte costo logístico exacto
            </Link>
         </div>
      </section>

      {/* FAQ & CTA */}
      <section id="contacto-form" className="py-20 bg-slate-900 text-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-blue-500" />
                Preguntas Frecuentes
              </h2>
              <div className="space-y-6">
                {product.faq.map((item, i) => (
                  <div key={i} className="border-b border-slate-700 pb-4">
                    <h4 className="font-bold text-lg text-slate-200 mb-2">{item.question}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center bg-slate-800 p-10 rounded-3xl border border-slate-700">
              <h3 className="text-3xl font-black text-white mb-4">Calculadora de Materiales</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Ingresá los metros cuadrados de tu proyecto y la medida del baldosón a utilizar. El sistema calculará una estimación de discos soporte necesarios.
              </p>
              
              <ProductCalculator />

              <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-slate-600"></div>
                  <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium uppercase tracking-wider">o si prefiere</span>
                  <div className="flex-grow border-t border-slate-600"></div>
              </div>

              <div className="mt-4">
                <Link href={whatsappGeneral} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 px-8 bg-green-500 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/20">
                  Hablar por WhatsApp
                </Link>
                <p className="text-center text-xs text-slate-400 mt-3 font-medium">Atención inmediata de Lunes a Viernes de 8 a 17hs</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-left">
            <InternalLinksSection slug={product.slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
