
import React from 'react';
import { motion } from 'framer-motion';

interface FrogAnimationProps {
  animationStage: number;
  colors: any;
}

const FrogAnimation: React.FC<FrogAnimationProps> = ({ animationStage, colors }) => {
  // Animation stages:
  // 1: Frog silhouette appears in water
  // 2: Frog emerges and transforms
  // 3+: Frog fully revealed

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Water/ripple effect base */}
      <motion.div
        className="w-64 h-64 rounded-full absolute"
        style={{
          background: `radial-gradient(circle, ${colors.secondary}60 0%, ${colors.primary}30 70%, transparent 100%)`,
        }}
        animate={{
          scale: animationStage >= 2 ? [1, 1.1, 1] : 1,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
        }}
      />

      {/* Frog silhouette that transforms */}
      <motion.div
        className="relative"
        initial={{ y: 20 }}
        animate={{ 
          y: animationStage >= 2 ? 0 : 20,
          scale: animationStage >= 2 ? 1.2 : 1,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {animationStage < 2 ? (
          // Silhouette/shadow in water
          <motion.div
            className="w-32 h-32 rounded-full bg-black/40 blur-md"
            animate={{
              width: animationStage === 1 ? ["8rem", "9rem", "8rem"] : "8rem",
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ) : (
          // Revealed frog
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0,
              rotate: animationStage >= 3 ? [0, -5, 5, 0] : 0,
            }}
            transition={{ 
              duration: 0.8,
              rotate: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }
            }}
            className="flex flex-col items-center"
          >
            <span className="text-7xl">🐸</span>
            {animationStage >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-gold font-serif text-xl"
              >
                The Frog Returns
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FrogAnimation;
