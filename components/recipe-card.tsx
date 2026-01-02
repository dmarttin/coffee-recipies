import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Recipe } from '@/lib/types';
import { Clock, Coffee, Thermometer } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
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
    easy: 'bg-green-100 text-green-800 hover:bg-green-200',
    medium: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    advanced: 'bg-red-100 text-red-800 hover:bg-red-200',
  };

  return (
    <Link href={`/recipe/${recipe.id}`} className="block h-full">
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <CardTitle className="text-xl">{recipe.name}</CardTitle>
            <Badge className={difficultyColor[recipe.difficulty]}>
              {recipe.difficulty}
            </Badge>
          </div>
          <CardDescription>{recipe.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>{formatTime(recipe.totalTime)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-muted-foreground" />
              <span>{recipe.coffeeAmount}g coffee / {recipe.waterAmount}ml water</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-muted-foreground" />
              <span>{recipe.waterTemp}°C</span>
            </div>
          </div>
          <div className="mt-4">
            <Badge variant="outline" className="capitalize">
              {recipe.method}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
