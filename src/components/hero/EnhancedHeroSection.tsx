import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const EnhancedHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Transform kanji to English based on scroll
  const kanjiOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const englishOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  
  // Smooth mouse following for frog
  const springConfig = { damping: 30, stiffness: 200 };
  const mouseX = useSpring(mousePosition.x, springConfig);
  const mouseY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-kaeru-black"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-kaeru-gold/10 via-transparent to-kaeru-jade/5" />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Kanji to English Transform */}
        <div className="relative mb-8">
          <motion.h1 
            className="absolute inset-0 font-serif text-8xl md:text-9xl font-bold text-kaeru-gold"
            style={{ opacity: kanjiOpacity }}
          >
            蛙
          </motion.h1>
          <motion.h1 
            className="font-serif text-8xl md:text-9xl font-bold text-kaeru-gold tracking-wider"
            style={{ opacity: englishOpacity }}
          >
            KAERU
          </motion.h1>
        </div>

        {/* Subtitle with Breathing Animation */}
        <motion.p 
          className="text-xl md:text-2xl text-kaeru-fog font-light tracking-wide animate-breath"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Formulated to Flow
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-kaeru-fog/60 text-xs tracking-widest">SCROLL</span>
            <svg 
              className="w-6 h-8 text-kaeru-gold animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;