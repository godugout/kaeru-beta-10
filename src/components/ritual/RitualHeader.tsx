
import { useState } from "react";

interface RitualHeaderProps {
  productName: string;
  stepsCount: number;
  activeStep: number;
  frogAmbassador?: {
    name: string;
    species: string;
  } | null;
  onToggleMythology: () => void;
  showMythology: boolean;
}

const RitualHeader = ({ 
  productName, 
  stepsCount, 
  activeStep, 
  frogAmbassador, 
  onToggleMythology, 
  showMythology 
}: RitualHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <h3 className="text-sm tracking-widest text-gold mb-2">APPLICATION RITUAL</h3>
      <h4 className="font-serif text-2xl md:text-3xl text-white">{productName} Journey</h4>
      
      {frogAmbassador && (
        <div className="mt-3">
          <button 
            onClick={onToggleMythology} 
            className="text-sm text-gold/80 underline-offset-4 hover:text-gold hover:underline transition-all"
          >
            {showMythology ? "Hide" : "Reveal"} the mythology of {frogAmbassador.name}, the {frogAmbassador.species}
          </button>
        </div>
      )}
    </div>
  );
};

export default RitualHeader;
