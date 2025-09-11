
import { useState } from "react";
import { motion } from "framer-motion";
import { RitualStep } from "@/data/ritualSteps";
import MindfulTransition from "@/components/ui/japanese-elements/MindfulTransition";

interface RitualStepsGuideProps {
  steps: RitualStep[];
  productName: string;
}

const RitualStepsGuide = ({ steps, productName }: RitualStepsGuideProps) => {
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden p-6 md:p-8">
      <h3 className="font-serif text-2xl md:text-3xl text-gold mb-6">
        {productName} Ritual
      </h3>
      
      <div className="grid md:grid-cols-5 gap-6">
        {/* Step selector */}
        <div className="md:col-span-1">
          <div className="flex md:flex-col gap-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-3 text-left transition-all ${
                  activeStep === index
                    ? 'bg-gold/20 border-l-2 border-gold'
                    : 'bg-black/20 border-l-2 border-transparent hover:border-gold/40 hover:bg-black/30'
                }`}
              >
                <div className="text-xs text-gold/70 mb-1">{step.japaneseTitle}</div>
                <div className={activeStep === index ? 'text-gold' : 'text-white/70'}>
                  {step.title}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Step details */}
        <div className="md:col-span-4">
          <MindfulTransition
            isVisible={true}
            type="fade"
            speed="medium"
          >
            <div className="bg-black/20 p-6 rounded-sm border border-white/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-serif text-gold mb-1">
                    {steps[activeStep].title}
                  </h4>
                  <div className="flex items-center text-sm">
                    <span className="text-white/60">{steps[activeStep].japaneseTranslation}</span>
                    <span className="mx-2 text-white/30">•</span>
                    <span className="text-white/60">{steps[activeStep].japaneseTitle}</span>
                  </div>
                </div>
                
                <div className="text-5xl font-serif text-gold/30">
                  {activeStep + 1}/{steps.length}
                </div>
              </div>
              
              <div className="mb-8">
                <p className="text-white/80 leading-relaxed">
                  {steps[activeStep].instruction}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <h5 className="text-sm text-gold/70 mb-2">Japanese Concept</h5>
                  <div className="flex items-center mb-1">
                    <span className="text-lg font-serif text-gold mr-2">
                      {steps[activeStep].japaneseConcept}
                    </span>
                    <span className="text-white/80">
                      {steps[activeStep].japaneseConceptMeaning}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm text-gold/70 mb-2">Breathing Pattern</h5>
                  <p className="text-white/80">{steps[activeStep].breathing}</p>
                </div>
                
                <div className="md:col-span-2">
                  <h5 className="text-sm text-gold/70 mb-2">Benefit</h5>
                  <p className="text-white/80">{steps[activeStep].benefit}</p>
                </div>
              </div>
            </div>
          </MindfulTransition>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`px-4 py-2 flex items-center text-sm ${
                activeStep === 0
                  ? 'text-white/30 cursor-not-allowed'
                  : 'text-white/70 hover:text-gold'
              }`}
            >
              <span className="mr-2">←</span>
              <span>Previous</span>
            </button>
            
            <button
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className={`px-4 py-2 flex items-center text-sm ${
                activeStep === steps.length - 1
                  ? 'text-white/30 cursor-not-allowed'
                  : 'text-white/70 hover:text-gold'
              }`}
            >
              <span>Next</span>
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualStepsGuide;
