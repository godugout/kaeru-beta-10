
import { useState, useEffect, RefObject } from 'react';

interface Ripple {
  x: number;
  y: number;
  size: number;
  opacity: number;
  id: number;
  // Add speed variation for more natural effect
  speed: number;
}

interface UseRippleEffectOptions {
  maxRipples: number;
  duration: number;
  size: number;
  // Add options for ripple characteristics
  minOpacity?: number;
  maxOpacity?: number;
  speedVariation?: boolean;
}

export function useRippleEffect(
  containerRef: RefObject<HTMLElement>,
  options: UseRippleEffectOptions = { 
    maxRipples: 3, 
    duration: 2000, 
    size: 100,
    minOpacity: 0.3,
    maxOpacity: 0.6,
    speedVariation: true
  }
) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [nextId, setNextId] = useState(0);
  
  // Handle mouse movement to create ripples
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    let timeoutId: NodeJS.Timeout;
    let throttle = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (throttle) return;
      
      throttle = true;
      
      // Get position relative to container
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create new ripple with natural variation for wabi-sabi aesthetic
      const minOpacity = options.minOpacity || 0.3;
      const maxOpacity = options.maxOpacity || 0.6;
      const randomOpacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
      
      // Add speed variation for more organic movement
      const speed = options.speedVariation 
        ? 0.8 + Math.random() * 0.4 // 0.8-1.2 speed variation
        : 1;
      
      const newRipple: Ripple = {
        x,
        y,
        size: 0,
        opacity: randomOpacity,
        id: nextId,
        speed
      };
      
      setRipples(prev => [...prev.slice(-options.maxRipples + 1), newRipple]);
      setNextId(prev => prev + 1);
      
      // Reset throttle after a delay that varies slightly
      const throttleTime = options.speedVariation 
        ? 80 + Math.random() * 40 // 80-120ms for natural variation
        : 100;
        
      setTimeout(() => {
        throttle = false;
      }, throttleTime);
    };
    
    // Clean up old ripples with diminishing opacity
    const cleanupRipples = () => {
      setRipples(prev => prev.filter(ripple => ripple.opacity > 0.05));
      timeoutId = setTimeout(cleanupRipples, 500);
    };
    
    cleanupRipples();
    
    // Add event listener
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [containerRef, nextId, options]);
  
  // Animate ripples with varied growth rates for more natural feel
  useEffect(() => {
    if (ripples.length === 0) return;
    
    const animationFrame = requestAnimationFrame(() => {
      setRipples(prev => 
        prev.map(ripple => ({
          ...ripple,
          // Growth rate varies by ripple speed
          size: ripple.size + (2 * ripple.speed),
          // Opacity decreases at different rates based on size
          opacity: ripple.opacity * (0.98 - (ripple.size / 5000))
        }))
      );
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [ripples]);
  
  return { ripples };
}
