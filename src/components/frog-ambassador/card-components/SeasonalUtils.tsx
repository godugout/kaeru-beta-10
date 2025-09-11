
import { FrogAmbassadorDetail } from "@/types/frogAmbassador";

interface SeasonalUtilsProps {
  frog: FrogAmbassadorDetail;
  season: "spring" | "summer" | "autumn" | "winter";
}

export function useSeasonalColor(frog: FrogAmbassadorDetail, season: "spring" | "summer" | "autumn" | "winter") {
  // Get seasonal accent color if available, otherwise use default
  const getSeasonalColor = () => {
    if (frog.seasonalVariation && frog.seasonalVariation[season]) {
      return frog.seasonalVariation[season].accentColor;
    }
    return frog.mainColor || 'gold';
  };

  return getSeasonalColor();
}
