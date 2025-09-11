
export interface RitualQuestionOption {
  value: string;
  element: string;
  text: string;
  emoji: string;
}

export interface RitualQuestion {
  id: string;
  text: string;
  description: string;
  japaneseConcept: string;
  conceptMeaning: string;
  animation: "water" | "light" | "mountain" | "bamboo" | "tree" | "leaf" | "wind";
  options: RitualQuestionOption[];
}

export interface RitualPath {
  id: string;
  name: string;
  description: string;
  emoji: string;
  products: string[];
}
