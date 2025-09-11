import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus, Package, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types/product";

interface RitualKitBuilderProps {
  products: Product[];
  onClose?: () => void;
}

const RitualKitBuilder = ({ products, onClose }: RitualKitBuilderProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [ritualName, setRitualName] = useState("");
  const [packagingType, setPackagingType] = useState<"standard" | "furoshiki" | "seasonal">("standard");
  const [giftMessage, setGiftMessage] = useState("");
  const [step, setStep] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const packagingOptions = [
    {
      id: "standard",
      name: "Standard Black Box",
      description: "Elegant matte black box with gold foil",
      price: 0,
      image: "📦"
    },
    {
      id: "furoshiki",
      name: "Premium Furoshiki Wrap",
      description: "Traditional Japanese cloth wrapping",
      price: 1500, // $15.00 in cents
      image: "🎁"
    },
    {
      id: "seasonal",
      name: "Seasonal Limited Edition",
      description: "Current season's special packaging",
      price: 1000, // $10.00 in cents
      image: "✨"
    }
  ];

  const getDiscount = (productCount: number) => {
    if (productCount >= 5) return 0.20; // 20% off
    if (productCount >= 4) return 0.15; // 15% off
    if (productCount >= 3) return 0.10; // 10% off
    return 0;
  };

  const calculateTotal = () => {
    const productTotal = selectedProducts.reduce((sum, product) => sum + product.price, 0);
    const packagingCost = packagingOptions.find(p => p.id === packagingType)?.price || 0;
    const discount = getDiscount(selectedProducts.length);
    const discountAmount = productTotal * discount;
    
    return {
      subtotal: productTotal,
      discount: discountAmount,
      packaging: packagingCost,
      total: productTotal - discountAmount + packagingCost
    };
  };

  const toggleProduct = (product: Product) => {
    setSelectedProducts(prev => {
      const isSelected = prev.find(p => p.id === product.id);
      if (isSelected) {
        return prev.filter(p => p.id !== product.id);
      } else if (prev.length < 5) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const addKitToCart = () => {
    if (selectedProducts.length < 3) {
      toast({
        title: "Minimum products required",
        description: "Please select at least 3 products for your ritual kit.",
        variant: "destructive"
      });
      return;
    }

    if (!ritualName.trim()) {
      toast({
        title: "Ritual name required",
        description: "Please name your personal ritual.",
        variant: "destructive"
      });
      return;
    }

    const totals = calculateTotal();
    
    // Add the ritual kit as a single cart item
    addItem({
      id: `ritual-kit-${Date.now()}`,
      name: `${ritualName} Ritual Kit`,
      imagePath: selectedProducts[0].imagePath, // Use first product's image
      price: totals.total,
      collection: "Ritual Kits"
    });

    toast({
      title: "Ritual Kit Added",
      description: `Your "${ritualName}" ritual kit has been added to cart with ${getDiscount(selectedProducts.length) * 100}% discount!`,
    });

    if (onClose) onClose();
  };

  const totals = calculateTotal();
  const discount = getDiscount(selectedProducts.length);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-serif text-white">Build Your Ritual Kit</h1>
        <p className="text-white/70">Create a personalized wellness journey with 3-5 products</p>
        <div className="flex justify-center space-x-2 mt-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-3 h-3 rounded-full ${
                step >= s ? "bg-kaeru-gold" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-xl font-serif text-white mb-2">Step 1: Select Products</h2>
              <p className="text-white/60">
                Choose 3-5 products • {selectedProducts.length}/5 selected
                {discount > 0 && (
                  <Badge className="ml-2 bg-kaeru-gold text-black">
                    {discount * 100}% OFF
                  </Badge>
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => {
                const isSelected = selectedProducts.find(p => p.id === product.id);
                const isDisabled = !isSelected && selectedProducts.length >= 5;
                
                return (
                  <Card
                    key={product.id}
                    className={`relative p-4 cursor-pointer transition-all border ${
                      isSelected 
                        ? "border-kaeru-gold bg-kaeru-gold/10" 
                        : isDisabled
                        ? "border-white/10 bg-white/5 opacity-50 cursor-not-allowed"
                        : "border-white/20 bg-white/5 hover:border-kaeru-gold/50"
                    }`}
                    onClick={() => !isDisabled && toggleProduct(product)}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-kaeru-gold rounded-full flex items-center justify-center">
                        <Check size={14} className="text-black" />
                      </div>
                    )}
                    
                    <img 
                      src={product.imagePath} 
                      alt={product.altText}
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                    
                    <h3 className="text-white font-medium text-sm mb-1">{product.name}</h3>
                    <p className="text-white/60 text-xs mb-2">{product.subtitle}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-kaeru-gold font-medium">
                        ${(product.price / 100).toFixed(2)}
                      </span>
                      {product.cbd_content && (
                        <Badge variant="secondary" className="text-xs">
                          {product.cbd_content}
                        </Badge>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="flex justify-center">
              <Button
                onClick={() => setStep(2)}
                disabled={selectedProducts.length < 3}
                variant="gold"
                size="lg"
              >
                Continue to Customization
                <Package className="ml-2" size={16} />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-xl font-serif text-white mb-2">Step 2: Customize Your Kit</h2>
              <p className="text-white/60">Name your ritual and choose packaging</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ritual Name */}
              <div className="space-y-4">
                <div>
                  <Label className="text-white mb-2 block">Ritual Name</Label>
                  <Input
                    value={ritualName}
                    onChange={(e) => setRitualName(e.target.value)}
                    placeholder="e.g., Morning Renewal, Evening Peace..."
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block">Gift Message (Optional)</Label>
                  <Textarea
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    placeholder="Add a personal message..."
                    className="bg-white/5 border-white/20 text-white"
                    rows={3}
                  />
                </div>
              </div>

              {/* Packaging Options */}
              <div>
                <Label className="text-white mb-4 block">Packaging</Label>
                <div className="space-y-3">
                  {packagingOptions.map((option) => (
                    <Card
                      key={option.id}
                      className={`p-4 cursor-pointer border transition-colors ${
                        packagingType === option.id
                          ? "border-kaeru-gold bg-kaeru-gold/10"
                          : "border-white/20 bg-white/5 hover:border-kaeru-gold/50"
                      }`}
                      onClick={() => setPackagingType(option.id as any)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{option.image}</span>
                          <div>
                            <h4 className="text-white font-medium">{option.name}</h4>
                            <p className="text-white/60 text-sm">{option.description}</p>
                          </div>
                        </div>
                        <div className="text-kaeru-gold font-medium">
                          {option.price > 0 ? `+$${(option.price / 100).toFixed(2)}` : "Free"}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                variant="gold"
                size="lg"
              >
                Review & Add to Cart
                <Sparkles className="ml-2" size={16} />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-xl font-serif text-white mb-2">Step 3: Review Your Kit</h2>
              <p className="text-white/60">"{ritualName}" Ritual Kit</p>
            </div>

            {/* Selected Products */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Selected Products:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProducts.map((product) => (
                  <div key={product.id} className="flex items-center space-x-3 bg-white/5 p-3 rounded">
                    <img 
                      src={product.imagePath} 
                      alt={product.altText}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-medium">{product.name}</h4>
                      <p className="text-white/60 text-xs">{product.subtitle}</p>
                    </div>
                    <span className="text-kaeru-gold">
                      ${(product.price / 100).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Breakdown */}
            <Card className="bg-white/5 border-white/20 p-6">
              <div className="space-y-3">
                <div className="flex justify-between text-white/80">
                  <span>Subtotal ({selectedProducts.length} products)</span>
                  <span>${(totals.subtotal / 100).toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-kaeru-gold">
                    <span>Bundle Discount ({discount * 100}% off)</span>
                    <span>-${(totals.discount / 100).toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-white/80">
                  <span>Packaging</span>
                  <span>
                    {totals.packaging > 0 
                      ? `$${(totals.packaging / 100).toFixed(2)}` 
                      : "Free"
                    }
                  </span>
                </div>
                
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between text-white font-medium text-lg">
                    <span>Total</span>
                    <span className="text-kaeru-gold">${(totals.total / 100).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => setStep(2)}
                variant="outline"
              >
                Back
              </Button>
              <Button
                onClick={addKitToCart}
                variant="gold"
                size="lg"
              >
                <Gift className="mr-2" size={16} />
                Add Kit to Cart
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RitualKitBuilder;