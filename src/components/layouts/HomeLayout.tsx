
import React, { ReactNode } from 'react';
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/ui/footer";
import KaeruLogo from "@/components/hero/KaeruLogo";
import FrogReturns from "@/components/special/FrogReturns";

interface HomeLayoutProps {
  children: ReactNode;
  introComplete: boolean;
  contentVisible: boolean;
  scrollPosition: number;
  showFrogReturns: boolean;
  onCloseFrogReturns: () => void;
}

const HomeLayout = ({ 
  children, 
  introComplete, 
  contentVisible, 
  scrollPosition,
  showFrogReturns,
  onCloseFrogReturns
}: HomeLayoutProps) => {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Initial Loading Screen */}
      {!introComplete && (
        <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">
          <KaeruLogo />
        </div>
      )}
      
      {/* Easter Egg Modal */}
      <FrogReturns 
        isOpen={showFrogReturns} 
        onClose={onCloseFrogReturns} 
      />
      
      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation */}
        <Navigation scrollPosition={scrollPosition} />
        
        {/* Page Content */}
        {children}
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
