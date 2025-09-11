
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

interface WaterRippleEffectProps {
  scrollSpeed?: number;
  scrollDirection?: number;
  activeStage?: number;
  interactionMode?: "scroll" | "breathing" | "static";
  breathingPattern?: string;
  color?: string;
  intensity?: "low" | "medium" | "high";
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  opacity: number;
}

const WaterRippleEffect = ({ 
  scrollSpeed = 0, 
  scrollDirection = 0, 
  activeStage = 0,
  interactionMode = "scroll",
  breathingPattern = "4-4-4",
  color = "blue",
  intensity = "medium"
}: WaterRippleEffectProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const { shouldAnimate, getOptimizedDuration, getBreathingTiming } = useOptimizedAnimation();
  
  // Determine max ripples and intensity factors based on intensity setting
  const intensityFactors = {
    low: { maxRipples: 5, frequency: 3000, baseOpacity: 0.06 },
    medium: { maxRipples: 10, frequency: 2000, baseOpacity: 0.08 },
    high: { maxRipples: 15, frequency: 1000, baseOpacity: 0.1 }
  };
  
  const { maxRipples, frequency, baseOpacity } = intensityFactors[intensity];

  // Generate ripples based on scroll speed
  useEffect(() => {
    if (!shouldAnimate) return;
    
    if (interactionMode === "scroll" && scrollSpeed > 0.5) {
      // Only generate ripples when scrolling fast enough
      const newRipple: Ripple = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: scrollSpeed * 10 + Math.random() * 100 + 50,
        duration: getOptimizedDuration(2 + Math.random() * 2),
        opacity: Math.min(baseOpacity, scrollSpeed * 0.05)
      };
      
      setRipples(prev => {
        const updated = [newRipple, ...prev];
        // Keep only the most recent ripples
        return updated.slice(0, maxRipples);
      });
    }
  }, [scrollSpeed, scrollDirection, shouldAnimate, interactionMode, baseOpacity, maxRipples]);

  // Generate breathing ripples
  useEffect(() => {
    if (!shouldAnimate || interactionMode !== "breathing") return;
    
    const breathingTimings = getBreathingTiming(breathingPattern);
    const totalCycleTime = breathingTimings.reduce((sum, time) => sum + time, 0);
    
    const interval = setInterval(() => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: window.innerWidth / 2 + (Math.random() * 100 - 50),
        y: window.innerHeight / 2 + (Math.random() * 100 - 50),
        size: 100 + Math.random() * 150,
        duration: getOptimizedDuration(breathingTimings[0] / 1000), // Inhale timing
        opacity: baseOpacity
      };
      
      setRipples(prev => {
        const updated = [newRipple, ...prev];
        return updated.slice(0, maxRipples);
      });
    }, frequency); // Create new ripples at intensity-based frequency
    
    return () => clearInterval(interval);
  }, [interactionMode, breathingPattern, shouldAnimate, frequency, baseOpacity, maxRipples]);

  // Generate static ambient ripples
  useEffect(() => {
    if (!shouldAnimate || interactionMode !== "static") return;
    
    const interval = setInterval(() => {
      if (Math.random() > 0.5) { // Only create ripples occasionally for subtle effect
        const newRipple: Ripple = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: 80 + Math.random() * 120,
          duration: getOptimizedDuration(3 + Math.random() * 3),
          opacity: baseOpacity * 0.7
        };
        
        setRipples(prev => {
          const updated = [newRipple, ...prev];
          return updated.slice(0, maxRipples);
        });
      }
    }, frequency * 1.5);
    
    return () => clearInterval(interval);
  }, [interactionMode, shouldAnimate, frequency, baseOpacity, maxRipples]);

  // Remove ripples after they've completed their animation
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setRipples(prev => prev.filter(ripple => now - ripple.id < ripple.duration * 1000));
    }, 1000);
    
    return () => clearInterval(cleanup);
  }, []);

  // Color variations based on the active stage or specified color
  const getRippleColor = () => {
    if (color !== "blue") {
      switch (color) {
        case "gold": return "rgba(230, 185, 128, 0.1)";   // Gold
        case "green": return "rgba(51, 160, 51, 0.1)";    // Green
        case "teal": return "rgba(51, 180, 160, 0.1)";    // Teal
        case "purple": return "rgba(130, 110, 200, 0.1)"; // Purple
        default: return "rgba(255, 255, 255, 0.1)";       // White
      }
    }
    
    switch (activeStage) {
      case 0: return "rgba(51, 65, 255, 0.1)";   // Egg - blue-indigo
      case 1: return "rgba(51, 195, 240, 0.1)";  // Tadpole - blue
      case 2: return "rgba(51, 180, 160, 0.1)";  // Froglet - teal
      case 3: return "rgba(51, 160, 51, 0.1)";   // Frog - green
      default: return "rgba(255, 255, 255, 0.1)";
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static water texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_10%,transparent_70%)] bg-[length:100px_100px]"></div>
      
      {/* Dynamic ripples */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            background: getRippleColor(),
            width: 0,
            height: 0,
            x: "-50%",
            y: "-50%",
            opacity: ripple.opacity,
          }}
          animate={{
            width: ripple.size,
            height: ripple.size,
            opacity: [ripple.opacity, 0],
          }}
          transition={{
            duration: ripple.duration,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default WaterRippleEffect;
