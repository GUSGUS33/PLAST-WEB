import { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Políticas de Privacidad | PLASTEM',
  description: 'Información sobre el tratamiento de datos personales y condiciones de uso del sitio web de PLASTEM.',
};

export default function PrivacidadPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <h1 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Políticas de Privacidad</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">1. Recolección de Información</h2>
              <p>
                En PLASTEM, valoramos su privacidad. Los únicos datos que recolectamos son aquellos que usted nos proporciona voluntariamente a través de nuestro calculador o al contactarnos vía WhatsApp o email, con el fin exclusivo de enviarle presupuestos y responder sus consultas técnicas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">2. Uso de la Información</h2>
              <p>
                Su información se utiliza únicamente para el asesoramiento sobre nuestros productos y la gestión de pedidos de envío. No compartimos, vendemos ni alquilamos sus datos a terceros con fines publicitarios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">3. Cookies y Seguimiento</h2>
              <p>
                Utilizamos herramientas de análisis como Google Analytics para entender cómo los usuarios navegan nuestro sitio y así mejorar la experiencia del cliente. Estas herramientas recolectan información anónima sobre visitas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">4. Derechos del Usuario</h2>
              <p>
                Usted tiene derecho a solicitar la eliminación de sus datos de contacto de nuestra base de datos enviando un email a {siteConfig.email}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">5. Actualizaciones</h2>
              <p>
                Nos reservamos el derecho a modificar esta política para adaptarla a novedades legislativas o prácticas de la industria.
              </p>
            </section>

            <div className="pt-8 border-t border-slate-100 text-sm italic">
              Última actualización: Abril 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
