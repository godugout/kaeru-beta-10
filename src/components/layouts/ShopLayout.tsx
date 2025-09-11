
import { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/ui/footer";
import CartDrawer from "@/components/shop/cart/CartDrawer";
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
      <Navigation scrollPosition={scrollPosition} />
      
      {/* Cart and Wishlist UI - Prominently positioned */}
      <div className="fixed top-4 right-4 z-40 flex space-x-2">
        <WishlistDrawer />
        <CartDrawer />
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
