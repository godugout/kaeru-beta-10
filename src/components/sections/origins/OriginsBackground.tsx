
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface OriginsBackgroundProps {
  containerRef: React.RefObject<HTMLElement>;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const OriginsBackground = ({ containerRef }: OriginsBackgroundProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const requestRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Generate ripple effect colors based on the theme
  const generateRippleColor = () => {
    const colors = [
      'rgba(230,185,128,0.03)', // Gold
      'rgba(51,195,240,0.02)',  // Blue accent
      'rgba(234,56,76,0.02)'    // Red accent
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        if (containerRef.current) {
          setDimensions({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
          });
        }
      };
      
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, [containerRef]);
  
  useEffect(() => {
    let rippleCount = 0;
    
    const animate = () => {
      rippleCount++;
      
      if (rippleCount % 80 === 0) { // Add new ripple every 80 frames
        const x = Math.random() * dimensions.width;
        const y = Math.random() * dimensions.height;
        const size = Math.random() * 100 + 50;
        
        setRipples(prevRipples => [
          ...prevRipples, 
          { 
            id: Date.now(),
            x,
            y,
            size,
            opacity: 0.7
          }
        ]);
      }
      
      // Update existing ripples
      setRipples(prevRipples => 
        prevRipples
          .map(ripple => ({
            ...ripple,
            size: ripple.size + 0.3,
            opacity: ripple.opacity - 0.002
          }))
          .filter(ripple => ripple.opacity > 0)
      );
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [dimensions]);
  
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95"></div>
      
      {/* Background ripples */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            opacity: ripple.opacity,
            background: generateRippleColor(),
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
      
      {/* Gold accent top left */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      
      {/* Blue accent bottom right */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent-blue/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default OriginsBackground;
