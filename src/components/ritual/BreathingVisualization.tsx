
import { useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

interface BreathingVisualizationProps {
  pattern: string;
  isActive: boolean;
  color: string;
}

const BreathingVisualization = ({ pattern, isActive, color }: BreathingVisualizationProps) => {
  const controls = useAnimation();
  const isActiveRef = useRef(isActive);
  const patternRef = useRef(pattern);
  
  // Parse breathing pattern (format: "inhale-hold-exhale" or "inhale-hold-exhale-hold")
  const parsePattern = (pattern: string) => {
    const parts = pattern.split('-').map(Number);
    if (parts.length === 3) {
      return { inhale: parts[0], hold1: parts[1], exhale: parts[2], hold2: 0 };
    } else if (parts.length === 4) {
      return { inhale: parts[0], hold1: parts[1], exhale: parts[2], hold2: parts[3] };
    }
    // Default pattern if parsing fails
    return { inhale: 4, hold1: 2, exhale: 4, hold2: 0 };
  };
  
  useEffect(() => {
    isActiveRef.current = isActive;
    patternRef.current = pattern;
    
    if (!isActive) {
      controls.stop();
      return;
    }
    
    const { inhale, hold1, exhale, hold2 } = parsePattern(pattern);
    const totalCycleDuration = inhale + hold1 + exhale + hold2;
    
    const animateBreathingCycle = async () => {
      while (isActiveRef.current) {
        // Inhale
        await controls.start({ 
          scale: 1.5,
          opacity: 1,
          transition: { duration: inhale, ease: "easeInOut" }
        });
        
        // Hold after inhale
        if (hold1 > 0) {
          await new Promise(resolve => setTimeout(resolve, hold1 * 1000));
        }
        
        // Exhale
        await controls.start({ 
          scale: 1,
          opacity: 0.7,
          transition: { duration: exhale, ease: "easeInOut" }
        });
        
        // Hold after exhale
        if (hold2 > 0) {
          await new Promise(resolve => setTimeout(resolve, hold2 * 1000));
        }
      }
    };
    
    animateBreathingCycle();
    
  }, [controls, isActive, pattern]);
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence>
        {isActive && (
          <>
            {/* Ripple effects */}
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={controls}
              exit={{ opacity: 0 }}
              className="absolute rounded-full"
              style={{ 
                width: '60%', 
                height: '60%', 
                backgroundColor: `${color}10`,
                border: `1px solid ${color}30` 
              }}
            />
            
            {/* Inner circle */}
            <motion.div
              initial={{ scale: 1, opacity: 0.7 }}
              animate={controls}
              exit={{ opacity: 0 }}
              className="absolute rounded-full"
              style={{ 
                width: '40%', 
                height: '40%', 
                backgroundColor: `${color}20`,
                border: `1px solid ${color}40` 
              }}
            />
            
            {/* Center point */}
            <motion.div
              animate={{ 
                boxShadow: [
                  `0 0 0 ${color}80`,
                  `0 0 20px ${color}40`,
                  `0 0 0 ${color}80`,
                ]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute rounded-full"
              style={{ 
                width: '20%', 
                height: '20%', 
                backgroundColor: color,
                opacity: 0.6
              }}
            />
          </>
        )}
      </AnimatePresence>
      
      {!isActive && (
        <div className="text-white/50 text-sm text-center">
          Click "Start Breathing" to begin
        </div>
      )}
    </div>
  );
};

export default BreathingVisualization;
