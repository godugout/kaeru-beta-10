
import { RitualStep } from "@/types/ritual";
import KanjiReveal from "@/components/journey/KanjiReveal";
import BreathingGuide from "@/components/ritual/BreathingGuide";
import { getStepKanji } from "@/utils/kanjiUtils";
import { StepColor } from "@/types/ritual";

interface RitualStepContentProps {
  step: RitualStep;
  activeColor: StepColor;
}

const RitualStepContent = ({ step, activeColor }: RitualStepContentProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3 text-center md:text-left">
        <div className="mb-6">
          <div className="text-xs text-white/50 mb-1">STEP {step.id}</div>
          <h5 className="text-xl text-gold mb-1">{step.title}</h5>
          <div className="flex flex-col md:flex-row md:items-end gap-2 mb-3">
            <span className="font-serif text-2xl text-white">{step.japaneseTitle}</span>
            <span className="text-sm text-white/50">({step.japaneseTranslation})</span>
          </div>
        </div>

        {/* Kanji concept visualization */}
        <div className="mb-8 flex justify-center md:justify-start">
          <div className="relative">
            <KanjiReveal 
              kanji={getStepKanji(step)} 
              isVisible={true}
              scale={0.8}
              strokeColor={activeColor.accent}
            />
          </div>
        </div>

        <div className="mb-6">
          <h6 className="text-xs tracking-wider text-white/50 uppercase mb-1">Japanese Concept</h6>
          <div className="text-white font-medium mb-1">{step.japaneseConcept}</div>
          <div className="text-sm text-white/70">{step.japaneseConceptMeaning}</div>
        </div>

        {/* Breathing visualization */}
        <BreathingGuide 
          pattern={step.breathing} 
          color={activeColor.accent} 
          initialActive={false}
        />
      </div>

      <div className="md:w-2/3">
        <div className="mb-8">
          <p className="text-lg text-white/90 leading-relaxed mb-6">{step.instruction}</p>
          <div className="bg-black/20 p-4 rounded-sm">
            <h6 className="text-xs tracking-wider text-white/50 uppercase mb-1">Physiological Benefit</h6>
            <p className="text-white/80">{step.benefit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualStepContent;
