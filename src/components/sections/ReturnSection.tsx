import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const ReturnSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animated counters
  const recoveryValue = useSpring(0, { damping: 20, stiffness: 100 });
  const sleepValue = useSpring(0, { damping: 20, stiffness: 100 });
  const stressValue = useSpring(0, { damping: 20, stiffness: 100 });
  const focusValue = useSpring(0, { damping: 20, stiffness: 100 });

  const recoveryDisplay = useTransform(recoveryValue, Math.round);
  const sleepDisplay = useTransform(sleepValue, Math.round);
  const stressDisplay = useTransform(stressValue, Math.round);
  const focusDisplay = useTransform(focusValue, Math.round);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        recoveryValue.set(87);
        sleepValue.set(92);
        stressValue.set(79);
        focusValue.set(94);
      }, 500);
    }
  }, [isInView, recoveryValue, sleepValue, stressValue, focusValue]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const benefits = [
    { 
      label: "Faster Recovery", 
      value: recoveryDisplay, 
      suffix: "%",
      description: "Reduced inflammation markers"
    },
    { 
      label: "Better Sleep", 
      value: sleepDisplay, 
      suffix: "%",
      description: "Improved sleep quality scores"
    },
    { 
      label: "Less Stress", 
      value: stressDisplay, 
      suffix: "%",
      description: "Cortisol reduction observed"
    },
    { 
      label: "Enhanced Focus", 
      value: focusDisplay, 
      suffix: "%",
      description: "Cognitive performance boost"
    },
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-24 bg-gradient-to-br from-kaeru-stone/20 to-kaeru-black relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="hexagon" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <polygon 
              points="10,2 18,7 18,13 10,18 2,13 2,7" 
              fill="none" 
              stroke="#d4af37" 
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagon)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl text-kaeru-gold text-center mb-8"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
          }}
        >
          Return to Balance
        </motion.h2>

        <motion.p 
          className="text-lg text-kaeru-fog/80 text-center max-w-3xl mx-auto mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }
          }}
        >
          Clinical studies show the measurable benefits of our precision-formulated compounds
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              className="text-center group"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { delay: index * 0.1 + 0.6, duration: 0.6 }
                }
              }}
            >
              <div className="relative mb-4">
                <motion.div 
                  className="text-5xl md:text-6xl font-serif text-kaeru-gold mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span>{benefit.value}</motion.span>
                  <span className="text-2xl">{benefit.suffix}</span>
                </motion.div>
                
                {/* Animated underline */}
                <motion.div 
                  className="h-px bg-kaeru-gold mx-auto"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "60%" } : { width: 0 }}
                  transition={{ delay: index * 0.1 + 1, duration: 0.8 }}
                />
              </div>
              
              <h3 className="font-serif text-lg text-kaeru-fog mb-2">
                {benefit.label}
              </h3>
              <p className="text-sm text-kaeru-fog/70">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ReturnSection;