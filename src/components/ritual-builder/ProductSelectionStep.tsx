import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productCollections } from "@/data/productsData";
import { useRitualBuilderStore } from "@/stores/ritualBuilderStore";

const ProductSelectionStep = () => {
  const { 
    selectedProducts, 
    addProduct, 
    removeProduct, 
    canAddProduct,
    setCurrentStep 
  } = useRitualBuilderStore();

  const isProductSelected = (productId: string) => {
    return selectedProducts.find(p => p.id === productId) !== undefined;
  };

  const handleProductToggle = (product: any) => {
    if (isProductSelected(product.id)) {
      removeProduct(product.id);
    } else if (canAddProduct()) {
      addProduct(product);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2 
          className="font-serif text-3xl md:text-4xl text-kaeru-gold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Build Your Ritual
        </motion.h2>
        <motion.p 
          className="text-lg text-kaeru-fog/80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Choose 1-3 products for your practice
        </motion.p>
      </div>

      {/* Product Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {productCollections.map((product) => {
          const selected = isProductSelected(product.id);
          const disabled = !canAddProduct() && !selected;

          return (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className={`relative cursor-pointer transition-all duration-300 ${
                disabled && !selected ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => !disabled && handleProductToggle(product)}
              whileHover={!disabled ? { 
                scale: 1.02,
                transition: { duration: 0.2 }
              } : {}}
              whileTap={!disabled ? { scale: 0.98 } : {}}
            >
              {/* Selection Border */}
              <div className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
                selected 
                  ? 'border-kaeru-gold shadow-lg shadow-kaeru-gold/20' 
                  : 'border-kaeru-stone/30'
              }`} />

              {/* Selection Checkmark */}
              {selected && (
                <motion.div
                  className="absolute top-4 left-4 z-20 w-8 h-8 bg-kaeru-gold rounded-full flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                >
                  <Check className="w-5 h-5 text-kaeru-black" />
                </motion.div>
              )}

              {/* Frog Ambassador Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`bg-gradient-to-br ${product.theme.gradient} backdrop-blur-sm rounded-full p-3 border border-${product.theme.primaryColor}/30`}>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-kaeru-moss/80 to-kaeru-jade/60 flex items-center justify-center">
                    <span className="text-xs">🐸</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-kaeru-stone/20 backdrop-blur-sm rounded-lg p-6 relative z-10">
                {/* Product Visual */}
                <div className="aspect-square mb-4 bg-gradient-to-br from-kaeru-stone/10 to-kaeru-black/20 rounded-lg flex items-center justify-center border border-kaeru-stone/20">
                  <div className="w-20 h-24 relative">
                    {/* Simplified jar representation */}
                    <div className="w-full h-20 bg-gradient-to-b from-kaeru-stone/40 to-kaeru-black/60 rounded-lg border border-kaeru-stone/30 relative">
                      <div className="absolute inset-2 bg-gradient-to-b from-transparent to-kaeru-jade/20 rounded"></div>
                    </div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-kaeru-gold/80 rounded-full"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-kaeru-fog/90 rounded text-center flex flex-col items-center justify-center">
                      <span className="text-xs font-serif text-kaeru-black font-bold">{product.name.slice(0, 4)}</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="font-serif text-lg text-kaeru-fog mb-1">{product.name}</h3>
                  <p className="text-sm text-kaeru-fog/70 mb-2">{product.category}</p>
                  <p className="text-xs text-kaeru-fog/60 mb-3 line-clamp-2">{product.description}</p>
                  <div className="text-sm font-semibold text-kaeru-gold">${product.prices.size2oz}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Selection Counter & Continue Button */}
      <div className="text-center space-y-4">
        <motion.div 
          className="text-kaeru-fog/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          {selectedProducts.length} of 3 products selected
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button
            onClick={() => setCurrentStep(2)}
            disabled={selectedProducts.length === 0}
            className="bg-kaeru-gold hover:bg-kaeru-gold/80 text-kaeru-black font-semibold px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Naming
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductSelectionStep;