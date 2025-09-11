
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

interface KanjiRevealProps {
  kanji: string;
  isVisible: boolean;
  className?: string;
  scale?: number;
  strokeColor?: string;
  inkSplatter?: boolean;
}

const KanjiReveal = ({ 
  kanji, 
  isVisible, 
  className = "",
  scale = 1, 
  strokeColor = "#E6B980",
  inkSplatter = true
}: KanjiRevealProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { shouldAnimate, getOptimizedDuration } = useOptimizedAnimation();

  // Custom SVG paths for each kanji
  const getKanjiPath = () => {
    switch (kanji) {
      case "源": // Origin
        return "M20,20 C50,20 80,40 80,70 C80,110 20,110 20,70 C20,40 50,20 20,20 M30,50 L70,50 M40,30 L40,90";
      case "流": // Flow
        return "M20,20 L80,20 M50,20 L50,90 M30,50 L70,50 M20,80 C35,60 65,60 80,80";
      case "変": // Change
        return "M50,20 L50,80 M30,40 C40,30 60,30 70,40 M30,60 C40,70 60,70 70,60 M20,20 L80,80 M20,80 L80,20";
      case "均": // Balance
        return "M35,20 L35,80 M65,20 L65,80 M20,50 L80,50 M30,30 C45,10 55,10 70,30 M30,70 C45,90 55,90 70,70";
      case "空": // Sky/Void
        return "M20,20 L80,20 M20,50 L80,50 M20,80 L80,80 M30,20 L30,80 M70,20 L70,80";
      case "和": // Harmony
        return "M20,20 L80,20 M20,80 L80,80 M30,35 L70,35 M30,65 L70,65 M50,20 L50,80";
      case "道": // Way/Path
        return "M20,20 L80,20 M20,50 L80,50 M20,80 L80,80 M35,20 L35,80 M65,20 L65,80";
      case "心": // Mind/Heart
        return "M50,20 C30,40 20,60 50,85 C80,60 70,40 50,20";
      case "静": // Calm/Quiet
        return "M35,20 L35,80 M65,20 L65,80 M20,35 L50,35 M50,35 L80,35 M20,65 L50,65 M50,65 L80,65";
      case "力": // Strength
        return "M30,20 L70,20 L40,80 M40,50 L60,50";
      case "明": // Clarity
        return "M30,20 L30,80 M70,20 L70,80 M20,50 L40,50 M60,50 L80,50";
      default:
        return "M20,20 L80,80 M20,80 L80,20";
    }
  };

  // Animate path drawing with strokeDasharray/strokeDashoffset
  useEffect(() => {
    if (!shouldAnimate) return;
    
    if (svgRef.current && isVisible) {
      const path = svgRef.current.querySelector('path');
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;

        // Trigger animation
        setTimeout(() => {
          path.style.transition = `stroke-dashoffset ${getOptimizedDuration(2)}s ease-in-out`;
          path.style.strokeDashoffset = '0';
        }, 300);
      }
    }
  }, [isVisible, shouldAnimate]);

  return (
    <div className={`relative ${className}`} style={{ transform: `scale(${scale})` }}>
      {/* SVG for animated brush stroke */}
      <svg 
        ref={svgRef}
        width="120" 
        height="120" 
        viewBox="0 0 100 100" 
        className="absolute top-0 left-0 opacity-70"
      >
        <path
          d={getKanjiPath()}
          stroke={strokeColor}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '1000',
            strokeDashoffset: '1000'
          }}
        />
      </svg>

      {/* Actual kanji character (visible after animation) */}
      <motion.div
        className="font-serif text-8xl text-gold/40"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isVisible ? 0.6 : 0 
        }}
        transition={{ delay: getOptimizedDuration(1.5), duration: getOptimizedDuration(1) }}
      >
        {kanji}
      </motion.div>

      {/* Ink splatter effect */}
      {isVisible && inkSplatter && (
        <motion.div
          className="absolute -bottom-4 -right-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: getOptimizedDuration(1.8), duration: getOptimizedDuration(0.5) }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="8" fill={strokeColor} opacity="0.4" />
            <circle cx="40" cy="25" r="4" fill={strokeColor} opacity="0.3" />
            <circle cx="22" cy="35" r="3" fill={strokeColor} opacity="0.2" />
            <circle cx="35" cy="40" r="2" fill={strokeColor} opacity="0.1" />
          </svg>
        </motion.div>
      )}
    </div>
  );
};

export default KanjiReveal;
