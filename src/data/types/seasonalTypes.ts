
// Define seasonal types

export interface SeasonalProduct {
  name: string;
  subtitle: string;
  frog: string;
  description: string;
  imagePath: string;
  altText: string;
  botanicals: string[];
  collection: string;
}

export interface RitualStep {
  id: string;
  title: string;
  japaneseTitle: string;
  japaneseTranslation: string;
  japaneseConcept: string;
  japaneseConceptMeaning: string;
  instruction: string;
  breathing: string;
  benefit: string;
}

export interface SeasonalRitual {
  name: string;
  description: string;
  steps: RitualStep[];
}

export interface SeasonalCampaign {
  id: "spring" | "summer" | "autumn" | "winter";
  name: string;
  japaneseName: string;
  returnTheme: string;
  months: string[];
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
  product: SeasonalProduct;
  ritual: SeasonalRitual;
  journalThemes: string[];
  visualElements: {
    textures: string[];
    animations: string[];
  };
}

export type Season = "spring" | "summer" | "autumn" | "winter";
