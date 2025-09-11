
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flower } from "lucide-react";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

interface BreathingGuideProps {
  pattern: string;
  color: string;
  initialActive?: boolean;
}

const BreathingGuide = ({ pattern, color, initialActive = false }: BreathingGuideProps) => {
  const [breathingActive, setBreathingActive] = useState(initialActive);
  const { shouldAnimate, getOptimizedDuration } = useOptimizedAnimation();

  // Handle breathing animation
  useEffect(() => {
    if (!shouldAnimate) return;
    
    if (initialActive) {
      setBreathingActive(true);
      const timeout = setTimeout(() => setBreathingActive(false), 10000); // Stop breathing animation after 10s
      
      return () => clearTimeout(timeout);
    }
  }, [initialActive, shouldAnimate]);

  return (
    <div>
      <h6 className="text-xs tracking-wider text-white/50 uppercase mb-2">Breathing Pattern</h6>
      <div className="text-white mb-3">{pattern}</div>
      
      {/* Simple breathing visualization */}
      <div className="mt-3 relative h-8 bg-black/20 rounded-full overflow-hidden">
        <motion.div 
          className="absolute h-full rounded-full" 
          style={{ backgroundColor: color, width: "0%" }}
          animate={breathingActive ? {
            width: ["0%", "100%", "100%", "0%"],
            transition: {
              duration: 8,
              times: [0, 0.3, 0.7, 1],
              repeat: Infinity
            }
          } : {}}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Flower 
            size={20} 
            className="text-white"
            style={{ opacity: 0.7 }}
          />
        </div>
      </div>
      <button 
        className="mt-3 text-xs text-white/50 hover:text-white transition-colors"
        onClick={() => setBreathingActive(!breathingActive)}
      >
        {breathingActive ? "Pause" : "Start"} breathing guide
      </button>
    </div>
  );
};

export default BreathingGuide;
