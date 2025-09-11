
import { useState } from "react";
import { motion } from "framer-motion";

interface FuroshikiToggleProps {
  options: string[];
  defaultOption?: string;
  onChange?: (option: string) => void;
  className?: string;
}

const FuroshikiToggle = ({ options, defaultOption, onChange, className = "" }: FuroshikiToggleProps) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption || options[0]);
  const [isUnwrapping, setIsUnwrapping] = useState(false);
  
  const handleOptionChange = (option: string) => {
    if (option === selectedOption) return;
    
    // Start unwrapping animation
    setIsUnwrapping(true);
    
    // After unwrapping animation, change the selection
    setTimeout(() => {
      setSelectedOption(option);
      onChange?.(option);
      
      // Start wrapping animation
      setTimeout(() => {
        setIsUnwrapping(false);
      }, 50);
    }, 300);
  };
  
  return (
    <div className={`relative ${className}`}>
      {/* Furoshiki wrapper */}
      <div className="relative py-6 px-2">
        {/* The toggle options */}
        <div className="flex items-center justify-center relative z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionChange(option)}
              className={`px-4 py-2 relative transition-colors ${
                selectedOption === option ? 'text-gold' : 'text-white/70 hover:text-white'
              }`}
            >
              {option}
              
              {selectedOption === option && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  layoutId="activeOption"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        
        {/* Furoshiki cloth - animated to appear to fold/unfold */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top cloth part */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRTZCOTgwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48cGF0aCBkPSJNMjUsMCBMMjUsNTAiIHN0cm9rZT0iI0U2Qjk4MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMCwyNSBMNTAsMjUiIHN0cm9rZT0iI0U2Qjk4MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"
            animate={{
              opacity: isUnwrapping ? [0.2, 0] : [0, 0.2],
              y: isUnwrapping ? [0, -50] : [-50, 0],
              scaleY: isUnwrapping ? [1, 0.5] : [0.5, 1],
              originY: 0,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Bottom cloth part */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRTZCOTgwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48cGF0aCBkPSJNMjUsMCBMMjUsNTAiIHN0cm9rZT0iI0U2Qjk4MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMCwyNSBMNTAsMjUiIHN0cm9rZT0iI0U2Qjk4MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"
            animate={{
              opacity: isUnwrapping ? [0.2, 0] : [0, 0.2],
              y: isUnwrapping ? [0, 50] : [50, 0],
              scaleY: isUnwrapping ? [1, 0.5] : [0.5, 1],
              originY: 1,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Left cloth part */}
          <motion.div
            className="absolute top-0 left-0 bottom-0 w-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRTZCOTgwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48cGF0aCBkPSJNMjUsMCBMMjUsNTAiIHN0cm9rZT0iI0U2Qjk4MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMCwyNSBMNTAsMjUiIHN0cm9rZT0iI0U2Qjk4MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"
            animate={{
              opacity: isUnwrapping ? [0.2, 0] : [0, 0.2],
              x: isUnwrapping ? [0, -50] : [-50, 0],
              scaleX: isUnwrapping ? [1, 0.5] : [0.5, 1],
              originX: 0,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Right cloth part */}
          <motion.div
            className="absolute top-0 right-0 bottom-0 w-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRTZCOTgwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48cGF0aCBkPSJNMjUsMCBMMjUsNTAiIHN0cm9rZT0iI0U2Qjk4MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMCwyNSBMNTAsMjUiIHN0cm9rZT0iI0U2Qjk4MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"
            animate={{
              opacity: isUnwrapping ? [0.2, 0] : [0, 0.2],
              x: isUnwrapping ? [0, 50] : [50, 0],
              scaleX: isUnwrapping ? [1, 0.5] : [0.5, 1],
              originX: 1,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Knot in the center */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold/20 rounded-full"
            animate={{
              opacity: isUnwrapping ? [0.5, 0] : [0, 0.5],
              scale: isUnwrapping ? [1, 0] : [0, 1],
              rotate: isUnwrapping ? [0, 45] : [45, 0]
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default FuroshikiToggle;
