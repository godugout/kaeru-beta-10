
export interface FrogAmbassadorBase {
  id: string;
  name: string;
  species: string;
  collection: string;
  symbol: string;
  japaneseName: string;
  mainColor: string;
}

export interface FrogAmbassadorDetail extends FrogAmbassadorBase {
  origin: string;
  power: string;
  ritual: string;
  visualDescription: string;
  haiku: string;
  imagePath?: string;
  seasonalVariation?: SeasonalVariation;
  transformationBenefits: string[];
}

export interface SeasonalVariation {
  spring: {
    accentColor: string;
    mood: string;
  };
  summer: {
    accentColor: string;
    mood: string;
  };
  autumn: {
    accentColor: string;
    mood: string;
  };
  winter: {
    accentColor: string;
    mood: string;
  };
}
