'use client';

import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface TimerControlsProps {
  isRunning: boolean;
  isPaused: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  hasTimer: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  canGoBack?: boolean;
  canGoNext?: boolean;
}

export function TimerControls({
  isRunning,
  isPaused,
  onStart,
  onPause,
  onReset,
  hasTimer,
  onPrevious,
  onNext,
  canGoBack = false,
  canGoNext = false,
}: TimerControlsProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      {/* Timer controls - only shown for steps with timer */}
      {hasTimer && (
        <div className="flex items-center justify-center gap-4">
          {!isRunning || isPaused ? (
            <Button
              size="lg"
              onClick={onStart}
              className="min-w-32 min-h-14 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              {isPaused ? t('resume') : t('start')}
            </Button>
          ) : (
            <Button
              size="lg"
              variant="secondary"
              onClick={onPause}
              className="min-w-32 min-h-14 text-lg"
            >
              <Pause className="w-5 h-5 mr-2" />
              {t('pause')}
            </Button>
          )}

          <Button
            size="lg"
            variant="outline"
            onClick={onReset}
            className="min-w-32 min-h-14 text-lg"
            disabled={!isRunning && !isPaused}
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            {t('reset')}
          </Button>
        </div>
      )}

      {/* Navigation controls */}
      <div className="flex items-center justify-center gap-4">
        <Button
          size="lg"
          variant="outline"
          onClick={onPrevious}
          disabled={!canGoBack}
          className="min-w-32 min-h-14 text-lg"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          {t('back')}
        </Button>

        <Button
          size="lg"
          onClick={onNext}
          disabled={!canGoNext}
          className="min-w-32 min-h-14 text-lg"
        >
          {canGoNext ? (
            <>
              {t('next')}
              <ChevronRight className="w-5 h-5 ml-2" />
            </>
          ) : (
            <>
              <Check className="w-5 h-5 mr-2" />
              {t('complete')}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
