import Link from 'next/link';
import { solutions } from '@/data/solutions';
import { segments } from '@/data/segments';
import { Lightbulb, ArrowRight, ShieldCheck, Zap, Droplets, Ruler, Users, Factory, BadgeCheck, Calculator } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soluciones Constructivas para Terrazas y Balcones | PLASTEM',
  description: 'Descubra cómo resolver problemas de filtraciones, nivelación y transitabilidad en cubiertas. Soluciones técnicas para arquitectos, constructoras y particulares en Argentina.',
  alternates: {
    canonical: '/soluciones',
  },
};

export default function SolucionesPage() {
  const problemIcons = {
    'terraza-transitable': <Zap className="w-8 h-8 text-yellow-500" />,
    'piso-sobre-membrana': <ShieldCheck className="w-8 h-8 text-blue-500" />,
    'nivelar-piso-exterior': <Ruler className="w-8 h-8 text-green-500" />,
    'evitar-filtraciones-terraza': <Droplets className="w-8 h-8 text-cyan-500" />,
    'discos-soporte-para-constructoras': <Factory className="w-8 h-8 text-slate-500" />,
  };

  const segmentIcons = {
    'para-arquitectos': <BadgeCheck className="w-8 h-8 text-brand" />,
    'para-constructoras': <Factory className="w-8 h-8 text-brand" />,
    'para-particulares': <Users className="w-8 h-8 text-brand" />,
  };

  // Filter solutions that are problem-based for the first section
  const problemSolutions = Object.values(solutions).filter(s => s.isProblemLanding);
  const corporateSolutions = Object.values(solutions).filter(s => !s.isProblemLanding);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Above the Fold: Intent Selector */}
        <div className="mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 uppercase italic tracking-tight">
            ¿Qué necesitás <span className="text-blue-600">resolver?</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              { title: 'Armar terraza transitable', href: '/soluciones/terraza-transitable', icon: <Zap className="w-6 h-6" />, color: 'bg-yellow-500' },
              { title: 'Nivelar piso exterior', href: '/soluciones/nivelar-piso-exterior', icon: <Ruler className="w-6 h-6" />, color: 'bg-green-500' },
              { title: 'Evitar filtraciones', href: '/soluciones/evitar-filtraciones-terraza', icon: <Droplets className="w-6 h-6" />, color: 'bg-cyan-500' },
              { title: 'Comprar para obra', href: '/soluciones/discos-soporte-para-constructoras', icon: <Factory className="w-6 h-6" />, color: 'bg-slate-700' },
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="group bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex flex-col items-center justify-center text-center gap-4"
              >
                <div className={`${item.color} text-white p-3 rounded-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <span className="text-sm md:text-base font-black text-slate-800 uppercase leading-none italic group-hover:text-blue-600">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          <Link 
            href="/#calculador" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 group"
          >
            <Calculator className="w-6 h-6" />
            Calcular cantidad de discos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* SEO Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">
            Soluciones en <span className="text-blue-600">Pisos Elevados</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            En PLASTEM desarrollamos tecnología aplicada a la arquitectura moderna. 
            Nuestros <Link href="/productos/disco-soporte-baldosones" className="text-blue-600 underline">discos soporte para baldosones</Link> resuelven de forma definitiva los problemas de filtraciones y nivelación en cubiertas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/#calculador" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all">
              Optimizar Presupuesto
            </Link>
            <Link href="/guias" className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold uppercase tracking-widest text-xs hover:border-blue-500 transition-all">
              Guías Técnicas
            </Link>
          </div>
        </div>

        {/* Section 1: Soluciones por Problema */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 border-b-2 border-slate-200 pb-4">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 uppercase italic">Soluciones por Problema</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {problemSolutions.map((solution) => (
              <Link 
                key={solution.slug} 
                href={`/soluciones/${solution.slug}`}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/3 bg-slate-50 p-8 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-100 group-hover:bg-blue-50 transition-colors">
                  {problemIcons[solution.slug as keyof typeof problemIcons] || <Lightbulb className="w-10 h-10 text-slate-300" />}
                </div>
                <div className="p-8 sm:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 uppercase group-hover:text-blue-600 transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {solution.metaDescription}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                    Ver solución técnica <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: Soluciones por Perfil */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 border-b-2 border-slate-200 pb-4">
            <div className="bg-green-100 p-2 rounded-lg text-green-600">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 uppercase italic">Soluciones por Perfil</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Especial B2B Constructoras */}
            {corporateSolutions.map((solution) => (
               <Link 
                key={solution.slug} 
                href={`/soluciones/${solution.slug}`}
                className="group relative bg-slate-900 rounded-[2.5rem] p-10 text-white overflow-hidden shadow-2xl hover:-translate-y-2 transition-all flex flex-col justify-between h-full"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Factory className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-blue-500 rounded-full text-[10px] font-black uppercase mb-4 tracking-tighter">B2B / Corporativo</span>
                  <h3 className="text-2xl font-black mb-4 uppercase italic leading-tight">
                    {solution.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    {solution.metaDescription}
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-2 font-black text-blue-400 uppercase tracking-widest text-xs">
                  Canal Directo <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}

            {/* Segmentos desde segments.ts */}
            {Object.values(segments).map((segment) => (
              <Link 
                key={segment.slug} 
                href={`/soluciones/${segment.slug}`}
                className="group bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:border-green-400 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="mb-6 bg-slate-50 p-4 rounded-2xl w-fit group-hover:bg-green-50 transition-colors">
                    {segmentIcons[segment.slug as keyof typeof segmentIcons] || <Users className="w-8 h-8 text-slate-300" />}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">
                    {segment.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {segment.metaDescription}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-widest">
                  Ver beneficios por perfil <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="relative rounded-[4rem] bg-brand p-12 md:p-20 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <Zap className="w-full h-full" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase italic leading-none">
              ¿No sabe qué <br /> 
              <span className="text-blue-200">sistema elegir?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-10 font-medium">
              Realizamos asesoramiento técnico personalizado para grandes desarrollos y consorcios. Déjenos su consulta y un especialista lo asistirá con el cómputo de materiales.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="https://wa.me/5491130213258" 
                target="_blank"
                className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl text-center"
              >
                Consultar vía WhatsApp
              </Link>
              <Link 
                href="/contacto" 
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all border border-blue-400 text-center shadow-xl shadow-blue-500/30"
              >
                Escribir Correo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
