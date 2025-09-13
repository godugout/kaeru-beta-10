import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCollection } from "@/data/productsData";

interface ProductCardProps {
  product: ProductCollection;
  onQuickAdd: (product: ProductCollection) => void;
  onProductClick: (product: ProductCollection) => void;
}

const ProductCard = ({ product, onQuickAdd, onProductClick }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-kaeru-stone/20 backdrop-blur-sm rounded-lg border border-kaeru-stone/30 overflow-hidden cursor-pointer"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onProductClick(product)}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-kaeru-gold/10 to-transparent opacity-0"
        animate={{ 
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Gold border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-kaeru-gold/0"
        animate={{ 
          borderColor: isHovered ? "rgb(212 175 55 / 0.4)" : "rgb(212 175 55 / 0)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Frog Ambassador Badge */}
      <div className="absolute top-4 right-4 z-10">
        <motion.div
          className={`bg-gradient-to-br ${product.theme.gradient} backdrop-blur-sm rounded-full p-3 border border-${product.theme.primaryColor}/30`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-kaeru-moss/80 to-kaeru-jade/60 flex items-center justify-center">
            <span className="text-xs font-bold text-kaeru-fog">🐸</span>
          </div>
        </motion.div>
        <div className="absolute -bottom-2 right-0 bg-kaeru-black/80 backdrop-blur-sm rounded px-2 py-1">
          <span className="text-xs text-kaeru-fog/80 font-medium">{product.frogAmbassador.name}</span>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative aspect-square p-8">
        <div className="w-full h-full bg-gradient-to-br from-kaeru-stone/10 to-kaeru-black/20 rounded-lg flex items-center justify-center border border-kaeru-stone/20">
          {/* Dark glass jar with golden bamboo lid */}
          <motion.div
            className="relative w-32 h-40"
            animate={{ 
              rotateY: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Jar body */}
            <div className="w-full h-32 bg-gradient-to-b from-kaeru-stone/40 to-kaeru-black/60 rounded-lg border-2 border-kaeru-stone/30 relative overflow-hidden">
              <div className="absolute inset-2 bg-gradient-to-b from-transparent via-kaeru-jade/10 to-kaeru-jade/20 rounded"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            </div>
            
            {/* Golden bamboo lid */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-kaeru-gold/80 to-kaeru-gold/60 rounded-full border-2 border-kaeru-gold/40">
              <div className="absolute inset-1 bg-gradient-to-b from-kaeru-gold/40 to-transparent rounded-full"></div>
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-kaeru-gold/60 rounded-full"></div>
            </div>
            
            {/* Label */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-kaeru-fog/90 rounded border border-kaeru-stone/20 flex flex-col items-center justify-center">
              <span className="text-xs font-serif text-kaeru-black font-bold">{product.name}</span>
              <span className="text-[10px] text-kaeru-black/70">{product.category}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 relative z-10">
        <div className="mb-4">
          <h3 className="font-serif text-xl text-kaeru-fog mb-1">{product.name}</h3>
          <p className="text-sm text-kaeru-fog/70 mb-3">{product.category}</p>
          <p className="text-sm text-kaeru-fog/80 leading-relaxed">{product.description}</p>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.benefits.slice(0, 3).map((benefit, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-kaeru-stone/20 text-kaeru-fog/70 rounded border border-kaeru-stone/30"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <div className="text-sm text-kaeru-fog/70">
              2oz: <span className="text-kaeru-gold font-semibold">${product.prices.size2oz}</span>
            </div>
            <div className="text-sm text-kaeru-fog/70">
              4oz: <span className="text-kaeru-gold font-semibold">${product.prices.size4oz}</span>
            </div>
          </div>
        </div>

        {/* Quick Add Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onQuickAdd(product);
          }}
          className="w-full bg-kaeru-gold/10 hover:bg-kaeru-gold/20 text-kaeru-gold border border-kaeru-gold/30 hover:border-kaeru-gold/50 transition-all duration-300"
          variant="outline"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Quick Add
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;