
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { JapaneseHeading, JapaneseProse } from "@/components/ui/japanese/Typography";
import { WashiTexture } from "@/components/ui/japanese/Textures";
import { Button } from "@/components/ui/button";
import HeroVideo from "@/components/hero/HeroVideo";

const HomeHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading for animation purposes
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <HeroVideo />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <WashiTexture className="absolute inset-0 opacity-30 z-20" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-30 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-sm tracking-widest text-gold mb-4">NATURE'S TRANSFORMATION</h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <JapaneseHeading className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">
              KAERU
            </JapaneseHeading>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-white/90 font-serif italic mb-8">
              "To return to one's true nature"
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <JapaneseProse className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
              <p>
                Discover the transformative power of Japanese-inspired wellness rituals enhanced by 
                modern CBD science. Our products are crafted to help you return to your natural state 
                of balance and well-being.
              </p>
            </JapaneseProse>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold/80 text-black">
              <Link to="/shop">
                Explore Collection <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
              <Link to="/the-way">Discover Our Story</Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: loaded ? 1 : 0, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/50 text-xs mb-2">SCROLL</span>
            <div className="w-px h-16 bg-gradient-to-b from-gold/0 via-gold to-gold/0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
