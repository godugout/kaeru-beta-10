
import { useMemo } from "react";

interface StepColor {
  bg: string;
  accent: string;
  ripple: string;
}

export const useRitualColors = () => {
  const stepColors = useMemo<StepColor[]>(() => [
    { bg: "rgba(51, 65, 255, 0.05)", accent: "#E6B980", ripple: "gold" },  // Gold
    { bg: "rgba(51, 195, 240, 0.05)", accent: "#33C3F0", ripple: "blue" },  // Blue
    { bg: "rgba(51, 180, 160, 0.05)", accent: "#33B4A0", ripple: "teal" },  // Teal
    { bg: "rgba(51, 160, 51, 0.05)", accent: "#33A033", ripple: "green" },  // Green
    { bg: "rgba(130, 110, 200, 0.05)", accent: "#826EC8", ripple: "purple" }  // Purple
  ], []);
  
  return stepColors;
};

export default useRitualColors;
