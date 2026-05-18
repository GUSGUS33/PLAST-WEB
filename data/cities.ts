export interface FAQ {
  question: string;
  answer: string;
}

export interface CityData {
  slug: string;
  name: string;
  province: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  faq: FAQ[];
}

export const cities: Record<string, CityData> = {
  'buenos-aires': {
    slug: 'buenos-aires',
    name: 'Buenos Aires',
    province: 'Provincia de Buenos Aires',
    h1: 'Discos soporte para pisos flotantes en Buenos Aires',
    metaTitle: 'Fábrica de Discos Soporte en Buenos Aires | Venta Mayorista',
    metaDescription: 'Entrega directa de fábrica de discos soporte para pisos en GBA. Solución ideal para constructoras, corralones y arquitectos. Presupuesto sin cargo.',
    faq: [
      {
        question: '¿Cuentan con flete propio o logística en el Gran Buenos Aires?',
        answer: 'Sí, la gran ventaja de estar radicados en GBA Sur es que podemos coordinar fletes directos a obra en Capital Federal, GBA Norte, Sur y Oeste, o bien operar el retiro directo con su propio camión desde nuestra planta industrial en Turdera / Temperley.'
      },
      {
        question: '¿Venden bolsas sueltas a particulares en CABA y GBA?',
        answer: 'Sí. Si bien nuestro foco principal es abastecer obras de gran volumen, corralones y empresas constructoras, ofrecemos venta por paquete cerrado (de 100 unidades) para clientes particulares que desean armar su balcón o patio, con posibilidad de pasar a retirar por nuestra fábrica.'
      }
    ]
  },
  'cordoba': {
    slug: 'cordoba',
    name: 'Córdoba',
    province: 'Córdoba',
    h1: 'Discos soporte para pisos flotantes en Córdoba',
    metaTitle: 'A Córdoba directo de fábrica: Discos Soporte para Terrazas',
    metaDescription: 'Atención a constructoras, corralones y estudios de Córdoba Capital y el Valle. Venta y despacho por expreso. Cotice precios para obras en Córdoba.',
    faq: [
      {
        question: '¿Con qué transportes mandan hacia Córdoba Capital y el interior?',
        answer: 'Usted nos indica en qué transporte (con base en CABA o GBA) tiene cuenta corriente o preferencia (Expreso Bisonte, Luján, Lancioni, Vía Cargo, etc.). Nosotros depositamos el pedido paletizado en ese galpón en Buenos Aires con pago de flete en destino, para que la mercadería viaje de forma segura y directa a su localidad.'
      },
      {
        question: '¿Qué cantidad debo pedir para amortizar el flete a Córdoba?',
        answer: 'Dado que los discos plásticos hacen más volumen que peso, sugerimos calcular la cantidad exacta que necesita, solicitarle a nuestro asesor de WhatsApp que le informe los metros cúbicos (m3) de ese pedido, y consultar con su expreso de confianza. Muchas veces enviar 3 o 4 bolsas cuesta lo mismo que 1 bolsa entera de base por las políticas de aforo de los transportistas.'
      }
    ]
  },
  'rosario': {
    slug: 'rosario',
    name: 'Rosario',
    province: 'Santa Fe',
    h1: 'Discos soporte para pisos flotantes en Rosario',
    metaTitle: 'Discos Soporte para Terrazas en Rosario | Directo de Fábrica',
    metaDescription: 'Abastecemos a Rosario y Gran Rosario con discos soporte para pisos elevados. Transporte rápido y pago en destino. Ideal para terrazas sin contrapiso.',
    faq: [
      {
        question: '¿Cómo envían los discos soporte a Rosario?',
        answer: 'Despachamos su pedido a través de expresos de carga o Vía Cargo con base en Buenos Aires. Usted abona el costo del transporte directamente al recibir la mercadería en Rosario o retirando en la terminal.'
      },
      {
        question: '¿Puedo retirar en fábrica si viajo a Buenos Aires?',
        answer: 'Por supuesto, muchas empresas y comisionistas retiran pedidos directamente de nuestra fábrica en Gran Buenos Aires Norte/Sur con previa coordinación.'
      }
    ]
  },
  'mendoza': {
    slug: 'mendoza',
    name: 'Mendoza',
    province: 'Mendoza',
    h1: 'Discos soporte para pisos flotantes en Mendoza',
    metaTitle: 'Discos Soporte para Pisos Flotantes en Mendoza',
    metaDescription: 'Envíos a Mendoza de discos soporte para terrazas transitables. Reemplace morteros tradicionales por nuestra solución en obra seca.',
    faq: [
      {
        question: '¿Cuánto demora el envío a Mendoza?',
        answer: 'Una vez conformado el pedido y preparado en fábrica, el despacho hacia el expreso en Buenos Aires se realiza rápidamente. El tiempo de tránsito dependerá de la empresa de transporte elegida (ej. Expreso Luján de Cuyo o Vía Cargo), generalmente demorando entre 48 a 72hs hábiles.'
      },
      {
        question: '¿Es conveniente pagar el envío dado la distancia?',
        answer: 'Sí. Al comprar directo de fábrica en volumen, el ahorro por pieza absorbe ampliamente el costo logístico hacia Mendoza. Le sugerimos consultar el costo de envío exacto por WhatsApp indicando la cantidad que necesita.'
      }
    ]
  },
  'tucuman': {
    slug: 'tucuman',
    name: 'Tucumán',
    province: 'Tucumán',
    h1: 'Discos soporte para pisos flotantes en Tucumán',
    metaTitle: 'Venta de Discos Soporte en Tucumán | Pisos Elevados',
    metaDescription: 'Instale pisos técnicos y terrazas transitables en Tucumán. Envíos por expreso a todo el NOA. Consulte precios directos de fábrica.',
    faq: [
      {
        question: '¿Qué opciones de transporte a Tucumán tienen?',
        answer: 'Trabajamos habitualmente con expresos y Vía Cargo para envíos al norte argentino. Usted elige el transporte y paga el costo en destino, en su domicilio de obra en San Miguel de Tucumán o localidades vecinas.'
      },
      {
        question: '¿Qué pasa si me faltan piezas al llegar el pedido?',
        answer: 'Contamos con doble control de stock al paletizar. Sin embargo, para obras en el interior del país como Tucumán, siempre recomendamos calcular un 10% adicional de producto en su compra inicial para cubrir eventuales recortes y evitar tener que pagar un segundo flete.'
      }
    ]
  },
  'salta': {
    slug: 'salta',
    name: 'Salta',
    province: 'Salta',
    h1: 'Discos soporte para pisos flotantes en Salta',
    metaTitle: 'Discos Soporte para Terrazas Transitables en Salta',
    metaDescription: 'Soportes de plástico de alta resistencia para baldosones en Salta. Despacho seguro por transporte. Ideal para proyectos de arquitectura.',
    faq: [
      {
        question: '¿Cómo coordinar envíos de gran volumen a Salta?',
        answer: 'Solicite presupuesto indicando su necesidad en m². Coordinamos de inmediato con expresos de carga o Vía Cargo. Usted recibe la mercadería paletizada en su obra en Salta y abona el flete a la empresa transportista.'
      },
      {
        question: '¿Brindan asesoramiento para el cálculo de discos?',
        answer: 'Sí, totalmente gratis. Llámenos o escríbanos por WhatsApp y analizaremos sus planos para ayudarle a calcular la demanda exacta en su obra en Salta.'
      }
    ]
  },
  'neuquen': {
    slug: 'neuquen',
    name: 'Neuquén',
    province: 'Neuquén',
    h1: 'Discos soporte para pisos flotantes en Neuquén',
    metaTitle: 'Discos Soporte en Neuquén | Terrazas en Seco',
    metaDescription: 'Envíos a Neuquén y la Patagonia de discos soporte para pisos elevados. Consulte opciones de envío por Vía Cargo y principales expresos.',
    faq: [
      {
        question: '¿Llegan envíos a Neuquén Capital y otras localidades?',
        answer: 'Sí, despachamos asiduamente hacia la Patagonia utilizando expresos consolidados o Vía Cargo. El flete es pagado al recibir la carga en Neuquén.'
      },
      {
        question: '¿El clima patagónico afecta los discos plásticos?',
        answer: 'No. Nuestros discos soporte están inyectados con polímeros de alta resistencia mecánica y con aditivos contra los rayos UV y temperaturas extremas, lo que los hace ideales para la Patagonia.'
      }
    ]
  },
  'la-plata': {
    slug: 'la-plata',
    name: 'La Plata',
    province: 'Buenos Aires',
    h1: 'Discos soporte para pisos flotantes en La Plata',
    metaTitle: 'Discos Soporte y Pisos Flotantes en La Plata',
    metaDescription: 'Abastecemos a La Plata con discos soporte para baldosones. Consulta nuestro calculador online y retira al sur del GBA.',
    faq: [
      {
        question: '¿Realizan envíos directos a La Plata?',
        answer: 'Podemos coordinar fletes y mini fletes debido a nuestra cercanía geográfica en GBA Sur. También puede mandar un comisionista o flete propio a retirar por planta ahorrando costos de intermediarios.'
      },
      {
        question: '¿Aceptan retiro presencial?',
        answer: 'Por supuesto. Al estar en el sur del Gran Buenos Aires, muchos clientes y corralones de La Plata realizan retiros rápidos directos con sus unidades de carga.'
      }
    ]
  },
  'mar-del-plata': {
    slug: 'mar-del-plata',
    name: 'Mar del Plata',
    province: 'Buenos Aires',
    h1: 'Discos soporte para pisos flotantes en Mar del Plata',
    metaTitle: 'Discos Soporte para Terrazas en Mar del Plata',
    metaDescription: 'Instale pisos técnicos en la costa atlántica con discos soporte de PLASTEM. Envíos veloces a Mar del Plata.',
    faq: [
      {
        question: '¿Tienen distribuidores en Mar del Plata?',
        answer: 'Operamos mediante venta directa desde fábrica. Despachamos su requerimiento vía expreso a la ciudad de Mar del Plata reduciendo los costos de intermediarios.'
      },
      {
        question: '¿El disco soporte previene humedad o sarro del mar?',
        answer: 'Totalmente. Al instalarse un piso elevado, las rejillas, membranas y la cañería quedan ventiladas continuamente y libres del salitre estancado, y además, nuestro material es plástico imputrescible.'
      }
    ]
  }
};
