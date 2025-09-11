
import { motion } from "framer-motion";
import { Product } from "./types/productTypes";

interface ProductCardProps {
  product: Product;
  activeSystem: keyof Product["systems"];
}

const ProductCard = ({ product, activeSystem }: ProductCardProps) => {
  return (
    <motion.div
      className="border border-gold/20 bg-black/30 p-6 rounded-sm"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      style={{
        borderTopColor: product.color,
        borderTopWidth: '3px'
      }}
    >
      <div className="mb-4">
        <h4 className="text-xl font-serif text-white mb-1">{product.name}</h4>
        <p className="text-white/50 text-sm">{product.description}</p>
      </div>
      
      <div className="pt-4 border-t border-white/10">
        <h5 className="text-gold text-sm font-medium mb-2">
          {product.systems[activeSystem].name}
        </h5>
        
        <p className="text-white/70 text-sm mb-3">
          {product.systems[activeSystem].effect}
        </p>
        
        <div className="bg-black/40 p-3 rounded-sm mt-4">
          <p className="text-white/50 text-xs italic">
            {product.systems[activeSystem].research}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
