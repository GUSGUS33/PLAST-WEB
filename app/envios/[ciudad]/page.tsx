import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Package, Truck, ShieldCheck, ArrowRight, HelpCircle, Building2, BookOpen, MessageCircle, ChevronRight, Calculator } from 'lucide-react';
import { getPublishedGeoLocations, getGeoLocationBySlug } from '@/data/geo';
import { ProductCalculator } from '@/components/ProductCalculator';
import { DynamicImage } from '@/components/DynamicImage';

export async function generateStaticParams() {
  return getPublishedGeoLocations().map((g) => ({ ciudad: g.slug }));
}

type Props = {
  params: Promise<{ ciudad: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ciudad: slug } = await params;
  const city = getGeoLocationBySlug(slug);
  
  if (!city || !city.indexable || city.status === 'draft') {
    return { title: 'Ciudad no encontrada' };
  }

  return {
    title: city.seo.metaTitle || `${city.name} | PLASTEM`,
    description: city.seo.metaDescription || '',
    alternates: {
      canonical: `/envios/${slug}`,
    },
  };
}

export default async function CiudadPage({ params }: Props) {
  const { ciudad: slug } = await params;
  const city = getGeoLocationBySlug(slug);

  if (!city || !city.indexable || city.status === 'draft') {
    notFound();
  }

  const entityName = city.geoType === 'province' ? `Provincia de ${city.name}` : city.name;

  // Generic child cities & parent province lookup for hierarchical linking
  const childCities = getPublishedGeoLocations().filter(
    (g) => g.parentProvinceSlug === city.slug
  );
  const parentProvince = city.parentProvinceSlug
    ? getGeoLocationBySlug(city.parentProvinceSlug)
    : null;
  const isParentPublished =
    parentProvince && parentProvince.indexable && parentProvince.status !== 'draft';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://www.plastem.com.ar/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Envíos',
        item: 'https://www.plastem.com.ar/envios'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.name,
        item: `https://www.plastem.com.ar/envios/${city.slug}`
      }
    ]
  };

  const whatsappHeroMsg = `Hola PLASTEM, quisiera consultar sobre envíos de Discos Soporte a la ${entityName}.`;
  const whatsappHeroLink = `https://wa.me/5491130213258?text=${encodeURIComponent(whatsappHeroMsg)}`;

  const h1Title = city.seo.h1 || `Discos Soporte para Baldosones con Envíos a ${city.name}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      <script key="faqSchema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script key="breadcrumbSchema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* BREADCRUMB VISIBLE */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 py-3 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/envios" className="hover:text-blue-600 transition-colors">Envíos</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">{city.name}</span>
        </div>
      </nav>

      {/* BLOQUE 1 — HERO GEOGRÁFICO */}
      <section className="bg-white py-14 md:py-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-6 border border-blue-100">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Venta Directa de Fábrica • Envíos a la {entityName}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {h1Title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {city.intro || `Venta directa de fábrica de discos soporte para baldosones con envíos coordinados a la ${entityName}. Brindamos asesoramiento técnico y cálculo de piezas para proyectos residenciales y corporativos.`}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#calculadora" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              <Calculator className="w-4 h-4" />
              Solicitar presupuesto para {city.name}
            </a>
            <a 
              href={whatsappHeroLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-green-600 transition-all shadow-lg shadow-green-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar envío por WhatsApp
            </a>
          </div>

          {/* Dynamic Image for city location */}
          <div className="mt-10 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <DynamicImage category="envios" slug={slug} priority enableZoom showCaption aspectRatio="16/9" />
          </div>
        </div>
      </section>

      {/* BLOQUE 2 — PRODUCTO DISPONIBLE */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Disco Soporte PLASTEM</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Discos Soporte PLASTEM para proyectos en {city.name}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Nuestros discos soporte de polipropileno inyectado están diseñados para la colocación en seco de baldosones cementicios en terrazas, balcones y azoteas. Permiten elevar el piso creando una cámara de aire y juntas de 5 mm que garantizan un drenaje pluvial continuo, protegiendo la impermeabilización sin requerir obra húmeda ni contrapisos pesados.
                </p>
                <p className="text-slate-700 text-sm font-medium bg-blue-50/60 p-4 rounded-xl border border-blue-100/80 mb-6">
                  El detalle técnico completo de resistencia mecánica, dimensiones y especificaciones técnicas del producto se encuentra en la ficha oficial de{' '}
                  <Link href="/productos/disco-soporte-baldosones" className="text-blue-700 font-bold underline hover:text-blue-900">
                    Discos Soporte para baldosones
                  </Link>.
                </p>
              </div>

              {/* Slot estructural de imagen de producto */}
              <div className="lg:col-span-4 bg-slate-100 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[220px]">
                {city.images?.product?.url ? (
                  <img 
                    src={city.images.product.url} 
                    alt={city.images.product.alt || "Disco Soporte PLASTEM para baldosones"} 
                    className="max-h-48 object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="space-y-3">
                    <Package className="w-12 h-12 text-slate-400 mx-auto" />
                    <div>
                      <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider mb-1">
                        Disco Soporte PLASTEM
                      </span>
                      <span className="text-[11px] text-slate-500 block leading-tight max-w-[200px] mx-auto">
                        Diámetro: 146mm | Junta: 5mm | Polipropileno Inyectado
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3 — CALCULADORA */}
      <section id="calculadora" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Calculá cuántos Discos Soporte necesitás para tu proyecto en {city.name}
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Ingresá la superficie en metros cuadrados y la medida del baldosón para obtener una estimación precisa de piezas requeridas.
            </p>
          </div>

          <ProductCalculator theme="light" defaultCity={city.name} />
        </div>
      </section>

      {/* BLOQUE 4 — CÓMO RECIBIR TU PEDIDO */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Cómo recibir tu pedido de Discos Soporte en {city.name}
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Proceso transparente de compra directa y despacho desde fábrica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Consulta y Asesoramiento</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nos indicás la superficie en m² de tu obra y la medida del baldosón a utilizar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Cotización y Preparación</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                PLASTEM cotiza los discos necesarios y prepara el pedido en cajas cerradas en nuestra planta industrial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Coordinación de Transporte</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Para el interior, puede utilizarse un transporte de carga o expreso elegido por el cliente con depósito en Buenos Aires.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">4</div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Despacho y Coordinación Logística</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Entregamos la carga en la empresa de transporte acordada. El costo del envío se cotiza o coordina por separado con el cliente.
              </p>
            </div>
          </div>

          {/* Slot estructural para imagen de logística/embalaje */}
          {city.images?.logistics?.url && (
            <div className="mt-8 bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center gap-4">
              <img 
                src={city.images.logistics.url} 
                alt={city.images.logistics.alt || "Discos Soporte PLASTEM preparados para despacho"} 
                className="w-full md:w-48 h-32 object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <p className="text-xs text-slate-600">
                {city.images.logistics.caption || "Despacho en cajas cerradas preparadas directamente en nuestra planta industrial."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* BLOQUE 5 — COBERTURA DENTRO DE LA ENTIDAD */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold mb-4">
            <Truck className="w-4 h-4 text-blue-600" />
            <span>Cobertura de Envíos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Cobertura de envíos en la {entityName}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-3xl mx-auto mb-6">
            PLASTEM comercializa Discos Soporte con posibilidad de despacho a localidades de toda la {entityName}. Atendemos consultas de proyectos en {city.primaryLocations.length > 1 ? `${city.primaryLocations.slice(0, -1).join(', ')} y ${city.primaryLocations[city.primaryLocations.length - 1]}` : city.primaryLocations[0] || entityName}, así como en otros puntos de la provincia.
          </p>

          {/* Dynamic contextual link for province <-> child cities */}
          {childCities.length > 0 && (
            <div className="mb-6 p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-center max-w-2xl mx-auto">
              <p className="text-xs text-slate-700 font-medium">
                {childCities.length === 1 ? (
                  <>
                    ¿Buscás información logística específica para proyectos en la ciudad de {childCities[0].name}? Consultá nuestra sección de{' '}
                    <Link href={`/envios/${childCities[0].slug}`} className="text-blue-700 font-bold underline hover:text-blue-900">
                      envíos de Discos Soporte a {childCities[0].name}
                    </Link>.
                  </>
                ) : (
                  <>
                    ¿Buscás información logística específica para proyectos en ciudades clave de la provincia? Consultá nuestras secciones de{' '}
                    {childCities.map((child, idx) => (
                      <span key={child.slug}>
                        {idx > 0 && (idx === childCities.length - 1 ? ' y ' : ', ')}
                        <Link href={`/envios/${child.slug}`} className="text-blue-700 font-bold underline hover:text-blue-900">
                          envíos a {child.name}
                        </Link>
                      </span>
                    ))}.
                  </>
                )}
              </p>
            </div>
          )}

          {isParentPublished && parentProvince && (
            <div className="mb-6 p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-center max-w-2xl mx-auto">
              <p className="text-xs text-slate-700 font-medium">
                ¿Buscás envíos a otras localidades o municipios de la provincia? Consultá la cobertura general para la{' '}
                <Link href={`/envios/${parentProvince.slug}`} className="text-blue-700 font-bold underline hover:text-blue-900">
                  Provincia de {parentProvince.name}
                </Link>.
              </p>
            </div>
          )}

          <p className="text-slate-500 text-xs leading-relaxed max-w-2xl mx-auto italic bg-slate-50 p-4 rounded-xl border border-slate-200">
            La modalidad y el costo del transporte se coordinan por separado según el destino, el volumen del pedido y la empresa logística seleccionada por el cliente.
          </p>
        </div>
      </section>

      {/* BLOQUE 6 — HUB DE INTENCIONES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Soluciones según la aplicación de tu proyecto
            </h2>
            <p className="text-slate-600 text-sm">
              Conocé las aplicaciones más frecuentes del sistema de piso flotante exterior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Terrazas Transitables</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Transformá azoteas inactivas en ambientes habitables sin sumar cargas pesadas a la losa.
              </p>
              <Link 
                href="/soluciones/terraza-transitable" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>soluciones para terrazas transitables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Protección de Membrana</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Evitá el punzonamiento por tránsito directo y protegé la aislación del deterioro solar.
              </p>
              <Link 
                href="/soluciones/evitar-filtraciones-terraza" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>proteger la membrana impermeable</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Nivelación de Pisos Exteriores</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Absorbé pendientes e imperfecciones en balcones y patios apilando los Discos Soporte según las especificaciones técnicas recomendadas.
              </p>
              <Link 
                href="/soluciones/nivelar-piso-exterior" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>nivelar pisos exteriores en seco</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Estudios de Arquitectura</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Asistencia técnica para especificar el sistema en pliegos y planos de obra.
              </p>
              <Link 
                href="/soluciones/para-arquitectos" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>proyectos de arquitectura</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors md:col-span-2">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Empresas Constructoras</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Provisión directa desde fábrica para desarrollos edilicios y obras corporativas de gran escala en {city.name}.
              </p>
              <Link 
                href="/soluciones/para-constructoras" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>obras y constructoras</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 7 — GUÍAS RELACIONADAS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Guías técnicas paso a paso
            </h2>
            <p className="text-slate-600 text-sm">
              Documentación técnica y metodologías de instalación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Instalación en Seco</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Pasos recomendados para la preparación de la superficie, colocación de apoyos y escuadra de baldosones.
              </p>
              <Link 
                href="/guias/como-instalar-discos-soporte" 
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>cómo instalar los Discos Soporte</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Calculator className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Cálculo de Insumos</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Explicación de la fórmula de rendimiento por metro cuadrado según la geometría del baldosón.
              </p>
              <Link 
                href="/guias/discos-soporte-por-m2" 
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>calcular la cantidad de soportes por m²</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Slot estructural para foto de instalación */}
            {city.images?.installation?.url && (
              <div className="md:col-span-2 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center gap-6">
                <img 
                  src={city.images.installation.url} 
                  alt={city.images.installation.alt || "Instalación de Disco Soporte bajo baldosón"} 
                  className="w-full md:w-64 h-40 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Detalle de Colocación en Obra</h4>
                  <p className="text-slate-600 text-sm">
                    {city.images.installation.caption || "Detalle de apoyo directo del baldosón sobre Disco Soporte PLASTEM sin fijaciones mecánicas."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BLOQUE 8 — B2B */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-blue-400 rounded-full text-xs font-semibold mb-4 border border-slate-700">
              <Building2 className="w-4 h-4" />
              <span>Atención B2B Corporativa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Atención directa para profesionales y empresas en {city.name}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Brindamos atención personalizada y venta directa desde fábrica a empresas constructoras, estudios de arquitectura y fábricas de mosaicos con requerimientos de volumen en la {entityName}. Coordinamos con el cliente la modalidad de despacho y transporte más adecuada para su pedido.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <span>Para cotizaciones corporativas:</span>
              <Link href="/soluciones/para-constructoras" className="text-blue-400 underline hover:text-blue-300">
                obras y constructoras
              </Link>
              <span>•</span>
              <Link href="/soluciones/para-arquitectos" className="text-blue-400 underline hover:text-blue-300">
                estudios de arquitectura
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 9 — FAQ GEOGRÁFICA */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold mb-3">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Preguntas Frecuentes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Preguntas frecuentes sobre envíos a {city.name}
            </h2>
          </div>

          <div className="space-y-4">
            {city.faq.map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {item.question}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 10 — CTA FINAL */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">
            Comenzá tu proyecto en {city.name} con Venta Directa de Fábrica
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Asesoramiento técnico personalizado, cálculo de piezas y coordinación de envío a cualquier punto de la {entityName}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#calculadora" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
            >
              Solicitar presupuesto
            </a>
            <a 
              href={whatsappHeroLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-green-600 transition-all shadow-lg shadow-green-600/30"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

