
import React from "react";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import Footer from "@/components/ui/footer";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { MaContainer } from "@/components/ui/japanese/Layout";

interface ScienceLayoutProps {
  children: React.ReactNode;
}

const ScienceLayout = ({ children }: ScienceLayoutProps) => {
  const scrollPosition = useScrollPosition();

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <EnhancedNavigation scrollPosition={scrollPosition} />
      
      <div className="pt-20">
        <MaContainer>
          {children}
        </MaContainer>
      </div>
      
      <Footer />
    </div>
  );
};

export default ScienceLayout;
