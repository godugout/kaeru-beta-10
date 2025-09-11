
import React from 'react';
import ProductShowcase from "@/components/sections/ProductShowcase";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductsSectionProps {
  products: Product[];
}

function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section id="products" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">The Kaeru Collection</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover our premium CBD formulations, each inspired by a unique frog ambassador and Japanese wellness philosophy.
          </p>
        </div>
        
        <ProductShowcase products={products} />
        
        <div className="flex justify-center mt-16">
          <Link 
            to="/enhanced-product/kaeru-gold-1" 
            className="bg-gold text-black px-8 py-3 inline-flex items-center hover:bg-opacity-80 transition-all duration-300"
          >
            EXPLORE COLLECTION <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
