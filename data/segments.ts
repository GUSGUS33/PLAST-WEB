export interface FAQ {
  question: string;
  answer: string;
}

export interface SegmentData {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  problems: string[];
  benefits: string[];
  faq: FAQ[];
  primaryCta?: {
    text: string;
    href: string;
  };
}

export const segments: Record<string, SegmentData> = {
  'para-arquitectos': {
    slug: 'para-arquitectos',
    name: 'Arquitectos',
    h1: 'Soluciones Plásticas para Arquitectos y Proyectistas',
    metaTitle: 'Pisos Técnicos para Arquitectos: Discos Soportes Mayoristas',
    metaDescription: 'Especifique discos niveladores y resuelva el drenaje en terrazas verdes, azoteas y balcones con alta carga. Asistencia para estudios.',
    problems: [
      'Membranas perforadas por colocaciones precarias.',
      'Drenajes deficientes en losas planas y azoteas habitables.',
      'Cumplimiento ajustado de planos de pendiente vs realidades de hormigón en obra.'
    ],
    benefits: [
      'El proyecto se agiliza drásticamente usando instalación en seco.',
      'Seguridad a largo plazo sin reclamos de filtraciones por uso incorrecto de baldosas.',
      'Resalta la terminación fina al dejar juntas perfectas automáticas generadas por los discos.'
    ],
    faq: [
      {
        question: '¿Asisten sobre el despiece y cantidad a prescribir?',
        answer: 'Sí. Remitiendo un correo o mensaje a ventas comerciales, nuestros especialistas analizan e incluyen los m2 para sacar el cómputo final.'
      }
    ]
  },
  'para-constructoras': {
    slug: 'para-constructoras',
    name: 'Constructoras',
    h1: 'Soluciones Integrales para Empresas Constructoras',
    metaTitle: 'Información para Constructoras | Segmento Corporativo PLASTEM',
    metaDescription: 'Conozca cómo articulamos con el sector de la construcción en Argentina. Información sobre provisión de insumos plásticos y asistencia técnica en obra.',
    problems: [
      'Necesidad de acelerar tiempos de entrega en finales de obra.',
      'Búsqueda de proveedores directos con capacidad técnica.',
      'Optimización de logística de materiales en altura.'
    ],
    benefits: [
      'Reducción de personal especializado usando [discos soporte para constructoras](/soluciones/discos-soporte-para-constructoras).',
      'Eliminación de tiempos de fraguado con [soluciones para obras con baldosones](/soluciones/discos-soporte-para-constructoras).',
      'Compatibilidad total con baldosones cementicios estándar del mercado.'
    ],
    primaryCta: {
      text: 'Ver soluciones técnicas en discos soporte para constructoras',
      href: '/soluciones/discos-soporte-para-constructoras'
    },
    faq: [
      {
        question: '¿Tienen soporte para pliegos de licitación?',
        answer: 'Brindamos toda la documentación técnica necesaria para que nuestros productos sean incluidos en los pliegos de obra privada o pública.'
      }
    ]
  },
  'para-particulares': {
    slug: 'para-particulares',
    name: 'Particulares',
    h1: 'Discos Soporte para Terrazas en Obras de Particulares',
    metaTitle: 'Renueve su Terraza: Discos Soporte y Niveles',
    metaDescription: 'Mejore el drenaje y la vista de su terraza usando piso elevado. Asesoramos en compra a particulares a partir de cantidades de bulto mínimo.',
    problems: [
      'Filtraciones en la terraza luego de una tormenta.',
      'Contratación costosa de albañilería húmeda.',
      'Imposibilidad de hacer limpieza por debajo de las baldosas amuradas.'
    ],
    benefits: [
      'Usted mismo puede liderar y entender la obra. Al ser montaje en seco, la instalación es simple.',
      'En caso de rotura de membrana asfáltica, levanta la zona y luego la vuelve a colocar.',
      'El producto le llega al expreso más cercano ahorrando costos de sobre distribución.'
    ],
    faq: [
      {
        question: 'Tengo 50 metros cuadrados. ¿Me cotizan y me asisten con el envío?',
        answer: 'Totalmente. Somos fábrica pero despachamos a proyectos particulares bajo nuestras políticas de bulto cerrado (ideal a partir de unos pocos metros).'
      }
    ]
  }
};
