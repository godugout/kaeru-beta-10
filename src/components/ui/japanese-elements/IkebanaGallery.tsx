
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface IkebanaGalleryProps {
  items: GalleryItem[];
  className?: string;
}

const IkebanaGallery = ({ items, className = "" }: IkebanaGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current + 1) % items.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Main container - represents the ikebana arrangement container */}
      <div className="relative bg-black/20 backdrop-blur-sm border border-white/5 rounded-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image column - the focal point of the arrangement */}
          <div className="md:w-2/5 relative overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative aspect-[3/4]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img
                  src={items[activeIndex].image}
                  alt={items[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle branch overlay - ikebana-inspired decorative element */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M70,10 Q40,30 60,50 T30,90"
                      stroke="#E6B980"
                      strokeWidth="0.5"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.8 }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                  </svg>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Text column - representing the secondary elements */}
          <div className="md:w-3/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col"
              >
                <h3 className="font-serif text-2xl text-gold mb-4">{items[activeIndex].title}</h3>
                <p className="text-white/80 leading-relaxed mb-6">{items[activeIndex].description}</p>
                
                {/* Navigation inspired by the asymmetrical balance of ikebana */}
                <div className="mt-auto flex justify-end">
                  <motion.button
                    onClick={handleNext}
                    className="flex items-center text-gold/80 hover:text-gold transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="mr-2">Next arrangement</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Progress indicators - representing the minimal elements */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${index === activeIndex ? 'bg-gold' : 'bg-white/20'}`}
              animate={{ scale: index === activeIndex ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 1, repeat: index === activeIndex ? Infinity : 0, repeatDelay: 2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IkebanaGallery;
