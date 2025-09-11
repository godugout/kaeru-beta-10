
import { useState } from "react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/ui/footer";
import { LibrarySidebar } from "@/components/library/LibrarySidebar";
import { LibraryContent } from "@/components/library/LibraryContent";
import { LibrarySection } from "@/types/library";
import { libraryData } from "@/data/libraryData";
import { ScrollSection } from "@/components/ui/japanese/Layout";
import { JapaneseHeading } from "@/components/ui/japanese/Typography";
import { SeasonalTexture } from "@/components/ui/japanese/Textures";
import { japaneseDesignSystem } from "@/theme/japaneseTheme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JournalContent } from "@/components/library/JournalContent";

type LibraryTab = 'library' | 'journal';

const Library = () => {
  const [currentSection, setCurrentSection] = useState<LibrarySection>(libraryData.sections[0]);
  const [activeTab, setActiveTab] = useState<LibraryTab>('library');
  const scrollPosition = useState(0)[0];
  
  // Get current season for seasonal elements
  const currentSeason = japaneseDesignSystem.getSeason();
  
  return (
    <div className="bg-black min-h-screen">
      <Navigation scrollPosition={scrollPosition} />
      
      <div className="pt-24 pb-16">
        <SeasonalTexture season={currentSeason} className="relative">
          {/* Hero Banner */}
          <ScrollSection className="pb-shaku">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-8">
                <h1 className="text-sm tracking-widest text-gold uppercase mb-4">KNOWLEDGE CENTER</h1>
                <JapaneseHeading className="text-4xl md:text-6xl mb-6">
                  Wisdom & Knowledge
                </JapaneseHeading>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Explore our curated collection of resources on Japanese wellness traditions,
                  modern science, and the transformative philosophy behind KAERU.
                </p>
              </div>
              
              {/* Main content tabs */}
              <div className="max-w-md mx-auto mb-8">
                <Tabs 
                  defaultValue="library" 
                  className="w-full" 
                  onValueChange={(value) => setActiveTab(value as LibraryTab)}
                >
                  <TabsList className="grid grid-cols-2 bg-black/50 border border-white/10">
                    <TabsTrigger value="library" className="text-sm">Library</TabsTrigger>
                    <TabsTrigger value="journal" className="text-sm">Journal</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </ScrollSection>
          
          {/* Main content with sidebar */}
          <div className="max-w-7xl mx-auto px-4">
            {activeTab === 'library' ? (
              <div className="grid md:grid-cols-[280px_1fr] gap-8">
                <LibrarySidebar 
                  sections={libraryData.sections} 
                  currentSection={currentSection}
                  onSectionChange={setCurrentSection}
                />
                
                <LibraryContent section={currentSection} />
              </div>
            ) : (
              <JournalContent />
            )}
          </div>
        </SeasonalTexture>
      </div>
      
      <Footer />
    </div>
  );
};

export default Library;
