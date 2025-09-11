
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const KaeruLogo = () => {
  const [animationStage, setAnimationStage] = useState<'initial' | 'complete'>('initial');
  
  useEffect(() => {
    // Simplified animation sequence
    const timer = setTimeout(() => {
      setAnimationStage('complete');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      {animationStage === 'initial' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-48 md:w-56 aspect-square"
        >
          <img 
            src="/lovable-uploads/775b98a8-5a04-44fc-bc94-1e4a72b0517e.png" 
            alt="KAERU" 
            className="w-full h-full object-contain"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 md:w-28 aspect-square"
        >
          <img 
            src="/lovable-uploads/775b98a8-5a04-44fc-bc94-1e4a72b0517e.png" 
            alt="KAERU" 
            className="w-full h-full object-contain"
          />
        </motion.div>
      )}
    </div>
  );
};

export default KaeruLogo;
