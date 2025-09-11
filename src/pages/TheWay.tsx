
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import Footer from "@/components/ui/footer";
import EssenceSection from "@/components/sections/EssenceSection";
import KaeruHero from "@/components/sections/KaeruHero";
import PhilosophyPrinciples from "@/components/sections/PhilosophyPrinciples";
import JournalPreviews from "@/components/sections/JournalPreviews";
import KaeruArtGallery from "@/components/sections/KaeruArtGallery";
import WaterRipple from "@/components/animations/WaterRipple";
import VerticalRhythm from "@/components/ui/japanese/VerticalRhythm";
import { JapaneseHeading, JapaneseProse } from "@/components/ui/japanese/Typography";
import { ScrollSection, AsymmetricalCard } from "@/components/ui/japanese/Layout";
import { WashiTexture } from "@/components/ui/japanese/Textures";

const TheWay = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  
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
  
  const toggleScienceSection = () => {
    // Navigate to the Science page
    window.location.href = '/science';
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Enhanced Navigation with water ripple effect */}
      <EnhancedNavigation scrollPosition={scrollPosition} />
      
      <div className={`transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section with subtle water ripple */}
        <WaterRipple>
          <KaeruHero />
        </WaterRipple>
        
        {/* Essence Section with vertical rhythm */}
        <VerticalRhythm spacing="loose">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <EssenceSection 
              toggleScienceSection={toggleScienceSection}
              scrollPosition={scrollPosition}
            />
          </motion.section>
        </VerticalRhythm>
        
        {/* Japanese Philosophy Featured Banner */}
        <motion.div 
          className="relative w-full overflow-hidden h-96 bg-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <WashiTexture className="absolute inset-0 opacity-20 z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-black z-10"></div>
          <img 
            src="/lovable-uploads/b6ab7a27-68af-4c40-a8f6-2877f3f77b89.png" 
            alt="Kaeru Calm Banner" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h2 className="text-gold text-sm tracking-widest mb-3">THE ESSENCE OF RETURN</h2>
                <h3 className="text-white text-3xl md:text-4xl font-serif mb-6">Finding Calm in Chaos</h3>
                <JapaneseProse className="text-white/70">
                  <p>
                    Like the frog that sits perfectly still upon the lotus, our journey is about 
                    returning to our natural state of balance, clarity, and presence.
                  </p>
                </JapaneseProse>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Philosophy Principles with water ripple */}
        <WaterRipple className="py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <PhilosophyPrinciples />
          </motion.div>
        </WaterRipple>
        
        {/* Visual Journey - New Section with Asymmetrical Layout */}
        <ScrollSection className="py-16 bg-black/40">
          <div className="container mx-auto px-4">
            <JapaneseHeading className="text-center mb-12">
              The Visual Journey
            </JapaneseHeading>
            
            <div className="space-y-16">
              <AsymmetricalCard 
                image="/lovable-uploads/64847212-c543-4cd6-b98f-5c7a4e840dd4.png"
                imagePosition="right"
              >
                <JapaneseHeading>Natural Balance</JapaneseHeading>
                <JapaneseProse className="text-white/70">
                  <p>
                    Our aesthetic draws from the natural world, where balance exists without perfect symmetry. 
                    Like a pebble sitting asymmetrically yet perfectly in a Zen garden, we embrace 
                    the beauty of natural imperfection.
                  </p>
                </JapaneseProse>
              </AsymmetricalCard>
              
              <AsymmetricalCard 
                image="/lovable-uploads/d658e44c-0774-472d-82a2-f3cef3182981.png"
                imagePosition="left"
              >
                <JapaneseHeading>Eastern Wisdom, Western Science</JapaneseHeading>
                <JapaneseProse className="text-white/70">
                  <p>
                    We bridge ancient Japanese wellness philosophies with modern scientific advances. 
                    This harmonious integration creates products that honor tradition while embracing innovation.
                  </p>
                </JapaneseProse>
              </AsymmetricalCard>
              
              <AsymmetricalCard 
                image="/lovable-uploads/b9d677b0-a752-471b-8134-0f3d04821f39.png"
                imagePosition="right"
              >
                <JapaneseHeading>Mindful Application</JapaneseHeading>
                <JapaneseProse className="text-white/70">
                  <p>
                    Each interaction with our products is an opportunity for mindfulness. 
                    The careful application becomes a moment to slow down, creating a deliberate 
                    pause in your day for self-care and reflection.
                  </p>
                </JapaneseProse>
              </AsymmetricalCard>
            </div>
          </div>
        </ScrollSection>
        
        {/* Art Gallery Section with water ripple */}
        <WaterRipple>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <KaeruArtGallery />
          </motion.div>
        </WaterRipple>
        
        {/* Journal Article Previews with vertical rhythm */}
        <VerticalRhythm spacing="normal" className="py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            <JournalPreviews />
          </motion.div>
        </VerticalRhythm>
        
        {/* Footer with subtle texture */}
        <WashiTexture className="opacity-10">
          <Footer />
        </WashiTexture>
      </div>
    </div>
  );
};

export default TheWay;
