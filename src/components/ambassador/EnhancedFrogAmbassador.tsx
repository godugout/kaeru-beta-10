
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FrogAmbassadorDetail } from "@/types/frogAmbassador";
import FrogTransformationSequence from "@/components/frog-ambassador/FrogTransformationSequence";

interface EnhancedFrogAmbassadorProps {
  frog: FrogAmbassadorDetail;
  productName: string;
}

const EnhancedFrogAmbassador = ({ frog, productName }: EnhancedFrogAmbassadorProps) => {
  const [activeSection, setActiveSection] = useState<'mythology' | 'powers' | 'ritual' | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleSection = (section: 'mythology' | 'powers' | 'ritual') => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  // Animation variants
  const containerVariants = {
    collapsed: { height: '240px', overflow: 'hidden' },
    expanded: { height: 'auto', overflow: 'visible' }
  };
  
  const sectionVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.4 } }
  };
  
  return (
    <motion.div 
      className="bg-black/40 backdrop-blur-md border border-gold/20 rounded-sm overflow-hidden"
      variants={containerVariants}
      animate={isExpanded ? 'expanded' : 'collapsed'}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="p-6">
        {/* Ambassador Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-serif text-2xl text-gold">{frog.name}</h3>
            <p className="text-white/70 text-sm">{frog.species} • Guardian of {productName}</p>
          </div>
          <div 
            className="w-16 h-16 bg-black/20 rounded-full overflow-hidden border border-gold/10"
            style={{ backgroundColor: `${frog.mainColor}10` }}
          >
            <FrogTransformationSequence frog={frog} color={frog.mainColor} />
          </div>
        </div>

        {/* Japanese Symbol and Name */}
        <div className="flex items-center mb-6 space-x-4">
          <div className="text-3xl font-serif text-gold/80">{frog.symbol}</div>
          <div>
            <span className="text-white/80 text-sm">{frog.japaneseName}</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="space-y-4">
          {/* Mythology Section */}
          <div className="border-b border-gold/10 pb-4">
            <button 
              onClick={() => toggleSection('mythology')}
              className="w-full flex justify-between items-center text-left"
            >
              <h4 className="text-gold/90 font-medium">Origin & Mythology</h4>
              {activeSection === 'mythology' ? 
                <ChevronUp size={18} className="text-gold/70" /> : 
                <ChevronDown size={18} className="text-gold/70" />
              }
            </button>
            <AnimatePresence>
              {activeSection === 'mythology' && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sectionVariants}
                >
                  <p className="text-white/70 mt-3 text-sm leading-relaxed">
                    {frog.origin}
                  </p>
                  <div className="mt-2 pt-2 border-t border-white/5 text-white/50 italic text-sm">
                    {frog.haiku}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Powers Section */}
          <div className="border-b border-gold/10 pb-4">
            <button 
              onClick={() => toggleSection('powers')}
              className="w-full flex justify-between items-center text-left"
            >
              <h4 className="text-gold/90 font-medium">Powers & Properties</h4>
              {activeSection === 'powers' ? 
                <ChevronUp size={18} className="text-gold/70" /> : 
                <ChevronDown size={18} className="text-gold/70" />
              }
            </button>
            <AnimatePresence>
              {activeSection === 'powers' && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sectionVariants}
                >
                  <p className="text-white/70 mt-3 text-sm leading-relaxed">
                    {frog.power}
                  </p>
                  {frog.transformationBenefits && (
                    <div className="mt-3">
                      <h5 className="text-xs text-white/50 uppercase mb-2">Transformation Benefits</h5>
                      <ul className="grid grid-cols-2 gap-2">
                        {frog.transformationBenefits.map((benefit, index) => (
                          <li key={index} className="text-white/80 text-sm flex items-center">
                            <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Ritual Section */}
          <div className="pb-2">
            <button 
              onClick={() => toggleSection('ritual')}
              className="w-full flex justify-between items-center text-left"
            >
              <h4 className="text-gold/90 font-medium">Ritual Practice</h4>
              {activeSection === 'ritual' ? 
                <ChevronUp size={18} className="text-gold/70" /> : 
                <ChevronDown size={18} className="text-gold/70" />
              }
            </button>
            <AnimatePresence>
              {activeSection === 'ritual' && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sectionVariants}
                >
                  <p className="text-white/70 mt-3 text-sm leading-relaxed">
                    {frog.ritual}
                  </p>
                  {frog.visualDescription && (
                    <div className="mt-3">
                      <h5 className="text-xs text-white/50 uppercase mb-2">Visual Representation</h5>
                      <p className="text-white/60 text-sm italic">
                        {frog.visualDescription}
                      </p>
                    </div>
                  )}
                  {frog.seasonalVariation && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-xs text-white/50 uppercase mb-1">Spring</h5>
                        <p className="text-sm text-white/70">{frog.seasonalVariation.spring.mood}</p>
                      </div>
                      <div>
                        <h5 className="text-xs text-white/50 uppercase mb-1">Summer</h5>
                        <p className="text-sm text-white/70">{frog.seasonalVariation.summer.mood}</p>
                      </div>
                      <div>
                        <h5 className="text-xs text-white/50 uppercase mb-1">Autumn</h5>
                        <p className="text-sm text-white/70">{frog.seasonalVariation.autumn.mood}</p>
                      </div>
                      <div>
                        <h5 className="text-xs text-white/50 uppercase mb-1">Winter</h5>
                        <p className="text-sm text-white/70">{frog.seasonalVariation.winter.mood}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Expansion Toggle */}
      <div 
        className="bg-black/40 text-center py-2 border-t border-gold/10 cursor-pointer"
        onClick={toggleExpand}
      >
        <span className="text-gold/80 text-xs flex justify-center items-center">
          {isExpanded ? (
            <>Less <ChevronUp size={14} className="ml-1" /></>
          ) : (
            <>More <ChevronDown size={14} className="ml-1" /></>
          )}
        </span>
      </div>
    </motion.div>
  );
};

export default EnhancedFrogAmbassador;
