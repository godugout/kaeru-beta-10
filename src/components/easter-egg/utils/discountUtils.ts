
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
  
  // Generate 4 random alphanumeric characters
  const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
  
  // Create the discount code with season prefix and random characters
  return `${seasonPrefix[season]}-${randomChars}`;
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
