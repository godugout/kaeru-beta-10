import React from 'react';
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from '@/types/product';
import { trackProductInteraction } from "@/integrations/supabase/analytics";
import { Link } from 'react-router-dom';

interface ProductDetailsProps {
  product: Product;
  activeProduct: number;
  toggleRitualView: () => void;
}

const ProductDetails = ({ 
  product, 
  activeProduct,
  toggleRitualView 
}: ProductDetailsProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0 relative">
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <img 
            src={product.imagePath}
            alt={product.altText}
            className="w-full max-w-md mx-auto rounded shadow-lg"
          />
          
          {/* Badge indicating ritual availability */}
          {product.ritualSteps && (
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-gold/80 text-black text-xs px-3 py-1 rounded tracking-wide">
              RITUAL INCLUDED
            </div>
          )}
        </motion.div>
      </div>
      
      <div className="md:w-1/2 md:pl-12">
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-gold text-sm tracking-widest mb-2">
            {product.frog}
          </div>
          <h3 className="text-3xl md:text-4xl font-serif mb-2 text-white">
            {product.name}
          </h3>
          <div className="text-xl text-white/80 mb-6">
            {product.subtitle}
          </div>
          <p className="text-white/70 leading-relaxed mb-8">
            {product.description}
          </p>
          
          {/* Make ritual button more prominent if available */}
          {product.ritualSteps && (
            <div className="mb-6 bg-black/30 p-4 rounded border-l-2 border-gold">
              <p className="text-white/90 text-sm mb-3">
                This product includes a guided application ritual inspired by Japanese wellness traditions.
                Experience the full benefit through mindful application.
              </p>
              <button 
                onClick={toggleRitualView}
                className="bg-transparent border border-gold text-gold hover:bg-gold/10 transition-all px-6 py-2 flex items-center"
              >
                VIEW RITUAL <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to={`/enhanced-product/${product.id}`}
              className="bg-gold text-black px-8 py-3 inline-flex items-center hover:bg-opacity-80 transition-all duration-300"
              onClick={() => {
                const productId = `temp-${product.name.toLowerCase().replace(/\s+/g, '-')}`;
                trackProductInteraction(productId, product.name, 'explore_click');
              }}
            >
              EXPLORE <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
