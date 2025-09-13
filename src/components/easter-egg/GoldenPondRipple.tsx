import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useClickSequence } from '@/hooks/useClickSequence';

interface RippleEffect {
  id: string;
  x: number;
  y: number;
}

const GoldenPondRipple: React.FC = () => {
  const [ripples, setRipples] = useState<RippleEffect[]>([]);
  const [showHaiku, setShowHaiku] = useState(false);
  const { clickCount, isComplete, registerClick, reset } = useClickSequence({
    requiredClicks: 5,
    resetTime: 3000
  });

  const handleTextureClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Add ripple effect
    const newRipple: RippleEffect = {
      id: Math.random().toString(36).substr(2, 9),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 2000);
    
    // Register click for sequence
    registerClick();
  };

  // Show haiku when sequence is complete
  React.useEffect(() => {
    if (isComplete) {
      setShowHaiku(true);
      
      // Hide haiku after 8 seconds and reset
      setTimeout(() => {
        setShowHaiku(false);
        reset();
      }, 8000);
    }
  }, [isComplete, reset]);

  return (
    <>
      {/* Clickable texture overlay */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={handleTextureClick}
      >
        {/* Ripple effects */}
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full border-2 border-kaeru-gold/30 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              x: '-50%',
              y: '-50%'
            }}
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ 
              width: 200, 
              height: 200, 
              opacity: 0 
            }}
            transition={{ 
              duration: 2, 
              ease: "easeOut" 
            }}
          />
        ))}
      </div>

      {/* Haiku reveal */}
      <AnimatePresence>
        {showHaiku && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 max-w-md"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-kaeru-gold/20 to-kaeru-jade/20 flex items-center justify-center">
                  <span className="text-3xl">🐸</span>
                </div>
              </div>
              
              <div className="space-y-4 text-kaeru-gold font-serif">
                <p className="text-lg leading-relaxed">
                  Still waters run deep<br />
                  The frog knows when to surface<br />
                  Transformation waits
                </p>
              </div>
              
              <p className="text-kaeru-fog/60 text-sm mt-6 tracking-wide">
                Hidden wisdom for the observant
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click progress indicator (subtle) */}
      {clickCount > 0 && clickCount < 5 && (
        <div className="fixed bottom-4 right-4 z-40">
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i < clickCount ? 'bg-kaeru-gold/60' : 'bg-kaeru-fog/20'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GoldenPondRipple;