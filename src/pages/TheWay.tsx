import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import Footer from "@/components/ui/footer";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Link } from "react-router-dom";

const TheWay = () => {
  const scrollPosition = useScrollPosition();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const kanjiOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const englishOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const principles = [
    {
      kanji: "道",
      title: "The Way",
      subtitle: "Michi - Path",
      description: "Like water flowing naturally downhill, we follow the path of least resistance. Not forcing, but flowing.",
      bg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
    },
    {
      kanji: "流",
      title: "Flow",
      subtitle: "Nagare - Current",
      description: "The river doesn't struggle against the rocks. It finds its way around them, persistent yet adaptable.",
      bg: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80"
    },
    {
      kanji: "帰",
      title: "Return",
      subtitle: "Kaeru - Coming Back",
      description: "The frog always returns to the pond. We return to our natural state of balance and presence.",
      bg: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80"
    },
    {
      kanji: "静",
      title: "Stillness",
      subtitle: "Shizuka - Quiet",
      description: "In the stillness of the pond, we find clarity. True power comes from inner calm.",
      bg: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1200&q=80"
    }
  ];

  const visualJourney = [
    {
      title: "Natural Balance",
      description: "Our aesthetic draws from the natural world, where balance exists without perfect symmetry.",
      image: "/lovable-uploads/64847212-c543-4cd6-b98f-5c7a4e840dd4.png"
    },
    {
      title: "Eastern Wisdom, Western Science",
      description: "We bridge ancient Japanese wellness philosophies with modern scientific advances.",
      image: "/lovable-uploads/d658e44c-0774-472d-82a2-f3cef3182981.png"
    },
    {
      title: "Mindful Application",
      description: "Each interaction with our products is an opportunity for mindfulness and presence.",
      image: "/lovable-uploads/b9d677b0-a752-471b-8134-0f3d04821f39.png"
    }
  ];

  return (
    <div className="bg-kaeru-black min-h-screen">
      <EnhancedNavigation scrollPosition={scrollPosition} />
      
      {/* Hero Section */}
      <section 
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-kaeru-gold/10 via-transparent to-kaeru-jade/5" />
        
        <div className="relative z-10 text-center px-4">
          {/* Kanji to English Transform */}
          <div className="relative mb-12">
            <motion.h1 
              className="absolute inset-0 flex items-center justify-center font-serif text-8xl md:text-9xl font-bold text-kaeru-gold"
              style={{ opacity: kanjiOpacity }}
            >
              道
            </motion.h1>
            <motion.h1 
              className="font-serif text-8xl md:text-9xl font-bold text-kaeru-gold tracking-wider"
              style={{ opacity: englishOpacity }}
            >
              THE WAY
            </motion.h1>
          </div>

          <motion.p 
            className="text-xl md:text-2xl text-kaeru-fog font-light tracking-wide max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Like the ancient martial arts masters who understood that true strength comes from inner balance, 
            Kaeru harnesses nature's most powerful compounds to help you return to your centered state.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link 
              to="/rituals"
              className="inline-block px-8 py-4 bg-kaeru-gold/10 border border-kaeru-gold text-kaeru-gold hover:bg-kaeru-gold hover:text-kaeru-black transition-all duration-300"
            >
              Begin Your Journey
            </Link>
          </motion.div>

          {/* Scroll Indicator - Fixed to viewport bottom */}
          <motion.div 
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-kaeru-fog/60 text-xs tracking-widest">SCROLL</span>
              <svg 
                className="w-6 h-8 text-kaeru-gold animate-pulse" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Principles - Photo Background Cards */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-kaeru-gold mb-6">
              Four Pillars
            </h2>
            <p className="text-lg text-kaeru-fog max-w-2xl mx-auto">
              The foundational principles that guide our approach to wellness and transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.kanji}
                className="group relative h-96 overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${principle.bg}')` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-kaeru-black via-kaeru-black/70 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-8xl font-serif text-kaeru-gold mb-4 opacity-80">
                    {principle.kanji}
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-kaeru-gold/80 mb-4 tracking-widest">
                    {principle.subtitle}
                  </p>
                  <p className="text-kaeru-fog leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Journey Section */}
      <section className="py-24 px-4 bg-kaeru-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-kaeru-gold mb-6">
              The Visual Journey
            </h2>
          </motion.div>

          <div className="space-y-24">
            {visualJourney.map((item, index) => (
              <motion.div
                key={item.title}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full md:w-1/2">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="font-serif text-4xl text-kaeru-gold">
                    {item.title}
                  </h3>
                  <p className="text-lg text-kaeru-fog leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kaeru-gold/5 via-transparent to-kaeru-jade/5" />
        
        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl text-kaeru-gold mb-8">
            Begin Your Return
          </h2>
          <p className="text-xl text-kaeru-fog mb-12">
            Discover the ritual path that aligns with your journey
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/rituals"
              className="px-8 py-4 bg-kaeru-gold text-kaeru-black font-medium hover:bg-kaeru-gold/90 transition-all duration-300"
            >
              Explore Rituals
            </Link>
            <Link 
              to="/shop"
              className="px-8 py-4 bg-kaeru-gold/10 border border-kaeru-gold text-kaeru-gold hover:bg-kaeru-gold hover:text-kaeru-black transition-all duration-300"
            >
              Shop Products
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default TheWay;
