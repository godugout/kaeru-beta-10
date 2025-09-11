
import { productData } from "@/data/productData";
import { motion } from "framer-motion";
import { ChevronRight, Eye, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

interface RelatedProductsProps {
  currentProductId: string;
  relatedIds: string[];
}

const RelatedProducts = ({ currentProductId, relatedIds }: RelatedProductsProps) => {
  const { addItem } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  
  // Get related products
  const relatedProducts = productData.filter(
    product => relatedIds.includes(product.id) || 
    (relatedIds.length === 0 && product.id !== currentProductId)
  ).slice(0, 3);
  
  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <section className="pt-16 border-t border-white/10 mt-16">
      <h2 className="text-2xl font-serif text-gold mb-8">Related Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relatedProducts.map(product => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/30 border border-white/10 rounded-sm overflow-hidden group hover:border-gold/30 transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={product.imagePath} 
                alt={product.altText}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-2">
                  <a 
                    href={`/product/${product.id}`}
                    className="bg-gold text-black p-2 rounded-full hover:bg-gold/90 transition-colors"
                  >
                    <Eye size={18} />
                  </a>
                  <button
                    onClick={() => {
                      addItem({
                        id: product.id,
                        name: product.name,
                        imagePath: product.imagePath,
                        price: product.price,
                        collection: product.collection
                      });
                    }}
                    className="bg-gold text-black p-2 rounded-full hover:bg-gold/90 transition-colors"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart size={18} />
                  </button>
                  <button
                    onClick={() => {
                      if (isInWishlist(product.id)) {
                        removeFromWishlist(product.id);
                      } else {
                        addToWishlist(product);
                      }
                    }}
                    className="bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label={isInWishlist(product.id) ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                  >
                    <Heart 
                      size={18}
                      className={isInWishlist(product.id) ? "fill-gold text-gold" : ""}
                    />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between mb-1">
                <div className="text-xs text-gold/80 uppercase">{product.collection}</div>
                <div className="text-gold font-medium">${product.price}</div>
              </div>
              
              <a href={`/product/${product.id}`} className="block">
                <h3 className="font-serif text-lg text-white hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-white/60 text-sm mt-1 mb-4">{product.subtitle}</p>
              </a>
              
              <a 
                href={`/product/${product.id}`}
                className="inline-flex items-center text-gold text-xs border border-gold/50 px-3 py-1 hover:bg-gold/10 transition-colors"
              >
                View Details
                <ChevronRight size={14} className="ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
