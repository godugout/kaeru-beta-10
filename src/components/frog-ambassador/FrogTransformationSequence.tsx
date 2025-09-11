
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FrogAmbassadorDetail } from "@/types/frogAmbassador";

interface FrogTransformationSequenceProps {
  frog: FrogAmbassadorDetail;
  color: string;
}

export default function FrogTransformationSequence({ 
  frog,
  color 
}: FrogTransformationSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Simple canvas-based transformation sequence
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Convert color name to RGB
    const getColorRGB = (colorName: string) => {
      const tmpEl = document.createElement('div');
      tmpEl.style.color = colorName;
      document.body.appendChild(tmpEl);
      const color = getComputedStyle(tmpEl).color;
      document.body.removeChild(tmpEl);
      return color;
    };
    
    let frameCount = 0;
    let animationFrameId: number;
    
    // Create a serene Japanese-inspired transformation animation
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      
      // Draw water-like ripples
      const rippleCount = 5;
      const baseRadius = Math.min(w, h) * 0.1;
      const maxRippleSize = Math.min(w, h) * 0.4;
      const time = frameCount * 0.01;
      
      ctx.strokeStyle = getColorRGB(color);
      
      for (let i = 0; i < rippleCount; i++) {
        const progress = ((time + i) % rippleCount) / rippleCount;
        const size = baseRadius + progress * maxRippleSize;
        const opacity = 0.5 * (1 - progress);
        
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(w * 0.3, h * 0.5, size, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw central frog symbol with Japanese aesthetic
      ctx.font = `${Math.min(w, h) * 0.2}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = getColorRGB(color);
      ctx.globalAlpha = 0.3 + 0.2 * Math.sin(time * 0.5);
      ctx.fillText(frog.symbol, w * 0.7, h * 0.5);
      
      // Draw zen garden-like lines
      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 1;
      const lineCount = 12;
      const lineSpacing = h / lineCount;
      
      for (let i = 0; i < lineCount; i++) {
        const y = i * lineSpacing;
        const waveOffset = Math.sin(time + i * 0.5) * 10;
        
        ctx.beginPath();
        ctx.moveTo(0, y + waveOffset);
        ctx.bezierCurveTo(
          w * 0.3, y + waveOffset * 2,
          w * 0.6, y - waveOffset,
          w, y
        );
        ctx.stroke();
      }
      
      frameCount++;
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [frog, color]);
  
  return (
    <div className="relative w-full h-full">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        aria-label={`${frog.name} transformation visual`}
      />
      
      {/* Text overlay with transformation journey */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-xs uppercase tracking-wider text-white/50">Transformation Path</span>
            <h4 className="text-white/90 text-sm font-medium mt-1">
              {frog.name}'s Wisdom → Ritual Practice → Renewal
            </h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
