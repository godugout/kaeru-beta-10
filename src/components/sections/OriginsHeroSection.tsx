import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const OriginsHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="py-24 bg-kaeru-black relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Martial arts inspired background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.svg 
          className="absolute top-1/4 left-1/4 w-32 h-32"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="#d4af37" strokeWidth="1" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#4a5d3a" strokeWidth="1" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#d4af37" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#d4af37" strokeWidth="0.5" />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <motion.h2 
              className="font-serif text-4xl md:text-5xl text-kaeru-gold"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.6 } }
              }}
            >
              Origins
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-kaeru-fog/90"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.6 } }
              }}
            >
              <p className="text-lg leading-relaxed">
                Born from years of dedicated practice in Japanese martial arts, our founder 
                discovered the profound connection between mind, body, and nature's healing compounds.
              </p>
              
              <p className="text-lg leading-relaxed">
                In the quiet moments after training, when the body seeks restoration and the 
                mind craves stillness, the ancient wisdom of balance became clear. This led to 
                the creation of Kaeru - a bridge between timeless Eastern philosophy and 
                modern wellness science.
              </p>

              <blockquote className="border-l-2 border-kaeru-gold/30 pl-6 italic text-kaeru-gold/80">
                "True strength is not the absence of struggle, but the return to center after being moved."
                <footer className="text-sm text-kaeru-fog/60 mt-2">- Founding Philosophy</footer>
              </blockquote>
            </motion.div>

            <motion.div 
              className="flex space-x-8 pt-4"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.6 } }
              }}
            >
              <div className="text-center">
                <div className="text-3xl font-serif text-kaeru-gold mb-1">武</div>
                <div className="text-xs text-kaeru-fog/70">Martial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-kaeru-gold mb-1">道</div>
                <div className="text-xs text-kaeru-fog/70">Way</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-kaeru-gold mb-1">自然</div>
                <div className="text-xs text-kaeru-fog/70">Nature</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Martial Arts Imagery */}
          <motion.div 
            className="relative"
            style={{ y: imageY }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.8 } }
            }}
          >
            <div className="relative rounded-lg overflow-hidden">
              {/* Placeholder for martial arts image - replace with actual image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-kaeru-stone/20 to-kaeru-jade/10 rounded-lg border border-kaeru-gold/20">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-6xl text-kaeru-gold/30 font-serif">武道</div>
                </div>
              </div>
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-kaeru-black/60 via-transparent to-transparent rounded-lg" />
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 border border-kaeru-gold/40 rotate-45"
                animate={{ rotate: [45, 90, 45] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-kaeru-moss/30 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OriginsHeroSection;