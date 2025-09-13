import { useState, useEffect, useCallback } from 'react';

interface InactivityOptions {
  timeout: number; // milliseconds
  events?: string[];
}

const DEFAULT_EVENTS = [
  'mousedown',
  'mousemove', 
  'keypress',
  'scroll',
  'touchstart',
  'click'
];

export const useInactivityDetector = (options: InactivityOptions) => {
  const { timeout, events = DEFAULT_EVENTS } = options;
  const [isIdle, setIsIdle] = useState(false);

  const resetTimer = useCallback(() => {
    setIsIdle(false);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleActivity = () => {
      clearTimeout(timeoutId);
      setIsIdle(false);
      
      timeoutId = setTimeout(() => {
        setIsIdle(true);
      }, timeout);
    };

    // Set initial timer
    timeoutId = setTimeout(() => {
      setIsIdle(true);
    }, timeout);

    // Add event listeners
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [timeout, events]);

  return { isIdle, resetTimer };
};