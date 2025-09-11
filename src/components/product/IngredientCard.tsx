import { useState } from "react";
import { motion } from "framer-motion";
import { IngredientNarrative } from "@/data/ingredientNarratives";

interface IngredientCardProps {
  ingredient: IngredientNarrative;
  delay?: number;
}

const subtitles = {
  matcha: "The Warrior's Awakening",
  yuzu: "The Thunder God's Gift",
  hinoki: "The Eternal Guardian",
  ginger: "The Inner Fire",
  mugwort: "The Dream Weaver"
};

const IngredientCard = ({ ingredient, delay = 0 }: IngredientCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="relative w-full max-w-[350px] h-[500px] mx-auto perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay, duration: 0.6, ease: "easeOut" }
      }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
        onClick={handleFlip}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <motion.div 
            className="relative w-full h-full bg-gradient-to-br from-kaeru-black via-kaeru-black to-moss-green/20 rounded-lg border border-gold/30 overflow-hidden group"
            whileHover={{ 
              boxShadow: "0 0 30px hsl(var(--gold) / 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Decorative Pattern Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rotate-45 scale-150 opacity-20" />
            
            {/* Floating Animation Container */}
            <motion.div
              className="absolute inset-4"
              animate={{ 
                y: [0, -5, 0],
                transition: { 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: delay * 0.5
                }
              }}
            >
              {/* Content */}
              <div className="flex flex-col items-center justify-center h-full text-center p-6 relative z-10">
                {/* Japanese Name - Large */}
                <motion.div 
                  className="text-6xl font-serif text-gold mb-4 opacity-90"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 0.9,
                    transition: { delay: delay + 0.3, duration: 0.5 }
                  }}
                >
                  {ingredient.japaneseName.split('(')[0].trim()}
                </motion.div>

                {/* English Name */}
                <motion.h3 
                  className="text-2xl font-serif text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    transition: { delay: delay + 0.4, duration: 0.5 }
                  }}
                >
                  {ingredient.name}
                </motion.h3>

                {/* Subtitle */}
                <motion.p 
                  className="text-gold/80 text-sm tracking-widest mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 0.8,
                    transition: { delay: delay + 0.5, duration: 0.5 }
                  }}
                >
                  {subtitles[ingredient.id as keyof typeof subtitles]}
                </motion.p>

                {/* Particle Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gold/40 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.5, 1, 0.5],
                        transition: {
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3
                        }
                      }}
                    />
                  ))}
                </div>

                {/* Click Indicator */}
                <motion.div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gold/50 text-xs tracking-wider"
                  animate={{ 
                    opacity: [0.3, 0.7, 0.3],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  TAP TO EXPLORE
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-gradient-to-br from-kaeru-black via-moss-green/10 to-kaeru-black rounded-lg border border-gold/30 p-6 overflow-hidden">
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gold/30">
              <div className="space-y-4">
                {/* Header */}
                <div className="text-center border-b border-gold/20 pb-3 mb-4">
                  <h4 className="text-lg font-serif text-gold">{ingredient.name}</h4>
                  <p className="text-gold/70 text-sm">{ingredient.japaneseName}</p>
                </div>

                {/* Content Sections */}
                <div className="space-y-4 text-xs">
                  <div>
                    <h5 className="text-gold/90 font-medium mb-2 text-sm">Cultural Significance</h5>
                    <p className="text-white/80 leading-relaxed">{ingredient.culturalSignificance}</p>
                  </div>

                  <div>
                    <h5 className="text-gold/90 font-medium mb-2 text-sm">Mythology</h5>
                    <p className="text-white/80 leading-relaxed">{ingredient.mythology}</p>
                  </div>

                  <div>
                    <h5 className="text-gold/90 font-medium mb-2 text-sm">Traditional Properties</h5>
                    <p className="text-white/80 leading-relaxed">{ingredient.traditionalProperties}</p>
                  </div>

                  <div>
                    <h5 className="text-gold/90 font-medium mb-2 text-sm">Scientific Validation</h5>
                    <p className="text-white/80 leading-relaxed">{ingredient.scientificValidation}</p>
                  </div>

                  <div>
                    <h5 className="text-gold/90 font-medium mb-2 text-sm">Kaeru Origin</h5>
                    <p className="text-white/80 leading-relaxed">{ingredient.kaeruOrigin}</p>
                  </div>
                </div>

                {/* Product Associations */}
                <div className="border-t border-gold/20 pt-3 mt-4">
                  <p className="text-gold/60 text-xs">
                    Found in: {ingredient.productAssociations.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IngredientCard;