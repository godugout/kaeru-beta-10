import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const steps = [
    { number: 1, label: "Select Products" },
    { number: 2, label: "Name Ritual" },
    { number: 3, label: "Complete" }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-kaeru-stone/30 -translate-y-1/2 -z-10"></div>
        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-kaeru-gold -translate-y-1/2 -z-10"
          initial={{ width: "0%" }}
          animate={{ 
            width: currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%" 
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {steps.map((step, index) => {
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;

          return (
            <div key={step.number} className="flex flex-col items-center">
              <motion.div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold relative z-10 ${
                  isCompleted
                    ? 'bg-kaeru-gold border-kaeru-gold text-kaeru-black'
                    : isActive
                    ? 'bg-kaeru-black border-kaeru-gold text-kaeru-gold'
                    : 'bg-kaeru-black border-kaeru-stone/30 text-kaeru-stone'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  step.number
                )}
              </motion.div>
              
              <motion.span 
                className={`text-xs mt-2 font-medium ${
                  isActive ? 'text-kaeru-gold' : isCompleted ? 'text-kaeru-fog' : 'text-kaeru-stone'
                }`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
              >
                {step.label}
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;