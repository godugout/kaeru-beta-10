export interface FrogAmbassador {
  name: string;
  species: string;
  description: string;
  colors: string[];
  personality: string;
}

export interface ProductCollection {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  frogAmbassador: FrogAmbassador;
  imageUrl: string;
  prices: {
    size2oz: number;
    size4oz: number;
  };
  theme: {
    primaryColor: string;
    accentColor: string;
    gradient: string;
  };
}

export const productCollections: ProductCollection[] = [
  {
    id: "gold",
    name: "GOLD",
    category: "Premium/Clarity",
    description: "Pure elevation for mind and spirit. Our flagship blend crafted for those who seek the highest quality experience.",
    benefits: ["Enhanced mental clarity", "Premium ingredient blend", "Luxury formulation", "Golden hour mindset"],
    frogAmbassador: {
      name: "Amami Ishikawa's Frog",
      species: "Odorrana splendida",
      description: "The golden guardian of premium wellness",
      colors: ["emerald green", "gold spots"],
      personality: "Regal and wise, embodying the highest standards of excellence"
    },
    imageUrl: "/lovable-uploads/775b98a8-5a04-44fc-bc94-1e4a72b0517e.png",
    prices: {
      size2oz: 80,
      size4oz: 150
    },
    theme: {
      primaryColor: "kaeru-gold",
      accentColor: "kaeru-moss",
      gradient: "from-kaeru-gold/20 to-kaeru-moss/10"
    }
  },
  {
    id: "adaptability",
    name: "ADAPTABILITY",
    category: "Daily Balance",
    description: "Flow with life's changes. A dynamic blend that helps you adapt to whatever the day brings.",
    benefits: ["Stress adaptation", "Flexible mindset", "Daily resilience", "Natural flow state"],
    frogAmbassador: {
      name: "Japanese Tree Frog",
      species: "Dryophytes japonicus",
      description: "The master of transformation and adaptation",
      colors: ["color-shifting", "adaptive camouflage"],
      personality: "Flexible and resilient, thriving in any environment"
    },
    imageUrl: "/lovable-uploads/6423af34-5fea-41fc-bf8d-3fcb64a3660e.png",
    prices: {
      size2oz: 80,
      size4oz: 150
    },
    theme: {
      primaryColor: "kaeru-jade",
      accentColor: "kaeru-stone",
      gradient: "from-kaeru-jade/20 to-kaeru-stone/10"
    }
  },
  {
    id: "sanctuary",
    name: "SANCTUARY",
    category: "Sleep/Rest",
    description: "Create your peaceful refuge. A gentle blend designed to help you find deep rest and restoration.",
    benefits: ["Deep sleep support", "Evening relaxation", "Peaceful mind", "Restorative rest"],
    frogAmbassador: {
      name: "Forest Green Tree Frog",
      species: "Rhacophorus arboreus",
      description: "The guardian of peaceful slumber",
      colors: ["deep forest green", "protective earth tones"],
      personality: "Gentle and nurturing, creating safe spaces for rest"
    },
    imageUrl: "/lovable-uploads/9dac3c96-b4e9-4ced-86a9-6db566bc413b.png",
    prices: {
      size2oz: 80,
      size4oz: 150
    },
    theme: {
      primaryColor: "kaeru-moss",
      accentColor: "kaeru-stone",
      gradient: "from-kaeru-moss/20 to-kaeru-stone/10"
    }
  },
  {
    id: "vitality",
    name: "VITALITY",
    category: "Energy/Active",
    description: "Ignite your inner fire. An energizing blend that fuels your most active moments and adventures.",
    benefits: ["Natural energy boost", "Active lifestyle support", "Vibrant alertness", "Dynamic wellness"],
    frogAmbassador: {
      name: "Red-eyed Tree Frog",
      species: "Agalychnis callidryas",
      description: "The vibrant spirit of active energy",
      colors: ["vibrant green", "striking red eyes"],
      personality: "Energetic and bold, always ready for the next adventure"
    },
    imageUrl: "/lovable-uploads/c01640e6-3d5a-438a-bbd8-9e122dbcb19b.png",
    prices: {
      size2oz: 80,
      size4oz: 150
    },
    theme: {
      primaryColor: "kaeru-gold",
      accentColor: "kaeru-jade",
      gradient: "from-kaeru-gold/15 to-kaeru-jade/15"
    }
  },
  {
    id: "clarity",
    name: "CLARITY",
    category: "Mental Focus",
    description: "See through the noise. A precise blend engineered for laser focus and mental transparency.",
    benefits: ["Mental clarity", "Enhanced focus", "Clear thinking", "Cognitive support"],
    frogAmbassador: {
      name: "Glass Frog",
      species: "Centrolene prosoblepon",
      description: "The transparent guide to mental clarity",
      colors: ["translucent green", "crystal clear"],
      personality: "Pure and focused, seeing through complexity with ease"
    },
    imageUrl: "/lovable-uploads/e8604307-39a2-4908-b7a7-b62e001e4db5.png",
    prices: {
      size2oz: 80,
      size4oz: 150
    },
    theme: {
      primaryColor: "kaeru-fog",
      accentColor: "kaeru-jade",
      gradient: "from-kaeru-fog/15 to-kaeru-jade/10"
    }
  },
  {
    id: "balance",
    name: "BALANCE",
    category: "Emotional Stability",
    description: "Find your emotional center. A harmonizing blend that helps maintain inner equilibrium and peace.",
    benefits: ["Emotional balance", "Inner stability", "Calm confidence", "Centered presence"],
    frogAmbassador: {
      name: "Blue Poison Dart Frog",
      species: "Dendrobates tinctorius",
      description: "The serene keeper of emotional balance",
      colors: ["deep blue", "calming azure"],
      personality: "Calm and centered, maintaining perfect emotional equilibrium"
    },
    imageUrl: "/lovable-uploads/78b65cd6-3a74-46cd-b172-02553cb87440.png",
    prices: {
      size2oz: 80,
      size4oz: 150
    },
    theme: {
      primaryColor: "kaeru-jade",
      accentColor: "kaeru-stone",
      gradient: "from-kaeru-jade/20 to-kaeru-stone/15"
    }
  }
];