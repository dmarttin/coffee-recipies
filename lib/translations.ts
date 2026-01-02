export const translations = {
  en: {
    // Home page
    title: 'Aeropress Recipe Guide',
    subtitle: 'Step-by-step brewing guides with interactive timers for perfect coffee every time',
    chooseRecipe: 'Choose a recipe to get started with guided brewing',

    // Recipe card
    coffee: 'Coffee',
    water: 'Water',
    temperature: 'Temperature',
    totalTime: 'Total Time',
    method: 'Method',

    // Difficulty levels
    easy: 'Easy',
    medium: 'Medium',
    advanced: 'Advanced',

    // Method types
    standard: 'Standard',
    inverted: 'Inverted',

    // Recipe detail page
    backToRecipes: 'Back to Recipes',
    brewingTimer: 'Brewing Timer',
    proTips: 'Pro Tips',

    // Timer controls
    start: 'Start',
    pause: 'Pause',
    resume: 'Resume',
    reset: 'Reset',
    back: 'Back',
    next: 'Next',
    complete: 'Complete',

    // Timer display
    stepOf: 'Step {{current}} of {{total}}',
    allSteps: 'All Steps',
    manualStep: 'Manual Step',
    clickNextWhenReady: 'Click Next when ready to continue',

    // Actions
    pour: 'Pour',
    wait: 'Wait',
    stir: 'Stir',
    press: 'Press',
    flip: 'Flip',

    // Settings
    language: 'Language',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
  },
  es: {
    // Home page
    title: 'Guía de Recetas Aeropress',
    subtitle: 'Guías de preparación paso a paso con temporizadores interactivos para un café perfecto',
    chooseRecipe: 'Elige una receta para comenzar a preparar café',

    // Recipe card
    coffee: 'Café',
    water: 'Agua',
    temperature: 'Temperatura',
    totalTime: 'Tiempo Total',
    method: 'Método',

    // Difficulty levels
    easy: 'Fácil',
    medium: 'Medio',
    advanced: 'Avanzado',

    // Method types
    standard: 'Estándar',
    inverted: 'Invertido',

    // Recipe detail page
    backToRecipes: 'Volver a Recetas',
    brewingTimer: 'Temporizador de Preparación',
    proTips: 'Consejos Profesionales',

    // Timer controls
    start: 'Iniciar',
    pause: 'Pausar',
    resume: 'Continuar',
    reset: 'Reiniciar',
    back: 'Atrás',
    next: 'Siguiente',
    complete: 'Completar',

    // Timer display
    stepOf: 'Paso {{current}} de {{total}}',
    allSteps: 'Todos los Pasos',
    manualStep: 'Paso Manual',
    clickNextWhenReady: 'Haz clic en Siguiente cuando estés listo para continuar',

    // Actions
    pour: 'Verter',
    wait: 'Esperar',
    stir: 'Revolver',
    press: 'Prensar',
    flip: 'Voltear',

    // Settings
    language: 'Idioma',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
