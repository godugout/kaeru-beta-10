
import { useState } from "react";
import { motion } from "framer-motion";
import MindfulTransition from "@/components/ui/japanese-elements/MindfulTransition";

interface FrogAmbassadorProps {
  name: string;
  species: string;
  collection: string;
  origin: string;
  power: string;
  ritual: string;
  visualDescription: string;
  haiku: string;
}

const FrogAmbassador = ({
  name,
  species,
  collection,
  origin,
  power,
  ritual,
  visualDescription,
  haiku
}: FrogAmbassadorProps) => {
  const [activeTab, setActiveTab] = useState<'origin' | 'power' | 'ritual' | 'visual'>('origin');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const tabs = [
    { id: 'origin', label: 'Origin' },
    { id: 'power', label: 'Power' },
    { id: 'ritual', label: 'Ritual' },
    { id: 'visual', label: 'Visual' }
  ] as const;
  
  return (
    <div className="relative bg-black/40 border border-gold/20 rounded-sm overflow-hidden backdrop-blur-sm">
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="font-serif text-2xl md:text-3xl text-gold">{name}</h3>
          <div className="flex flex-col md:flex-row md:items-center text-sm text-white/70 mt-1 space-y-1 md:space-y-0">
            <span>{species}</span>
            <span className="hidden md:block mx-2">•</span>
            <span>{collection}</span>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gold/20 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm transition-colors ${
                activeTab === tab.id
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="min-h-[200px]">
          <MindfulTransition isVisible={activeTab === 'origin'} speed="medium">
            {activeTab === 'origin' && (
              <div className="prose prose-sm prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed">
                  {isExpanded ? origin : origin.substring(0, 150) + (origin.length > 150 ? '...' : '')}
                </p>
                {origin.length > 150 && (
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-gold text-sm hover:text-gold/80 mt-2"
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>
            )}
          </MindfulTransition>
          
          <MindfulTransition isVisible={activeTab === 'power'} speed="medium">
            {activeTab === 'power' && (
              <div className="prose prose-sm prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed">{power}</p>
              </div>
            )}
          </MindfulTransition>
          
          <MindfulTransition isVisible={activeTab === 'ritual'} speed="medium">
            {activeTab === 'ritual' && (
              <div className="prose prose-sm prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed">{ritual}</p>
              </div>
            )}
          </MindfulTransition>
          
          <MindfulTransition isVisible={activeTab === 'visual'} speed="medium">
            {activeTab === 'visual' && (
              <div className="prose prose-sm prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed">{visualDescription}</p>
                <div className="mt-6 pb-2 border-l-2 border-gold/30 pl-4 italic">
                  {haiku.split('\n').map((line, i) => (
                    <p key={i} className="my-1 text-white/70">{line}</p>
                  ))}
                </div>
              </div>
            )}
          </MindfulTransition>
        </div>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0"></div>
    </div>
  );
};

export default FrogAmbassador;
