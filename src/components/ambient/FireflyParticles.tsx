import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FireflyParticlesProps {
  isActive: boolean;
}

const FireflyParticles: React.FC<FireflyParticlesProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {Array.from({ length: 8 }).map((_, i) => (
        <Firefly key={i} delay={i * 0.5} />
      ))}
    </div>
  );
};

const Firefly: React.FC<{ delay: number }> = ({ delay }) => {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-kaeru-gold/60 blur-sm"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0 
      }}
      animate={{
        x: [
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth,
        ],
        y: [
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
        ],
        opacity: [0, 0.8, 0.4, 0.9, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default FireflyParticles;