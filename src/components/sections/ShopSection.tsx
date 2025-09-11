
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import FeaturedProductItem from "@/components/sections/showcase/FeaturedProductItem";
import ShopSectionHeader from "@/components/sections/showcase/ShopSectionHeader";
import ShopCallToAction from "@/components/sections/showcase/ShopCallToAction";

const ShopSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect on background accents
  const blueAccentY = useTransform(scrollYProgress, [0, 1], [-20, 100]);
  const redAccentX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="shop" className="py-24 relative overflow-hidden bg-black" ref={containerRef}>
      {/* Background color accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle blue accent */}
        <motion.div 
          className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-accent-blue/5 blur-3xl"
          style={{ y: blueAccentY }}
        />
        
        {/* Subtle red accent */}
        <motion.div 
          className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-accent-red/5 blur-3xl"
          style={{ x: redAccentX }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ShopSectionHeader />
        
        {/* Gold accent line */}
        <div className="absolute left-0 top-1/4 h-[80%] w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block"></div>
        
        {/* Product with subtle gold accents - Updated image */}
        <div className="relative">
          <FeaturedProductItem 
            title="Golden Lily Essence"
            description="Inspired by the Japanese Golden Poison Frog, this formulation carries the transformative power of renewal. Each application is a step in your journey toward balance."
            imagePath="/lovable-uploads/af2b09f6-5ce4-4a4f-8a9c-ad4ec65fc7cc.png"
            altText="Premium Kaeru Gold CBD oil dropper with frog sculpture in background"
            ambassador="GOLDEN POISON FROG"
          />
          
          {/* Gold accent detail */}
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-24 hidden lg:flex flex-col justify-between">
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <div className="w-px h-full mx-auto bg-gradient-to-b from-gold/60 via-gold/20 to-gold/60"></div>
            <div className="w-2 h-2 rounded-full bg-gold"></div>
          </div>
        </div>
        
        {/* Separator with accent colors */}
        <div className="my-24 relative">
          <div className="h-px w-full bg-black"></div>
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
        </div>
        
        {/* Product with subtle blue accents - Updated image */}
        <div className="relative">
          <FeaturedProductItem 
            title="Midnight Pond Elixir"
            description="The nocturnal Poison Dart Frog guides this formulation's journey into deep restoration. Apply as part of your evening ritual to experience transformation while you rest."
            imagePath="/lovable-uploads/9dac3c96-b4e9-4ced-86a9-6db566bc413b.png"
            altText="Kaeru Clarity premium CBD oil with gold accents on reflective surface"
            ambassador="POISON DART FROG"
          />
          
          {/* Blue accent detail */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-24 hidden lg:flex flex-col justify-between">
            <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
            <div className="w-px h-full mx-auto bg-gradient-to-b from-accent-blue/60 via-accent-blue/20 to-accent-blue/60"></div>
            <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
          </div>
        </div>
        
        <ShopCallToAction scrollToSection={scrollToSection} />
      </div>
    </section>
  );
};

export default ShopSection;
