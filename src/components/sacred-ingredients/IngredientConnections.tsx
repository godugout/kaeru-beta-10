import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { RefinedIngredient } from "@/data/refinedIngredients";

interface IngredientConnectionsProps {
  ingredients: RefinedIngredient[];
  highlightedProducts: string[];
  showConnections: boolean;
}

const synergyPairs = [
  { from: 'matcha', to: 'yuzu', strength: 0.9, benefit: 'Enhanced Focus & Mood' },
  { from: 'hinoki', to: 'yomogi', strength: 0.8, benefit: 'Deep Sleep & Dreams' },
  { from: 'shoga', to: 'matcha', strength: 0.7, benefit: 'Sustained Energy' },
  { from: 'yuzu', to: 'hinoki', strength: 0.75, benefit: 'Emotional Balance' },
  { from: 'yomogi', to: 'shoga', strength: 0.65, benefit: 'Circulation & Warmth' }
];

const IngredientConnections = ({ 
  ingredients, 
  highlightedProducts, 
  showConnections 
}: IngredientConnectionsProps) => {
  const [activeConnections, setActiveConnections] = useState<typeof synergyPairs>([]);

  useEffect(() => {
    if (showConnections && highlightedProducts.length > 0) {
      // Find ingredients that share the highlighted products
      const relatedIngredients = ingredients.filter(ingredient =>
        ingredient.productAssociations.some(product =>
          highlightedProducts.some(highlighted =>
            product.toLowerCase().includes(highlighted.toLowerCase()) ||
            highlighted.toLowerCase().includes(product.toLowerCase())
          )
        )
      );

      // Find synergy connections between related ingredients
      const connections = synergyPairs.filter(synergy =>
        relatedIngredients.some(ing => ing.id === synergy.from) &&
        relatedIngredients.some(ing => ing.id === synergy.to)
      );

      setActiveConnections(connections);
    } else {
      setActiveConnections([]);
    }
  }, [showConnections, highlightedProducts, ingredients]);

  const getIngredientPosition = (ingredientId: string) => {
    const index = ingredients.findIndex(ing => ing.id === ingredientId);
    const totalIngredients = ingredients.length;
    const cols = window.innerWidth >= 1280 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    
    const row = Math.floor(index / cols);
    const col = index % cols;
    
    return {
      x: (col / (cols - 1)) * 100,
      y: (row / Math.ceil(totalIngredients / cols)) * 100
    };
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00A86B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <AnimatePresence>
          {activeConnections.map((connection, index) => {
            const fromPos = getIngredientPosition(connection.from);
            const toPos = getIngredientPosition(connection.to);
            
            return (
              <motion.g
                key={`${connection.from}-${connection.to}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* Connection Line */}
                <motion.path
                  d={`M ${fromPos.x}% ${fromPos.y}% Q ${(fromPos.x + toPos.x) / 2}% ${Math.min(fromPos.y, toPos.y) - 10}% ${toPos.x}% ${toPos.y}%`}
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                
                {/* Energy Flow Particles */}
                <motion.circle
                  r="3"
                  fill="#D4AF37"
                  initial={{ 
                    cx: `${fromPos.x}%`,
                    cy: `${fromPos.y}%`
                  }}
                  animate={{
                    cx: [`${fromPos.x}%`, `${toPos.x}%`],
                    cy: [`${fromPos.y}%`, `${toPos.y}%`],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.3
                  }}
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </motion.circle>

                {/* Synergy Strength Indicator */}
                <motion.circle
                  cx={`${(fromPos.x + toPos.x) / 2}%`}
                  cy={`${(fromPos.y + toPos.y) / 2 - 5}%`}
                  r={connection.strength * 8}
                  fill="#00A86B"
                  fillOpacity="0.2"
                  stroke="#00A86B"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                />
              </motion.g>
            );
          })}
        </AnimatePresence>
      </svg>

      {/* Connection Labels */}
      <AnimatePresence>
        {activeConnections.map((connection, index) => {
          const fromPos = getIngredientPosition(connection.from);
          const toPos = getIngredientPosition(connection.to);
          
          return (
            <motion.div
              key={`label-${connection.from}-${connection.to}`}
              className="absolute bg-kaeru-black/90 border border-gold/30 rounded-lg px-3 py-2 text-xs text-gold backdrop-blur-sm"
              style={{
                left: `${(fromPos.x + toPos.x) / 2}%`,
                top: `${(fromPos.y + toPos.y) / 2 - 10}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
            >
              <div className="text-center">
                <div className="font-medium">{Math.round(connection.strength * 100)}% Synergy</div>
                <div className="text-white/70 text-xs mt-1">{connection.benefit}</div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default IngredientConnections;