
import { useEffect, useState } from "react";
import Footer from "@/components/ui/footer";
import FrogReturns from "@/components/special/FrogReturns";
import useKonamiCode from "@/hooks/useKonamiCode";
import HomeHeroSection from "@/components/sections/HomeHeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import OriginsSection from "@/components/sections/OriginsSection";
import ShopSection from "@/components/sections/ShopSection";
import EssenceSection from "@/components/sections/EssenceSection";
import DisciplineJournal from "@/components/sections/DisciplineJournal";
import LoadingScreen from "@/components/loading/LoadingScreen";
import { productData } from "@/data/productData";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { motion } from "framer-motion";
import WaterRipple from "@/components/animations/WaterRipple";
import VerticalRhythm from "@/components/ui/japanese/VerticalRhythm";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const scrollPosition = useScrollPosition();
  
  // Easter egg state
  const [showFrogReturns, setShowFrogReturns] = useState(false);
  const [konamiActivated, resetKonami] = useKonamiCode();
  
  useEffect(() => {    
    // Setup constellation trigger click handler
    const handleConstellationClick = () => {
      setShowFrogReturns(true);
    };
    
    const constellationTrigger = document.getElementById('constellation-trigger');
    if (constellationTrigger) {
      constellationTrigger.addEventListener('click', handleConstellationClick);
    }
    
    return () => {
      if (constellationTrigger) {
        constellationTrigger.removeEventListener('click', handleConstellationClick);
      }
    };
  }, []);
  
  // Handle Konami code activation
  useEffect(() => {
    if (konamiActivated) {
      setShowFrogReturns(true);
      resetKonami();
    }
  }, [konamiActivated, resetKonami]);

  // Handle loading screen completion
  const handleIntroComplete = () => {
    setIntroComplete(true);
    
    // Slight delay before showing content
    setTimeout(() => {
      setContentVisible(true);
    }, 300);
  };
  
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  return (
    <div className="relative bg-black min-h-screen">
      {/* Loading Screen */}
      {!introComplete && <LoadingScreen onComplete={handleIntroComplete} />}
      
      {/* Easter Egg Modal */}
      <FrogReturns 
        isOpen={showFrogReturns} 
        onClose={() => setShowFrogReturns(false)} 
      />
      
      {/* Main Content */}
      <motion.div 
        className="transition-opacity duration-1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
      >
        {/* Enhanced Navigation with water ripple */}
        <EnhancedNavigation scrollPosition={scrollPosition} />
        
        {/* Hero Section */}
        <WaterRipple>
          <HomeHeroSection />
        </WaterRipple>
        
        {/* The Way Section (Brand Philosophy) */}
        <WaterRipple className="py-24">
          <motion.section 
            id="the-way"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <EssenceSection 
              toggleScienceSection={() => window.location.href = '/library'} 
              scrollPosition={scrollPosition}
            />
          </motion.section>
        </WaterRipple>
        
        {/* Rituals Section (Products) with vertical rhythm */}
        <VerticalRhythm spacing="loose">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <ProductsSection products={productData} />
          </motion.div>
        </VerticalRhythm>

        {/* Origins Section with water ripple */}
        <WaterRipple>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <OriginsSection />
          </motion.div>
        </WaterRipple>
        
        {/* Shop Section with vertical rhythm */}
        <VerticalRhythm spacing="normal">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <ShopSection />
          </motion.div>
        </VerticalRhythm>
        
        {/* Discipline Journal Section with water ripple */}
        <WaterRipple className="py-24 bg-gray-950">
          <motion.section 
            id="journal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <DisciplineJournal />
          </motion.section>
        </WaterRipple>
        
        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
