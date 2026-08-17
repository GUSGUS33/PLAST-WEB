export type GeoLinkPolicy = 'hub' | 'selected' | 'none';

export interface LinkAnchor {
  slug: string;
  anchor: string;
}

export interface EntityLinkRelation {
  id: string;
  geoLinkPolicy?: GeoLinkPolicy;
  hubAnchor?: string;
  relatedProducts?: LinkAnchor[];
  relatedSolutions?: LinkAnchor[];
  relatedGuides?: LinkAnchor[];
  relatedSegments?: LinkAnchor[];
  relatedGeos?: LinkAnchor[];
}

export const internalLinkMap: Record<string, EntityLinkRelation> = {
  // PRODUCTS - National Money Page -> Hub Envíos
  'disco-soporte-baldosones': {
    id: 'disco-soporte-baldosones',
    geoLinkPolicy: 'hub',
    hubAnchor: 'Consultar cobertura y despachos a todo el país',
    relatedSolutions: [
      { slug: 'terraza-transitable', anchor: 'soluciones para terrazas transitables' },
      { slug: 'piso-sobre-membrana', anchor: 'colocación de pisos sobre membrana' },
      { slug: 'nivelar-piso-exterior', anchor: 'nivelación de pisos exteriores' },
    ],
    relatedGuides: [
      { slug: 'como-instalar-discos-soporte', anchor: 'guía de instalación paso a paso' },
      { slug: 'discos-soporte-por-m2', anchor: 'cálculo de discos por metro cuadrado' },
    ]
  },

  // SOLUTIONS - Selected high-affinity solutions link to Córdoba; others to Hub Envíos
  'terraza-transitable': {
    id: 'terraza-transitable',
    geoLinkPolicy: 'selected',
    relatedProducts: [
      { slug: 'disco-soporte-baldosones', anchor: 'Discos Soporte para Baldosones PLASTEM' }
    ],
    relatedSolutions: [
      { slug: 'piso-sobre-membrana', anchor: 'protección y colocación sobre membrana asfáltica' },
      { slug: 'nivelar-piso-exterior', anchor: 'métodos para nivelar pisos exteriores en seco' },
      { slug: 'evitar-filtraciones-terraza', anchor: 'prevención de filtraciones en azoteas' }
    ],
    relatedGuides: [
      { slug: 'como-instalar-discos-soporte', anchor: 'guía de instalación de terrazas secas' },
      { slug: 'discos-soporte-por-m2', anchor: 'cómo calcular la cantidad de soportes' }
    ],
    relatedGeos: [
      { slug: 'cordoba', anchor: 'consultar envíos de Discos Soporte a la Provincia de Córdoba' }
    ]
  },

  'piso-sobre-membrana': {
    id: 'piso-sobre-membrana',
    geoLinkPolicy: 'selected',
    relatedProducts: [
      { slug: 'disco-soporte-baldosones', anchor: 'Discos Soporte de polipropileno PLASTEM' }
    ],
    relatedSolutions: [
      { slug: 'terraza-transitable', anchor: 'cómo armar una terraza transitable' },
      { slug: 'evitar-filtraciones-terraza', anchor: 'solución a filtraciones y humedad en techos' }
    ],
    relatedGuides: [
      { slug: 'como-instalar-discos-soporte', anchor: 'instalación paso a paso sin dañar la membrana' }
    ],
    relatedGeos: [
      { slug: 'cordoba', anchor: 'cobertura y despachos para obras en Córdoba' }
    ]
  },

  'nivelar-piso-exterior': {
    id: 'nivelar-piso-exterior',
    geoLinkPolicy: 'hub',
    hubAnchor: 'cobertura y envíos para nivelar pisos en todo el país',
    relatedProducts: [
      { slug: 'disco-soporte-baldosones', anchor: 'Discos Soporte con aletas niveladoras' }
    ],
    relatedSolutions: [
      { slug: 'terraza-transitable', anchor: 'transformación de azoteas en terrazas transitables' },
      { slug: 'piso-sobre-membrana', anchor: 'colocación de pisos flotantes sobre membrana' }
    ],
    relatedGuides: [
      { slug: 'como-nivelar-terraza', anchor: 'guía para nivelar terrazas con pendientes' }
    ]
  },

  'evitar-filtraciones-terraza': {
    id: 'evitar-filtraciones-terraza',
    geoLinkPolicy: 'hub',
    hubAnchor: 'consultar envíos y despacho nacional de materiales',
    relatedProducts: [
      { slug: 'disco-soporte-baldosones', anchor: 'sistema de soporte ventilado PLASTEM' }
    ],
    relatedSolutions: [
      { slug: 'piso-sobre-membrana', anchor: 'protección mecánica de la membrana impermeabilizante' },
      { slug: 'terraza-transitable', anchor: 'construcción de terrazas secas transitables' }
    ],
    relatedGuides: [
      { slug: 'como-instalar-discos-soporte', anchor: 'guía técnica de colocación en seco' }
    ]
  },

  // SEGMENTS - Constructoras -> Córdoba; Arquitectos -> Hub Envíos
  'para-constructoras': {
    id: 'para-constructoras',
    geoLinkPolicy: 'selected',
    relatedProducts: [
      { slug: 'disco-soporte-baldosones', anchor: 'provisión mayorista de Discos Soporte PLASTEM' }
    ],
    relatedSegments: [
      { slug: 'para-arquitectos', anchor: 'asesoramiento técnico para estudios de arquitectura' }
    ],
    relatedSolutions: [
      { slug: 'terraza-transitable', anchor: 'soluciones de terrazas secas para desarrollos' },
      { slug: 'discos-soporte-para-constructoras', anchor: 'provisión directa de fábrica para grandes obras' }
    ],
    relatedGeos: [
      { slug: 'cordoba', anchor: 'despachos mayoristas para obras en la Provincia de Córdoba' }
    ]
  },

  'para-arquitectos': {
    id: 'para-arquitectos',
    geoLinkPolicy: 'hub',
    hubAnchor: 'consultar cobertura de envíos para proyectos en todo el país',
    relatedProducts: [
      { slug: 'disco-soporte-baldosones', anchor: 'Discos Soporte para pliegos y especificaciones' }
    ],
    relatedSegments: [
      { slug: 'para-constructoras', anchor: 'soluciones integrales para empresas constructoras' }
    ],
    relatedSolutions: [
      { slug: 'terraza-transitable', anchor: 'proyectos de terrazas transitables y verdes' },
      { slug: 'especificaciones-discos-soporte-baldosones', anchor: 'especificaciones técnicas y ensayos' }
    ]
  },

  // GUIDES - Educational Content -> Hub Envíos / Product
  'como-instalar-discos-soporte': {
    id: 'como-instalar-discos-soporte',
    geoLinkPolicy: 'hub',
    hubAnchor: 'información de envíos y logística a todo el país',
    relatedProducts: [
      { slug: 'disco-soporte-baldosones', anchor: 'Discos Soporte PLASTEM de alta resistencia' }
    ],
    relatedSolutions: [
      { slug: 'terraza-transitable', anchor: 'cómo armar una terraza transitable' },
      { slug: 'nivelar-piso-exterior', anchor: 'nivelación de pisos exteriores sin contrapiso' }
    ]
  },

  'discos-soporte-por-m2': {
    id: 'discos-soporte-por-m2',
    geoLinkPolicy: 'hub',
    hubAnchor: 'consultar envíos para el volumen calculado',
    relatedProducts: [
      { slug: 'disco-soporte-baldosones', anchor: 'Discos Soporte para Baldosones' }
    ],
    relatedSolutions: [
      { slug: 'terraza-transitable', anchor: 'desarrollo de terrazas transitables' }
    ]
  },

  // GEO PILOT - Córdoba Geo Page links UP to products, solutions, guides, segments
  'cordoba': {
    id: 'cordoba',
    geoLinkPolicy: 'none',
    relatedProducts: [
      { slug: 'disco-soporte-baldosones', anchor: 'Discos Soporte para Baldosones PLASTEM' }
    ],
    relatedSolutions: [
      { slug: 'terraza-transitable', anchor: 'soluciones para terrazas transitables en seco' },
      { slug: 'piso-sobre-membrana', anchor: 'colocación de pisos sobre membrana impermeabilizante' },
      { slug: 'nivelar-piso-exterior', anchor: 'nivelación de pisos exteriores sin obra húmeda' }
    ],
    relatedSegments: [
      { slug: 'para-constructoras', anchor: 'abastecimiento a constructoras y desarrollos en Córdoba' },
      { slug: 'para-arquitectos', anchor: 'asesoramiento técnico para estudios de arquitectura en Córdoba' }
    ],
    relatedGuides: [
      { slug: 'como-instalar-discos-soporte', anchor: 'guía paso a paso de instalación' },
      { slug: 'discos-soporte-por-m2', anchor: 'cálculo de cantidad de soportes por m²' }
    ]
  }
};

export function getInternalLinks(slug: string): EntityLinkRelation | undefined {
  return internalLinkMap[slug];
}
