import { Metadata } from 'next';
import type React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Target, CheckCircle2, Factory, Wrench, AlertTriangle } from 'lucide-react';
import { segments } from '@/data/segments';
import { solutions } from '@/data/solutions';
import { whatsappUrl } from '@/data/site';

function renderInlineLinks(text: string, linkClassName: string) {
  const parts: React.ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    const [fullMatch, label, href] = match;
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const safeHref = href.startsWith('/') ? href : '/';
    parts.push(
      <Link key={`${label}-${match.index}`} href={safeHref} className={linkClassName}>
        {label}
      </Link>
    );

    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export async function generateStaticParams() {
  const segmentSlugs = Object.keys(segments).map((slug) => ({ slug }));
  const solutionSlugs = Object.keys(solutions).map((slug) => ({ slug }));
  return [...segmentSlugs, ...solutionSlugs];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = segments[slug] || solutions[slug];
  
  if (!data) {
    return { title: 'No encontrado' };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/soluciones/${slug}`,
    },
  };
}

export default async function SolucionesSegmentoPage({ params }: Props) {
  const { slug } = await params;
  const data = segments[slug] || solutions[slug];

  if (!data) {
    notFound();
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq?.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    })) || []
  };

  const whatsappMessage = `Hola PLASTEM, estoy interesado en la solución para ${data.name.toLowerCase()} y busco asesoramiento.`;
  const whatsappLink = whatsappUrl(whatsappMessage);

  // PROBLEM LANDING LAYOUT
  const isSolution = 'isProblemLanding' in data;
  
  if (isSolution && (data as any).isProblemLanding && (data as any).problemDetails) {
    const solutionData = data as any;
    return (
      <div className="bg-white">
        <script key="faqSchemaProblem" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <section className="bg-slate-900 text-white py-20 pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full mb-6 border border-white/20">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Solución Especializada</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              {data.h1}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Descubra por qué sucede y cómo nuestro sistema de <Link href="/productos/disco-soporte-baldosones" className="text-blue-400 hover:text-blue-300 underline font-semibold">discos soporte para pisos flotantes exterior</Link> lo resuelve definitivamente sin grandes obras.
            </p>
            
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 max-w-3xl mx-auto text-left shadow-xl">
              <h3 className="text-2xl font-bold mb-4">¿Querés hacerlo sin obra y sin errores?</h3>
              <p className="text-slate-400 text-sm mb-8">Elegí el camino rápido. Usá nuestro sistema de pisos flotantes y calculá exactamente lo que necesitás sin romper nada.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/productos/disco-soporte-baldosones#calculador-seccion" className="flex-1 py-4 px-6 bg-blue-600 text-white text-center rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                  Ir a la Calculadora
                </Link>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 px-6 bg-green-500 text-white text-center rounded-xl font-bold uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg shadow-green-500/30">
                  Hablar por WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border text-left border-slate-200 rounded-3xl p-10 shadow-xl mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">El Problema Real</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">{solutionData.problemDetails.realProblem}</p>
              
              <h3 className="text-lg font-bold text-slate-800 mb-3">¿Por qué pasa esto?</h3>
              <p className="text-slate-600 leading-relaxed">{solutionData.problemDetails.whyItHappens}</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl my-12 mb-12 text-left flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-bold text-xl text-slate-900 mb-2">¿Necesitás resolver tu proyecto rápido?</h4>
                <p className="text-slate-600 text-sm">Mandanos fotos del problema por WhatsApp y lo vemos juntos.</p>
              </div>
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto py-3 px-6 bg-blue-600 text-white text-center rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors whitespace-nowrap">
                Consultar ahora
              </Link>
            </div>

            <div className="bg-white border text-left border-slate-200 rounded-3xl p-10 shadow-sm mb-12 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><CheckCircle2 className="text-blue-600 w-8 h-8"/> La Solución Técnica</h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">{solutionData.problemDetails.technicalSolution}</p>
              
              <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-md font-bold text-slate-800 mb-3 flex items-center gap-2"><Wrench className="w-5 h-5 text-amber-600"/> Ejemplo de aplicación práctica</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{solutionData.problemDetails.practicalExample}</p>
              </div>
            </div>

            {/* Bloque Final Fuerte */}
            <div className="mt-16 bg-slate-900 text-white p-8 md:p-12 rounded-3xl border border-slate-700 text-center shadow-xl">
               <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
                  <span className="text-sm font-bold tracking-widest uppercase">Paso Siguiente</span>
               </div>
               <h3 className="text-3xl font-black mb-4">¿Todo listo para avanzar?</h3>
               <p className="text-slate-300 mb-8 max-w-xl mx-auto">Calculá la cantidad exacta de discos soporte para tu proyecto en 1 minuto.</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/productos/disco-soporte-baldosones#calculador-seccion" className="py-4 px-8 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                    Calcular mi proyecto
                  </Link>
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="py-4 px-8 bg-green-500 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30">
                    Recibir presupuesto
                  </Link>
               </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-slate-200">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Continúe descubriendo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Link href="/guias/como-instalar-discos-soporte" className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 transition-colors">
                    <span className="font-bold text-slate-800 block mb-2">Leer guía de instalación</span>
                    <span className="text-slate-500 text-sm">Paso a paso para armar terrazas transitables en seco.</span>
                 </Link>
                 <Link href="/envios/buenos-aires" className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 transition-colors">
                    <span className="font-bold text-slate-800 block mb-2">Envíos y Logística</span>
                    <span className="text-slate-500 text-sm">Conozca cómo entregamos en Buenos Aires y todo el país.</span>
                 </Link>
              </div>
           </div>
        </section>
      </div>
    );
  }

  // TRADITIONAL SEGMENT LAYOUT (Arquitectos, constructoras, etc)
  return (
    <div className="bg-white">
      <script key="faqSchema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full mb-6 border border-white/20">
            <Target className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Línea Especializada</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {data.h1}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Optimizamos sus costos y procesos con productos estandarizados y de alta resistencia, fabricados bajo estrictos controles de calidad.
          </p>
          
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 max-w-3xl mx-auto text-left shadow-xl">
            <h2 className="text-2xl font-bold mb-4">{data.primaryCta ? 'Atención Corporativa' : '¿Querés hacerlo sin obra y sin errores?'}</h2>
            <p className="text-slate-400 text-sm mb-8">
              {data.primaryCta 
                ? 'Contamos con un canal exclusivo para grandes obras y desarrollos inmobiliarios con beneficios por volumen.'
                : 'Elegí el camino rápido. Contactanos para que resolvamos el cálculo o pedí una demostración comercial directo a tu oficina o dirección de obra.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={data.primaryCta ? data.primaryCta.href : "/productos/disco-soporte-baldosones"} 
                className="flex-1 py-4 px-6 bg-blue-600 text-white text-center rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
              >
                {data.primaryCta ? data.primaryCta.text : 'Ver Producto'}
              </Link>
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 px-6 bg-green-500 text-white text-center rounded-xl font-bold uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg shadow-green-500/30">
                Hablar por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas vs Solución */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl">
            <h3 className="text-xl font-bold text-slate-800 mb-6">El desafío</h3>
            <ul className="space-y-4">
              {data.problems.map((problem: string, i: number) => (
                <li key={i} className="flex gap-3 text-slate-600 leading-relaxed text-sm">
                  <span className="text-red-500 font-bold shrink-0">X</span> 
                  <span>{renderInlineLinks(problem, 'text-blue-600 underline')}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-600 border border-blue-500 rounded-3xl p-10 shadow-xl text-white">
            <h3 className="text-xl font-bold mb-6">Nuestra solución</h3>
            <ul className="space-y-4">
              {data.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex gap-3 text-blue-100 leading-relaxed text-sm">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" /> 
                  <span>{renderInlineLinks(benefit, 'text-white underline decoration-white/30')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">¿Por qué elegirnos como proveedores?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-slate-700">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-slate-900">Directo de Fábrica</h4>
              <p className="text-sm leading-relaxed">Sin intermediarios. Mejores costos para apalancar la rentabilidad de su proyecto.</p>
            </div>
            <div className="text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-slate-700">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-slate-900">Stock Continuo</h4>
              <p className="text-sm leading-relaxed">Aseguramos la provisión constante de nuestros productos para que su obra no se detenga.</p>
            </div>
            <div className="text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-slate-700">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-slate-900">Muestras sin Cargo</h4>
              <p className="text-sm leading-relaxed">Enviamos muestras a su estudio o dirección de obra para verificación técnica e inspección visual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultas Frecuentes */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Consultas de {data.name}</h2>
          <div className="space-y-6">
            {data.faq?.map((item, i) => (
              <div key={i} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h4 className="font-bold text-lg mb-2">{item.question}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/#calculador" className="inline-block py-4 px-10 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Iniciar Cotización
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
