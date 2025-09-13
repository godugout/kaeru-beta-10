import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    handleQuantityChange(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4 p-4 border-b border-white/10 last:border-b-0"
    >
      {/* Product Image */}
      <div className="w-16 h-16 rounded-sm overflow-hidden border border-white/10">
        <img
          src={item.imagePath}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-medium text-sm truncate">
          {item.name}
        </h3>
        <p className="text-white/60 text-xs">
          {item.collection}
        </p>
        <p className="text-kaeru-gold font-semibold text-sm mt-1">
          ${(item.price / 100).toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 hover:bg-white/10"
          onClick={() => handleQuantityChange(item.quantity - 1)}
        >
          <Minus size={12} className="text-white" />
        </Button>
        
        <Input
          type="number"
          min="0"
          value={item.quantity}
          onChange={handleInputChange}
          className="w-12 h-8 text-center bg-white/5 border-white/20 text-white text-sm"
        />
        
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 hover:bg-white/10"
          onClick={() => handleQuantityChange(item.quantity + 1)}
        >
          <Plus size={12} className="text-white" />
        </Button>
      </div>

      {/* Remove Button */}
      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-8 hover:bg-red-500/20 text-white/50 hover:text-red-400"
        onClick={() => onRemove(item.id)}
      >
        <Trash2 size={14} />
      </Button>
    </motion.div>
  );
};

export default CartItem;