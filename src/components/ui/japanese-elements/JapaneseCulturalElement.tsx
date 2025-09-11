
import { ReactNode } from "react";
import { Info } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface JapaneseCulturalElementProps {
  children: ReactNode;
  name: string;
  description: string;
  culturalContext: string;
  modernInterpretation?: string;
  className?: string;
}

/**
 * A wrapper component that provides cultural context for Japanese-inspired elements
 * This helps maintain cultural authenticity and respect while integrating these elements
 * into our digital experience.
 */
const JapaneseCulturalElement = ({
  children,
  name,
  description,
  culturalContext,
  modernInterpretation,
  className = "",
}: JapaneseCulturalElementProps) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  
  return (
    <div className={`relative ${className}`}>
      {/* Cultural context information button */}
      <div className="absolute top-2 right-2 z-10">
        <Popover>
          <PopoverTrigger asChild>
            <button 
              className="text-white/40 hover:text-gold/60 transition-colors p-1 rounded-full"
              aria-label={`Learn about ${name}`}
            >
              <Info size={16} />
            </button>
          </PopoverTrigger>
          <PopoverContent className="bg-black/90 border border-gold/20 text-white w-80 p-4">
            <div className="space-y-3">
              <h3 className="font-serif text-gold text-lg">{name}</h3>
              <p className="text-sm text-white/80">{description}</p>
              
              <div className="pt-2 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-wider text-gold/70 mb-1">Cultural Context</h4>
                <p className="text-xs text-white/70">{culturalContext}</p>
              </div>
              
              {modernInterpretation && (
                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-xs uppercase tracking-wider text-gold/70 mb-1">Modern Interpretation</h4>
                  <p className="text-xs text-white/70">{modernInterpretation}</p>
                </div>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
      
      {/* The actual component */}
      <div>
        {children}
      </div>
    </div>
  );
};

export default JapaneseCulturalElement;
