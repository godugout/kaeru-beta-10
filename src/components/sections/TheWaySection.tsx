import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TheWaySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const brushStrokeVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

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
      {/* Brushstroke SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M100,400 Q300,200 500,400 T900,400 Q1000,300 1100,400"
          fill="none"
          stroke="#d4af37"
          strokeWidth="4"
          variants={brushStrokeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        <motion.path
          d="M200,600 Q400,400 600,600 T1000,600"
          fill="none"
          stroke="#4a5d3a"
          strokeWidth="3"
          variants={brushStrokeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </svg>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl text-kaeru-gold mb-8"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
          }}
        >
          The Way
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-kaeru-fog max-w-4xl mx-auto leading-relaxed mb-8"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }
          }}
        >
          Like the ancient martial arts masters who understood that true strength comes from inner balance, 
          Kaeru harnesses nature's most powerful compounds to help you return to your centered state. 
          Each formulation is crafted with precision, respect, and the timeless wisdom of flow.
        </motion.p>

        <motion.div 
          className="flex justify-center items-center space-x-8"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } }
          }}
        >
          <div className="text-center">
            <div className="text-2xl font-serif text-kaeru-gold mb-2">道</div>
            <div className="text-sm text-kaeru-fog/70">The Way</div>
          </div>
          <div className="w-px h-12 bg-kaeru-gold/30"></div>
          <div className="text-center">
            <div className="text-2xl font-serif text-kaeru-gold mb-2">流</div>
            <div className="text-sm text-kaeru-fog/70">Flow</div>
          </div>
          <div className="w-px h-12 bg-kaeru-gold/30"></div>
          <div className="text-center">
            <div className="text-2xl font-serif text-kaeru-gold mb-2">帰</div>
            <div className="text-sm text-kaeru-fog/70">Return</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TheWaySection;