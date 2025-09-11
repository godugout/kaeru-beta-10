
import { useState, useEffect } from "react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/ui/footer";
import ProductShowcase from "@/components/sections/ProductShowcase";
import { productData } from "@/data/productData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RitualPathQuiz from "@/components/ritual-builder/RitualPathQuiz";
import SectionHero from "@/components/ui/SectionHero";
import SeasonalThemeSelector from "@/components/seasonal/SeasonalThemeSelector";
import { useSeasonalTheme } from "@/contexts/SeasonalThemeContext";
import SeasonalHeroBackground from "@/components/seasonal/SeasonalHeroBackground";
import FrogReturnsEasterEgg from "@/components/easter-egg/FrogReturnsEasterEgg";

const Rituals = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const { currentSeason, colors } = useSeasonalTheme();
  
  useEffect(() => {
    // Make content visible after initial load
    setContentVisible(true);
    
    // Scroll event listener
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <Navigation scrollPosition={scrollPosition} />
      
      {/* Easter Egg Component */}
      <FrogReturnsEasterEgg />
      
      <div className={`transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <SeasonalHeroBackground className="py-32 text-center">
          <SectionHero
            title="RITUAL PRACTICES"
            subtitle="Inspired by Japanese mindfulness and guided by nature's most transformative creatures, our rituals combine ancient wisdom with modern wellness science."
            contentVisible={contentVisible}
          />
          
          {/* Season Selector */}
          <div className="mt-12">
            <h3 className="text-gold text-sm mb-4">EXPERIENCE BY SEASON</h3>
            <SeasonalThemeSelector />
          </div>
        </SeasonalHeroBackground>
        
        {/* New Ritual Path Quiz Section */}
        <RitualPathQuiz />
        
        {/* Ritual Builder CTA */}
        <section className="py-16 bg-gray-900/40 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-3">Discover Your Return Path</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Every journey begins with understanding your true nature. Our ritual builder guides you 
              to products that resonate with your essence and needs.
            </p>
            <Link to="/ritual-builder">
              <Button className="bg-gold hover:bg-gold/80 text-black">
                Begin Your Ritual <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Product Rituals Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-sm tracking-widest text-gold mb-4">FORMULATIONS</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-white">Products & Their Rituals</h3>
              <p className="text-white/70 max-w-2xl mx-auto mt-4">
                Each KAERU product comes with its own application ritual, designed to maximize
                both physiological benefits and mindful presence.
              </p>
            </div>
            
            {/* Product Showcase with Rituals */}
            <ProductShowcase products={productData} />
          </div>
        </section>
        
        {/* Practice Principles */}
        <section className="py-24 bg-gray-900/40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-sm tracking-widest text-gold mb-4">PRINCIPLES</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Elements of Practice</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Every ritual in the Kaeru system incorporates these foundational elements,
                ensuring a complete practice that affects both body and mind.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Element 1 */}
              <div className="p-8 border border-gold/20 bg-black/40 backdrop-blur-sm hover:border-gold/40 transition-all">
                <div className="text-gold text-3xl font-serif mb-4">心</div>
                <h4 className="font-serif text-xl text-white mb-2">Mindful Intention</h4>
                <p className="text-white/70 text-sm">
                  Begin each ritual by setting a clear intention. This conscious orientation of
                  mind creates the foundation for presence and meaningful practice.
                </p>
              </div>
              
              {/* Element 2 */}
              <div className="p-8 border border-gold/20 bg-black/40 backdrop-blur-sm hover:border-gold/40 transition-all">
                <div className="text-gold text-3xl font-serif mb-4">息</div>
                <h4 className="font-serif text-xl text-white mb-2">Breath Awareness</h4>
                <p className="text-white/70 text-sm">
                  Conscious breathing forms the rhythmic backbone of all Kaeru rituals, 
                  synchronizing movement with breath to deepen presence.
                </p>
              </div>
              
              {/* Element 3 */}
              <div className="p-8 border border-gold/20 bg-black/40 backdrop-blur-sm hover:border-gold/40 transition-all">
                <div className="text-gold text-3xl font-serif mb-4">触</div>
                <h4 className="font-serif text-xl text-white mb-2">Sensory Engagement</h4>
                <p className="text-white/70 text-sm">
                  Each ritual activates multiple senses, creating a rich, immersive 
                  experience that anchors awareness in the present moment.
                </p>
              </div>
              
              {/* Element 4 */}
              <div className="p-8 border border-gold/20 bg-black/40 backdrop-blur-sm hover:border-gold/40 transition-all">
                <div className="text-gold text-3xl font-serif mb-4">型</div>
                <h4 className="font-serif text-xl text-white mb-2">Form & Sequence</h4>
                <p className="text-white/70 text-sm">
                  Like traditional kata, our rituals follow specific patterns that, 
                  when practiced regularly, become embodied wisdom.
                </p>
              </div>
              
              {/* Element 5 */}
              <div className="p-8 border border-gold/20 bg-black/40 backdrop-blur-sm hover:border-gold/40 transition-all">
                <div className="text-gold text-3xl font-serif mb-4">続</div>
                <h4 className="font-serif text-xl text-white mb-2">Consistent Practice</h4>
                <p className="text-white/70 text-sm">
                  The true power of ritual emerges through regular practice, creating 
                  positive neurological pathways and lasting transformation.
                </p>
              </div>
              
              {/* Element 6 */}
              <div className="p-8 border border-gold/20 bg-black/40 backdrop-blur-sm hover:border-gold/40 transition-all">
                <div className="text-gold text-3xl font-serif mb-4">応</div>
                <h4 className="font-serif text-xl text-white mb-2">Adaptive Response</h4>
                <p className="text-white/70 text-sm">
                  While structured, our rituals encourage personalization and adaptation
                  to individual needs, honoring the uniqueness of each practitioner.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Link to="/journal">
                <Button variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
                  Unlock the Wisdom
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Rituals;
