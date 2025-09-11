
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { calculateRecommendation } from "@/utils/ritualRecommendation";
import { trackProductInteraction } from "@/integrations/supabase/analytics";

interface RitualRecommendationProps {
  answers: Record<string, string>;
  onRestart: () => void;
}

const RitualRecommendation = ({ answers, onRestart }: RitualRecommendationProps) => {
  // Calculate recommendation based on answers
  const recommendation = useMemo(() => calculateRecommendation(answers), [answers]);
  
  // Track recommendation viewed
  useMemo(() => {
    if (recommendation) {
      trackProductInteraction(
        `ritual-path-${recommendation.path.toLowerCase().replace(/\s+/g, '-')}`,
        recommendation.path,
        `ritual_recommendation_view`
      );
    }
  }, [recommendation]);

  if (!recommendation) return null;
  
  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 rounded-full p-4 mb-4">
            <span className="text-3xl">{recommendation.emoji}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-3 text-gold">{recommendation.path}</h2>
          <p className="text-xl opacity-80 max-w-lg mx-auto font-serif">{recommendation.description}</p>
          
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent w-full my-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          
          <div className="text-sm text-white/60 mb-3">
            Your journey reveals your natural affinity
          </div>
        </div>
        
        {/* Product recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {recommendation.products.map((product, index) => (
            <motion.div 
              key={product.name}
              className="bg-black/20 backdrop-blur-sm border border-white/10 p-6 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
            >
              <div className="mb-4">
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
                  {index === 0 ? 'Primary Element' : 'Complementary Element'}
                </div>
                <h3 className="text-xl font-medium text-gold mb-1">{product.name}</h3>
                <p className="text-sm text-white/70">{product.subtitle}</p>
              </div>
              
              <div className="aspect-[3/2] bg-gray-800/50 rounded-sm mb-4 overflow-hidden">
                <img 
                  src={product.imagePath} 
                  alt={product.altText}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-sm text-white/80 mb-4">
                {product.description}
              </p>
              
              <div className="mt-auto text-right">
                <Link 
                  to={`#product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gold text-sm hover:underline inline-flex items-center"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Ritual description */}
        <motion.div 
          className="bg-black/40 border border-gold/20 p-6 rounded-sm mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="mb-3">
            <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
              Your Custom Ritual
            </div>
            <h3 className="text-xl font-medium text-gold">
              {recommendation.ritualName}
            </h3>
          </div>
          
          <div className="text-white/80 space-y-4">
            <p>{recommendation.ritualDescription}</p>
            <div className="py-2 border-t border-white/10">
              <div className="text-xs text-white/50 uppercase tracking-wider mb-2">
                Japanese Wisdom
              </div>
              <p className="italic font-serif">"{recommendation.japaneseWisdom}"</p>
            </div>
          </div>
        </motion.div>
        
        {/* Actions */}
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <Button
            variant="outline"
            onClick={onRestart}
            className="border-white/20 text-white hover:bg-white/10"
          >
            Begin New Journey
          </Button>
          
          <Link to="/shop">
            <Button className="bg-gold hover:bg-gold/80 text-black">
              Explore Products
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default RitualRecommendation;
