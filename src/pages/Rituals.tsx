
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import Footer from "@/components/ui/footer";
import ProductShowcase from "@/components/sections/ProductShowcase";
import { productData } from "@/data/productData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RitualPathQuiz from "@/components/ritual-builder/RitualPathQuiz";
import SeasonalThemeSelector from "@/components/seasonal/SeasonalThemeSelector";
import { useSeasonalTheme } from "@/contexts/SeasonalThemeContext";
import FrogReturnsEasterEgg from "@/components/easter-egg/FrogReturnsEasterEgg";
import RitualAccessGate from "@/components/ritual/RitualAccessGate";

const Rituals = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [showAccessGate, setShowAccessGate] = useState(false);
  const { currentSeason, colors } = useSeasonalTheme();
  
  useEffect(() => {
    // Check if user has already been granted access
    const accessGranted = localStorage.getItem('ritual_access_granted');
    if (accessGranted === 'true') {
      setHasAccess(true);
      setContentVisible(true);
    } else {
      // Show access gate after a brief delay
      setTimeout(() => {
        setShowAccessGate(true);
      }, 500);
    }
    
    // Scroll event listener
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAccessGranted = () => {
    setHasAccess(true);
    setContentVisible(true);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <EnhancedNavigation scrollPosition={scrollPosition} />
      
      {/* Easter Egg Component */}
      <FrogReturnsEasterEgg />
      
      {/* Access Gate */}
      <RitualAccessGate 
        isOpen={showAccessGate && !hasAccess}
        onClose={() => setShowAccessGate(false)}
        onSuccess={handleAccessGranted}
      />
      
      <div className={`transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-kaeru-jade/5 to-black" />
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kaeru-gold/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-kaeru-moss/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: contentVisible ? 1 : 0, y: contentVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-kaeru-fog mb-8 tracking-tight">
                Ritual<br />Practices
              </h1>
              <p className="text-xl md:text-2xl text-kaeru-fog/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                Inspired by Japanese mindfulness and guided by nature's most transformative creatures, 
                our rituals combine ancient wisdom with modern wellness science.
              </p>
              
              {/* Season Selector */}
              <div className="mt-16">
                <h3 className="text-kaeru-gold text-sm tracking-widest mb-6">EXPERIENCE BY SEASON</h3>
                <SeasonalThemeSelector />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* New Ritual Path Quiz Section */}
        <RitualPathQuiz />
        
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
