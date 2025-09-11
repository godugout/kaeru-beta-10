
import { Link } from "react-router-dom";
import { JapaneseCallout } from "@/components/ui/japanese/Typography";

const FounderPhilosophy = () => {
  return (
    <div className="space-y-6">
      <JapaneseCallout className="mb-6">
        <p className="font-serif text-lg text-gold mb-2">"調和と完全性"</p>
        <p className="text-white text-sm mb-1">Chōwa to Kanzensei</p>
        <p className="text-white/70 text-sm italic">Harmony and Completeness</p>
        <p className="text-white/80 text-sm mt-4">
          The foundation of all <Link to="/shop" className="text-gold hover:underline">Kaeru rituals</Link>
        </p>
      </JapaneseCallout>
      
      <div className="bg-black/30 p-4 border border-gold/10 text-center">
        <p className="text-sm text-gold mb-2">OUR VALUES</p>
        <div className="space-y-3">
          <p className="text-white/80 text-sm">Authenticity</p>
          <p className="text-white/80 text-sm">Transformation</p>
          <p className="text-white/80 text-sm">Connection to Nature</p>
          <p className="text-white/80 text-sm">Mindful Practices</p>
        </div>
      </div>
    </div>
  );
};

export default FounderPhilosophy;
