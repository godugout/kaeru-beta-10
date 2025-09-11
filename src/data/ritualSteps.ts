
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

// Sample ritual steps for Strength Oil
export const strengthRitualSteps: RitualStep[] = [
  {
    id: "prepare",
    title: "Prepare",
    japaneseTitle: "準備",
    japaneseTranslation: "Junbi",
    japaneseConcept: "Ma (間)",
    japaneseConceptMeaning: "The meaningful pause between actions",
    instruction: "Center yourself in a quiet space. Hold the bottle in your palm, feeling its weight. Close your eyes and set an intention for strength and resilience as you prepare to apply the oil.",
    breathing: "Inhale for 4 counts, hold for 2, exhale for 6",
    benefit: "Activates the parasympathetic nervous system, preparing the body to better absorb and utilize the CBD compounds."
  },
  {
    id: "warm",
    title: "Warm",
    japaneseTitle: "温める",
    japaneseTranslation: "Atatameru",
    japaneseConcept: "Kaizen (改善)",
    japaneseConceptMeaning: "Continuous improvement through small actions",
    instruction: "Place a small amount in your palm. Gently rub your hands together in circular motions, feeling the warming sensation as the oil activates and spreads evenly across your skin.",
    breathing: "Inhale deeply through nose for 5 counts, exhale slowly through mouth for 5",
    benefit: "The friction increases blood circulation to the area, enhancing absorption while warming terpenes release their aromatic properties."
  },
  {
    id: "apply",
    title: "Apply",
    japaneseTitle: "適用する",
    japaneseTranslation: "Tekiyō suru",
    japaneseConcept: "Yuimaru (ゆいまーる)",
    japaneseConceptMeaning: "The spirit of mutual support and cooperation",
    instruction: "With focused attention, apply to areas of tension using gentle, deliberate pressure. Imagine the CBD compounds joining with your body's natural systems, working together toward balance.",
    breathing: "Box breathing: inhale 4, hold 4, exhale 4, hold 4",
    benefit: "CBD interacts with CB2 receptors in skin tissues, helping to regulate inflammation response where applied."
  },
  {
    id: "absorb",
    title: "Absorb",
    japaneseTitle: "吸収",
    japaneseTranslation: "Kyūshū",
    japaneseConcept: "Wabi-sabi (侘寂)",
    japaneseConceptMeaning: "Finding beauty in imperfection and impermanence",
    instruction: "Rest your hands on the area, allowing the warmth of your palms to enhance absorption. Acknowledge any sensations that arise without judgment, embracing the present moment.",
    breathing: "4-7-8 technique: inhale for 4, hold for 7, exhale for 8",
    benefit: "Extended contact allows phytocannabinoids to fully penetrate dermal layers, reaching deeper tissues and entering the bloodstream."
  },
  {
    id: "reflect",
    title: "Reflect",
    japaneseTitle: "内省",
    japaneseTranslation: "Naisei",
    japaneseConcept: "Mushin (無心)",
    japaneseConceptMeaning: "Mind without mind; complete presence and clarity",
    instruction: "Take a moment to notice how your body feels. Observe any shift in sensation, tension, or awareness. This mindful attention completes the ritual and deepens its effectiveness.",
    breathing: "Three deep cleansing breaths at your natural rhythm",
    benefit: "Mindful attention activates the mind-body connection, potentially enhancing the entourage effect of hemp-derived compounds."
  }
];

// Sample ritual steps for Calm Tincture
export const calmRitualSteps: RitualStep[] = [
  {
    id: "center",
    title: "Center",
    japaneseTitle: "中心",
    japaneseTranslation: "Chūshin",
    japaneseConcept: "Seijaku (静寂)",
    japaneseConceptMeaning: "Tranquility in the midst of activity",
    instruction: "Find a quiet moment in your day. Hold the dropper bottle in your hand, feeling its cool surface. Close your eyes and take three deep breaths to invite calm into your being.",
    breathing: "Inhale for 4 counts, hold for 4, exhale for 6",
    benefit: "Triggers the vagus nerve, reducing cortisol levels and preparing your endocannabinoid system for optimal CBD reception."
  },
  {
    id: "measure",
    title: "Measure",
    japaneseTitle: "測定",
    japaneseTranslation: "Sokutei",
    japaneseConcept: "Kanketsu (簡潔)",
    japaneseConceptMeaning: "Simplicity; elimination of the unnecessary",
    instruction: "Carefully draw your personalized dose into the dropper. Observe the golden liquid catching the light—a concentration of nature's balance held in suspension.",
    breathing: "Slow, mindful breathing at a natural pace",
    benefit: "Precise dosing ensures consistent cannabinoid delivery to your endocannabinoid system, supporting homeostasis."
  },
  {
    id: "place",
    title: "Place",
    japaneseTitle: "配置",
    japaneseTranslation: "Haichi",
    japaneseConcept: "Shizen (自然)",
    japaneseConceptMeaning: "Naturalness; absence of pretense",
    instruction: "Position the dropper beneath your tongue. Release the oil, allowing it to spread across the sublingual space. Keep your breathing slow and steady.",
    breathing: "Breathe slowly through your nose while holding the tincture",
    benefit: "The sublingual membrane is rich in capillaries, allowing cannabinoids to enter bloodstream directly, bypassing first-pass metabolism."
  },
  {
    id: "hold",
    title: "Hold",
    japaneseTitle: "保持",
    japaneseTranslation: "Hoji",
    japaneseConcept: "Shibui (渋い)",
    japaneseConceptMeaning: "Subtle elegance; understated beauty",
    instruction: "Hold the liquid beneath your tongue for 90 seconds, noticing its taste and sensation. This patience allows for the fullest absorption and benefit.",
    breathing: "6-3-6-3 rhythm: inhale 6, hold 3, exhale 6, hold 3",
    benefit: "Extended sublingual contact maximizes bioavailability, allowing up to 35% greater absorption compared to immediate swallowing."
  },
  {
    id: "integrate",
    title: "Integrate",
    japaneseTitle: "統合",
    japaneseTranslation: "Tōgō",
    japaneseConcept: "Yugen (幽玄)",
    japaneseConceptMeaning: "Profound awareness of the universe that triggers emotional response",
    instruction: "Swallow remaining oil and sit in awareness as the compounds begin their journey through your system. Notice the subtle shift toward equilibrium beginning to emerge.",
    breathing: "Return to natural breathing with full awareness",
    benefit: "CBD works with your endocannabinoid system to modulate nervous system activity, gradually transitioning the body to a state of balanced calm."
  }
];
