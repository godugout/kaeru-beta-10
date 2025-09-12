
import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import Footer from "@/components/ui/footer";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";
import FounderBackground from "@/components/founder/FounderBackground";

interface FounderLayoutProps {
  children: ReactNode;
}

const FounderLayout = ({ children }: FounderLayoutProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const { shouldAnimate, getOptimizedDuration } = useOptimizedAnimation();
  
  useEffect(() => {
    // Make content visible after initial load - optimized timing
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, getOptimizedDuration(300)); // reduced from 600ms
    
    // Simplified scroll event listener with debounce
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [getOptimizedDuration]);

  return (
    <FounderBackground>
      {/* Navigation */}
      <EnhancedNavigation scrollPosition={scrollPosition} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
        
        {/* Footer */}
        <Footer />
      </motion.div>
    </FounderBackground>
  );
};

export default FounderLayout;
