import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
  SheetFooter 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, updateQuantity, removeItem, itemCount, subtotal } = useCart();

  // Calculate discount
  const hasDiscount = items.length >= 2;
  const discountPercent = items.length >= 3 ? 15 : items.length >= 2 ? 10 : 0;
  const discountAmount = hasDiscount ? (subtotal * discountPercent) / 100 : 0;
  const total = subtotal - discountAmount;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[400px] md:max-w-md bg-kaeru-black/95 backdrop-blur-md border-l border-kaeru-gold/20 p-0 flex flex-col mobile-full-width"
      >
        <SheetHeader className="p-6 pb-4 border-b border-white/10">
          <SheetTitle className="text-2xl font-serif text-kaeru-gold flex items-center justify-between">
            Your Ritual
            <span className="text-sm font-normal text-white/60">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          </SheetTitle>
        </SheetHeader>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="p-0">
              <AnimatePresence>
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {items.length > 0 && (
          <SheetFooter className="p-6 pt-4 border-t border-white/10 mt-auto">
            <div className="w-full space-y-4">
              {/* Pricing Breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between text-white/80">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                {hasDiscount && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between text-green-400"
                  >
                    <span>Ritual Discount (-{discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </motion.div>
                )}
                
                <Separator className="bg-white/20" />
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total</span>
                  <span className="text-2xl font-serif text-kaeru-gold">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  asChild
                  className="w-full bg-kaeru-gold text-kaeru-black hover:bg-kaeru-gold/90 font-semibold py-3 relative overflow-hidden group min-h-[44px]"
                  onClick={onClose}
                >
                  <Link to="/checkout">
                    <span className="relative z-10">Begin Checkout</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </Button>
                
                <button 
                  onClick={onClose}
                  className="w-full text-center text-white/70 hover:text-kaeru-gold transition-colors text-sm min-h-[44px]"
                >
                  Continue Shopping
                </button>
              </div>
              
              {/* Ritual Builder CTA */}
              {items.length >= 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-kaeru-gold/10 border border-kaeru-gold/30 rounded-sm p-3 text-center"
                >
                  <p className="text-kaeru-gold text-sm mb-2">
                    ✨ Create a personalized ritual with your products
                  </p>
                  <Button 
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-kaeru-gold/50 text-kaeru-gold hover:bg-kaeru-gold/10 min-h-[44px]"
                    onClick={onClose}
                  >
                    <Link to="/ritual-builder">
                      Build My Ritual
                    </Link>
                  </Button>
                </motion.div>
              )}
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;