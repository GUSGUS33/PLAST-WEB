import Link from 'next/link';
import { products } from '@/data/products';
import { Package, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import { whatsappUrl } from '@/data/site';

export const metadata: Metadata = {
  title: 'Productos | PLASTEM',
  description: 'Conozca nuestra línea de productos para construcción en seco, terrazas transitables y pisos flotantes exteriores.',
};

export default function ProductosPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Catálogo de Productos
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Insumos de alta resistencia fabricados en Argentina para soluciones constructivas de última generación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(products).map((product) => (
            <div key={product.slug} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/30 transition-all flex flex-col">
              <div className="h-48 bg-slate-100 flex items-center justify-center">
                <Package className="w-20 h-20 text-slate-300 group-hover:scale-110 group-hover:text-brand/50 transition-all" />
              </div>
              <div className="p-8 flex-grow">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors">
                  {product.name}
                </h2>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {product.shortDescription}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit.split(':')[0]}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/productos/${product.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-dark transition-all w-full justify-center group-hover:shadow-lg shadow-brand/20"
                >
                  Ver detalles <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-dark rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase italic">¿Busca precios por mayor?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Somos fábrica directa. Ofrecemos descuentos especiales para constructoras, estudios de arquitectura y arquitectos independientes.
          </p>
          <Link 
            href={whatsappUrl()} 
            target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold uppercase tracking-widest transition-all shadow-xl shadow-green-900/20"
          >
            Solicitar Presupuesto Gremio
          </Link>
        </div>
      </div>
    </div>
  );
}
