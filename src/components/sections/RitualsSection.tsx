import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RitualsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      name: "Recovery",
      kanji: "回復",
      description: "Restore and rebuild after intense training",
      color: "from-kaeru-jade/20 to-kaeru-moss/20",
      borderColor: "border-kaeru-jade/30",
    },
    {
      name: "Calm",
      kanji: "静寂", 
      description: "Find stillness in the chaos of daily life",
      color: "from-kaeru-fog/10 to-kaeru-stone/20",
      borderColor: "border-kaeru-fog/30",
    },
    {
      name: "Vitality",
      kanji: "活力",
      description: "Energize your body and sharpen your mind",
      color: "from-kaeru-gold/10 to-kaeru-moss/20",
      borderColor: "border-kaeru-gold/30",
    },
    {
      name: "Balance",
      kanji: "調和",
      description: "Harmonize all aspects of your being",
      color: "from-kaeru-moss/20 to-kaeru-jade/10",
      borderColor: "border-kaeru-moss/30",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        delay: index * 0.1 + 0.3, 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <motion.section 
      ref={ref}
      className="py-24 bg-kaeru-black"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl text-kaeru-gold text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
          }}
        >
          Rituals
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className={`relative p-6 rounded-lg bg-gradient-to-br ${category.color} border ${category.borderColor} backdrop-blur-sm group cursor-pointer`}
              variants={cardVariants}
              custom={index}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-kaeru-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="text-3xl font-serif text-kaeru-gold mb-2 text-center">
                  {category.kanji}
                </div>
                <h3 className="font-serif text-xl text-kaeru-fog mb-3 text-center">
                  {category.name}
                </h3>
                <p className="text-sm text-kaeru-fog/80 text-center leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Subtle animation effect */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kaeru-gold/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RitualsSection;