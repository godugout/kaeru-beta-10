import { useState } from "react";
import { motion } from "framer-motion";
import { RitualQuestion as QuestionType } from "@/types/ritual-builder";

interface RitualQuestionProps {
  question: QuestionType;
  onAnswer: (answer: string) => void;
}

const RitualQuestion = ({ question, onAnswer }: RitualQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleSelect = (value: string) => {
    if (isAnimating) return;
    
    setSelectedAnswer(value);
    setIsAnimating(true);
    
    setTimeout(() => {
      onAnswer(value);
      setIsAnimating(false);
    }, 800);
  };
  
  // Map option values to unique background images
  const getBackgroundImage = (value: string): string => {
    const backgrounds: Record<string, string> = {
      // Nature elements
      mountain: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // Mountain peaks
      river: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80", // Flowing river
      forest: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80", // Dense forest
      field: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", // Open field
      
      // Time of day
      dawn: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80", // Sunrise
      day: "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800&q=80", // Bright daylight
      dusk: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&q=80", // Sunset
      night: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80", // Starry night
      
      // Elements
      fire: "https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?w=800&q=80", // Fire/flames
      water: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80", // Water
      earth: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80", // Earth/rocks
      air: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", // Sky/clouds
      
      // Five elements
      wood: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", // Growing plants
      metal: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // Metallic mountains
      
      // Balance elements
      stillness: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // Still mountain lake
      movement: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80", // Flowing water
      structure: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80", // Forest structure
      spontaneity: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", // Open field
      
      // Qualities
      persistence: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // Mountains
      adaptability: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80", // Water
      clarity: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80", // Clear sky
      compassion: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80", // Soft nature
    };
    
    return backgrounds[value] || "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80";
  };
  
  return (
    <div className="relative">
      {/* Question header */}
      <motion.div 
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Japanese concept with large kanji */}
        <div className="mb-8">
          <div className="text-7xl md:text-8xl font-serif text-kaeru-gold/80 mb-4">
            {question.japaneseConcept}
          </div>
          <span className="text-sm tracking-widest text-kaeru-gold/60 uppercase">
            {question.conceptMeaning}
          </span>
        </div>
        
        {/* Main question */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-kaeru-fog mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
          {question.text}
        </h2>
        
        {/* Question description */}
        <p className="text-lg text-kaeru-fog/60 max-w-2xl mx-auto italic">
          {question.description}
        </p>
      </motion.div>
      
      {/* Answer options - Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {question.options.map((option, index) => (
          <motion.button
            key={option.value}
            className="relative group overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleSelect(option.value)}
            disabled={isAnimating}
          >
            {/* Background image with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-kaeru-jade/20 via-kaeru-moss/30 to-kaeru-black/90" />
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500" 
              style={{ backgroundImage: `url('${getBackgroundImage(option.value)}')` }}
            />
            
            {/* Selection glow */}
            {selectedAnswer === option.value && (
              <motion.div
                className="absolute inset-0 border-2 border-kaeru-gold bg-kaeru-gold/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                layoutId="selection"
              />
            )}
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 text-left h-full min-h-[280px] flex flex-col justify-between">
              {/* Emoji and element name */}
              <div>
                <div className="text-5xl md:text-6xl mb-4 filter drop-shadow-lg">
                  {option.emoji}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-kaeru-fog mb-3 tracking-tight">
                  {option.element}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-base text-kaeru-fog/80 leading-relaxed">
                {option.text}
              </p>
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 border border-kaeru-gold/0 group-hover:border-kaeru-gold/50 transition-all duration-300 rounded-lg pointer-events-none" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default RitualQuestion;
