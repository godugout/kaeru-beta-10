
import { motion } from "framer-motion";

interface KintsugiTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
  className?: string;
}

const KintsugiTransition = ({ children, isVisible, className = "" }: KintsugiTransitionProps) => {
  // This component creates a "broken and repaired" effect when revealing content,
  // inspired by kintsugi (the Japanese art of repairing broken pottery with gold)
  
  const fragments = [
    { initialX: -10, initialY: 5, delay: 0 },
    { initialX: 15, initialY: -8, delay: 0.1 },
    { initialX: -5, initialY: -10, delay: 0.2 },
    { initialX: 10, initialY: 12, delay: 0.3 },
  ];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* The "golden seams" that appear during transition */}
      {isVisible && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Kintsugi golden crack lines */}
          <svg
            className="w-full h-full absolute inset-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M20,20 Q40,60 60,30 T80,80"
              stroke="#E6B980"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.1, ease: "easeInOut" }}
            />
            <motion.path
              d="M30,70 Q50,20 70,50 T90,30"
              stroke="#E6B980"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      )}

      {/* Content fragments that come together */}
      <div className="relative">
        {fragments.map((fragment, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ 
              opacity: 0,
              x: fragment.initialX,
              y: fragment.initialY,
            }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : fragment.initialX,
              y: isVisible ? 0 : fragment.initialY,
            }}
            transition={{
              duration: 0.7,
              delay: isVisible ? fragment.delay : 0,
              ease: "easeOut",
            }}
          >
            {/* Each fragment contains a full copy of the content that gets masked */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full" style={{ 
                clipPath: `polygon(${getClipPath(index, 4)})` 
              }}>
                {children}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Base layer (only visible once animation completes) */}
      <motion.div
        className="relative z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, delay: isVisible ? 0.9 : 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Helper function to generate clip paths for the fragments
const getClipPath = (index: number, total: number) => {
  // This creates polygon clip paths that divide the container into fragments
  const sections = [
    "0% 0%, 60% 0%, 50% 100%, 0% 100%",
    "60% 0%, 100% 0%, 100% 70%, 50% 100%",
    "50% 100%, 100% 70%, 100% 100%, 30% 100%",
    "0% 0%, 50% 40%, 30% 100%, 0% 100%",
  ];
  
  return sections[index % sections.length];
};

export default KintsugiTransition;
