import { getAllRecipeIds } from '@/lib/recipes';
import { RecipePageClient } from './page-client';

// Generate static params for all recipes
export async function generateStaticParams() {
  return getAllRecipeIds().map((id) => ({
    id: id,
  }));
}

export default function RecipePage() {
  return <RecipePageClient />;
}
