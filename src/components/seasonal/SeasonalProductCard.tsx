
import React from 'react';
import { motion } from 'framer-motion';
import { useSeasonalTheme } from '@/contexts/SeasonalThemeContext';
import { ArrowRight } from 'lucide-react';

interface SeasonalProductCardProps {
  name: string;
  description: string;
  imagePath: string;
  botanicals: string[];
}

const SeasonalProductCard: React.FC<SeasonalProductCardProps> = ({
  name,
  description,
  imagePath,
  botanicals
}) => {
  const { colors, currentSeason, japaneseLabel } = useSeasonalTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black/30 rounded-sm overflow-hidden border"
      style={{ borderColor: `${colors.primary}40` }}
    >
      <div className="relative aspect-square overflow-hidden">
        <span 
          className="absolute top-3 right-3 z-10 px-2 py-1 text-xs tracking-wider"
          style={{ backgroundColor: colors.accent, color: colors.primary }}
        >
          {currentSeason.toUpperCase()} EDITION
        </span>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        
        <div className="absolute bottom-3 left-3 z-20">
          <span className="text-xs tracking-wider text-gold">{japaneseLabel}</span>
        </div>
        
        <div 
          className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-105"
          style={{ backgroundImage: `url(${imagePath})` }}
        ></div>
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className="font-serif text-xl text-white mb-2">{name}</h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        
        {botanicals.length > 0 && (
          <div className="mb-4">
            <div className="text-xs uppercase tracking-wider mb-2" style={{ color: colors.primary }}>
              Featured Botanicals
            </div>
            <div className="flex flex-wrap gap-2">
              {botanicals.map((botanical, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs rounded-sm bg-black/20 text-white/80"
                  style={{ borderLeft: `2px solid ${colors.primary}` }}
                >
                  {botanical}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <button 
          className="flex items-center text-sm mt-2 transition-colors group"
          style={{ color: colors.primary }}
        >
          EXPLORE PRODUCT
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default SeasonalProductCard;
