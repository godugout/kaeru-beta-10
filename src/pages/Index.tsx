
import { useEffect, useState } from "react";
import Footer from "@/components/ui/footer";
import FrogReturns from "@/components/special/FrogReturns";
import useKonamiCode from "@/hooks/useKonamiCode";
import EnhancedHeroSection from "@/components/hero/EnhancedHeroSection";
import TheWaySection from "@/components/sections/TheWaySection";
import RitualsSection from "@/components/sections/RitualsSection";
import ReturnSection from "@/components/sections/ReturnSection";
import OriginsHeroSection from "@/components/sections/OriginsHeroSection";
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
        
        {/* Enhanced Hero Section */}
        <EnhancedHeroSection />
        
        {/* The Way Section */}
        <TheWaySection />
        
        {/* Rituals Section */}
        <RitualsSection />
        
        {/* Return Section */}
        <ReturnSection />
        
        {/* Origins Section */}
        <OriginsHeroSection />
        
        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
