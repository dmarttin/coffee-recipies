// @ts-nocheck
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RecipeStep } from '@/lib/types';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Clock, Play, Pause, ChevronUp, ChevronDown, X } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface TikTokBrewingTimerProps {
  steps: RecipeStep[];
  onComplete?: () => void;
  onClose?: () => void;
}

export function TikTokBrewingTimer({ steps, onComplete, onClose }: TikTokBrewingTimerProps) {
  const { t } = useLanguage();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(steps[0]?.duration || 0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0); // For animation direction

  // Touch/swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (px) to trigger navigation
  const minSwipeDistance = 50;

  const currentStep = steps[currentStepIndex];
  const totalSteps = steps.length;
  const hasTimer = currentStep?.hasTimer !== false;

  // Timer effect
  useEffect(() => {
    if (!isRunning || isPaused || !currentStep || !hasTimer) return;

    const intervalId = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Auto advance to next step
          if (currentStepIndex < totalSteps - 1) {
            handleNext();
          } else {
            setIsRunning(false);
            onComplete?.();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, isPaused, currentStepIndex, currentStep, hasTimer, totalSteps, onComplete]);

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setDirection(1);
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      setTimeRemaining(steps[nextIndex].duration);
      setIsRunning(false);
      setIsPaused(false);
    } else {
      onComplete?.();
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setDirection(-1);
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      setTimeRemaining(steps[prevIndex].duration);
      setIsRunning(false);
      setIsPaused(false);
    }
  };

  const toggleTimer = () => {
    if (!hasTimer) return;

    if (!isRunning) {
      setIsRunning(true);
      setIsPaused(false);
    } else if (!isPaused) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  };

  // Debounced navigation to prevent rapid swipes
  const navigateWithDebounce = useCallback((dir: 'next' | 'prev') => {
    if (isNavigating) return;
    setIsNavigating(true);

    if (dir === 'next') {
      handleNext();
    } else {
      handlePrevious();
    }

    setTimeout(() => setIsNavigating(false), 300);
  }, [isNavigating]);

  // Touch event handlers for swipe detection
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipeUp = distance > minSwipeDistance;
    const isSwipeDown = distance < -minSwipeDistance;

    if (isSwipeUp) {
      navigateWithDebounce('next');
    } else if (isSwipeDown) {
      navigateWithDebounce('prev');
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse wheel handler for desktop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let wheelTimeout: NodeJS.Timeout | null = null;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Debounce wheel events
      if (wheelTimeout) return;

      wheelTimeout = setTimeout(() => {
        wheelTimeout = null;
      }, 300);

      if (e.deltaY > 0) {
        navigateWithDebounce('next');
      } else if (e.deltaY < 0) {
        navigateWithDebounce('prev');
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [navigateWithDebounce]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          navigateWithDebounce('next');
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          navigateWithDebounce('prev');
          break;
        case ' ':
        case 'Enter':
          e.preventDefault();
          toggleTimer();
          break;
        case 'Escape':
          onClose?.();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigateWithDebounce, toggleTimer, onClose]);

  // Lock body scroll when component mounts
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = currentStep && hasTimer
    ? ((currentStep.duration - timeRemaining) / currentStep.duration) * 100
    : 0;

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-background overflow-hidden touch-none"
    >
      {/* Close Button */}
      {onClose && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-background/80 backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </Button>
      )}

      {/* Step Indicator Dots */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 flex gap-1.5">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === currentStepIndex
                ? 'w-8 bg-primary'
                : index < currentStepIndex
                ? 'w-1.5 bg-primary/60'
                : 'w-1.5 bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      {/* Swipeable Step Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStepIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="h-full w-full flex flex-col items-center justify-center px-6 py-20"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Step Header */}
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 text-base px-4 py-1.5">
              {t('stepOf', { current: currentStepIndex + 1, total: totalSteps })}
            </Badge>
            <Badge variant="default" className="mb-4 text-base px-4 py-1.5 capitalize">
              {currentStep?.action && t(currentStep.action)}
            </Badge>
          </div>

          {/* Step Content */}
          <div className="flex-1 flex flex-col items-center justify-center max-w-lg w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              {currentStep?.title}
            </h2>
            <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8">
              {currentStep?.description}
            </p>

            {/* Timer or Manual Step Indicator */}
            {hasTimer ? (
              <div className="w-full">
                <div
                  className="text-8xl md:text-9xl font-bold text-center mb-6 tabular-nums cursor-pointer select-none"
                  onClick={toggleTimer}
                >
                  {formatTime(timeRemaining)}
                </div>
                <Progress value={progressPercentage} className="h-2 mb-6" />
              </div>
            ) : (
              <div className="text-3xl font-semibold text-muted-foreground text-center mb-8">
                {t('manualStep')}
                <div className="text-lg mt-2">
                  {t('clickNextWhenReady')}
                </div>
              </div>
            )}

            {/* Timer Control Button */}
            {hasTimer && (
              <Button
                size="lg"
                onClick={toggleTimer}
                className="w-40 h-40 rounded-full text-xl mb-8"
              >
                {!isRunning || isPaused ? (
                  <>
                    <Play className="w-12 h-12" />
                  </>
                ) : (
                  <>
                    <Pause className="w-12 h-12" />
                  </>
                )}
              </Button>
            )}
          </div>

          {/* Navigation Hints */}
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            {currentStepIndex < totalSteps - 1 && (
              <div className="flex items-center gap-2 animate-bounce">
                <ChevronDown className="w-5 h-5" />
                <span className="text-sm">{t('next')}</span>
              </div>
            )}
            {currentStepIndex > 0 && (
              <div className="flex items-center gap-2">
                <ChevronUp className="w-5 h-5" />
                <span className="text-sm">{t('back')}</span>
              </div>
            )}
          </div>

          {/* Step Completion Indicator */}
          {currentStepIndex === totalSteps - 1 && !hasTimer && (
            <Button
              size="lg"
              onClick={() => onComplete?.()}
              className="mt-8"
            >
              <Check className="w-5 h-5 mr-2" />
              {t('complete')}
            </Button>
          )}
        </motion.div>
      </AnimatePresence>

      {/* All Steps Preview - Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-4 max-h-32 overflow-y-auto">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;

            return (
              <div
                key={step.id}
                onClick={() => {
                  setDirection(index > currentStepIndex ? 1 : -1);
                  setCurrentStepIndex(index);
                  setTimeRemaining(step.duration);
                  setIsRunning(false);
                  setIsPaused(false);
                }}
                className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all ${
                  isCurrent
                    ? 'border-primary bg-primary/10'
                    : isCompleted
                    ? 'border-primary/40 bg-muted'
                    : 'border-muted-foreground/20 bg-background'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6 text-primary" />
                ) : (
                  <span className="text-2xl font-bold">{index + 1}</span>
                )}
                <span className="text-xs text-center mt-1 line-clamp-1 px-1">
                  {step.title.split(' ')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
