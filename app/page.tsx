import { recipes } from '@/lib/recipes';
import { RecipeCard } from '@/components/recipe-card';
import { Coffee } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Aeropress Recipe Guide</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Step-by-step brewing guides with interactive timers for perfect coffee every time
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
          <p>Choose a recipe to get started with guided brewing</p>
        </div>
      </div>
    </div>
  );
}
