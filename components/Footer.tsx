import Link from 'next/link';
import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-16 shrink-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xl">
                P
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">PLASTEM</span>
            </Link>
            <p className="mb-6 text-sm text-slate-400 max-w-xs leading-relaxed">
              Fábrica de discos soporte para baldosones, pisos flotantes exteriores y terrazas transitables. 
              Ventas por mayor directo de fábrica con envíos a todo el país.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Soluciones</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/soluciones/discos-soporte-para-constructoras" className="hover:text-blue-500 transition-colors">Para Constructoras</Link></li>
              <li><Link href="/soluciones/terraza-transitable" className="hover:text-blue-500 transition-colors">Terraza Transitable</Link></li>
              <li><Link href="/soluciones/nivelar-piso-exterior" className="hover:text-blue-500 transition-colors">Nivelar Pisos</Link></li>
              <li><Link href="/envios/entrega-inmediata-discos-soporte" className="hover:text-amber-500 transition-colors font-bold">Entrega Inmediata</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Recursos</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/guias/especificaciones-discos-soporte-baldosones" className="hover:text-blue-500 transition-colors">Ficha Técnica</Link></li>
              <li><Link href="/guias/como-instalar-discos-soporte" className="hover:text-blue-500 transition-colors">Manual de Uso</Link></li>
              <li><Link href="/guias/problemas-comunes-baldosones-soporte" className="hover:text-blue-500 transition-colors">Problemas Comunes</Link></li>
              <li><Link href="/guias" className="hover:text-blue-500 transition-colors">Todas las Guías</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Contacto</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>{siteConfig.openingHours.display}</li>
              <li>{siteConfig.location.display}</li>
              <li>{siteConfig.phone.display}</li>
              <li>{siteConfig.email}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Ubicación Principal</span>
              <span className="text-sm text-slate-300">Temperley, Buenos Aires</span>
            </div>
            <div className="w-px h-8 bg-slate-800 self-center"></div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Zonas de Envío</span>
              <span className="text-sm text-slate-300">Todo el país a través de expresos</span>
            </div>
          </div>
          
          <div className="text-[10px] hidden md:flex gap-4 font-mono">
            <span className="text-slate-500 italic">JSON-LD: LocalBusiness Verified</span>
            <span className="text-blue-500">Next.js App Router</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-6">
              <Link href="/sitemap.xml" className="text-xs hover:text-white transition-colors">Sitemap</Link>
              <Link href="/privacidad" className="text-xs hover:text-white transition-colors">Políticas</Link>
            </div>
            <div className="text-slate-300 font-bold border border-slate-700 px-2 py-1 rounded text-[10px]">Sitio estático</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
