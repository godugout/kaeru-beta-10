
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PhilosophyPrinciples = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-widest text-gold mb-4">OUR PHILOSOPHY</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">The Five Returns</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our approach to wellness is guided by five essential returns – journeys back to the 
            foundations of balanced living and conscious presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Principle 1 */}
          <motion.div 
            className="p-8 border border-gold/20 bg-black/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-serif text-xl text-gold mb-4">Return to Body</h4>
            <p className="text-white/80 mb-4">
              Reconnecting with our physical self through mindful awareness 
              of sensation, movement, and natural rhythms. When we honor our body's
              wisdom, we establish the foundation for holistic wellness.
            </p>
            <div className="w-12 h-1 bg-gold/40 mt-6"></div>
          </motion.div>
          
          {/* Principle 2 */}
          <motion.div 
            className="p-8 border border-gold/20 bg-black/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-serif text-xl text-gold mb-4">Return to Breath</h4>
            <p className="text-white/80 mb-4">
              The breath is our most constant companion and most powerful tool for 
              presence. By returning awareness to this life-giving rhythm, we access 
              an immediate pathway to calm and clarity.
            </p>
            <div className="w-12 h-1 bg-gold/40 mt-6"></div>
          </motion.div>
          
          {/* Principle 3 */}
          <motion.div 
            className="p-8 border border-gold/20 bg-black/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-serif text-xl text-gold mb-4">Return to Nature</h4>
            <p className="text-white/80 mb-4">
              Modern life has separated us from the natural world that shaped our 
              evolution. By returning to nature – even briefly – we restore balance 
              to our overstimulated nervous systems.
            </p>
            <div className="w-12 h-1 bg-gold/40 mt-6"></div>
          </motion.div>
          
          {/* Principle 4 */}
          <motion.div 
            className="p-8 border border-gold/20 bg-black/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-serif text-xl text-gold mb-4">Return to Presence</h4>
            <p className="text-white/80 mb-4">
              In a distracted age, the practice of returning to the present moment 
              is revolutionary. This return to now is the foundation of all mindfulness 
              practices and the gateway to genuine experience.
            </p>
            <div className="w-12 h-1 bg-gold/40 mt-6"></div>
          </motion.div>
          
          {/* Principle 5 */}
          <motion.div 
            className="p-8 border border-gold/20 bg-black/50 md:col-span-2 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="font-serif text-xl text-gold mb-4">Return to Self</h4>
            <p className="text-white/80 mb-4">
              The ultimate journey is the return to our authentic self – beneath the noise, 
              expectations, and accumulated layers of adaptation. Here we discover our true 
              nature and purpose.
            </p>
            <div className="w-12 h-1 bg-gold/40 mt-6"></div>
          </motion.div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/ritual-builder">
            <Button className="bg-gold hover:bg-gold/80 text-black px-8 py-6 text-lg">
              Find Your Return Path <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
          <p className="mt-4 text-white/60 text-sm">
            Discover which returns will most benefit your current life journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyPrinciples;
