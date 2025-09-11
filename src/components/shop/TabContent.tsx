
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { TatamiGrid } from "@/components/ui/japanese/Layout";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import { Product } from "@/types/product";

interface TabContentProps {
  products: Product[];
  isVisible: boolean;
}

export const TabContent = ({ products, isVisible }: TabContentProps) => {
  if (!isVisible) return null;
  
  return (
    <TatamiGrid 
      columns={3} 
      className="gap-shaku"
      role="region" 
      aria-live="polite"
    >
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          index={index} 
        />
      ))}
      {products.length === 0 && (
        <div className="col-span-full text-center py-8 text-white/70">
          No products found in this category.
        </div>
      )}
    </TatamiGrid>
  );
};
