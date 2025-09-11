
// This file is now just re-exporting everything from the reorganized files for backwards compatibility
import { SeasonalCampaign, SeasonalProduct } from "./types/seasonalTypes";
import { seasonalCampaigns, getCurrentSeason } from "./utils/seasonalUtils";
import { springCampaign } from "./seasons/springCampaign";
import { summerCampaign } from "./seasons/summerCampaign";
import { autumnCampaign } from "./seasons/autumnCampaign";
import { winterCampaign } from "./seasons/winterCampaign";

// Re-export all the types and functions to maintain backwards compatibility
export type { SeasonalCampaign, SeasonalProduct };
export { 
  seasonalCampaigns,
  getCurrentSeason,
  springCampaign,
  summerCampaign,
  autumnCampaign,
  winterCampaign
};
