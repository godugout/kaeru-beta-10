
import React from 'react';
import { motion } from "framer-motion";

const ShopSectionHeader = () => {
  return (
    <div className="text-center mb-16 relative">
      {/* Background accent element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-gold/5 to-transparent -z-10 blur-3xl"></div>
      
      {/* Small decorative frog image above the header */}
      <div className="w-24 h-24 mx-auto mb-6 opacity-40">
        <img 
          src="/lovable-uploads/a4c4d88d-c5ce-43cd-a0a6-60d3388a60a9.png" 
          alt="Decorative frog calligraphy" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm tracking-widest text-gold mb-4">FEATURED PRODUCTS</h2>
        <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Discover Our Sanctuaries</h3>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent-blue/50"></div>
          <div className="w-16 h-px bg-gradient-to-r from-gold/80 to-gold/20"></div>
          <div className="w-8 h-px bg-gradient-to-r from-accent-red/50 to-transparent"></div>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default ShopSectionHeader;
