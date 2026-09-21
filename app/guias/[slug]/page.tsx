import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { guides } from '@/data/guides';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { InternalLinksSection } from '@/components/InternalLinksSection';
import { DynamicImage } from '@/components/DynamicImage';

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    return { title: 'Guía no encontrada' };
  }

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `/guias/${slug}`,
    },
  };
}

export default async function GuiaPage({ params }: Props) {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://plastem.com.ar';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    image: guide.mainImage,
    author: {
      '@type': 'Organization',
      name: 'PLASTEM Técnica'
    },
    publisher: {
      '@type': 'Organization',
      name: 'PLASTEM',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    datePublished: '2025-01-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/guias/${slug}`
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guías',
        item: `${siteUrl}/guias`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.title,
        item: `${siteUrl}/guias/${slug}`
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  const whatsappMessage = `Hola, estaba leyendo la guía sobre "${guide.title}" y me gustaría hacer una consulta técnica/comercial.`;
  const whatsappLink = `https://wa.me/5491130213258?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-slate-50 min-h-screen py-16 lg:py-24">
      <script key="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script key="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script key="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <Link href="/guias" className="hover:text-blue-600">Guías</Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <span className="text-slate-900 font-medium truncate">{guide.title}</span>
        </nav>

        {/* Header Articulo */}
        <div className="mb-12 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="relative w-full">
            <DynamicImage category="guias" slug={slug} priority enableZoom showCaption aspectRatio="16/9" />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="md:hidden mb-6">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Guía Técnica / {guide.category}</div>
              <h1 className="text-3xl font-black text-slate-900 mb-6 leading-tight">
                {guide.h1}
              </h1>
            </div>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {guide.metaDescription}
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-black text-slate-900 uppercase">¿Proyectando una terraza?</h3>
                <p className="text-slate-600 text-sm">Calculá tus insumos en 1 minuto.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link href="/#calculador" className="px-8 py-4 bg-blue-600 text-white text-center rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  Calculadora Online
                </Link>
                <Link href={whatsappLink} target="_blank" className="px-8 py-4 bg-green-500 text-white text-center rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-green-600 transition-all shadow-lg shadow-green-600/20">
                  WhatsApp Directo
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Introduction HTML */}
            <article className="prose prose-slate prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
              <div dangerouslySetInnerHTML={{ __html: guide.contentHtml }} />
            </article>

            {/* Steps Section */}
            {guide.steps && guide.steps.length > 0 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Pasos a seguir</h2>
                {guide.steps.map((step, index) => (
                  <div key={index} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                    {step.image && (
                      <div className="md:w-1/3 relative h-64 md:h-auto">
                        <Image 
                          src={step.image} 
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                    )}
                    <div className="p-8 md:w-2/3 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FAQs */}
            {guide.faq && guide.faq.length > 0 && (
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  {guide.faq.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-start gap-2">
                         <span className="text-blue-500 font-black">Q.</span> {item.question}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-slate-200 pl-4 ml-6">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <InternalLinksSection slug={slug} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
             <div className="bg-brand-dark rounded-3xl p-8 text-white sticky top-24">
                <h3 className="text-xl font-black mb-4 uppercase italic">¿Listo para cotizar?</h3>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  Somos PLASTEM, fábrica argentina de discos soporte. Envíos inmediatos a todo el país.
                </p>
                <div className="space-y-4">
                   <Link href="/envios" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                      <span className="font-bold text-sm uppercase">Ver Envíos</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </Link>
                   <Link href={whatsappLink} target="_blank" className="flex items-center justify-between p-4 bg-green-500 rounded-xl hover:bg-green-600 transition-all group">
                      <span className="font-bold text-sm uppercase">Presupuesto</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                   <div className="flex items-center gap-2 text-xs text-slate-400 italic">
                      <CheckCircle2 className="w-3 h-3 text-green-400" /> Stock disponible hoy
                   </div>
                   <div className="flex items-center gap-2 text-xs text-slate-400 italic">
                      <CheckCircle2 className="w-3 h-3 text-green-400" /> Cuotas con tarjetas
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
