
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const KaeruArtGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const artworks = [
    {
      id: 1,
      title: "The Warrior's Path",
      description: "Embodying the samurai spirit of discipline and strength",
      imagePath: "/lovable-uploads/51574481-f300-41de-9b14-a5cdd3dca6bd.png",
      artist: "Kaeru Collection"
    },
    {
      id: 2,
      title: "Ripples of Wisdom",
      description: "Finding clarity in stillness like a frog on a lily pad",
      imagePath: "/lovable-uploads/d658e44c-0774-472d-82a2-f3cef3182981.png",
      artist: "Zen Masters"
    },
    {
      id: 3,
      title: "Strength in Motion",
      description: "The fluidity of power that comes from inner balance",
      imagePath: "/lovable-uploads/b9d677b0-a752-471b-8134-0f3d04821f39.png",
      artist: "Kaeru Masters"
    },
    {
      id: 4,
      title: "Four Elements",
      description: "Harmony through the balance of natural forces",
      imagePath: "/lovable-uploads/f0b481a9-b090-4248-80d8-551fdce7108a.png",
      artist: "Kaeru Collection"
    }
  ];
  
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-sm tracking-widest text-gold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            VISUAL PHILOSOPHY
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Art of Kaeru
          </motion.h3>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our visual language draws from traditional Japanese aesthetics and the natural world,
            expressing the principles of transformation and return.
          </motion.p>
        </div>
        
        {/* Art Gallery Carousel */}
        <div className="relative">
          <motion.div 
            className="relative rounded-sm overflow-hidden aspect-[16/9] bg-black"
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={artworks[activeIndex].imagePath} 
              alt={artworks[activeIndex].title} 
              className="w-full h-full object-contain"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
              <h4 className="text-white text-xl md:text-2xl font-serif mb-2">{artworks[activeIndex].title}</h4>
              <p className="text-white/70 mb-1">{artworks[activeIndex].description}</p>
              <p className="text-gold text-sm">{artworks[activeIndex].artist}</p>
            </div>
          </motion.div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/30 text-white rounded-full hover:bg-black/50"
              onClick={handlePrevious}
              aria-label="Previous artwork"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/30 text-white rounded-full hover:bg-black/50"
              onClick={handleNext}
              aria-label="Next artwork"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {artworks.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-gold" : "bg-white/30"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to artwork ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KaeruArtGallery;
