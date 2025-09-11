
import { motion } from "framer-motion";
import ShopCTA from "@/components/sections/ShopCTA";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

const ShopCTASection = () => {
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
    >
      <ShopCTA />
    </motion.div>
  );
};

export default ShopCTASection;
