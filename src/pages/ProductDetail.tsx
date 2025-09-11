
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ShopLayout from "@/components/layouts/ShopLayout";
import RitualInstructions from "@/components/product/RitualInstructions";
import RelatedProducts from "@/components/shop/RelatedProducts";
import { MaContainer } from "@/components/ui/japanese/Layout";
import { productData } from "@/data/productData";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

// Import the refactored components
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/product/ProductActions";
import ProductTabs from "@/components/product/ProductTabs";
import MobilePurchaseBar from "@/components/product/MobilePurchaseBar";

const ProductDetail = () => {
  const { productId } = useParams();
  const { addItem } = useCart();
  const { toast } = useToast();
  
  // Find the product based on the ID
  const product = productData.find(p => p.id === productId) || productData[0];
  
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
            <ProductActions product={product} />
          </motion.div>
        </div>
        
        {/* Product Detail Tabs */}
        <ProductTabs product={product} />
        
        {/* Ritual Instructions section */}
        {product.ritualSteps && (
          <section id="ritual" className="mt-16 mb-24">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif text-gold">Ritual Application Guide</h2>
              <p className="text-white/70 mt-2 max-w-2xl mx-auto">
                Follow these mindful steps to experience the full benefits of your {product.name}
              </p>
            </div>
            <RitualInstructions 
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
    </ShopLayout>
  );
};

export default ProductDetail;
