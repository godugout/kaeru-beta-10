
import { Link } from "react-router-dom";
import { KaeruArrowButton } from "@/components/ui/kaeru/KaeruButton";

const FounderFeaturedProducts = () => {
  return (
    <div className="mt-10">
      <h4 className="text-lg text-gold mb-4">Featured Products</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Featured Product 1 */}
        <div className="bg-black/30 p-4 border border-gold/10">
          <div className="aspect-square bg-black overflow-hidden mb-3">
            <img 
              src="https://images.unsplash.com/photo-1631987585061-1006f4d53eff?auto=format&fit=crop&q=80&w=300"
              alt="Kaeru Morning Ritual Kit"
              className="w-full h-full object-cover"
            />
          </div>
          <h5 className="text-white text-md mb-1">Morning Ritual Kit</h5>
          <p className="text-white/60 text-sm mb-3">Begin each day centered and prepared</p>
          <Link to="/shop/morning-ritual" className="text-gold text-sm hover:underline">Discover</Link>
        </div>
        
        {/* Featured Product 2 */}
        <div className="bg-black/30 p-4 border border-gold/10">
          <div className="aspect-square bg-black overflow-hidden mb-3">
            <img 
              src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?auto=format&fit=crop&q=80&w=300"
              alt="Kaeru Evening Soak"
              className="w-full h-full object-cover"
            />
          </div>
          <h5 className="text-white text-md mb-1">Evening Soak</h5>
          <p className="text-white/60 text-sm mb-3">Release tension and prepare for rest</p>
          <Link to="/shop/evening-soak" className="text-gold text-sm hover:underline">Discover</Link>
        </div>
        
        {/* Featured Product 3 */}
        <div className="bg-black/30 p-4 border border-gold/10">
          <div className="aspect-square bg-black overflow-hidden mb-3">
            <img 
              src="https://images.unsplash.com/photo-1542038335240-86aea850d73d?auto=format&fit=crop&q=80&w=300"
              alt="Kaeru Gold Collection"
              className="w-full h-full object-cover"
            />
          </div>
          <h5 className="text-white text-md mb-1">Gold Collection</h5>
          <p className="text-white/60 text-sm mb-3">Our premium transformative formulations</p>
          <Link to="/shop/gold-collection" className="text-gold text-sm hover:underline">Discover</Link>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <KaeruArrowButton href="/shop" variant="goldOutline">
          View All Products
        </KaeruArrowButton>
      </div>
    </div>
  );
};

export default FounderFeaturedProducts;
