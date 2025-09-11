
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MaContainer } from "@/components/ui/japanese/Layout";
import { productData } from "@/data/productData";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import { TabContent } from "@/components/shop/TabContent";
import { TabNavigation, TabType } from "@/components/shop/TabNavigation";
import { useProductFilter } from "@/hooks/useProductFilter";

const ShopTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const tabsRef = useRef<HTMLDivElement>(null);
  const { shouldAnimate, getOptimizedDuration } = useOptimizedAnimation();
  const { getFilteredProducts } = useProductFilter();
  
  // Get filtered products for the active tab
  const filteredProducts = getFilteredProducts(productData, activeTab);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    
    // Scroll tab into view on mobile if needed
    if (tabsRef.current && window.innerWidth < 768) {
      tabsRef.current.scrollIntoView({ 
        behavior: shouldAnimate ? 'smooth' : 'auto',
        block: 'start'
      });
    }
  };
  
  return (
    <MaContainer>
      <div className="max-w-6xl mx-auto">
        {/* Accessible tab navigation */}
        <TabNavigation 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />
        
        {/* Products grid with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: getOptimizedDuration(0.3) }}
            role="tabpanel" 
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
            className="focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
          >
            <TabContent 
              products={filteredProducts}
              isVisible={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </MaContainer>
  );
};

export default ShopTabs;
