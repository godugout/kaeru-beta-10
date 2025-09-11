
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { JapaneseHeading, JapaneseProse } from "@/components/ui/japanese/Typography";
import { AsymmetricGrid, WabiSabiBlock } from "@/components/ui/japanese/Layout";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

const benefits = [
  {
    icon: "🌿",
    title: "Harmonious Balance",
    description: "Each formulation is precisely calibrated to work with—not against—your body's natural systems, supporting homeostasis."
  },
  {
    icon: "⛩️",
    title: "Ancient Wisdom",
    description: "Centuries of Japanese botanical knowledge merge with modern scientific understanding for truly effective wellness."
  },
  {
    icon: "🐸",
    title: "Frog Ambassadors",
    description: "Our unique species ambassadors guide formulations that embody their natural resilience and transformative abilities."
  },
  {
    icon: "🧘",
    title: "Ritual Experience",
    description: "More than products—complete wellness rituals that transform daily self-care into meditative practice."
  }
];

const ShopBenefits = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { shouldAnimate } = useOptimizedAnimation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: shouldAnimate ? 0.6 : 0
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: shouldAnimate ? 0.6 : 0,
        ease: "easeOut" 
      } 
    }
  };

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-shaku">
        <JapaneseHeading>The Kaeru Difference</JapaneseHeading>
        <JapaneseProse className="text-white/70 max-w-2xl mx-auto">
          <p>
            Our philosophy combines traditional Japanese wisdom with modern scientific research
            to create uniquely effective wellness experiences.
          </p>
        </JapaneseProse>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AsymmetricGrid>
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              variants={itemVariants}
              className={index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:mt-16"}
            >
              <WabiSabiBlock
                textureType={index % 2 === 0 ? "paper" : "washi"}
                className="h-full p-6 border border-gold/20 bg-black/30"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-serif text-gold mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </WabiSabiBlock>
            </motion.div>
          ))}
        </AsymmetricGrid>
      </motion.div>
    </div>
  );
};

export default ShopBenefits;
