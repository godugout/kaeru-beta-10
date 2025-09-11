
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type AnimationType = "water" | "leaf" | "mountain" | "wind" | "light" | "tree" | "bamboo";

interface NatureAnimationProps {
  type: AnimationType;
}

const NatureAnimation = ({ type }: NatureAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation variants
  const animations = {
    water: (
      <motion.div className="w-full h-full relative">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-cyan-300/30 rounded-full"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ 
              scale: [0, 2],
              opacity: [0.7, 0]
            }}
            transition={{ 
              duration: 4,
              delay: i * 0.7,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    ),
    
    leaf: (
      <motion.div className="w-full h-full flex items-center justify-center">
        <motion.svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ 
            rotate: 10,
            scale: 1
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <path
            d="M12 2C7 7 2 9 2 14C2 19 7 22 12 22C17 22 22 19 22 14C22 9 17 7 12 2Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(129, 199, 132, 0.2)"
          />
        </motion.svg>
      </motion.div>
    ),
    
    mountain: (
      <motion.div 
        className="w-full h-full flex items-center justify-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M5 55L25 15L35 35L50 5L75 55H5Z" 
            stroke="currentColor" 
            fill="rgba(158, 158, 158, 0.1)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    ),
    
    wind: (
      <motion.div className="w-full h-full relative">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 h-[1px] bg-white/30"
            style={{ width: 20 + i * 10 + '%', left: '10%', top: `${30 + i * 8}%` }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: 100,
              opacity: [0, 0.7, 0]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    ),
    
    light: (
      <motion.div className="w-full h-full flex items-center justify-center">
        <motion.div
          className="w-16 h-16 bg-gold/10 rounded-full"
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    ),
    
    tree: (
      <motion.div className="w-full h-full flex items-center justify-center">
        <motion.svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M30 5C25 20 15 30 15 45C15 55 20 65 30 65C40 65 45 55 45 45C45 30 35 20 30 5Z" 
            stroke="currentColor" 
            fill="rgba(76, 175, 80, 0.1)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.line 
            x1="30" 
            y1="65" 
            x2="30" 
            y2="80" 
            stroke="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
          />
        </motion.svg>
      </motion.div>
    ),
    
    bamboo: (
      <motion.div className="w-full h-full flex items-center justify-center">
        <div className="relative h-full w-4 flex justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-700/30 w-2 rounded-full"
              style={{ 
                height: `${60 - i * 10}%`, 
                bottom: 0,
                left: `${i * 6}px`
              }}
              initial={{ height: 0 }}
              animate={{ height: `${60 - i * 10}%` }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    )
  };
  
  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden text-white">
      {animations[type]}
    </div>
  );
};

export default NatureAnimation;
