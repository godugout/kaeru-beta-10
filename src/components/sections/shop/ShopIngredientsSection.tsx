
import { motion } from "framer-motion";
import IngredientNarrativesSection from "@/components/sections/IngredientNarrativesSection";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

const ShopIngredientsSection = () => {
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
      <IngredientNarrativesSection />
    </motion.div>
  );
};

export default ShopIngredientsSection;
