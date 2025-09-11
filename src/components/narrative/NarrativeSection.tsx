
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NarrativeSection as NarrativeSectionType } from "@/types/narrative";

interface NarrativeSectionProps {
  section: NarrativeSectionType;
  index: number;
}

const NarrativeSection = ({ section, index }: NarrativeSectionProps) => {
  const ref = useRef(null);
  // Use scroll progress for parallax effects, but only for even-indexed journeys (2 & 4)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Create parallax values for different elements
  const parallaxFactor = section.parallaxFactor || 0.2;
  
  // Only apply parallax effects for even-indexed journeys (2 & 4)
  const shouldApplyParallax = index % 2 !== 0;
  
  // Define transform values based on whether parallax should be applied
  const titleY = shouldApplyParallax 
    ? useTransform(scrollYProgress, [0, 1], [100 * parallaxFactor, -100 * parallaxFactor])
    : 0;
  
  const descriptionY = shouldApplyParallax 
    ? useTransform(scrollYProgress, [0, 1], [80 * parallaxFactor, -80 * parallaxFactor])
    : 0;
  
  const backgroundY = shouldApplyParallax 
    ? useTransform(scrollYProgress, [0, 1], [0, -30 * parallaxFactor])
    : 0;
  
  return (
    <div
      id={section.id}
      ref={ref}
      className={`min-h-screen relative flex items-center justify-center ${section.bgClass} overflow-hidden`}
    >
      {/* Visual background elements - always visible */}
      {section.visualElement}
      
      {/* High-quality background image with consistent handling */}
      {section.imageSrc && (
        <motion.div 
          className="absolute inset-0 bg-center bg-cover opacity-5"
          style={{ 
            backgroundImage: `url(${section.imageSrc})`,
            y: backgroundY 
          }}
        />
      )}
      
      {/* Continuous background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iI2U2Yjk4MCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-10"></div>
      
      {/* Journey connection node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <motion.div 
          className="w-4 h-4 rounded-full bg-gradient-to-r from-gold/40 to-ocean/40"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3]
           }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>
      
      {/* Content with parallax effect for even journeys only */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          style={{ y: titleY }}
        >
          <h2 className="text-gold text-sm tracking-widest mb-4 font-light">JOURNEY {index + 1}</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 tracking-wider">{section.title}</h3>
          
          <motion.p 
            className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed"
            style={{ y: descriptionY }}
          >
            {section.description}
          </motion.p>
          
          {/* Interactive element - simple glowing orb */}
          <motion.div className="mx-auto relative">
            <motion.div 
              className="w-20 h-20 mx-auto rounded-full" 
              style={{
                background: index % 2 === 0 
                  ? 'radial-gradient(circle at center, rgba(230, 185, 128, 0.3) 0%, transparent 70%)' 
                  : 'radial-gradient(circle at center, rgba(51, 195, 240, 0.3) 0%, transparent 70%)'
              }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NarrativeSection;
