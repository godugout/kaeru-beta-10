
import React from 'react';
import { motion } from 'framer-motion';

interface AnimationStageContentProps {
  animationStage: number;
  colors: any;
}

const AnimationStageContent: React.FC<AnimationStageContentProps> = ({ 
  animationStage,
  colors 
}) => {
  // Different text content based on animation stage
  const stageContent = {
    0: {
      title: "",
      subtitle: "Stillness precedes transformation...",
    },
    1: {
      title: "The Water Stirs",
      subtitle: "Something ancient awakens from the depths...",
    },
    2: {
      title: "The Guardian Emerges",
      subtitle: "The frog, keeper of ancient wisdom, recognizes your presence...",
    }
  };
  
  const content = stageContent[animationStage as keyof typeof stageContent];
  
  if (!content) return null;
  
  return (
    <motion.div
      key={`stage-${animationStage}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="absolute inset-x-0 bottom-10 text-center px-4"
    >
      {content.title && (
        <h3 className="font-serif text-2xl" style={{ color: colors.primary }}>
          {content.title}
        </h3>
      )}
      {content.subtitle && (
        <p className="text-white/70 mt-2">
          {content.subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default AnimationStageContent;
