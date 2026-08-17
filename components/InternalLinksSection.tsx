import Link from 'next/link';
import { Truck, Layers, ArrowRight, MapPin, BookOpen, Globe } from 'lucide-react';
import { getInternalLinks } from '@/data/internal-links';

type Props = {
  slug: string;
  className?: string;
};

export function InternalLinksSection({ slug, className = '' }: Props) {
  const links = getInternalLinks(slug);
  if (!links) return null;

  const policy = links.geoLinkPolicy || 'selected';
  const showHubLink = policy === 'hub';
  const showSelectedGeos = policy === 'selected' && links.relatedGeos && links.relatedGeos.length > 0;
  const showGeoBlock = showHubLink || showSelectedGeos;

  const hasSolutions = links.relatedSolutions && links.relatedSolutions.length > 0;
  const hasGuides = links.relatedGuides && links.relatedGuides.length > 0;
  const hasProducts = links.relatedProducts && links.relatedProducts.length > 0;
  const hasSegments = links.relatedSegments && links.relatedSegments.length > 0;

  if (!showGeoBlock && !hasSolutions && !hasGuides && !hasProducts && !hasSegments) return null;

  return (
    <div className={`bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm ${className}`}>
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Layers className="w-5 h-5 text-blue-600" />
        <span>Disponibilidad y Contenido Relacionado</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LOGISTICS COVERAGE BLOCK */}
        {showGeoBlock && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-600 mb-2">
                <Truck className="w-4 h-4" /> Cobertura Logística
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">Envíos y Logística Nacional</h4>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Coordinamos despachos industriales y envíos de Discos Soporte PLASTEM para proyectos en todo el país.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              {showHubLink && (
                <Link
                  href="/envios"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <Globe className="w-4 h-4 shrink-0 text-blue-500" />
                  <span>{links.hubAnchor || 'Consultar envíos y cobertura a todo el país'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}

              {showSelectedGeos && (
                <>
                  {links.relatedGeos!.map((geo) => (
                    <Link
                      key={geo.slug}
                      href={`/envios/${geo.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline block"
                    >
                      <MapPin className="w-4 h-4 shrink-0 text-blue-500" />
                      <span>{geo.anchor}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                  <div className="pt-2">
                    <Link
                      href="/envios"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 font-medium"
                    >
                      <span>Ver hub de cobertura a todo el país →</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* RELATED PRODUCTS / SEGMENTS (if present, e.g. on geo pages) */}
        {hasProducts && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-600 mb-2">
                <Layers className="w-4 h-4" /> Producto Principal
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">Catálogo de Productos</h4>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Soportes plásticos de polipropileno directo de fábrica.
              </p>
            </div>
            <div className="space-y-2">
              {links.relatedProducts!.map((prod) => (
                <Link
                  key={prod.slug}
                  href={`/productos/${prod.slug}`}
                  className="block text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  → {prod.anchor}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* RELATED SOLUTIONS */}
        {hasSolutions && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-600 mb-2">
                <Layers className="w-4 h-4" /> Soluciones Relacionadas
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">Otras Soluciones Técnicas</h4>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Explore alternativas complementarias para la construcción y nivelación de exteriores.
              </p>
            </div>
            <div className="space-y-2">
              {links.relatedSolutions!.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/soluciones/${sol.slug}`}
                  className="block text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  → {sol.anchor}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* RELATED GUIDES */}
        {hasGuides && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between col-span-1 md:col-span-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-600 mb-2">
                <BookOpen className="w-4 h-4" /> Guías Técnicas
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">Guías y Manuales de Instalación</h4>
              <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                Consulte nuestros instructivos paso a paso para cómputo e instalación en obra.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {links.relatedGuides!.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guias/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100"
                >
                  <span>{guide.anchor}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
