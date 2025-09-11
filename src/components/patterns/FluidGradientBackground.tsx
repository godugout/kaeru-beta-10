import React from 'react';
import { motion } from 'framer-motion';
import { useSeasonalTheme } from '@/contexts/SeasonalThemeContext';

interface FluidGradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'bold';
}

export const FluidGradientBackground: React.FC<FluidGradientBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium'
}) => {
  const { colors, currentSeason } = useSeasonalTheme();
  
  const getGradientIntensity = () => {
    switch (intensity) {
      case 'subtle': return '10';
      case 'bold': return '30';
      default: return '20';
    }
  };
  
  const getSeasonalGradient = () => {
    const opacity = getGradientIntensity();
    
    switch (currentSeason) {
      case 'spring':
        return `
          radial-gradient(circle at 20% 30%, hsl(120 60% 80% / ${opacity}%) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, hsl(340 50% 85% / ${opacity}%) 0%, transparent 50%),
          radial-gradient(circle at 60% 90%, hsl(280 40% 75% / ${opacity}%) 0%, transparent 50%),
          linear-gradient(135deg, hsl(120 40% 95% / 5%) 0%, hsl(340 30% 95% / 5%) 100%)
        `;
      case 'summer':
        return `
          radial-gradient(ellipse at 30% 20%, hsl(200 80% 70% / ${opacity}%) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 80%, hsl(190 70% 75% / ${opacity}%) 0%, transparent 60%),
          radial-gradient(circle at 90% 10%, hsl(210 60% 80% / ${opacity}%) 0%, transparent 50%),
          linear-gradient(45deg, hsl(200 50% 95% / 5%) 0%, hsl(210 40% 95% / 5%) 100%)
        `;
      case 'autumn':
        return `
          radial-gradient(circle at 40% 40%, hsl(25 70% 75% / ${opacity}%) 0%, transparent 55%),
          radial-gradient(circle at 60% 20%, hsl(15 80% 70% / ${opacity}%) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 80%, hsl(35 60% 80% / ${opacity}%) 0%, transparent 50%),
          linear-gradient(225deg, hsl(25 50% 95% / 5%) 0%, hsl(15 40% 95% / 5%) 100%)
        `;
      case 'winter':
        return `
          radial-gradient(circle at 10% 80%, hsl(220 30% 85% / ${opacity}%) 0%, transparent 60%),
          radial-gradient(ellipse at 90% 30%, hsl(200 40% 90% / ${opacity}%) 0%, transparent 60%),
          radial-gradient(circle at 50% 10%, hsl(240 20% 95% / ${opacity}%) 0%, transparent 50%),
          linear-gradient(180deg, hsl(220 20% 98% / 5%) 0%, hsl(200 30% 98% / 5%) 100%)
        `;
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{
        background: getSeasonalGradient()
      }}
    >
      {/* Subtle animated overlay for depth */}
      <motion.div 
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, transparent 30%, rgba(0,0,0,0.02) 70%)',
            'radial-gradient(circle at 70% 70%, transparent 30%, rgba(0,0,0,0.02) 70%)',
            'radial-gradient(circle at 30% 30%, transparent 30%, rgba(0,0,0,0.02) 70%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {children}
    </motion.div>
  );
};

export default FluidGradientBackground;