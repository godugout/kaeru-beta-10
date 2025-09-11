
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import MindfulTransition from "@/components/ui/japanese-elements/MindfulTransition";

export interface JourneyCardProps {
  title: string;
  inspiration: string;
  description: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
  color: string;
  symbol: string;
}

const JourneyCard = ({
  title,
  inspiration,
  description,
  index,
  isActive,
  onClick,
  color,
  symbol,
}: JourneyCardProps) => {
  return (
    <MindfulTransition
      type="scale"
      speed="medium"
      delay={index * 0.1}
      mobileOptimized={true}
      className={cn(
        "relative border border-white/10 bg-black/30 backdrop-blur-sm p-6 h-full rounded-sm transition-all duration-500",
        isActive ? "border-gold/50 shadow-lg shadow-gold/5" : "hover:border-white/20"
      )}
      onComplete={() => {}}
    >
      <div
        onClick={onClick}
        className="h-full flex flex-col cursor-pointer"
      >
        {/* Japanese Symbol */}
        <div className="absolute -right-4 -top-4 text-6xl font-serif text-gold/10 select-none pointer-events-none">
          {symbol}
        </div>
        
        <div className="mb-2 text-gold/70 text-sm">Inspired by</div>
        <h4 className="text-lg font-medium text-gold mb-2">{inspiration}</h4>
        <h3 className="text-xl md:text-2xl font-serif text-white mb-3">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        
        <div className="mt-auto">
          <button className="flex items-center text-gold hover:text-gold/80 transition-colors group">
            <span>Enter the Practice</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Gradient background */}
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${color} opacity-30 rounded-sm`}></div>
      </div>
    </MindfulTransition>
  );
};

export default JourneyCard;
