
import { SeasonalCampaign } from "../types/seasonalTypes";

export const autumnCampaign: SeasonalCampaign = {
  id: "autumn",
  name: "Autumn",
  japaneseName: "Shūbun (秋分)",
  returnTheme: "Return to Roots",
  months: ["September", "October", "November"],
  colorPalette: {
    primary: "#C8B6A6", // Earthen beige
    secondary: "#A4907C", // Woody brown
    accent: "#F66B0E", // Maple leaf orange
    text: "#1A120B", // Deep earth brown
  },
  product: {
    name: "KAERU EARTH",
    subtitle: "Root Grounding Balm",
    frog: "Japanese Brown Frog",
    description: "A rich, warming formulation featuring Japanese cedar, ginger root, and persimmon extract to center the spirit and strengthen connection to earth.",
    imagePath: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&q=80",
    altText: "KAERU EARTH root grounding balm with autumn leaves",
    botanicals: ["Japanese Cedar Oil", "Ginger Root", "Persimmon Extract", "Black Sesame"],
    collection: "Roots Collection"
  },
  ritual: {
    name: "Tsukimi Grounding Ritual",
    description: "Inspired by the Japanese tradition of moon viewing (Tsukimi), this evening ritual focuses on gratitude, letting go, and reconnecting with one's roots.",
    steps: [
      {
        id: "autumn-step-1",
        title: "Prepare Sacred Space",
        japaneseTitle: "神聖な空間の準備",
        japaneseTranslation: "Shinsei na Kūkan no Junbi",
        japaneseConcept: "Tsukimi (月見)",
        japaneseConceptMeaning: "Moon viewing; appreciation of natural cycles",
        instruction: "Arrange a small altar with autumn elements like fallen leaves or persimmons. If possible, position where moonlight enters the space.",
        breathing: "Deep, grounding breaths connecting to the earth",
        benefit: "Creates a sensory-rich environment that promotes mindfulness and presence."
      },
      {
        id: "autumn-step-2",
        title: "Earth Connection",
        japaneseTitle: "地球とのつながり",
        japaneseTranslation: "Chikyū to no Tsunagari",
        japaneseConcept: "Daichi (大地)",
        japaneseConceptMeaning: "Great earth; source of all nourishment",
        instruction: "Begin by removing footwear and feeling the ground beneath you. Apply Kaeru Earth balm to the soles of your feet to enhance grounding.",
        breathing: "Slow, deep breaths visualizing roots extending from feet",
        benefit: "The reflexology points on the feet allow for efficient absorption of botanical compounds."
      },
      {
        id: "autumn-step-3",
        title: "Release Practice",
        japaneseTitle: "解放の実践",
        japaneseTranslation: "Kaihō no Jissen",
        japaneseConcept: "Momijigari (紅葉狩り)",
        japaneseConceptMeaning: "Autumn leaf viewing; honoring natural transformation",
        instruction: "Rub the balm between palms, inhaling the earthy aroma. With each exhale, name something you're ready to release as the leaves fall.",
        breathing: "Box breathing: inhale 4, hold 4, exhale 4, hold 4",
        benefit: "Essential oils like cedar activate the limbic system, supporting emotional processing and release."
      },
      {
        id: "autumn-step-4",
        title: "Root Visualization",
        japaneseTitle: "根のビジュアライゼーション",
        japaneseTranslation: "Ne no Bijuaraizēshon",
        japaneseConcept: "Nemawashi (根回し)",
        japaneseConceptMeaning: "Laying the groundwork; attending to fundamentals",
        instruction: "Apply remaining balm to your lower back while visualizing roots extending from your body deep into the earth, drawing up nourishment and stability.",
        breathing: "4-7-8 technique: inhale for 4, hold for 7, exhale for 8",
        benefit: "The sacral area contains many nerve endings connected to the parasympathetic nervous system, helping trigger relaxation."
      }
    ]
  },
  journalThemes: [
    "The Wisdom of Falling Leaves: Lessons in Letting Go",
    "Japanese Cedar: The Ancient Guardian of Forests",
    "Root Vegetables in Traditional Japanese Autumn Cuisine",
    "Tsukimi: How Moon Viewing Connects Us to Cycles"
  ],
  visualElements: {
    textures: ["Falling leaf patterns", "Rich wood grain", "Textured paper"],
    animations: ["Floating autumn leaves", "Moon phase transitions", "Fragmented to Whole"]
  }
};
