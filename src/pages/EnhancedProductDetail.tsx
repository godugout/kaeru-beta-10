
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ShopLayout from "@/components/layouts/ShopLayout";
import RelatedProducts from "@/components/shop/RelatedProducts";
import { MaContainer } from "@/components/ui/japanese/Layout";
import { productData } from "@/data/productData";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { FrogAmbassadorDetail } from "@/types/frogAmbassador";

// Import the enhanced components
import HabitatBackground from "@/components/product/HabitatBackground";
import EnhancedFrogAmbassador from "@/components/ambassador/EnhancedFrogAmbassador";
import EnhancedRitualInstructions from "@/components/ritual/EnhancedRitualInstructions";
import TransformationProgress from "@/components/product/TransformationProgress";
import EnhancedIngredientStory from "@/components/product/EnhancedIngredientStory";

// Import the product components
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/product/ProductActions";
import MobilePurchaseBar from "@/components/product/MobilePurchaseBar";

// Import sample data
import { frogAmbassadors } from "@/data/frogAmbassadors";
import { 
  goldIngredients, 
  clarityIngredients, 
  vitalityIngredients, 
  luxuryIngredients 
} from "@/data/ingredientStories";
import { 
  goldTransformationBenefits, 
  clarityTransformationBenefits,
  vitalityTransformationBenefits,
  luxuryTransformationBenefits 
} from "@/data/transformationBenefits";

const EnhancedProductDetail = () => {
  const { productId } = useParams();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("details");
  
  // Find the product based on the ID
  const product = productData.find(p => p.id === productId) || productData[0];
  
  // Find the frog ambassador for this product
  const frogAmbassador = frogAmbassadors.find(
    frog => product.collection.includes(frog.collection.split(' ')[0])
  );
  
  // Determine habitat based on product collection
  const getHabitat = () => {
    if (product.collection.includes("Gold")) return "forest";
    if (product.collection.includes("Clarity")) return "water";
    if (product.collection.includes("Vitality")) return "bamboo";
    if (product.collection.includes("Luxury")) return "lotus";
    return "mountain";
  };
  
  // Get ingredients based on product collection
  const getIngredients = () => {
    if (product.collection.includes("Gold")) return goldIngredients;
    if (product.collection.includes("Clarity")) return clarityIngredients;
    if (product.collection.includes("Vitality")) return vitalityIngredients;
    if (product.collection.includes("Luxury")) return luxuryIngredients;
    return goldIngredients;
  };
  
  // Get transformation benefits based on product collection
  const getTransformationBenefits = () => {
    if (product.collection.includes("Gold")) return goldTransformationBenefits;
    if (product.collection.includes("Clarity")) return clarityTransformationBenefits;
    if (product.collection.includes("Vitality")) return vitalityTransformationBenefits;
    if (product.collection.includes("Luxury")) return luxuryTransformationBenefits;
    return goldTransformationBenefits;
  };
  
  const handleAddToCart = () => {
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
  
  return (
    <ShopLayout>
      <HabitatBackground 
        habitat={getHabitat()} 
        productCollection={product.collection}
      >
        <MaContainer className="py-12 md:py-16">
          {/* Breadcrumb */}
          <div className="text-white/50 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Shop
            </Link>
          </div>
          
          {/* Product Detail Main Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Product Images */}
            <ProductGallery product={product} />
            
            {/* Product Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProductInfo product={product} />
              <ProductActions product={product} onAddToCart={handleAddToCart} />
              
              {/* Transformation Progress */}
              <TransformationProgress 
                productName={product.name}
                benefits={getTransformationBenefits()}
                accentColor={frogAmbassador?.mainColor}
              />
            </motion.div>
          </div>
          
          {/* Tabbed Content */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex border-b border-white/10 mb-8">
              <button 
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "details" 
                    ? "text-gold border-b-2 border-gold" 
                    : "text-white/60 hover:text-white/80"
                }`}
                onClick={() => setActiveTab("details")}
              >
                Product Details
              </button>
              <button 
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "ingredients" 
                    ? "text-gold border-b-2 border-gold" 
                    : "text-white/60 hover:text-white/80"
                }`}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </button>
              <button 
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "mythology" 
                    ? "text-gold border-b-2 border-gold" 
                    : "text-white/60 hover:text-white/80"
                }`}
                onClick={() => setActiveTab("mythology")}
              >
                Frog Mythology
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === "details" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-white/80 mb-8 max-w-3xl">
                    {product.description}
                  </p>
                  
                  {product.details?.benefits && (
                    <div className="mb-8">
                      <h3 className="text-gold font-medium mb-3">Benefits</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.details.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-white/80">
                            <span className="text-gold mr-2">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.details?.effects && (
                    <div>
                      <h3 className="text-gold font-medium mb-3">Effects</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.details.effects.map((effect, i) => (
                          <li key={i} className="flex items-start text-white/80">
                            <span className="text-gold mr-2">•</span>
                            {effect}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}
              
              {activeTab === "ingredients" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <EnhancedIngredientStory 
                    ingredients={getIngredients()} 
                    accentColor={frogAmbassador?.mainColor}
                  />
                </motion.div>
              )}
              
              {activeTab === "mythology" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {frogAmbassador && (
                    <EnhancedFrogAmbassador 
                      frog={frogAmbassador}
                      productName={product.name}
                    />
                  )}
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Ritual Instructions section */}
          {product.ritualSteps && (
            <section id="ritual" className="mt-16 mb-24">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-serif text-gold">Ritual Application Guide</h2>
                <p className="text-white/70 mt-2 max-w-2xl mx-auto">
                  Follow these mindful steps to experience the full benefits of your {product.name}
                </p>
              </div>
              <EnhancedRitualInstructions 
                productName={product.name}
                steps={product.ritualSteps}
              />
            </section>
          )}
          
          {/* Related Products */}
          <RelatedProducts currentProductId={product.id} relatedIds={product.relatedProducts || []} />
          
          {/* Add to Cart Sticky Bar for Mobile */}
          <MobilePurchaseBar 
            product={product}
            onAddToCart={handleAddToCart}
          />
        </MaContainer>
      </HabitatBackground>
    </ShopLayout>
  );
};

export default EnhancedProductDetail;
