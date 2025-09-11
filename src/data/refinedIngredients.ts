export interface RefinedIngredient {
  id: string;
  name: string;
  kanji: string;
  subtitle: string;
  cultural: string;
  mythology: string;
  healing: string;
  science: string;
  kaeru: string;
  productAssociations: string[];
  decorative: {
    pattern: string;
    particleEffect: string;
    icon: string;
    symbol: string;
    visualDescription: string;
    soundEffect: string;
    colors: {
      primary: string;
      accent: string;
      particle: string;
    };
  };
  ritualActivation: {
    time: string;
    method: string;
  };
}

export const refinedIngredients: RefinedIngredient[] = [
  {
    id: "matcha",
    name: "Matcha",
    kanji: "抹茶",
    subtitle: "The Warrior's Awakening",
    cultural: "Matcha transcends mere tea—it is liquid meditation, the elixir of samurai before battle. In the chanoyu (tea ceremony), each whisked bowl represents a universe of mindful presence. Warriors would drink matcha to achieve mushin (無心)—the state of no-mind essential for perfect action.",
    mythology: "Legend speaks of the monk Eisai who brought tea seeds from China, planting them in temple grounds where tree frogs (Hyla japonica) sang. These frogs, drawn to the tea gardens' humid microclimate, became guardians of the sacred groves. Their presence signified the tea's purity—for frogs, sensitive to toxins, thrived only where nature was in perfect balance.",
    healing: "Cha-no-yu Medicine: Detoxification of liver meridians • Zen Focus: L-theanine for sustained satori (enlightenment glimpses) • Ki Circulation: Chlorophyll to purify blood and enhance life force",
    science: "EGCG catechins provide 137x the antioxidants of regular green tea. L-theanine creates alpha brain waves identical to deep meditation states. Studies show matcha enhances reaction time by 35% while maintaining calm—the warrior's paradox.",
    kaeru: "Like the tree frog who sits motionless for hours then strikes with precision, matcha teaches us stillness before action.",
    productAssociations: ["KAERU CLARITY", "Morning Mist Ritual"],
    decorative: {
      pattern: "asanoha",
      particleEffect: "jade-swirls",
      icon: "tea-whisk",
      symbol: "静",
      visualDescription: "Misty jade powder swirling into a frog silhouette",
      soundEffect: "bamboo-whisk",
      colors: {
        primary: "#2D5016",
        accent: "#D4AF37",
        particle: "#00A86B"
      }
    },
    ritualActivation: {
      time: "Morning",
      method: "Three breaths of gratitude"
    }
  },
  {
    id: "yuzu",
    name: "Yuzu",
    kanji: "柚子",
    subtitle: "The Golden Return",
    cultural: "During winter solstice (Tōji), Japanese families float yuzu in hot baths—a 400-year ritual called yuzu-yu. This practice marks the sun's return and the soul's renewal. Samurai would bathe in yuzu before important journeys, believing its essence would ensure their safe return home.",
    mythology: "The golden yuzu grew in the garden of Tsukuyomi, the moon god, bearing fruit that could illuminate the darkest night. When mortals stole seeds, the fruit lost its glow but retained its power to brighten spirits. The Ōgama (giant toad) of Mount Tsukuba was said to guard the last celestial yuzu tree.",
    healing: "Yang Energy: Warming circulation for cold constitutions • Defensive Wei Qi: Strengthens protective energy field • Emotional Alchemy: Transforms melancholy into joy",
    science: "Yuzu contains 3x more vitamin C than lemons. Its unique limonoid compounds cross the blood-brain barrier, reducing cortisol within 10 minutes of inhalation. Japanese studies show yuzu baths increase core body temperature and maintain it 40% longer than regular hot water.",
    kaeru: "The frog always returns to its pond, guided by an inner compass. Yuzu is that compass for the wandering spirit.",
    productAssociations: ["Sunset Recovery Oil", "KAERU GOLD"],
    decorative: {
      pattern: "seigaiha",
      particleEffect: "citrus-sparkles",
      icon: "sun-citrus",
      symbol: "帰",
      visualDescription: "Golden citrus orbiting around a meditating frog",
      soundEffect: "water-drops",
      colors: {
        primary: "#FF8C00",
        accent: "#FFD700",
        particle: "#FFA500"
      }
    },
    ritualActivation: {
      time: "Midday",
      method: "Pressed to pulse points"
    }
  },
  {
    id: "hinoki",
    name: "Hinoki",
    kanji: "檜",
    subtitle: "The Sacred Boundary",
    cultural: "Hinoki builds Japan's most sacred spaces—from Ise Shrine (rebuilt every 20 years for 1,300 years) to samurai dōjō. Its wood naturally repels decay for centuries. Warriors meditated in hinoki forests before battle, believing the trees' kami (spirits) would share their immortality.",
    mythology: "The first hinoki grew from the tears of Susanoo, the storm god, after his exile from heaven. These trees became bridges between realms. The legendary Gama Sennin (Toad Sage) lived in a hinoki forest, where he learned the secrets of longevity from ancient tree frogs who had absorbed the cypress essence.",
    healing: "Shen Calming: Settles disturbed spirit (shen) • Lung Qi: Opens respiratory channels, releases grief • Sacred Protection: Creates energetic boundaries",
    science: "Hinoki's phytoncides increase NK (natural killer) cell activity by 50% after forest bathing exposure. Its α-pinene reduces sympathetic nervous activity while its hinokitiol compounds demonstrate powerful antimicrobial properties preserved even in 1,000-year-old temple beams.",
    kaeru: "The tree frog finds sanctuary in hinoki's embrace. We too find our sacred space within its essence.",
    productAssociations: ["Temple Mist Balm", "Evening Ritual Bath"],
    decorative: {
      pattern: "shippo",
      particleEffect: "forest-mist",
      icon: "cypress-tree",
      symbol: "森",
      visualDescription: "Ancient cypress with a tree frog ascending its trunk toward light",
      soundEffect: "forest-wind",
      colors: {
        primary: "#228B22",
        accent: "#32CD32",
        particle: "#98FB98"
      }
    },
    ritualActivation: {
      time: "Evening",
      method: "Steam inhalation"
    }
  },
  {
    id: "shoga",
    name: "Shōga",
    kanji: "生姜",
    subtitle: "The Inner Fire",
    cultural: "Shōga has warmed Japanese bodies and spirits for 1,500 years. Ninja carried dried ginger to maintain body heat during winter reconnaissance. In kampo medicine, it's called the 'restoration root'—reviving what cold and stagnation have dulled. Tea masters add it to evening ceremonies to kindle digestive fire.",
    mythology: "The fire-bellied toad (Bombina orientalis) was said to gain its warming power from eating wild ginger shoots. Martial artists observed these toads surviving frozen ponds, their bellies glowing warm orange. This inspired the Kaeru-no-Kata (Frog Form) breathing technique that generates internal heat.",
    healing: "Dispersing Cold: Warms meridians, especially kidney and spleen • Moving Stagnation: Breaks up oketsu (blood stagnation) • Wei Qi Activation: Strengthens defensive energy",
    science: "6-Gingerol and 6-shogaol increase thermogenesis by 20% and reduce inflammatory markers (TNF-α, IL-6) by up to 45%. Studies show 2g daily reduces muscle soreness by 25% and accelerates recovery time in athletes.",
    kaeru: "The poison dart frog's fire comes from within. Shōga awakens our own inner flame of transformation.",
    productAssociations: ["KAERU VITALITY", "Warrior's Recovery Balm"],
    decorative: {
      pattern: "homura",
      particleEffect: "ember-glows",
      icon: "ginger-fire",
      symbol: "火",
      visualDescription: "Fire-breathing frog with ginger root patterns as scales",
      soundEffect: "crackling-fire",
      colors: {
        primary: "#CC5500",
        accent: "#FF4500",
        particle: "#FF6347"
      }
    },
    ritualActivation: {
      time: "Training",
      method: "Before movement"
    }
  },
  {
    id: "yomogi",
    name: "Yomogi",
    kanji: "蓬",
    subtitle: "The Dream Keeper",
    cultural: "Yomogi is Japan's most sacred purification herb, used in oharai (purification rituals) and burned to banish yokai (spirits). Samurai wives would sew yomogi into armor linings to protect warriors from unseen dangers. During Hinamatsuri, it's mixed into mochi to ensure daughters grow strong and pure.",
    mythology: "Tsukiyomi, the moon god, gave yomogi to humanity as protection during sleep when souls wander. The mythical Tsuki-no-Kaeru (Moon Frog) feeds exclusively on mugwort, allowing it to leap between the dream and waking worlds. Its croaking guides lost souls back to their bodies at dawn.",
    healing: "Dream Navigation: Enhances lucid dreaming and recall • Blood Tonic: Especially for women's reproductive health • Meridian Warming: Used in moxibustion for 3,000 years",
    science: "Yomogi's artemisinin compounds show powerful antimalarial and anticancer properties. Its thujone content (in safe amounts) enhances GABA receptors, promoting deep sleep. Japanese studies confirm its traditional use—improving circulation by 30% when used in moxa therapy.",
    kaeru: "The frog's metamorphosis happens in darkness, guided by dreams. Yomogi illuminates this shadow journey.",
    productAssociations: ["Midnight Pond Elixir", "KAERU SANCTUARY"],
    decorative: {
      pattern: "moon-phases",
      particleEffect: "dream-smoke",
      icon: "moon-leaves",
      symbol: "夢",
      visualDescription: "Ethereal frog dissolving into mugwort smoke spirals",
      soundEffect: "night-forest",
      colors: {
        primary: "#4B0082",
        accent: "#9370DB",
        particle: "#E6E6FA"
      }
    },
    ritualActivation: {
      time: "Night",
      method: "Under moonlight"
    }
  }
];