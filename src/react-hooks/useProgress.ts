import { useState, useCallback } from 'react';

export default function useProgress(initValue = 0, speed = 1)
  : [number, (start: number, limit: number) => void] {
  const [progress, setProgress] = useState(initValue);

  const increaseToLimit = useCallback((_progress, limit) => {
    if (_progress >= limit) {
      setProgress(limit);
    }
    else {
      setProgress(_progress);
      window.requestAnimationFrame(() => increaseToLimit(_progress + speed, limit));
    }
  }, []);

  const decreaseToLimit = useCallback((_progress, limit) => {
    if (_progress <= limit) {
      setProgress(limit);
    }
    else {
      setProgress(_progress);
      window.requestAnimationFrame(() => decreaseToLimit(_progress - speed, limit));
    }
  }, []);

  const run = useCallback((start, limit) => {
    if (start < limit) {
      increaseToLimit(start, limit);
    }
    if (start > limit) {
      decreaseToLimit(start, limit);
    }
  }, []);

  return [progress, run];
}
