import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { refinedIngredients } from "@/data/refinedIngredients";
import EnhancedIngredientCard from "@/components/product/EnhancedIngredientCard";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { Search, Filter, Sparkles, Volume2, VolumeX, Zap, Flower2, Leaf, TreePine, Snowflake, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SeasonalIngredientTheme from "@/components/sacred-ingredients/SeasonalIngredientTheme";
import IngredientConnections from "@/components/sacred-ingredients/IngredientConnections";
import SoundSystem from "@/components/sacred-ingredients/SoundSystem";
import ParallaxBackground from "@/components/sacred-ingredients/ParallaxBackground";

interface RefinedIngredientsSectionProps {
  productName?: string;
}

const benefitFilters = [
  { id: 'all', label: 'All', icon: '🌿' },
  { id: 'recovery', label: 'Recovery', icon: '💪' },
  { id: 'calm', label: 'Calm', icon: '🧘' },
  { id: 'energy', label: 'Energy', icon: '⚡' },
  { id: 'sleep', label: 'Sleep', icon: '🌙' }
];

const seasonOptions = [
  { id: 'spring', label: 'Spring', icon: Leaf, color: '#98FB98' },
  { id: 'summer', label: 'Summer', icon: Sun, color: '#FFD700' },
  { id: 'autumn', label: 'Autumn', icon: TreePine, color: '#FF6347' },
  { id: 'winter', label: 'Winter', icon: Snowflake, color: '#B0C4DE' }
];

const RefinedIngredientsSection = ({ productName }: RefinedIngredientsSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filteredIngredients, setFilteredIngredients] = useState(refinedIngredients);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [highlightedProducts, setHighlightedProducts] = useState<string[]>([]);
  const [showConnections, setShowConnections] = useState(false);
  const [currentSeason, setCurrentSeason] = useState<'spring' | 'summer' | 'autumn' | 'winter'>('spring');
  const [showSynergyVisualization, setShowSynergyVisualization] = useState(false);

  // Keyboard navigation
  const { currentIndex, isNavigating } = useKeyboardNavigation({
    totalItems: filteredIngredients.length,
    onItemSelect: (index) => setSelectedCardIndex(index),
    onItemActivate: (index) => {
      console.log('Activating card:', index);
    },
    isActive: true
  });

  // Handle product highlighting from cards
  const handleProductHighlight = (products: string[]) => {
    setHighlightedProducts(products);
    setShowConnections(true);
    
    setTimeout(() => {
      setShowConnections(false);
      setHighlightedProducts([]);
    }, 5000);
  };

  // Filter ingredients based on product name, search term, and benefit filter
  useEffect(() => {
    let filtered = productName 
      ? refinedIngredients.filter(ingredient => 
          ingredient.productAssociations.some(product => 
            product.toLowerCase().includes(productName.toLowerCase())
          )
        )
      : refinedIngredients;

    if (searchTerm) {
      filtered = filtered.filter(ingredient =>
        ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ingredient.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ingredient.cultural.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ingredient.healing.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ingredient.productAssociations.some(product => 
          product.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (activeFilter !== 'all') {
      const benefitKeywords = {
        recovery: ['recovery', 'healing', 'restore', 'repair'],
        calm: ['calm', 'peace', 'meditation', 'stillness', 'boundary'],
        energy: ['energy', 'fire', 'vitality', 'awakening', 'warm'],
        sleep: ['sleep', 'dream', 'night', 'rest', 'moon']
      };

      const keywords = benefitKeywords[activeFilter as keyof typeof benefitKeywords] || [];
      filtered = filtered.filter(ingredient =>
        keywords.some(keyword =>
          ingredient.healing.toLowerCase().includes(keyword) ||
          ingredient.subtitle.toLowerCase().includes(keyword) ||
          ingredient.cultural.toLowerCase().includes(keyword)
        )
      );
    }

    setFilteredIngredients(filtered);
    setIsSearchActive(searchTerm.length > 0 || activeFilter !== 'all');
  }, [searchTerm, activeFilter, productName]);

  return (
    <ParallaxBackground>
      <SeasonalIngredientTheme season={currentSeason}>
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-moss-green/20 to-black" role="region" aria-labelledby="ingredients-title">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.1),transparent_50%)]" />
          </div>
          
          <div className="max-w-8xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-6 h-6 text-gold animate-pulse" />
            <h2 id="ingredients-title" className="text-xs tracking-[0.3em] text-gold uppercase">THE SACRED INGREDIENTS</h2>
            <Sparkles className="w-6 h-6 text-gold animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          
          <h3 className="text-5xl md:text-7xl font-serif text-white mb-12 leading-tight">
            {productName 
              ? "Key Ingredients & Their Stories" 
              : "Five Elements of Ancient Wisdom"
            }
          </h3>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Each ingredient carries millennia of healing tradition and modern scientific validation, 
              carefully selected to honor both nature's intelligence and therapeutic efficacy.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mx-auto" />
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gold/60" />
            <Input
              type="text"
              placeholder="Find ingredients in your products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-80 bg-kaeru-black/50 border-gold/30 text-white placeholder:text-white/50 focus:border-gold"
              aria-label="Search ingredients"
            />
          </div>

          <div className="flex gap-2 items-center">
            <Filter className="w-4 h-4 text-gold/60 mr-2" />
            {benefitFilters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                className={`text-xs ${
                  activeFilter === filter.id
                    ? 'bg-gold text-kaeru-black hover:bg-gold/90'
                    : 'border-gold/30 text-gold/70 hover:border-gold/50 bg-transparent'
                }`}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
              >
                <span className="mr-1" aria-hidden="true">{filter.icon}</span>
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-gold/60 text-xs mr-2">Season:</span>
            {seasonOptions.map((season) => {
              const IconComponent = season.icon;
              return (
                <Button
                  key={season.id}
                  variant={currentSeason === season.id ? "default" : "outline"}
                  size="sm"
                  className={`text-xs ${
                    currentSeason === season.id
                      ? 'bg-gold text-kaeru-black hover:bg-gold/90'
                      : 'border-gold/30 text-gold/70 hover:border-gold/50 bg-transparent'
                  }`}
                  onClick={() => setCurrentSeason(season.id as typeof currentSeason)}
                >
                  <IconComponent className="w-3 h-3 mr-1" />
                  {season.label}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            className={`border-gold/30 text-gold/70 hover:border-gold/50 bg-transparent ${
              showSynergyVisualization ? 'border-gold text-gold bg-gold/10' : ''
            }`}
            onClick={() => setShowSynergyVisualization(!showSynergyVisualization)}
            title="Show ingredient synergies"
          >
            <Sparkles className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Experimental Card Layout */}
        <div className="relative mb-20">
          {/* Connection Visualization Layer */}
          <IngredientConnections
            ingredients={filteredIngredients}
            highlightedProducts={highlightedProducts}
            showConnections={showConnections || showSynergyVisualization}
          />
          
          {/* Enhanced Grid Layout for Better Screen Fit */}
          <div 
            className="grid gap-6 relative z-10" 
            style={{
              gridTemplateColumns: `repeat(${Math.min(filteredIngredients.length, 5)}, minmax(280px, 1fr))`,
              gridAutoRows: 'minmax(400px, auto)'
            }}
            role="grid"
          >
            {filteredIngredients.map((ingredient, index) => (
              <motion.div 
                key={ingredient.id} 
                role="gridcell"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-moss-green/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <EnhancedIngredientCard 
                  ingredient={ingredient} 
                  delay={index}
                  isSearchActive={isSearchActive}
                  searchTerm={searchTerm}
                  isSelected={isNavigating && index === currentIndex}
                  onFocus={() => setSelectedCardIndex(index)}
                  soundEnabled={soundEnabled}
                  onProductHighlight={handleProductHighlight}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {filteredIngredients.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-white/60 text-lg">No ingredients match your filters.</p>
            <Button
              variant="outline"
              className="mt-4 border-gold/30 text-gold hover:border-gold/50"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        <motion.div 
          className="text-center mt-8 text-xs text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p>Use arrow keys to navigate • Enter/Space to flip cards • Tab through content • Click synergy button to see connections</p>
        </motion.div>

        {/* The Five Transformations Philosophy - Removed to focus on single product launch */}
      </div>

      {/* Sound System */}
      <SoundSystem
        enabled={soundEnabled}
        onToggle={() => setSoundEnabled(!soundEnabled)}
        ambientTrack="temple"
      />
    </section>
      </SeasonalIngredientTheme>
    </ParallaxBackground>
  );
};

export default RefinedIngredientsSection;