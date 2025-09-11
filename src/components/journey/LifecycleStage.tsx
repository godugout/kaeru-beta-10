
import { motion, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import KanjiReveal from "./KanjiReveal";
import { LucideIcon } from "lucide-react";

interface LifecycleStageProps {
  stage: {
    id: string;
    stage: string;
    title: string;
    kanji: string;
    description: string;
    color: string;
    productCategory: string;
    icon: LucideIcon;
  };
  isActive: boolean;
  progress: MotionValue<number>;
  stageIndex: number;
  totalStages: number;
}

const LifecycleStage = ({ 
  stage, 
  isActive, 
  progress, 
  stageIndex, 
  totalStages 
}: LifecycleStageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const Icon = stage.icon;

  // Calculate the progress range for this specific stage
  const stageStart = stageIndex / totalStages;
  const stageEnd = (stageIndex + 1) / totalStages;

  return (
    <motion.div
      ref={stageRef}
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 50,
        display: isActive ? "block" : "none" 
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left column - Visual and Kanji */}
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="relative"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              rotate: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Stage visual representation */}
            <div 
              className="w-64 h-64 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center overflow-hidden relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-70"
                animate={{ 
                  rotate: isHovered ? 360 : 0 
                }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              />
              
              <motion.div
                className="relative z-10 text-gold"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Icon size={isHovered ? 90 : 80} strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Kanji character */}
            <KanjiReveal 
              kanji={stage.kanji} 
              isVisible={isActive}
              className="absolute -bottom-12 -right-12"
            />
          </motion.div>
        </div>

        {/* Right column - Text content */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm tracking-widest text-gold/70 mb-2">
              {stage.productCategory}
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-gold mb-6">
              {stage.title}
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {stage.description}
            </p>
            
            {/* Interactive element */}
            <motion.div
              className="inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="border border-gold/30 text-gold py-2 px-4 flex items-center hover:bg-gold/10 transition-colors">
                <span>Explore {stage.productCategory}</span>
                <span className="ml-2">→</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LifecycleStage;
