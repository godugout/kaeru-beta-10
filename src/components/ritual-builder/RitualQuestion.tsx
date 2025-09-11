
import { useState } from "react";
import { motion } from "framer-motion";
import { RitualQuestion as QuestionType } from "@/types/ritual-builder";
import NatureAnimation from "./animations/NatureAnimation";

interface RitualQuestionProps {
  question: QuestionType;
  onAnswer: (answer: string) => void;
}

const RitualQuestion = ({ question, onAnswer }: RitualQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleSelect = (value: string) => {
    if (isAnimating) return; // Prevent multiple submissions during animation
    
    setSelectedAnswer(value);
    setIsAnimating(true);
    
    // Give time for selection animation before proceeding
    setTimeout(() => {
      onAnswer(value);
      setIsAnimating(false);
    }, 800);
  };
  
  return (
    <div className="relative">
      {/* Japanese aesthetic decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20C40 20 60 20 80 20C80 40 80 60 80 80C60 80 40 80 20 80C20 60 20 40 20 20Z" 
                stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="mb-12 text-center relative">
        {/* Question animation */}
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-40 h-40 opacity-40 pointer-events-none">
          <NatureAnimation type={question.animation} />
        </div>
        
        {/* Japanese concept */}
        <div className="mb-2">
          <span className="font-serif text-xl text-gold">{question.japaneseConcept}</span>
        </div>
        
        {/* Main question */}
        <h2 className="text-2xl md:text-3xl font-serif mb-2">{question.text}</h2>
        
        {/* Question description */}
        <p className="text-white/70 max-w-xl mx-auto">{question.description}</p>
      </div>
      
      {/* Answer options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {question.options.map((option) => (
          <motion.button
            key={option.value}
            className={`relative bg-black/30 backdrop-blur-sm border ${
              selectedAnswer === option.value 
                ? 'border-gold' 
                : 'border-white/10 hover:border-white/30'
            } rounded-sm p-6 text-left transition-all group`}
            whileHover={{ y: -4 }}
            onClick={() => handleSelect(option.value)}
            disabled={isAnimating}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 text-lg text-gold opacity-70 group-hover:opacity-100">
                {option.emoji}
              </div>
              <div>
                <h3 className="text-lg mb-1 text-gold">{option.element}</h3>
                <p className="text-white/80 text-sm">{option.text}</p>
              </div>
            </div>
            
            {/* Selection indicator */}
            {selectedAnswer === option.value && (
              <motion.div
                className="absolute inset-0 border-2 border-gold rounded-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                layoutId="selection"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default RitualQuestion;
