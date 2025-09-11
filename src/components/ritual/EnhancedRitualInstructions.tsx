
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { JapaneseHeading } from "@/components/ui/japanese/Typography";
import { RitualStep } from "@/types/ritual";
import BreathingVisualization from "@/components/ritual/BreathingVisualization";

interface EnhancedRitualInstructionsProps {
  steps: RitualStep[];
  productName: string;
}

const EnhancedRitualInstructions = ({ steps, productName }: EnhancedRitualInstructionsProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  
  // Colors for each step
  const stepColors = [
    { primary: "#c9b06f", secondary: "#6f0b0e10" },
    { primary: "#b08c6f", secondary: "#0e416f10" },
    { primary: "#736fb0", secondary: "#6f280e10" },
    { primary: "#6fa3b0", secondary: "#6f0e6710" },
    { primary: "#96b06f", secondary: "#3d0e6f10" }
  ];
  
  // Reset breathing animation when active step changes
  useEffect(() => {
    setIsBreathingActive(false);
    const timer = setTimeout(() => setIsBreathingActive(true), 500);
    return () => clearTimeout(timer);
  }, [activeStep]);
  
  const nextStep = () => setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setActiveStep(prev => Math.max(prev - 1, 0));
  
  const currentStep = steps[activeStep];
  const currentColor = stepColors[activeStep % stepColors.length];
  
  // Progress indicator percentages
  const progress = ((activeStep + 1) / steps.length) * 100;
  
  return (
    <div className="relative pb-12 pt-8">
      {/* Product Name and Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex justify-between items-center mb-2">
          <JapaneseHeading>
            {productName} Ritual
          </JapaneseHeading>
          <div className="text-sm text-white/70">
            Step {activeStep + 1} of {steps.length}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-black/30 relative rounded-full overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full"
            style={{ backgroundColor: currentColor.primary }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div 
        className="max-w-4xl mx-auto px-4 py-8 rounded-sm border border-white/10"
        style={{ backgroundColor: currentColor.secondary }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Left Side - Instruction and Breathing */}
            <div className="space-y-6">
              {/* Step Title and Japanese Term */}
              <div className="space-y-2">
                <div className="text-xs text-white/50 uppercase">Step {activeStep + 1}</div>
                <h3 className="text-2xl font-serif" style={{ color: currentColor.primary }}>
                  {currentStep.title}
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-xl text-white/90 font-serif">
                    {currentStep.japaneseTitle}
                  </span>
                  <span className="text-sm text-white/60">
                    ({currentStep.japaneseTranslation})
                  </span>
                </div>
              </div>
              
              {/* Instructions */}
              <div>
                <p className="text-white/80 leading-relaxed">
                  {currentStep.instruction}
                </p>
              </div>
              
              {/* Japanese Concept */}
              <div className="bg-black/20 p-4 rounded-sm">
                <h4 className="text-sm font-medium mb-2" style={{ color: currentColor.primary }}>
                  Japanese Concept
                </h4>
                <div className="flex items-baseline space-x-2 mb-1">
                  <span className="text-lg text-white/90 font-serif">
                    {currentStep.japaneseConcept}
                  </span>
                  <span className="text-sm text-white/70">
                    {currentStep.japaneseConceptMeaning}
                  </span>
                </div>
              </div>
              
              {/* Benefit */}
              <div>
                <h4 className="text-sm text-white/50 uppercase mb-1">
                  Benefit
                </h4>
                <p className="text-white/80 text-sm">
                  {currentStep.benefit}
                </p>
              </div>
            </div>
            
            {/* Right Side - Breathing Pattern */}
            <div className="flex flex-col justify-center items-center">
              <div className="mb-4 text-center">
                <h4 className="text-sm text-white/50 uppercase mb-2">
                  Breathing Pattern
                </h4>
                <p className="text-lg text-white/90 font-serif">
                  {currentStep.breathing}
                </p>
              </div>
              
              <div className="w-full h-56 relative flex items-center justify-center">
                <BreathingVisualization 
                  pattern={currentStep.breathing}
                  isActive={isBreathingActive}
                  color={currentColor.primary}
                />
              </div>
              
              <button
                className="mt-4 px-4 py-2 bg-black/30 border border-white/10 text-white/80 text-sm rounded-sm hover:bg-black/50 transition-colors"
                onClick={() => setIsBreathingActive(!isBreathingActive)}
              >
                {isBreathingActive ? "Pause Breathing" : "Start Breathing"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Controls */}
      <div className="max-w-4xl mx-auto px-4 mt-8 flex justify-between">
        <button
          onClick={prevStep}
          disabled={activeStep === 0}
          className={`flex items-center space-x-2 ${
            activeStep === 0 ? 'opacity-50 cursor-not-allowed' : 'text-white/80 hover:text-white'
          }`}
        >
          <ChevronLeft size={16} />
          <span>Previous</span>
        </button>
        
        <div className="flex space-x-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`w-2 h-2 rounded-full ${
                i === activeStep 
                  ? 'bg-gold' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextStep}
          disabled={activeStep === steps.length - 1}
          className={`flex items-center space-x-2 ${
            activeStep === steps.length - 1 
              ? 'opacity-50 cursor-not-allowed' 
              : 'text-white/80 hover:text-white'
          }`}
        >
          <span>Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default EnhancedRitualInstructions;
