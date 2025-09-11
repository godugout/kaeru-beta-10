
import { motion } from "framer-motion";

interface OriginsContentProps {
  textY: any; // Motion value
}

const OriginsContent = ({ textY }: OriginsContentProps) => {
  return (
    <motion.div
      style={{ y: textY }}
      className="order-2 md:order-1"
    >
      <div className="space-y-8 md:pr-12">
        <p className="text-white/80 leading-relaxed">
          In Japanese folklore, frogs are sacred symbols of safe return, healing, and rebirth.
          Warriors carried frog charms into battle, believing the spirit of Kaeru would guide them safely home.
          <span className="block text-xs text-gold/60 mt-2">帰る • To Return Home</span>
        </p>
        <p className="text-white/80 leading-relaxed">
          Our founder, a martial artist and herbalist, discovered the healing properties of CBD
          during his own recovery journey. Combining Eastern wisdom with modern science,
          he created formulations that honor the frog's symbolism of transformation and renewal.
          <span className="block text-xs text-accent-blue/60 mt-2">変わる • To Transform</span>
        </p>
        <p className="text-white/80 leading-relaxed">
          Each KAERU product is named after a specific frog species, chosen for its unique
          adaptations and characteristics that mirror the product's benefits.
          <span className="block text-xs text-accent-red/60 mt-2">蛙の使者 • Frog Messengers</span>
        </p>
        
        {/* Japanese-style signature element with accent colors */}
        <div className="pt-6">
          <div className="h-px w-16 bg-gradient-to-r from-gold via-accent-blue/30 to-accent-red/30 mb-6"></div>
          <div className="font-serif text-gold/80 text-sm">
            <em>Takashi Kaeru, Founder</em>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OriginsContent;
