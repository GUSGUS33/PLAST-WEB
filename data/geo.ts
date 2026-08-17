import { siteConfig } from './site';

export type GeoType = 'province' | 'city' | 'region' | 'autonomous-city';

const viaCargoOption = siteConfig.globalLogisticsOptions?.viaCargo;
const isViaCargoActive = Boolean(viaCargoOption && viaCargoOption.enabled);
const viaCargoName = isViaCargoActive ? viaCargoOption.carrierName : null;

const defaultPreferredCarriers = viaCargoName ? [viaCargoName] : [];
const defaultDeliveryType = viaCargoName
  ? `Despacho por expreso de carga o ${viaCargoName} (flete a cotizar o coordinar por separado)`
  : 'Despacho por expreso de carga (flete a cotizar o coordinar por separado)';


export type GeoStatus =
  | 'published'
  | 'draft'
  | 'needs-review';

export type VerificationStatus =
  | 'verified'
  | 'unverified'
  | 'missing';

export type FAQCategory =
  | 'logistics'
  | 'pickup'
  | 'minimum-order'
  | 'coverage'
  | 'product-options'
  | 'price'
  | 'b2b'
  | 'social-proof';

export interface GeoFAQ {
  category: FAQCategory;
  question: string;
  answer: string;
  verified: boolean;
}

export interface LogisticsData {
  dispatchOrigin?: string | null;
  deliveryType?: string | null;
  preferredCarriers?: string[];
  deliveryTime?: string | null;
  pickupAvailable?: boolean | null;
  pickupLocation?: string | null;
  packaging?: string | null;
  notes?: string | null;
}

export interface GeoImageSlot {
  url: string;
  alt: string;
  caption?: string;
}

export interface GeoImages {
  hero?: GeoImageSlot;
  product?: GeoImageSlot;
  installation?: GeoImageSlot;
  logistics?: GeoImageSlot;
}

export interface GeoLocationData {
  slug: string;
  name: string;

  geoType: GeoType;

  parentProvinceSlug?: string | null;
  parentProvinceName?: string | null;

  region?: string | null;

  status: GeoStatus;
  indexable: boolean;

  hasPhysicalPresence: boolean;

  primaryLocations?: string[];
  nearbyGeos?: string[];

  logistics: LogisticsData;

  images?: GeoImages;

  seo: {
    h1?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
  };

  intro?: string | null;

  faq: GeoFAQ[];

  relatedProducts: string[];
  relatedSolutions: string[];
  relatedGuides: string[];
  relatedSegments: string[];

  verification: {
    logistics: VerificationStatus;
    locations: VerificationStatus;
    seoContent: VerificationStatus;
  };

  internalNotes?: string[];
}

export const geoLocations: GeoLocationData[] = [
  // --- 1. LEGACY PUBLISHED / ACTIVE LOCATIONS (9 EXISTING URLS) ---
  {
    slug: 'buenos-aires',
    name: 'Buenos Aires',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Pampeana',
    status: 'needs-review',
    indexable: true,
    hasPhysicalPresence: false, // Provincial page represents regional coverage, not corporate plant site (registered in data/site.ts)
    primaryLocations: ['La Plata', 'Mar del Plata', 'GBA Sur', 'GBA Norte', 'GBA Oeste'],
    nearbyGeos: ['la-plata', 'mar-del-plata'],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: 'Despacho por expreso de carga o flete coordinado a obra',
      preferredCarriers: [],
      deliveryTime: null,
      pickupAvailable: true,
      pickupLocation: 'Planta industrial en Turdera / Temperley, GBA Sur',
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'Coordinación de fletes a obra en el Gran Buenos Aires y despachos a toda la Provincia de Buenos Aires.'
    },
    seo: {
      h1: 'Discos soporte para pisos flotantes en Buenos Aires',
      metaTitle: 'Fábrica de Discos Soporte en Buenos Aires | Venta Directa de Fábrica',
      metaDescription: 'Despacho directo de fábrica de discos soporte para baldosones a la Provincia de Buenos Aires. Solución ideal para constructoras, arquitectos y fábricas de mosaicos.'
    },
    intro: 'Abastecemos a constructoras, arquitectos y fábricas de mosaicos en la Provincia de Buenos Aires con insumos plásticos de alta resistencia. Despachamos directo de fábrica.',
    faq: [
      {
        category: 'logistics',
        question: '¿Cuentan con flete o despacho para la Provincia de Buenos Aires?',
        answer: 'Sí, desde nuestra planta industrial en GBA Sur coordinamos fletes directos a obra en los distintos municipios del Gran Buenos Aires y despachos por expreso a todo el interior de la provincia, así como la posibilidad de retiro presencial.',
        verified: true
      },
      {
        category: 'minimum-order',
        question: '¿Venden bolsas o cajas sueltas para obras en la Provincia de Buenos Aires?',
        answer: 'Sí. Ofrecemos venta directa por caja cerrada (de 50 o 100 unidades) tanto para obras de gran volumen como para profesionales y desarrollos en toda la provincia.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: ['para-arquitectos', 'para-constructoras', 'terraza-transitable'],
    relatedGuides: ['como-instalar-discos-soporte', 'discos-soporte-por-m2'],
    relatedSegments: ['para-constructoras', 'para-arquitectos'],
    verification: {
      logistics: 'verified',
      locations: 'verified',
      seoContent: 'verified'
    },
    internalNotes: [
      'Sanitized for PBA: CABA references removed. Represents Province of Buenos Aires.'
    ]
  },
  {
    slug: 'cordoba',
    name: 'Córdoba',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Centro',
    status: 'needs-review',
    indexable: true,
    hasPhysicalPresence: false,
    primaryLocations: [
      'Córdoba Capital',
      'Río Cuarto',
      'Villa María',
      'San Francisco',
      'Villa Carlos Paz',
      'Alta Gracia',
      'Río Tercero',
      'Jesús María'
    ],
    nearbyGeos: [],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: defaultDeliveryType,
      preferredCarriers: defaultPreferredCarriers,
      deliveryTime: null,
      pickupAvailable: false,
      pickupLocation: null,
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'Modalidad de envío a cotizar o coordinar por separado con el cliente.'
    },
    images: {
      hero: {
        url: '',
        alt: 'Terraza transitable terminada con Discos Soporte PLASTEM'
      },
      product: {
        url: '',
        alt: 'Disco Soporte PLASTEM para baldosones'
      },
      installation: {
        url: '',
        alt: 'Instalación de Disco Soporte bajo baldosón'
      },
      logistics: {
        url: '',
        alt: 'Discos Soporte PLASTEM preparados para despacho'
      }
    },
    seo: {
      h1: 'Discos Soporte para Baldosones con Envíos a Córdoba',
      metaTitle: 'Discos Soporte para Baldosones en Córdoba | Directo de Fábrica',
      metaDescription: 'Envíos de discos soporte para baldosones a la provincia de Córdoba. Venta directa de fábrica para constructoras, arquitectos y particulares. Consulte presupuesto de envío.'
    },
    intro: 'Venta directa de fábrica de discos soporte para baldosones con envíos coordinados a la provincia de Córdoba. Brindamos asesoramiento técnico y cálculo de piezas para proyectos residenciales y corporativos en toda la provincia.',
    faq: [
      {
        category: 'coverage',
        question: '¿Hacen envíos de Discos Soporte a la provincia de Córdoba?',
        answer: isViaCargoActive
          ? `Sí, coordinamos despachos de discos soporte para baldosones desde nuestra planta industrial a la provincia de Córdoba. Según el destino y la preferencia del cliente, puede consultarse ${viaCargoName} u otro transporte de carga acordado previamente.`
          : 'Sí, coordinamos despachos de discos soporte para baldosones desde nuestra planta industrial a la provincia de Córdoba mediante expresos de carga acordados previamente.',
        verified: true
      },
      {
        category: 'price',
        question: '¿Cómo se calcula el costo del envío a Córdoba?',
        answer: 'El costo de transporte se cotiza o coordina por separado según el destino, volumen de cajas y la empresa logística seleccionada. El transporte no está incluido en el precio del producto salvo acuerdo explícito.',
        verified: true
      },
      {
        category: 'logistics',
        question: '¿Qué información necesitan para cotizar un envío a Córdoba?',
        answer: 'Necesitamos conocer la superficie total en m², la medida del baldosón (40x40, 50x50 o 60x40 cm) y la localidad de destino en la provincia de Córdoba para calcular los bultos necesarios y coordinar la mejor alternativa de despacho.',
        verified: true
      },
      {
        category: 'minimum-order',
        question: '¿Cuál es la compra mínima para despachar a Córdoba?',
        answer: 'Ofrecemos venta por caja cerrada (de 50 o 100 unidades), lo que permite coordinar despachos tanto para pequeñas reformas particulares como para grandes obras en la provincia.',
        verified: true
      },
      {
        category: 'logistics',
        question: '¿Puedo coordinar el transporte que utilizo habitualmente para mi obra en Córdoba?',
        answer: 'Sí. Si su empresa cuenta con un expreso de confianza con depósito en CABA o Gran Buenos Aires, podemos entregar el pedido embalado en dicho transporte para su posterior traslado a Córdoba.',
        verified: true
      },
      {
        category: 'pickup',
        question: '¿Tienen depósito o retiro local en la provincia de Córdoba?',
        answer: 'No contamos con depósito ni sucursal física en Córdoba. Toda la producción se despacha directamente desde nuestra planta industrial en Argentina, garantizando precio directo de fábrica.',
        verified: true
      },
      {
        category: 'product-options',
        question: '¿Cómo ayudan a calcular la cantidad necesaria de Discos Soporte?',
        answer: 'Contamos con una calculadora online que estimará la cantidad exacta de discos según la superficie en m² y la medida del baldosón. También brindamos asesoramiento personalizado por WhatsApp.',
        verified: true
      },
      {
        category: 'b2b',
        question: '¿Ofrecen atención directa para constructoras y estudios de arquitectura en Córdoba?',
        answer: 'Sí, brindamos atención personalizada a empresas constructoras, estudios de arquitectura y profesionales de la edificación, coordinando la modalidad de despacho más conveniente para sus obras en Córdoba.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: ['terraza-transitable', 'evitar-filtraciones-terraza', 'nivelar-piso-exterior', 'para-arquitectos', 'para-constructoras'],
    relatedGuides: ['como-instalar-discos-soporte', 'discos-soporte-por-m2'],
    relatedSegments: ['para-constructoras', 'para-arquitectos'],
    verification: {
      logistics: 'verified',
      locations: 'unverified',
      seoContent: 'verified'
    },
    internalNotes: [
      '[DATO_FALTA: principales localidades de cobertura en Provincia de Córdoba]',
      '[DATO_FALTA: segmento fábricas de mosaicos]',
      '[DATO_FALTA: fotos reales de fábrica y obras para slots de imágenes]'
    ]
  },
  {
    slug: 'rosario',
    name: 'Rosario',
    geoType: 'city',
    parentProvinceSlug: 'santa-fe',
    parentProvinceName: 'Santa Fe',
    region: 'Centro',
    status: 'published',
    indexable: true,
    hasPhysicalPresence: false,
    primaryLocations: ['Rosario', 'Gran Rosario'],
    nearbyGeos: ['santa-fe'],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: 'Despacho mediante transporte o expreso coordinado con el cliente',
      preferredCarriers: [],
      deliveryTime: null,
      pickupAvailable: false,
      pickupLocation: null,
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'El costo y la modalidad del transporte se cotizan o coordinan por separado.'
    },
    seo: {
      h1: 'Discos soporte para pisos flotantes en Rosario',
      metaTitle: 'Discos Soporte para Terrazas en Rosario | Directo de Fábrica',
      metaDescription: 'Abastecemos a Rosario y Gran Rosario con discos soporte para pisos elevados. Venta directa de fábrica para terrazas sin contrapiso.'
    },
    intro: 'Abastecemos a Rosario y Gran Rosario con discos soporte para pisos elevados. Venta directa de fábrica.',
    faq: [
      {
        category: 'logistics',
        question: '¿Cómo envían los discos soporte a Rosario?',
        answer: 'Despachamos discos soporte para baldosones hacia Rosario y Gran Rosario mediante transporte o expreso coordinado con el cliente. El costo y la modalidad del flete se cotizan o coordinan por separado.',
        verified: true
      },
      {
        category: 'pickup',
        question: '¿Puedo retirar en fábrica si viajo a Buenos Aires?',
        answer: 'Por supuesto, muchas empresas y comisionistas retiran pedidos directamente de nuestra fábrica en Gran Buenos Aires Sur con previa coordinación.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: ['para-constructoras', 'terraza-transitable'],
    relatedGuides: ['como-instalar-discos-soporte', 'discos-soporte-por-m2'],
    relatedSegments: ['para-constructoras'],
    verification: {
      logistics: 'verified',
      locations: 'verified',
      seoContent: 'verified'
    },
    internalNotes: [
      'Valid city page with parent Santa Fe province.',
      '[DATO_FALTA: segmento fábricas de mosaicos]'
    ]
  },
  {
    slug: 'mendoza',
    name: 'Mendoza',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Cuyo',
    status: 'needs-review',
    indexable: true,
    hasPhysicalPresence: false,
    primaryLocations: ['Mendoza Capital', 'San Rafael'],
    nearbyGeos: [],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: defaultDeliveryType,
      preferredCarriers: defaultPreferredCarriers,
      deliveryTime: null,
      pickupAvailable: false,
      pickupLocation: null,
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'Modalidad de envío a cotizar o coordinar por separado con el cliente.'
    },
    seo: {
      h1: 'Discos Soporte para Baldosones con Envíos a Mendoza',
      metaTitle: 'Discos Soporte para Baldosones en Mendoza | Directo de Fábrica',
      metaDescription: 'Despacho directo de fábrica de discos soporte para baldosones a la provincia de Mendoza. Asesoramiento técnico y cotización de envío para obras y proyectos.'
    },
    intro: 'Venta directa de fábrica de discos soporte para baldosones con envíos coordinados a la provincia de Mendoza. Asesoramiento técnico y cálculo de piezas para proyectos en toda la provincia.',
    faq: [
      {
        category: 'logistics',
        question: '¿Cómo se coordinan los despachos de Discos Soporte a la provincia de Mendoza?',
        answer: isViaCargoActive
          ? `Coordinamos despachos de discos soporte para baldosones desde nuestra planta industrial hacia la provincia de Mendoza. Según el destino y la preferencia del cliente, puede consultarse ${viaCargoName} u otro transporte de carga acordado previamente.`
          : 'Coordinamos despachos de discos soporte para baldosones desde nuestra planta industrial hacia la provincia de Mendoza mediante expresos de carga acordados previamente.',
        verified: true
      },
      {
        category: 'price',
        question: '¿Cómo se gestiona el costo del transporte hacia Mendoza?',
        answer: 'El costo del transporte se cotiza o coordina por separado según el volumen del pedido y la empresa de logística seleccionada. Al comprar directo de fábrica, el volumen optimiza el costo por unidad.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: ['terraza-transitable', 'nivelar-piso-exterior'],
    relatedGuides: ['como-instalar-discos-soporte'],
    relatedSegments: ['para-constructoras', 'para-arquitectos'],
    verification: {
      logistics: 'verified',
      locations: 'unverified',
      seoContent: 'verified'
    },
    internalNotes: [
      '[DATO_FALTA: segmento fábricas de mosaicos]',
      '[DATO_FALTA: localidades_mendoza_confirmadas]'
    ]
  },
  {
    slug: 'tucuman',
    name: 'Tucumán',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'NOA',
    status: 'needs-review',
    indexable: true,
    hasPhysicalPresence: false,
    primaryLocations: ['San Miguel de Tucumán', 'Yerba Buena'],
    nearbyGeos: ['salta'],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: defaultDeliveryType,
      preferredCarriers: defaultPreferredCarriers,
      deliveryTime: null,
      pickupAvailable: false,
      pickupLocation: null,
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'Modalidad de envío a cotizar o coordinar por separado con el cliente.'
    },
    seo: {
      h1: 'Discos Soporte para Baldosones con Envíos a Tucumán',
      metaTitle: 'Discos Soporte para Baldosones en Tucumán | Directo de Fábrica',
      metaDescription: 'Despacho directo de fábrica de discos soporte para baldosones a la provincia de Tucumán. Asesoramiento técnico y cotización de envío para obras en toda la provincia.'
    },
    intro: 'Venta directa de fábrica de discos soporte para baldosones con envíos coordinados a la provincia de Tucumán. Asesoramiento técnico y atención directa para profesionales y particulares.',
    faq: [
      {
        category: 'logistics',
        question: '¿Qué opciones de transporte tienen para envíos a la provincia de Tucumán?',
        answer: isViaCargoActive
          ? `Coordinamos envíos desde nuestra planta industrial hacia San Miguel de Tucumán, Yerba Buena y otras localidades provinciales. Según la preferencia del cliente, puede consultarse la posibilidad de despachar mediante ${viaCargoName} u otra empresa de transporte acordada previamente.`
          : 'Coordinamos envíos desde nuestra planta industrial hacia San Miguel de Tucumán, Yerba Buena y otras localidades provinciales mediante expresos de carga acordados previamente.',
        verified: true
      },
      {
        category: 'logistics',
        question: '¿Cómo calcular la cantidad de piezas para evitar faltantes en obra?',
        answer: 'Realizamos un cálculo técnico preciso según los m² y formato del baldosón. Para obras en el interior del país, recomendamos sumar un margen adicional para recortes perimetrales y evitar despachos complementarios.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: ['terraza-transitable'],
    relatedGuides: ['como-instalar-discos-soporte', 'calcular-discos-soporte-terraza'],
    relatedSegments: ['para-constructoras'],
    verification: {
      logistics: 'verified',
      locations: 'unverified',
      seoContent: 'verified'
    },
    internalNotes: [
      '[DATO_FALTA: segmento fábricas de mosaicos]'
    ]
  },
  {
    slug: 'salta',
    name: 'Salta',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'NOA',
    status: 'needs-review',
    indexable: true,
    hasPhysicalPresence: false,
    primaryLocations: ['Salta Capital'],
    nearbyGeos: ['tucuman'],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: defaultDeliveryType,
      preferredCarriers: defaultPreferredCarriers,
      deliveryTime: null,
      pickupAvailable: false,
      pickupLocation: null,
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'Modalidad de envío a cotizar o coordinar por separado con el cliente.'
    },
    seo: {
      h1: 'Discos Soporte para Baldosones con Envíos a Salta',
      metaTitle: 'Discos Soporte para Baldosones en Salta | Directo de Fábrica',
      metaDescription: 'Despacho directo de fábrica de discos soporte para baldosones a la provincia de Salta. Asesoramiento técnico y cotización de flete para obras y proyectos.'
    },
    intro: 'Venta directa de fábrica de discos soporte para baldosones con envíos coordinados a la provincia de Salta. Asesoramiento técnico y cotización de despacho para proyectos residenciales y comerciales en toda la provincia.',
    faq: [
      {
        category: 'logistics',
        question: '¿Cómo se organizan los envíos de Discos Soporte a la provincia de Salta?',
        answer: isViaCargoActive
          ? `Coordinamos despachos desde nuestra planta industrial hacia Salta Capital y localidades provinciales. Según la preferencia del cliente, puede consultarse ${viaCargoName} u otra empresa de transporte de carga acordada previamente.`
          : 'Coordinamos despachos desde nuestra planta industrial hacia Salta Capital y localidades provinciales mediante expresos de carga acordados previamente.',
        verified: true
      },
      {
        category: 'b2b',
        question: '¿Brindan asesoramiento técnico para calcular la cantidad de discos necesaria?',
        answer: 'Sí. Brindamos asesoramiento sin cargo para calcular la cantidad exacta de piezas según la superficie en m² y el formato del baldosón seleccionado para su obra en Salta.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: ['para-arquitectos', 'terraza-transitable'],
    relatedGuides: ['calcular-discos-soporte-terraza'],
    relatedSegments: ['para-arquitectos', 'para-constructoras'],
    verification: {
      logistics: 'verified',
      locations: 'unverified',
      seoContent: 'verified'
    },
    internalNotes: [
      '[DATO_FALTA: segmento fábricas de mosaicos]',
      '[DATO_FALTA: localidades_provinciales_verificadas]'
    ]
  },
  {
    slug: 'neuquen',
    name: 'Neuquén',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Patagonia',
    status: 'needs-review',
    indexable: true,
    hasPhysicalPresence: false,
    primaryLocations: ['Neuquén Capital', 'San Martín de los Andes', 'Villa La Angostura'],
    nearbyGeos: [],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: defaultDeliveryType,
      preferredCarriers: defaultPreferredCarriers,
      deliveryTime: null,
      pickupAvailable: false,
      pickupLocation: null,
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'Modalidad de envío a cotizar o coordinar por separado con el cliente.'
    },
    seo: {
      h1: 'Discos Soporte para Baldosones con Envíos a Neuquén',
      metaTitle: 'Discos Soporte para Baldosones en Neuquén | Directo de Fábrica',
      metaDescription: 'Despacho directo de fábrica de discos soporte para baldosones a la provincia del Neuquén. Soluciones en plástico técnico para terrazas transitables y obras en la provincia.'
    },
    intro: 'Venta directa de fábrica de discos soporte para baldosones con envíos coordinados a la provincia del Neuquén. Soluciones en plástico técnico para terrazas transitables en toda la provincia.',
    faq: [
      {
        category: 'coverage',
        question: '¿Coordinan envíos de Discos Soporte a la provincia del Neuquén?',
        answer: isViaCargoActive
          ? `Sí, coordinamos despachos de discos soporte para baldosones desde nuestra planta industrial hacia Neuquén Capital y otras localidades de la provincia. Según el destino, puede consultarse la posibilidad de enviar mediante ${viaCargoName} u otro transporte de carga acordado previamente.`
          : 'Sí, coordinamos despachos de discos soporte para baldosones desde nuestra planta industrial hacia Neuquén Capital y otras localidades de la provincia mediante expresos de carga acordados previamente.',
        verified: true
      },
      {
        category: 'product-options',
        question: '¿Son aptos los discos soporte para su instalación a la intemperie en Neuquén?',
        answer: 'Sí, los discos soporte PLASTEM son piezas de polipropileno inyectado, diseñadas para su colocación en terrazas y pisos elevados de exterior.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: ['terraza-transitable', 'nivelar-piso-exterior'],
    relatedGuides: ['ventajas-piso-flotante-exterior'],
    relatedSegments: ['para-constructoras'],
    verification: {
      logistics: 'verified',
      locations: 'unverified',
      seoContent: 'verified'
    },
    internalNotes: [
      '[DATO_FALTA: segmento fábricas de mosaicos]'
    ]
  },
  {
    slug: 'la-plata',
    name: 'La Plata',
    geoType: 'city',
    parentProvinceSlug: 'buenos-aires',
    parentProvinceName: 'Buenos Aires',
    region: 'Pampeana / GBA Sur',
    status: 'published',
    indexable: true,
    hasPhysicalPresence: false,
    primaryLocations: ['La Plata', 'Berisso', 'Ensenada'],
    nearbyGeos: ['buenos-aires'],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: 'Despacho, flete coordinado o retiro presencial',
      preferredCarriers: [],
      deliveryTime: null,
      pickupAvailable: true,
      pickupLocation: 'Planta industrial en Turdera / Temperley (GBA Sur)',
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'Cercanía geográfica a planta GBA Sur.'
    },
    seo: {
      h1: 'Discos soporte para pisos flotantes en La Plata',
      metaTitle: 'Discos Soporte y Pisos Flotantes en La Plata',
      metaDescription: 'Abastecemos a La Plata con discos soporte para baldosones. Consulta nuestro calculador online y retira al sur del GBA.'
    },
    intro: 'Abastecemos a La Plata con discos soporte para baldosones. Cercanía directa a nuestra planta de producción.',
    faq: [
      {
        category: 'logistics',
        question: '¿Realizan envíos directos a La Plata?',
        answer: 'Podemos coordinar despachos y fletes según el volumen del pedido debido a la cercanía geográfica con nuestra planta en GBA Sur, o bien la opción de retiro presencial por fábrica.',
        verified: true
      },
      {
        category: 'pickup',
        question: '¿Aceptan retiro presencial desde La Plata?',
        answer: 'Por supuesto. Al estar ubicados en el sur del Gran Buenos Aires, clientes y transportes de La Plata pueden realizar retiros directos por nuestra planta industrial.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: ['para-constructoras', 'terraza-transitable'],
    relatedGuides: ['como-instalar-discos-soporte'],
    relatedSegments: ['para-constructoras'],
    verification: {
      logistics: 'verified',
      locations: 'verified',
      seoContent: 'verified'
    },
    internalNotes: [
      'Valid city page under parent province Buenos Aires.'
    ]
  },
  {
    slug: 'mar-del-plata',
    name: 'Mar del Plata',
    geoType: 'city',
    parentProvinceSlug: 'buenos-aires',
    parentProvinceName: 'Buenos Aires',
    region: 'Pampeana / Costa Atlántica',
    status: 'published',
    indexable: true,
    hasPhysicalPresence: false,
    primaryLocations: ['Mar del Plata', 'Costa Atlántica'],
    nearbyGeos: ['buenos-aires'],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: 'Despacho por expreso de carga',
      preferredCarriers: [],
      deliveryTime: null,
      pickupAvailable: false,
      pickupLocation: null,
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'Venta directa sin distribuidores locales.'
    },
    seo: {
      h1: 'Discos soporte para pisos flotantes en Mar del Plata',
      metaTitle: 'Discos Soporte para Terrazas en Mar del Plata',
      metaDescription: 'Instale pisos técnicos en la costa atlántica con discos soporte de PLASTEM. Envíos veloces a Mar del Plata.'
    },
    intro: 'Instale pisos técnicos en la costa atlántica con discos soporte de PLASTEM. Venta directa de fábrica.',
    faq: [
      {
        category: 'coverage',
        question: '¿Tienen distribuidores en Mar del Plata?',
        answer: 'Operamos mediante venta directa desde fábrica. Despachamos su requerimiento vía expreso a la ciudad de Mar del Plata reduciendo los costos de intermediarios.',
        verified: true
      },
      {
        category: 'product-options',
        question: '¿Cómo responden los discos soporte en obras de la Costa Atlántica?',
        answer: 'Los discos soporte PLASTEM son de polipropileno inyectado imputrescible, altamente resistentes a la intemperie y diseñados para permitir la constante ventilación y drenaje bajo pisos flotantes exteriores.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: ['evitar-filtraciones-terraza', 'terraza-transitable'],
    relatedGuides: ['ventajas-piso-flotante-exterior'],
    relatedSegments: ['para-constructoras', 'para-particulares'],
    verification: {
      logistics: 'verified',
      locations: 'verified',
      seoContent: 'verified'
    },
    internalNotes: [
      'Valid city page under parent province Buenos Aires.'
    ]
  },

  // --- 2. NATIONAL MATRIX DRAFT ENTITIES (18 UNPUBLISHED PROVINCES / CABA | INDEXABLE = FALSE) ---
  {
    slug: 'caba',
    name: 'Ciudad Autónoma de Buenos Aires (CABA)',
    geoType: 'autonomous-city',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'AMBA',
    status: 'published',
    indexable: true,
    hasPhysicalPresence: false,
    primaryLocations: [
      'Palermo',
      'Belgrano',
      'Caballito',
      'Villa Urquiza',
      'Flores',
      'Villa Devoto',
      'Núñez',
      'Barracas'
    ],
    nearbyGeos: [],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: 'Despacho coordinado o flete a obra hacia CABA (a cotizar según pedido)',
      preferredCarriers: [],
      deliveryTime: null,
      pickupAvailable: true,
      pickupLocation: 'Planta industrial en Turdera / Temperley, GBA Sur',
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'Despacho directo desde planta industrial en GBA Sur hacia proyectos y obras en CABA.'
    },
    images: {
      hero: {
        url: '',
        alt: 'Terraza transitable con Discos Soporte PLASTEM en CABA'
      },
      product: {
        url: '',
        alt: 'Disco Soporte PLASTEM para baldosones'
      },
      installation: {
        url: '',
        alt: 'Instalación de Disco Soporte bajo baldosón'
      },
      logistics: {
        url: '',
        alt: 'Discos Soporte PLASTEM embalados para despacho a CABA'
      }
    },
    seo: {
      h1: 'Discos Soporte para Baldosones con Envíos a CABA',
      metaTitle: 'Discos Soporte en CABA | Despacho desde Fábrica',
      metaDescription: 'Despacho y envío de discos soporte para baldosones a la Ciudad Autónoma de Buenos Aires (CABA). Venta directa de fábrica para obras, arquitectos y particulares.'
    },
    intro: 'Coordinamos el despacho de discos soporte para baldosones desde nuestra planta industrial directamente hacia obras, desarrollos y proyectos en la Ciudad Autónoma de Buenos Aires (CABA). Ofrecemos asesoramiento técnico, cálculo de piezas por metro cuadrado y atención directa a constructoras, arquitectos y particulares.',
    faq: [
      {
        category: 'coverage',
        question: '¿Realizan envíos de Discos Soporte a la Ciudad Autónoma de Buenos Aires (CABA)?',
        answer: 'Sí, coordinamos despachos de discos soporte para baldosones directamente desde nuestra planta industrial hacia proyectos ubicados en la Ciudad Autónoma de Buenos Aires (CABA). La entrega se acuerda según el volumen del pedido y las necesidades de la obra.',
        verified: true
      },
      {
        category: 'price',
        question: '¿Cómo se cotiza el costo del envío o flete a CABA?',
        answer: 'El costo del flete o transporte a CABA se cotiza por separado en función de la cantidad de cajas (volumen y peso) y la dirección exacta de la obra o punto de entrega. No está incluido automáticamente en el precio del insumo salvo acuerdo previo.',
        verified: true
      },
      {
        category: 'logistics',
        question: '¿Qué datos se necesitan para solicitar una cotización con envío a CABA?',
        answer: 'Para calcular la cantidad precisa de piezas y cotizar el despacho, requerimos conocer la superficie total en m², el tamaño del baldosón (por ejemplo, 40x40, 50x50 o 60x40 cm) y el barrio o zona de entrega dentro de CABA.',
        verified: true
      },
      {
        category: 'minimum-order',
        question: '¿En qué presentación se comercializan los Discos Soporte y cuál es la compra mínima?',
        answer: 'Los discos soporte PLASTEM se entregan en cajas cerradas de 50 o 100 unidades. Esta modalidad permite atender tanto pequeñas reformas en balcones y terrazas particulares como abastecer desarrollos edilicios de gran envergadura.',
        verified: true
      },
      {
        category: 'pickup',
        question: '¿Es posible retirar el pedido presencialmente o enviar un transporte propio?',
        answer: 'Sí. Los clientes o las empresas contratistas pueden coordinar el retiro de su pedido directamente por nuestra planta industrial en GBA Sur, o enviar un flete o comisionista de su confianza.',
        verified: true
      },
      {
        category: 'coverage',
        question: '¿Cuentan con local comercial, sucursal o depósito en CABA?',
        answer: 'No poseemos sucursal ni depósito físico dentro de CABA. Los pedidos se coordinan directamente con PLASTEM y se despachan o retiran desde nuestra planta industrial en GBA Sur.',
        verified: true
      },
      {
        category: 'product-options',
        question: '¿Cómo calculo la cantidad necesaria de Discos Soporte para mi terraza en CABA?',
        answer: 'Ponemos a disposición nuestra calculadora online para obtener la estimación de soportes por m² según la medida del baldosón. Además, nuestro equipo brinda asesoramiento personalizado por WhatsApp o correo electrónico.',
        verified: true
      },
      {
        category: 'b2b',
        question: '¿Brindan atención directa a constructoras y estudios de arquitectura en CABA?',
        answer: 'Sí, atendemos de manera directa a empresas constructoras, estudios de arquitectura, desarrolladores y administraciones de obras en CABA, facilitando especificaciones técnicas y cotizaciones según el volumen requerido.',
        verified: true
      },
      {
        category: 'coverage',
        question: '¿A qué barrios de CABA se pueden coordinar despachos de Discos Soporte?',
        answer: 'Se pueden coordinar despachos para obras ubicadas en distintos barrios de CABA, tales como Palermo, Belgrano, Caballito, Villa Urquiza, Flores, Villa Devoto, Núñez o Barracas, acordando previamente la logística según las condiciones del lugar de recepción.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: [
      'terraza-transitable',
      'piso-sobre-membrana',
      'nivelar-piso-exterior',
      'para-constructoras',
      'para-arquitectos'
    ],
    relatedGuides: [
      'como-instalar-discos-soporte',
      'discos-soporte-por-m2',
      'calcular-discos-soporte-terraza'
    ],
    relatedSegments: ['para-constructoras', 'para-arquitectos', 'para-particulares'],
    verification: {
      logistics: 'verified',
      locations: 'verified',
      seoContent: 'verified'
    },
    internalNotes: [
      'Entidad CABA (autonomous-city) publicada en FASE 6E.4.',
      'Gobernanza: status="published", indexable=true, parentProvinceSlug=null.',
      'Publicación controlada aprobada.'
    ]
  },
  {
    slug: 'catamarca',
    name: 'Catamarca',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'NOA',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'chaco',
    name: 'Chaco',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'NEA',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'chubut',
    name: 'Chubut',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Patagonia',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'corrientes',
    name: 'Corrientes',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'NEA',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'entre-rios',
    name: 'Entre Ríos',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Mesopotamia / Centro',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'formosa',
    name: 'Formosa',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'NEA',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'jujuy',
    name: 'Jujuy',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'NOA',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'la-pampa',
    name: 'La Pampa',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Pampeana',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'la-rioja',
    name: 'La Rioja',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Nuevo Cuyo / NOA',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'misiones',
    name: 'Misiones',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'NEA',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'rio-negro',
    name: 'Río Negro',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Patagonia',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'san-juan',
    name: 'San Juan',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Cuyo',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'san-luis',
    name: 'San Luis',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Cuyo',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'santa-cruz',
    name: 'Santa Cruz',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Patagonia',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'santa-fe',
    name: 'Santa Fe',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Centro',
    status: 'published',
    indexable: true,
    hasPhysicalPresence: false,
    primaryLocations: [
      'Santa Fe Capital',
      'Rosario',
      'Rafaela',
      'Venado Tuerto',
      'Reconquista',
      'Esperanza',
      'Santo Tomé',
      'Villa Constitución'
    ],
    nearbyGeos: ['rosario'],
    logistics: {
      dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)',
      deliveryType: 'Despacho mediante transporte o expreso coordinado con el cliente',
      preferredCarriers: [],
      deliveryTime: null,
      pickupAvailable: false,
      pickupLocation: null,
      packaging: 'Cajas cerradas de 50 o 100 unidades',
      notes: 'El costo y la modalidad del transporte se cotizan o coordinan por separado según destino, volumen y modalidad logística.'
    },
    images: {
      hero: {
        url: '',
        alt: 'Terraza transitable terminada con Discos Soporte PLASTEM'
      },
      product: {
        url: '',
        alt: 'Disco Soporte PLASTEM para baldosones'
      },
      installation: {
        url: '',
        alt: 'Instalación de Disco Soporte bajo baldosón'
      },
      logistics: {
        url: '',
        alt: 'Discos Soporte PLASTEM preparados para despacho'
      }
    },
    seo: {
      h1: 'Discos Soporte para Baldosones con Envíos a Santa Fe',
      metaTitle: 'Discos Soporte para Baldosones en Santa Fe | Directo de Fábrica',
      metaDescription: 'Despacho directo de fábrica de discos soporte para baldosones a la provincia de Santa Fe. Asesoramiento técnico y cálculo de piezas para obras. Consulte presupuesto.'
    },
    intro: 'Venta directa de fábrica de discos soporte para baldosones con envíos coordinados a toda la provincia de Santa Fe. Brindamos asesoramiento técnico y cálculo de piezas para proyectos residenciales y corporativos en toda la provincia.',
    faq: [
      {
        category: 'coverage',
        question: '¿Coordinan envíos de Discos Soporte a la provincia de Santa Fe?',
        answer: 'Sí, despachamos discos soporte para baldosones desde nuestra planta industrial hacia Santa Fe Capital, Rosario, Rafaela, Venado Tuerto, Reconquista y demás localidades de la provincia mediante empresas de transporte o expresos coordinados con el cliente.',
        verified: true
      },
      {
        category: 'price',
        question: '¿Cómo se gestiona el costo del transporte hacia Santa Fe?',
        answer: 'El costo y la modalidad del transporte se cotizan o coordinan por separado según el volumen de cajas y la localidad de destino.',
        verified: true
      },
      {
        category: 'minimum-order',
        question: '¿Tienen compra mínima para despachar a localidades de Santa Fe?',
        answer: 'Comercializamos el producto en cajas cerradas de 50 o 100 unidades, lo que permite atender tanto pequeñas obras residenciales como grandes proyectos corporativos o comerciales en toda la provincia.',
        verified: true
      },
      {
        category: 'logistics',
        question: '¿Puedo utilizar un transporte o comisionista de mi confianza?',
        answer: 'Sí. Si su empresa o proyecto trabaja habitualmente con un expreso o transporte de confianza, podemos coordinar el despacho con la empresa acordada con el cliente.',
        verified: true
      },
      {
        category: 'pickup',
        question: '¿Tienen depósito o sucursal con retiro inmediato en la provincia de Santa Fe?',
        answer: 'No contamos con depósito ni sucursal física en Santa Fe. Toda la producción se envía directamente desde nuestra planta industrial en Gran Buenos Aires, garantizando precio directo de fábrica sin intermediarios.',
        verified: true
      },
      {
        category: 'product-options',
        question: '¿Cómo ayudan a calcular la cantidad necesaria de Discos Soporte?',
        answer: 'Contamos con una calculadora online para estimar la cantidad exacta de discos según la superficie en m² y la medida del baldosón. Además, brindamos asesoramiento personalizado por WhatsApp.',
        verified: true
      },
      {
        category: 'logistics',
        question: '¿Qué información se requiere para solicitar un presupuesto para Santa Fe?',
        answer: 'Para cotizar necesitamos conocer la cantidad de m² a cubrir, la medida del baldosón seleccionado (30x30, 40x40, 50x50, 40x60 o 60x60 cm) y la localidad de destino en la provincia de Santa Fe.',
        verified: true
      },
      {
        category: 'b2b',
        question: '¿Brindan atención especial para constructoras y estudios en la provincia de Santa Fe?',
        answer: 'Sí, brindamos atención directa a empresas constructoras, estudios de arquitectura y profesionales del sector en la provincia de Santa Fe, coordinando la logística más conveniente para sus obras.',
        verified: true
      }
    ],
    relatedProducts: ['disco-soporte-baldosones'],
    relatedSolutions: [
      'terraza-transitable',
      'evitar-filtraciones-terraza',
      'nivelar-piso-exterior',
      'para-arquitectos',
      'para-constructoras'
    ],
    relatedGuides: ['como-instalar-discos-soporte', 'discos-soporte-por-m2'],
    relatedSegments: ['para-constructoras', 'para-arquitectos'],
    verification: {
      logistics: 'verified',
      locations: 'verified',
      seoContent: 'verified'
    },
    internalNotes: [
      'Contiene notas internas de gobernanza pendientes [DATO_FALTA]',
      '[DATO_FALTA: fotos reales de fábrica y obras para slots de imágenes en Provincia de Santa Fe]'
    ]
  },
  {
    slug: 'santiago-del-estero',
    name: 'Santiago del Estero',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'NOA',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  },
  {
    slug: 'tierra-del-fuego',
    name: 'Tierra del Fuego',
    geoType: 'province',
    parentProvinceSlug: null,
    parentProvinceName: null,
    region: 'Patagonia',
    status: 'draft',
    indexable: false,
    hasPhysicalPresence: false,
    logistics: { dispatchOrigin: 'Planta Industrial Turdera / Temperley (GBA Sur)', deliveryType: null, preferredCarriers: [], deliveryTime: null, pickupAvailable: false, pickupLocation: null, packaging: null, notes: null },
    seo: { h1: null, metaTitle: null, metaDescription: null },
    intro: null,
    faq: [],
    relatedProducts: [],
    relatedSolutions: [],
    relatedGuides: [],
    relatedSegments: [],
    verification: { logistics: 'missing', locations: 'missing', seoContent: 'missing' },
    internalNotes: ['Draft province entity. Awaiting verified content from PLASTEM.', '[DATO_FALTA: segmento fábricas de mosaicos]']
  }
];

/**
 * SECURITY RULE:
 * Only entities that are explicitly indexable AND not draft are returned for routing / sitemap.
 * Any NEW entity created with status 'needs-review' or 'draft' MUST default to indexable: false.
 * Only pre-existing legacy published URLs retain indexable: true temporarily during review.
 */
export function getPublishedGeoLocations(): GeoLocationData[] {
  return geoLocations.filter(g => g.indexable && g.status !== 'draft');
}

export function getGeoLocationBySlug(slug: string): GeoLocationData | undefined {
  return geoLocations.find(g => g.slug === slug);
}
