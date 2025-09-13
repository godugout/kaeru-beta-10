import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";
import { Product } from "@/types/product";

interface IngredientsSectionProps {
  product: Product;
}

interface IngredientModal {
  isOpen: boolean;
  ingredient: string | null;
}

const ingredientStories: Record<string, {
  origin: string;
  benefits: string[];
  story: string;
}> = {
  "CBD Isolate": {
    origin: "Colorado, USA - Organically Grown Hemp",
    benefits: ["Anti-inflammatory", "Calming", "Recovery Support", "Natural Pain Relief"],
    story: "Our CBD is extracted from premium hemp grown in the Rocky Mountains, where clean air and mineral-rich soil create the perfect conditions for therapeutic cannabinoid development."
  },
  "Blue Tansy": {
    origin: "Mediterranean Region - Wild Harvested",
    benefits: ["Skin Soothing", "Anti-inflammatory", "Aromatherapy", "Stress Relief"],
    story: "This rare blue flower releases its precious azulene compounds only when steam distilled. Ancient healers prized blue tansy for its ability to calm both skin and spirit."
  },
  "Grass-Fed Beef Tallow": {
    origin: "New Zealand - Pasture Raised",
    benefits: ["Vitamin A, D, E, K", "Deep Hydration", "Skin Barrier Support", "Biocompatible"],
    story: "From grass-fed cattle roaming freely in New Zealand's pristine pastures. This traditional fat closely matches our skin's natural sebum, making it incredibly nourishing."
  },
  "Golden Jojoba Oil": {
    origin: "Arizona Desert - Sustainable Harvest",
    benefits: ["Non-comedogenic", "Long-lasting", "Antioxidant", "Skin Balancing"],
    story: "Technically a wax, jojoba oil mirrors our skin's natural oils. Harvested from drought-resistant shrubs in the Sonoran Desert, it's nature's perfect moisturizer."
  }
};

const IngredientsSection = ({ product }: IngredientsSectionProps) => {
  const [modal, setModal] = useState<IngredientModal>({ isOpen: false, ingredient: null });
  const [hoveredIngredient, setHoveredIngredient] = useState<string | null>(null);

  const openModal = (ingredient: string) => {
    setModal({ isOpen: true, ingredient });
  };

  const closeModal = () => {
    setModal({ isOpen: false, ingredient: null });
  };

  const primaryIngredients = product.details?.ingredients || [];
  
  return (
    <section className="py-16 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-serif text-kaeru-gold mb-4">
          Sacred Ingredients
        </h2>
        <p className="text-white/70 max-w-2xl">
          Every ingredient is carefully sourced from its native habitat, 
          where it develops its most potent therapeutic properties.
        </p>
      </motion.div>

      {/* Primary CBD Content */}
      <div className="mb-8 p-6 bg-kaeru-gold/10 border border-kaeru-gold/30 rounded-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-kaeru-gold mb-1">
              Primary Active
            </h3>
            <p className="text-white">CBD Isolate</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-serif text-kaeru-gold">
              1500mg <span className="text-sm text-white/70">/ 2oz</span>
            </div>
            <div className="text-lg text-white/70">
              3000mg <span className="text-sm">/ 4oz</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botanical Ingredients Grid */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-4">Botanical Blend</h3>
        
        <div className="grid gap-3">
          {primaryIngredients.map((ingredient, index) => {
            const ingredientName = ingredient.split(' - ')[0];
            const hasStory = ingredientStories[ingredientName];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
                onMouseEnter={() => setHoveredIngredient(ingredientName)}
                onMouseLeave={() => setHoveredIngredient(null)}
              >
                <div 
                  className={`flex items-center justify-between p-4 border rounded-sm transition-all cursor-pointer ${
                    hasStory 
                      ? "border-white/20 hover:border-kaeru-gold/50 hover:bg-kaeru-gold/5" 
                      : "border-white/10"
                  }`}
                  onClick={hasStory ? () => openModal(ingredientName) : undefined}
                >
                  <div className="flex-1">
                    <div className="font-medium text-white">{ingredientName}</div>
                    <div className="text-sm text-white/60 mt-1">
                      {ingredient.split(' - ')[1]}
                    </div>
                  </div>
                  
                  {hasStory && (
                    <Info 
                      size={18} 
                      className="text-kaeru-gold/70 hover:text-kaeru-gold transition-colors" 
                    />
                  )}
                </div>

                {/* Hover Tooltip */}
                {hoveredIngredient === ingredientName && hasStory && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 z-10 mt-2 p-3 bg-kaeru-black border border-kaeru-gold/30 rounded-sm text-sm text-white/80"
                  >
                    Click to learn about this ingredient's origin story
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Ingredient Story Modal */}
      <AnimatePresence>
        {modal.isOpen && modal.ingredient && ingredientStories[modal.ingredient] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-kaeru-black border border-kaeru-gold/30 rounded-sm p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-serif text-kaeru-gold">
                  {modal.ingredient}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Origin</h4>
                  <p className="text-kaeru-gold">
                    {ingredientStories[modal.ingredient].origin}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {ingredientStories[modal.ingredient].benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/80">
                        <div className="w-2 h-2 bg-kaeru-gold rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Story</h4>
                  <p className="text-white/80 leading-relaxed">
                    {ingredientStories[modal.ingredient].story}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IngredientsSection;