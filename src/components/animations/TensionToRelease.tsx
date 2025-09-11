
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TensionToReleaseProps {
  isVisible?: boolean;
  size?: number;
  duration?: number;
}

const TensionToRelease = ({ 
  isVisible = true, 
  size = 300, 
  duration = 3 
}: TensionToReleaseProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isVisible && !isAnimating) {
      setIsAnimating(true);
    }
  }, [isVisible, isAnimating]);
  
  // Create paths representing tension (angular) and release (curved)
  const tensionPath = "M30,50 L50,30 L70,50 L90,30 L110,50 L130,30";
  const releasePath = "M30,50 Q50,40 70,50 Q90,60 110,50 Q130,40 150,50";
  
  return (
    <div 
      ref={containerRef} 
      className="relative overflow-hidden"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full bg-black/5"></div>
      
      {isAnimating && (
        <>
          {/* Background gradient shift */}
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ 
              background: "radial-gradient(circle at center, rgba(230, 150, 100, 0.2) 0%, transparent 70%)" 
            }}
            animate={{ 
              background: "radial-gradient(circle at center, rgba(51, 195, 240, 0.2) 0%, transparent 70%)" 
            }}
            transition={{ duration: duration * 0.8 }}
          />
          
          {/* Path animation from angular (tension) to curved (release) */}
          <svg
            className="absolute inset-0"
            width={size}
            height={size}
            viewBox="0 0 180 100"
          >
            <motion.path
              d={tensionPath}
              initial={{ d: tensionPath }}
              animate={{ d: releasePath }}
              transition={{ 
                duration: duration * 0.6,
                ease: "easeInOut",
                times: [0, 0.4, 1],
              }}
              stroke="url(#tensionGradient)"
              strokeWidth={5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            <defs>
              <motion.linearGradient
                id="tensionGradient"
                initial={{ 
                  gradientTransform: "rotate(0)" 
                }}
                animate={{ 
                  gradientTransform: "rotate(90)" 
                }}
                transition={{ duration: duration }}
              >
                <stop 
                  offset="0%" 
                  stopColor="#E6B980" 
                  stopOpacity="0.8" 
                />
                <stop 
                  offset="100%" 
                  stopColor="#33C3F0" 
                  stopOpacity="0.6" 
                />
              </motion.linearGradient>
            </defs>
          </svg>
          
          {/* Ripple effect as tension releases */}
          <motion.div
            className="absolute rounded-full border border-ocean/30"
            style={{
              width: "40%",
              height: "40%",
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ 
              duration: duration * 0.5,
              delay: duration * 0.5,
              ease: "easeOut"
            }}
          />
        </>
      )}
    </div>
  );
};

export default TensionToRelease;
