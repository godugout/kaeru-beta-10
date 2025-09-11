
import { useState, useRef } from "react";
import FrogAmbassador from "@/components/ambassador/FrogAmbassador";
import { frogAmbassadors } from "@/data/frogAmbassadors";
import { useRippleEffect } from "@/hooks/useRippleEffect";
import { motion } from "framer-motion";

const FrogAmbassadorSection = () => {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Apply subtle ripple effect to section background
  const { ripples } = useRippleEffect(sectionRef, {
    maxRipples: 4,
    duration: 4000,
    size: 200,
    minOpacity: 0.05,
    maxOpacity: 0.15,
    speedVariation: true
  });
  
  const collections = Array.from(
    new Set(frogAmbassadors.map(frog => frog.collection))
  );
  
  const filteredFrogs = selectedCollection
    ? frogAmbassadors.filter(frog => frog.collection === selectedCollection)
    : frogAmbassadors;
  
  return (
    <section 
      ref={sectionRef}
      className="bg-black py-20 md:py-28 relative overflow-hidden"
    >
      {/* Japanese-inspired background with subtle ripple effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iI2U2Yjk4MCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')]"></div>
        
        {/* Dynamic water ripples */}
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="absolute rounded-full bg-gold/5 pointer-events-none"
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              opacity: ripple.opacity,
              transform: 'scale(1)',
              transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
            }}
          />
        ))}
        
        {/* Japanese calligraphy character as background element */}
        <div className="absolute top-1/4 -left-12 text-[20rem] text-gold/[0.03] font-serif select-none pointer-events-none">
          蛙
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section header with asymmetrical spacing */}
        <div className="text-left md:text-center mb-16 md:mb-20 max-w-3xl md:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm tracking-widest text-gold mb-3">FROG MYTHOLOGY</h2>
            <h3 className="font-serif text-3xl md:text-5xl text-white mb-6">Sacred Ambassadors</h3>
            <p className="text-white/70 max-w-2xl md:mx-auto leading-relaxed">
              Each Kaeru product is guided by the spirit of a sacred frog species, whose natural 
              wisdom and healing properties are infused into our ritual formulations.
              <span className="block mt-4 text-xs uppercase tracking-wider text-gold/50">蛙の知恵 • The Wisdom of Frogs</span>
            </p>
          </motion.div>
        </div>
        
        {/* Collection filter with wabi-sabi inspired asymmetry */}
        <div className="flex flex-wrap justify-center mb-12 gap-3 max-w-3xl mx-auto">
          <motion.button
            onClick={() => setSelectedCollection(null)}
            className={`px-5 py-2 text-sm rounded-sm transition-colors ${
              selectedCollection === null
                ? 'bg-gold/20 text-gold border border-gold/40'
                : 'bg-black/30 text-white/70 border border-white/10 hover:border-white/30'
            }`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            All Collections
          </motion.button>
          
          {collections.map((collection, index) => (
            <motion.button
              key={collection}
              onClick={() => setSelectedCollection(collection)}
              className={`px-5 py-2 text-sm rounded-sm transition-colors ${
                selectedCollection === collection
                  ? 'bg-gold/20 text-gold border border-gold/40'
                  : 'bg-black/30 text-white/70 border border-white/10 hover:border-white/30'
              }`}
              // Staggered animation for wabi-sabi feeling of natural timing
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              {collection}
            </motion.button>
          ))}
        </div>
        
        {/* Grid of frogs with asymmetrical layout for visual interest */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {filteredFrogs.map((frog, index) => (
            <motion.div
              key={frog.name}
              // Staggered animation with intentional variation (wabi-sabi)
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6 + (index % 2) * 0.1 // Slight variation for organic feel
              }}
              // Add subtle hover effect
              whileHover={{ y: -3 }}
            >
              <FrogAmbassador
                name={frog.name}
                species={frog.species}
                collection={frog.collection}
                origin={frog.origin}
                power={frog.power}
                ritual={frog.ritual}
                visualDescription={frog.visualDescription}
                haiku={frog.haiku}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrogAmbassadorSection;
