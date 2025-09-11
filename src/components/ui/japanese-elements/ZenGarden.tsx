
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MindfulTransition, { mindfulTimings } from "./MindfulTransition";

interface ZenGardenProps {
  onComplete?: () => void;
  className?: string;
}

const ZenGarden = ({ onComplete, className = "" }: ZenGardenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(null);
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Visual elements for the zen garden
  const stones = [
    { x: 25, y: 25, size: 8 },
    { x: 75, y: 75, size: 12 },
    { x: 40, y: 80, size: 6 },
  ];
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // Handle mouse/touch events to draw lines
  const handlePointerDown = (e: React.PointerEvent) => {
    if (complete) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setStartPoint({ x, y });
    setIsDrawing(true);
    
    // For mobile, we automatically create a small line to help users understand
    if (isMobile) {
      const endX = x + (Math.random() * 5) - 2.5;
      const endY = y + (Math.random() * 5) - 2.5;
      setLines(prev => [...prev, { x1: x, y1: y, x2: endX, y2: endY }]);
    }
  };
  
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing || !startPoint || complete) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Draw a line from start point to current point
    // For mobile, draw lines less frequently to avoid overwhelming performance
    if (!isMobile || (isMobile && Math.random() > 0.5)) {
      setLines(prev => [...prev, { x1: startPoint.x, y1: startPoint.y, x2: x, y2: y }]);
    }
    
    // Update start point for next segment
    setStartPoint({ x, y });
    
    // Update progress
    const newProgress = Math.min(1, progress + (isMobile ? 0.1 : 0.05));
    setProgress(newProgress);
    
    if (newProgress >= 1 && !complete) {
      setComplete(true);
      onComplete?.();
    }
  };
  
  const handlePointerUp = () => {
    setIsDrawing(false);
    setStartPoint(null);
  };
  
  return (
    <div className={`relative ${className}`}>
      <div 
        ref={containerRef}
        className="aspect-[3/2] bg-gray-100/5 rounded-sm overflow-hidden cursor-pointer"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ touchAction: "none" }}
      >
        {/* Sand background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPjxyZWN0IHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IiNmYmY5ZjMiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjZjVmMGUxIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]"></div>
        
        {/* Stones */}
        {stones.map((stone, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gray-800"
            style={{
              left: `${stone.x}%`,
              top: `${stone.y}%`,
              width: `${stone.size}%`,
              height: `${stone.size * 0.75}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
        
        {/* Lines representing the sand patterns */}
        <svg className="absolute inset-0 w-full h-full">
          {lines.map((line, i) => (
            <motion.line
              key={i}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="#E6B980"
              strokeWidth={isMobile ? "1.5" : "2"}
              strokeOpacity="0.3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: isMobile ? 0.3 : 0.5 }}
            />
          ))}
        </svg>
        
        {/* Instructions that fade out as user draws */}
        <MindfulTransition 
          isVisible={!isDrawing && progress === 0}
          type="fade"
          speed="medium"
          className="absolute inset-0 flex items-center justify-center text-center p-4"
        >
          <p className="text-gold/70">
            {isMobile ? 
              "Touch and drag to create patterns in the sand" : 
              "Draw patterns in the sand with your cursor to create your zen garden"
            }
          </p>
        </MindfulTransition>
        
        {/* Progress indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-white/10 rounded overflow-hidden">
          <motion.div 
            className="h-full bg-gold"
            animate={{ width: `${progress * 100}%` }}
          />
        </div>
        
        {/* Completion message */}
        <MindfulTransition
          isVisible={complete}
          type={isMobile ? "fade" : "scale"}
          speed="slow"
          className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
          <div className="text-center px-4">
            <p className="text-gold font-serif text-xl md:text-2xl mb-2">Your garden is complete</p>
            <p className="text-white/70 text-sm md:text-base">Find peace in the patterns you've created</p>
          </div>
        </MindfulTransition>
      </div>
    </div>
  );
};

export default ZenGarden;
