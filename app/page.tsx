import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, Truck, ShieldCheck, BadgeCheck, Phone } from 'lucide-react';
import { ProductCalculator } from '@/components/ProductCalculator';
import { whatsappUrl } from '@/data/site';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl flex flex-col justify-center gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full w-fit">
                <BadgeCheck className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Venta mayorista directo de fábrica</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Discos Soporte para Pisos Flotantes en <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">Argentina</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed mt-2">
                Convertí tu terraza, patio o balcón en un espacio transitable sin obra. Instalación en seco, rápida y sin dañar la membrana.
              </p>
              <p className="text-sm font-bold text-slate-700 mt-2 bg-slate-100 p-2 rounded-lg inline-block w-fit">
                ✨ Evita humedad, filtraciones y obras complicadas.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-4 md:hidden lg:grid">
                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
                  <p className="text-2xl font-bold text-blue-600">Desde 1985</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Fábrica Argentina</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
                  <p className="text-2xl font-bold text-blue-600">Stock</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Inmediato</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex flex-col text-center">
                  <Link 
                    href="#calculador" 
                    className="flex items-center justify-center py-4 px-8 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest text-sm sm:text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  >
                    Calcular discos y recibir presupuesto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <span className="text-xs mt-2 text-slate-500 font-medium">Te ayudamos a calcular la cantidad exacta</span>
                </div>
                <Link 
                  href={whatsappUrl()}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center py-4 px-8 bg-green-500 text-white rounded-xl font-bold uppercase tracking-widest text-sm sm:text-base hover:bg-green-600 transition-all shadow-lg shadow-green-200 h-fit"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Consultar WhatsApp
                </Link>
              </div>
            </div>
                  <div className="relative">
              <div className="aspect-square rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-2xl">
                 <Image src="/placeholders/terrace-installation.svg" alt="Instalación de terraza con discos soporte" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Alta resistencia para tránsito peatonal</p>
                  <p className="text-xs text-slate-500">Diseño estructural duradero</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust section missing in original */}
      <section className="py-8 bg-blue-600 text-white border-y border-blue-700">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-blue-500">
                <div><p className="font-bold uppercase italic leading-none">Desde 1985</p><p className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">Fabricación Propia</p></div>
               <div><p className="font-bold uppercase italic leading-none">Lunes a Viernes</p><p className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">8 a 17 hs</p></div>
               <div><p className="font-bold uppercase italic leading-none">Stock</p><p className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">Inmediato</p></div>
               <div><p className="font-bold uppercase italic leading-none">Envíos</p><p className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">a todo el país</p></div>
            </div>
         </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">¿Por qué usar el sistema de Piso Flotante PLASTEM?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-medium">Nuestro sistema de <Link href="/productos/disco-soporte-baldosones" className="text-blue-600 font-bold hover:underline">discos soporte para baldosones</Link> ofrece amplias ventajas que garantizan calidad, durabilidad y un desempeño superior en tránsito peatonal. Elegir PLASTEM es una decisión inteligente que le permitirá evitar gastos innecesarios a corto y largo plazo.</p>
           </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-3 uppercase italic leading-none">Adaptabilidad</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">El diseño incorpora cuatro fuelles flexibles que permiten una ligera adaptación a pequeños desniveles, evitando que los baldosones “tecleen”. Su base completamente plana protege la membrana impermeabilizante sin dañarla.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                <Layers className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-3 uppercase italic leading-none">Larga vida útil</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">Fabricados en polipropileno de alta densidad. Asegura alta resistencia y flexibilidad (no se quiebran), con una vida útil que permite su uso prolongado en exteriores.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                <Truck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-3 uppercase italic leading-none">Diseño optimizado</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">Cada soporte cuenta con cuatro drenajes para el agua. Además, son apilables hasta tres o cuatro unidades, permitiendo nivelar superficies o ganar altura de manera práctica y segura.</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8 justify-around">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-black text-slate-800 mb-2 uppercase italic leading-none text-blue-600">Medidas exactas</h3>
              <ul className="text-slate-600 text-sm space-y-1 font-medium">
                <li><strong>Altura:</strong> 12 mm</li>
                <li><strong>Juntas:</strong> 5 mm</li>
                <li><strong>Ø:</strong> 146 mm</li>
              </ul>
            </div>
            <div className="w-px h-20 bg-slate-200 hidden sm:block"></div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-black text-slate-800 mb-2 uppercase italic leading-none text-blue-600">Compatibilidad</h3>
              <p className="text-slate-600 text-sm max-w-xs font-medium">
                Soportes para baldosones de 40x40, 50x50, 40x60, 60x60 y 30x30 cm. Apto para terrazas transitables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objections Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">Preguntas frecuentes antes de comprar</h2>
              <p className="text-slate-600 font-medium">Resolvemos sus dudas técnicas y comerciales más habituales.</p>
           </div>
           
           <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 uppercase italic tracking-tight"><ShieldCheck className="text-blue-500 w-5 h-5"/> ¿Cuánto peso soporta?</h3>
                 <p className="text-sm text-slate-600 font-medium">Nuestros discos presentan una alta resistencia para tránsito peatonal intenso, colocación de mobiliario de exterior y macetas estándar. Están diseñados para no deformarse bajo las cargas habituales de una terraza o balcón residencial/comercial.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><ShieldCheck className="text-blue-500 w-5 h-5"/> ¿Sirve para exterior?</h3>
                 <p className="text-sm text-slate-600">Sí, es ideal para la intemperie. Resiste ciclos de frío/calor extremos, exposición directa al sol (rayos UV) y no se degrada con el agua.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><ShieldCheck className="text-blue-500 w-5 h-5"/> ¿Daña la membrana?</h3>
                 <p className="text-sm text-slate-600">En absoluto. Su base plana y bordes redondeados están diseñados específicamente para apoyar sobre membranas asfálticas o de PVC sin pincharlas ni friccionarlas.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Truck className="text-blue-500 w-5 h-5"/> ¿Cuánto cuesta el envío?</h3>
                 <p className="text-sm text-slate-600">Despachamos desde fábrica en Provincia de Buenos Aires hacia todo el país a través de diferentes expresos. El costo depende de la ciudad (vea más detalles sobre <Link href="/envios/buenos-aires" className="text-blue-600 hover:underline">envíos en Buenos Aires</Link> o <Link href="/envios/cordoba" className="text-blue-600 hover:underline">envíos a Córdoba</Link>). <Link href={whatsappUrl('Hola, necesito saber cuánto sale el envío.')} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">Consulte costo exacto por WhatsApp</Link>.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Layers className="text-blue-500 w-5 h-5"/> ¿Cuántos necesito?</h3>
                 <p className="text-sm text-slate-600">Depende de la medida del baldosón (ej: 40x40, 50x50, 60x40). Por regla general, calcule 1 disco por cada vértice de baldosa, con un pequeño excedente por recortes. Puede seguir nuestra <Link href="/guias/calcular-discos-soporte-terraza" className="text-blue-600 font-semibold hover:underline">guía para calcular la cantidad de discos soporte</Link>, o <Link href={whatsappUrl('Hola, necesito ayuda para calcular cantidad.')} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">consultarnos para que hagamos el cómputo exacto.</Link></p>
              </div>
           </div>

           <div className="mt-12 text-center flex flex-col items-center justify-center">
             <Link 
               href={whatsappUrl('Hola, tengo una consulta técnica sobre los discos soporte.')}
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center py-4 px-8 bg-green-500 text-white rounded-xl font-bold uppercase tracking-widest text-sm sm:text-base hover:bg-green-600 transition-all shadow-lg shadow-green-200"
             >
               <Phone className="mr-2 h-5 w-5" />
               Hablar por WhatsApp
             </Link>
             <p className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Consultas respondidas en menos de 24hs</p>
           </div>
        </div>
      </section>

      {/* Featured Products Form CTA block */}
      <section id="calculador" className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6">Calcule cuántos discos soporte necesita</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Complete el formulario indicando los detalles de su terraza o piso exterior flotante. Nuestro equipo realizará el cómputo de materiales y le enviará un presupuesto con precio de fábrica.
                </p>
                <ul className="space-y-4 mb-10 text-slate-700">
                  <li className="flex items-center gap-3">
                    <BadgeCheck className="w-5 h-5 text-blue-600" />
                    Cálculo preciso de discos soporte para baldosones
                  </li>
                  <li className="flex items-center gap-3">
                    <BadgeCheck className="w-5 h-5 text-blue-600" />
                    Asesoramiento especializado en colocación en seco
                  </li>
                  <li className="flex items-center gap-3">
                    <BadgeCheck className="w-5 h-5 text-blue-600" />
                    Envíos directos a su ciudad
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 border-l border-slate-100 p-10 md:p-16 flex flex-col justify-center">
                <div className="space-y-1 mb-8 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-slate-800">Solicitar Cómputo y Presupuesto</h3>
                  <p className="text-sm text-slate-500 italic">Asistencia especial técnica</p>
                </div>
                <ProductCalculator theme="light" />
                <div className="flex items-center justify-center gap-2 pt-2">
                    <span className="block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Respuesta inmediata en horario comercial</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
