
import { motion, AnimatePresence } from "framer-motion";

interface FrogAmbassadorCardProps {
  frogAmbassador: {
    name: string;
    species: string;
    collection: string;
    origin: string;
    power: string;
    ritual: string;
    visualDescription: string;
    haiku: string;
  };
  showMythology: boolean;
}

const FrogAmbassadorCard = ({ frogAmbassador, showMythology }: FrogAmbassadorCardProps) => {
  if (!showMythology) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mb-8 bg-black/50 backdrop-blur-sm border border-gold/20 p-6 rounded-sm"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 text-center">
            <h5 className="font-serif text-2xl text-gold mb-1">{frogAmbassador.name}</h5>
            <p className="text-white/70 text-sm italic">{frogAmbassador.species} • Guardian of the {frogAmbassador.collection}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h6 className="text-xs tracking-wider text-gold/70 uppercase mb-2">Origin</h6>
              <p className="text-white/90 mb-6">{frogAmbassador.origin}</p>
              
              <h6 className="text-xs tracking-wider text-gold/70 uppercase mb-2">Sacred Power</h6>
              <p className="text-white/90 mb-6">{frogAmbassador.power}</p>
            </div>
            
            <div>
              <h6 className="text-xs tracking-wider text-gold/70 uppercase mb-2">Ancient Ritual</h6>
              <p className="text-white/90 mb-6">{frogAmbassador.ritual}</p>
              
              <h6 className="text-xs tracking-wider text-gold/70 uppercase mb-2">Visual Form</h6>
              <p className="text-white/90 mb-6">{frogAmbassador.visualDescription}</p>
            </div>
          </div>
          
          <div className="mt-2 text-center border-t border-gold/20 pt-6">
            <h6 className="text-xs tracking-wider text-gold/70 uppercase mb-3">Essence</h6>
            <p className="text-white font-serif text-lg italic leading-relaxed">{frogAmbassador.haiku}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FrogAmbassadorCard;
