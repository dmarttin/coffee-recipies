'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { getRecipeByIdWithLang } from '@/lib/use-recipes';
import { BrewingTimer } from '@/components/brewing-timer';
import { TikTokBrewingTimer } from '@/components/tiktok-brewing-timer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Coffee, Droplets, Thermometer, Clock, Lightbulb, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

export function RecipePageClient() {
  const params = useParams();
  const id = params.id as string;
  const { t, language } = useLanguage();
  const recipe = getRecipeByIdWithLang(id, language);
  const [showTikTokView, setShowTikTokView] = useState(false);

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
    easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToRecipes')}
          </Button>
        </Link>

        {/* Recipe Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-4xl font-bold">{recipe.name}</h1>
            <Badge className={difficultyColor[recipe.difficulty]}>
              {t(recipe.difficulty)}
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
                  <div className="text-sm text-muted-foreground">{t('coffee')}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="w-8 h-8 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">{recipe.waterAmount}ml</div>
                  <div className="text-sm text-muted-foreground">{t('water')}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Thermometer className="w-8 h-8 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">{recipe.waterTemp}°C</div>
                  <div className="text-sm text-muted-foreground">{t('temperature')}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-bold">{formatTime(recipe.totalTime)}</div>
                  <div className="text-sm text-muted-foreground">{t('totalTime')}</div>
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{t('method')}:</span>
              <Badge variant="outline" className="capitalize">
                {t(recipe.method)}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Brewing Timer */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{t('brewingTimer')}</h2>
            <Button
              onClick={() => setShowTikTokView(true)}
              variant="default"
              className="gap-2"
            >
              <Smartphone className="w-4 h-4" />
              {t('fullScreen')}
            </Button>
          </div>
          <BrewingTimer steps={recipe.steps} />
        </div>

        {/* TikTok-Style Full Screen View */}
        {showTikTokView && (
          <TikTokBrewingTimer
            steps={recipe.steps}
            onClose={() => setShowTikTokView(false)}
            onComplete={() => setShowTikTokView(false)}
          />
        )}

        {/* Tips */}
        {recipe.tips && recipe.tips.length > 0 && (
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertDescription>
              <div className="font-semibold mb-2">{t('proTips')}:</div>
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
