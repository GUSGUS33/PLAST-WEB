/**
 * Manifest y registro dinámico de imágenes para PLASTEM
 * Permite relacionar cada página, producto, solución, guía o ciudad con su imagen en /public/imagenes/
 */

export interface ImageMetadata {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  fallbackSvgTitle?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9' | 'auto';
}

export interface CategoryImages {
  [slug: string]: ImageMetadata;
}

export interface ImageManifest {
  general: CategoryImages;
  productos: CategoryImages;
  soluciones: CategoryImages;
  guias: CategoryImages;
  envios: CategoryImages;
}

export const imageManifest: ImageManifest = {
  general: {
    'hero-home': {
      src: '/imagenes/general/hero-home.jpg',
      alt: 'Terrazas transitables y pisos flotantes exteriores instalados con discos soporte PLASTEM',
      title: 'Soluciones PLASTEM para Terrazas y Pisos Flotantes',
      caption: 'Instalación limpia y rápida en seco sobre membrana impermeabilizante.',
      fallbackSvgTitle: 'PLASTEM | Terrazas Transitables',
      aspectRatio: '16/9',
    },
    'fabrica-plastem': {
      src: '/imagenes/general/fabrica-plastem.jpg',
      alt: 'Planta de inyección de plásticos PLASTEM - Industria Argentina desde 1985',
      title: 'Planta Industrial PLASTEM en Buenos Aires',
      caption: 'Fabricación propia con tecnología de inyección de polipropileno de alta densidad.',
      fallbackSvgTitle: 'PLASTEM | Planta Industrial',
      aspectRatio: '16/9',
    },
    'nosotros-equipo': {
      src: '/imagenes/general/nosotros-equipo.jpg',
      alt: 'Equipo técnico y asesoramiento comercial de PLASTEM',
      title: 'Atención personalizada para arquitectos, constructoras y particulares',
      fallbackSvgTitle: 'PLASTEM | Asesoramiento Técnico',
      aspectRatio: '4/3',
    },
    'logo-plastem': {
      src: '/imagenes/general/logo-plastem.png',
      alt: 'Logo Oficial PLASTEM Soluciones Plásticas',
      title: 'PLASTEM',
      fallbackSvgTitle: 'PLASTEM',
      aspectRatio: 'auto',
    },
  },
  productos: {
    'disco-soporte-baldosones': {
      src: '/imagenes/productos/disco-soporte-baldosones.jpg',
      alt: 'Disco Soporte Plástico para Baldosones y Pisos Flotantes Exteriores PLASTEM',
      title: 'Disco Soporte para Baldosones 146mm',
      caption: 'Separadores plásticos con aletas en cruz para nivelar baldosas sin perforar membranas.',
      fallbackSvgTitle: 'Disco Soporte para Baldosones',
      aspectRatio: '1/1',
    },
    'buches-plasticos': {
      src: '/imagenes/productos/buches-plasticos.jpg',
      alt: 'Bujes plásticos de 76mm (3 pulgadas) para tubos de cartón e industria del embalaje',
      title: 'Buje Plástico de 76 mm',
      caption: 'Refuerzo inyectado para bobinas y tubos de cartón industriales.',
      fallbackSvgTitle: 'Buje Plástico 76mm (3")',
      aspectRatio: '1/1',
    },
  },
  soluciones: {
    'terraza-transitable': {
      src: '/imagenes/soluciones/terraza-transitable.jpg',
      alt: 'Transformación de azotea en terraza transitable con baldosones cementicios elevados',
      title: 'Terraza Transitable en Seco',
      caption: 'Aproveche al máximo los metros cuadrados de su azotea.',
      fallbackSvgTitle: 'Terraza Transitable en Seco',
      aspectRatio: '16/9',
    },
    'piso-sobre-membrana': {
      src: '/imagenes/soluciones/piso-sobre-membrana.jpg',
      alt: 'Piso elevado instalado directamente sobre membrana asfáltica sin punzonarla',
      title: 'Piso sobre Membrana Impermeabilizante',
      caption: 'Protección absoluta contra el sol y el tránsito directo.',
      fallbackSvgTitle: 'Piso sobre Membrana',
      aspectRatio: '16/9',
    },
    'nivelar-piso-exterior': {
      src: '/imagenes/soluciones/nivelar-piso-exterior.jpg',
      alt: 'Sistema de nivelación de desniveles en patios y balcones con discos soporte',
      title: 'Nivelación de Pisos Exteriores',
      caption: 'Corrección milimétrica de pendientes sin contrapiso.',
      fallbackSvgTitle: 'Nivelar Piso Exterior',
      aspectRatio: '16/9',
    },
    'evitar-filtraciones-terraza': {
      src: '/imagenes/soluciones/evitar-filtraciones-terraza.jpg',
      alt: 'Drenaje libre pluvial bajo baldosones flotantes para evitar estancamiento y filtraciones',
      title: 'Solución a Filtraciones en Terrazas',
      caption: 'Drenaje rápido por las juntas de 4mm.',
      fallbackSvgTitle: 'Evitar Filtraciones en Terraza',
      aspectRatio: '16/9',
    },
    'discos-soporte-para-constructoras': {
      src: '/imagenes/soluciones/discos-soporte-para-constructoras.jpg',
      alt: 'Provisión mayorista de discos soporte para desarrollos inmobiliarios y edificios',
      title: 'Discos Soporte para Constructoras',
      caption: 'Ahorro de costos y tiempos de obra civil.',
      fallbackSvgTitle: 'Atención a Constructoras',
      aspectRatio: '16/9',
    },
  },
  guias: {
    'como-instalar-discos-soporte': {
      src: '/imagenes/guias/como-instalar-discos-soporte.jpg',
      alt: 'Guía paso a paso de instalación de discos soporte en terrazas',
      title: 'Cómo Instalar Discos Soporte',
      fallbackSvgTitle: 'Guía de Instalación Paso a Paso',
      aspectRatio: '16/9',
    },
    'como-nivelar-terraza': {
      src: '/imagenes/guias/como-nivelar-terraza.jpg',
      alt: 'Proceso de colocación de suplementos bajo discos soporte para compensar pendientes',
      title: 'Cómo Nivelar una Terraza',
      fallbackSvgTitle: 'Guía de Nivelación sin Obra',
      aspectRatio: '16/9',
    },
    'piso-flotante-exterior-como-hacer': {
      src: '/imagenes/guias/piso-flotante-exterior-como-hacer.jpg',
      alt: 'Paso a paso para construir un piso flotante exterior en patios y jardines',
      title: 'Piso Flotante Exterior',
      fallbackSvgTitle: 'Cómo Hacer un Piso Flotante',
      aspectRatio: '16/9',
    },
    'discos-soporte-por-m2': {
      src: '/imagenes/guias/discos-soporte-por-m2.jpg',
      alt: 'Esquema de distribución de discos soporte por metro cuadrado según medida del baldosón',
      title: 'Cálculo de Discos por m2',
      fallbackSvgTitle: 'Cálculo de Piezas por m²',
      aspectRatio: '16/9',
    },
    'calcular-discos-soporte-terraza': {
      src: '/imagenes/guias/calcular-discos-soporte-terraza.jpg',
      alt: 'Plano y cómputo de materiales para terraza transitable',
      title: 'Calculador de Discos Soporte',
      fallbackSvgTitle: 'Cómputo de Materiales Terraza',
      aspectRatio: '16/9',
    },
    'disco-soporte-vs-pedestal': {
      src: '/imagenes/guias/disco-soporte-vs-pedestal.jpg',
      alt: 'Comparativa gráfica entre disco soporte fijo PLASTEM y pedestal regulable a rosca',
      title: 'Disco Soporte vs Pedestal Regulable',
      fallbackSvgTitle: 'Disco Fijo vs Pedestal Regulable',
      aspectRatio: '16/9',
    },
    'mejor-disco-soporte-argentina': {
      src: '/imagenes/guias/mejor-disco-soporte-argentina.jpg',
      alt: 'Detalle de inyección radial de alta densidad del disco soporte PLASTEM',
      title: 'Diseño e Inyección de Calidad PLASTEM',
      fallbackSvgTitle: 'El Mejor Disco Soporte de Argentina',
      aspectRatio: '16/9',
    },
    'que-son-discos-soporte': {
      src: '/imagenes/guias/que-son-discos-soporte.jpg',
      alt: 'Vista en detalle de un disco soporte plástico sosteniendo cuatro baldosones',
      title: '¿Qué son los discos soporte?',
      fallbackSvgTitle: 'Concepto de Piso Elevado',
      aspectRatio: '16/9',
    },
    'ventajas-piso-flotante-exterior': {
      src: '/imagenes/guias/ventajas-piso-flotante-exterior.jpg',
      alt: 'Cámara de aire y ventilación térmica generada por el piso flotante exterior',
      title: 'Ventajas del Piso Flotante Exterior',
      fallbackSvgTitle: 'Ventajas y Aislamiento Térmico',
      aspectRatio: '16/9',
    },
    'especificaciones-discos-soporte-baldosones': {
      src: '/imagenes/guias/especificaciones-discos-soporte-baldosones.jpg',
      alt: 'Plano técnico con cotas de 146mm de diámetro y 12mm de altura del disco soporte',
      title: 'Especificaciones Técnicas PLASTEM',
      fallbackSvgTitle: 'Especificaciones Técnicas',
      aspectRatio: '16/9',
    },
    'problemas-comunes-baldosones-soporte': {
      src: '/imagenes/guias/problemas-comunes-baldosones-soporte.jpg',
      alt: 'Cómo solucionar bamboleos o desniveles en baldosas con suplementos de membrana',
      title: 'Solución a Problemas Frecuentes',
      fallbackSvgTitle: 'Solución a Problemas Frecuentes',
      aspectRatio: '16/9',
    },
    'ideas-terrazas-baldosones-flotantes': {
      src: '/imagenes/guias/ideas-terrazas-baldosones-flotantes.jpg',
      alt: 'Inspiración y diseño moderno de terrazas con muebles de exterior y césped sintético',
      title: 'Ideas e Inspiración para Terrazas',
      fallbackSvgTitle: 'Ideas e Inspiración Terrazas',
      aspectRatio: '16/9',
    },
  },
  envios: {
    'buenos-aires': {
      src: '/imagenes/envios/buenos-aires.jpg',
      alt: 'Despachos de discos soporte a la provincia de Buenos Aires y GBA',
      title: 'Envíos a Provincia de Buenos Aires',
      fallbackSvgTitle: 'Envíos a Provincia de Buenos Aires',
      aspectRatio: '16/9',
    },
    caba: {
      src: '/imagenes/envios/caba.jpg',
      alt: 'Entrega rápida de discos soporte en CABA - Ciudad Autónoma de Buenos Aires',
      title: 'Envíos Rápidos en CABA',
      fallbackSvgTitle: 'Envíos a CABA y Alrededores',
      aspectRatio: '16/9',
    },
    cordoba: {
      src: '/imagenes/envios/cordoba.jpg',
      alt: 'Logística y despacho de insumos PLASTEM a Córdoba Capital e interior',
      title: 'Envíos de Discos Soporte a Córdoba',
      fallbackSvgTitle: 'Envíos a Córdoba y Región Centro',
      aspectRatio: '16/9',
    },
    rosario: {
      src: '/imagenes/envios/rosario.jpg',
      alt: 'Envíos directos de fábrica a Rosario y provincia de Santa Fe',
      title: 'Envíos a Rosario y Santa Fe',
      fallbackSvgTitle: 'Envíos a Rosario y Santa Fe',
      aspectRatio: '16/9',
    },
    mendoza: {
      src: '/imagenes/envios/mendoza.jpg',
      alt: 'Despachos por expreso a Mendoza y región de Cuyo',
      title: 'Envíos a Mendoza y Cuyo',
      fallbackSvgTitle: 'Envíos a Mendoza y Cuyo',
      aspectRatio: '16/9',
    },
    tucuman: {
      src: '/imagenes/envios/tucuman.jpg',
      alt: 'Logística de insumos de construcción a San Miguel de Tucumán y NOA',
      title: 'Envíos a Tucumán y NOA',
      fallbackSvgTitle: 'Envíos a Tucumán y NOA',
      aspectRatio: '16/9',
    },
    salta: {
      src: '/imagenes/envios/salta.jpg',
      alt: 'Atención a obras y distribuidores en Salta',
      title: 'Envíos a Salta',
      fallbackSvgTitle: 'Envíos a Salta',
      aspectRatio: '16/9',
    },
    neuquen: {
      src: '/imagenes/envios/neuquen.jpg',
      alt: 'Envíos a Neuquén y Patagonia',
      title: 'Envíos a Neuquén y Patagonia',
      fallbackSvgTitle: 'Envíos a Neuquén y Patagonia',
      aspectRatio: '16/9',
    },
    'mar-del-plata': {
      src: '/imagenes/envios/mar-del-plata.jpg',
      alt: 'Envíos a Mar del Plata y la Costa Atlántica',
      title: 'Envíos a Mar del Plata y Costa Atlántica',
      fallbackSvgTitle: 'Envíos a Mar del Plata y Costa',
      aspectRatio: '16/9',
    },
    'la-plata': {
      src: '/imagenes/envios/la-plata.jpg',
      alt: 'Despachos a La Plata, Berisso y Ensenada',
      title: 'Envíos a La Plata',
      fallbackSvgTitle: 'Envíos a La Plata y Alrededores',
      aspectRatio: '16/9',
    },
    'santa-fe': {
      src: '/imagenes/envios/santa-fe.jpg',
      alt: 'Logística de productos PLASTEM a Santa Fe',
      title: 'Envíos a Santa Fe',
      fallbackSvgTitle: 'Envíos a Santa Fe',
      aspectRatio: '16/9',
    },
  },
};
