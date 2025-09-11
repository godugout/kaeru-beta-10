
import { useState } from "react";
import { motion } from "framer-motion";
import { KaeruArrowButton } from "@/components/ui/kaeru/KaeruButton";

const ShopCallout = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section id="shop" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-widest text-gold mb-2">PREMIUM FORMULATIONS</h2>
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Begin Your Journey</h3>
          <p className="text-white/70 max-w-xl mx-auto">
            Explore our collection of transformative wellness products, each inspired by the unique qualities of nature's most resilient creatures.
          </p>
        </div>
        
        {/* Featured product with glowing border */}
        <motion.div
          className="relative rounded-sm overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Glowing border effect */}
          <div className={`absolute inset-0 rounded-sm transition-all duration-1000 ${isHovered ? 'bg-gold/20' : 'bg-transparent'}`}></div>
          <div className={`absolute inset-0 rounded-sm border-2 transition-all duration-700 ${isHovered ? 'border-gold/50 scale-95 opacity-100' : 'border-transparent scale-100 opacity-0'}`}></div>
          
          {/* Content */}
          <div className="relative grid md:grid-cols-2 gap-8 items-center bg-black/50 backdrop-blur-sm p-8 md:p-12">
            {/* Left: Product Image - Updated image */}
            <div className={`transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
              <div className="aspect-square bg-black rounded-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/1378ce86-0348-4402-85ed-afb3b4bb6daf.png"
                  alt="Kaeru Vitality green frog themed cream jar with gold accents" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right: Product Info */}
            <div className="text-left">
              <div className="text-gold text-sm mb-2">KAERU VITALITY COLLECTION</div>
              <h4 className="font-serif text-2xl md:text-3xl text-white mb-4">Prosperity Frog Recovery Cream</h4>
              <p className="text-white/70 mb-8">
                Our specialized recovery cream channels the essence of the Japanese Prosperity Frog,
                delivering unparalleled rejuvenation after physical activity or stress.
                The premium formula combines ancient wisdom with modern science.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <KaeruArrowButton
                  href="#"
                  variant="gold"
                >
                  BEGIN YOUR RITUAL
                </KaeruArrowButton>
                
                <KaeruArrowButton
                  href="#"
                  variant="goldOutline"
                >
                  EXPLORE ALL PRODUCTS
                </KaeruArrowButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopCallout;
