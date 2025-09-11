
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, Trash, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const WishlistDrawer = () => {
  const { items, removeFromWishlist, clearWishlist, itemCount } = useWishlist();
  const { addItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [heartBounce, setHeartBounce] = useState(false);

  // Heart bounce animation when items are added
  useEffect(() => {
    if (itemCount > 0) {
      setHeartBounce(true);
      const timer = setTimeout(() => setHeartBounce(false), 500);
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
          aria-label="Open wishlist"
        >
          <motion.div
            animate={heartBounce ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <Heart className="h-5 w-5 text-white" />
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
          <SheetTitle className="text-gold font-serif text-2xl">Your Wishlist</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64">
              <Heart className="h-16 w-16 text-white/30 mb-4" />
              <p className="text-white/60">Your wishlist is empty</p>
              <SheetClose asChild>
                <Button 
                  variant="outline" 
                  className="mt-4 border-gold text-gold hover:bg-gold/10"
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
                      <div className="h-16 w-16 rounded-sm overflow-hidden flex-shrink-0">
                        <img 
                          src={item.imagePath} 
                          alt={item.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{item.name}</p>
                        <p className="text-xs text-white/60">{item.subtitle}</p>
                        <div className="text-gold mt-1">${item.price}</div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => {
                            addItem({
                              id: item.id,
                              name: item.name,
                              imagePath: item.imagePath,
                              price: item.price,
                              collection: item.collection
                            });
                          }}
                          className="p-1 text-white/70 hover:text-gold"
                          aria-label="Add to cart"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="p-1 text-white/50 hover:text-white/80"
                          aria-label="Remove from wishlist"
                        >
                          <Trash className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </ScrollArea>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    className="text-white/60 hover:text-white hover:bg-transparent"
                    onClick={clearWishlist}
                  >
                    <Trash className="w-4 h-4 mr-2" />
                    Clear Wishlist
                  </Button>
                  
                  <SheetClose asChild>
                    <Button variant="gold">
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

export default WishlistDrawer;
