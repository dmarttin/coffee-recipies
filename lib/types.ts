export interface RecipeStep {
  id: string;
  title: string;
  description: string;
  duration: number; // in seconds
  action: 'pour' | 'wait' | 'stir' | 'press' | 'flip';
  hasTimer?: boolean; // if true, step requires timer; if false, step is manual (default: true for backward compatibility)
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'advanced';
  totalTime: number; // in seconds
  coffeeAmount: number; // in grams
  waterAmount: number; // in ml
  waterTemp: number; // in celsius
  method: 'standard' | 'inverted';
  steps: RecipeStep[];
  tips?: string[];
}
