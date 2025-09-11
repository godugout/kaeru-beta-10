
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RipplesToStillness from "../animations/RipplesToStillness";
import ShadowToLight from "../animations/ShadowToLight";
import TensionToRelease from "../animations/TensionToRelease";
import FragmentedToWhole from "../animations/FragmentedToWhole";

const TransformationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  const transformations = [
    {
      id: "ripples",
      name: "Ripples to Stillness",
      description: "The journey from disturbance to tranquil calm, like water returning to its natural state.",
      japaneseLabel: "静けさ",
      japaneseMeaning: "Shizukesa - Tranquility",
      component: <RipplesToStillness isVisible={isInView} />,
      product: "Calm CBD Tincture",
      ritual: "Evening meditation ritual to release the day's tensions"
    },
    {
      id: "shadow",
      name: "Shadow to Light",
      description: "The emergence from confusion into clarity, inspired by ink wash painting techniques.",
      japaneseLabel: "明晰",
      japaneseMeaning: "Meisei - Clarity",
      component: <ShadowToLight isVisible={isInView} />,
      product: "Clarity CBD Oil",
      ritual: "Morning ritual for mental focus and cognitive enhancement"
    },
    {
      id: "tension",
      name: "Tension to Release",
      description: "The transformation of rigid discomfort to fluid mobility, like a frog preparing to leap.",
      japaneseLabel: "解放",
      japaneseMeaning: "Kaihō - Release",
      component: <TensionToRelease isVisible={isInView} />,
      product: "Strength Recovery Balm",
      ritual: "Post-exercise ritual to restore and rejuvenate muscles"
    },
    {
      id: "fragmented",
      name: "Fragmented to Whole",
      description: "The journey from disconnection to harmony, inspired by kintsugi, the art of golden repair.",
      japaneseLabel: "調和",
      japaneseMeaning: "Chōwa - Harmony",
      component: <FragmentedToWhole isVisible={isInView} />,
      product: "Harmony Full-Spectrum CBD",
      ritual: "Integration ritual for balancing mind, body, and spirit"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="transformations" 
      className="py-28 md:py-36 bg-black relative"
    >
      {/* Japanese-inspired background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNlNmI5ODAiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
        
        {/* Vertical scroll line inspired by Japanese kakejiku (hanging scrolls) */}
        <div className="absolute h-full w-px left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          {/* Japanese-inspired asymmetrical decoration */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/40 to-transparent"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm tracking-widest text-gold mb-4">TRANSFORMATIVE JOURNEYS</h2>
            <h3 className="font-serif text-3xl md:text-5xl text-white mb-6">The Path of Return</h3>
            
            {/* Horizon line with wabi-sabi imperfection */}
            <div className="h-px w-24 mx-auto my-6 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            
            <p className="text-white/70 leading-relaxed">
              In Japanese philosophy, transformation is not linear but cyclical—a constant 
              returning to our true nature. These visual journeys represent the essence 
              of Kaeru's approach to wellness.
            </p>
            
            {/* Japanese text for authenticity */}
            <p className="text-xs text-gold/50 mt-4 tracking-widest">
              変化の旅 • JOURNEY OF TRANSFORMATION
            </p>
          </motion.div>
        </div>
        
        {/* Use asymmetrical grid with intentional spacing variation (ma) */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-y-28 md:gap-x-16 max-w-5xl mx-auto">
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.2 + (index * 0.15), 
                ease: [0.22, 1, 0.36, 1] // Organic easing curve
              }}
              className="flex flex-col items-center"
            >
              <div className="mb-8 md:mb-10 relative">
                {/* Visual transformation */}
                {transformation.component}
                
                {/* Subtle decorative elements with asymmetrical placement (wabi-sabi) */}
                <motion.div 
                  className={`absolute ${index % 2 === 0 ? '-bottom-2 -left-2' : '-bottom-2 -right-2'} h-4 w-4 border border-gold/20`}
                  animate={{ 
                    borderColor: ['rgba(230,185,128,0.2)', 'rgba(230,185,128,0.3)', 'rgba(230,185,128,0.2)'] 
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
              
              <div className="text-center">
                <div className="text-gold text-xs mb-1">{transformation.japaneseLabel}</div>
                <h4 className="font-serif text-2xl text-white mb-2">{transformation.name}</h4>
                <p className="italic text-white/50 text-sm mb-4">{transformation.japaneseMeaning}</p>
                <p className="text-white/70 mb-6 max-w-xs mx-auto leading-relaxed">
                  {transformation.description}
                </p>
                
                {/* Japanese-inspired horizontal divider */}
                <div className="h-px w-12 mx-auto my-4 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                
                <div className="text-sm text-gold/80">
                  {transformation.product} • {transformation.ritual}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
