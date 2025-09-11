
import { motion } from "framer-motion";
import { JapaneseHeading } from "@/components/ui/japanese/Typography";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

const ShopHeader = () => {
  const { getOptimizedDuration } = useOptimizedAnimation();
  
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: getOptimizedDuration(0.7),
            ease: "easeOut"
          }
        }
      }}
      className="text-center mb-shaku"
    >
      <JapaneseHeading>Our Collections</JapaneseHeading>
    </motion.div>
  );
};

export default ShopHeader;
