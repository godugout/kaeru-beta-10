
import React from "react";
import { motion } from "framer-motion";
import { JapaneseHeading } from "@/components/ui/japanese/Typography";
import { WashiTexture } from "@/components/ui/japanese/Textures";

interface ScienceHeroProps {
  contentVisible: boolean;
}

const ScienceHero = ({ contentVisible }: ScienceHeroProps) => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      {/* Background texture with washi paper effect */}
      <WashiTexture className="absolute inset-0 opacity-10 z-0" />
      
      {/* Abstract gradient accent backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Blue accent gradient blob */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl mix-blend-screen"
        ></div>
        
        {/* Gold accent gradient blob */}
        <div 
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gold/5 blur-3xl mix-blend-screen"
        ></div>
        
        {/* Red accent gradient blob (subtle) */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 left-1/4 w-40 h-40 rounded-full bg-accent-red/3 blur-3xl mix-blend-screen"
        ></div>
      </div>

      <div className="absolute inset-0 z-0 opacity-20">
        <div className="relative w-full h-full">
          {/* Updated image */}
          <img 
            src="/lovable-uploads/9ff9b79d-96a8-404c-9c5e-974346f49b8b.png" 
            alt="Meditative frog with lotus flowers and calm kanji" 
            className="absolute opacity-20 top-1/2 right-0 transform -translate-y-1/2 max-w-[50%] h-auto object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-sm tracking-widest text-gold uppercase mb-4">The Science of Kaeru</h1>
          <JapaneseHeading className="text-4xl md:text-6xl mb-6">
            <span className="text-white">Where </span>
            <span className="text-accent-blue">East </span>
            <span className="text-white">Meets </span>
            <span className="text-accent-red">West</span>
          </JapaneseHeading>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Discover how our formulations bridge ancient Japanese wisdom with 
            modern scientific understanding of the body's natural balance systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={contentVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-px h-24 bg-gradient-to-b from-gold/0 via-gold to-gold/0"></div>
        </motion.div>
        
        {/* Accent decorative elements */}
        <motion.div
          className="absolute bottom-12 left-12 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={contentVisible ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="w-8 h-8 border border-gold/40 relative">
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gold/60 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-12 right-12 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={contentVisible ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="w-4 h-16 border border-accent-blue/40"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScienceHero;
