import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSeasonalTheme } from '@/contexts/SeasonalThemeContext';

interface OrganicMotifLayerProps {
  density?: 'light' | 'medium' | 'dense';
  className?: string;
}

export const OrganicMotifLayer: React.FC<OrganicMotifLayerProps> = ({
  density = 'medium',
  className = ''
}) => {
  const { colors, currentSeason } = useSeasonalTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const getDensityCount = () => {
    switch (density) {
      case 'light': return 6;
      case 'dense': return 20;
      default: return 12;
    }
  };
  
  const getSeasonalMotif = (index: number) => {
    const size = 20 + Math.random() * 40; // 20-60px
    const rotation = Math.random() * 360;
    const opacity = 0.03 + Math.random() * 0.07; // 3-10% opacity
    
    const baseStyle = {
      position: 'absolute' as const,
      width: `${size}px`,
      height: `${size}px`,
      transform: `rotate(${rotation}deg)`,
      opacity,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      pointerEvents: 'none' as const
    };
    
    switch (currentSeason) {
      case 'spring':
        return (
          <motion.div
            key={`spring-${index}`}
            style={baseStyle}
            initial={{ scale: 0, rotate: rotation - 180 }}
            animate={{ 
              scale: [0.8, 1.2, 1],
              rotate: rotation,
              y: [0, -10, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `radial-gradient(ellipse 80% 60%, ${colors.primary}40 0%, transparent 70%)`,
                borderRadius: `60% 40% 70% 30% / 30% 70% 40% 60%`,
                filter: 'blur(0.5px)'
              }}
            />
          </motion.div>
        );
        
      case 'summer':
        return (
          <motion.div
            key={`summer-${index}`}
            style={baseStyle}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1.1, 0.9, 1],
              opacity: [0, opacity, opacity * 0.7, opacity],
              rotate: [rotation, rotation + 360]
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `conic-gradient(from 0deg, ${colors.primary}30, transparent 120deg, ${colors.secondary}20 240deg, transparent)`,
                borderRadius: '50%',
                filter: 'blur(1px)'
              }}
            />
          </motion.div>
        );
        
      case 'autumn':
        return (
          <motion.div
            key={`autumn-${index}`}
            style={baseStyle}
            initial={{ scale: 1.2, rotate: rotation + 45 }}
            animate={{ 
              scale: [1.2, 0.8, 1],
              rotate: [rotation + 45, rotation - 45, rotation],
              x: [0, Math.random() * 20 - 10, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(45deg, ${colors.primary}35 0%, ${colors.secondary}25 50%, transparent 100%)`,
                borderRadius: `40% 60% 30% 70% / 60% 30% 70% 40%`,
                filter: 'blur(0.8px)'
              }}
            />
          </motion.div>
        );
        
      case 'winter':
        return (
          <motion.div
            key={`winter-${index}`}
            style={baseStyle}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.3, 1],
              opacity: [0, opacity * 1.5, opacity],
              rotate: [rotation, rotation + 180, rotation + 360]
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4
            }}
          >
            <div
              className="w-full h-full relative"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle, ${colors.primary}25 20%, transparent 60%)`,
                  borderRadius: '50%',
                  filter: 'blur(1.5px)'
                }}
              />
              <div
                className="absolute inset-2"
                style={{
                  background: `conic-gradient(from 45deg, transparent 0deg, ${colors.secondary}15 60deg, transparent 120deg)`,
                  borderRadius: '50%',
                  filter: 'blur(0.5px)'
                }}
              />
            </div>
          </motion.div>
        );
    }
  };
  
  const motifs = Array.from({ length: getDensityCount() }, (_, index) => 
    getSeasonalMotif(index)
  );
  
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ pointerEvents: 'none' }}
    >
      {motifs}
    </div>
  );
};

export default OrganicMotifLayer;