
import { motion } from "framer-motion";
import ShopBenefits from "@/components/sections/ShopBenefits";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

const ShopBenefitsSection = () => {
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
      className="py-tatami"
    >
      <ShopBenefits />
    </motion.div>
  );
};

export default ShopBenefitsSection;
