import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
}

const ParallaxBackground = ({ children }: ParallaxBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create different parallax speeds for layered depth
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Far Background Layer - Slowest parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: y1, scale }}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {/* Distant Mountain Silhouettes */}
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#2D5016" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path 
              d="M0,600 Q200,400 400,500 T800,450 Q1000,350 1200,400 L1200,800 L0,800 Z" 
              fill="url(#mountainGradient)"
            />
            <path 
              d="M0,650 Q300,500 600,550 Q900,400 1200,500 L1200,800 L0,800 Z" 
              fill="url(#mountainGradient)"
              opacity="0.6"
            />
          </svg>
        </div>
      </motion.div>

      {/* Mid Background Layer - Medium parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: y2, rotate }}
      >
        <div className="absolute inset-0 opacity-8">
          {/* Floating Mist Clouds */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-radial from-white/5 to-transparent"
              style={{
                width: `${150 + i * 50}px`,
                height: `${80 + i * 20}px`,
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Near Background Layer - Fastest parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: y3 }}
      >
        <div className="absolute inset-0 opacity-10">
          {/* Sacred Geometry Patterns */}
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="sacredPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="30" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="#00A86B" strokeWidth="0.3" opacity="0.2" />
                <circle cx="50" cy="50" r="10" fill="none" stroke="#2D5016" strokeWidth="0.2" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sacredPattern)" />
          </svg>
        </div>
      </motion.div>

      {/* Animated Light Rays */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-b from-gold/5 via-transparent to-transparent"
            style={{
              width: '2px',
              height: '100%',
              left: `${25 + i * 25}%`,
              transformOrigin: 'top center',
            }}
            animate={{
              scaleY: [0.5, 1, 0.5],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </motion.div>

      {/* Energy Flow Paths */}
      <motion.div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="energyFlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#00A86B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Flowing Energy Paths */}
          <motion.path
            d="M0,400 Q300,200 600,400 T1200,350"
            stroke="url(#energyFlow)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          
          <motion.path
            d="M0,500 Q400,300 800,500 Q1000,600 1200,450"
            stroke="url(#energyFlow)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;