
import React from 'react';
import { motion } from 'framer-motion';
import { useSeasonalTheme } from '@/contexts/SeasonalThemeContext';
import { Flower, Droplet, Leaf, Snowflake } from 'lucide-react';

const SeasonalThemeSelector: React.FC = () => {
  const { currentSeason, setManualSeason } = useSeasonalTheme();
  
  const seasons = [
    { id: 'spring', name: 'Spring', icon: Flower, color: '#FFDEE2' },
    { id: 'summer', name: 'Summer', icon: Droplet, color: '#0EA5E9' },
    { id: 'autumn', name: 'Autumn', icon: Leaf, color: '#FEC6A1' },
    { id: 'winter', name: 'Winter', icon: Snowflake, color: '#F1F0FB' }
  ] as const;
  
  return (
    <div className="flex justify-center space-x-2 md:space-x-4">
      {seasons.map((season) => {
        const Icon = season.icon;
        const isActive = currentSeason === season.id;
        
        return (
          <button
            key={season.id}
            onClick={() => setManualSeason(season.id)}
            className={`relative p-2 rounded-full transition-all ${
              isActive ? 'ring-2 ring-gold bg-black/10' : 'hover:bg-black/5'
            }`}
            aria-label={`Switch to ${season.name} theme`}
          >
            <Icon 
              size={24} 
              color={season.color}
              strokeWidth={isActive ? 2.5 : 2}
            />
            
            {isActive && (
              <motion.div
                layoutId="active-indicator"
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold rounded-full"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default SeasonalThemeSelector;
