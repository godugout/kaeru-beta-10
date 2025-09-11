import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, RefreshCw, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { EnhancedRecommendation } from "@/utils/enhancedRecommendation";
import { trackProductInteraction } from "@/integrations/supabase/analytics";

interface EnhancedRitualRecommendationProps {
  recommendation: EnhancedRecommendation | null;
  onRestart: () => void;
  onRefineMore?: () => void;
  currentPhase: 'core' | 'refinement' | 'deep' | 'results';
}

const EnhancedRitualRecommendation = ({ 
  recommendation, 
  onRestart, 
  onRefineMore,
  currentPhase 
}: EnhancedRitualRecommendationProps) => {
  
  if (!recommendation) {
    return (
      <div className="text-center py-12">
        <p className="text-fog-gray/60 mb-6">Unable to generate recommendation. Please try again.</p>
        <Button onClick={onRestart} variant="secondary">
          Start Over
        </Button>
      </div>
    );
  }

  const handleProductView = (productName: string) => {
    trackProductInteraction(productName, productName, 'ritual_recommendation_view');
  };

  const getConfidenceDisplay = (confidence: number) => {
    if (confidence >= 0.9) return { text: "Excellent Match", color: "text-jade-accent" };
    if (confidence >= 0.8) return { text: "Great Match", color: "text-kaeru-gold" };
    if (confidence >= 0.7) return { text: "Good Match", color: "text-kaeru-gold/80" };
    return { text: "Basic Match", color: "text-fog-gray/60" };
  };

  const confidenceDisplay = getConfidenceDisplay(recommendation.confidence);

  return (
    <div className="space-y-8">
      {/* Header with confidence */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 mx-auto bg-kaeru-gold/10 rounded-full flex items-center justify-center mb-4"
        >
          <span className="text-2xl">{recommendation.emoji}</span>
        </motion.div>
        
        <div className="space-y-2">
          <h2 className="text-3xl font-serif text-fog-gray">{recommendation.path}</h2>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary" className="bg-kaeru-gold/20 text-kaeru-gold border-kaeru-gold/30">
              {Math.round(recommendation.confidence * 100)}% {confidenceDisplay.text}
            </Badge>
            <Badge variant="outline" className="border-fog-gray/30">
              {recommendation.personalizationLevel === 'complete' ? 'Fully Personalized' :
               recommendation.personalizationLevel === 'refined' ? 'Refined Match' : 'Basic Match'}
            </Badge>
          </div>
        </div>
      </div>

      {/* Description */}
      <Card className="bg-kaeru-black/30 border-fog-gray/10">
        <CardContent className="p-6 text-center">
          <p className="text-fog-gray/80 text-lg leading-relaxed mb-4">
            {recommendation.description}
          </p>
          <p className="text-kaeru-gold/70 italic">
            {recommendation.japaneseWisdom}
          </p>
        </CardContent>
      </Card>

      {/* Ritual Details */}
      <div className="space-y-4">
        <h3 className="text-xl font-serif text-center text-fog-gray">Your Personal Ritual</h3>
        <Card className="bg-moss-green/10 border-moss-green/20">
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-kaeru-gold mb-2">{recommendation.ritualName}</h4>
            <p className="text-fog-gray/80 leading-relaxed">{recommendation.ritualDescription}</p>
          </CardContent>
        </Card>
      </div>

      {/* Recommended Products */}
      <div className="space-y-6">
        <h3 className="text-xl font-serif text-center text-fog-gray">Recommended Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendation.products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="bg-kaeru-black/20 border-fog-gray/10 hover:border-kaeru-gold/30 transition-colors group">
                <CardContent className="p-4">
                  <div className="aspect-square bg-fog-gray/5 rounded-sm mb-4 overflow-hidden">
                    <img 
                      src={product.imagePath}
                      alt={product.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="font-semibold text-fog-gray">{product.name}</h4>
                    <p className="text-sm text-kaeru-gold/70">{product.subtitle}</p>
                    <p className="text-xs text-fog-gray/60 line-clamp-2">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Refinement Suggestions */}
      {recommendation.refinementSuggestions && recommendation.refinementSuggestions.length > 0 && (
        <Card className="bg-kaeru-gold/5 border-kaeru-gold/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-kaeru-gold" />
              <h4 className="font-semibold text-kaeru-gold">Enhance Your Recommendation</h4>
            </div>
            <ul className="space-y-1 text-sm text-fog-gray/70">
              {recommendation.refinementSuggestions.map((suggestion, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-kaeru-gold/50 rounded-full" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
        {onRefineMore && (
          <Button 
            onClick={onRefineMore}
            variant="secondary"
            className="flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Refine Further
          </Button>
        )}
        
        <Link to="/shop">
          <Button 
            className="flex items-center gap-2 w-full sm:w-auto"
            onClick={() => recommendation.products.forEach(p => handleProductView(p.name))}
          >
            <ShoppingCart className="w-4 h-4" />
            Explore Products
          </Button>
        </Link>
        
        <Button 
          onClick={onRestart}
          variant="ghost"
          className="flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Start New Journey
        </Button>
      </div>

      {/* Phase Completion Message */}
      {currentPhase === 'deep' && (
        <div className="text-center py-6 border-t border-fog-gray/10">
          <div className="flex items-center justify-center gap-2 text-jade-accent mb-2">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Complete Personalization Achieved</span>
          </div>
          <p className="text-xs text-fog-gray/60">
            Your ritual has been crafted with the full depth of your preferences
          </p>
        </div>
      )}
    </div>
  );
};

export default EnhancedRitualRecommendation;