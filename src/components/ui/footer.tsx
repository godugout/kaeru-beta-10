
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useFrogEasterEgg } from "@/contexts/FrogEasterEggContext";

const Footer = () => {
  const { openEasterEgg } = useFrogEasterEgg();
  
  return (
    <footer className="bg-black py-16 px-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-gold font-serif text-2xl tracking-widest mb-6">KAERU</div>
            <p className="text-white/50 text-sm">
              Premium CBD wellness inspired by Japanese mythology and the transformative power of nature.
            </p>
          </div>
          <div>
            <div className="text-white font-medium mb-4">EXPLORE</div>
            <ul className="space-y-2 text-white/50">
              <li><a href="#shop" className="hover:text-gold transition-colors duration-300">Shop All</a></li>
              <li><a href="#origins" className="hover:text-gold transition-colors duration-300">Our Story</a></li>
              <li><a href="#rituals" className="hover:text-gold transition-colors duration-300">Frog Ambassadors</a></li>
              <li><a href="#journal" className="hover:text-gold transition-colors duration-300">Wellness Rituals</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-4">SUPPORT</div>
            <ul className="space-y-2 text-white/50">
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Contact Us</a></li>
              <li><Link to="/shipping" className="hover:text-gold transition-colors duration-300">Shipping & Returns</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gold transition-colors duration-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-4">CONNECT</div>
            <p className="text-white/50 mb-4">
              Join our community for exclusive access to special offerings and ancient wisdom.
            </p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-gray-900 border-none px-4 py-2 text-white w-full" />
              <button className="bg-gold text-black px-4 flex items-center justify-center">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Hidden easter egg trigger */}
        <div 
          className="text-center mt-12 cursor-pointer group" 
          onClick={openEasterEgg}
          aria-label="Hidden feature"
        >
          <div className="inline-block">
            <span className="text-gold text-xs">★</span>
            <span className="text-white/30 text-xs ml-1 group-hover:text-gold transition-colors duration-300">
              Discover the Constellation
            </span>
          </div>
        </div>
        
        <div className="text-white/30 text-xs text-center mt-8">
          © {new Date().getFullYear()} KAERU CBD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
