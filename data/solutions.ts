export interface FAQ {
  question: string;
  answer: string;
}

export interface SolutionData {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  problems: string[];
  benefits: string[];
  faq: FAQ[];
  isProblemLanding?: boolean;
  primaryCta?: {
    text: string;
    href: string;
  };
  problemDetails?: {
    realProblem: string;
    whyItHappens: string;
    technicalSolution: string;
    practicalExample: string;
  }
}

export const solutions: Record<string, SolutionData> = {
  'terraza-transitable': {
    slug: 'terraza-transitable',
    name: 'Terraza Transitable',
    h1: 'Cómo Hacer una Terraza Transitable en Seco',
    metaTitle: 'Cómo Armar Una Terraza Transitable | Guía Definitiva',
    metaDescription: 'Aprenda cómo convertir una azotea inaccesible en una terraza transitable sin romper la membrana y sin usar contrapiso.',
    isProblemLanding: true,
    problems: [],
    benefits: [
      'Transformación rápida sin obra húmeda.',
      'Drenaje pluvial eficiente y oculto.',
      'Cámara de aire que mejora el aislamiento térmico.',
      'Soporte de carga pesada para uso intensivo.'
    ],
    faq: [],
    problemDetails: {
       realProblem: 'Tengo una azotea con membrana (o losa) que no puedo usar porque no es transitable o tiene mala estética.',
       whyItHappens: 'Históricamente, para hacerla transitable se debía colocar contrapiso, carpeta y cerámicos. Eso suma mucho peso a la estructura, ensucia la obra y si la membrana falla debajo de esto (común por movimiento estructural), hay que romper todo para reparar.',
       technicalSolution: 'Instalar pisos flotantes de exterior usando discos soporte. Se apoyan directamente sobre la superficie existente, elevando los baldosones cementicios por encima de la membrana.',
       practicalExample: 'En una terraza de 60m², reemplazar el mortero tradicional por discos soporte evita cargar más de 5,000 kg de peso a la losa. Además, si llueve, el agua filtra por las juntas abiertas y corre hacia el desagüe, dejando la superficie por donde caminamos siempre seca.'
    }
  },
  'piso-sobre-membrana': {
    slug: 'piso-sobre-membrana',
    name: 'Piso sobre Membrana',
    h1: 'Colocación de Piso sobre Membrana sin Dañarla',
    metaTitle: 'Pisos sobre Membrana Asfáltica: Cómo Protegerla',
    metaDescription: 'Descubra el método seguro para colocar pisos sobre membrana asfáltica. Evite filtraciones y alargue la vida útil sin usar mortero adherido.',
    isProblemLanding: true,
    problems: [],
    benefits: [
      'Elimina el riesgo de punzonamiento por tránsito.',
      'Evita la degradación de la membrana por rayos UV.',
      'Permite inspecciones rápidas levantando baldosones.',
      'Sistema 100% desmontable y reutilizable.'
    ],
    faq: [],
    problemDetails: {
       realProblem: 'Necesito revestir mi terraza pero temo que al colocar piso sobre la membrana asfáltica o poliuretánica se rompa y genere filtraciones.',
       whyItHappens: 'Al colocar contrapiso tradicional sobre una membrana, los materiales trabajan de manera diferente con la temperatura (dilatación). Esto termina cuarteando la carpeta y rompiendo la membrana. Además, pisar directamente la membrana la deteriora rápidamente.',
       technicalSolution: 'Utilizar un sistema flotante y nivelador. Los discos soporte distribuyen uniformemente el peso del baldosón (sin perforar), aislando mecánicamente el piso de la membrana. Así, la impermeabilización queda protegida del tránsito y del sol directo.',
       practicalExample: 'Al apoyar los discos sobre pequeños recortes de membrana en frío (como "camita"), se arma la estructura. Si a los 5 años hay que revisar una zona, simplemente levantas el recuadro del baldosón a mano, inspeccionas la membrana, y lo volvés a colocar.'
    }
  },
  'nivelar-piso-exterior': {
    slug: 'nivelar-piso-exterior',
    name: 'Nivelar Piso Exterior',
    h1: 'Cómo Nivelar un Piso Exterior sin Contrapiso',
    metaTitle: 'Nivelar Pisos en Exterior sin Roturas | Sistema en Seco',
    metaDescription: 'Olvídate del contrapiso pesado. Aprende cómo nivelar balcones, patios y terrazas rápidamente con soportes plásticos para baldosones.',
    isProblemLanding: true,
    problems: [],
    benefits: [
      'Corrección de pendientes de hasta 5-10 cm.',
      'Piso perfectamente horizontal para muebles y tránsito.',
      'Uso de suplementos para nivelación milimétrica.',
      'Compatibilidad con diversos tamaños de baldosón.'
    ],
    faq: [],
    problemDetails: {
       realProblem: 'Tengo un patio o balcón con desnivel o pendientes pronunciadas hacia el desagüe, y los muebles/mesas quedan cojos.',
       whyItHappens: 'Para que el agua de lluvia corra hacia los sumideros, es obligatorio hacer la subbase con pendientes. El problema es que luego queremos un terreno 100% horizontal para vivir el espacio con comodidad.',
       technicalSolution: 'Los discos soporte se colocan en cada vértice del baldosón. Para absorber los desniveles del piso base inferior, se suplementa debajo de cada disco con recortes de membrana impermeabilizante o goma eva (suplementos de 1 a 3 mm).',
       practicalExample: 'Cerca del ventanal la losa está alta y cerca de la rejilla está muy baja. Se arma el piso colocando el disco soporte normal en la zona alta, y en la zona de la rejilla se le ponen "suplementos" base al disco hasta alcanzar el nivel óptimo, dejando un piso recto y perfecto.'
    }
  },
  'evitar-filtraciones-terraza': {
    slug: 'evitar-filtraciones-terraza',
    name: 'Evitar Filtraciones',
    h1: 'Solución Definitiva a Filtraciones en Terrazas',
    metaTitle: 'Cómo Evitar y Solucionar Filtraciones en la Terraza',
    metaDescription: 'La humedad y filtraciones en la terraza tienen un motivo claro: el estancamiento y la rigidez. Conozca cómo el piso técnico resuelve este problema.',
    isProblemLanding: true,
    problems: [],
    benefits: [
      'Evita charcos y estancamiento de agua prolongado.',
      'Reduce la temperatura de la losa en verano.',
      'Juntas abiertas que facilitan la evaporación.',
      'Mayor vida útil de la impermeabilización.'
    ],
    faq: [],
    problemDetails: {
       realProblem: 'Gasté una fortuna arreglando goteras de la terraza, pasan un par de años y el techo vuelve a filtrar humedad hacia mi casa.',
       whyItHappens: 'Las membranas se resecan y rajan al estar expuestas al rayo del sol constante (UV). Además, las terrazas amuradas sufren la rigidez; cuando las paredes perimetrales se dilatan con el calor, terminan rajando las uniones de la cubierta.',
       technicalSolution: 'El concepto de "Piso Abierto". Los baldosones cementicios montados sobre discos dejan cruces abiertas de 3 a 4 mm. La membrana queda a la sombra perpétua y el agua corre inmediatamente, evaporándose rápido. Las baldosas simplemente descansan y flotan, permitiendo la libre dilatación.',
       practicalExample: 'Cuando llueve fuerte, el agua ya no se estanca buscando una pequeña fisura para arruinarle el techo. Pasa entre las separaciones de la baldosa, corre protegida por debajo del piso flotante y desemboca sana hacia el desagüe. Adiós mantenimiento perpetuo.'
    }
  },
  'discos-soporte-para-constructoras': {
    slug: 'discos-soporte-para-constructoras',
    name: 'Constructoras y Desarrollistas',
    h1: 'Discos Soporte para Constructoras y Desarrollos Inmobiliarios',
    metaTitle: 'Discos Soporte para Constructoras | Venta Directa de Fábrica',
    metaDescription: 'Proveemos a empresas constructoras y desarrollistas en Argentina. Precios mayoristas, stock permanente y logística para grandes obras de edificios y complejos.',
    isProblemLanding: false,
    problems: [
      'Altos costos en logística de morteros y mezclas',
      'Plazos de entrega de obra civil extendidos',
      'Sobrepeso en losas de edificios modernos'
    ],
    benefits: [
      'Ahorro del 60% en tiempo de colocación de piso exterior',
      'Factura A y precios directos de fábrica sin intermediarios',
      'Asesoramiento técnico para cómputos de obra'
    ],
    faq: [
      {
        question: '¿Tienen capacidad de respuesta para obras de más de 5000 m2?',
        answer: 'Contamos con planta propia de inyección y stock permanente para cubrir requerimientos de gran escala en plazos inmediatos.'
      }
    ]
  }
};
