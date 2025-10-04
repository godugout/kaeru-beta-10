import { Product } from "@/types/product";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index: number;
  comingSoon?: boolean;
}

export const ProductCard = ({ product, index, comingSoon = false }: ProductCardProps) => {
  const { addItem } = useCart();
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState("");
  
  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll notify you when this product launches.");
      setEmail("");
      setIsFlipped(false);
    }
  };

  const cardContent = comingSoon ? (
    <div 
      className="relative h-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card - Coming Soon */}
        <div 
          className="absolute inset-0 bg-background/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-64 overflow-hidden opacity-30">
            <img
              src={product.imagePath}
              alt={product.altText}
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-serif text-white/40 mb-2">{product.name}</h3>
            <p className="text-sm text-white/30 mb-4">{product.subtitle}</p>
            <div className="text-center py-4">
              <span className="inline-block px-4 py-2 bg-white/5 text-white/50 text-sm tracking-wider border border-white/10 rounded">
                COMING SOON
              </span>
              <p className="text-xs text-white/40 mt-4">Click to be notified</p>
            </div>
          </div>
        </div>

        {/* Back of card - Email Form */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-kaeru-gold/20 to-kaeru-moss/20 backdrop-blur-md border border-gold/30 rounded-lg p-8 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-2xl font-serif text-gold mb-4 text-center">Be the First to Know</h3>
          <p className="text-white/70 text-center mb-6 text-sm">
            Enter your email to be notified when {product.name_english || product.name} launches
          </p>
          <form onSubmit={handleNotifySubmit} className="w-full max-w-sm">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-4 bg-black/30 border-gold/30 text-white"
            />
            <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-black">
              Notify Me
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  ) : (
    <Link to={`/products/${product.id}`} className="block h-full">
      <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-gold/50 transition-all duration-300 h-full">
        <div className="relative h-64 overflow-hidden group">
          <img
            src={product.imagePath}
            alt={product.altText}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif text-white mb-2">{product.name}</h3>
          <p className="text-sm text-white/70 mb-4">{product.subtitle}</p>
          <p className="text-white/60 text-sm mb-4 line-clamp-2">{product.description}</p>
          
          {product.sizes && product.sizes.length > 0 ? (
            <div className="flex gap-4 mb-4">
              {product.sizes.map((sizeOption) => (
                <div key={sizeOption.size} className="flex flex-col">
                  <span className="text-xs text-white/50">{sizeOption.size}</span>
                  <span className="text-gold font-semibold">${(sizeOption.price / 100).toFixed(2)}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gold text-xl font-semibold mb-4">
              ${(product.price / 100).toFixed(2)}
            </div>
          )}

          <Button 
            onClick={(e) => {
              e.preventDefault();
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                imagePath: product.imagePath,
                collection: product.collection,
              });
              toast.success("Added to cart!");
            }}
            className="w-full bg-gold hover:bg-gold/90 text-black"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={comingSoon ? {} : { y: -5 }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  );
};
