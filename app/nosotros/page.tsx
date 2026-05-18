import { Metadata } from 'next';
import { BadgeCheck, Users, Factory, History, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nosotros | PLASTEM',
  description: 'Conozca la historia de PLASTEM, empresa líder en la fabricación de discos soporte y soluciones plásticas para la construcción en Argentina.',
  alternates: {
    canonical: '/nosotros',
  },
};

export default function NosotrosPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Nuestra Historia
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Más de 40 años innovando en la inyección de polímeros para la industria y la construcción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image 
              src="/placeholders/factory-floor.svg" 
              alt="Planta Industrial PLASTEM" 
              fill
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-brand font-bold uppercase tracking-widest text-sm">
              <History className="w-4 h-4" /> Trayectoria y Compromiso
            </div>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">Desde el corazón de GBA para todo el país.</h2>
            <p className="text-slate-600 leading-relaxed">
              PLASTEM nació como una empresa familiar dedicada a la inyección técnica de plásticos. Con el tiempo, identificamos la necesidad de soluciones eficientes para la construcción en seco y las cubiertas transitables.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Hoy, somos referentes en la fabricación de discos soporte, utilizando materiales recuperados de alta calidad para ofrecer un producto sustentable, resistente y económico que reemplaza los métodos tradicionales de obra húmeda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <Factory className="w-12 h-12 text-brand mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Planta Propia</h3>
            <p className="text-slate-500 text-sm">Controlamos todo el proceso desde el diseño de matrices hasta la inyección final del producto.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <Target className="w-12 h-12 text-brand mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Misión</h3>
            <p className="text-slate-500 text-sm">Facilitar el trabajo del arquitecto y constructor con sistemas que ahorran tiempo, peso y dinero.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <Users className="w-12 h-12 text-brand mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Atención Gremio</h3>
            <p className="text-slate-500 text-sm">Asesoramiento personalizado para grandes obras, estudios y empresas constructoras.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-16 border border-slate-200 shadow-xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase text-center md:text-left">Compromiso con la Calidad</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <BadgeCheck className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-600">Materiales testeados bajo normas de carga pesada para garantizar seguridad estructural.</p>
              </div>
              <div className="flex items-start gap-4">
                <BadgeCheck className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-600">Soporte técnico directo para el cálculo de piezas y asesoramiento en obra.</p>
              </div>
              <div className="flex items-start gap-4">
                <BadgeCheck className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-600">Procesos productivos con bajo impacto ambiental mediante el uso de polímeros reciclados.</p>
              </div>
              <div className="flex items-start gap-4">
                <BadgeCheck className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-600">Despachos veloces garantizando el ritmo de obra de nuestros clientes.</p>
              </div>
            </div>
            <div className="mt-12 text-center md:text-left">
              <Link 
                href="/contacto"
                className="inline-block px-10 py-4 bg-brand text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-dark transition-all"
              >
                Hablar con un asesor técnico
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
