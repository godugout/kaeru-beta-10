
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSeasonalTheme } from '@/contexts/SeasonalThemeContext';
import { seasonalProducts } from '@/theme/seasonalTheme';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SeasonalCampaignBannerProps {
  className?: string;
}

export const SeasonalCampaignBanner: React.FC<SeasonalCampaignBannerProps> = ({ className = '' }) => {
  const { currentSeason, colors, japaneseLabel } = useSeasonalTheme();
  const [isVisible, setIsVisible] = useState(true);
  
  const campaign = seasonalProducts[currentSeason];
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full relative overflow-hidden ${className}`}
      style={{ 
        backgroundImage: colors.texture,
        backgroundColor: colors.primary,
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div 
            className="h-10 w-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.accent }}
          >
            <span className="text-white font-serif">{japaneseLabel.split(' ')[0]}</span>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: colors.accent }}>
              {currentSeason.toUpperCase()} SPECIAL
            </p>
            <p className="font-serif text-sm md:text-base">
              {campaign.title}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/shop" 
            className="text-xs md:text-sm font-medium transition-colors border px-3 py-1 rounded-sm"
            style={{ 
              borderColor: colors.accent,
              color: colors.accent,
              backgroundColor: 'transparent'
            }}
          >
            EXPLORE
          </Link>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SeasonalCampaignBanner;
