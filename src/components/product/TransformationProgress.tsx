
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Benefit {
  stage: number;
  time: string;
  description: string;
}

interface TransformationProgressProps {
  productName: string;
  benefits: Benefit[];
  accentColor?: string;
}

const TransformationProgress = ({ 
  productName, 
  benefits,
  accentColor = "#c9b06f" 
}: TransformationProgressProps) => {
  const [activeStage, setActiveStage] = useState(0);
  
  useEffect(() => {
    // Auto-advance stages for demo purposes
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % benefits.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [benefits.length]);
  
  return (
    <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-sm p-6">
      <h3 className="text-lg font-medium text-white mb-4">
        {productName} Transformation Journey
      </h3>
      
      {/* Timeline visualization */}
      <div className="relative mb-8 px-4">
        {/* Track */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-white/10"></div>
        
        {/* Progress */}
        <motion.div 
          className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2"
          style={{ backgroundColor: accentColor }}
          animate={{ 
            width: `${(activeStage / (benefits.length - 1)) * 100}%` 
          }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Stage markers */}
        <div className="relative flex justify-between">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
              onClick={() => setActiveStage(index)}
            >
              <motion.div 
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  index <= activeStage ? 'bg-gold' : 'bg-white/30'
                }`}
                animate={{
                  scale: index === activeStage ? 1.2 : 1,
                  boxShadow: index === activeStage ? `0 0 10px ${accentColor}` : "none"
                }}
              />
              <p className="text-xs text-white/70 mt-2">{benefit.time}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Active stage details */}
      <div className="min-h-[80px]">
        <AnimatedText 
          key={activeStage}
          text={benefits[activeStage].description} 
        />
      </div>
    </div>
  );
};

// Animated text component
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-white/80"
    >
      {text}
    </motion.p>
  );
};

export default TransformationProgress;
