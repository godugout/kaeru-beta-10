
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WaterRipple from "@/components/animations/WaterRipple";
import VerticalRhythm from "@/components/ui/japanese/VerticalRhythm";

const JournalPreviews = () => {
  // Animation variants for staggered card reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-24 bg-black">
      <WaterRipple className="max-w-6xl mx-auto px-4">
        <VerticalRhythm spacing="normal">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-sm tracking-widest text-gold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              EXPLORE DEEPER
            </motion.h2>
            <motion.h3 
              className="text-3xl md:text-4xl font-serif text-white mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              From Our Journal
            </motion.h3>
            <motion.p 
              className="text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Articles exploring the philosophy and practice of return.
            </motion.p>
          </div>
          
          {/* Article Teasers with staggered animation */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants}>
              <Link to="/journal" className="block group">
                <div className="relative border border-gold/10 bg-black/30 p-6 h-full transition-all duration-300 group-hover:border-gold/30">
                  <div className="absolute top-0 left-0 w-full h-24 opacity-20">
                    <img 
                      src="/lovable-uploads/b6ab7a27-68af-4c40-a8f6-2877f3f77b89.png"
                      alt="Frog with lotus flowers" 
                      className="w-full h-full object-cover object-top"
                      style={{mixBlendMode: 'overlay'}}
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="text-xs text-gold mb-2">PRACTICE</div>
                    <h4 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors">
                      Mushin: The Mind of No-Mind
                    </h4>
                    <p className="text-white/70 text-sm">
                      Exploring the Zen concept of uncluttered awareness and its 
                      application to modern mindfulness practice.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link to="/journal" className="block group">
                <div className="relative border border-gold/10 bg-black/30 p-6 h-full transition-all duration-300 group-hover:border-gold/30">
                  <div className="absolute top-0 left-0 w-full h-24 opacity-20">
                    <img 
                      src="/lovable-uploads/d658e44c-0774-472d-82a2-f3cef3182981.png"
                      alt="Frog in zen garden" 
                      className="w-full h-full object-cover object-top"
                      style={{mixBlendMode: 'overlay'}}
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="text-xs text-gold mb-2">PHILOSOPHY</div>
                    <h4 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors">
                      Wabi-Sabi: Finding Beauty in Imperfection
                    </h4>
                    <p className="text-white/70 text-sm">
                      How the Japanese aesthetic principle of embracing impermanence 
                      can transform our relationship with change.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link to="/journal" className="block group">
                <div className="relative border border-gold/10 bg-black/30 p-6 h-full transition-all duration-300 group-hover:border-gold/30">
                  <div className="absolute top-0 left-0 w-full h-24 opacity-20">
                    <img 
                      src="/lovable-uploads/f0b481a9-b090-4248-80d8-551fdce7108a.png"
                      alt="Four colored frogs representing strength" 
                      className="w-full h-full object-cover object-top"
                      style={{mixBlendMode: 'overlay'}}
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="text-xs text-gold mb-2">REFLECTION</div>
                    <h4 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors">
                      Ikigai: The Purpose of Being
                    </h4>
                    <p className="text-white/70 text-sm">
                      Discovering your personal ikigai - the intersection of passion, 
                      mission, vocation and profession.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/journal" className="inline-flex items-center text-gold hover:text-gold/80 group">
              View All Articles 
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </VerticalRhythm>
      </WaterRipple>
    </section>
  );
};

export default JournalPreviews;
