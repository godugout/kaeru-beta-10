
import { useState, useEffect, useRef, RefObject } from 'react';

export interface RippleState {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export interface WaterRippleOptions {
  maxRipples?: number;
  rippleDuration?: number;
  baseSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  speedVariation?: boolean;
}

export function useWaterRipple(
  ref: RefObject<HTMLElement>,
  options: WaterRippleOptions = {}
) {
  const {
    maxRipples = 3,
    rippleDuration = 1500,
    baseSize = 80,
    minOpacity = 0.2,
    maxOpacity = 0.5,
    speedVariation = false
  } = options;

  const [ripples, setRipples] = useState<RippleState[]>([]);
  const nextId = useRef(0);

  // Handle mouse move to create ripple effect
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let throttleTimeout: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimeout !== null) return;

      throttleTimeout = window.setTimeout(() => {
        throttleTimeout = null;
      }, 100); // Throttle to avoid too many ripples

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Random variation for natural feel
      const size = baseSize + Math.random() * 20;
      const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);

      const newRipple = {
        id: nextId.current,
        x,
        y,
        size,
        opacity,
      };

      nextId.current += 1;

      setRipples((prev) => {
        // Keep only the most recent ripples up to maxRipples
        const updated = [...prev, newRipple];
        return updated.slice(Math.max(0, updated.length - maxRipples));
      });

      // Remove ripple after animation completes - variable duration if speedVariation is true
      const duration = speedVariation 
        ? rippleDuration * (0.8 + Math.random() * 0.4) 
        : rippleDuration;
        
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, duration);
    };

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimeout) window.clearTimeout(throttleTimeout);
    };
  }, [ref, baseSize, maxRipples, minOpacity, maxOpacity, rippleDuration, speedVariation]);

  return { ripples };
}
