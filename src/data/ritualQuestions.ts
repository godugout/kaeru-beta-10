
import { RitualQuestion } from "@/types/ritual-builder";

export const questions: RitualQuestion[] = [
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
    id: "transition",
    text: "What time of day awakens your deepest awareness?",
    description: "The transitions between states often reveal hidden wisdom",
    japaneseConcept: "移行",
    conceptMeaning: "Transition - the beauty of impermanence",
    animation: "light",
    options: [
      {
        value: "dawn",
        element: "Dawn",
        text: "First light breaking through darkness, full of potential and promise",
        emoji: "🌅"
      },
      {
        value: "day",
        element: "Midday",
        text: "Peak illumination when clarity and purpose reach their height",
        emoji: "☀️"
      },
      {
        value: "dusk",
        element: "Dusk",
        text: "Fading light that softens edges and invites reflection",
        emoji: "🌆"
      },
      {
        value: "night",
        element: "Night",
        text: "Deep darkness where mysteries unfold and dreams take form",
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
        value: "fire",
        element: "Transformation",
        text: "Transmute the obstacle through intensity and focused will",
        emoji: "🔥"
      },
      {
        value: "water",
        element: "Fluidity",
        text: "Flow around resistance, finding the path of least effort",
        emoji: "💧"
      },
      {
        value: "earth",
        element: "Endurance",
        text: "Stand firm with patient persistence until the way becomes clear",
        emoji: "🪨"
      },
      {
        value: "air",
        element: "Perspective",
        text: "Rise above to see the challenge from a higher vantage point",
        emoji: "💨"
      }
    ]
  },
  {
    id: "harmony",
    text: "What natural rhythm most deeply resonates with your inner being?",
    description: "The patterns that move us reveal our connection to the greater whole",
    japaneseConcept: "調和",
    conceptMeaning: "Harmony - alignment with nature's rhythms",
    animation: "bamboo",
    options: [
      {
        value: "wood",
        element: "Growth",
        text: "The slow, persistent unfurling of new life reaching toward light",
        emoji: "🌱"
      },
      {
        value: "metal",
        element: "Refinement",
        text: "The clarifying pressure that reveals essential strength and beauty",
        emoji: "⚒️"
      },
      {
        value: "water",
        element: "Cyclical Flow",
        text: "The eternal movement between states, never beginning or ending",
        emoji: "🌊"
      },
      {
        value: "fire",
        element: "Transformation",
        text: "The spark of change that transmutes one form into another",
        emoji: "✨"
      }
    ]
  },
  {
    id: "balance",
    text: "Between these opposing forces, where do you find your center?",
    description: "Balance is not static but a dynamic dance between polarities",
    japaneseConcept: "均衡",
    conceptMeaning: "Balance - finding the middle way",
    animation: "tree",
    options: [
      {
        value: "stillness",
        element: "Stillness",
        text: "In the quiet spaces between thoughts where clarity emerges",
        emoji: "🧘"
      },
      {
        value: "movement",
        element: "Movement",
        text: "In the purposeful flow of action aligned with intention",
        emoji: "💫"
      },
      {
        value: "structure",
        element: "Structure",
        text: "In the framework that gives form to creative expression",
        emoji: "🏛️"
      },
      {
        value: "spontaneity",
        element: "Spontaneity",
        text: "In the unexpected moments that break patterns and bring renewal",
        emoji: "✨"
      }
    ]
  },
  {
    id: "wisdom",
    text: "What form of ancestral wisdom speaks most directly to your soul?",
    description: "We carry ancient knowledge in different forms, each with unique gifts",
    japaneseConcept: "叡智",
    conceptMeaning: "Wisdom - knowledge transformed through experience",
    animation: "leaf",
    options: [
      {
        value: "earth",
        element: "Embodied Wisdom",
        text: "Knowledge held in the body's memory and intuitive knowing",
        emoji: "👐"
      },
      {
        value: "air",
        element: "Intellectual Wisdom",
        text: "Understanding that comes through reflection and mental clarity",
        emoji: "🧠"
      },
      {
        value: "water",
        element: "Emotional Wisdom",
        text: "Truth that emerges from the depths of feeling and connection",
        emoji: "💙"
      },
      {
        value: "fire",
        element: "Spiritual Wisdom",
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
        element: "Steadfastness",
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
