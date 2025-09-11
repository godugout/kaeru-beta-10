
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Trash, Plus, Minus, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const CartDrawer = () => {
  const { items, removeItem, updateQuantity, clearCart, itemCount, subtotal } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);

  // Cart bounce animation when items are added
  useEffect(() => {
    if (itemCount > 0) {
      setCartBounce(true);
      const timer = setTimeout(() => setCartBounce(false), 500);
      return () => clearTimeout(timer);
    }
  }, [itemCount]);

  // Auto-open cart when new items are added
  useEffect(() => {
    if (itemCount > 0) {
      setIsOpen(true);
      // Auto-close after 3 seconds if user doesn't interact
      const timer = setTimeout(() => setIsOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [itemCount]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative bg-black border-white/20 hover:bg-black/70 hover:border-gold/40 transition-all"
          aria-label="Open cart"
        >
          <motion.div
            animate={cartBounce ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <ShoppingCart className="h-5 w-5 text-white" />
          </motion.div>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-black border-white/20 text-white w-full max-w-md sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-gold font-serif text-2xl">Your Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64">
              <ShoppingCart className="h-16 w-16 text-white/30 mb-4" />
              <p className="text-white/60">Your cart is empty</p>
              <SheetClose asChild>
                <Button 
                  variant="outline" 
                  className="mt-4 border-gold text-gold hover:bg-gold/10"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
              </SheetClose>
            </div>
          ) : (
            <>
              <ScrollArea className="flex-1 -mx-6 px-6">
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="py-3 border-b border-white/10 flex items-center gap-3"
                    >
                      <Link 
                        to={`/product/${item.id}`} 
                        onClick={() => setIsOpen(false)}
                        className="h-16 w-16 rounded-sm overflow-hidden flex-shrink-0"
                      >
                        <img 
                          src={item.imagePath} 
                          alt={item.name} 
                          className="h-full w-full object-cover"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link 
                          to={`/product/${item.id}`}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-white hover:text-gold truncate"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-white/60">{item.collection}</p>
                        <div className="flex items-center mt-1 justify-between">
                          <div className="flex items-center border border-white/20 rounded-sm">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-white/70 hover:text-white"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-white/70 hover:text-white"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="text-gold font-medium">
                            ${item.price}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-white/50 hover:text-white/80"
                        aria-label="Remove item"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </ScrollArea>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between border-t border-white/20 pt-4">
                  <p className="font-serif text-lg">Subtotal</p>
                  <p className="font-serif text-lg text-gold">${subtotal.toFixed(2)}</p>
                </div>
                
                <SheetClose asChild>
                  <Link 
                    to="/checkout" 
                    className="w-full inline-flex items-center justify-center bg-gold text-black px-4 py-3 hover:bg-gold/90 transition-colors"
                  >
                    Checkout <ChevronRight size={16} className="ml-1" />
                  </Link>
                </SheetClose>
                
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    className="text-white/60 hover:text-white hover:bg-transparent"
                    onClick={clearCart}
                  >
                    <Trash className="w-4 h-4 mr-2" />
                    Clear Cart
                  </Button>
                  
                  <SheetClose asChild>
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Continue Shopping
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
