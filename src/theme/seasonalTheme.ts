
import { format } from 'date-fns';

// Distinct seasonal color palettes with unique Japanese-inspired themes
export const seasonalColors = {
  spring: {
    // Sakura Dream - Soft pastels inspired by cherry blossoms at dawn
    primary: 'hsl(345 65% 85%)', // Sakura pink
    secondary: 'hsl(355 45% 92%)', // Delicate petal white
    accent: 'hsl(150 45% 75%)', // Fresh young leaf green
    background: 'linear-gradient(135deg, hsl(345 30% 97%) 0%, hsl(150 20% 95%) 100%)',
    texture: 'none',
    motif: 'cherry-blossom',
    japaneseLabel: '春 (Haru)',
    theme: 'Sakura no Yume', // Cherry Blossom Dream
    philosophy: 'Renewal through gentle awakening'
  },
  summer: {
    // Indigo Depths - Deep blues inspired by traditional Japanese indigo dyeing
    primary: 'hsl(215 85% 25%)', // Deep indigo
    secondary: 'hsl(200 75% 45%)', // Ocean blue
    accent: 'hsl(185 60% 70%)', // Turquoise mist
    background: 'linear-gradient(45deg, hsl(215 40% 15%) 0%, hsl(200 30% 25%) 100%)',
    texture: 'none',
    motif: 'water',
    japaneseLabel: '夏 (Natsu)',
    theme: 'Ai no Fukasa', // Indigo Depths
    philosophy: 'Cooling flow through depths of wisdom'
  },
  autumn: {
    // Vermillion Ceremony - Rich reds and golds of torii gates and maple leaves
    primary: 'hsl(15 85% 55%)', // Vermillion red
    secondary: 'hsl(35 90% 65%)', // Golden amber
    accent: 'hsl(25 75% 35%)', // Burnt sienna
    background: 'linear-gradient(225deg, hsl(15 60% 35%) 0%, hsl(35 50% 45%) 100%)',
    texture: 'none',
    motif: 'maple-leaf',
    japaneseLabel: '秋 (Aki)',
    theme: 'Shuiro no Rei', // Vermillion Ceremony
    philosophy: 'Transformation through sacred fire'
  },
  winter: {
    // Moonlit Snow - Cool silvers and soft purples of winter moonlight
    primary: 'hsl(240 15% 75%)', // Moonlit silver
    secondary: 'hsl(260 25% 85%)', // Lavender mist
    accent: 'hsl(220 30% 65%)', // Cool steel
    background: 'linear-gradient(180deg, hsl(240 10% 92%) 0%, hsl(260 15% 90%) 100%)',
    texture: 'none',
    motif: 'snowflake',
    japaneseLabel: '冬 (Fuyu)',
    theme: 'Tsuki no Yuki', // Moonlit Snow
    philosophy: 'Stillness through lunar contemplation'
  }
};

// Seasonal product bundle suggestions
export const seasonalProducts = {
  spring: {
    title: "Spring Renewal Bundle",
    description: "Revitalize your routine with our spring-inspired CBD formulations that promote renewal and growth.",
    products: ["KAERU CLARITY", "KAERU VITALITY"],
    botanicals: ["Cherry Blossom Extract", "Green Tea", "Japanese Mint"]
  },
  summer: {
    title: "Summer Cooling Collection",
    description: "Beat the heat with our refreshing summer formulations designed to cool and balance your system.",
    products: ["KAERU GOLD", "KAERU VITALITY"],
    botanicals: ["Yuzu Extract", "Bamboo Water", "Sea Algae"]
  },
  autumn: {
    title: "Autumn Transformation Set",
    description: "Embrace change with our autumn collection that supports your body through seasonal transitions.",
    products: ["KAERU CLARITY", "KAERU GOLD"],
    botanicals: ["Japanese Maple Extract", "Shiitake Mushroom", "Kuromoji"]
  },
  winter: {
    title: "Winter Reflection Bundle",
    description: "Find stillness and inner warmth with our winter formulations that promote deep relaxation and reflection.",
    products: ["KAERU GOLD", "KAERU CLARITY"],
    botanicals: ["Japanese Pine Extract", "Snow Algae", "Hinoki Cypress"]
  }
};

// Function to determine current season
export function getCurrentSeason(): 'spring' | 'summer' | 'autumn' | 'winter' {
  const month = new Date().getMonth();
  // 0-based months: Jan=0, Feb=1, etc.
  
  // Spring: Mar (2), Apr (3), May (4)
  if (month >= 2 && month <= 4) {
    return 'spring';
  }
  // Summer: Jun (5), Jul (6), Aug (7)
  else if (month >= 5 && month <= 7) {
    return 'summer';
  }
  // Autumn: Sep (8), Oct (9), Nov (10)
  else if (month >= 8 && month <= 10) {
    return 'autumn';
  }
  // Winter: Dec (11), Jan (0), Feb (1)
  else {
    return 'winter';
  }
}

// Format the current date in Japanese style
export function getFormattedJapaneseDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = format(now, 'MM');
  const day = format(now, 'dd');
  
  return `${year}年 ${month}月 ${day}日`;
}
