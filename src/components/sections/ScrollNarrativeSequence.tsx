
import { useRef } from "react";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import MindfulTransition from "@/components/ui/japanese-elements/MindfulTransition";
import { useRippleEffect } from "@/hooks/useRippleEffect";

interface NarrativeSection {
  headline: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  symbol: string;
  id: string;
  japaneseMeaning: string; // Added Japanese meaning
}

const narrativeSections: NarrativeSection[] = [
  {
    headline: "Return to Balance",
    description: "Like a frog in still water, find the center between movement and rest.",
    gradientFrom: "from-indigo-900",
    gradientTo: "to-green-900",
    symbol: "均",
    id: "balance",
    japaneseMeaning: "Kin - Equilibrium"
  },
  {
    headline: "Return to Strength",
    description: "From tadpole to leaping form, embrace the power of transformation.",
    gradientFrom: "from-amber-900",
    gradientTo: "to-green-800",
    symbol: "力",
    id: "strength",
    japaneseMeaning: "Chikara - Power"
  },
  {
    headline: "Return to Clarity",
    description: "Clear as moonlight reflected on midnight waters.",
    gradientFrom: "from-gray-900",
    gradientTo: "to-blue-900",
    symbol: "明",
    id: "clarity",
    japaneseMeaning: "Mei - Brightness"
  },
  {
    headline: "Return to Rhythm",
    description: "Find your natural cycle, like the sacred songs of evening frogs.",
    gradientFrom: "from-indigo-800",
    gradientTo: "to-purple-900",
    symbol: "律",
    id: "rhythm",
    japaneseMeaning: "Ritsu - Rhythm"
  }
];

interface NarrativeSectionProps {
  section: NarrativeSection;
  index: number;
}

const NarrativeSection = ({ section, index }: NarrativeSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rippleContainerRef = useRef<HTMLDivElement>(null);
  
  // Enhanced ripple effect with more natural, wabi-sabi qualities
  const { ripples } = useRippleEffect(rippleContainerRef, {
    maxRipples: 5,
    duration: 3000,
    size: 180,
    minOpacity: 0.05,
    maxOpacity: 0.2,
    speedVariation: true
  });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Fixed: Using a proper easing function with cubicBezier instead of an array of numbers
  const customEase = cubicBezier(0.22, 1, 0.36, 1);
  
  // More natural easing for Japanese-inspired motion
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4], {
    ease: customEase
  });
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);
  
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      ref={sectionRef}
      style={{ opacity, scale, y }}
      className="min-h-[80vh] relative flex items-center overflow-hidden"
      id={section.id}
    >
      {/* Background gradient with ripple effect */}
      <div className={`absolute inset-0 bg-gradient-to-b ${section.gradientFrom} ${section.gradientTo} z-0`}>
        <div ref={rippleContainerRef} className="absolute inset-0 overflow-hidden">
          {/* Static background texture */}
          <div className="absolute w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.03)_10%,transparent_80%)] bg-[length:120px_120px]"></div>
          
          {/* Dynamic ripples */}
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
        </div>
        
        {/* Vertical line inspired by Japanese scroll paintings */}
        <div className="absolute inset-y-0 left-[15%] w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent"></div>
      </div>
      
      {/* Japanese symbol overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[16rem] text-gold/10 font-serif pointer-events-none select-none">
        {section.symbol}
      </div>
      
      <div className={`container mx-auto px-4 md:px-8 z-10 py-16 md:py-28 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Text content */}
        <div className="md:w-1/2 text-white mb-12 md:mb-0">
          <MindfulTransition
            isVisible={true}
            type="slide"
            mobileOptimized={true}
            delay={0.1}
          >
            {/* Japanese meaning added for cultural authenticity */}
            <div className="text-gold/60 text-sm mb-3">{section.japaneseMeaning}</div>
            <h2 className="text-3xl md:text-5xl font-serif text-gold mb-6">{section.headline}</h2>
            <p className="text-white/80 text-lg max-w-lg leading-relaxed">{section.description}</p>
            
            {/* Horizontal line with wabi-sabi imperfection */}
            <div className="h-px w-24 mt-8 bg-gradient-to-r from-gold/40 to-transparent"></div>
          </MindfulTransition>
        </div>
        
        {/* Visual element - stylized frog or nature element */}
        <div className="md:w-1/2 flex justify-center">
          <MindfulTransition
            isVisible={true}
            type="scale"
            mobileOptimized={true}
            delay={0.3}
          >
            <div className="relative w-64 h-64 rounded-full bg-black/20 backdrop-blur-sm border border-gold/20 flex items-center justify-center group">
              {/* Japanese character with subtle animation */}
              <motion.div 
                className="text-gold text-9xl font-serif relative z-10"
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                {section.symbol}
              </motion.div>
              
              {/* Concentric circles with asymmetrical layout (wabi-sabi) */}
              <div className="absolute inset-0 rounded-full border border-gold/30 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              
              <div className="absolute inset-[-10%] rounded-full border border-gold/10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-1500 delay-100"></div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gold/5 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
            </div>
          </MindfulTransition>
        </div>
      </div>
    </motion.div>
  );
};

const ScrollNarrativeSequence = () => {
  return (
    <section className="bg-black">
      {narrativeSections.map((section, index) => (
        <NarrativeSection key={section.id} section={section} index={index} />
      ))}
    </section>
  );
};

export default ScrollNarrativeSequence;
