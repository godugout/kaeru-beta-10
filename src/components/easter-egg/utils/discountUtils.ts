
import { getCurrentSeason } from '@/theme/seasonalTheme';
import type { Season } from '@/data/types/seasonalTypes';

// Generate a seasonal discount code
export const generateSeasonalDiscountCode = (season: Season): string => {
  const seasonPrefix = {
    spring: 'HARU',
    summer: 'NATSU',
    autumn: 'AKI',
    winter: 'FUYU'
  };
  
  // For Konami code, always return FROG2024 as requested
  // For other easter eggs, use seasonal codes
  return 'FROG2024';
};

// Calculate discount amount based on season
export const getSeasonalDiscountAmount = (season: Season): number => {
  const discounts = {
    spring: 15, // 15% for Spring
    summer: 20, // 20% for Summer
    autumn: 15, // 15% for Autumn
    winter: 25  // 25% for Winter
  };
  
  return discounts[season];
};
