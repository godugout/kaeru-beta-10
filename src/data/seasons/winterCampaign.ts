
import { SeasonalCampaign } from "../types/seasonalTypes";

export const winterCampaign: SeasonalCampaign = {
  id: "winter",
  name: "Winter",
  japaneseName: "Tōji (冬至)",
  returnTheme: "Return to Stillness",
  months: ["December", "January", "February"],
  colorPalette: {
    primary: "#183440", // Deep indigo night
    secondary: "#537188", // Icy blue-gray
    accent: "#E6E1C5", // Soft winter light
    text: "#FFFFFF", // Snow white
  },
  product: {
    name: "KAERU SILENCE",
    subtitle: "Winter Meditation Essence",
    frog: "Hibernating Forest Frog",
    description: "A calming blend of hinoki cypress, yuzu, and snow algae that promotes deep introspection and restoration during the stillest season.",
    imagePath: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80",
    altText: "KAERU SILENCE winter meditation essence with snow crystal design",
    botanicals: ["Hinoki Cypress", "Winter Yuzu", "Snow Algae", "White Pine"],
    collection: "Stillness Collection"
  },
  ritual: {
    name: "Onsen Stillness Ritual",
    description: "Inspired by Japan's winter hot spring (onsen) traditions, this evening ritual creates a sanctuary of warmth and contemplation during the coldest season.",
    steps: [
      {
        id: "winter-step-1",
        title: "Bath Preparation",
        japaneseTitle: "風呂の準備",
        japaneseTranslation: "Furo no Junbi",
        japaneseConcept: "Onsen (温泉)",
        japaneseConceptMeaning: "Hot spring; healing waters",
        instruction: "Fill a bath with hot water and add 5-7 drops of Kaeru Silence essence. The steam will create an aromatic sanctuary.",
        breathing: "Deep, relaxed breathing through the nose",
        benefit: "Steam inhalation allows aromatic compounds to quickly enter the bloodstream via the lungs."
      },
      {
        id: "winter-step-2",
        title: "Candle Meditation",
        japaneseTitle: "キャンドル瞑想",
        japaneseTranslation: "Kyandoru Meisō",
        japaneseConcept: "Tomoshi (灯)",
        japaneseConceptMeaning: "Illumination; light in darkness",
        instruction: "Light a single candle beside the bath. Before entering, watch the flame for one minute, observing its perfect stillness when undisturbed.",
        breathing: "Slow, rhythmic breathing matching the candle's steady flame",
        benefit: "Focused attention on a single point helps quiet mental chatter and prepares the mind for deep relaxation."
      },
      {
        id: "winter-step-3",
        title: "Immersion Practice",
        japaneseTitle: "浸漬の実践",
        japaneseTranslation: "Shinshi no Jissen",
        japaneseConcept: "Shinrin-yoku (森林浴)",
        japaneseConceptMeaning: "Forest bathing; immersion in nature",
        instruction: "Enter the bath slowly, paying attention to the sensation of warm water meeting your skin. Remain in silence for at least 10 minutes.",
        breathing: "Box breathing: inhale 4, hold 4, exhale 4, hold 4",
        benefit: "Warm water immersion dilates blood vessels, improving circulation and enhancing CBD absorption through the skin."
      },
      {
        id: "winter-step-4",
        title: "Stillness Embodiment",
        japaneseTitle: "静けさの具現化",
        japaneseTranslation: "Shizukesa no Gugenkа",
        japaneseConcept: "Yuki-ma (雪間)",
        japaneseConceptMeaning: "Snow space; silence between snowfalls",
        instruction: "After the bath, apply Kaeru Silence to your chest and temples. Sit wrapped in a warm towel, embracing the quiet wisdom of winter.",
        breathing: "4-7-8 technique: inhale for 4, hold for 7, exhale for 8",
        benefit: "Temple application targets the nervous system directly, while chest application allows for continued aromatherapeutic benefits."
      }
    ]
  },
  journalThemes: [
    "The Science of Hibernation: What We Learn from Nature's Rest",
    "Snow Algae: Winter's Remarkable Survivor",
    "Yuzu Winter Solstice Baths: An Ancient Japanese Tradition",
    "Finding Wisdom in Emptiness: Zen Teachings for Winter"
  ],
  visualElements: {
    textures: ["Snow crystal patterns", "Frosted surfaces", "Minimal line work"],
    animations: ["Gentle snowfall", "Frost forming patterns", "Tension to Release"]
  }
};
