
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
import ShopCTASection from "@/components/sections/shop/ShopCTASection";
import { ProductCard } from "@/components/shop/ProductCard";
import RefinedIngredientsSection from "@/components/sections/RefinedIngredientsSection";
import EnhancedMerchandiseDisplay from "@/components/shop/EnhancedMerchandiseDisplay";

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
          
          {/* Kaeru Signature Collection - Enhanced */}
          <ScrollSection className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-sm tracking-widest text-gold uppercase mb-2">KAERU SIGNATURE COLLECTION</h2>
                <h3 className="text-4xl md:text-6xl font-serif text-white mb-6">
                  The Five Transformations
                </h3>
                <p className="text-white/70 max-w-3xl mx-auto text-lg">
                  Each product represents a unique pathway to transformation, inspired by ancient wisdom and modern science.
                </p>
              </div>
              
              {/* Unique Product Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="group relative"
                  >
                    <ProductCard product={product} index={index} />
                  </motion.div>
                ))}
              </div>
              
              {/* Integrated Merchandise Display */}
              <EnhancedMerchandiseDisplay />
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12 text-white/70">
                  <p className="text-lg mb-4">No products found matching "{searchTerm}"</p>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="text-gold hover:text-gold/80 underline"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </ScrollSection>
          
          {/* Sacred Ingredients - The Main Event */}
          <div className="relative">
            <RefinedIngredientsSection />
          </div>
          
          {/* Ritual Builder CTA */}
          <ShopCTASection />
        </motion.div>
      </main>
    </ShopLayout>
  );
};

export default Shop;
