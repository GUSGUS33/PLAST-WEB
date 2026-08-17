import { siteConfig } from './site';

export interface FAQ {

  question: string;
  answer: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface ProductData {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  benefits: string[];
  specs: Spec[];
  uses: string;
  faq: FAQ[];
  whatsappPreset: string;
}

export const products: Record<string, ProductData> = {
  'disco-soporte-baldosones': {
    slug: 'disco-soporte-baldosones',
    name: 'Disco Soporte para Baldosones',
    h1: 'Discos Soporte para Baldosones y Pisos Flotantes Exteriores',
    metaTitle: 'Disco Soporte para Baldosones y Pisos Flotantes | Precio Fábrica',
    metaDescription: 'La solución definitiva para terrazas transitables sin dañar la membrana. Compre discos soporte directo de fábrica (desde 1985). Carga pesada, instalación en seco y envíos nacionales.',
    shortDescription: 'Soportes plásticos inyectados de alta densidad diseñados específicamente para nivelar y consolidar baldosones sobre terrazas, patios y solariums. Evitan el uso de morteros y garantizan una cubierta transitable impecable sin perforar la membrana impermeabilizante. Fabricación propia en PLASTEM con stock inmediato.',
    benefits: [
      'Alta resistencia para tránsito peatonal: Diseñados estructuralmente para soportar las exigencias del uso diario en terrazas y patios transitables.',
      'Protección Absoluta de la Membrana: Su base completamente plana de apoyo ancho de 146 mm evita perforaciones, hundimientos o fricción contra membranas asfálticas o de PVC.',
      'Aislamiento Térmico y Acústico: Crea una cámara de aire ventilada que protege la impermeableización y mejora el factor térmico de la losa, reduciendo el calor en verano.',
      'Instalación Rápida "En Seco": Elimina contrapisos húmedos. Sistema apoyado y encastrado que reduce tiempos de obra. Son apilables hasta 3 o 4 unidades para nivelar desniveles.',
      'Consultar para obras con exigencias especiales: Brindamos asesoramiento técnico para proyectos de gran escala o cargas atípicas.'
    ],
    specs: [
      { label: 'Altura base', value: '12 mm' },
      { label: 'Aletas separadoras (Junta)', value: '5 mm' },
      { label: 'Diámetro de base', value: '146 mm' },
      { label: 'Material', value: 'Polipropileno reciclable (Alta resistencia UV y granizo)' },
      { label: 'Colores disponibles', value: 'Negro y Gris' },
      { label: 'Capacidad', value: 'Apilables hasta 3-4 unidades' },
      { label: 'Uso recomendado', value: 'Apto para terrazas, patios y techos transitables' },
      { label: 'Compatibilidad Baldosones', value: '30x30, 40x40, 50x50, 40x60, 60x60 cm' },
      { label: 'Superficies', value: 'Membrana asfáltica, líquida, geotextil, carpeta' }
    ],
    uses: 'Apto para terrazas, patios y techos transitables.',
    faq: [
      {
        question: '¿Aguantan el peso de personas y muebles?',
        answer: 'Sí. Nuestros discos están diseñados para soportar con total seguridad el tránsito peatonal intenso, la colocación de muebles de exterior (mesas, reposeras) y maceteros estándar.'
      },
      {
        question: '¿Sirven para exterior?',
        answer: 'Absolutamente. Están fabricados en polipropileno de alta densidad con aditivos para protección UV y resistencia al granizo, garantizando durabilidad a la intemperie.'
      },
      {
        question: '¿Dañan la membrana?',
        answer: 'No. Su base plana de 146mm distribuye el peso sin punzonar la membrana asfáltica o líquida, protegiéndola del sol y el tránsito directo.'
      },
      {
        question: '¿Se pueden apilar?',
        answer: 'Sí, son encastrables y apilables de forma segura hasta 3 o 4 unidades para compensar desniveles o ganar altura. Para obras con mayores exigencias, consulte con nuestro equipo técnico.'
      },
      {
        question: '¿Sirven para cerámica?',
        answer: 'Están diseñados principalmente para baldosones cementicios o piezas de gran formato (mínimo 30x30). Para cerámicas finas o pequeñas, el apoyo podría no ser óptimo sin una subbase.'
      },
      {
        question: '¿Cuánto cuesta el envío?',
        answer: `El costo y la modalidad del transporte se cotizan o coordinan por separado según destino y cantidad. Despachamos desde GBA Sur; ${siteConfig.globalLogisticsOptions?.viaCargo?.enabled ? siteConfig.globalLogisticsOptions.viaCargo.standardDisclaimer : 'los despachos se coordinan previamente con el cliente.'}`
      },
      {
        question: '¿Hay stock inmediato?',
        answer: 'Sí, somos fabricantes y mantenemos stock permanente en colores negro y gris para despacho rápido.'
      }
    ],
    whatsappPreset: 'Hola PLASTEM! Quiero cotizar Discos Soporte. Me podrían asesorar sobre cálculo de cantidades, precio por cantidad y stock?'
  },
  'buches-plasticos': {
    slug: 'buches-plasticos',
    name: 'Bujes Plásticos de 76 mm',
    h1: 'Bujes Plásticos para Tubos de Cartón | 3 Pulgadas',
    metaTitle: 'Bujes Plásticos para Tubos de Cartón 3" | PLASTEM B2B',
    metaDescription: 'Bujes plásticos de 76mm (3 pulgadas) para cierre seguro de tubos de cartón. Evita aplastamientos y permite el paso de eje. Venta mayorista.',
    shortDescription: 'Componentes plásticos inyectados diseñados para el cierre y refuerzo de tubos de cartón. Esenciales para la industria del embalaje, textil y papelera.',
    benefits: [
      'Cierre Seguro: Ajuste preciso en tubos de 76 mm de diámetro interno.',
      'Protección Industrial: Refuerza las puntas de los tubos contra aplastamientos durante el transporte o almacenamiento.',
      'Funcionalidad: Permite el paso de eje para facilitar el desenrollado de materiales.',
      'Sustentabilidad: Material reutilizable y 100% reciclable.',
      'Durabilidad: Alta resistencia mecánica.'
    ],
    specs: [
      { label: 'Diámetro Nominal', value: '76 mm (3 pulgadas)' },
      { label: 'Material', value: 'Plástico inyectado de alta resistencia' },
      { label: 'Uso', value: 'Industria del papel, textil, film y embalajes' },
      { label: 'Forma de Venta', value: 'Venta mayorista directo de fábrica' }
    ],
    uses: 'Cierre de tubos de cartón, protección de bobinas, refuerzo de núcleos en embalajes.',
    faq: [
      {
        question: '¿Tienen stock permanente?',
        answer: 'Sí, contamos con stock inmediato de bujes de 76mm para entregas rápidas a industrias de todo el país.'
      },
      {
        question: '¿Realizan envíos a todo el país?',
        answer: 'Sí, al ser fabricantes directos despachamos desde nuestra planta a cualquier punto de Argentina vía expreso.'
      }
    ],
    whatsappPreset: 'Hola PLASTEM! Quisiera consultar precio por cantidad de Bujes Plásticos de 76mm para tubos de cartón.'
  }
};
