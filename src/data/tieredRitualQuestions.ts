import { RitualQuestion } from "@/types/ritual-builder";

// Core Questions (Phase 1) - Essential for basic recommendation
export const coreQuestions: RitualQuestion[] = [
  {
    id: "essence",
    text: "When you seek restoration, where does your spirit naturally turn?",
    description: "The place we instinctively go for healing reveals our elemental nature",
    japaneseConcept: "本質",
    conceptMeaning: "Essence - one's true nature",
    animation: "water",
    options: [
      {
        value: "mountain",
        element: "Mountain",
        text: "Solitary heights where the air is clear and silence speaks",
        emoji: "🏔️"
      },
      {
        value: "river",
        element: "River", 
        text: "Flowing waters that carry away what no longer serves",
        emoji: "🌊"
      },
      {
        value: "forest",
        element: "Forest",
        text: "Ancient trees that stand witness to countless cycles of renewal",
        emoji: "🌳"
      },
      {
        value: "field",
        element: "Field",
        text: "Open spaces where wind moves freely and possibilities expand",
        emoji: "🌾"
      }
    ]
  },
  {
    id: "approach",
    text: "How do you prefer to engage with your wellness practice?",
    description: "Your natural approach shapes the ideal ritual rhythm",
    japaneseConcept: "方法",
    conceptMeaning: "Method - the way of practice",
    animation: "light",
    options: [
      {
        value: "gentle",
        element: "Gentle",
        text: "Soft, gradual integration that honors your natural pace",
        emoji: "🌸"
      },
      {
        value: "focused", 
        element: "Focused",
        text: "Intentional, concentrated practice with clear purpose",
        emoji: "🎯"
      },
      {
        value: "flowing",
        element: "Flowing",
        text: "Adaptive practice that moves with your daily rhythms",
        emoji: "🌊"
      },
      {
        value: "grounded",
        element: "Grounded",
        text: "Steady, consistent practice that builds over time", 
        emoji: "🗻"
      }
    ]
  }
];

// Refinement Questions (Phase 2) - Optional for deeper personalization
export const refinementQuestions: RitualQuestion[] = [
  {
    id: "timing",
    text: "When do you feel most connected to your inner wisdom?",
    description: "The rhythm of day speaks to our natural energy patterns",
    japaneseConcept: "時間",
    conceptMeaning: "Time - honoring natural cycles",
    animation: "light",
    options: [
      {
        value: "morning",
        element: "Morning",
        text: "First light when the world is still and possibilities are fresh",
        emoji: "🌅"
      },
      {
        value: "midday",
        element: "Midday", 
        text: "Peak hours when energy and clarity reach their height",
        emoji: "☀️"
      },
      {
        value: "evening",
        element: "Evening",
        text: "Transition time when day softens into reflection",
        emoji: "🌆"
      },
      {
        value: "night",
        element: "Night",
        text: "Deep stillness where inner wisdom can emerge",
        emoji: "🌙"
      }
    ]
  },
  {
    id: "challenge",
    text: "When facing obstacles, which approach resonates with your nature?",
    description: "How we meet resistance reveals our path to growth",
    japaneseConcept: "挑戦",
    conceptMeaning: "Challenge - opportunity disguised as difficulty",
    animation: "mountain",
    options: [
      {
        value: "transform",
        element: "Transform",
        text: "Transmute the obstacle through intensity and focused will",
        emoji: "🔥"
      },
      {
        value: "flow",
        element: "Flow Around",
        text: "Find the path of least resistance, like water around stone",
        emoji: "💧"
      },
      {
        value: "endure",
        element: "Endure",
        text: "Stand firm with patient persistence until clarity emerges",
        emoji: "🪨"
      },
      {
        value: "transcend",
        element: "Transcend", 
        text: "Rise above to see the challenge from a higher perspective",
        emoji: "💨"
      }
    ]
  }
];

// Deep Questions (Phase 3) - For complete personalization  
export const deepQuestions: RitualQuestion[] = [
  {
    id: "wisdom",
    text: "What form of ancestral wisdom speaks most directly to your soul?",
    description: "We carry ancient knowledge in different forms, each with unique gifts",
    japaneseConcept: "叡智",
    conceptMeaning: "Wisdom - knowledge transformed through experience",
    animation: "leaf",
    options: [
      {
        value: "embodied",
        element: "Embodied",
        text: "Knowledge held in the body's memory and intuitive knowing",
        emoji: "👐"
      },
      {
        value: "intellectual",
        element: "Intellectual",
        text: "Understanding that comes through reflection and mental clarity",
        emoji: "🧠"
      },
      {
        value: "emotional",
        element: "Emotional", 
        text: "Truth that emerges from the depths of feeling and connection",
        emoji: "💙"
      },
      {
        value: "spiritual",
        element: "Spiritual",
        text: "Insight that arrives through intuition and higher awareness",
        emoji: "✨"
      }
    ]
  },
  {
    id: "presence",
    text: "What quality do you seek to cultivate in your daily practice?",
    description: "The intention we set shapes our experience and growth",
    japaneseConcept: "存在感", 
    conceptMeaning: "Presence - full awareness in the moment",
    animation: "wind",
    options: [
      {
        value: "persistence",
        element: "Persistence",
        text: "Unwavering commitment to your path through all seasons",
        emoji: "🗻"
      },
      {
        value: "adaptability",
        element: "Adaptability",
        text: "Graceful responsiveness to life's ever-changing conditions",
        emoji: "🌊"
      },
      {
        value: "clarity",
        element: "Clarity",
        text: "Crystalline perception that sees beyond illusion to essence",
        emoji: "💎"
      },
      {
        value: "compassion",
        element: "Compassion",
        text: "Open-hearted presence that holds both self and others",
        emoji: "💗"
      }
    ]
  }
];

export const allQuestions = [...coreQuestions, ...refinementQuestions, ...deepQuestions];