
/**
 * Utility functions for Japanese kanji handling in ritual steps
 */

import { RitualStep } from "@/types/ritual";

/**
 * Returns the appropriate kanji character based on the Japanese concept in a ritual step
 */
export const getStepKanji = (step: RitualStep): string => {
  switch (step.japaneseConcept.split(" ")[0]) {
    case "Ma": return "間";
    case "Kaizen": return "改善";
    case "Yuimaru": return "ゆいまーる";
    case "Wabi-sabi": return "侘寂";
    case "Mushin": return "無心";
    case "Seijaku": return "静寂";
    case "Kanketsu": return "簡潔";
    case "Shizen": return "自然";
    case "Shibui": return "渋い";
    case "Yugen": return "幽玄";
    default: return "和";
  }
};
