
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSeasonalTheme } from '@/contexts/SeasonalThemeContext';
import { Flower, Droplet, Leaf, Snowflake } from 'lucide-react';

interface SeasonalTransitionProps {
  active?: boolean;
}

// Particle configurations for each season
const seasonParticleConfig = {
  spring: {
    count: 15,
    icon: Flower,
    color: '#FFDEE2',
    size: [20, 30],
    duration: [4, 7],
  },
  summer: {
    count: 20,
    icon: Droplet,
    color: '#0EA5E9',
    size: [15, 25],
    duration: [3, 6],
  },
  autumn: {
    count: 15,
    icon: Leaf,
    color: '#FEC6A1',
    size: [20, 35],
    duration: [5, 8],
  },
  winter: {
    count: 12,
    icon: Snowflake,
    color: '#F1F0FB',
    size: [15, 25],
    duration: [6, 10],
  }
};

// Helper to generate random number between min and max
const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const SeasonalTransition: React.FC<SeasonalTransitionProps> = ({ active = true }) => {
  const { currentSeason } = useSeasonalTheme();
  const [showTransition, setShowTransition] = useState(false);
  const [seasonKey, setSeasonKey] = useState(currentSeason);
  
  useEffect(() => {
    if (currentSeason !== seasonKey && active) {
      // Show transition when season changes
      setShowTransition(true);
      
      // Hide after animation completes
      const timer = setTimeout(() => {
        setShowTransition(false);
        setSeasonKey(currentSeason);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [currentSeason, seasonKey, active]);
  
  const config = seasonParticleConfig[currentSeason];
  
  const generateParticles = () => {
    return Array.from({ length: config.count }).map((_, index) => {
      const size = random(config.size[0], config.size[1]);
      const duration = random(config.duration[0], config.duration[1]);
      const Icon = config.icon;
      // Pre-calculate random values for x position change
      const xOffset = random(-200, 200);
      
      return (
        <motion.div
          key={index}
          initial={{ 
            x: random(-100, window.innerWidth + 100),
            y: -100,
            rotate: random(0, 360),
            opacity: random(0.6, 1)
          }}
          animate={{
            y: window.innerHeight + 100,
            x: random(-100, window.innerWidth + 100) + xOffset,
            rotate: random(0, 360),
            opacity: 0
          }}
          transition={{
            duration: duration,
            ease: "linear"
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            color: config.color,
            fontSize: `${size}px`,
            zIndex: 1000,
            pointerEvents: "none"
          }}
        >
          <Icon size={size} />
        </motion.div>
      );
    });
  };
  
  return (
    <AnimatePresence>
      {showTransition && active && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {generateParticles()}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default SeasonalTransition;
