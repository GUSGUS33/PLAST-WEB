import Link from 'next/link';
import { getPublishedGeoLocations } from '@/data/geo';
import { siteConfig } from '@/data/site';
import { MapPin, Truck, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Envíos a Todo el País | PLASTEM',
  description: 'Información logística sobre envíos de discos soporte a las principales ciudades de Argentina. Despachos rápidos y seguros.',
};

export default function EnviosPage() {
  const published = getPublishedGeoLocations();
  
  const getProvinceName = (g: typeof published[0]) => g.parentProvinceName || g.name;
  
  const provinces = Array.from(new Set(published.map(getProvinceName))).sort();

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Cobertura Nacional
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Llegamos a cada rincón de Argentina con la logística más eficiente para su obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Despacho Inmediato</h3>
            <p className="text-slate-500 text-sm">Contamos con stock permanente para envíos en menos de 48 hs hábiles.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Seguro de Carga</h3>
            <p className="text-slate-500 text-sm">Toda la mercadería viaja paletizada y asegurada contra roturas o pérdidas.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Seguimiento Online</h3>
            <p className="text-slate-500 text-sm">Le proporcionamos el número de guía para que rastree su pedido en tiempo real.</p>
          </div>
        </div>

        <div className="space-y-12">
          {provinces.map(province => (
            <div key={province} className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-200 pb-2">{province}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {published.filter(g => getProvinceName(g) === province).map(city => (
                  <Link 
                    key={city.slug}
                    href={`/envios/${city.slug}`}
                    className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand/30 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-slate-300 group-hover:text-brand transition-colors" />
                      <span className="font-bold text-slate-900 group-hover:text-brand transition-colors">{city.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-dark rounded-3xl p-8 md:p-12 text-white text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 uppercase">¿Su ciudad no figura en la lista?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl text-lg leading-relaxed">
            {siteConfig.globalLogisticsOptions?.viaCargo?.enabled
              ? `Despachamos hacia cualquier punto del país. ${siteConfig.globalLogisticsOptions.viaCargo.standardDisclaimer}`
              : 'Despachamos hacia cualquier punto del país mediante expresos de carga o transportes acordados previamente con el cliente.'}
          </p>
          <Link 
            href="https://wa.me/5491130213258?text=Hola,%20quisiera%20consultar%20por%20envío%20a%20mi%20localidad." 
            target="_blank"
            className="px-10 py-4 bg-white text-brand-dark rounded-xl font-bold uppercase tracking-widest transition-all hover:bg-slate-100 flex items-center gap-2"
          >
            Consultar Logística A medida <Truck className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
