import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useRitualBuilderStore } from "@/stores/ritualBuilderStore";

const ReviewStep = () => {
  const { 
    selectedProducts, 
    ritualName, 
    getTotalPrice, 
    getDiscountedPrice, 
    getDiscount,
    getBundleDiscount,
    setCurrentStep 
  } = useRitualBuilderStore();

  const totalPrice = getTotalPrice();
  const discountedPrice = getDiscountedPrice();
  const discount = getDiscount();
  const discountPercentage = getBundleDiscount();
  const isDisciplineTier = selectedProducts.length === 3;

  const handleCompleteRitual = () => {
    // Handle ritual completion - could integrate with cart/checkout
    console.log('Ritual completed:', {
      products: selectedProducts,
      name: ritualName,
      price: discountedPrice
    });
  };

  const handleBack = () => {
    setCurrentStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-kaeru-gold mb-4">
          Review Your Ritual
        </h2>
        <p className="text-lg text-kaeru-fog/80">
          Confirm your selection and complete your order
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column: Products & Ritual Name */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Ritual Name */}
          {ritualName && (
            <div className="mb-8 p-6 bg-gradient-to-br from-kaeru-gold/10 to-kaeru-jade/5 rounded-lg border border-kaeru-gold/30">
              <div className="text-sm text-kaeru-gold/70 mb-2 uppercase tracking-widest">
                Your Ritual
              </div>
              <div className="font-serif text-2xl md:text-3xl text-kaeru-gold italic">
                {ritualName}
              </div>
            </div>
          )}

          {/* Selected Products */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-kaeru-fog mb-4">Selected Products</h3>
            
            {selectedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex items-center gap-4 p-4 bg-kaeru-stone/20 rounded-lg border border-kaeru-stone/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {/* Product Image */}
                <div className="w-16 h-20 bg-gradient-to-b from-kaeru-stone/40 to-kaeru-black/60 rounded border border-kaeru-stone/30 flex-shrink-0 relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-kaeru-gold/80 rounded-full"></div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-kaeru-fog/90 rounded text-center flex items-center justify-center">
                    <span className="text-[8px] font-serif text-kaeru-black font-bold">{product.name.slice(0, 3)}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h4 className="font-serif text-kaeru-fog">{product.name}</h4>
                  <p className="text-sm text-kaeru-fog/70">{product.category}</p>
                  <p className="text-sm text-kaeru-fog/60">{product.frogAmbassador.name}</p>
                </div>

                {/* Price */}
                <div className="text-right">
                  <div className={`font-semibold ${discount > 0 ? 'line-through text-kaeru-fog/50 text-sm' : 'text-kaeru-gold'}`}>
                    ${product.prices.size2oz}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Pricing & Completion */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Discipline Tier Badge */}
          {isDisciplineTier && (
            <motion.div
              className="mb-6"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
            >
              <Badge className="bg-gradient-to-r from-kaeru-gold to-kaeru-gold/80 text-kaeru-black text-sm font-bold py-2 px-4 w-full justify-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Discipline Tier Unlocked
              </Badge>
              <p className="text-xs text-kaeru-fog/70 text-center mt-2">
                Includes bonus ritual guide & meditation card
              </p>
            </motion.div>
          )}

          {/* Pricing Summary */}
          <div className="bg-kaeru-stone/20 rounded-lg p-6 border border-kaeru-stone/30 mb-6">
            <h3 className="font-serif text-lg text-kaeru-fog mb-4">Order Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between text-kaeru-fog/80">
                <span>Products ({selectedProducts.length})</span>
                <span className={discount > 0 ? 'line-through' : ''}>${totalPrice}</span>
              </div>
              
              {discount > 0 && (
                <>
                  <div className="flex justify-between text-kaeru-gold">
                    <span>Bundle Discount ({Math.round(discountPercentage * 100)}%)</span>
                    <span>-${discount}</span>
                  </div>
                  <div className="border-t border-kaeru-stone/30 pt-3">
                    <div className="flex justify-between text-lg font-semibold text-kaeru-gold">
                      <span>Total</span>
                      <span>${discountedPrice}</span>
                    </div>
                  </div>
                </>
              )}
              
              {discount === 0 && (
                <div className="border-t border-kaeru-stone/30 pt-3">
                  <div className="flex justify-between text-lg font-semibold text-kaeru-gold">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Complete Button */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={handleCompleteRitual}
              className="w-full bg-gradient-to-r from-kaeru-gold to-kaeru-gold/90 hover:from-kaeru-gold/90 hover:to-kaeru-gold text-kaeru-black font-bold py-4 text-lg relative overflow-hidden animate-gold-shimmer"
              size="lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Complete Ritual - ${discountedPrice}
            </Button>
            
            <Button
              onClick={handleBack}
              variant="outline"
              className="w-full border-kaeru-stone/30 text-kaeru-fog hover:bg-kaeru-stone/20"
            >
              Back to Naming
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewStep;