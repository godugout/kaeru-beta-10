
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Eye, ShoppingCart } from "lucide-react";
import { JapaneseProse } from "@/components/ui/japanese/Typography";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import { Button } from "@/components/ui/button";
import QuickViewDialog from "./QuickViewDialog";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const { shouldAnimate } = useOptimizedAnimation();
  const [showQuickView, setShowQuickView] = useState(false);
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      imagePath: product.imagePath,
      price: product.price,
      collection: product.collection
    });
  };
  
  return (
    <>
      <motion.div
        key={product.name}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ 
          duration: shouldAnimate ? 0.5 : 0, 
          delay: shouldAnimate ? index * 0.1 : 0 
        }}
        className="bg-black/30 border border-white/10 rounded-sm overflow-hidden group hover:border-gold/30 transition-colors"
      >
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={product.imagePath} 
            alt={product.altText}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            width="400"
            height="300"
            loading={index < 3 ? "eager" : "lazy"}
          />
          <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button 
              variant="goldOutline" 
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                setShowQuickView(true);
              }}
            >
              <Eye size={16} className="mr-1" /> Quick View
            </Button>
            <Button 
              variant="gold" 
              size="sm"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} />
            </Button>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-1">
            <div className="text-xs text-gold/80 uppercase">
              {product.collection}
            </div>
            <div className="text-gold font-medium">
              ${(product.price / 100).toFixed(2)}
            </div>
          </div>
          
          <h3 className="font-serif text-xl text-white mb-2">
            {product.name}
          </h3>
          
          {/* Japanese name and meaning */}
          {product.metadata?.japanese_name && product.metadata?.meaning && (
            <div className="text-xs text-gold/70 mb-2">
              <span className="text-gold">{product.metadata.japanese_name}</span> • {product.metadata.meaning}
            </div>
          )}
          
          <JapaneseProse className="text-white/60 text-sm mb-4">
            <p>{product.subtitle}</p>
          </JapaneseProse>
          
          {/* CBD content and size */}
          <div className="flex flex-wrap gap-2 mb-4 text-xs">
            {product.cbd_content && (
              <span className="bg-jade-accent/20 text-jade-accent px-2 py-1 rounded-sm">
                {product.cbd_content}
              </span>
            )}
            {product.size && (
              <span className="bg-white/10 text-white/60 px-2 py-1 rounded-sm">
                {product.size}
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <a 
              href={`/product/${product.id}`}
              className="inline-flex items-center text-gold text-sm border border-gold/50 px-4 py-2 hover:bg-gold/10 transition-colors"
              aria-label={`View details for ${product.name}`}
            >
              Explore
              <ChevronRight size={16} className="ml-1 opacity-70" />
            </a>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-gold hover:bg-transparent"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} className="mr-1" /> Add
            </Button>
          </div>
        </div>
      </motion.div>
      
      <QuickViewDialog 
        open={showQuickView}
        onOpenChange={setShowQuickView}
        product={product}
      />
    </>
  );
};
