
import { useState } from "react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { FrogAmbassadorDetail } from "@/types/frogAmbassador";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import FrogTransformationSequence from "../FrogTransformationSequence";

interface CardContentProps {
  frog: FrogAmbassadorDetail;
  variant: "compact" | "detailed";
  seasonalColor: string;
}

export default function CardContent({ frog, variant, seasonalColor }: CardContentProps) {
  const [activeTab, setActiveTab] = useState<'origin' | 'power' | 'ritual'>('origin');
  const isCompact = variant === "compact";

  return (
    <div className={cn(
      "pt-6", 
      isCompact ? "pb-4" : "pb-6"
    )}>
      {/* Content tabs - only show in detailed mode */}
      {!isCompact && (
        <div className="flex border-b border-gold/10 mb-4 pb-1">
          <button
            onClick={() => setActiveTab('origin')}
            className={cn(
              "mr-4 text-sm transition-colors relative pb-2",
              activeTab === 'origin' ? "text-gold" : "text-white/60 hover:text-white/80"
            )}
          >
            Origin
            {activeTab === 'origin' && (
              <motion.div 
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-px bg-gold"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('power')}
            className={cn(
              "mr-4 text-sm transition-colors relative pb-2",
              activeTab === 'power' ? "text-gold" : "text-white/60 hover:text-white/80"
            )}
          >
            Power
            {activeTab === 'power' && (
              <motion.div 
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-px bg-gold"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('ritual')}
            className={cn(
              "text-sm transition-colors relative pb-2",
              activeTab === 'ritual' ? "text-gold" : "text-white/60 hover:text-white/80"
            )}
          >
            Ritual
            {activeTab === 'ritual' && (
              <motion.div 
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-px bg-gold"
              />
            )}
          </button>
        </div>
      )}
      
      {/* Content display - conditionally shown based on variant */}
      <div className="min-h-[120px]">
        {isCompact ? (
          <div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <p className="text-sm text-white/80 line-clamp-3 mb-2">
                  {frog.origin.substring(0, 120)}...
                </p>
              </HoverCardTrigger>
              <HoverCardContent className="bg-black/90 border border-gold/20 text-white w-72">
                <h4 className="text-gold font-serif mb-2">{frog.name}'s Story</h4>
                <p className="text-sm text-white/80">{frog.origin}</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="prose prose-sm prose-invert max-w-none"
          >
            {activeTab === 'origin' && (
              <p className="text-white/80 leading-relaxed mb-2">{frog.origin}</p>
            )}
            {activeTab === 'power' && (
              <p className="text-white/80 leading-relaxed mb-2">{frog.power}</p>
            )}
            {activeTab === 'ritual' && (
              <p className="text-white/80 leading-relaxed mb-2">{frog.ritual}</p>
            )}
          </motion.div>
        )}
        
        {/* Transformation benefits section */}
        {!isCompact && <TransformationBenefits frog={frog} />}
      </div>
      
      {/* Haiku - only in detailed view with Japanese asymmetrical styling */}
      {!isCompact && (
        <blockquote className="mt-5 pb-1 border-l border-gold/20 pl-3 italic">
          {frog.haiku.split('\n').map((line, i) => (
            <p key={i} className="my-0.5 text-xs text-white/60">{line}</p>
          ))}
        </blockquote>
      )}
      
      {/* Transformation sequence - visualization of frog's power */}
      {!isCompact && (
        <div className="mt-6">
          <AspectRatio ratio={16/5} className="bg-black/20 rounded overflow-hidden">
            <FrogTransformationSequence 
              frog={frog}
              color={seasonalColor}
            />
          </AspectRatio>
        </div>
      )}
    </div>
  );
}

function TransformationBenefits({ frog }: { frog: FrogAmbassadorDetail }) {
  return (
    <div className="mt-4">
      <h4 className="text-sm text-gold/80 mb-2 font-medium">Transformative Benefits</h4>
      <ul className="list-disc list-inside space-y-1">
        {frog.transformationBenefits.map((benefit, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="text-xs text-white/70"
          >
            {benefit}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
