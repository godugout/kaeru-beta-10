
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useWaterRipple, RippleState } from "@/hooks/useWaterRipple";

interface WaterRippleProps {
  children: React.ReactNode;
  className?: string;
  rippleColor?: string;
}

const WaterRipple = ({ 
  children, 
  className = "", 
  rippleColor = "rgba(230, 185, 128, 0.15)" // Default to gold color with low opacity
}: WaterRippleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ripples } = useWaterRipple(containerRef, {
    maxRipples: 3,
    rippleDuration: 1500,
    baseSize: 80
  });

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Render the ripple effects */}
      {ripples.map((ripple) => (
        <Ripple key={ripple.id} ripple={ripple} color={rippleColor} />
      ))}
      
      {/* Render children content */}
      {children}
    </div>
  );
};

interface RippleProps {
  ripple: RippleState;
  color: string;
}

const Ripple = ({ ripple, color }: RippleProps) => {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: ripple.x,
        top: ripple.y,
        backgroundColor: color,
        x: "-50%",
        y: "-50%"
      }}
      initial={{ 
        width: 0, 
        height: 0, 
        opacity: ripple.opacity 
      }}
      animate={{ 
        width: ripple.size * 2, 
        height: ripple.size * 2, 
        opacity: 0 
      }}
      transition={{ 
        duration: 1.5, 
        ease: "easeOut" 
      }}
    />
  );
};

export default WaterRipple;
