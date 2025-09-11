
import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  
  return (
    <div>
      <div className="aspect-square rounded-sm overflow-hidden border border-white/10">
        <motion.img
          src={product.imagePath}
          alt={product.altText}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Color/Variant Options */}
      <div className="flex justify-center space-x-4 mt-4">
        <button 
          className="w-8 h-8 rounded-full border-2 border-gold bg-gold/20"
          onClick={() => setSelectedVariant(0)}
          aria-label="Select gold variant"
        />
        <button 
          className="w-8 h-8 rounded-full border-2 border-white/40 bg-white/10"
          onClick={() => setSelectedVariant(1)}
          aria-label="Select silver variant"
        />
        <button 
          className="w-8 h-8 rounded-full border-2 border-white/40 bg-white/10"
          onClick={() => setSelectedVariant(2)}
          aria-label="Select bronze variant"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
