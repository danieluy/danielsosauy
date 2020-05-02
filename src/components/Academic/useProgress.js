import { useState, useEffect } from 'react';

export default function useProgress(start, limit, speed = 1) {
  const [progress, setProgress] = useState(start);

  useEffect(() => {
    if (progress >= limit) {
      setProgress(limit);
    }
    else {
      window.requestAnimationFrame(() => setProgress(progress + speed));
    }
  }, [progress]);

  return progress;
}
