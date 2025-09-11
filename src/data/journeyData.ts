
export interface Journey {
  title: string;
  inspiration: string;
  description: string;
  color: string;
  symbol: string;
}

export const journeys: Journey[] = [
  {
    title: "Reclaim Your Balance",
    inspiration: "Shizukesa – Tranquility",
    description: "From tension to calm, let your body settle like water returning to stillness.",
    color: "from-blue-400/20 to-blue-600/5",
    symbol: "静"
  },
  {
    title: "Illuminate the Fog",
    inspiration: "Meisei – Clarity",
    description: "Awaken the mind and clear the path forward through morning rituals that sharpen vision.",
    color: "from-amber-400/20 to-amber-600/5",
    symbol: "明"
  },
  {
    title: "Flow into Freedom",
    inspiration: "Kaihō – Release",
    description: "Transform pain into power with targeted recovery designed to restore fluid mobility.",
    color: "from-green-400/20 to-green-600/5",
    symbol: "解"
  },
  {
    title: "Ground in Wisdom",
    inspiration: "Ancestral roots",
    description: "Connect to lineage and legacy through slow, mindful rituals.",
    color: "from-earth-400/20 to-earth-600/5",
    symbol: "根"
  },
  {
    title: "Align in Harmony",
    inspiration: "Chōwa – Harmony",
    description: "Mend the fractures. Integrate the pieces. Become whole.",
    color: "from-purple-400/20 to-purple-600/5",
    symbol: "調"
  }
];
