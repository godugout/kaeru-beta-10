
import { Link } from "react-router-dom";
import { JapaneseCallout } from "@/components/ui/japanese/Typography";
import CustomerTestimonial from "@/components/founder/CustomerTestimonial";
import FounderStorySection from "@/components/founder/FounderStorySection";
import ProductCallout from "@/components/founder/ProductCallout";

const FounderReturnSection = () => {
  return (
    <FounderStorySection 
      id="the-return"
      title="The Return Moment" 
      index={0}
    >
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-white/80 leading-relaxed">
              The seed of <span className="text-gold">Kaeru</span> was planted on a windswept mountainside in Japan, not in a boardroom. 
              After years of relentless striving in the Western corporate world, 
              I found myself depleted and disconnected from my center.
            </p>
            
            <p className="text-white/80 leading-relaxed">
              A chance encounter with a martial arts master became my turning point. His movements 
              embodied both <strong className="text-white">power and profound stillness</strong>—qualities I desperately needed. 
              He introduced me to <em>Seishin</em>, the Japanese practice of cultivating inner peace 
              through connection with nature and intentional ritual.
            </p>

            {/* Strategic product callout */}
            <ProductCallout 
              title="Seishin Collection" 
              description="Experience the balance of strength and calm with our signature blend of Japanese botanicals"
              linkTo="/shop/seishin-collection"
              imageSrc="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=60&w=300"
            />
          </div>
        </div>
        
        {/* Supporting content in sidebar format */}
        <div className="md:col-span-4">
          <JapaneseCallout className="mb-6">
            <p className="font-serif text-lg text-gold mb-2">"真の静けさ"</p>
            <p className="text-white text-sm mb-1">Ma no Shizukesa</p>
            <p className="text-white/70 text-sm italic">True Stillness</p>
            <p className="text-white/80 text-sm mt-4">
              The Japanese concept that inspired our <Link to="/shop/deep-calm" className="text-gold hover:underline">Deep Calm ritual</Link> and <Link to="/shop/seishin-collection" className="text-gold hover:underline">Seishin Collection</Link>
            </p>
          </JapaneseCallout>
          
          {/* Customer testimonial */}
          <CustomerTestimonial 
            quote="The Seishin oils transformed my evening routine. It's like bringing a piece of Japanese tranquility home."
            author="Michelle K."
            rating={5}
          />
        </div>
      </div>
    </FounderStorySection>
  );
};

export default FounderReturnSection;
