
import { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import Footer from "@/components/ui/footer";
import { WishlistDrawer } from "@/components/shop/WishlistDrawer";
import { SeasonalTexture } from "@/components/ui/japanese/Textures";
import { japaneseDesignSystem } from "@/theme/japaneseTheme";

interface ShopLayoutProps {
  children: ReactNode;
}

const ShopLayout = ({ children }: ShopLayoutProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const currentSeason = japaneseDesignSystem.getSeason();
  
  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <EnhancedNavigation scrollPosition={scrollPosition} />
      
      {/* Wishlist UI - Positioned in top right */}
      <div className="fixed top-4 right-4 z-40">
        <WishlistDrawer />
      </div>
      
      <div className="pt-24 pb-0">
        <SeasonalTexture season={currentSeason} className="relative">
          {children}
        </SeasonalTexture>
      </div>
      
      <Footer />
    </div>
  );
};

export default ShopLayout;
