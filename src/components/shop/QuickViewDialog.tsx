
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { JapaneseProse } from "@/components/ui/japanese/Typography";
import { ChevronRight, Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";
import { productData } from "@/data/productData";

interface QuickViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
}

export const QuickViewDialog = ({ open, onOpenChange, product }: QuickViewDialogProps) => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      imagePath: product.imagePath,
      price: product.price,
      collection: product.collection
    });
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-black/95 border border-gold/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-gold">{product.name}</DialogTitle>
          <DialogDescription className="text-white/70">{product.collection}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img 
              src={product.imagePath} 
              alt={product.altText}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="text-lg font-serif text-white">{product.subtitle}</div>
              <div className="text-gold text-xl font-medium">${product.price}</div>
            </div>
            
            {product.rating && (
              <div className="flex items-center text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-white/30"}
                  />
                ))}
                <span className="ml-2 text-white/70">
                  {product.rating} ({product.reviews?.length || 0} reviews)
                </span>
              </div>
            )}
            
            <JapaneseProse className="text-white/80">
              <p>{product.description}</p>
            </JapaneseProse>
            
            {product.details && (
              <div className="space-y-2 pt-2 border-t border-white/10">
                {product.details.benefits && (
                  <div>
                    <div className="text-xs text-gold uppercase mb-1">Benefits</div>
                    <div className="flex flex-wrap gap-2">
                      {product.details.benefits.map((benefit, i) => (
                        <span key={i} className="bg-white/5 px-2 py-1 text-xs rounded-sm">{benefit}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.details.effects && (
                  <div>
                    <div className="text-xs text-gold uppercase mb-1">Effects</div>
                    <div className="flex flex-wrap gap-2">
                      {product.details.effects.map((effect, i) => (
                        <span key={i} className="bg-white/5 px-2 py-1 text-xs rounded-sm">{effect}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                variant="gold"
                className="flex-1 sm:flex-initial"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={16} className="mr-2" /> Add to Cart
              </Button>
              
              <a 
                href={`/product/${product.id}`}
                className="inline-flex items-center justify-center text-gold text-sm border border-gold/50 px-4 py-2 hover:bg-gold/10 transition-colors flex-1 sm:flex-initial"
                aria-label={`View details for ${product.name}`}
              >
                Full Details
                <ChevronRight size={16} className="ml-1 opacity-70" />
              </a>
            </div>
            
            {product.relatedProducts && product.relatedProducts.length > 0 && (
              <div className="pt-4 border-t border-white/10 mt-4">
                <div className="text-sm text-white/80 mb-2">You may also like:</div>
                <div className="flex flex-wrap gap-2">
                  {productData.filter(p => product.relatedProducts?.includes(p.id))
                    .map(relatedProduct => (
                      <a 
                        key={relatedProduct.id}
                        href={`/product/${relatedProduct.id}`}
                        className="text-xs text-gold hover:underline"
                      >
                        {relatedProduct.name}
                      </a>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewDialog;
