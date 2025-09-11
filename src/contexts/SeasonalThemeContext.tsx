
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentSeason, seasonalColors } from '@/theme/seasonalTheme';

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface SeasonalThemeContextProps {
  currentSeason: Season;
  colors: typeof seasonalColors.spring;
  setManualSeason: (season: Season | null) => void;
  japaneseLabel: string;
  motif: string;
}

const SeasonalThemeContext = createContext<SeasonalThemeContextProps | undefined>(undefined);

export const SeasonalThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSeason, setCurrentSeason] = useState<Season>(getCurrentSeason());
  const [manualSeason, setManualSeason] = useState<Season | null>(null);
  
  // Update the season periodically or when manually set
  useEffect(() => {
    if (manualSeason) {
      setCurrentSeason(manualSeason);
      return;
    }
    
    // Set initial season
    setCurrentSeason(getCurrentSeason());
    
    // Check for season changes once a day
    const intervalId = setInterval(() => {
      const detectedSeason = getCurrentSeason();
      if (detectedSeason !== currentSeason) {
        setCurrentSeason(detectedSeason);
      }
    }, 86400000); // 24 hours
    
    return () => clearInterval(intervalId);
  }, [manualSeason, currentSeason]);
  
  // Get the colors for the current season
  const colors = seasonalColors[currentSeason];
  
  return (
    <SeasonalThemeContext.Provider 
      value={{ 
        currentSeason, 
        colors, 
        setManualSeason, 
        japaneseLabel: colors.japaneseLabel,
        motif: colors.motif
      }}
    >
      {children}
    </SeasonalThemeContext.Provider>
  );
};

export const useSeasonalTheme = () => {
  const context = useContext(SeasonalThemeContext);
  if (!context) {
    throw new Error('useSeasonalTheme must be used within a SeasonalThemeProvider');
  }
  return context;
};
