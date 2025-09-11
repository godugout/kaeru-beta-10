
import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import KaeruLogo from "../hero/KaeruLogo";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Use spring physics for smoother mouse interactions
  const springConfig = { stiffness: 50, damping: 15 };
  const mouseXSpring = useSpring(0, springConfig);
  const mouseYSpring = useSpring(0, springConfig);
  
  useEffect(() => {
    // Start animations after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
      mouseXSpring.set(x);
      mouseYSpring.set(y);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseXSpring, mouseYSpring]);
  
  // Animation variants for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }
    }
  };
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Dark stone texture background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0">
        {/* Stone texture pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjUgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')]"></div>
        
        {/* Subtle brushstroke Kanji background with parallax effect */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{
            x: mouseXSpring.get() * -20,
            y: mouseYSpring.get() * -20
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-contain bg-no-repeat opacity-50"
            style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOTAgMTQwYzMwLTQwIDcwLTEwMCAxMDAtOTAgMzAgMTAgMTAgMTEwLTIwIDE2MC0zMCA1MC01MCA4MC05MCA4MC00MCAwLTYwLTYwLTMwLTEwMCAzMC00MCA0MC01MCA0MC01MHoiIHN0cm9rZT0iI0U2Qjk4MCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")' }}
          ></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-contain bg-no-repeat opacity-50 rotate-45"
            style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIwIDYwYzQwIDAgODAgMzAgMTAwIDgwIDIwIDUwLTIwIDExMC02MCAxMjAtNDAgMTAtODAtMzAtODAtNzAgMC00MCA0MC0xMzAgNDAtMTMweiIgc3Ryb2tlPSIjRTZCOTgwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==")' }}
          ></div>
        </motion.div>
        
        {/* Animated subtle gold overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            opacity: [0.02, 0.05, 0.02] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-gold/5 to-transparent opacity-30"></div>
        </motion.div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12">
          <KaeruLogo />
        </div>
        
        {/* Hero text content with animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-4xl md:text-6xl text-white tracking-wider"
          >
            The Way of Kaeru
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            In Japanese folklore, frogs symbolize safe return and transformation. 
            Our premium CBD formulations guide your journey back to natural balance.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-block px-6 py-3 border border-gold text-gold tracking-wider cursor-pointer"
              whileHover={{ 
                backgroundColor: "rgba(230, 185, 128, 0.05)", 
                boxShadow: "0 0 20px rgba(230, 185, 128, 0.2)" 
              }}
              transition={{ duration: 0.3 }}
            >
              DISCOVER THE PATH
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ 
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <ChevronDown size={32} className="text-gold" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
