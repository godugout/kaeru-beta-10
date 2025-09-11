
import { KaeruArrowButton, KaeruChevronButton } from "@/components/ui/kaeru/KaeruButton";

const FounderCTA = () => {
  return (
    <div className="bg-black/40 rounded p-8 text-center border border-gold/20 mt-12">
      <h3 className="font-serif text-2xl md:text-3xl text-gold mb-4">Begin Your Journey</h3>
      <p className="text-white/80 mb-6 max-w-2xl mx-auto">
        Ready to experience the transformative power of Kaeru's Japanese-inspired rituals? 
        Our products combine ancient wisdom with modern science to help you find your path to return.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <KaeruArrowButton 
          href="/shop" 
          variant="gold"
        >
          Shop Collection
        </KaeruArrowButton>
        <KaeruChevronButton 
          href="/ritual-builder" 
          variant="goldOutline"
        >
          Find Your Ritual
        </KaeruChevronButton>
      </div>
    </div>
  );
};

export default FounderCTA;
