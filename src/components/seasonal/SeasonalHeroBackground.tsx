
import React from 'react';
import { motion } from 'framer-motion';
import FluidGradientBackground from '@/components/patterns/FluidGradientBackground';
import OrganicMotifLayer from '@/components/patterns/OrganicMotifLayer';
import TextureOverlay from '@/components/patterns/TextureOverlay';
import WaterRipple from '@/components/animations/WaterRipple';

interface SeasonalHeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
}

export const SeasonalHeroBackground: React.FC<SeasonalHeroBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium'
}) => {
  const getDensity = () => {
    switch (intensity) {
      case 'light': return 'light';
      case 'strong': return 'dense';
      default: return 'medium';
    }
  };

  const getFluidIntensity = () => {
    switch (intensity) {
      case 'light': return 'subtle';
      case 'strong': return 'bold';
      default: return 'medium';
    }
  };

  const getTextureIntensity = () => {
    switch (intensity) {
      case 'light': return 'subtle';
      case 'strong': return 'strong';
      default: return 'medium';
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Base fluid gradient layer */}
      <FluidGradientBackground 
        className="absolute inset-0"
        intensity={getFluidIntensity()}
      >
        {/* Organic motif layer */}
        <OrganicMotifLayer 
          density={getDensity()}
          className="absolute inset-0"
        />
        
        {/* Interactive water ripples */}
        <WaterRipple 
          className="absolute inset-0"
          rippleColor="rgba(212, 175, 55, 0.08)"
        >
          <div />
        </WaterRipple>
        
        {/* Fine texture overlay for luxury feel */}
        <TextureOverlay 
          type="grain"
          intensity={getTextureIntensity()}
          className="absolute inset-0"
        />
      </FluidGradientBackground>
      
      {/* Content layer with proper z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default SeasonalHeroBackground;
