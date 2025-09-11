
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { frogAmbassadors } from "@/data/frogAmbassadors";
import WaterRippleEffect from "@/components/journey/WaterRippleEffect";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import { RitualStep } from "@/data/ritualSteps";
import RitualHeader from "@/components/ritual/RitualHeader";
import FrogAmbassadorCard from "@/components/ritual/FrogAmbassadorCard";
import RitualStepContent from "@/components/ritual/RitualStepContent";
import RitualStepNavigation from "@/components/ritual/RitualStepNavigation";
import useRitualColors from "@/hooks/useRitualColors";
import useRitualTracking from "@/hooks/useRitualTracking";

interface RitualInstructionsProps {
  productName: string;
  steps: RitualStep[];
}

const RitualInstructions = ({ productName, steps }: RitualInstructionsProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [showMythology, setShowMythology] = useState(false);
  const [breathingActive, setBreathingActive] = useState(false);
  const { shouldAnimate } = useOptimizedAnimation();
  const stepColors = useRitualColors();
  
  // Track step views
  useRitualTracking({ productName, steps, activeStep });
  
  // Find the associated frog ambassador
  const frogAmbassador = frogAmbassadors.find(frog => 
    productName.toUpperCase().includes(frog.collection.toUpperCase().split(" ")[0]) ||
    frog.name.toUpperCase() === productName.toUpperCase()
  );
  
  // Handle breathing animation
  useEffect(() => {
    if (!shouldAnimate) return;
    
    setBreathingActive(true);
    const timeout = setTimeout(() => setBreathingActive(false), 10000); // Stop breathing animation after 10s
    
    return () => clearTimeout(timeout);
  }, [activeStep, shouldAnimate]);

  const currentColor = stepColors[activeStep % stepColors.length];
  const currentBreathingPattern = steps[activeStep]?.breathing || "4-4-4";

  return (
    <div className="py-6 md:py-12 px-4 relative overflow-hidden">
      {/* Background ripple effect */}
      <div className="absolute inset-0 opacity-50 z-0">
        <WaterRippleEffect 
          interactionMode={breathingActive ? "breathing" : "static"}
          breathingPattern={currentBreathingPattern}
          color={currentColor.ripple as any}
          intensity="low"
        />
      </div>
      
      <div className="relative z-10">
        {/* Header section with product name and frog ambassador */}
        <RitualHeader 
          productName={productName}
          stepsCount={steps.length}
          activeStep={activeStep}
          frogAmbassador={frogAmbassador}
          onToggleMythology={() => setShowMythology(!showMythology)}
          showMythology={showMythology}
        />

        {/* Mythology Panel */}
        {frogAmbassador && (
          <FrogAmbassadorCard 
            frogAmbassador={frogAmbassador}
            showMythology={showMythology}
          />
        )}

        <div className="relative min-h-[300px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-black/30 backdrop-blur-sm border border-white/5 p-6 md:p-10 rounded-sm"
              style={{ backgroundColor: currentColor.bg }}
            >
              <RitualStepContent 
                step={steps[activeStep]} 
                activeColor={currentColor} 
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <RitualStepNavigation 
            stepsCount={steps.length}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>
      </div>
    </div>
  );
};

export default RitualInstructions;
