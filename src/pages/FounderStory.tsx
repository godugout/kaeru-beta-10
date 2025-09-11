
import { MaContainer } from "@/components/ui/japanese/Layout";
import FounderLayout from "@/components/layouts/FounderLayout";
import FounderHero from "@/components/founder/FounderHero";
import FounderFeatureImage from "@/components/founder/FounderFeatureImage";
import FounderReturnSection from "@/components/founder/FounderReturnSection";
import FounderImmersionSection from "@/components/founder/FounderImmersionSection";
import FounderVisionSection from "@/components/founder/FounderVisionSection";
import FounderCTA from "@/components/founder/FounderCTA";

const FounderStory = () => {
  return (
    <FounderLayout>
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

export default FounderStory;
