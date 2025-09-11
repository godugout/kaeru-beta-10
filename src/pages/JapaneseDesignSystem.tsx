
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { 
  JapaneseHeading, 
  JapaneseSubheading, 
  JapaneseProse, 
  JapaneseCallout, 
  JapaneseConcept,
  JapanesePullQuote 
} from "@/components/ui/japanese/Typography";
import { 
  MaContainer, 
  AsymmetricGrid, 
  TatamiGrid, 
  ScrollSection,
  WabiSabiBlock,
  AsymmetricalCard 
} from "@/components/ui/japanese/Layout";
import { 
  PaperGrainTexture, 
  WashiTexture, 
  SumiETexture,
  RicePaperTexture,
  SeasonalTexture
} from "@/components/ui/japanese/Textures";

const placeholderImage = "https://images.unsplash.com/photo-1553530666-ba11a90a0803?q=80&w=500&auto=format&fit=crop";
const placeHolderImage2 = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=500&auto=format&fit=crop";

const JapaneseDesignSystem = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="py-4 px-6 flex items-center border-b border-white/10">
        <Link to="/" className="text-white/70 hover:text-white flex items-center gap-2">
          <ChevronLeft size={16} />
          <span>Return Home</span>
        </Link>
        <h1 className="text-center flex-1 text-lg font-serif">Kaeru Japanese Design System</h1>
        <div className="w-24"></div>
      </header>
      
      <MaContainer>
        {/* Introduction */}
        <div className="my-tatami text-center max-w-3xl mx-auto">
          <JapaneseHeading>和のデザイン体系</JapaneseHeading>
          <div className="text-lg text-white/80 mb-8">Japanese Design System</div>
          <JapaneseProse className="text-white/70">
            <p>
              This foundational layout system incorporates traditional Japanese design principles 
              including vertical rhythm, asymmetrical balance, and proportional harmony. These principles 
              create a design language that feels both authentically Japanese and contemporary.
            </p>
          </JapaneseProse>
        </div>
        
        {/* Core Concepts */}
        <div className="mb-tatami">
          <JapaneseSubheading>Core Japanese Aesthetic Principles</JapaneseSubheading>
          
          <TatamiGrid columns={2} className="mb-shaku">
            <JapaneseConcept 
              kanji="間" 
              meaning="Ma" 
              description="The concept of negative space as an active element in design, creating intervals and emphasizing what remains." 
            />
            <JapaneseConcept 
              kanji="侘寂" 
              meaning="Wabi-sabi" 
              description="Finding beauty in imperfection, impermanence, and incompleteness. Embracing natural processes and authentic materials." 
            />
            <JapaneseConcept 
              kanji="余白" 
              meaning="Yohaku" 
              description="Empty space in a composition that invites viewers' imagination and provides visual breathing room." 
            />
            <JapaneseConcept 
              kanji="均衡" 
              meaning="Kinkou" 
              description="Balance through asymmetry, creating dynamic tension rather than static symmetry." 
            />
          </TatamiGrid>
        </div>
        
        {/* Japanese Typography */}
        <ScrollSection className="py-shaku">
          <JapaneseHeading>Typography Components</JapaneseHeading>
          <div className="max-w-3xl">
            <div className="mb-tatami">
              <JapaneseSubheading>Japanese Inspired Heading</JapaneseSubheading>
              <JapaneseProse>
                <p>
                  This heading style is inspired by traditional Japanese calligraphy, with an 
                  asymmetrical underline that evokes a brush stroke and balanced negative space.
                </p>
              </JapaneseProse>
            </div>
            
            <div className="mb-shaku">
              <JapaneseCallout>
                <p className="text-lg mb-sun">Japanese Callout Box</p>
                <p>
                  This callout box uses a washi paper-inspired texture with subtle imperfections, 
                  embodying the wabi-sabi concept of finding beauty in imperfection.
                </p>
              </JapaneseCallout>
            </div>
            
            <div className="mb-tatami">
              <JapanesePullQuote author="Japanese Proverb">
                Vision without action is a daydream. Action without vision is a nightmare.
              </JapanesePullQuote>
            </div>
          </div>
        </ScrollSection>
        
        {/* Layout Systems */}
        <ScrollSection className="py-shaku">
          <JapaneseHeading>Layout Systems</JapaneseHeading>
          
          <div className="mb-tatami">
            <JapaneseSubheading>Asymmetric Grid (Golden Ratio)</JapaneseSubheading>
            <AsymmetricGrid className="mb-shaku">
              <div className="bg-gray-900/30 p-shaku rounded-sm">
                <h3 className="text-lg mb-2">Primary Content</h3>
                <p className="text-white/70">
                  This column is sized according to the golden ratio (1.618). This asymmetrical 
                  layout creates a more dynamic and harmonious composition than strict symmetry.
                </p>
              </div>
              <div className="bg-gray-900/30 p-shaku rounded-sm">
                <h3 className="text-lg mb-2">Secondary Content</h3>
                <p className="text-white/70">
                  The secondary column completes the golden ratio proportion.
                </p>
              </div>
            </AsymmetricGrid>
            
            <JapaneseSubheading>Tatami Grid System</JapaneseSubheading>
            <TatamiGrid columns={3} className="mb-shaku">
              {[1, 2, 3].map(i => (
                <WabiSabiBlock key={i} textureType={i % 2 ? "paper" : "washi"}>
                  <h3 className="text-lg mb-sun">Grid Item {i}</h3>
                  <p className="text-white/70">
                    The tatami grid system is inspired by the traditional Japanese tatami mat 
                    layout, which follows specific proportional rules.
                  </p>
                </WabiSabiBlock>
              ))}
            </TatamiGrid>
          </div>
          
          <div className="mb-tatami">
            <JapaneseSubheading>Asymmetrical Card Layout</JapaneseSubheading>
            <AsymmetricalCard 
              image={placeholderImage}
              className="mb-tatami"
            >
              <div className="space-y-sun-2">
                <h3 className="text-2xl font-serif">Product Title</h3>
                <p className="text-white/70">
                  This asymmetrical card layout places intentional emphasis on the visual elements, 
                  using the Japanese principle of kinkou (balance) through asymmetry.
                </p>
                <button className="mt-shaku bg-transparent border border-gold px-4 py-2 text-gold hover:bg-gold/10 transition-colors">
                  Explore Product
                </button>
              </div>
            </AsymmetricalCard>
            
            <AsymmetricalCard 
              image={placeHolderImage2}
              imagePosition="left"
            >
              <div className="space-y-sun-2">
                <h3 className="text-2xl font-serif">Product Title</h3>
                <p className="text-white/70">
                  Reversing the layout creates visual variety while maintaining the overall design language.
                  Notice how the gradient adds depth to the image edge, creating a subtle transition.
                </p>
                <button className="mt-shaku bg-transparent border border-gold px-4 py-2 text-gold hover:bg-gold/10 transition-colors">
                  Explore Product
                </button>
              </div>
            </AsymmetricalCard>
          </div>
        </ScrollSection>
        
        {/* Background Textures */}
        <ScrollSection className="py-shaku">
          <JapaneseHeading>Background Textures</JapaneseHeading>
          <JapaneseProse className="mb-shaku max-w-3xl">
            <p>
              Background textures are inspired by traditional Japanese materials and techniques, 
              incorporating the wabi-sabi aesthetic of embracing natural patterns and subtle imperfections.
            </p>
          </JapaneseProse>
          
          <TatamiGrid columns={2}>
            <div>
              <JapaneseSubheading>Paper Grain Texture</JapaneseSubheading>
              <PaperGrainTexture className="p-shaku min-h-[200px] flex items-center justify-center rounded-sm">
                <p className="text-black font-medium">Paper Grain Background</p>
              </PaperGrainTexture>
            </div>
            
            <div>
              <JapaneseSubheading>Washi Paper Texture</JapaneseSubheading>
              <WashiTexture className="p-shaku min-h-[200px] flex items-center justify-center rounded-sm">
                <p className="text-black font-medium">Washi Paper Background</p>
              </WashiTexture>
            </div>
            
            <div>
              <JapaneseSubheading>Sumi-e Ink Texture</JapaneseSubheading>
              <SumiETexture className="p-shaku min-h-[200px] flex items-center justify-center rounded-sm">
                <p className="text-white font-medium">Sumi-e Ink Background</p>
              </SumiETexture>
            </div>
            
            <div>
              <JapaneseSubheading>Rice Paper Texture</JapaneseSubheading>
              <RicePaperTexture className="p-shaku min-h-[200px] flex items-center justify-center rounded-sm">
                <p className="text-black font-medium">Rice Paper Background</p>
              </RicePaperTexture>
            </div>
          </TatamiGrid>
        </ScrollSection>
        
        {/* Seasonal Elements */}
        <ScrollSection className="py-shaku">
          <JapaneseHeading>Seasonal Aesthetics</JapaneseHeading>
          <JapaneseProse className="mb-shaku max-w-3xl">
            <p>
              The Japanese concept of seasonal awareness (kisetsukan) is incorporated into the design system,
              with textures, colors, and motifs that change according to the four seasons.
            </p>
          </JapaneseProse>
          
          <TatamiGrid columns={2}>
            <div>
              <JapaneseSubheading>Spring (Haru): Cherry Blossom</JapaneseSubheading>
              <SeasonalTexture season="spring" className="p-shaku min-h-[200px] rounded-sm border border-pink-300/10">
                <div className="p-shaku flex flex-col items-center justify-center h-full">
                  <div className="text-4xl font-serif mb-2">桜</div>
                  <p className="text-white/70">Renewal, fresh beginnings</p>
                </div>
              </SeasonalTexture>
            </div>
            
            <div>
              <JapaneseSubheading>Summer (Natsu): Waves</JapaneseSubheading>
              <SeasonalTexture season="summer" className="p-shaku min-h-[200px] rounded-sm border border-blue-300/10">
                <div className="p-shaku flex flex-col items-center justify-center h-full">
                  <div className="text-4xl font-serif mb-2">波</div>
                  <p className="text-white/70">Cooling, fluid movement</p>
                </div>
              </SeasonalTexture>
            </div>
            
            <div>
              <JapaneseSubheading>Autumn (Aki): Maple Leaves</JapaneseSubheading>
              <SeasonalTexture season="autumn" className="p-shaku min-h-[200px] rounded-sm border border-orange-300/10">
                <div className="p-shaku flex flex-col items-center justify-center h-full">
                  <div className="text-4xl font-serif mb-2">紅葉</div>
                  <p className="text-white/70">Transformation, golden tones</p>
                </div>
              </SeasonalTexture>
            </div>
            
            <div>
              <JapaneseSubheading>Winter (Fuyu): Snow</JapaneseSubheading>
              <SeasonalTexture season="winter" className="p-shaku min-h-[200px] rounded-sm border border-blue-100/10">
                <div className="p-shaku flex flex-col items-center justify-center h-full">
                  <div className="text-4xl font-serif mb-2">雪</div>
                  <p className="text-white/70">Minimalism, reflection</p>
                </div>
              </SeasonalTexture>
            </div>
          </TatamiGrid>
        </ScrollSection>
        
        {/* Usage Guidelines */}
        <ScrollSection className="py-shaku">
          <JapaneseHeading>Usage Guidelines</JapaneseHeading>
          
          <AsymmetricGrid className="mb-tatami">
            <div>
              <JapaneseSubheading>For Designers</JapaneseSubheading>
              <JapaneseProse>
                <ul className="list-disc list-inside space-y-2">
                  <li>Embrace asymmetrical balance rather than strict symmetry</li>
                  <li>Use the Japanese proportional system to maintain visual harmony</li>
                  <li>Incorporate intentional negative space (ma) into your layouts</li>
                  <li>Respect seasonal themes when developing campaigns and content</li>
                  <li>Allow for organic imperfections in textures and visual elements</li>
                </ul>
              </JapaneseProse>
            </div>
            
            <div>
              <JapaneseSubheading>For Developers</JapaneseSubheading>
              <JapaneseProse>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use the built-in spacing utilities (sun, shaku, tatami, ken)</li>
                  <li>Leverage the grid components for layout structure</li>
                  <li>Apply texture components for background variation</li>
                  <li>Follow vertical rhythm principles for text spacing</li>
                  <li>Implement seasonal theme variations when appropriate</li>
                </ul>
              </JapaneseProse>
            </div>
          </AsymmetricGrid>
          
          <JapaneseCallout>
            <p className="mb-sun">
              All components in this design system are responsive and follow accessibility best practices, 
              while maintaining the essence of Japanese aesthetic principles.
            </p>
            <p>
              Carefully consider the visual weight and balance of elements to create a sense of harmony (wa) 
              that guides the user's eye through the experience.
            </p>
          </JapaneseCallout>
        </ScrollSection>
      </MaContainer>
      
      <footer className="py-shaku text-center text-white/60 border-t border-white/10">
        <p>Kaeru Japanese Design System • © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default JapaneseDesignSystem;
