
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RitualInstructions from "@/components/product/RitualInstructions";
import RitualStepsGuide from "@/components/ritual/RitualStepsGuide";
import IngredientNarrativesSection from "@/components/sections/IngredientNarrativesSection";
import { motion, AnimatePresence } from "framer-motion";

interface ProductDetailProps {
  product: {
    name: string;
    subtitle: string;
    frog: string;
    description: string;
    imagePath: string;
    altText: string;
    ritualSteps?: any[];
    collection: string;
  };
  ritualDisplayMode?: "immersive" | "guide";
}

const ProductDetail = ({ product, ritualDisplayMode = "immersive" }: ProductDetailProps) => {
  const [showRitual, setShowRitual] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  
  return (
    <div className="py-12">
      <AnimatePresence mode="wait">
        {!showRitual && !showIngredients ? (
          <motion.div
            key="product-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto px-4"
          >
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <img 
                  src={product.imagePath} 
                  alt={product.altText}
                  className="w-full rounded-sm shadow-lg"
                />
              </div>
              
              <div className="md:w-1/2">
                <div className="mb-2 text-gold/70 text-sm">
                  {product.frog} COLLECTION
                </div>
                <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">{product.name}</h1>
                <h2 className="text-xl text-white/80 mb-6">{product.subtitle}</h2>
                
                <p className="text-white/70 leading-relaxed mb-8">
                  {product.description}
                </p>
                
                <div className="flex flex-col gap-4">
                  {product.ritualSteps && (
                    <Button
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold/10 justify-between"
                      onClick={() => setShowRitual(true)}
                    >
                      <span>Experience the Ritual</span>
                      <ArrowRight size={16} />
                    </Button>
                  )}
                  
                  <Button
                    variant="outline"
                    className="border-gold/50 text-gold/90 hover:bg-gold/10 justify-between"
                    onClick={() => setShowIngredients(true)}
                  >
                    <span>Discover the Ingredients</span>
                    <ArrowRight size={16} />
                  </Button>
                  
                  <Button className="bg-gold text-black hover:bg-gold/80 mt-4 justify-between">
                    <span>Add to Cart</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : showRitual ? (
          <motion.div
            key="ritual-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {product.ritualSteps && (
              <div className="max-w-6xl mx-auto px-4">
                {ritualDisplayMode === "immersive" ? (
                  <RitualInstructions 
                    productName={product.name} 
                    steps={product.ritualSteps} 
                  />
                ) : (
                  <RitualStepsGuide
                    productName={product.name}
                    steps={product.ritualSteps}
                  />
                )}
                
                <div className="flex justify-center mt-8">
                  <Button 
                    onClick={() => setShowRitual(false)}
                    className="bg-transparent border border-gold text-gold hover:bg-gold/10"
                  >
                    Return to Product
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="ingredients-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IngredientNarrativesSection productName={product.name} />
            
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => setShowIngredients(false)}
                className="bg-transparent border border-gold text-gold hover:bg-gold/10"
              >
                Return to Product
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetail;
