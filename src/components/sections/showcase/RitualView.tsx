
import React from 'react';
import { motion } from "framer-motion";
import RitualInstructions from "@/components/product/RitualInstructions";
import { Product } from '@/types/product';

interface RitualViewProps {
  product: Product;
  toggleRitualView: () => void;
}

const RitualView = ({ product, toggleRitualView }: RitualViewProps) => {
  return (
    <motion.div
      key="ritual-instructions"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/20 p-6 rounded-sm"
    >
      {product.ritualSteps && (
        <div>
          <RitualInstructions 
            productName={product.name} 
            steps={product.ritualSteps} 
          />
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={toggleRitualView}
              className="bg-transparent border border-gold text-gold px-8 py-3 hover:bg-gold/10 hover:text-white transition-all"
            >
              RETURN TO PRODUCT
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default RitualView;
