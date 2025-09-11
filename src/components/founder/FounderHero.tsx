
import { Link } from "react-router-dom";
import SectionHero from "@/components/ui/SectionHero";

const FounderHero = () => {
  return (
    <div className="pt-28 pb-8 relative">
      <SectionHero 
        title="The Founder's <span class='text-gold'>Story</span>"
        subtitle="How ancient Japanese wisdom inspired Kaeru's transformative wellness rituals"
      />

      {/* Quick links for better navigation */}
      <div className="flex justify-center gap-4 mt-4">
        <Link to="#the-return" className="text-gold/80 hover:text-gold text-sm transition-colors border-b border-gold/40 hover:border-gold">The Origin</Link>
        <Link to="#immersion" className="text-gold/80 hover:text-gold text-sm transition-colors border-b border-gold/40 hover:border-gold">Cultural Immersion</Link>
        <Link to="#vision" className="text-gold/80 hover:text-gold text-sm transition-colors border-b border-gold/40 hover:border-gold">The Vision</Link>
      </div>
    </div>
  );
};

export default FounderHero;
