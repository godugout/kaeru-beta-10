
import { SeasonalCampaign } from "../types/seasonalTypes";

export const springCampaign: SeasonalCampaign = {
  id: "spring",
  name: "Spring",
  japaneseName: "Risshun (立春)",
  returnTheme: "Return to Renewal",
  months: ["March", "April", "May"],
  colorPalette: {
    primary: "#F8E3EB", // Soft cherry blossom pink
    secondary: "#E1F0C4", // Fresh young leaf green
    accent: "#FFFFFF", // Pure white 
    text: "#643843", // Deep maroon
  },
  product: {
    name: "KAERU BLOOM",
    subtitle: "Sakura Renewal Essence",
    frog: "Japanese Tree Frog",
    description: "A delicate blend infused with Japanese cherry blossom (sakura), yuzu, and green tea extract to awaken the senses and inspire new beginnings.",
    imagePath: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&q=80",
    altText: "KAERU BLOOM sakura renewal essence with cherry blossom petals",
    botanicals: ["Cherry Blossom Extract", "Yuzu", "Green Tea", "Hinoki Cypress"],
    collection: "Renewal Collection"
  },
  ritual: {
    name: "Hanami Meditation Ritual",
    description: "Inspired by the Japanese tradition of cherry blossom viewing (Hanami), this meditation ritual focuses on appreciating the beauty of impermanence and embracing new beginnings.",
    steps: [
      {
        id: "spring-step-1",
        title: "Prepare Sacred Space",
        japaneseTitle: "準備",
        japaneseTranslation: "Junbi",
        japaneseConcept: "Ma (間)",
        japaneseConceptMeaning: "The meaningful pause between actions",
        instruction: "Find a quiet space preferably near a window with natural light. Place a small branch or image of cherry blossoms as a focal point.",
        breathing: "Inhale for 4 counts, hold for 2, exhale for 6",
        benefit: "Activates the parasympathetic nervous system, preparing the body to better absorb and utilize the CBD compounds."
      },
      {
        id: "spring-step-2",
        title: "Awakening Breath",
        japaneseTitle: "目覚めの呼吸",
        japaneseTranslation: "Mezame no Kokyū",
        japaneseConcept: "Kaizen (改善)",
        japaneseConceptMeaning: "Continuous improvement through small actions",
        instruction: "Apply a small amount of Kaeru Bloom to your pulse points. Take three deep breaths, inhaling the delicate aroma of cherry blossoms and renewal.",
        breathing: "Inhale deeply through nose for 5 counts, exhale slowly through mouth for 5",
        benefit: "The friction increases blood circulation to the area, enhancing absorption while warming terpenes release their aromatic properties."
      },
      {
        id: "spring-step-3",
        title: "Impermanence Reflection",
        japaneseTitle: "無常の反映",
        japaneseTranslation: "Mujō no Hanei",
        japaneseConcept: "Yuimaru (ゆいまーる)",
        japaneseConceptMeaning: "The spirit of mutual support and cooperation",
        instruction: "As you massage the essence into your skin, contemplate the Japanese concept of 'mono no aware' - the pathos of things - appreciating beauty precisely because it doesn't last.",
        breathing: "Box breathing: inhale 4, hold 4, exhale 4, hold 4",
        benefit: "CBD interacts with CB2 receptors in skin tissues, helping to regulate inflammation response where applied."
      },
      {
        id: "spring-step-4",
        title: "Gratitude Practice",
        japaneseTitle: "感謝の実践",
        japaneseTranslation: "Kansha no Jissen",
        japaneseConcept: "Wabi-sabi (侘寂)",
        japaneseConceptMeaning: "Finding beauty in imperfection and impermanence",
        instruction: "Close the ritual by noting three new beginnings in your life for which you're grateful, embodying the spirit of spring renewal.",
        breathing: "4-7-8 technique: inhale for 4, hold for 7, exhale for 8",
        benefit: "Extended contact allows phytocannabinoids to fully penetrate dermal layers, reaching deeper tissues and entering the bloodstream."
      }
    ]
  },
  journalThemes: [
    "The Science of Renewal: How Nature Rebuilds",
    "Cherry Blossom Wisdom: Lessons in Impermanence",
    "Spring Cleansing: Ancient Japanese Detoxification Practices",
    "Yuzu: The Citrus of New Beginnings"
  ],
  visualElements: {
    textures: ["Cherry blossom patterns", "Soft watercolor washes", "Delicate line work"],
    animations: ["Floating cherry blossom petals", "Gentle sunrise transitions", "Ripples to Stillness"]
  }
};
