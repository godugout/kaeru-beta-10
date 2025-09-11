
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RitualCategoryProps {
  title: string;
  icon: string;
  description: string;
}

const ritualCategories: RitualCategoryProps[] = [
  {
    title: "RECOVERY",
    icon: "🌿", // Placeholder, will be replaced with custom SVG
    description: "Performance-grade relief for training, inspired by the Japanese Tree Frog's regenerative abilities."
  },
  {
    title: "CALM",
    icon: "🌙", // Placeholder, will be replaced with custom SVG
    description: "Mind-settling formulations guided by the peaceful sanctuary of the Forest Green Tree Frog."
  },
  {
    title: "RITUALS",
    icon: "✨", // Placeholder, will be replaced with custom SVG
    description: "Daily wellness routines inspired by the transformative journey of metamorphosis."
  },
  {
    title: "ELEMENTS",
    icon: "💧", // Placeholder, will be replaced with custom SVG
    description: "Pure botanical extracts that channel the pristine habitats of our amphibian guides."
  }
];

const RitualCard = ({ title, icon, description }: RitualCategoryProps) => {
  return (
    <motion.div 
      className="bg-gray-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-sm hover:border-gold/30 transition-all duration-500 group relative"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px -15px rgba(230, 185, 128, 0.3)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon */}
      <div className="text-4xl mb-4">{icon}</div>
      
      {/* Title */}
      <h3 className="text-xl font-medium tracking-wider text-gold mb-2">{title}</h3>
      
      {/* Description */}
      <p className="text-white/60 text-sm leading-relaxed mb-4">{description}</p>
      
      {/* Updated CTA */}
      <span className="text-gold/80 text-sm hover:text-gold transition-colors flex items-center gap-1 group-hover:translate-x-1 transform transition-transform">
        Enter the Practice
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1L15 8L8 15M1 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      
      {/* Ripple effect on hover */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm">
        <div className="absolute -inset-full h-full w-full bg-gold/10 transform origin-center scale-0 group-hover:scale-[2.5] transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

const RitualPreview = () => {
  // Reference to the section
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animation controlled by scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.3]);
  
  return (
    <section 
      ref={sectionRef}
      id="rituals" 
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
    >
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 z-0"
        style={{ opacity: backgroundOpacity }}
      >
        {/* Subtle background patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTZCOTgwIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTIwIDVjNCAwIDgtMiA4LTUgMCAzIDQgNSA4IDVzOC0yIDgtNWMwIDMgNCA1IDggNXM4LTIgOC01YzAgMyA0IDUgOCA1IiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0yMCAxNWM0IDAgOC0yIDgtNSAwIDMgNCA1IDggNXM4LTIgOC01YzAgMyA0IDUgOCA1czgtMiA4LTVjMCAzIDQgNSA4IDUiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTIwIDI1YzQgMCA4LTIgOC01IDAgMyA0IDUgOCA1czgtMiA4LTVjMCAzIDQgNSA4IDVzOC0yIDgtNWMwIDMgNCA1IDggNSIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMjAgMzVjNCAwIDgtMiA4LTUgMCAzIDQgNSA4IDVzOC0yIDgtNWMwIDMgNCA1IDggNXM4LTIgOC01YzAgMyA0IDUgOCA1IiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0yMCA0NWM0IDAgOC0yIDgtNSAwIDMgNCA1IDggNXM4LTIgOC01YzAgMyA0IDUgOCA1czgtMiA4LTVjMCAzIDQgNSA4IDUiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTIwIDU1YzQgMCA4LTIgOC01IDAgMyA0IDUgOCA1czgtMiA4LTVjMCAzIDQgNSA4IDVzOC0yIDgtNWMwIDMgNCA1IDggNSIgb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')]">
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-widest text-gold mb-2">WELLNESS RITUALS</h2>
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Formulations Guided by Nature</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Each KAERU collection draws inspiration from a specific frog species, 
            channeling their remarkable adaptations into targeted wellness solutions.
          </p>
        </motion.div>
        
        {/* Grid of ritual cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ritualCategories.map((ritual, index) => (
            <RitualCard 
              key={index} 
              {...ritual}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualPreview;
