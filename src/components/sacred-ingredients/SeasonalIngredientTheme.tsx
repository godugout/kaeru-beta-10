import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SeasonalIngredientThemeProps {
  children: React.ReactNode;
  season?: 'spring' | 'summer' | 'autumn' | 'winter';
}

const seasonalEffects = {
  spring: {
    particles: 'sakura-petals',
    colors: { primary: '#FFB7C5', accent: '#98FB98' },
    pattern: 'cherry-blossoms'
  },
  summer: {
    particles: 'fireflies',
    colors: { primary: '#32CD32', accent: '#FFD700' },
    pattern: 'bamboo-leaves'
  },
  autumn: {
    particles: 'maple-leaves',
    colors: { primary: '#FF6347', accent: '#DEB887' },
    pattern: 'autumn-leaves'
  },
  winter: {
    particles: 'snow-flakes',
    colors: { primary: '#B0C4DE', accent: '#F0F8FF' },
    pattern: 'ice-crystals'
  }
};

const SeasonalIngredientTheme = ({ children, season = 'spring' }: SeasonalIngredientThemeProps) => {
  const [currentSeason, setCurrentSeason] = useState(season);
  const effects = seasonalEffects[currentSeason];

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth();
    
    // Auto-detect season based on current month
    if (month >= 2 && month <= 4) setCurrentSeason('spring');
    else if (month >= 5 && month <= 7) setCurrentSeason('summer');
    else if (month >= 8 && month <= 10) setCurrentSeason('autumn');
    else setCurrentSeason('winter');
  }, []);

  const renderSeasonalParticles = () => {
    const particles = [];
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      let particleElement;
      
      switch (effects.particles) {
        case 'sakura-petals':
          particleElement = (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
              }}
              animate={{
                y: [0, window.innerHeight + 50],
                x: [0, (Math.random() - 0.5) * 100],
                rotate: [0, 360],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear"
              }}
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ 
                  background: `radial-gradient(circle, ${effects.colors.primary}80, ${effects.colors.primary}20)`,
                  boxShadow: `0 0 6px ${effects.colors.primary}40`
                }}
              />
            </motion.div>
          );
          break;

        case 'fireflies':
          particleElement = (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                x: [0, 20, -15, 0],
                y: [0, -25, 15, 0],
                opacity: [0.3, 1, 0.3, 1],
                scale: [0.5, 1, 0.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ 
                  background: effects.colors.accent,
                  boxShadow: `0 0 8px ${effects.colors.accent}`
                }}
              />
            </motion.div>
          );
          break;

        case 'maple-leaves':
          particleElement = (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
              }}
              animate={{
                y: [0, window.innerHeight + 50],
                x: [0, (Math.random() - 0.5) * 150, (Math.random() - 0.5) * 200],
                rotate: [0, 180, 360],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-4 h-4"
                style={{ 
                  background: `linear-gradient(45deg, ${effects.colors.primary}, ${effects.colors.accent})`,
                  clipPath: 'polygon(50% 0%, 100% 35%, 82% 100%, 18% 100%, 0% 35%)'
                }}
              />
            </motion.div>
          );
          break;

        case 'snow-flakes':
          particleElement = (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
              }}
              animate={{
                y: [0, window.innerHeight + 50],
                x: [0, (Math.random() - 0.5) * 50],
                rotate: [0, 360],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear"
              }}
            >
              <div 
                className="w-2 h-2"
                style={{ 
                  background: effects.colors.primary,
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                }}
              />
            </motion.div>
          );
          break;

        default:
          particleElement = null;
      }

      if (particleElement) particles.push(particleElement);
    }

    return particles;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Seasonal Particle Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {renderSeasonalParticles()}
      </div>
      
      {/* Seasonal Background Gradient */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${effects.colors.primary}20, transparent 50%), 
                       radial-gradient(circle at 70% 80%, ${effects.colors.accent}15, transparent 50%)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SeasonalIngredientTheme;