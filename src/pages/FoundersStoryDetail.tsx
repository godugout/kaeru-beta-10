
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import Footer from "@/components/ui/footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FounderLayout from "@/components/layouts/FounderLayout";
import FounderHero from "@/components/founder/FounderHero";
import FounderFeatureImage from "@/components/founder/FounderFeatureImage";
import FounderReturnSection from "@/components/founder/FounderReturnSection";
import FounderImmersionSection from "@/components/founder/FounderImmersionSection";
import FounderVisionSection from "@/components/founder/FounderVisionSection";
import FounderCTA from "@/components/founder/FounderCTA";
import { MaContainer } from "@/components/ui/japanese/Layout";

const FoundersStoryDetail = () => {
  return (
    <FounderLayout>
      {/* Back link to Origins */}
      <div className="container mx-auto px-4 pt-24">
        <Link 
          to="/origins" 
          className="text-gold/80 hover:text-gold flex items-center gap-2 transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          <span>Return to Origins</span>
        </Link>
      </div>
      
      {/* Hero Section */}
      <FounderHero />
      
      {/* Main content with improved structure */}
      <MaContainer className="pb-16">
        {/* Featured story image with optimized loading */}
        <FounderFeatureImage priority={true} />
        
        {/* Content sections */}
        <FounderReturnSection />
        <FounderImmersionSection />
        <FounderVisionSection />
        
        {/* Final CTA section */}
        <FounderCTA />
      </MaContainer>
    </FounderLayout>
  );
};

export default FoundersStoryDetail;
