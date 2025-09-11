
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface FragmentedToWholeProps {
  isVisible?: boolean;
  size?: number;
  duration?: number;
}

const FragmentedToWhole = ({ 
  isVisible = true, 
  size = 300, 
  duration = 4 
}: FragmentedToWholeProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isVisible && !isAnimating) {
      setIsAnimating(true);
    }
  }, [isVisible, isAnimating]);
  
  // Create fragments positioned around a circle
  const fragments = [
    { rotate: 0, distance: 20, size: 50 },
    { rotate: 60, distance: 22, size: 40 },
    { rotate: 120, distance: 25, size: 55 },
    { rotate: 180, distance: 18, size: 45 },
    { rotate: 240, distance: 24, size: 42 },
    { rotate: 300, distance: 21, size: 48 }
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
          {/* Background subtle gradient */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(230, 185, 128, 0.1) 0%, transparent 70%)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration * 0.5, delay: duration * 0.5 }}
          />
          
          {/* Fragments that move together */}
          {fragments.map((fragment, i) => (
            <motion.div
              key={`fragment-${i}`}
              className="absolute bg-gray-900/70 rounded-sm"
              style={{
                width: fragment.size,
                height: fragment.size,
                borderRadius: "2px",
                transformOrigin: "center",
                rotate: `${fragment.rotate}deg`,
                left: "50%",
                top: "50%",
              }}
              initial={{ 
                x: `calc(-50% + ${Math.cos(fragment.rotate * Math.PI / 180) * fragment.distance}px)`,
                y: `calc(-50% + ${Math.sin(fragment.rotate * Math.PI / 180) * fragment.distance}px)`,
                opacity: 0.8,
              }}
              animate={{ 
                x: "-50%",
                y: "-50%",
                opacity: 1,
              }}
              transition={{ 
                duration: duration * 0.6,
                delay: i * 0.1 + duration * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Gold seams (kintsugi style) */}
          <svg
            className="absolute inset-0"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E6B980" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#EACDA3" stopOpacity="1" />
                <stop offset="100%" stopColor="#E6B980" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            
            {fragments.map((fragment, i) => {
              const nextFragment = fragments[(i + 1) % fragments.length];
              const startX = size/2 + Math.cos(fragment.rotate * Math.PI / 180) * 15;
              const startY = size/2 + Math.sin(fragment.rotate * Math.PI / 180) * 15;
              const endX = size/2 + Math.cos(nextFragment.rotate * Math.PI / 180) * 15;
              const endY = size/2 + Math.sin(nextFragment.rotate * Math.PI / 180) * 15;
              const midX = size/2;
              const midY = size/2;
              
              return (
                <motion.path
                  key={`seam-${i}`}
                  d={`M${startX},${startY} Q${midX},${midY} ${endX},${endY}`}
                  stroke="url(#goldGradient)"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: duration * 0.4, 
                    delay: duration * 0.6 + i * 0.1,
                    ease: "easeOut"
                  }}
                />
              );
            })}
          </svg>
          
          {/* Final unified circle with gold outline */}
          <motion.div
            className="absolute rounded-full border-2 border-gold/40"
            style={{
              width: "50%",
              height: "50%",
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: duration * 0.4,
              delay: duration * 0.8,
              ease: "easeOut"
            }}
          />
        </>
      )}
    </div>
  );
};

export default FragmentedToWhole;
