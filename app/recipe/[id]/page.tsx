import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRecipeById, getAllRecipeIds } from '@/lib/recipes';
import { BrewingTimer } from '@/components/brewing-timer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Coffee, Droplets, Thermometer, Clock, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Generate static params for all recipes
export async function generateStaticParams() {
  return getAllRecipeIds().map((id) => ({
    id: id,
  }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  const formatTime = (seconds: number): string => {
    if (seconds >= 3600) {
      const hours = Math.floor(seconds / 3600);
      return `${hours}h`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (remainingSeconds === 0) {
      return `${minutes}m`;
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const difficultyColor = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Recipes
          </Button>
        </Link>

        {/* Recipe Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-4xl font-bold">{recipe.name}</h1>
            <Badge className={difficultyColor[recipe.difficulty]}>
              {recipe.difficulty}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{recipe.description}</p>
        </div>

        {/* Recipe Details Card */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Coffee className="w-8 h-8 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">{recipe.coffeeAmount}g</div>
                  <div className="text-sm text-muted-foreground">Coffee</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="w-8 h-8 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">{recipe.waterAmount}ml</div>
                  <div className="text-sm text-muted-foreground">Water</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Thermometer className="w-8 h-8 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">{recipe.waterTemp}°C</div>
                  <div className="text-sm text-muted-foreground">Temperature</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">{formatTime(recipe.totalTime)}</div>
                  <div className="text-sm text-muted-foreground">Total Time</div>
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Method:</span>
              <Badge variant="outline" className="capitalize">
                {recipe.method}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Brewing Timer */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Brewing Timer</h2>
          <BrewingTimer steps={recipe.steps} />
        </div>

        {/* Tips */}
        {recipe.tips && recipe.tips.length > 0 && (
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertDescription>
              <div className="font-semibold mb-2">Pro Tips:</div>
              <ul className="list-disc list-inside space-y-1">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="text-sm">
                    {tip}
                  </li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
