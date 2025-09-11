
import { useState, useEffect } from "react";
import ShopLayout from "@/components/layouts/ShopLayout";
import { motion } from "framer-motion";
import { ScrollSection } from "@/components/ui/japanese/Layout";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import { productData } from "@/data/productData";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Import modular shop components
import ShopHeroSection from "@/components/sections/shop/ShopHeroSection";
import ShopTabsSection from "@/components/sections/shop/ShopTabsSection";
import ShopIngredientsSection from "@/components/sections/shop/ShopIngredientsSection";
import ShopBenefitsSection from "@/components/sections/shop/ShopBenefitsSection";
import ShopCTASection from "@/components/sections/shop/ShopCTASection";
import { ProductCard } from "@/components/shop/ProductCard";
import MerchandiseSection from "@/components/shop/MerchandiseSection";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productData);
  const [contentVisible, setContentVisible] = useState(false);
  const { shouldAnimate, getOptimizedDuration } = useOptimizedAnimation();
  
  useEffect(() => {
    // Make content visible after initial load
    setContentVisible(true);
    
    // Filter products based on search term
    const results = productData.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.collection.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  // Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: shouldAnimate ? 0.2 : 0,
        delayChildren: shouldAnimate ? 0.3 : 0
      }
    }
  };

  return (
    <ShopLayout>
      <main className={`transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* All Shop Sections with Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <ShopHeroSection />
          
          {/* Enhanced search bar for better product discovery */}
          <div className="relative max-w-4xl mx-auto px-4 -mt-8 mb-8 z-10">
            <div className="flex bg-black/70 backdrop-blur-sm border border-gold/30 rounded-md p-1 shadow-lg">
              <input
                type="text"
                placeholder="Search for products, collections, or benefits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent border-none text-white px-4 py-3 focus:outline-none"
              />
              <Button variant="ghost" className="text-gold">
                <Search size={20} />
              </Button>
            </div>
          </div>
          
          {/* Featured Products Section */}
          <ScrollSection className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-sm tracking-widest text-gold uppercase text-center mb-2">FEATURED PRODUCTS</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-white text-center mb-8">
                Our Signature Collection
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12 text-white/70">
                  No products found matching "{searchTerm}"
                </div>
              )}
            </div>
          </ScrollSection>
          
          {/* Product Categories */}
          <ScrollSection>
            <ShopTabsSection />
          </ScrollSection>
          
          {/* Merchandise Section - New Addition */}
          <MerchandiseSection />
          
          {/* Ingredient Narratives Section */}
          <ShopIngredientsSection />
          
          {/* Product Benefits */}
          <ScrollSection>
            <ShopBenefitsSection />
          </ScrollSection>
          
          {/* Ritual Builder CTA */}
          <ShopCTASection />
        </motion.div>
      </main>
    </ShopLayout>
  );
};

export default Shop;
