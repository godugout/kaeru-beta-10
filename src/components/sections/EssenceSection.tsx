
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface EssenceSectionProps {
  toggleScienceSection: () => void;
  scrollPosition: number;
}

const EssenceSection = ({ toggleScienceSection, scrollPosition }: EssenceSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  // Calculate opacity based on scroll position
  const calculateOpacity = (basePosition: number, range = 300) => {
    return Math.min(Math.max((scrollPosition - basePosition) / range, 0), 1);
  };
  
  return (
    <section id="essence" ref={ref} className="relative py-24 min-h-screen flex items-center">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90 z-0"></div>
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-sm tracking-widest text-gold mb-6">THE ESSENCE</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 text-white leading-tight">
              Transform Through Nature's Wisdom
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              In Japanese folklore, frogs are sacred symbols of safe return, 
              healing, and rebirth. Warriors carried frog charms into battle, 
              believing the spirit of Kaeru would guide them safely home.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              KAERU embodies this ancient wisdom of transformation. Like the frog that journeys 
              between water and land, our formulations bridge the gap between discomfort and harmony.
            </p>
            
            <button 
              onClick={toggleScienceSection}
              className="bg-transparent border border-gold text-gold px-8 py-3 flex items-center hover:bg-gold hover:text-black transition-all duration-300"
            >
              DISCOVER OUR MYTHOLOGY <ArrowRight size={16} className="ml-2" />
            </button>
            
            {/* Japanese character for transformation */}
            <div className="mt-12 opacity-20">
              <span className="text-7xl font-serif text-gold">変</span>
            </div>
          </motion.div>
          
          {/* Visual element */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-square overflow-hidden rounded-full mx-auto max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tl from-gold/30 to-transparent mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
                alt="Tranquil river flowing between mountains"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
