
import React from 'react';
import { Product } from '@/types/product';

interface ProductShowcaseNavigationProps {
  products: Product[];
  activeProduct: number;
  setActiveProduct: (index: number) => void;
}

const ProductShowcaseNavigation = ({ 
  products, 
  activeProduct, 
  setActiveProduct 
}: ProductShowcaseNavigationProps) => {
  return (
    <div className="flex justify-center mt-12 space-x-4">
      {products.map((product, index) => (
        <button 
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === activeProduct ? 'bg-gold' : 'bg-white/30'
          }`}
          onClick={() => setActiveProduct(index)}
          aria-label={`View ${product.name}`}
        />
      ))}
    </div>
  );
};

export default ProductShowcaseNavigation;
