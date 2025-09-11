
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ShopCallToActionProps {
  scrollToSection: (sectionId: string) => void;
}

const ShopCallToAction = ({ scrollToSection }: ShopCallToActionProps) => {
  return (
    <motion.div 
      className="mt-16 text-center relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 opacity-70">
        {/* Radial gold gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gold/5 blur-3xl"></div>
      </div>
      
      <a 
        href="#rituals" 
        className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-black tracking-wide text-lg hover:bg-gradient-to-r hover:from-gold hover:to-gold-light transition-all duration-300 group relative overflow-hidden"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('rituals');
        }}
      >
        {/* Button highlight effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        <span>EXPLORE ALL PRODUCTS</span>
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </a>
      
      <div className="mt-8 text-white/50 text-sm max-w-lg mx-auto">
        Continue your journey through our complete selection of transformative CBD products, 
        each inspired by the sacred symbolism of Kaeru.
        <div className="flex items-center justify-center mt-6 space-x-1">
          <span className="w-1 h-1 rounded-full bg-accent-blue"></span>
          <span className="w-2 h-2 rounded-full bg-gold"></span>
          <span className="w-1 h-1 rounded-full bg-accent-red"></span>
        </div>
      </div>
      
      {/* Small decorative image below the CTA */}
      <div className="w-24 h-24 mx-auto mt-10 opacity-50">
        <img 
          src="/lovable-uploads/78a8f829-14a8-41ad-b6de-fcae1679ae49.png" 
          alt="Kaeru Active - Warrior frog calligraphy" 
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
};

export default ShopCallToAction;
