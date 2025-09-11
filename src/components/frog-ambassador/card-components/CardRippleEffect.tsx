
import { useRef } from "react";
import { useRippleEffect } from "@/hooks/useRippleEffect";

interface CardRippleEffectProps {
  ripples: {
    id: string;
    x: number;
    y: number;
    size: number;
    opacity: number;
  }[];
}

export default function CardRippleEffect({ ripples }: CardRippleEffectProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-gold/5 pointer-events-none"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            opacity: ripple.opacity,
            transform: 'scale(1)',
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
          }}
        />
      ))}
    </div>
  );
}

export function useCardRippleEffect() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Use the ripple effect hook for Japanese-inspired water interactions
  const { ripples: originalRipples } = useRippleEffect(cardRef, {
    maxRipples: 3,
    duration: 3000,
    size: 100,
    minOpacity: 0.05,
    maxOpacity: 0.15,
    speedVariation: true
  });

  // Convert ripples to the correct type format (id: number to id: string)
  const ripples = originalRipples.map(ripple => ({
    id: String(ripple.id), // Convert number to string to fix type mismatch
    x: ripple.x,
    y: ripple.y,
    size: ripple.size,
    opacity: ripple.opacity
  }));

  return { cardRef, ripples };
}
