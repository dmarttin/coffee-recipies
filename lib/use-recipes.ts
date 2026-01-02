import { recipes } from './recipes';
import { recipesEs } from './recipes-es';
import { Language } from './translations';
import { Recipe } from './types';

export function useRecipes(language: Language): Recipe[] {
  return language === 'es' ? recipesEs : recipes;
}

export function getRecipeByIdWithLang(id: string, language: Language): Recipe | undefined {
  const recipeList = language === 'es' ? recipesEs : recipes;
  return recipeList.find(recipe => recipe.id === id);
}
