
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types/product";

interface MobilePurchaseBarProps {
  product: Product;
  onAddToCart: () => void;
}

const MobilePurchaseBar = ({ product, onAddToCart }: MobilePurchaseBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/20 p-4 md:hidden z-40">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg text-gold font-serif">${product.price}</div>
          <div className="text-sm text-white/60">{product.name}</div>
        </div>
        <Button
          variant="gold"
          onClick={onAddToCart}
        >
          <ShoppingCart size={16} className="mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default MobilePurchaseBar;
