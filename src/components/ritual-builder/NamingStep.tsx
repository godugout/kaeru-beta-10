import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRitualBuilderStore } from "@/stores/ritualBuilderStore";

const NamingStep = () => {
  const { ritualName, setRitualName, setCurrentStep } = useRitualBuilderStore();
  const [localName, setLocalName] = useState(ritualName);

  const handleContinue = () => {
    setRitualName(localName);
    setCurrentStep(3);
  };

  const handleSkip = () => {
    setRitualName('');
    setCurrentStep(3);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Header */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-kaeru-gold mb-4">
          Give Your Practice Meaning
        </h2>
        <p className="text-lg text-kaeru-fog/80">
          Create a name that reflects your intention
        </p>
      </motion.div>

      {/* Input Section */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Ex: Morning Warrior Recovery"
            value={localName}
            onChange={(e) => setLocalName(e.target.value)}
            className="text-xl py-4 px-6 bg-kaeru-stone/20 border-kaeru-stone/30 text-kaeru-fog placeholder:text-kaeru-fog/50 focus:border-kaeru-gold focus:ring-1 focus:ring-kaeru-gold text-center"
            maxLength={50}
          />
        </div>

        <p className="text-sm text-kaeru-fog/60 mb-2">
          This will be printed on your ritual card
        </p>
        <p className="text-xs text-kaeru-fog/50">
          {localName.length}/50 characters
        </p>
      </motion.div>

      {/* Preview Card */}
      {localName && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          <div className="bg-gradient-to-br from-kaeru-stone/30 to-kaeru-black/40 rounded-lg p-8 border border-kaeru-gold/30 backdrop-blur-sm">
            <div className="text-sm text-kaeru-fog/70 mb-3 uppercase tracking-widest">
              Ritual Card Preview
            </div>
            <div className="font-serif text-2xl md:text-3xl text-kaeru-gold italic">
              {localName}
            </div>
            <div className="w-16 h-px bg-kaeru-gold/60 mx-auto mt-4"></div>
          </div>
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button
          onClick={handleBack}
          variant="outline"
          className="border-kaeru-stone/30 text-kaeru-fog hover:bg-kaeru-stone/20"
        >
          Back to Products
        </Button>
        
        <Button
          onClick={handleSkip}
          variant="ghost"
          className="text-kaeru-fog/70 hover:text-kaeru-fog"
        >
          Skip Naming
        </Button>
        
        <Button
          onClick={handleContinue}
          className="bg-kaeru-gold hover:bg-kaeru-gold/80 text-kaeru-black font-semibold px-8"
        >
          Continue to Review
        </Button>
      </motion.div>
    </div>
  );
};

export default NamingStep;