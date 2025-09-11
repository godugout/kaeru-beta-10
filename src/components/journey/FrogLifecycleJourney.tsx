
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LifecycleStage from "./LifecycleStage";
import WaterRippleEffect from "./WaterRippleEffect";
import { useInView } from "framer-motion";
import { Egg, Droplet, Leaf, Circle } from "lucide-react";

// Define the journey stages data
const journeyStages = [
  {
    id: "egg",
    stage: "egg",
    title: "Return to Origins",
    kanji: "源",
    description: "From the quietest waters, life begins its journey. A single moment of potential.",
    color: "from-indigo-900 to-blue-900",
    productCategory: "Origin Series",
    icon: Egg,
  },
  {
    id: "tadpole",
    stage: "tadpole",
    title: "Return to Flow",
    kanji: "流",
    description: "Moving with the current, growing stronger with each passing day.",
    color: "from-blue-800 to-teal-800",
    productCategory: "Aqua Collection",
    icon: Droplet,
  },
  {
    id: "froglet",
    stage: "froglet",
    title: "Return to Change",
    kanji: "変",
    description: "Between two worlds, discovering new strengths as transformation unfolds.",
    color: "from-teal-800 to-green-900",
    productCategory: "Transition Formulas",
    icon: Leaf,
  },
  {
    id: "frog",
    stage: "frog",
    title: "Return to Balance",
    kanji: "均",
    description: "Complete in form, yet forever connected to both land and water.",
    color: "from-green-800 to-emerald-900",
    productCategory: "Harmony Elixirs",
    icon: Circle,
  },
];

const FrogLifecycleJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0); // 1 for down, -1 for up, 0 for static
  const [activeStage, setActiveStage] = useState(0);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: false, amount: 0.1 });

  // Track scroll position for animation effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate scroll speed and direction for ripple effects
  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let lastScrollTime = performance.now();

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const currentTime = performance.now();
      
      // Calculate speed (pixels per millisecond)
      const scrollDistance = Math.abs(currentScrollTop - lastScrollTop);
      const timeElapsed = currentTime - lastScrollTime;
      const calculatedSpeed = timeElapsed > 0 ? scrollDistance / timeElapsed : 0;
      
      // Determine direction
      const direction = currentScrollTop > lastScrollTop ? 1 : (currentScrollTop < lastScrollTop ? -1 : 0);
      
      setScrollSpeed(calculatedSpeed * 10); // Scale for better effect visualization
      setScrollDirection(direction);
      
      lastScrollTop = currentScrollTop;
      lastScrollTime = currentTime;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active stage based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // Map scroll progress to stage index
      const stageIndex = Math.min(
        journeyStages.length - 1,
        Math.floor(value * journeyStages.length)
      );
      setActiveStage(stageIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[400vh] bg-black"
    >
      {/* Fixed viewport for animation */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div ref={inViewRef} className="relative w-full h-full">
          {/* Background gradients that transition based on stage */}
          {journeyStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              className={`absolute inset-0 bg-gradient-to-b ${stage.color}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeStage === index ? 1 : 0 
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          ))}

          {/* Water ripple effect overlay */}
          <WaterRippleEffect 
            scrollSpeed={scrollSpeed} 
            scrollDirection={scrollDirection} 
            activeStage={activeStage}
          />

          {/* Content container */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="container mx-auto px-4">
              {journeyStages.map((stage, index) => (
                <LifecycleStage 
                  key={stage.id}
                  stage={stage}
                  isActive={activeStage === index}
                  progress={scrollYProgress}
                  stageIndex={index}
                  totalStages={journeyStages.length}
                />
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <div className="flex space-x-4">
              {journeyStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className="w-2 h-2 rounded-full bg-white"
                  animate={{
                    scale: activeStage === index ? 1.5 : 1,
                    opacity: activeStage === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrogLifecycleJourney;
