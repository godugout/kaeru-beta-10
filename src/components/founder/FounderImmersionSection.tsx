
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageWithOverlay from "@/components/ui/ImageWithOverlay";
import FounderStorySection from "@/components/founder/FounderStorySection";
import { WabiSabiBlock } from "@/components/ui/japanese/Layout";
import FounderFeaturedProducts from "@/components/founder/FounderFeaturedProducts";
import { KaeruArrowButton } from "@/components/ui/kaeru/KaeruButton";

const FounderImmersionSection = () => {
  return (
    <FounderStorySection 
      id="immersion"
      title="Cultural Immersion" 
      index={1}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-white/80 leading-relaxed">
              Fascinated by this initial experience, I immersed myself in Japanese wellness traditions. 
              The practices of <em>zazen</em> (seated meditation), <em>aikido</em>, and <em>ikebana</em> 
              (flower arranging) became my daily rituals, each teaching valuable lessons about harmony and intention.
            </p>
            
            <p className="text-white/80 leading-relaxed">
              I realized that true wellness wasn't about quick fixes but about cultivating a deep connection 
              to natural cycles. This epiphany led me on a quest for the purest ingredients, working with 
              sustainable Japanese farms harvesting botanicals according to ancient methods.
            </p>
          </div>
        </div>
        
        <div>
          <ImageWithOverlay 
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=800" 
            alt="Traditional Japanese garden representing harmony with nature"
            title="Harmony with nature"
            subtitle="DAILY PRACTICE"
            height="medium"
          />
          
          {/* Mid-content CTA */}
          <div className="mt-6 text-center">
            <KaeruArrowButton
              href="/rituals"
              variant="goldOutline"
              size="sm"
            >
              Discover Our Daily Rituals
            </KaeruArrowButton>
          </div>
        </div>
      </div>
      
      <WabiSabiBlock className="bg-black/30 p-6 my-8 rounded">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <p className="text-gold text-sm tracking-wider mb-1">BALANCE</p>
            <p className="text-white/80 text-sm">Our <Link to="/shop/harmony" className="underline hover:text-gold">Harmony Collection</Link> restores equilibrium between body and mind</p>
          </div>
          <div className="p-4">
            <p className="text-gold text-sm tracking-wider mb-1">PURITY</p>
            <p className="text-white/80 text-sm">Every ingredient sourced with reverence for nature in our <Link to="/shop/kaeru-clarity" className="underline hover:text-gold">Clarity oils</Link></p>
          </div>
          <div className="p-4">
            <p className="text-gold text-sm tracking-wider mb-1">INTENTION</p>
            <p className="text-white/80 text-sm">Experience transformative moments with our <Link to="/shop/kaeru-gold" className="underline hover:text-gold">Gold Collection</Link></p>
          </div>
        </div>
      </WabiSabiBlock>
      
      <FounderFeaturedProducts />
    </FounderStorySection>
  );
};

export default FounderImmersionSection;
