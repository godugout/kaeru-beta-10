
import { useState } from "react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/ui/footer";
import { MaContainer, ScrollSection } from "@/components/ui/japanese/Layout";
import { JapaneseHeading } from "@/components/ui/japanese/Typography";
import { SeasonalTexture } from "@/components/ui/japanese/Textures";
import { japaneseDesignSystem } from "@/theme/japaneseTheme";
import FoundersJourney from "@/components/sections/FoundersJourney";
import FounderOrigins from "@/components/sections/FounderOrigins";
import { Link } from "react-router-dom";

const Origins = () => {
  const scrollPosition = useState(0)[0];
  const currentSeason = japaneseDesignSystem.getSeason();
  
  return (
    <div className="bg-black min-h-screen">
      <Navigation scrollPosition={scrollPosition} />
      
      <div className="pt-24 pb-16">
        <SeasonalTexture season={currentSeason} className="relative">
          {/* Hero Banner */}
          <ScrollSection className="pb-shaku">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-sm tracking-widest text-gold uppercase mb-4">KAERU ORIGINS</h1>
                <JapaneseHeading className="text-4xl md:text-6xl mb-6">
                  Our Journey of Return
                </JapaneseHeading>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Discover the story, philosophy, and vision behind KAERU — a journey of transformation and return to balance.
                </p>
              </div>
            </div>
          </ScrollSection>
          
          {/* Origins Sections */}
          <MaContainer>
            {/* Story overview */}
            <FounderOrigins />
            
            {/* Founder's detailed journey */}
            <FoundersJourney />
            
            {/* Link to full founder story */}
            <div className="text-center my-16">
              <h2 className="text-sm tracking-widest text-gold mb-4">FURTHER EXPLORATION</h2>
              <div className="space-y-4">
                <div>
                  <Link 
                    to="/origins/founders-story" 
                    className="inline-block px-8 py-3 border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 tracking-widest"
                  >
                    READ THE FULL FOUNDER'S STORY
                  </Link>
                </div>
              </div>
            </div>
          </MaContainer>
        </SeasonalTexture>
      </div>
      
      <Footer />
    </div>
  );
};

export default Origins;
