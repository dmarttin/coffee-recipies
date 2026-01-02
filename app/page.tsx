'use client';

import { RecipeCard } from '@/components/recipe-card';
import { Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useRecipes } from '@/lib/use-recipes';

export default function Home() {
  const { t, language } = useLanguage();
  const recipes = useRecipes(language);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee className="w-12 h-12" />
            <h1 className="text-5xl font-bold">{t('title')}</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>{t('chooseRecipe')}</p>
        </div>
      </div>
    </div>
  );
}
