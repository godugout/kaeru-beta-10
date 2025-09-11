
import { motion } from "framer-motion";
import ShopHero from "@/components/sections/ShopHero";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

const ShopHeroSection = () => {
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
      <ShopHero />
    </motion.div>
  );
};

export default ShopHeroSection;
