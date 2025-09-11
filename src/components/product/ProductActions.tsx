
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types/product";
import { trackProductInteraction } from "@/integrations/supabase/analytics";

interface ProductActionsProps {
  product: Product;
  onAddToCart?: () => void;
}

const ProductActions = ({ product, onAddToCart }: ProductActionsProps) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart();
    }
    
    // Track interaction
    const productId = `temp-${product.name.toLowerCase().replace(/\s+/g, '-')}`;
    trackProductInteraction(productId, product.name, 'add_to_cart');
  };
  
  return (
    <div className="flex flex-wrap gap-4">
      <Button 
        className="bg-gold text-black px-8 py-3 hover:bg-opacity-80"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
      
      <Button 
        variant="outline"
        className="border-gold/70 text-gold hover:bg-gold/10"
      >
        <span className="mr-2">Explore Ritual</span>
        <ArrowRight size={16} />
      </Button>
    </div>
  );
};

export default ProductActions;
