
import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

// Standard animation timings to maintain consistent pacing
export const mindfulTimings = {
  fast: 0.3, // Quick micro-interactions
  medium: 0.7, // Standard transitions
  slow: 1.2, // Contemplative, mindful transitions
  verySlowFadeIn: 2.0, // For special meaningful moments
  breathingCycle: 4.0, // Mimics a full breath cycle
};

interface MindfulTransitionProps {
  children: ReactNode;
  isVisible?: boolean;
  type?: "fade" | "slide" | "scale" | "breathe" | "ripple";
  speed?: "fast" | "medium" | "slow" | "breathing";
  className?: string;
  delay?: number;
  onComplete?: () => void;
  mobileOptimized?: boolean; // Whether to use simpler animations on mobile
}

const MindfulTransition = ({
  children,
  isVisible = true,
  type = "fade",
  speed = "medium",
  className = "",
  delay = 0,
  onComplete,
  mobileOptimized = true,
}: MindfulTransitionProps) => {
  const isMobile = useIsMobile();
  
  // Determine animation duration based on speed and mobile optimization
  const getDuration = () => {
    if (isMobile && mobileOptimized) {
      // Slightly faster animations on mobile for better UX
      return {
        fast: mindfulTimings.fast * 0.8,
        medium: mindfulTimings.medium * 0.8,
        slow: mindfulTimings.slow * 0.7,
        breathing: mindfulTimings.breathingCycle * 0.7,
      }[speed];
    }
    
    return {
      fast: mindfulTimings.fast,
      medium: mindfulTimings.medium,
      slow: mindfulTimings.slow,
      breathing: mindfulTimings.breathingCycle,
    }[speed];
  };
  
  // Define variants for different animation types
  const variants: Record<string, Variants> = {
    fade: {
      visible: { opacity: 1, transition: { duration: getDuration() } },
      hidden: { opacity: 0, transition: { duration: getDuration() } },
    },
    slide: {
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: getDuration() } 
      },
      hidden: { 
        opacity: 0, 
        x: isMobile ? -10 : -20,
        transition: { duration: getDuration() } 
      },
    },
    scale: {
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: getDuration(),
          ease: "easeOut" 
        } 
      },
      hidden: { 
        opacity: 0, 
        scale: 0.95,
        transition: { 
          duration: getDuration(),
          ease: "easeIn" 
        } 
      },
    },
    breathe: {
      visible: {
        opacity: 1,
        scale: [0.98, 1, 0.99, 1],
        transition: {
          duration: getDuration() * 2,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut",
        },
      },
      hidden: { opacity: 0, scale: 0.97 },
    },
    ripple: {
      visible: (custom: any) => ({
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: getDuration(),
          delay: delay + (custom ? custom.delay : 0),
        },
      }),
      hidden: { opacity: 0, scale: 0.8 },
    },
  };

  // For simpler mobile animations if needed
  const getAnimationType = () => {
    if (isMobile && mobileOptimized && (type === "ripple" || type === "breathe")) {
      return "fade"; // Simpler animation type for complex animations on mobile
    }
    return type;
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className={className}
          variants={variants[getAnimationType()]}
          initial="hidden"
          animate="visible"
          exit="hidden"
          custom={{ delay }}
          onAnimationComplete={() => onComplete?.()}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MindfulTransition;
