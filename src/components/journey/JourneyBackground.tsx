
import { motion } from "framer-motion";

interface JourneyBackgroundProps {
  className?: string;
}

const JourneyBackground = ({ className }: JourneyBackgroundProps) => {
  // Animation for the brush-stroke inspired background
  const brushStrokeVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  return (
    <div className={`absolute inset-0 -z-10 bg-black ${className}`}>
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 800 600"
        initial="initial"
        animate="animate"
      >
        <motion.path
          d="M100,300 C200,100 600,500 700,300"
          fill="none"
          stroke="#E6B980"
          strokeWidth="3"
          variants={brushStrokeVariants}
        />
        <motion.path
          d="M150,400 C300,600 500,100 650,400"
          fill="none"
          stroke="#E6B980"
          strokeWidth="2"
          variants={brushStrokeVariants}
        />
      </motion.svg>
    </div>
  );
};

export default JourneyBackground;
