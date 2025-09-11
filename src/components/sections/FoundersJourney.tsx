
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OrigamiButton from "../ui/japanese-elements/OrigamiButton";
import { Link } from "react-router-dom";

const FoundersJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation controlled by scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  
  return (
    <section 
      ref={containerRef}
      className="py-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Documentary-style header */}
        <motion.div 
          className="mb-16 text-center"
          style={{ opacity, scale }}
        >
          <h2 className="text-sm tracking-widest text-gold mb-4">THE FOUNDER'S JOURNEY</h2>
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">The Return to Source</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            A personal odyssey from disconnection to discovery, and the birth of KAERU
          </p>
        </motion.div>
        
        {/* Documentary-style narrative */}
        <div className="grid md:grid-cols-5 gap-10">
          {/* Left column with images */}
          <div className="md:col-span-2 space-y-6">
            <motion.div 
              className="aspect-[4/5] bg-amber-50/5 relative overflow-hidden rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src="/lovable-uploads/df61efe1-b32e-4452-9f7d-3bd59943bd42.png" 
                alt="Samurai frog - representing strength and discipline"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs tracking-widest text-gold">STRENGTH & DISCIPLINE</p>
                <p className="text-white/70 text-sm">The warrior's path</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="aspect-square bg-amber-50/5 relative overflow-hidden rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <img 
                src="/lovable-uploads/630416b9-60b6-4a6d-8322-81c1dca6c983.png" 
                alt="Blue frog - representing tranquility and focus"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs tracking-widest text-gold">ANCESTRAL WISDOM</p>
                <p className="text-white/70 text-sm">Eastern healing traditions</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right column with narrative */}
          <div className="md:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-serif text-xl text-gold mb-3">The Return Moment</h4>
              <p className="text-white/80 leading-relaxed mb-4">
                The seed of Kaeru was planted not in a boardroom, but on a windswept mountainside in Japan. 
                It was there, amidst the ancient forests and the hushed reverence of a Shinto shrine, 
                that I experienced my "return moment." Years of relentless striving in the Western world 
                had left me depleted, disconnected from my own center.
              </p>
              <p className="text-white/80 leading-relaxed">
                A chance encounter with a local martial arts master, a man whose movements embodied both 
                power and profound stillness, became my turning point. He introduced me to the principles 
                of <em>Seishin</em> – the cultivation of inner peace and mental clarity – and the 
                transformative power of nature.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-serif text-xl text-gold mb-3">Cultural Immersion</h4>
              <p className="text-white/80 leading-relaxed mb-4">
                This initial immersion in Japanese culture sparked a deep curiosity. I began to study 
                the intricate relationship between the body, mind, and spirit, as understood through 
                the lens of Eastern philosophies. The practice of <em>zazen</em> (seated meditation), 
                the precision of <em>aikido</em>, and the subtle artistry of <em>ikebana</em> (flower arranging) 
                became my daily rituals.
              </p>
              <p className="text-white/80 leading-relaxed">
                I realized that true wellness wasn't about quick fixes or fleeting trends; it was about 
                cultivating a deep connection to the natural world and the cycles of life.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-serif text-xl text-gold mb-3">The Quest for Purity</h4>
              <p className="text-white/80 leading-relaxed">
                My quest to create Kaeru was born from this realization. I envisioned a brand that would 
                bridge the gap between ancient wisdom and modern science, offering rituals and products 
                that would help others find their own path to balance and well-being. This meant a relentless 
                pursuit of the purest ingredients. I spent months researching and sourcing botanicals from 
                across Japan, working with small, sustainable farms that honored the land and its traditions. 
                Each ingredient had to meet a rigorous standard, not only for its efficacy but also for its 
                cultural significance and ethical sourcing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="font-serif text-xl text-gold mb-3">Challenges and Vision</h4>
              <p className="text-white/80 leading-relaxed mb-4">
                The journey wasn't without its challenges. Bringing Eastern philosophies and practices to 
                a Western audience required careful translation and adaptation. I had to overcome skepticism, 
                navigate cultural differences, and educate consumers about the profound benefits of these 
                ancient rituals. There were times when I questioned whether it was even possible to build 
                a brand based on such deeply personal values.
              </p>
              <p className="text-white/80 leading-relaxed">
                But the vision of Kaeru – to create a space where people could reconnect with their inner 
                selves and the natural world – kept me going. I saw the potential for Kaeru rituals to 
                create a ripple effect of transformation, helping individuals find clarity, resilience, 
                and a deeper sense of purpose.
              </p>
            </motion.div>
            
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/the-way">
                <OrigamiButton className="px-8 py-3">
                  Discover The Way of Kaeru
                </OrigamiButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersJourney;
