import { Recipe } from './types';

export const recipes: Recipe[] = [
  {
    id: 'inverted-classic',
    name: 'Inverted Method Classic',
    description: 'A balanced and full-bodied brew using the inverted method for maximum extraction and minimal drip-through.',
    difficulty: 'medium',
    totalTime: 150, // 2:30
    coffeeAmount: 15,
    waterAmount: 230,
    waterTemp: 85,
    method: 'inverted',
    steps: [
      {
        id: 'inverted-1',
        title: 'Set up inverted',
        description: 'Place plunger in chamber at position 4, flip upside down. Add 15g medium-fine ground coffee.',
        duration: 30,
        action: 'flip'
      },
      {
        id: 'inverted-2',
        title: 'First pour',
        description: 'Start timer. Pour 230ml of 85°C water in a circular motion, saturating all grounds.',
        duration: 15,
        action: 'pour'
      },
      {
        id: 'inverted-3',
        title: 'Stir',
        description: 'Stir gently 10 times in a circular motion to ensure even extraction.',
        duration: 10,
        action: 'stir'
      },
      {
        id: 'inverted-4',
        title: 'Steep',
        description: 'Let the coffee steep. This allows for full flavor extraction.',
        duration: 60,
        action: 'wait'
      },
      {
        id: 'inverted-5',
        title: 'Attach filter & flip',
        description: 'Wet the filter, screw on cap, flip onto mug carefully.',
        duration: 15,
        action: 'flip'
      },
      {
        id: 'inverted-6',
        title: 'Press',
        description: 'Press down steadily for 20 seconds with gentle, even pressure.',
        duration: 20,
        action: 'press'
      }
    ],
    tips: [
      'Use medium-fine grind, similar to table salt',
      'Water at 85°C prevents over-extraction',
      'Press gently to avoid bitterness'
    ]
  },
  {
    id: 'james-hoffmann',
    name: 'James Hoffmann Method',
    description: 'A clean and sweet cup using the standard position with a unique swirl technique developed by coffee expert James Hoffmann.',
    difficulty: 'easy',
    totalTime: 150, // 2:30
    coffeeAmount: 11,
    waterAmount: 200,
    waterTemp: 95,
    method: 'standard',
    steps: [
      {
        id: 'hoffmann-1',
        title: 'Setup',
        description: 'Place filter in cap, rinse with hot water. Add 11g medium-fine coffee to chamber on scale.',
        duration: 20,
        action: 'pour'
      },
      {
        id: 'hoffmann-2',
        title: 'Bloom',
        description: 'Pour 200ml of 95°C water, starting timer. Ensure all grounds are saturated.',
        duration: 10,
        action: 'pour'
      },
      {
        id: 'hoffmann-3',
        title: 'Stir',
        description: 'Stir gently back and forth 3 times to break up any clumps.',
        duration: 5,
        action: 'stir'
      },
      {
        id: 'hoffmann-4',
        title: 'Steep',
        description: 'Wait for 2 minutes. No touching! Let the coffee extract.',
        duration: 75,
        action: 'wait'
      },
      {
        id: 'hoffmann-5',
        title: 'Swirl',
        description: 'Remove plunger if inserted. Swirl the brewer gently to settle the grounds.',
        duration: 5,
        action: 'stir'
      },
      {
        id: 'hoffmann-6',
        title: 'Wait for drawdown',
        description: 'Wait 30 seconds for the bed to settle completely.',
        duration: 30,
        action: 'wait'
      },
      {
        id: 'hoffmann-7',
        title: 'Press',
        description: 'Press very gently. Stop when you hear hissing.',
        duration: 5,
        action: 'press'
      }
    ],
    tips: [
      'Stop pressing when you hear hissing air',
      'The swirl technique creates a flat coffee bed for even extraction',
      'Use water just off the boil (95°C)'
    ]
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew Concentrate',
    description: 'A smooth, low-acid overnight brew perfect for iced coffee. Makes concentrate to dilute with water or milk.',
    difficulty: 'easy',
    totalTime: 86400, // 24 hours
    coffeeAmount: 30,
    waterAmount: 500,
    waterTemp: 20,
    method: 'inverted',
    steps: [
      {
        id: 'cold-1',
        title: 'Setup inverted',
        description: 'Set up Aeropress inverted (plunger at position 4). Add 30g coarse ground coffee.',
        duration: 30,
        action: 'flip'
      },
      {
        id: 'cold-2',
        title: 'Add water',
        description: 'Pour 500ml room temperature water. Fill to just below the top.',
        duration: 30,
        action: 'pour'
      },
      {
        id: 'cold-3',
        title: 'Stir',
        description: 'Stir gently to ensure all grounds are saturated.',
        duration: 15,
        action: 'stir'
      },
      {
        id: 'cold-4',
        title: 'Refrigerate',
        description: 'Place in refrigerator for 24 hours. Be patient - good things take time!',
        duration: 86280, // 23 hours 58 minutes (24h - previous steps)
        action: 'wait'
      },
      {
        id: 'cold-5',
        title: 'Attach filter & flip',
        description: 'Wet paper filter, attach cap, flip onto container.',
        duration: 15,
        action: 'flip'
      },
      {
        id: 'cold-6',
        title: 'Press',
        description: 'Press slowly over 45-60 seconds. This is thick concentrate!',
        duration: 30,
        action: 'press'
      }
    ],
    tips: [
      'Use coarse grind like for French press',
      'Dilute concentrate 1:1 with water or milk',
      'Keeps in fridge for up to 2 weeks'
    ]
  },
  {
    id: 'espresso-style',
    name: 'Espresso-Style',
    description: 'A rich, concentrated shot mimicking espresso. Perfect for milk drinks or straight as a small, intense coffee.',
    difficulty: 'advanced',
    totalTime: 60, // 1:00
    coffeeAmount: 17,
    waterAmount: 50,
    waterTemp: 92,
    method: 'standard',
    steps: [
      {
        id: 'espresso-1',
        title: 'Setup',
        description: 'Use fine espresso grind. Rinse filter, add 17g coffee, level the bed.',
        duration: 15,
        action: 'pour'
      },
      {
        id: 'espresso-2',
        title: 'Pour water',
        description: 'Pour exactly 50ml of 92°C water quickly, saturating all grounds.',
        duration: 5,
        action: 'pour'
      },
      {
        id: 'espresso-3',
        title: 'Stir vigorously',
        description: 'Stir 10 times quickly to create turbulence and extraction.',
        duration: 5,
        action: 'stir'
      },
      {
        id: 'espresso-4',
        title: 'Press immediately',
        description: 'Press hard and steady for 30 seconds. Use your body weight if needed.',
        duration: 30,
        action: 'press'
      },
      {
        id: 'espresso-5',
        title: 'Serve',
        description: 'Enjoy immediately or add to milk for a latte.',
        duration: 5,
        action: 'wait'
      }
    ],
    tips: [
      'This requires significant pressure - press hard!',
      'Fine grind is essential for resistance',
      'Perfect base for cappuccinos and lattes'
    ]
  },
  {
    id: 'bypass-method',
    name: 'Bypass Method',
    description: 'A tea-like, delicate cup achieved by brewing strong then diluting. Highlights bright, fruity notes.',
    difficulty: 'medium',
    totalTime: 90, // 1:30
    coffeeAmount: 20,
    waterAmount: 200, // 120ml brew + 80ml bypass
    waterTemp: 90,
    method: 'standard',
    steps: [
      {
        id: 'bypass-1',
        title: 'Setup',
        description: 'Rinse filter. Add 20g medium-fine coffee. Add 80ml hot water to serving cup.',
        duration: 20,
        action: 'pour'
      },
      {
        id: 'bypass-2',
        title: 'Brew water',
        description: 'Pour 120ml of 90°C water into Aeropress chamber.',
        duration: 10,
        action: 'pour'
      },
      {
        id: 'bypass-3',
        title: 'Stir',
        description: 'Stir 5 times gently.',
        duration: 5,
        action: 'stir'
      },
      {
        id: 'bypass-4',
        title: 'Steep',
        description: 'Let steep for 30 seconds.',
        duration: 30,
        action: 'wait'
      },
      {
        id: 'bypass-5',
        title: 'Press into bypass water',
        description: 'Press over 20 seconds into cup with 80ml hot water.',
        duration: 20,
        action: 'press'
      },
      {
        id: 'bypass-6',
        title: 'Swirl',
        description: 'Swirl cup to mix concentrate with bypass water.',
        duration: 5,
        action: 'stir'
      }
    ],
    tips: [
      'Pre-heating the serving cup helps maintain temperature',
      'Experiment with bypass ratio (60-100ml)',
      'Great for light roast, fruity coffees'
    ]
  }
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(recipe => recipe.id === id);
}

export function getAllRecipeIds(): string[] {
  return recipes.map(recipe => recipe.id);
}
