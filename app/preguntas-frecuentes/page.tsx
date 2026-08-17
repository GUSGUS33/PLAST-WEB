import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | PLASTEM',
  description: 'Encuentre respuestas a dudas comunes sobre envíos, compras mayoristas e instalación de discos soporte para pisos flotantes.',
  alternates: {
    canonical: '/preguntas-frecuentes',
  },
};

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Realizan ventas por menor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Somos fábrica. Trabajamos con venta mayorista y mínimos de compra por unidad de empaque (bultos cerrados).'
        }
      },
      {
        '@type': 'Question',
        name: '¿Hacen envíos al interior del país?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, entregamos la mercadería sin cargo en la sucursal del expreso o transporte ubicado en CABA/GBA que el cliente nos indique. Luego el cliente abona el trayecto en destino.'
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <script key="faqSchema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Preguntas Frecuentes</h1>
          <p className="text-lg text-slate-600">Resolvemos sus dudas comerciales y técnicas para acelerar su próxima compra.</p>
        </div>

        <div className="space-y-12">
          {/* Seccion */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Sobre Compras y Pagos</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">¿Realizan ventas por menor?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Somos fábrica. Trabajamos exclusivamente con venta mayorista y mínimos de compra por unidad de empaque (bultos cerrados). Consulte volúmenes mínimos por producto.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">¿Cuáles son las formas de pago?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Aceptamos transferencias bancarias, cheques (sujeto a verificación comercial) y pagos de contado. Consulte financiación y listas de descuentos por pagos adelantados.</p>
              </div>
            </div>
          </div>

          {/* Seccion */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Sobre Envíos</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">¿Hacen envíos al interior del país?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Sí, entregamos la mercadería sin cargo en la sucursal del expreso o transporte habilitado ubicado en CABA o GBA que usted indique. El servicio desde el expreso hasta su ciudad es a cargo del comprador en destino.</p>
              </div>
            </div>
          </div>

          {/* Seccion */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Sobre los Productos Ténicos</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">¿Qué altura regulan los discos soporte?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Nuestros discos fijos tienen espesores estándar. Para grandes desniveles se recomienda apilar un número determinado o consultar alternativas de regulación (ver ficha del producto).</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 p-10 rounded-3xl text-center text-white shadow-xl shadow-blue-500/20">
          <h3 className="text-2xl font-bold mb-4">¿No encontró su respuesta?</h3>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">Un asesor comercial está disponible para brindarle información técnica y cotizaciones detalladas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5491130213258" target="_blank" className="py-4 px-8 bg-green-500 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-green-600 transition-colors shadow-lg shadow-green-600/30">
              Chatear por WhatsApp
            </Link>
            <Link href="/#calculador" className="py-4 px-8 bg-white text-blue-900 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-lg">
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
