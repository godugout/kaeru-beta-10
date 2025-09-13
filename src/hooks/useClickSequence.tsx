import { useState, useEffect, useRef } from 'react';

interface ClickSequenceOptions {
  requiredClicks: number;
  resetTime: number; // milliseconds
}

export const useClickSequence = (options: ClickSequenceOptions) => {
  const { requiredClicks, resetTime } = options;
  const [clickCount, setClickCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const registerClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      
      if (newCount >= requiredClicks) {
        setIsComplete(true);
        return newCount;
      }
      
      // Reset timer on each click
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setClickCount(0);
      }, resetTime);
      
      return newCount;
    });
  };

  const reset = () => {
    setClickCount(0);
    setIsComplete(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    clickCount,
    isComplete,
    registerClick,
    reset
  };
};