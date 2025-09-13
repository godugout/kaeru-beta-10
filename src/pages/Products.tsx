import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import Footer from "@/components/ui/footer";
import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import SizeSelector from "@/components/products/SizeSelector";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { productCollections, ProductCollection } from "@/data/productsData";

const Products = () => {
  const navigate = useNavigate();
  const scrollPosition = useScrollPosition();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductCollection | null>(null);
  const [showSizeSelector, setShowSizeSelector] = useState(false);

  // Filter products based on selected category
  const filteredProducts = selectedFilter 
    ? productCollections.filter(product => product.category === selectedFilter)
    : productCollections;

  const handleQuickAdd = (product: ProductCollection) => {
    setSelectedProduct(product);
    setShowSizeSelector(true);
  };

  const handleProductClick = (product: ProductCollection) => {
    // Navigate to detailed product page
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (product: ProductCollection, size: '2oz' | '4oz', price: number) => {
    // Add to cart logic here
    console.log(`Added ${product.name} (${size}) - $${price} to cart`);
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-kaeru-black">
      <EnhancedNavigation scrollPosition={scrollPosition} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-kaeru-gold/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1 
              className="font-serif text-4xl md:text-6xl text-kaeru-gold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Frog Ambassador Collections
            </motion.h1>
            <motion.p 
              className="text-lg text-kaeru-fog/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Each collection is guided by a unique frog ambassador, embodying the essence of transformation and balance. 
              Discover which guardian calls to your wellness journey.
            </motion.p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ProductFilters
                collections={productCollections}
                selectedFilter={selectedFilter}
                onFilterSelect={setSelectedFilter}
              />
            </motion.div>

            {/* Products Grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard
                    product={product}
                    onQuickAdd={handleQuickAdd}
                    onProductClick={handleProductClick}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-4xl mb-4">🐸</div>
                <h3 className="font-serif text-xl text-kaeru-fog mb-2">No collections found</h3>
                <p className="text-kaeru-fog/70">Try adjusting your filters to see more products.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Frog Ambassador Info Section */}
        <section className="py-16 bg-kaeru-stone/10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2 
              className="font-serif text-3xl md:text-4xl text-kaeru-gold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Meet Your Frog Ambassadors
            </motion.h2>
            <motion.p 
              className="text-lg text-kaeru-fog/80 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              In Japanese culture, frogs symbolize transformation, good fortune, and the ability to return home safely. 
              Each of our ambassador species embodies unique qualities that guide the formulation and purpose of their collection, 
              helping you find your way back to balance and well-being.
            </motion.p>
          </div>
        </section>
      </main>

      {/* Size Selector Modal */}
      {selectedProduct && (
        <SizeSelector
          product={selectedProduct}
          isOpen={showSizeSelector}
          onClose={() => {
            setShowSizeSelector(false);
            setSelectedProduct(null);
          }}
          onAddToCart={handleAddToCart}
        />
      )}

      <Footer />
    </div>
  );
};

export default Products;