
import { useEffect, useState } from "react";
import Footer from "@/components/ui/footer";
import { useFrogEasterEgg } from "@/contexts/FrogEasterEggContext";
import FrogReturnsEasterEgg from "@/components/easter-egg/FrogReturnsEasterEgg";
import EnhancedHeroSection from "@/components/hero/EnhancedHeroSection";
import TheWaySection from "@/components/sections/TheWaySection";
import RitualsSection from "@/components/sections/RitualsSection";
import ReturnSection from "@/components/sections/ReturnSection";
import OriginsHeroSection from "@/components/sections/OriginsHeroSection";
import LoadingScreen from "@/components/loading/LoadingScreen";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { motion } from "framer-motion";
import GoldenPondRipple from "@/components/easter-egg/GoldenPondRipple";
import SEOHead from "@/components/seo/SEOHead";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const scrollPosition = useScrollPosition();
  const { isEasterEggOpen } = useFrogEasterEgg();

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
    <>
      <SEOHead 
        title="KAERU CBD - Premium Japanese-Inspired Wellness"
        description="Transform your wellness journey with KAERU's premium CBD products inspired by Japanese mythology. Shop our ritual-based collection of oils, balms, and serums."
        keywords="CBD, wellness, Japanese, mythology, ritual, skincare, premium, organic, transformation"
      />
      <div className="relative bg-black min-h-screen">
      {/* Loading Screen */}
      {!introComplete && <LoadingScreen onComplete={handleIntroComplete} />}
      
      {/* Easter Egg Modal */}
      <FrogReturnsEasterEgg />
      
      {/* Main Content */}
      <motion.div 
        className="transition-opacity duration-1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
      >
        {/* Enhanced Navigation with water ripple */}
        <EnhancedNavigation scrollPosition={scrollPosition} />
        
        {/* Enhanced Hero Section with Golden Pond Easter Egg */}
        <div className="relative">
          <EnhancedHeroSection />
          <GoldenPondRipple />
        </div>
        
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
    </>
  );
};

export default Index;
