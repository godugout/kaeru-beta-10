
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ScienceSectionProps {
  id: string;
  toggleScienceSection: () => void;
}

const ScienceSection = ({ id, toggleScienceSection }: ScienceSectionProps) => {
  return (
    <motion.section 
      id={id}
      className="min-h-screen py-24 px-8 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-gold text-sm tracking-widest mb-4">THE SCIENCE BENEATH</div>
        <h2 className="text-4xl md:text-5xl font-serif mb-12">Nature's Transformation Wisdom</h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 p-8 rounded"
          >
            <h3 className="text-2xl font-serif mb-4 text-gold">Amphibian Adaptation</h3>
            <p className="text-white/70 leading-relaxed">
              Frogs undergo complete metamorphosis, transforming from aquatic tadpoles to 
              land-dwelling adults. This remarkable change involves a complete 
              restructuring of their biology - a natural symbol of transformation and renewal.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900 p-8 rounded"
          >
            <h3 className="text-2xl font-serif mb-4 text-gold">CBD Transformation</h3>
            <p className="text-white/70 leading-relaxed">
              CBD works with your body's endocannabinoid system to restore balance.
              Like a frog's ability to adapt to changing environments, CBD helps your
              body navigate between different states of being.
            </p>
          </motion.div>
        </div>
        
        <motion.button 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-transparent border border-gold text-gold px-8 py-3 inline-flex items-center hover:bg-gold hover:text-black transition-all duration-300"
          onClick={toggleScienceSection}
        >
          RETURN TO JOURNEY <ArrowRight size={16} className="ml-2" />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default ScienceSection;
