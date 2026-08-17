export interface FAQ {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  description: string;
  image?: string;
}

export interface GuideData {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  relatedProduct: string;
  mainImage?: string;
  contentHtml: string;
  steps?: Step[];
  faq: FAQ[];
}

export const guides: Record<string, GuideData> = {
  // 1. INSTALACIÓN
  'como-instalar-discos-soporte': {
    slug: 'como-instalar-discos-soporte',
    title: 'Cómo Instalar Discos Soporte',
    h1: 'Guía Definitiva: Cómo Instalar Discos Soporte para Baldosones en Seco',
    metaTitle: 'Cómo Instalar Discos Soporte | Guía Paso a Paso Argentina',
    metaDescription: 'Aprenda cómo instalar discos soporte para baldosones en terrazas o pisos flotantes exteriores. Instalación en seco rápida y sencilla.',
    category: 'Instalación',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/installation/1200/600',
    contentHtml: `
      <p>Antes de comenzar, es fundamental asegurar que la superficie base esté limpia. Nuestra técnica de instalación en seco permite ahorrar tiempo y evitar el uso de mezclas tradicionales.</p>
    `,
    steps: [
      {
        title: 'Preparación de la superficie',
        description: 'Limpiar a fondo la losa o el patio de tierra compactada. Si es sobre membrana asfáltica, verificar su estado.',
        image: 'https://picsum.photos/seed/clean/600/400'
      },
      {
        title: 'Presentación y distribución',
        description: 'Colocar los discos comenzando desde una esquina, utilizándolos como apoyo en los vértices donde se unirán 4 baldosones.',
        image: 'https://picsum.photos/seed/layout/600/400'
      },
      {
        title: 'Colocación de piezas',
        description: 'Apoyar los baldosones sobre las cruces separadoras. La separación de 4mm es automática.',
        image: 'https://picsum.photos/seed/placing/600/400'
      }
    ],
    faq: [
      {
        question: '¿Qué herramientas se necesitan?',
        answer: 'Un nivel de mano, lápiz, cinta métrica y amoladora para realizar cortes en esquinas y paredes perimetrales.'
      }
    ]
  },
  'como-nivelar-terraza': {
    slug: 'como-nivelar-terraza',
    title: 'Cómo Nivelar una Terraza',
    h1: 'Cómo Nivelar una Terraza sin Contrapiso Usando Soportes',
    metaTitle: 'Cómo Nivelar una Terraza sin Contrapiso | Solución Rápida',
    metaDescription: 'Solucione desniveles en su techo sin recurrir a obra húmeda. Aprenda cómo nivelar una terraza fácilmente usando soportes para baldosas.',
    category: 'Instalación',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/leveling/1200/600',
    contentHtml: `
      <p>Nivelar la superficie de su azotea para poder transitarla no debe ser sinónimo de toneladas de material. Nuestra alternativa de obra seca con piso elevado es la más elegida.</p>
    `,
    steps: [
      {
        title: 'Identificar pendientes',
        description: 'Localizar las zonas más bajas y hacia dónde drena el agua hacia las rejillas.',
        image: 'https://picsum.photos/seed/survey/600/400'
      },
      {
        title: 'Uso de suplementos',
        description: 'Utilizar recortes de membrana o goma debajo del disco para compensar declives de hasta 2cm.',
        image: 'https://picsum.photos/seed/shims/600/400'
      }
    ],
    faq: [
      {
        question: '¿Hasta cuántos cm puedo compensar o nivelar superponiendo material bajo el disco?',
        answer: 'Para que mantenga gran estabilidad y seguridad, no aconsejamos suplementar o alzar más de 2 cm por debajo de un disco fijo (que mide 1.2 cm de altura por sí mismo). Para desniveles colosales mayores a 5 cm recomendamos usar pedestales regulables.'
      }
    ]
  },
  'piso-flotante-exterior-como-hacer': {
    slug: 'piso-flotante-exterior-como-hacer',
    title: 'Cómo Hacer un Piso Flotante',
    h1: 'Piso Flotante Exterior: ¿Cómo Hacerlo Rápido y Económico?',
    metaTitle: 'Cómo Hacer un Piso Flotante Exterior | Paso a Paso',
    metaDescription: 'Aprenda cómo hacer un piso flotante exterior en patios y terrazas sin romper y en pocos días.',
    category: 'Instalación',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/deck/1200/600',
    contentHtml: `
      <p>Un piso flotante exterior transitable consiste en crear una plataforma elevada sobre su patio de tierra o terraza impermeabilizada existente.</p>
    `,
    steps: [
      {
        title: 'Base compacta',
        description: 'Apisonar la tierra y colocar una manta geotextil para evitar malezas.',
        image: 'https://picsum.photos/seed/ground/600/400'
      },
      {
        title: 'Montaje en seco',
        description: 'Distribuir los discos y apoyar las piezas sin necesidad de pegamentos.',
        image: 'https://picsum.photos/seed/build/600/400'
      }
    ],
    faq: [
      {
        question: '¿Requiere pegamento o mezcla (mortero)?',
        answer: 'No requiere en absoluto pegamento, todo va apoyado en seco utilizando la fuerza de contención del peso mismo y de los topes perimetrales de la estructura existente.'
      }
    ]
  },

  // 2. CÁLCULO
  'discos-soporte-por-m2': {
    slug: 'discos-soporte-por-m2',
    title: 'Cantidad de Discos por m2',
    h1: '¿Cuántos Discos Soporte se Necesitan por Metro Cuadrado?',
    metaTitle: 'Discos Soporte por Metro Cuadrado | Fórmula y Cantidades',
    metaDescription: 'Fórmula simple para saber cuántos discos soporte necesitas comprar por metro cuadrado según el tamaño de tu baldosa exterior.',
    category: 'Cálculo',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/math/1200/600',
    contentHtml: `
      <h2>La matemática detrás de la red de discos</h2>
      <p>Para revestir de forma estructural utilizando <a href="/productos/disco-soporte-baldosones" class="text-blue-600 font-semibold underline decoration-blue-300 underline-offset-2">disco soporte para baldosones</a> la regla habitual es simple, pero variará acorde a cuánto midan los mosaicos cementicios que haya elegido.</p>
      
      <h2>Cantidades sugeridas según medida de su loseta</h2>
      <ul>
        <li>Para 40x40cm: 6.5 a 7 piezas x metro cuadrado.</li>
        <li>Para 50x50cm: 4.5 a 5 piezas x metro cuadrado.</li>
        <li>Para 60x40cm: 4.5 a 5.5 piezas x metro cuadrado.</li>
      </ul>
      <p>Lo ideal es usar <a href="/#calculador" class="text-blue-600 underline">la herramienta de cálculo</a> en nuestra home que incluye la matemática y agregará el porcentaje recomendado de recortes perimetrales de seguridad.</p>

      <h2>Planificando su compra</h2>
      <p>Tanto si está <a href="/soluciones/terraza-transitable" class="text-blue-600 underline">desarrollando terrazas transitables</a> o planificando pisos exteriores amplios, adquiera un 10 por ciento extra para solucionar recortes en la medianera. Ofrecemos cobertura logística extensa como, por ejemplo, <a href="/envios/rosario" class="text-blue-600 underline">nuestro sistema de despachos a Rosario</a>.</p>
    `,
    faq: [
      {
        question: '¿Por qué necesito comprar un porcentaje extra (desperdicio)?',
        answer: 'Al finalizar los bordes perimetrales o remates cerca de columnas y muros cortará mitades de baldosas que obligarán a usar discos extra (medios discos) en esos apoyos no previstos inicialmente.'
      }
    ]
  },
  'calcular-discos-soporte-terraza': {
    slug: 'calcular-discos-soporte-terraza',
    title: 'Cálculo para Terrazas',
    h1: 'Cómo Calcular la Cantidad de Discos Soporte para su Terraza',
    metaTitle: 'Cálculo Exacto de Discos Soporte Terraza Transitable',
    metaDescription: 'Cómo calcular la cantidad correcta de discos soporte plásticos para su obra exterior y losas. Tips para reducir recortes y sobrantes.',
    category: 'Cálculo',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/blueprint/1200/600',
    contentHtml: `
      <h2>¿Cómo relevar metraje en obras irregulares?</h2>
      <p>Si está preguntándose cómo diagramar la compra de insumos estructurales para poder hacer <a href="/soluciones/terraza-transitable" class="text-blue-600 underline">su nueva terraza transitable</a>, le ayudamos. Calcule el largo y ancho de cada espacio que desea cubrir y súmelo.</p>
      <p>Siempre incluya las columnas perimetrales o recovecos a la hora de relevar.</p>

      <h2>Cómputo computarizado simplificado</h2>
      <p>Nosotros sugerimos comprar el <a href="/productos/disco-soporte-baldosones" class="text-blue-600 font-semibold underline decoration-blue-300 underline-offset-2">disco soporte para baldosones</a> confiando en algoritmos probados en vez de estimaciones crudas. El <a href="/#calculador" class="text-blue-600 underline">calculador instantáneo web</a> efectúa los ajustes proporcionales en minutos. Realizamos cientos de operaciones diarias proveyendo insumos para proyectos constructivos de norte a sur, por ejemplo con <a href="/envios/tucuman" class="text-blue-600 underline">envíos programados a Tucumán y el NOA</a>.</p>
    `,
    faq: [
      {
        question: '¿Me ayudan a calcular exactamente la cantidad si les envío el plano?',
        answer: '¡Por supuesto! Es uno de los servicios más solicitados por estudios de obra; envíe fotos del plano o medidas vía nuestro WhatsApp oficial y realizaremos el despiece a la brevedad.'
      }
    ]
  },

  // 3. COMPARATIVAS
  'disco-soporte-vs-pedestal': {
    slug: 'disco-soporte-vs-pedestal',
    title: 'Disco Soporte vs Pedestal Regulable',
    h1: 'Comparativa: Disco Soporte Fijo vs Pedestal Regulable',
    metaTitle: 'Disco Soporte vs Pedestal Nivelador Regulable | Cuál usar',
    metaDescription: 'Diferencias de costo y uso entre un disco soporte fijo para baldosas de terraza y un pedestal regulable. Elegí la opción más económica.',
    category: 'Comparativas',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/vs/1200/600',
    contentHtml: `
      <h2>Simplicidad vs Ajuste Milimétrico Mayor</h2>
      <p>Frente a la encrucijada de <a href="/soluciones/nivelar-piso-exterior" class="text-blue-600 underline">cómo solucionar o armar pisos de exterior elevado</a> surgen dos vías: los tacos o rosetas fijas, y los grandes pedestales regulables a rosca.</p>

      <h2>Por qué apostar por el sistema nacional de discos fijos</h2>
      <p>Cualquier <a href="/productos/disco-soporte-baldosones" class="text-blue-600 font-semibold underline decoration-blue-300 underline-offset-2">disco soporte para baldosones</a> nacional de PLASTEM logra soportar altas flexiones repartiendo el peso al usar muy bajo perfil a una fracción de costo minúscula de lo que valen los pedestales a rosca (mayoritariamente piezas importadas). Puede complementar con parches de membrana las pequeñas diferencias. Puede ir previendo sus bolsas de insumos apoyándose en el <a href="/#calculador" class="text-blue-600 underline">módulo de cotización veloz y calculador</a>.</p>
      
      <h2>Conclusión</h2>
      <p>Excepto que se enfrente a un desnivel en caída superior a los 10 o 15 milímetros drásticos a cada cada metro en todo el piso por errores severos de la losa, la roseta sólida local ganará en relación velocidad precio. Contamos con amplia casuística sobre este material de constructores y corralones en destinos frecuentes como <a href="/envios/mar-del-plata" class="text-blue-600 underline">la red de ventas en Mar del Plata.</a></p>
    `,
    faq: [
      {
        question: '¿Sirven ambos para baldosas grandes de porcellanato outdoor?',
        answer: 'Lamentablemente no recomendamos discos o pedestales (fijación única de vértice) para cerámicas frágiles, un impacto central perfora el módulo 2cm; sin embargo para losetas cementicias 3cm y baldosones vibrados de laja son óptimos ambos sistemas.'
      }
    ]
  },
  'mejor-disco-soporte-argentina': {
    slug: 'mejor-disco-soporte-argentina',
    title: 'El Mejor Disco Soporte de Argentina',
    h1: 'Plástico de Inyección, El Mejor Disco Soporte Texturado en Argentina',
    metaTitle: 'Cuál es el Mejor Disco Soporte Para Terrazas Transitable',
    metaDescription: 'Descubra la resistencia, composición técnica y ventajas del disco de polipropileno inyectado frente a sus copias. Discos soporte nacionales.',
    category: 'Comparativas',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/quality/1200/600',
    contentHtml: `
      <h2>¿Por qué son importantes los moldes y materiales plásticos?</h2>
      <p>En el rubro de infraestructura pesada o para resolver problemas críticos tales como <a href="/soluciones/evitar-filtraciones-terraza" class="text-blue-600 underline">cómo evitar perforaciones o filtraciones pluviales</a> se debe evaluar el material base.</p>
      <p>A diferencia de sistemas 3D termo-impresos por aficionado o plásticos reciclados contaminados quebradizos, nuestro <a href="/productos/disco-soporte-baldosones" class="text-blue-600 font-semibold underline decoration-blue-300 underline-offset-2">disco soporte para baldosones</a> es íntegramente inyectado en base de polipropileno robusto y macizo.</p>
      
      <h2>Resultados para contratistas en toda Argentina</h2>
      <p>No se arriesgue a colocar una cubierta verde enorme que deba ser levantada a los dos años por soportes triturados por las temperaturas extremas. Nuestra matriz rinde. Obtenga exactitud con nuestra herramienta interactiva para <a href="/#calculador" class="text-blue-600 underline">el dimensionado o calculador de obra</a>. Poseemos rutas para <a href="/envios/salta" class="text-blue-600 underline">cubrir el despacho industrial al norte en Salta</a> o la patagonia austral de manera regular.</p>
    `,
    faq: [
      {
        question: '¿No se quiebra la base estructural plástica con los 300kgs del tránsito ocasional elevado per cápita/equipos?',
        answer: 'Un diseño radial consolidado (con sus nervios inyectados macizos) disipa toda fuerza descendente y elimina puntos de rotura a tracción, con ensayos físicos superados muy por encima del peso límite transitable.'
      }
    ]
  },

  // 4. EDUCACIÓN
  'que-son-discos-soporte': {
    slug: 'que-son-discos-soporte',
    title: 'Qué Son los Discos Soporte',
    h1: '¿Qué son los Discos Soporte para Baldosones?',
    metaTitle: 'Qué Son Los Discos Soporte Niveladores Para Baldosones',
    metaDescription: 'Conozca los usos de la roseta plástica separadora en la construcción de pisos elevados drenantes técnicos en tejados.',
    category: 'Educación',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/info/1200/600',
    contentHtml: `
      <h2>Concepto del sistema flotante elevado de azotea</h2>
      <p>Los separadores niveladores plásticos nacieron como tecnología limpia de reforma para construir o adaptar <a href="/soluciones/terraza-transitable" class="text-blue-600 underline">modelos de terraza seca transitable</a> dejando la vieja membrana techista a cubierto y sana debajo y proveyendo un plano nuevo de baldosines transitable superior.</p>

      <h2>Morfología y función de drenaje del formato en cruz</h2>
      <p>A simple vista son rosetas o círculos que contienen aletas o cruces superiores. Actúan creando las juntas simétricas mientras mantienen los baldosones distanciados del piso inferior de agua y rocío. Es el mecanismo perfecto del agua de lluvia fluyendo libre. Al consultar todo el plano sobre el requerimiento general con nuestro excelente y veloz <a href="/productos/disco-soporte-baldosones" class="text-blue-600 font-semibold underline decoration-blue-300 underline-offset-2">soporte para baldosones de Plastem</a> entenderá y notará en la suma por qué su utilización es superior. Verifique todo luego en el panel frontal con la funcionalidad de <a href="/#calculador" class="text-blue-600 underline">estimación en su calculador de m2.</a>. Llevamos esta experiencia y eficiencia, por ejemplificarlo, con cientos de clientes diarios y <a href="/envios/neuquen" class="text-blue-600 underline">las rutas a la pampa húmeda y Neuquén</a>.</p>
    `,
    faq: [
      {
        question: '¿Sirven también para construir decks de WPC madera ecológica?',
        answer: 'Están pensados exclusivamente como asientos niveladores en vértices de baldosones cuadrangulares o moldes rígidos continuos de gran base rectos; no poseen estrías de asimiento o cuñas metálicas atornillables para instalar alfajías subyacentes.'
      }
    ]
  },
  'ventajas-piso-flotante-exterior': {
    slug: 'ventajas-piso-flotante-exterior',
    title: 'Ventajas del Piso Flotante',
    h1: 'Beneficios y Ventajas del Piso Flotante Exterior en Construcción',
    metaTitle: 'Ventajas Piso Flotante Exterior y Soporte para Baldosas',
    metaDescription: 'Sepa por qué el piso técnico apoyado sobre discos plásticos transformó el mundo de techos verdes, azoteas, drenajes y patios.',
    category: 'Educación',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/benefits/1200/600',
    contentHtml: `
      <h2>Eficiencia energética y mantenimiento inigualable</h2>
      <p>Entre los métodos más inteligentes de <a href="/soluciones/evitar-filtraciones-terraza" class="text-blue-600 underline">resolver y detener filtraciones a la losa en verano/invierno</a> se halla crear un doble espacio pluvial. Construyendo una capa separada bajo el formato de "Piso Flotante Exterior", las baldosas cementicias impiden que la luz solar queme su membrana (lo cual la evapora o hace quebradiza), resguardando su impermeabilización por décadas y logrando un factor aislante térmico inigualable como techo ventilado.</p>
      
      <h2>Reducción drástica del plazo de obra civil</h2>
      <p>Basta de levantar bolsas pesadas en malacates polvorientos a las siete plantas de arriba, el moderno <a href="/productos/disco-soporte-fijado-y-nivelador-de-baldosones" class="text-blue-600 font-semibold underline decoration-blue-300 underline-offset-2">disco soporte fijado y nivelador de baldosones</a> solo exige llevar cajas. Cómputelo a demanda del metraje del patio con un rápido clic en <a href="/#calculador" class="text-blue-600 underline">la app pre-creada calculadora virtual</a>. Atendemos logísticas continuas con corralones grandes proveyendo <a href="/envios/la-plata" class="text-blue-600 underline">entregas en la ciudad de La Plata</a> sin contratiempos.</p>
    `,
    faq: [
      {
        question: 'Al caminar y dejar la zona superior abierta, ¿los pisos flotantes rebotan haciéndose ruidosos?',
        answer: 'No, este "flotante" significa que "reemplaza los cimientos gruesos" pero apoya fijamente mediante plásticos absorbibles. Combinadas con la masividad maciza del formato placa baldosa cementicia logran paso en total serenidad por sobre el colchón termal.'
      }
    ]
  },

  // SEO STRATEGIC PAGES
  'especificaciones-discos-soporte-baldosones': {
    slug: 'especificaciones-discos-soporte-baldosones',
    title: 'Especificaciones Técnicas',
    h1: 'Especificaciones Técnicas de Discos Soporte PLASTEM',
    metaTitle: 'Especificaciones Técnicas Discos Soporte | Ficha Técnica',
    metaDescription: 'Consulte la ficha técnica oficial de nuestros discos soporte: resistencia a la carga, materialidad, dimensiones y normas de calidad argentina.',
    category: 'Técnica',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/blueprint/1200/600',
    contentHtml: `
      <p>Para arquitectos e ingenieros que buscan precisión en sus proyectos de <a href="/soluciones/terraza-transitable" class="text-blue-600 underline">terrazas transitables</a>, presentamos el detalle constructivo de nuestros insumos.</p>
      <h3>Componentes y Resistencia</h3>
      <p>Nuestros discos están fabricados en polipropileno industrial con aditivos UV para soportar la intemperie extrema de Argentina. La base radial disipa cargas superiores a los 1000kg por punto de apoyo.</p>
    `,
    steps: [
      {
        title: 'Dimensiones Reales',
        description: 'Diámetro de 146mm, altura base de 12mm y aletas separadoras de 5mm de espesor para una junta perfecta.',
        image: 'https://picsum.photos/seed/specs1/600/400'
      },
      {
        title: 'Estabilidad Térmica',
        description: 'Rango de operación desde -15°C hasta 60°C sin pérdida de propiedades mecánicas o deformación.',
        image: 'https://picsum.photos/seed/temp/600/400'
      }
    ],
    faq: [
      {
        question: '¿Cuentan con ensayos de carga?',
        answer: 'Sí, nuestros productos son testeados periódicamente para garantizar la seguridad estructural en edificios de gran altura y áreas públicas.'
      }
    ]
  },
  'problemas-comunes-baldosones-soporte': {
    slug: 'problemas-comunes-baldosones-soporte',
    title: 'Problemas y Soluciones',
    h1: 'Cómo evitar problemas comunes en Balcones y Terrazas Flotantes',
    metaTitle: 'Problemas Comunes en Baldosones sobre Soporte | Soluciones',
    metaDescription: '¿Su piso flotante hace ruido o se mueve? Aprenda a solucionar los problemas de nivelación y crujidos en terrazas secas con discos plásticos.',
    category: 'Técnica',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/mistake/1200/600',
    contentHtml: `
      <p>La mayoría de los inconvenientes en un <a href="/soluciones/nivelar-piso-exterior" class="text-blue-600 underline">piso elevado exterior</a> se deben a una mala nivelación inicial de la losa o a la falta de suplementos.</p>
    `,
    steps: [
      {
        title: 'Corregir el Crujido',
        description: 'Si una baldosa "baila", el disco no apoya parejo. Use recortes de membrana asfáltica para nivelar milimétricamente.',
        image: 'https://picsum.photos/seed/fix1/600/400'
      },
      {
        title: 'Limpieza de Rejillas',
        description: 'Aunque el sistema es drenante, verifique periódicamente los perímetros para evitar acumulaciones de hojas bajo el piso.',
        image: 'https://picsum.photos/seed/drain/600/400'
      }
    ],
    faq: [
      {
        question: '¿Por qué se rompen los baldosones?',
        answer: 'Generalmente sucede por usar baldosas de espesor insuficiente (menor a 3cm) o mala calidad de vibrado. El disco soporte Plastem es irrompible, pero la baldosa debe ser estructural.'
      }
    ]
  },
  'ideas-terrazas-baldosones-flotantes': {
    slug: 'ideas-terrazas-baldosones-flotantes',
    title: 'Ideas e Inspiración',
    h1: 'Ideas de Diseño para Terrazas con Baldosones Flotantes',
    metaTitle: 'Inspiración para Terrazas y Balcones | Pisos Flotantes',
    metaDescription: 'Descubra cómo transformar su azotea en un espacio de diseño. Ideas de combinación de materiales, iluminación y vegetación sobre piso técnico.',
    category: 'Educación',
    relatedProduct: 'disco-soporte-baldosones',
    mainImage: 'https://picsum.photos/seed/design/1200/600',
    contentHtml: `
      <p>Tener un <a href="/soluciones/terraza-transitable" class="text-blue-600 underline">piso flotante en el patio</a> no solo es técnico, es una oportunidad estética para jerarquizar su vivienda o edificio.</p>
      <h3>Tendencias en Argentina</h3>
      <p>La combinación de baldosones laja gris con canteros perimetrales y luces LED bajo el piso técnico está ganando fuerza en desarrollos modernos en CABA y el interior.</p>
    `,
    steps: [
      {
        title: 'Espacios Multiuso',
        description: 'Cree zonas de parrilla y living separadas visualmente usando diferentes tonos de losetas apoyadas sobre soportes.',
        image: 'https://picsum.photos/seed/bbq/600/400'
      },
      {
        title: 'Vegetación sobre Elevado',
        description: 'Instale macetas pesadas directamente sobre el piso flotante; el peso se distribuye hacia la losa sin dañar la estética.',
        image: 'https://picsum.photos/seed/garden/600/400'
      }
    ],
    faq: [
      {
        question: '¿Se puede usar césped sintético sobre el piso flotante?',
        answer: 'Sí, es una excelente combinación. Puede apoyar el baldosón de cemento y encima colocar el césped, manteniendo el drenaje perfecto debajo.'
      }
    ]
  }
};
