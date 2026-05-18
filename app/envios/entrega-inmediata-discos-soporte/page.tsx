import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Clock, Package, CheckCircle2, Phone, Truck } from 'lucide-react';
import { cities } from '@/data/cities';
import { whatsappUrl } from '@/data/site';

export const metadata: Metadata = {
  title: 'Entrega Inmediata de Discos Soporte | PLASTEM Argentina',
  description: '¿Necesita discos soporte hoy mismo? Contamos con stock permanente para entrega inmediata en GBA y despachos rápidos al interior del país. ¡No detenga su obra!',
};

export default function EntregaInmediataPage() {
  return (
    <div className="bg-white">
      {/* Hero Sección Urgencia */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/placeholders/warehouse-stock.svg" 
            alt="Stock permanente" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-slate-900 rounded-full font-black uppercase tracking-tighter mb-8 animate-pulse">
            <Zap className="w-5 h-5 fill-current" />
            Stock Permanente
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-8 italic uppercase leading-none">
            Entrega Inmediata <br />
            <span className="text-blue-400">Sin Demoras en Obra</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium">
            Entendemos que los plazos de obra no esperan. Fabricamos y entregamos discos soporte para baldosones con la mayor celeridad del mercado argentino.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href={whatsappUrl('Hola, necesito discos soporte con entrega urgente.')} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl shadow-green-500/40 flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Pedir Ahora por WhatsApp
            </Link>
            <Link 
              href="/#calculador" 
              className="px-10 py-5 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3"
            >
              Cálculo de m²
            </Link>
          </div>
        </div>
      </section>

      {/* Promesas de Rapidez */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
              <div className="bg-blue-600 text-white p-4 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">Retiro en el Acto</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Pase a retirar su pedido por nuestra planta en <strong>Turdera / Temperley (GBA Sur)</strong> inmediatamente después de la confirmación. Sin tiempos de espera industriales.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
              <div className="bg-blue-600 text-white p-4 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">Envío Express GBA</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Coordinamos fletes rápidos para entregas en CABA y Gran Buenos Aires. Muchas veces logramos la entrega en 24hs hábiles para que su cuadrilla no se detenga.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
              <div className="bg-blue-600 text-white p-4 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">Despacho Nacional</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Enviamos paletizado a todo el país vía Vía Cargo o el transporte de su elección. Priorizamos los despachos al interior para acortar tiempos de tránsito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interlinking Seccion */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase">Cubrimos todas las ciudades</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(cities).map((city) => (
              <Link 
                key={city.slug}
                href={`/envios/${city.slug}`}
                className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
              >
                Envíos a {city.name}
              </Link>
            ))}
          </div>
          <div className="mt-16 bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase italic">¿Dudas Técnicas?</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Si no está seguro de cuántas unidades necesita para su proyecto, consulte nuestra <Link href="/#calculador" className="text-blue-600 underline font-bold">Calculadora de Discos</Link> o lea nuestra guía sobre <Link href="/guias/como-instalar-discos-soporte" className="text-blue-600 underline font-bold">Instalación en Seco</Link>.
            </p>
            <Link 
              href="/productos/disco-soporte-baldosones"
              className="inline-flex items-center gap-2 font-black text-blue-600 uppercase tracking-widest hover:gap-4 transition-all"
            >
              Ver Producto Principal <CheckCircle2 className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
