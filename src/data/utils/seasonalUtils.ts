
import { SeasonalCampaign } from "../types/seasonalTypes";
import { springCampaign } from "../seasons/springCampaign";
import { summerCampaign } from "../seasons/summerCampaign";
import { autumnCampaign } from "../seasons/autumnCampaign";
import { winterCampaign } from "../seasons/winterCampaign";

// Export the full array of seasonal campaigns
export const seasonalCampaigns: SeasonalCampaign[] = [
  springCampaign,
  summerCampaign,
  autumnCampaign,
  winterCampaign
];

// Helper function to get current season based on month
export const getCurrentSeason = (): SeasonalCampaign => {
  const currentMonth = new Date().getMonth();
  // 0-based months: Jan=0, Feb=1, etc.
  
  // Winter: Dec (11), Jan (0), Feb (1)
  if (currentMonth === 11 || currentMonth === 0 || currentMonth === 1) {
    return winterCampaign;
  }
  // Spring: Mar (2), Apr (3), May (4)
  else if (currentMonth >= 2 && currentMonth <= 4) {
    return springCampaign;
  }
  // Summer: Jun (5), Jul (6), Aug (7)
  else if (currentMonth >= 5 && currentMonth <= 7) {
    return summerCampaign;
  }
  // Autumn: Sep (8), Oct (9), Nov (10)
  else {
    return autumnCampaign;
  }
};
