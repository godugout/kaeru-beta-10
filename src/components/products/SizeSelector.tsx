import { useState } from "react";
import { motion } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCollection } from "@/data/productsData";

interface SizeSelectorProps {
  product: ProductCollection;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductCollection, size: '2oz' | '4oz', price: number) => void;
}

const SizeSelector = ({ product, isOpen, onClose, onAddToCart }: SizeSelectorProps) => {
  const [selectedSize, setSelectedSize] = useState<'2oz' | '4oz'>('2oz');

  const handleAddToCart = () => {
    const price = selectedSize === '2oz' ? product.prices.size2oz : product.prices.size4oz;
    onAddToCart(product, selectedSize, price);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-kaeru-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-kaeru-stone/90 backdrop-blur-sm rounded-lg border border-kaeru-stone/30 p-6 max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-xl text-kaeru-gold">{product.name}</h3>
          <button
            onClick={onClose}
            className="text-kaeru-fog/70 hover:text-kaeru-fog transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Size Options */}
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-medium text-kaeru-fog/80 mb-3">Select Size</h4>
          
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              onClick={() => setSelectedSize('2oz')}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                selectedSize === '2oz'
                  ? 'bg-kaeru-gold/20 border-kaeru-gold/50 text-kaeru-gold'
                  : 'bg-kaeru-black/20 border-kaeru-stone/30 text-kaeru-fog/70 hover:border-kaeru-stone/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <div className="font-semibold mb-1">2oz</div>
                <div className="text-sm opacity-80">${product.prices.size2oz}</div>
                <div className="text-xs mt-1 opacity-60">30-day supply</div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => setSelectedSize('4oz')}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                selectedSize === '4oz'
                  ? 'bg-kaeru-gold/20 border-kaeru-gold/50 text-kaeru-gold'
                  : 'bg-kaeru-black/20 border-kaeru-stone/30 text-kaeru-fog/70 hover:border-kaeru-stone/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <div className="font-semibold mb-1">4oz</div>
                <div className="text-sm opacity-80">${product.prices.size4oz}</div>
                <div className="text-xs mt-1 opacity-60">60-day supply</div>
                <div className="text-xs mt-1 text-kaeru-gold opacity-80">Best Value</div>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full bg-kaeru-gold hover:bg-kaeru-gold/80 text-kaeru-black font-semibold"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart - ${selectedSize === '2oz' ? product.prices.size2oz : product.prices.size4oz}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default SizeSelector;