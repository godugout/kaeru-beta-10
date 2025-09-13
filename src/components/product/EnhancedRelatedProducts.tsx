import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { productData } from "@/data/productData";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

interface EnhancedRelatedProductsProps {
  currentProductId: string;
  relatedIds: string[];
}

const EnhancedRelatedProducts = ({ currentProductId, relatedIds }: EnhancedRelatedProductsProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  // Get complementary products based on collection type
  const getComplementaryProducts = () => {
    const currentProduct = productData.find(p => p.id === currentProductId);
    if (!currentProduct) return [];

    // Logic to suggest complementary products
    const complementaryMap: Record<string, string[]> = {
      'Face': ['Recovery', 'Cleanse'],
      'Recovery': ['Face', 'Ritual'],
      'Cleanse': ['Face', 'Massage'],
      'Ritual': ['Recovery', 'Massage'],
      'Massage': ['Recovery', 'Ritual']
    };

    const suggestedCollections = complementaryMap[currentProduct.collection] || [];
    
    return productData
      .filter(p => 
        p.id !== currentProductId && 
        suggestedCollections.includes(p.collection)
      )
      .slice(0, 3);
  };

  const relatedProducts = relatedIds.length > 0 
    ? productData.filter(p => relatedIds.includes(p.id)).slice(0, 3)
    : getComplementaryProducts();

  const handleQuickAdd = (product: typeof productData[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      imagePath: product.imagePath,
      price: product.price,
      collection: product.collection
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-serif text-kaeru-gold mb-4">
          Complete Your Ritual
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">
          Enhance your practice with these complementary products, 
          carefully selected to work in harmony with your current choice.
        </p>
        
        <Button 
          variant="outline"
          className="border-kaeru-gold/50 text-kaeru-gold hover:bg-kaeru-gold/10"
        >
          <Plus size={18} className="mr-2" />
          Build Full Ritual
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-kaeru-black/40 border border-white/10 rounded-sm overflow-hidden group hover:border-kaeru-gold/30 transition-all"
          >
            {/* Product Image */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={product.imagePath}
                alt={product.altText}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-kaeru-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    onClick={() => handleQuickAdd(product)}
                    className="bg-kaeru-gold text-kaeru-black hover:bg-kaeru-gold/90"
                  >
                    Quick Add
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href={`/product/${product.id}`}>View</a>
                  </Button>
                </div>
              </div>

              {/* Collection Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-kaeru-gold/90 text-kaeru-black px-2 py-1 text-xs font-semibold rounded-sm">
                  {product.collection}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-lg text-white group-hover:text-kaeru-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    {product.subtitle}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="text-kaeru-gold font-semibold">
                    ${(product.price / 100).toFixed(2)}
                  </div>
                  {product.rating && (
                    <div className="text-xs text-white/50 mt-1">
                      ⭐ {product.rating}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-white/70 text-sm line-clamp-2">
                {product.description}
              </p>

              {/* Quick Benefits */}
              {product.details?.effects && (
                <div className="flex flex-wrap gap-1 pt-2">
                  {product.details.effects.slice(0, 3).map((effect, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-sm"
                    >
                      {effect}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EnhancedRelatedProducts;