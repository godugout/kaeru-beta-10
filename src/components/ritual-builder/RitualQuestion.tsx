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
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
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
