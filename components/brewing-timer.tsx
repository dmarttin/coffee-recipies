'use client';

import { useState, useEffect } from 'react';
import { RecipeStep } from '@/lib/types';
import { TimerControls } from './timer-controls';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface BrewingTimerProps {
  steps: RecipeStep[];
  onComplete?: () => void;
}

export function BrewingTimer({ steps, onComplete }: BrewingTimerProps) {
  const { t } = useLanguage();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(steps[0]?.duration || 0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentStep = steps[currentStepIndex];
  const totalSteps = steps.length;
  const hasTimer = currentStep?.hasTimer !== false; // Default to true for backward compatibility

  // Timer effect with proper cleanup - only runs for steps with timers
  useEffect(() => {
    if (!isRunning || isPaused || !currentStep || !hasTimer) return;

    const intervalId = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Step complete - move to next or finish
          if (currentStepIndex < totalSteps - 1) {
            const nextStepIndex = currentStepIndex + 1;
            setCurrentStepIndex(nextStepIndex);
            setIsRunning(false); // Stop timer, user needs to start next step
            setIsPaused(false);
            return steps[nextStepIndex].duration;
          } else {
            // All steps complete
            setIsRunning(false);
            onComplete?.();
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup function to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [isRunning, isPaused, currentStepIndex, steps, totalSteps, currentStep, onComplete, hasTimer]);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setCurrentStepIndex(0);
    setTimeRemaining(steps[0]?.duration || 0);
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      const prevStepIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevStepIndex);
      setTimeRemaining(steps[prevStepIndex].duration);
      setIsRunning(false);
      setIsPaused(false);
    }
  };

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      const nextStepIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextStepIndex);
      setTimeRemaining(steps[nextStepIndex].duration);
      setIsRunning(false);
      setIsPaused(false);
    } else {
      // Last step - complete the recipe
      onComplete?.();
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = currentStep
    ? ((currentStep.duration - timeRemaining) / currentStep.duration) * 100
    : 0;

  const elapsedTime = currentStep ? currentStep.duration - timeRemaining : 0;

  return (
    <div className="space-y-6">
      {/* Current Step Display */}
      <Card className="border-2 border-primary">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Badge variant="default" className="text-lg px-4 py-1">
                {t('stepOf', { current: currentStepIndex + 1, total: totalSteps })}
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-1 capitalize">
                {currentStep?.action && t(currentStep.action)}
              </Badge>
            </div>

            <h2 className="text-3xl font-bold">{currentStep?.title}</h2>
            <p className="text-lg text-muted-foreground">
              {currentStep?.description}
            </p>

            {/* Timer Display - only show for steps with timer */}
            {hasTimer ? (
              <>
                <div className="py-8">
                  <div className="text-7xl font-bold tabular-nums">
                    {formatTime(timeRemaining)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {formatTime(elapsedTime)} / {formatTime(currentStep?.duration || 0)}
                  </div>
                </div>

                {/* Progress Bar */}
                <Progress value={progressPercentage} className="h-3" />
              </>
            ) : (
              <div className="py-8">
                <div className="text-2xl font-semibold text-muted-foreground">
                  {t('manualStep')}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {t('clickNextWhenReady')}
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="pt-4">
              <TimerControls
                isRunning={isRunning}
                isPaused={isPaused}
                onStart={handleStart}
                onPause={handlePause}
                onReset={handleReset}
                hasTimer={hasTimer}
                onPrevious={handlePrevious}
                onNext={handleNext}
                canGoBack={currentStepIndex > 0}
                canGoNext={currentStepIndex < totalSteps - 1}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* All Steps Overview */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">{t('allSteps')}</h3>
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;
          const isPending = index > currentStepIndex;

          return (
            <Card
              key={step.id}
              className={`transition-all ${
                isCurrent
                  ? 'border-2 border-primary shadow-md'
                  : isCompleted
                  ? 'bg-muted opacity-75'
                  : 'opacity-50'
              }`}
            >
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {isCompleted ? (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary-foreground" />
                      </div>
                    ) : (
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                          isCurrent
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-muted-foreground text-muted-foreground'
                        }`}
                      >
                        {index + 1}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold">{step.title}</h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground flex-shrink-0">
                        <Clock className="w-4 h-4" />
                        <span>{formatTime(step.duration)}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {step.description}
                    </p>
                    <Badge
                      variant="outline"
                      className="mt-2 text-xs capitalize"
                    >
                      {t(step.action)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
