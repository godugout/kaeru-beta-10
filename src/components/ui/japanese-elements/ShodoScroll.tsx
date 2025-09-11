
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ShodoScrollProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

const ShodoScroll = ({ title, subtitle, children, className = "" }: ShodoScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<SVGSVGElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  
  // Simulate brush strokes being drawn with scroll
  useEffect(() => {
    if (!titleRef.current) return;
    
    const paths = titleRef.current.querySelectorAll('path');
    
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value < 0.1) {
        paths.forEach(path => {
          path.style.strokeDashoffset = '1000';
        });
      } else if (value >= 0.1 && value <= 0.4) {
        // Map scroll progress to stroke drawing
        const normalizedProgress = (value - 0.1) / 0.3;
        paths.forEach((path, i) => {
          const pathLength = path.getTotalLength();
          path.style.strokeDasharray = `${pathLength}`;
          path.style.strokeDashoffset = `${pathLength - (pathLength * normalizedProgress)}`;
        });
      } else {
        paths.forEach(path => {
          path.style.strokeDashoffset = '0';
        });
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  return (
    <div 
      ref={containerRef}
      className={`min-h-[50vh] flex items-center justify-center py-20 relative ${className}`}
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-3xl mx-auto text-center px-4"
      >
        {/* Visual title in shodo (Japanese calligraphy) style */}
        <div className="mb-8 flex justify-center">
          <svg 
            ref={titleRef}
            viewBox="0 0 200 100" 
            className="w-60 h-32"
          >
            {/* Simplified Japanese-style brush strokes to form characters */}
            {/* This would be customized per title, this is a basic example */}
            <path
              d="M50,20 C60,20 70,30 70,40 C70,80 30,80 30,40 C30,30 40,20 50,20"
              stroke="#E6B980"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ strokeDasharray: '1000', strokeDashoffset: '1000' }}
            />
            <path
              d="M100,20 L100,80"
              stroke="#E6B980"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ strokeDasharray: '1000', strokeDashoffset: '1000' }}
            />
            <path
              d="M90,50 L110,50"
              stroke="#E6B980"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round" 
              style={{ strokeDasharray: '1000', strokeDashoffset: '1000' }}
            />
            <path
              d="M130,20 C150,20 170,30 170,50 C170,70 150,80 130,80 C150,60 150,40 130,20"
              stroke="#E6B980"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ strokeDasharray: '1000', strokeDashoffset: '1000' }}
            />
          </svg>
        </div>
        
        {/* Western text representation */}
        <h2 className="font-serif text-3xl text-gold mb-2">{title}</h2>
        <p className="text-white/70 mb-10">{subtitle}</p>
        
        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
        
        {/* Traditional seal/stamp */}
        <div className="mt-12 inline-block">
          <div className="w-16 h-16 bg-red-800/30 border border-red-900/50 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-12 h-12 opacity-70">
              <path
                d="M10,10 L30,10 L30,30 L10,30 Z M15,15 L25,15 M15,20 L25,20 M15,25 L25,25"
                stroke="#E6B980"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShodoScroll;
