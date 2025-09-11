
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FrogAmbassadorDetail } from "@/types/frogAmbassador";
import { cn } from "@/lib/utils";
import CardHeader from "./card-components/CardHeader";
import CardContentComponent from "./card-components/CardContent";
import CardRippleEffect, { useCardRippleEffect } from "./card-components/CardRippleEffect";
import { useSeasonalColor } from "./card-components/SeasonalUtils";

interface FrogAmbassadorCardProps {
  frog: FrogAmbassadorDetail;
  variant?: "compact" | "detailed";
  season?: "spring" | "summer" | "autumn" | "winter";
  className?: string;
}

export default function FrogAmbassadorCard({
  frog,
  variant = "detailed",
  season = "spring",
  className
}: FrogAmbassadorCardProps) {
  // Use extracted hooks
  const { cardRef, ripples } = useCardRippleEffect();
  const seasonalColor = useSeasonalColor(frog, season);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className={cn("group", className)}
    >
      <Card 
        ref={cardRef} 
        className={cn(
          "relative overflow-hidden backdrop-blur-sm border-gold/20 bg-black/40",
          "transition-all duration-500",
          "hover:border-gold/40 hover:shadow-[0_0_15px_rgba(230,185,128,0.15)]"
        )}
      >
        {/* Ripple effect container */}
        <CardRippleEffect ripples={ripples} />

        {/* Japanese calligraphy symbol - positioned for tatami-like proportions */}
        <div className="absolute top-4 right-4 text-6xl font-serif text-gold/10 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
          {frog.symbol}
        </div>
        
        <CardHeader frog={frog} />
        
        <CardContent className="p-0">
          <CardContentComponent 
            frog={frog} 
            variant={variant} 
            seasonalColor={seasonalColor}
          />
        </CardContent>
        
        {/* Bottom decorative element - asymmetrical gold line for wabi-sabi aesthetic */}
        <div className="absolute bottom-0 left-[5%] right-0 h-[1px] bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0"></div>
      </Card>
    </motion.div>
  );
}
