
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackProductView, trackRitualView, trackProductInteraction } from "@/integrations/supabase/analytics";
import ProductDetails from "./showcase/ProductDetails";
import ProductShowcaseNavigation from "./showcase/ProductShowcaseNavigation";
import RitualView from "./showcase/RitualView";
import { Product } from "@/types/product"; // Import the Product type from types/product.ts

interface ProductShowcaseProps {
  products: Product[];
}

const ProductShowcase = ({ products }: ProductShowcaseProps) => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [showRitual, setShowRitual] = useState(false);

  // Track active product view
  useEffect(() => {
    if (products[activeProduct]) {
      // Create a synthetic ID since we don't have real IDs from the database yet
      const productId = `temp-${products[activeProduct].name.toLowerCase().replace(/\s+/g, '-')}`;
      trackProductView(productId, products[activeProduct].name);
    }
  }, [activeProduct, products]);

  const toggleRitualView = () => {
    const newShowRitual = !showRitual;
    setShowRitual(newShowRitual);
    
    if (newShowRitual && products[activeProduct]?.ritualSteps) {
      // Track ritual view when toggled on
      const ritualId = `temp-ritual-${products[activeProduct].name.toLowerCase().replace(/\s+/g, '-')}`;
      trackRitualView(ritualId, `${products[activeProduct].name} Ritual`);
      
      // Also track interaction
      const productId = `temp-${products[activeProduct].name.toLowerCase().replace(/\s+/g, '-')}`;
      trackProductInteraction(
        productId, 
        products[activeProduct].name,
        'ritual_view_toggle'
      );
    }
  };

  return (
    <div className="relative">
      {/* Product showcase */}
      <AnimatePresence mode="wait">
        {!showRitual ? (
          <motion.div
            key="product-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductDetails 
              product={products[activeProduct]} 
              activeProduct={activeProduct} 
              toggleRitualView={toggleRitualView} 
            />
            <ProductShowcaseNavigation 
              products={products} 
              activeProduct={activeProduct} 
              setActiveProduct={setActiveProduct} 
            />
          </motion.div>
        ) : (
          <RitualView 
            product={products[activeProduct]} 
            toggleRitualView={toggleRitualView} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductShowcase;
