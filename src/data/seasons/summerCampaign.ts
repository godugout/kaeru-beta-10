
import { SeasonalCampaign } from "../types/seasonalTypes";

export const summerCampaign: SeasonalCampaign = {
  id: "summer",
  name: "Summer",
  japaneseName: "Shōsho (小暑)",
  returnTheme: "Return to Vitality",
  months: ["June", "July", "August"],
  colorPalette: {
    primary: "#3A98B9", // Ocean blue
    secondary: "#FFF1DC", // Sandy beige
    accent: "#FDEEDC", // Golden sunlight
    text: "#1A0000", // Deep charcoal
  },
  product: {
    name: "KAERU OCEAN",
    subtitle: "Sea Vitality Elixir",
    frog: "Japanese Pond Frog",
    description: "A refreshing formulation featuring sea minerals, Japanese mint, and matcha to energize the body and stimulate vitality during the warmest months.",
    imagePath: "https://images.unsplash.com/photo-1527608084587-c91a33f8336f?auto=format&fit=crop&q=80",
    altText: "KAERU OCEAN sea vitality elixir with wave patterns",
    botanicals: ["Sea Minerals", "Japanese Mint", "Matcha", "Seaweed Extract"],
    collection: "Vitality Collection"
  },
  ritual: {
    name: "Misogi Purification Ritual",
    description: "Inspired by the Japanese Shinto practice of misogi (water purification), this ritual harnesses the energy of water and sun to revitalize the body and spirit.",
    steps: [
      {
        id: "summer-step-1",
        title: "Water Preparation",
        japaneseTitle: "水の準備",
        japaneseTranslation: "Mizu no Junbi",
        japaneseConcept: "Mizuho (瑞穂)",
        japaneseConceptMeaning: "Abundant harvest; water bringing life",
        instruction: "Fill a basin with cool water and add a few drops of Kaeru Ocean elixir to create a refreshing aromatic experience.",
        breathing: "Slow, mindful breathing at a natural pace",
        benefit: "Creates a sensory-rich environment that activates the parasympathetic nervous system."
      },
      {
        id: "summer-step-2",
        title: "Sun Salutation",
        japaneseTitle: "太陽礼拝",
        japaneseTranslation: "Taiyō Reihai",
        japaneseConcept: "Hi no Michi (日の道)",
        japaneseConceptMeaning: "Path of the sun; following natural rhythm",
        instruction: "Face the morning sun and perform three deep bows, acknowledging the source of vitality and energy.",
        breathing: "Inhale deeply through nose for 5 counts, exhale slowly through mouth for 5",
        benefit: "Sunlight exposure helps the body produce vitamin D, which plays a crucial role in immune function and mood regulation."
      },
      {
        id: "summer-step-3",
        title: "Misogi Hand Cleansing",
        japaneseTitle: "禊の手清め",
        japaneseTranslation: "Misogi no Te Kiyome",
        japaneseConcept: "Kiyome (清め)",
        japaneseConceptMeaning: "Purification; cleansing of body and spirit",
        instruction: "Submerge your hands in the infused water and slowly bring them to your face, feeling the refreshing sensation awakening your senses.",
        breathing: "Box breathing: inhale 4, hold 4, exhale 4, hold 4",
        benefit: "The ritual act of cleansing symbolically removes impurities while aromatherapeutic compounds begin to enter the system."
      },
      {
        id: "summer-step-4",
        title: "Vitality Massage",
        japaneseTitle: "活力マッサージ",
        japaneseTranslation: "Katsuryoku Massāji",
        japaneseConcept: "Ki (気)",
        japaneseConceptMeaning: "Life force energy that flows through all things",
        instruction: "Apply Kaeru Ocean to pulse points using invigorating circular motions, visualizing energy flowing throughout your body.",
        breathing: "4-7-8 technique: inhale for 4, hold for 7, exhale for 8",
        benefit: "Stimulates blood flow and lymphatic drainage while CBD compounds begin to interact with endocannabinoid receptors."
      }
    ]
  },
  journalThemes: [
    "Ocean Wisdom: What Water Teaches Us About Resilience",
    "The Science of Sea Minerals for Skin Vitality",
    "Matcha: The Ancient Energy Source of Zen Monks",
    "Summer Balance: Cooling Practices from Japanese Tradition"
  ],
  visualElements: {
    textures: ["Wave patterns", "Sun-dappled surfaces", "Clear gradient overlays"],
    animations: ["Animated wave forms", "Light ripple effects", "Shadow to Light"]
  }
};
