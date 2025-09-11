
import { Link } from "react-router-dom";
import FounderStorySection from "@/components/founder/FounderStorySection";
import CustomerTestimonial from "@/components/founder/CustomerTestimonial";
import FounderPhilosophy from "@/components/founder/FounderPhilosophy";

const FounderVisionSection = () => {
  return (
    <FounderStorySection 
      id="vision"
      title="The Vision" 
      index={2}
    >
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-white/80 leading-relaxed">
              Creating Kaeru wasn't easy. Translating Eastern philosophies for Western audiences required 
              careful consideration. I had to navigate cultural differences while preserving the authentic 
              essence of these transformative practices.
            </p>
            
            <p className="text-white/80 leading-relaxed">
              Each Kaeru product and ritual is designed as an invitation to <span className="text-gold">pause, 
              reflect, and transform</span>. They embody the Japanese concept of <em>kaeru</em> (to return) in its 
              deepest sense—returning to our true nature, to balance, and to harmony with the world around us.
            </p>
            
            {/* Customer testimonial */}
            <CustomerTestimonial 
              quote="The ritual steps transformed KAERU GOLD from a simple product into a truly transcendent experience. Incredible relief."
              author="Akira T."
              productName="KAERU GOLD"
              rating={5}
              highlight={true}
            />
          </div>
        </div>
        
        <div className="md:col-span-4">
          <FounderPhilosophy />
        </div>
      </div>
    </FounderStorySection>
  );
};

export default FounderVisionSection;
