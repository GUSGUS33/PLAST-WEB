import Link from 'next/link';
import Image from 'next/image';
import { guides } from '@/data/guides';
import { BookOpen, Calculator, Layers, Info, ArrowRight, Settings } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guías Técnicas y de Instalación | PLASTEM',
  description: 'Todo lo que necesita saber sobre la instalación, cálculo y ventajas de los discos soporte para baldosones y pisos flotantes exteriores.',
  alternates: {
    canonical: '/guias',
  },
};

export default function GuiasPage() {
  const categories = {
    'Instalación': <BookOpen className="w-6 h-6 text-blue-500" />,
    'Cálculo': <Calculator className="w-6 h-6 text-green-500" />,
    'Comparativas': <Layers className="w-6 h-6 text-orange-500" />,
    'Educación': <Info className="w-6 h-6 text-purple-500" />,
    'Técnica': <Settings className="w-6 h-6 text-slate-500" />,
  };

  const guidesByCategory = Object.values(guides).reduce((acc, guide) => {
    if (!acc[guide.category]) {
      acc[guide.category] = [];
    }
    acc[guide.category].push(guide);
    return acc;
  }, {} as Record<string, typeof guides[string][]>);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Guías Técnicas y Consejos
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Aprenda a instalar, calcular y optimizar su obra con nuestro sistema de pisos técnicos elevados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {Object.entries(categories).map(([category, icon]) => (
            <div key={category} className="space-y-8">
              <div className="flex items-center gap-3 border-b-2 border-slate-200 pb-4">
                {icon}
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wide">{category}</h2>
              </div>
              <div className="grid gap-6">
                {guidesByCategory[category]?.map((guide) => (
                  <Link 
                    key={guide.slug} 
                    href={`/guias/${guide.slug}`}
                    className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex items-center overflow-hidden"
                  >
                    {guide.mainImage && (
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                        <Image 
                          src={guide.mainImage} 
                          alt={guide.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-4 sm:p-6 flex-grow min-w-0">
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 truncate">
                        {guide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
                        {guide.metaDescription}
                      </p>
                    </div>
                    <div className="pr-4 sm:pr-8">
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 relative rounded-[3rem] p-8 md:p-16 text-white text-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-brand-dark" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/factory/1200/800')] opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase italic">¿No encuentra lo que busca?</h2>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              Nuestro equipo técnico está a su disposición para resolver cualquier duda sobre su proyecto de terraza transitable o piso elevado.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="https://wa.me/5491130213258" 
                target="_blank"
                className="px-10 py-5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl shadow-green-500/30"
              >
                Consultar por WhatsApp
              </Link>
              <Link 
                href="/#calculador" 
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl shadow-blue-600/30"
              >
                Calculadora Técnica
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
