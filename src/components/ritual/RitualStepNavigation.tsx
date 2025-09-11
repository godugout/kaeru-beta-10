
import { ArrowLeft, ArrowRight } from "lucide-react";

interface RitualStepNavigationProps {
  stepsCount: number;
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const RitualStepNavigation = ({ 
  stepsCount, 
  activeStep, 
  setActiveStep 
}: RitualStepNavigationProps) => {
  const prevStep = () => {
    const newStep = (activeStep - 1 + stepsCount) % stepsCount;
    setActiveStep(newStep);
  };

  const nextStep = () => {
    const newStep = (activeStep + 1) % stepsCount;
    setActiveStep(newStep);
  };

  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={prevStep}
        className="bg-transparent border border-white/20 text-white/70 hover:bg-white/10 transition-all px-4 py-2 rounded-sm flex items-center"
        aria-label="Previous step"
      >
        <ArrowLeft size={16} className="mr-2" />
        <span>Previous</span>
      </button>
      
      <div className="flex space-x-2 items-center">
        {Array.from({ length: stepsCount }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === activeStep ? "bg-gold" : "bg-white/30"
            }`}
            aria-label={`Go to step ${idx + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={nextStep}
        className="bg-transparent border border-white/20 text-white/70 hover:bg-white/10 transition-all px-4 py-2 rounded-sm flex items-center"
        aria-label="Next step"
      >
        <span>Next</span>
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
};

export default RitualStepNavigation;
