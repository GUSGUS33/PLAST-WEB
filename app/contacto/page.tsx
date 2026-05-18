import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, whatsappUrl } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contacto | PLASTEM',
  description: 'Contáctese con nuestro equipo de ventas y asesoramiento técnico. Venta directa de fábrica de discos soporte para baldosones.',
  alternates: {
    canonical: '/contacto',
  },
};

export default function ContactoPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Canales de Contacto
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estamos para asesorarlo en cada etapa de su proyecto. Elijá el medio que prefiera.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-wide">Ventas y Asesoramiento</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">WhatsApp</h3>
                    <p className="text-slate-500 text-sm mb-2">Respuesta rápida para cotizaciones y stock.</p>
                    <Link 
                      href={whatsappUrl()} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-bold hover:underline"
                    >
                      {siteConfig.phone.display}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <p className="text-slate-500 text-sm mb-2">Para consultas formales y órdenes de compra.</p>
                    <Link 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-blue-600 font-bold hover:underline"
                    >
                      {siteConfig.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Fábrica</h3>
                    <p className="text-slate-500 text-sm mb-1">Zona Industrial GBA Sur.</p>
                    <p className="text-slate-800 font-medium">{siteConfig.location.display}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Horarios de Atención</h3>
                    <p className="text-slate-500 text-sm">{siteConfig.openingHours.display}.</p>
                    <p className="text-slate-500 text-sm">Sábados y Domingos: Cerrado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form or Info */}
          <div className="bg-brand-dark rounded-3xl p-8 md:p-12 text-white h-full flex flex-col justify-center">
            <h2 className="text-3xl font-black mb-6 uppercase italic">¿Necesita un presupuesto detallado?</h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Si tiene los planos de su terraza o la cantidad de metros cuadrados, envíenos la información por WhatsApp indicando el tamaño de los baldosones que piensa colocar.
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h4 className="font-bold mb-2 text-white">Información que ayuda:</h4>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>Metros cuadrados totales de la superficie.</li>
                  <li>Medidas de los baldosones (Ej: 40x40, 50x50, 60x40).</li>
                  <li>Localidad de envío.</li>
                </ul>
              </div>
              <Link 
                href={whatsappUrl('Hola, adjunto datos de mi obra para presupuesto.')} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-brand-dark rounded-xl font-bold uppercase tracking-widest text-center hover:bg-slate-100 transition-all inline-block shadow-xl shadow-brand-dark/50"
              >
                Enviar Datos por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
