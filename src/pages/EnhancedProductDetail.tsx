
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ShopLayout from "@/components/layouts/ShopLayout";
import { MaContainer } from "@/components/ui/japanese/Layout";
import { productData } from "@/data/productData";
import SEOHead from "@/components/seo/SEOHead";
import { trackViewItem } from "@/utils/analytics";
import { useEffect } from "react";

// Import enhanced components
import EnhancedProductGallery from "@/components/product/EnhancedProductGallery";
import EnhancedProductInfo from "@/components/product/EnhancedProductInfo";
import EnhancedRitualInstructions from "@/components/product/EnhancedRitualInstructions";
import IngredientsSection from "@/components/product/IngredientsSection";
import BenefitsBar from "@/components/product/BenefitsBar";
import EnhancedRelatedProducts from "@/components/product/EnhancedRelatedProducts";

const EnhancedProductDetail = () => {
  const { productId } = useParams();
  
  // Find the product based on the ID
  const product = productData.find(p => p.id === productId) || productData[0];
  
  useEffect(() => {
    // Track product view for analytics
    trackViewItem(product.id, product.name, product.collection, product.price);
  }, [product]);
  
  return (
    <>
      <SEOHead 
        title={`${product.name} - KAERU CBD`}
        description={`${product.description} Premium CBD wellness product from KAERU's ${product.collection}.`}
        keywords={`CBD, ${product.name}, ${product.collection}, wellness, Japanese, ritual`}
        type="product"
        productData={{
          name: product.name,
          price: product.price,
          currency: "USD",
          sku: product.sku || product.id,
          brand: "KAERU CBD",
          category: product.collection
        }}
      />
    <ShopLayout>
      <MaContainer className="py-12 md:py-16">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/50 text-sm mb-8"
        >
          <Link 
            to="/products" 
            className="hover:text-kaeru-gold transition-colors flex items-center group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>
        </motion.div>
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Product Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <EnhancedProductGallery product={product} />
          </motion.div>
          
          {/* Product Info */}
          <EnhancedProductInfo product={product} />
        </div>
        
        {/* Benefits Bar */}
        <BenefitsBar />
        
        {/* Ritual Instructions */}
        <EnhancedRitualInstructions />
        
        {/* Ingredients Section */}
        <IngredientsSection product={product} />
        
        {/* Related Products */}
        <EnhancedRelatedProducts 
          currentProductId={product.id} 
          relatedIds={product.relatedProducts || []} 
        />
      </MaContainer>
    </ShopLayout>
    </>
  );
};

export default EnhancedProductDetail;
