
import React from "react";
import Navigation from "@/components/navigation/Navigation";
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
      <Navigation scrollPosition={scrollPosition} />
      
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
