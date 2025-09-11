
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FounderOrigins = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation controlled by scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageX = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const textX = useTransform(scrollYProgress, [0, 1], [50, 0]);
  
  return (
    <section 
      id="origins" 
      ref={containerRef}
      className="relative py-24 bg-black min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wMSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE1IDAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+')]">
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column with image - Updated image */}
          <motion.div
            style={{ x: imageX }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-sm bg-amber-50/5">
              <img 
                src="/lovable-uploads/6423af34-5fea-41fc-bf8d-3fcb64a3660e.png" 
                alt="Collection of frogs representing different aspects of Kaeru philosophy" 
                className="w-full h-full object-contain" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
          
          {/* Right column with text */}
          <motion.div
            style={{ x: textX }}
          >
            <h2 className="text-sm tracking-widest text-gold mb-2">OUR STORY</h2>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">The Path of Kaeru</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Our founder, a martial artist and herbalist, discovered the healing properties 
              of CBD during his own recovery journey. After sustaining injuries that 
              Western medicine struggled to address, he turned to the botanical wisdom 
              of his Japanese ancestry.
            </p>
            <p className="text-white/70 mb-6 leading-relaxed">
              In Japanese folklore, frogs are sacred symbols of safe return, healing, and rebirth. 
              Warriors carried frog charms into battle, believing the spirit of Kaeru would 
              guide them safely home—a tradition that continues today.
            </p>
            <p className="text-white/70 leading-relaxed">
              Combining Eastern wisdom with modern science, he created formulations that honor 
              the frog's symbolism of transformation and renewal, establishing KAERU as a 
              bridge between ancient practice and contemporary wellness.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderOrigins;
