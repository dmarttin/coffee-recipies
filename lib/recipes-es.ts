import { Recipe } from './types';

export const recipesEs: Recipe[] = [
  {
    id: 'inverted-classic',
    name: 'Método Invertido Clásico',
    description: 'Una preparación equilibrada y con cuerpo usando el método invertido para máxima extracción y mínimo goteo.',
    difficulty: 'medium',
    totalTime: 150,
    coffeeAmount: 15,
    waterAmount: 230,
    waterTemp: 85,
    method: 'inverted',
    steps: [
      {
        id: 'inverted-1',
        title: 'Configurar invertido',
        description: 'Coloca el émbolo en la cámara en posición 4, voltea boca abajo. Añade 15g de café molido medio-fino.',
        duration: 30,
        action: 'flip',
        hasTimer: false
      },
      {
        id: 'inverted-2',
        title: 'Primer vertido',
        description: 'Inicia el temporizador. Vierte 230ml de agua a 85°C en movimiento circular, saturando todos los granos.',
        duration: 15,
        action: 'pour'
      },
      {
        id: 'inverted-3',
        title: 'Revolver',
        description: 'Revuelve suavemente 10 veces en movimiento circular para asegurar una extracción uniforme.',
        duration: 10,
        action: 'stir'
      },
      {
        id: 'inverted-4',
        title: 'Reposo',
        description: 'Deja reposar el café. Esto permite una extracción completa del sabor.',
        duration: 60,
        action: 'wait'
      },
      {
        id: 'inverted-5',
        title: 'Colocar filtro y voltear',
        description: 'Moja el filtro, enrosca la tapa, voltea cuidadosamente sobre la taza.',
        duration: 15,
        action: 'flip',
        hasTimer: false
      },
      {
        id: 'inverted-6',
        title: 'Prensar',
        description: 'Presiona hacia abajo de manera constante durante 20 segundos con presión suave y uniforme.',
        duration: 20,
        action: 'press'
      }
    ],
    tips: [
      'Usa molienda medio-fina, similar a la sal de mesa',
      'Agua a 85°C previene la sobre-extracción',
      'Presiona suavemente para evitar amargor'
    ]
  },
  {
    id: 'james-hoffmann',
    name: 'Método James Hoffmann',
    description: 'Una taza limpia y dulce usando la posición estándar con una técnica única de remolino desarrollada por el experto en café James Hoffmann.',
    difficulty: 'easy',
    totalTime: 150,
    coffeeAmount: 11,
    waterAmount: 200,
    waterTemp: 95,
    method: 'standard',
    steps: [
      {
        id: 'hoffmann-1',
        title: 'Preparación',
        description: 'Coloca el filtro en la tapa, enjuaga con agua caliente. Añade 11g de café molido medio-fino a la cámara en la báscula.',
        duration: 20,
        action: 'pour',
        hasTimer: false
      },
      {
        id: 'hoffmann-2',
        title: 'Bloom',
        description: 'Vierte 200ml de agua a 95°C, iniciando el temporizador. Asegúrate de que todos los granos estén saturados.',
        duration: 10,
        action: 'pour'
      },
      {
        id: 'hoffmann-3',
        title: 'Revolver',
        description: 'Revuelve suavemente de adelante hacia atrás 3 veces para romper los grumos.',
        duration: 5,
        action: 'stir'
      },
      {
        id: 'hoffmann-4',
        title: 'Reposo',
        description: 'Espera 2 minutos. ¡No toques! Deja que el café se extraiga.',
        duration: 75,
        action: 'wait'
      },
      {
        id: 'hoffmann-5',
        title: 'Remolino',
        description: 'Retira el émbolo si está insertado. Gira suavemente la Aeropress para asentar los granos.',
        duration: 5,
        action: 'stir'
      },
      {
        id: 'hoffmann-6',
        title: 'Esperar asentamiento',
        description: 'Espera 30 segundos para que el lecho se asiente completamente.',
        duration: 30,
        action: 'wait'
      },
      {
        id: 'hoffmann-7',
        title: 'Prensar',
        description: 'Presiona muy suavemente. Detente cuando escuches el silbido.',
        duration: 5,
        action: 'press'
      }
    ],
    tips: [
      'Detén la presión cuando escuches el silbido de aire',
      'La técnica del remolino crea un lecho de café plano para extracción uniforme',
      'Usa agua recién hervida (95°C)'
    ]
  },
  {
    id: 'cold-brew',
    name: 'Concentrado de Cold Brew',
    description: 'Una preparación nocturna suave y de baja acidez perfecta para café helado. Hace concentrado para diluir con agua o leche.',
    difficulty: 'easy',
    totalTime: 86400,
    coffeeAmount: 30,
    waterAmount: 500,
    waterTemp: 20,
    method: 'inverted',
    steps: [
      {
        id: 'cold-1',
        title: 'Configurar invertido',
        description: 'Configura la Aeropress invertida (émbolo en posición 4). Añade 30g de café molido grueso.',
        duration: 30,
        action: 'flip',
        hasTimer: false
      },
      {
        id: 'cold-2',
        title: 'Añadir agua',
        description: 'Vierte 500ml de agua a temperatura ambiente. Llena justo por debajo del borde.',
        duration: 30,
        action: 'pour'
      },
      {
        id: 'cold-3',
        title: 'Revolver',
        description: 'Revuelve suavemente para asegurar que todos los granos estén saturados.',
        duration: 15,
        action: 'stir'
      },
      {
        id: 'cold-4',
        title: 'Refrigerar',
        description: 'Coloca en el refrigerador durante 24 horas. ¡Ten paciencia - las cosas buenas toman tiempo!',
        duration: 86280,
        action: 'wait'
      },
      {
        id: 'cold-5',
        title: 'Colocar filtro y voltear',
        description: 'Moja el filtro de papel, coloca la tapa, voltea sobre un contenedor.',
        duration: 15,
        action: 'flip',
        hasTimer: false
      },
      {
        id: 'cold-6',
        title: 'Prensar',
        description: 'Presiona lentamente durante 45-60 segundos. ¡Es concentrado espeso!',
        duration: 30,
        action: 'press'
      }
    ],
    tips: [
      'Usa molienda gruesa como para prensa francesa',
      'Diluye el concentrado 1:1 con agua o leche',
      'Se conserva en el refrigerador hasta 2 semanas'
    ]
  },
  {
    id: 'espresso-style',
    name: 'Estilo Espresso',
    description: 'Un shot rico y concentrado imitando el espresso. Perfecto para bebidas con leche o directo como café pequeño e intenso.',
    difficulty: 'advanced',
    totalTime: 60,
    coffeeAmount: 17,
    waterAmount: 50,
    waterTemp: 92,
    method: 'standard',
    steps: [
      {
        id: 'espresso-1',
        title: 'Preparación',
        description: 'Usa molienda fina para espresso. Enjuaga el filtro, añade 17g de café, nivela el lecho.',
        duration: 15,
        action: 'pour',
        hasTimer: false
      },
      {
        id: 'espresso-2',
        title: 'Verter agua',
        description: 'Vierte exactamente 50ml de agua a 92°C rápidamente, saturando todos los granos.',
        duration: 5,
        action: 'pour'
      },
      {
        id: 'espresso-3',
        title: 'Revolver vigorosamente',
        description: 'Revuelve 10 veces rápidamente para crear turbulencia y extracción.',
        duration: 5,
        action: 'stir'
      },
      {
        id: 'espresso-4',
        title: 'Prensar inmediatamente',
        description: 'Presiona fuerte y constantemente durante 30 segundos. Usa el peso de tu cuerpo si es necesario.',
        duration: 30,
        action: 'press'
      },
      {
        id: 'espresso-5',
        title: 'Servir',
        description: 'Disfruta inmediatamente o añade a leche para un latte.',
        duration: 5,
        action: 'wait'
      }
    ],
    tips: [
      'Esto requiere presión significativa - ¡presiona fuerte!',
      'La molienda fina es esencial para resistencia',
      'Base perfecta para capuchinos y lattes'
    ]
  },
  {
    id: 'bypass-method',
    name: 'Método Bypass',
    description: 'Una taza delicada similar al té lograda preparando fuerte y luego diluyendo. Resalta notas brillantes y afrutadas.',
    difficulty: 'medium',
    totalTime: 90,
    coffeeAmount: 20,
    waterAmount: 200,
    waterTemp: 90,
    method: 'standard',
    steps: [
      {
        id: 'bypass-1',
        title: 'Preparación',
        description: 'Enjuaga el filtro. Añade 20g de café molido medio-fino. Añade 80ml de agua caliente a la taza de servir.',
        duration: 20,
        action: 'pour',
        hasTimer: false
      },
      {
        id: 'bypass-2',
        title: 'Agua de preparación',
        description: 'Vierte 120ml de agua a 90°C en la cámara de la Aeropress.',
        duration: 10,
        action: 'pour'
      },
      {
        id: 'bypass-3',
        title: 'Revolver',
        description: 'Revuelve suavemente 5 veces.',
        duration: 5,
        action: 'stir'
      },
      {
        id: 'bypass-4',
        title: 'Reposo',
        description: 'Deja reposar durante 30 segundos.',
        duration: 30,
        action: 'wait'
      },
      {
        id: 'bypass-5',
        title: 'Prensar en agua bypass',
        description: 'Presiona durante 20 segundos en la taza con 80ml de agua caliente.',
        duration: 20,
        action: 'press'
      },
      {
        id: 'bypass-6',
        title: 'Remolino',
        description: 'Gira la taza para mezclar el concentrado con el agua bypass.',
        duration: 5,
        action: 'stir'
      }
    ],
    tips: [
      'Precalentar la taza de servir ayuda a mantener la temperatura',
      'Experimenta con la proporción de bypass (60-100ml)',
      'Ideal para cafés de tueste ligero y afrutados'
    ]
  }
];
