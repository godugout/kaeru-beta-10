import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefinedIngredient } from "@/data/refinedIngredients";
import { Volume2, VolumeX, Clock, Sparkles } from "lucide-react";

interface EnhancedIngredientCardProps {
  ingredient: RefinedIngredient;
  delay?: number;
  isSearchActive?: boolean;
  searchTerm?: string;
  isSelected?: boolean;
  onFocus?: () => void;
  soundEnabled?: boolean;
  onProductHighlight?: (products: string[]) => void;
}

const tabs = [
  { id: 'cultural', label: 'Cultural', icon: '⛩️', color: '#D4AF37' },
  { id: 'mythology', label: 'Mythology', icon: '🐸', color: '#00A86B' },
  { id: 'healing', label: 'Healing', icon: '☯️', color: '#9370DB' },
  { id: 'science', label: 'Science', icon: '🧪', color: '#32CD32' },
  { id: 'kaeru', label: 'Kaeru', icon: '🌿', color: '#FF6347' }
];

const EnhancedIngredientCard = ({ 
  ingredient, 
  delay = 0, 
  isSearchActive = false,
  searchTerm = "",
  isSelected = false,
  onFocus,
  soundEnabled = false,
  onProductHighlight
}: EnhancedIngredientCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState('cultural');
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [particleAnimation, setParticleAnimation] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  // Trigger particle animation when hovering
  useEffect(() => {
    if (isHovering) {
      setParticleAnimation(true);
      const timer = setTimeout(() => setParticleAnimation(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isHovering]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    onProductHighlight?.(ingredient.productAssociations);
    
    // Play sound effect using global sound system
    if (soundEnabled && (window as any).playIngredientSound) {
      (window as any).playIngredientSound(ingredient.id);
    }
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

  const getEnhancedPatternSVG = (pattern: string) => {
    const patterns = {
      asanoha: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D4AF37' stroke-width='0.8' stroke-opacity='0.15'%3E%3Cpath d='M30 5L15 25h30z'/%3E%3Cpath d='M30 55L15 35h30z'/%3E%3Cpath d='M5 30L25 15v30z'/%3E%3Cpath d='M55 30L35 15v30z'/%3E%3Cpath d='M30 30L15 15'/%3E%3Cpath d='M30 30L45 15'/%3E%3Cpath d='M30 30L15 45'/%3E%3Cpath d='M30 30L45 45'/%3E%3C/g%3E%3C/svg%3E")`,
      seigaiha: `url("data:image/svg+xml,%3Csvg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFD700' stroke-width='1' stroke-opacity='0.12'%3E%3Cpath d='M0 40c10-15 20-15 30 0s20 15 30 0'/%3E%3Cpath d='M0 30c10-15 20-15 30 0s20 15 30 0'/%3E%3Cpath d='M0 20c10-15 20-15 30 0s20 15 30 0'/%3E%3C/g%3E%3C/svg%3E")`,
      shippo: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2332CD32' stroke-width='1' stroke-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Ccircle cx='0' cy='30' r='20'/%3E%3Ccircle cx='60' cy='30' r='20'/%3E%3Ccircle cx='30' cy='0' r='20'/%3E%3Ccircle cx='30' cy='60' r='20'/%3E%3C/g%3E%3C/svg%3E")`,
      homura: `url("data:image/svg+xml,%3Csvg width='40' height='60' viewBox='0 0 40 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF4500' fill-opacity='0.08'%3E%3Cpath d='M20 60c-3-8-8-16-3-24s12-12 12-20-3-4-8 0-12 12-16 20 0 16 3 24z'/%3E%3Cpath d='M15 50c-2-6-6-12-2-18s9-9 9-15-2-3-6 0-9 9-12 15 0 12 2 18z'/%3E%3C/g%3E%3C/svg%3E")`,
      'moon-phases': `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239370DB' fill-opacity='0.08'%3E%3Ccircle cx='40' cy='20' r='6'/%3E%3Cpath d='M40 28c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.7 0 3.2-0.7 4.3-1.7C42.9 39.7 41.5 41 40 41c-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.9 0.6 4.3 1.7C43.2 29.3 41.7 28 40 28z'/%3E%3Ccircle cx='40' cy='60' r='6' fill='none' stroke='%239370DB' stroke-width='0.8'/%3E%3Cg opacity='0.6'%3E%3Cpath d='M25 25c1-2 3-2 4 0s-1 3-2 3-3-1-2-3z'/%3E%3Cpath d='M55 35c1-2 3-2 4 0s-1 3-2 3-3-1-2-3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    };
    return patterns[pattern as keyof typeof patterns] || 'none';
  };

  const renderEnhancedParticles = () => {
    const particleCount = 12;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particleType = ingredient.decorative.particleEffect;
      let particleElement;
      
      switch (particleType) {
        case 'jade-swirls':
          particleElement = (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${ingredient.decorative.colors.particle}80, ${ingredient.decorative.colors.particle}20)`,
                left: `${15 + (i % 4) * 20}%`,
                top: `${20 + Math.floor(i / 4) * 20}%`,
              }}
              animate={{
                x: [0, 10, -5, 0],
                y: [-8, 8, -5, -8],
                opacity: [0.3, 0.8, 0.4, 0.3],
                scale: [0.5, 1.2, 0.8, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          );
          break;
        
        case 'citrus-sparkles':
          particleElement = (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: `${10 + (i % 5) * 18}%`,
                top: `${15 + Math.floor(i / 5) * 25}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2 + i * 0.1,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.3,
              }}
            >
              <Sparkles className="w-3 h-3" style={{ color: ingredient.decorative.colors.particle }} />
            </motion.div>
          );
          break;
        
        case 'forest-mist':
          particleElement = (
            <motion.div
              key={i}
              className="absolute w-3 h-1 rounded-full pointer-events-none opacity-30"
              style={{
                background: `linear-gradient(90deg, transparent, ${ingredient.decorative.colors.particle}60, transparent)`,
                left: `${5 + (i % 4) * 22}%`,
                top: `${10 + Math.floor(i / 4) * 25}%`,
              }}
              animate={{
                x: [-10, 20, -10],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.5, 0.8],
              }}
              transition={{
                duration: 6 + i * 0.4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          );
          break;
        
        case 'ember-glows':
          particleElement = (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${ingredient.decorative.colors.particle}, ${ingredient.decorative.colors.accent}40)`,
                left: `${20 + (i % 3) * 25}%`,
                top: `${60 - (i % 4) * 15}%`,
                boxShadow: `0 0 8px ${ingredient.decorative.colors.particle}60`,
              }}
              animate={{
                y: [-20, -40, -20],
                x: [0, 5, -3, 0],
                opacity: [0.8, 0.3, 0.8],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.4,
              }}
            />
          );
          break;
        
        case 'dream-smoke':
          particleElement = (
            <motion.div
              key={i}
              className="absolute pointer-events-none opacity-40"
              style={{
                left: `${15 + (i % 4) * 20}%`,
                top: `${50 - (i % 3) * 20}%`,
              }}
              animate={{
                y: [-5, -25, -5],
                x: [0, 8, -4, 0],
                opacity: [0.2, 0.6, 0.1, 0.2],
                scale: [0.5, 1.5, 0.5],
                rotate: [0, 15, -10, 0],
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <div 
                className="w-2 h-4 rounded-full"
                style={{
                  background: `linear-gradient(180deg, ${ingredient.decorative.colors.particle}60, transparent)`,
                }}
              />
            </motion.div>
          );
          break;
        
        default:
          particleElement = (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/40 rounded-full pointer-events-none"
              style={{
                left: `${20 + (i % 4) * 15}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          );
      }
      
      particles.push(particleElement);
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
      className={`ingredient-card relative w-full max-w-[350px] h-[500px] mx-auto focus:outline-none group ${
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
      aria-label={`${ingredient.name} ingredient card. ${ingredient.subtitle}. Press Enter to explore details.`}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Hidden audio element for sound effects */}
      {soundEnabled && (
        <audio 
          ref={audioRef} 
          preload="none"
          data-sound={ingredient.decorative.soundEffect}
        >
          {/* Audio sources would be loaded dynamically */}
        </audio>
      )}

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
          y: -12,
          scale: 1.03,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        aria-expanded={isFlipped}
        aria-describedby={`ingredient-${ingredient.id}-description`}
      >
        {/* Front Face */}
        <motion.div 
          className="card-front absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-2xl"
          style={{ 
            backfaceVisibility: 'hidden',
            background: `linear-gradient(135deg, #0a0a0a 0%, ${ingredient.decorative.colors.primary}20 50%, #0a0a0a 100%)`,
          }}
          animate={{
            y: [0, -8, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Enhanced Decorative Pattern Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              backgroundImage: getEnhancedPatternSVG(ingredient.decorative.pattern),
              backgroundSize: '60px 60px',
              backgroundRepeat: 'repeat'
            }}
          />
          
          {/* Dynamic Border Glow */}
          <motion.div 
            className="absolute inset-0 rounded-xl border-2"
            style={{ 
              borderColor: ingredient.decorative.colors.accent,
            }}
            animate={{
              boxShadow: [
                `0 0 20px ${ingredient.decorative.colors.accent}30`,
                `0 0 30px ${ingredient.decorative.colors.accent}50`,
                `0 0 20px ${ingredient.decorative.colors.accent}30`
              ],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
            {/* Sacred Symbol */}
            <motion.div 
              className="absolute top-6 right-6 text-3xl opacity-60"
              style={{ color: ingredient.decorative.colors.accent }}
              animate={{ 
                rotate: [0, 5, -5, 0],
                transition: { duration: 8, repeat: Infinity }
              }}
            >
              {ingredient.decorative.symbol}
            </motion.div>

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
              className="ingredient-name text-3xl font-serif text-white mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: delay * 0.1 + 0.4, duration: 0.5 }}
            >
              {ingredient.name}
            </motion.h3>

            {/* Subtitle */}
            <motion.p 
              className="ingredient-subtitle text-sm tracking-widest mb-6 opacity-80 italic"
              style={{ color: ingredient.decorative.colors.accent }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ delay: delay * 0.1 + 0.5, duration: 0.5 }}
            >
              {ingredient.subtitle}
            </motion.p>

            {/* Ritual Activation */}
            <motion.div 
              className="flex items-center gap-2 text-xs text-white/60 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay * 0.1 + 0.6, duration: 0.5 }}
            >
              <Clock className="w-3 h-3" />
              <span>{ingredient.ritualActivation.time}: {ingredient.ritualActivation.method}</span>
            </motion.div>

            {/* Enhanced Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {renderEnhancedParticles()}
            </div>

            {/* Interactive Flip Indicator */}
            <motion.div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gold/50 text-xs tracking-wider flex items-center gap-2"
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                y: [0, -2, 0],
                transition: { duration: 2.5, repeat: Infinity }
              }}
            >
              <Sparkles className="w-3 h-3" />
              <span>DISCOVER SACRED WISDOM</span>
              <Sparkles className="w-3 h-3" />
            </motion.div>
          </div>
        </motion.div>

        {/* Back Face - Enhanced */}
        <motion.div 
          className="card-back absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-2xl"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, #0a0a0a 0%, ${ingredient.decorative.colors.primary}15 100%)`
          }}
        >
          <div className="h-full flex flex-col p-6 relative">
            {/* Subtle pattern overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{ 
                backgroundImage: getEnhancedPatternSVG(ingredient.decorative.pattern),
                backgroundSize: '80px 80px',
              }}
            />

            {/* Header */}
            <div className="text-center border-b border-gold/20 pb-4 mb-4 relative z-10">
              <h4 className="text-lg font-serif text-gold">{ingredient.name}</h4>
              <p className="text-gold/70 text-sm">{ingredient.kanji} - {ingredient.subtitle}</p>
            </div>

            {/* Enhanced Tab Navigation */}
            <div className="info-tabs flex flex-wrap justify-center gap-1 mb-4 relative z-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-3 py-2 text-xs rounded-md border transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                    activeTab === tab.id
                      ? 'text-kaeru-black border-2 transform scale-105'
                      : 'bg-transparent text-gold/70 border-gold/30 hover:border-gold/50 focus:border-gold focus:outline-none hover:scale-102'
                  }`}
                  style={{
                    backgroundColor: activeTab === tab.id ? tab.color : 'transparent',
                    borderColor: activeTab === tab.id ? tab.color : undefined
                  }}
                  onClick={(e) => handleTabClick(tab.id, e)}
                  aria-pressed={activeTab === tab.id}
                  aria-label={`View ${tab.label} information for ${ingredient.name}`}
                >
                  <span className="mr-1" aria-hidden="true">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Enhanced Tab Content */}
            <div 
              className="tab-content flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gold/30 relative z-10"
              id={`ingredient-${ingredient.id}-description`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="text-white/90 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {tabContent[activeTab as keyof typeof tabContent]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Enhanced Product Associations */}
            <div className="found-in border-t border-gold/20 pt-3 mt-4 relative z-10">
              <p className="text-gold/60 text-xs text-center mb-2">Found in these sacred formulations:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {ingredient.productAssociations.map((product, index) => (
                  <motion.span
                    key={product}
                    className="px-2 py-1 bg-gold/20 text-gold/80 text-xs rounded-md border border-gold/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.3)' }}
                  >
                    {product}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EnhancedIngredientCard;