import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerControlsProps {
  isRunning: boolean;
  isPaused: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export function TimerControls({
  isRunning,
  isPaused,
  onStart,
  onPause,
  onReset,
}: TimerControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      {!isRunning || isPaused ? (
        <Button
          size="lg"
          onClick={onStart}
          className="min-w-32 min-h-14 text-lg"
        >
          <Play className="w-5 h-5 mr-2" />
          {isPaused ? 'Resume' : 'Start'}
        </Button>
      ) : (
        <Button
          size="lg"
          variant="secondary"
          onClick={onPause}
          className="min-w-32 min-h-14 text-lg"
        >
          <Pause className="w-5 h-5 mr-2" />
          Pause
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
        Reset
      </Button>
    </div>
  );
}
