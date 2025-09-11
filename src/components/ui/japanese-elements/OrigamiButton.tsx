
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface OrigamiButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const OrigamiButton = ({ children, onClick, className = "" }: OrigamiButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative perspective-500">
      <motion.div
        className="relative z-10"
        animate={{
          rotateX: isHovered ? 10 : 0,
          rotateY: isHovered ? -5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Button
          variant="goldOutline"
          className={`relative overflow-hidden transition-all duration-500 ${className}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
        >
          {/* Origami fold lines - subtle gold lines that appear on hover */}
          <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${isHovered ? "opacity-20" : ""}`}>
            <div className="absolute top-0 left-1/2 h-full w-px bg-gold transform -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gold transform -translate-y-1/2"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 border-b border-r border-gold/30"></div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 border-b border-l border-gold/30"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-t border-r border-gold/30"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-t border-l border-gold/30"></div>
            </div>
          </div>
          
          <span className="relative z-10">{children}</span>
        </Button>
      </motion.div>

      {/* Shadow effect that moves slightly with hover */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black/10 rounded-md blur-md"
        style={{ scale: 0.95, y: 4 }}
        animate={{
          scale: isHovered ? 1 : 0.95,
          y: isHovered ? 6 : 4,
          opacity: isHovered ? 0.3 : 0.1,
        }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default OrigamiButton;
