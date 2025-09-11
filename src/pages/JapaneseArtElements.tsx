
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/ui/footer";
import JapaneseArtInspiredElements from "@/components/sections/JapaneseArtInspiredElements";
import FoundersJourney from "@/components/sections/FoundersJourney";

const JapaneseArtElements = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  
  useEffect(() => {
    // Make content visible after initial load
    setContentVisible(true);
    
    // Scroll event listener
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <Navigation scrollPosition={scrollPosition} />
      
      <motion.div
        className="transition-opacity duration-1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Content */}
        <JapaneseArtInspiredElements />
        
        {/* Founder's Journey */}
        <FoundersJourney />
        
        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
};

export default JapaneseArtElements;
