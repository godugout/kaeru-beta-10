
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ShadowToLightProps {
  isVisible?: boolean;
  size?: number;
  duration?: number;
}

const ShadowToLight = ({ 
  isVisible = true, 
  size = 300, 
  duration = 4 
}: ShadowToLightProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isVisible && !isAnimating) {
      setIsAnimating(true);
    }
  }, [isVisible, isAnimating]);
  
  // Generate random brush strokes paths
  const brushPaths = [
    "M20,50 Q40,20 60,40 T100,50",
    "M30,70 Q60,40 80,70 T120,80",
    "M50,30 Q70,10 90,50 T140,60",
    "M10,90 Q50,50 70,90 T110,100",
    "M40,20 Q80,0 100,30 T150,40"
  ];
  
  return (
    <div 
      ref={containerRef} 
      className="relative overflow-hidden"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full bg-black/5"></div>
      
      {isAnimating && (
        <>
          {/* Sumi-e ink brush strokes */}
          {brushPaths.map((path, i) => (
            <motion.svg
              key={`brush-${i}`}
              className="absolute inset-0"
              width={size}
              height={size}
              viewBox="0 0 160 120"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 0 }}
              transition={{ 
                duration: duration * 0.6,
                delay: i * 0.2 + duration * 0.2,
                ease: "easeOut"
              }}
            >
              <motion.path
                d={path}
                stroke="#000"
                strokeWidth={4 + i}
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: duration * 0.4, 
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            </motion.svg>
          ))}
          
          {/* Light particles emerging */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full bg-gold/60"
                style={{
                  width: 2 + Math.random() * 4,
                  height: 2 + Math.random() * 4,
                  left: `${20 + Math.random() * 60}%`,
                  top: `${40 + Math.random() * 40}%`,
                }}
                initial={{ opacity: 0, scale: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: -size * 0.3 * Math.random() }}
                transition={{ 
                  duration: duration * 0.6,
                  delay: duration * 0.4 + Math.random() * duration * 0.3,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
          
          {/* Final light glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "70%",
              height: "70%",
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
              background: "radial-gradient(circle at center, rgba(230, 185, 128, 0.4) 0%, transparent 70%)"
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration * 0.5, delay: duration * 0.5 }}
          />
        </>
      )}
    </div>
  );
};

export default ShadowToLight;
