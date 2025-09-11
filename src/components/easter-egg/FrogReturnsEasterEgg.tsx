
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFrogEasterEgg } from '@/contexts/FrogEasterEggContext';
import { useSeasonalTheme } from '@/contexts/SeasonalThemeContext';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RipplesToStillness from '@/components/animations/RipplesToStillness';
import { useToast } from '@/hooks/use-toast';

// Import smaller component pieces
import FrogAnimation from './components/FrogAnimation';
import AnimationStageContent from './components/AnimationStageContent';
import RevealedContent from './components/RevealedContent';
import EasterEggModal from './components/EasterEggModal';
import { generateSeasonalDiscountCode } from './utils/discountUtils';

const FrogReturnsEasterEgg = () => {
  const { isEasterEggOpen, closeEasterEgg } = useFrogEasterEgg();
  const { toast } = useToast();
  const { currentSeason, colors } = useSeasonalTheme();
  const [animationStage, setAnimationStage] = useState(0);
  const [rewardClaimed, setRewardClaimed] = useState(false);
  const [discount, setDiscount] = useState('');
  
  // Reset animation when closed
  useEffect(() => {
    if (!isEasterEggOpen) {
      setTimeout(() => {
        setAnimationStage(0);
        setRewardClaimed(false);
      }, 500);
    }
  }, [isEasterEggOpen]);
  
  // Progress through animation stages
  useEffect(() => {
    if (!isEasterEggOpen) return;
    
    const timings = [1000, 3000, 2000, 1000];
    
    if (animationStage < 4) {
      const timer = setTimeout(() => {
        setAnimationStage(prev => prev + 1);
      }, timings[animationStage]);
      
      return () => clearTimeout(timer);
    }
  }, [animationStage, isEasterEggOpen]);
  
  // Handle reward claim
  const handleClaimReward = (email: string) => {
    // Generate a discount code based on current season
    const newDiscount = generateSeasonalDiscountCode(currentSeason);
    setDiscount(newDiscount);
    setRewardClaimed(true);
    
    // Show success toast
    toast({
      title: "Reward Claimed!",
      description: `Your discount code: ${newDiscount}`,
    });
    
    // In a real app, this would send the email to your backend
    console.log("Reward claimed:", { email, discountCode: newDiscount });
  };
  
  // Render animation content based on current stage
  const renderAnimationContent = () => {
    return (
      <>
        {/* Stage 0: Initial ripples */}
        <AnimatePresence>
          {animationStage === 0 && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <RipplesToStillness size={400} duration={3} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Stage 1+: Frog emerges */}
        <AnimatePresence>
          {animationStage >= 1 && (
            <FrogAnimation animationStage={animationStage} colors={colors} />
          )}
        </AnimatePresence>
        
        {/* Content based on animation stage */}
        <AnimatePresence mode="wait">
          {animationStage < 3 ? (
            <AnimationStageContent animationStage={animationStage} colors={colors} />
          ) : (
            <RevealedContent
              colors={colors}
              rewardClaimed={rewardClaimed}
              discount={discount}
              onClaimReward={handleClaimReward}
            />
          )}
        </AnimatePresence>
      </>
    );
  };
  
  return (
    <EasterEggModal 
      isOpen={isEasterEggOpen} 
      onClose={closeEasterEgg}
      colors={colors}
    >
      {renderAnimationContent()}
    </EasterEggModal>
  );
};

export default FrogReturnsEasterEgg;
