import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

interface CartIconProps {
  onClick: () => void;
}

const CartIcon = ({ onClick }: CartIconProps) => {
  const { itemCount } = useCart();
  const [shouldPulse, setShouldPulse] = useState(false);

  // Trigger pulse animation when item count changes
  useEffect(() => {
    if (itemCount > 0) {
      setShouldPulse(true);
      const timer = setTimeout(() => setShouldPulse(false), 600);
      return () => clearTimeout(timer);
    }
  }, [itemCount]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="relative hover:bg-kaeru-gold/10 transition-colors"
    >
      <motion.div
        animate={shouldPulse ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.6 }}
      >
        <ShoppingBag 
          size={20} 
          className="text-white hover:text-kaeru-gold transition-colors" 
        />
      </motion.div>
      
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-2 -right-2 min-w-5 h-5 bg-kaeru-gold text-kaeru-black text-xs font-bold rounded-full flex items-center justify-center px-1"
          >
            {itemCount > 99 ? '99+' : itemCount}
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default CartIcon;