
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ingredient {
  name: string;
  japaneseName?: string;
  origin: string;
  properties: string[];
  seasonalAspect?: string;
  storySnippet: string;
  imagePath?: string;
}

interface EnhancedIngredientStoryProps {
  ingredients: Ingredient[];
  accentColor?: string;
}

const EnhancedIngredientStory = ({ 
  ingredients, 
  accentColor = "#c9b06f" 
}: EnhancedIngredientStoryProps) => {
  const [activeIngredient, setActiveIngredient] = useState(0);
  
  return (
    <div className="py-8">
      <h3 className="text-xl font-serif text-white mb-6">Key Ingredients</h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Ingredient selector (left) */}
        <div className="md:col-span-1 space-y-2">
          {ingredients.map((ingredient, index) => (
            <button
              key={index}
              onClick={() => setActiveIngredient(index)}
              className={`block w-full text-left px-4 py-3 transition-colors border-l-2 ${
                index === activeIngredient 
                  ? `border-gold bg-black/30` 
                  : `border-transparent bg-black/10 hover:bg-black/20`
              }`}
            >
              <h4 className={`${
                index === activeIngredient ? 'text-gold' : 'text-white/80'
              }`}>
                {ingredient.name}
              </h4>
              {ingredient.japaneseName && (
                <p className="text-xs text-white/50 mt-1">
                  {ingredient.japaneseName}
                </p>
              )}
            </button>
          ))}
        </div>
        
        {/* Ingredient details (right) */}
        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIngredient}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-sm p-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left column */}
                <div>
                  <h4 className="text-lg font-medium mb-3" style={{ color: accentColor }}>
                    {ingredients[activeIngredient].name}
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-xs text-white/50 uppercase mb-1">Origin</h5>
                      <p className="text-white/80 text-sm">
                        {ingredients[activeIngredient].origin}
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-xs text-white/50 uppercase mb-1">Properties</h5>
                      <ul className="space-y-1">
                        {ingredients[activeIngredient].properties.map((property, i) => (
                          <li key={i} className="text-white/80 text-sm flex items-start">
                            <span className="text-gold mr-2">•</span>
                            {property}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {ingredients[activeIngredient].seasonalAspect && (
                      <div>
                        <h5 className="text-xs text-white/50 uppercase mb-1">Seasonal Aspect</h5>
                        <p className="text-white/80 text-sm italic">
                          {ingredients[activeIngredient].seasonalAspect}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Right column */}
                <div>
                  {ingredients[activeIngredient].imagePath ? (
                    <div className="mb-4 aspect-square rounded-sm overflow-hidden">
                      <img 
                        src={ingredients[activeIngredient].imagePath} 
                        alt={ingredients[activeIngredient].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div 
                      className="mb-4 aspect-square rounded-sm flex items-center justify-center bg-black/40"
                      style={{ border: `1px solid ${accentColor}30` }}
                    >
                      <p className="text-white/40 text-sm">No image available</p>
                    </div>
                  )}
                  
                  <div className="mt-2 bg-black/40 p-4 rounded-sm">
                    <h5 className="text-xs text-white/50 uppercase mb-1">Story</h5>
                    <p className="text-white/90 text-sm italic">
                      {ingredients[activeIngredient].storySnippet}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default EnhancedIngredientStory;
