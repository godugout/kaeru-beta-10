import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface EnhancedProductInfoProps {
  product: Product;
}

const EnhancedProductInfo = ({ product }: EnhancedProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState<'2oz' | '4oz'>('2oz');
  const { addItem } = useCart();
  const { toast } = useToast();

  const sizes = {
    '2oz': { price: 8000, label: '2oz (60ml)' }, // $80
    '4oz': { price: 15000, label: '4oz (120ml)' } // $150
  };

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedSize}`,
      name: `${product.name} - ${selectedSize}`,
      imagePath: product.imagePath,
      price: sizes[selectedSize].price,
      collection: product.collection
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
    });
  };

  const handleAddToRitual = () => {
    toast({
      title: "Added to Ritual Builder",
      description: `${product.name} has been added to your ritual.`,
    });
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Product Name & Info */}
      <div className="space-y-3">
        <div className="text-sm text-kaeru-gold uppercase font-medium">
          {product.collection}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
          {product.name}
        </h1>
        
        {product.name_english && (
          <h2 className="text-xl text-white/70 italic">
            {product.name_english}
          </h2>
        )}
        
        <p className="text-lg text-white/80">{product.subtitle}</p>

        {/* Frog Ambassador Badge */}
        <div className="inline-flex items-center bg-kaeru-gold/20 border border-kaeru-gold/30 rounded-full px-4 py-2">
          <div className="w-8 h-8 bg-kaeru-gold/30 rounded-full mr-3 flex items-center justify-center">
            🐸
          </div>
          <div className="text-sm">
            <div className="text-kaeru-gold font-medium">Frog Ambassador</div>
            <div className="text-white/70">{product.frog}</div>
          </div>
        </div>
      </div>

      {/* Rating */}
      {product.rating && (
        <div className="flex items-center space-x-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i}
                size={18}
                className={i < Math.floor(product.rating!) ? "text-kaeru-gold fill-kaeru-gold" : "text-white/30"}
              />
            ))}
          </div>
          <span className="text-white/70">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>
      )}

      {/* Size Selector */}
      <div className="space-y-3">
        <div className="text-white font-medium">Size</div>
        <div className="flex space-x-3">
          {Object.entries(sizes).map(([size, info]) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size as '2oz' | '4oz')}
              className={`flex-1 p-4 rounded-sm border-2 transition-all ${
                selectedSize === size
                  ? "border-kaeru-gold bg-kaeru-gold/10 text-kaeru-gold"
                  : "border-white/20 text-white/70 hover:border-white/40"
              }`}
            >
              <div className="font-medium">{info.label}</div>
              <div className="text-2xl font-serif mt-1">
                ${(info.price / 100).toFixed(2)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-kaeru-gold text-kaeru-black font-semibold py-4 text-lg hover:bg-kaeru-gold/90 relative overflow-hidden group"
        >
          <span className="relative z-10">Add to Cart</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </Button>
        
        <Button
          onClick={handleAddToRitual}
          variant="outline"
          className="w-full border-kaeru-gold/50 text-kaeru-gold hover:bg-kaeru-gold/10 py-4"
        >
          <Plus size={18} className="mr-2" />
          Add to Ritual
        </Button>
      </div>

      {/* Quick Details */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div className="text-center p-3 bg-white/5 rounded-sm">
          <div className="text-white/50 text-sm">CBD Content</div>
          <div className="text-kaeru-gold font-semibold">
            {selectedSize === '2oz' ? '1500mg' : '3000mg'}
          </div>
        </div>
        <div className="text-center p-3 bg-white/5 rounded-sm">
          <div className="text-white/50 text-sm">Size</div>
          <div className="text-white font-semibold">
            {sizes[selectedSize].label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedProductInfo;