import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefinedIngredient } from "@/data/refinedIngredients";

interface RefinedIngredientCardProps {
  ingredient: RefinedIngredient;
  delay?: number;
  isSearchActive?: boolean;
  searchTerm?: string;
  isSelected?: boolean;
  onFocus?: () => void;
}

const tabs = [
  { id: 'cultural', label: 'Cultural', icon: '⛩️' },
  { id: 'mythology', label: 'Mythology', icon: '🐸' },
  { id: 'healing', label: 'Healing', icon: '☯️' },
  { id: 'science', label: 'Science', icon: '🧪' },
  { id: 'kaeru', label: 'Kaeru', icon: '🌿' }
];

const RefinedIngredientCard = ({ 
  ingredient, 
  delay = 0, 
  isSearchActive = false,
  searchTerm = "",
  isSelected = false,
  onFocus
}: RefinedIngredientCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState('cultural');
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  // Handle keyboard focus
  useEffect(() => {
    if (isSelected && cardRef.current) {
      cardRef.current.focus();
      onFocus?.();
    }
  }, [isSelected, onFocus]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    } else if (event.key === 'Escape' && isFlipped) {
      event.preventDefault();
      setIsFlipped(false);
    }
  };

  const handleTabClick = (tabId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveTab(tabId);
  };

  const getPatternSVG = (pattern: string) => {
    switch (pattern) {
      case 'asanoha':
        return `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M30 30L15 15h30l-15 15z'/%3E%3Cpath d='M30 30L45 45H15l15-15z'/%3E%3Cpath d='M30 30L15 45V15l15 15z'/%3E%3Cpath d='M30 30L45 15v30l-15-15z'/%3E%3C/g%3E%3C/svg%3E")`;
      case 'seigaiha':
        return `url("data:image/svg+xml,%3Csvg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D4AF37' stroke-width='1' stroke-opacity='0.1'%3E%3Cpath d='M0 40c20-20 40-20 60 0'/%3E%3Cpath d='M20 40c20-20 40-20 60 0'/%3E%3Cpath d='M40 40c20-20 40-20 60 0'/%3E%3C/g%3E%3C/svg%3E")`;
      case 'shippo':
        return `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D4AF37' stroke-width='1' stroke-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='15'/%3E%3Ccircle cx='0' cy='30' r='15'/%3E%3Ccircle cx='60' cy='30' r='15'/%3E%3Ccircle cx='30' cy='0' r='15'/%3E%3Ccircle cx='30' cy='60' r='15'/%3E%3C/g%3E%3C/svg%3E")`;
      case 'homura':
        return `url("data:image/svg+xml,%3Csvg width='40' height='60' viewBox='0 0 40 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF4500' fill-opacity='0.1'%3E%3Cpath d='M20 60c-5-10-10-20-5-30s15-15 15-25-5-5-10 0-15 15-20 25 0 20 5 30z'/%3E%3C/g%3E%3C/svg%3E")`;
      case 'moon-phases':
        return `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.08'%3E%3Ccircle cx='40' cy='20' r='8'/%3E%3Cpath d='M40 28c-4.4 0-8 3.6-8 8s3.6 8 8 8c2.2 0 4.2-0.9 5.7-2.3C43.9 43.3 42 45 40 45c-4.4 0-8-3.6-8-8s3.6-8 8-8c2 0 3.9 0.7 5.7 2.3C44.2 28.9 42.2 28 40 28z'/%3E%3Ccircle cx='40' cy='60' r='8' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`;
      default:
        return 'none';
    }
  };

  const renderParticles = () => {
    const particleCount = 8;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            background: ingredient.decorative.colors.particle,
            left: `${15 + (i % 4) * 20}%`,
            top: `${20 + Math.floor(i / 4) * 40}%`,
          }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      );
    }
    
    return particles;
  };

  const tabContent = {
    cultural: ingredient.cultural,
    mythology: ingredient.mythology,
    healing: ingredient.healing,
    science: ingredient.science,
    kaeru: ingredient.kaeru
  };

  return (
    <motion.div
      ref={cardRef}
      className={`ingredient-card relative w-full max-w-[350px] h-[500px] mx-auto focus:outline-none ${
        isSelected ? 'ring-2 ring-gold ring-offset-2 ring-offset-kaeru-black' : ''
      }`}
      style={{ perspective: '1000px' }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 50,
        scale: isVisible ? 1 : 0.9
      }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay * 0.1
      }}
      tabIndex={0}
      role="button"
      aria-label={`${ingredient.name} ingredient card. Press Enter to explore details.`}
      onKeyDown={handleKeyDown}
    >
        <motion.div
          className="card-inner relative w-full h-full cursor-pointer focus:outline-none"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ 
            duration: 0.6, 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          onClick={handleCardClick}
          whileHover={{ 
            y: -10,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }}
          aria-expanded={isFlipped}
          aria-describedby={`ingredient-${ingredient.id}-description`}
        >
        {/* Front Face */}
        <motion.div 
          className="card-front absolute inset-0 w-full h-full rounded-xl overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            background: `linear-gradient(135deg, #0a0a0a 0%, ${ingredient.decorative.colors.primary}20 100%)`,
            borderImage: getPatternSVG(ingredient.decorative.pattern),
          }}
          animate={{
            y: [0, -5, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Decorative Pattern Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              backgroundImage: getPatternSVG(ingredient.decorative.pattern),
              backgroundSize: '60px 60px',
              backgroundRepeat: 'repeat'
            }}
          />
          
          {/* Border Glow */}
          <div 
            className="absolute inset-0 rounded-xl border-2 opacity-30"
            style={{ 
              borderColor: ingredient.decorative.colors.accent,
              boxShadow: `0 0 20px ${ingredient.decorative.colors.accent}40`
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
            {/* Japanese Kanji */}
            <motion.div 
              className="japanese-symbol text-8xl font-serif mb-6 opacity-90"
              style={{ color: ingredient.decorative.colors.accent }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ delay: delay * 0.1 + 0.3, duration: 0.5 }}
            >
              {ingredient.kanji}
            </motion.div>

            {/* English Name */}
            <motion.h3 
              className="ingredient-name text-2xl font-serif text-white mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: delay * 0.1 + 0.4, duration: 0.5 }}
            >
              {ingredient.name}
            </motion.h3>

            {/* Subtitle */}
            <motion.p 
              className="ingredient-subtitle text-sm tracking-widest mb-8 opacity-80"
              style={{ color: ingredient.decorative.colors.accent }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ delay: delay * 0.1 + 0.5, duration: 0.5 }}
            >
              {ingredient.subtitle}
            </motion.p>

            {/* Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {renderParticles()}
            </div>

            {/* Flip Indicator */}
            <motion.div 
              className="absolute bottom-6 text-gold/50 text-xs tracking-wider"
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              TAP TO EXPLORE WISDOM
            </motion.div>
          </div>
        </motion.div>

        {/* Back Face */}
        <motion.div 
          className="card-back absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-kaeru-black via-moss-green/10 to-kaeru-black border border-gold/30"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full flex flex-col p-6">
            {/* Header */}
            <div className="text-center border-b border-gold/20 pb-4 mb-4">
              <h4 className="text-lg font-serif text-gold">{ingredient.name}</h4>
              <p className="text-gold/70 text-sm">{ingredient.kanji} - {ingredient.subtitle}</p>
            </div>

            {/* Tab Navigation */}
            <div className="info-tabs flex flex-wrap justify-center gap-1 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-3 py-2 text-xs rounded-md border transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                    activeTab === tab.id
                      ? 'bg-gold text-kaeru-black border-gold'
                      : 'bg-transparent text-gold/70 border-gold/30 hover:border-gold/50 focus:border-gold focus:outline-none'
                  }`}
                  onClick={(e) => handleTabClick(tab.id, e)}
                  aria-pressed={activeTab === tab.id}
                  aria-label={`View ${tab.label} information for ${ingredient.name}`}
                >
                  <span className="mr-1" aria-hidden="true">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div 
              className="tab-content flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gold/30"
              id={`ingredient-${ingredient.id}-description`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  className="text-white/90 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {tabContent[activeTab as keyof typeof tabContent]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Product Associations */}
            <div className="found-in border-t border-gold/20 pt-3 mt-4">
              <p className="text-gold/60 text-xs text-center">
                Found in: {ingredient.productAssociations.join(" • ")}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RefinedIngredientCard;