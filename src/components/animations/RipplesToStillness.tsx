
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface RipplesToStillnessProps {
  size?: number;
  duration?: number;
  color?: string;
  repeat?: number;
  isVisible?: boolean; // Add this prop to the interface
}

const RipplesToStillness: React.FC<RipplesToStillnessProps> = ({
  size = 300,
  duration = 5,
  color = '#fff',
  repeat = 3,
  isVisible = true, // Add default value
}) => {
  const [isAnimating, setIsAnimating] = useState(isVisible);
  
  // Update animation state when isVisible prop changes
  useEffect(() => {
    setIsAnimating(isVisible);
  }, [isVisible]);
  
  useEffect(() => {
    // Stop animation after duration expires if animation is running
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, duration * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [duration, isAnimating]);
  
  // Create array for ripple elements
  const ripples = Array.from({ length: repeat });
  
  return (
    <div 
      className="relative"
      style={{
        width: size,
        height: size,
      }}
    >
      {ripples.map((_, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-full"
          style={{
            border: `2px solid ${color}`,
            opacity: 0.2,
          }}
          initial={{ 
            scale: 0,
            opacity: 0.8,
          }}
          animate={isAnimating ? {
            scale: 1,
            opacity: 0
          } : {
            scale: 0.5,
            opacity: 0.1,
          }}
          transition={{
            duration: duration / repeat,
            repeat: isAnimating ? Infinity : 0,
            delay: (duration / repeat) * index / 2,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Center point */}
      <motion.div
        className="absolute rounded-full bg-white/20"
        style={{
          top: '50%',
          left: '50%',
          width: size * 0.05,
          height: size * 0.05,
          marginLeft: -(size * 0.05) / 2,
          marginTop: -(size * 0.05) / 2,
        }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  );
};

export default RipplesToStillness;
