import { motion } from "framer-motion";
import { useEffect } from "react";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import Footer from "@/components/ui/footer";
import ProgressBar from "@/components/ritual-builder/ProgressBar";
import ProductSelectionStep from "@/components/ritual-builder/ProductSelectionStep";
import NamingStep from "@/components/ritual-builder/NamingStep";
import ReviewStep from "@/components/ritual-builder/ReviewStep";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useRitualBuilderStore } from "@/stores/ritualBuilderStore";
import { useRitualBuilderTest } from "@/components/testing/ABTestingProvider";
import { trackRitualBuilderStep } from "@/utils/analytics";

const RitualBuilder = () => {
  const scrollPosition = useScrollPosition();
  const { currentStep } = useRitualBuilderStore();
  const { stepCount } = useRitualBuilderTest();

  const renderCurrentStep = () => {
    if (stepCount === 2) {
      // 2-step flow: Product Selection -> Review
      switch (currentStep) {
        case 1:
          return <ProductSelectionStep />;
        case 2:
          return <ReviewStep />;
        default:
          return <ProductSelectionStep />;
      }
    }
    
    // 3-step flow: Product Selection -> Naming -> Review  
    switch (currentStep) {
      case 1:
        return <ProductSelectionStep />;
      case 2:
        return <NamingStep />;
      case 3:
        return <ReviewStep />;
      default:
        return <ProductSelectionStep />;
    }
  };

  useEffect(() => {
    // Track ritual builder step views
    trackRitualBuilderStep(currentStep, `step_${currentStep}`);
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-kaeru-black">
      <EnhancedNavigation scrollPosition={scrollPosition} />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Progress Bar */}
          <motion.div
            className="pt-8 pb-8 md:pb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProgressBar currentStep={currentStep} totalSteps={stepCount} />
          </motion.div>

          {/* Step Content - Stacks vertically on mobile */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-stack space-y-6"
          >
            {renderCurrentStep()}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RitualBuilder;