import { useEffect, useState } from 'react';

interface UseOptimizedAnimationOptions {
  defaultValue?: boolean;
  disableOnLowMemory?: boolean;
  disableOnReducedMotion?: boolean;
}

/**
 * A hook that determines whether animations should be enabled 
 * based on device capabilities and user preferences
 */
export const useOptimizedAnimation = (options: UseOptimizedAnimationOptions = {}) => {
  const { 
    defaultValue = true,
    disableOnLowMemory = true,
    disableOnReducedMotion = true
  } = options;
  
  const [shouldAnimate, setShouldAnimate] = useState(defaultValue);
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = 
      disableOnReducedMotion && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for device memory if available
    const hasLowMemory = 
      disableOnLowMemory && 
      ('deviceMemory' in navigator) && 
      // @ts-ignore - deviceMemory is not in the TypeScript types yet
      navigator.deviceMemory < 4;
    
    // Disable animations if necessary
    if (prefersReducedMotion || hasLowMemory) {
      setShouldAnimate(false);
    }
  }, [disableOnLowMemory, disableOnReducedMotion]);
  
  // Add the missing getOptimizedDuration method
  const getOptimizedDuration = (baseDuration: number): number => {
    // If animations are disabled, return a minimal duration
    if (!shouldAnimate) return 0;
    
    // Otherwise return the requested duration (potentially with adjustments)
    return baseDuration;
  };
  
  // Add the getBreathingTiming method for breathing patterns
  const getBreathingTiming = (pattern: string): number[] => {
    // Default 4-4-4 pattern (inhale, hold, exhale in seconds)
    const defaultPattern = [4000, 4000, 4000];
    
    if (!pattern || pattern.trim() === '') return defaultPattern;
    
    try {
      // Parse patterns like "4-4-4" into [4000, 4000, 4000] (milliseconds)
      const timings = pattern
        .split('-')
        .map(t => parseInt(t.trim()) * 1000);
      
      // Validate pattern has at least 2 parts
      return timings.length >= 2 ? timings : defaultPattern;
    } catch (e) {
      return defaultPattern;
    }
  };
  
  return { shouldAnimate, getOptimizedDuration, getBreathingTiming };
};
