
import { productData } from "@/data/productData";

// Define the types for ritual recommendations
export interface RecommendedProduct {
  name: string;
  subtitle: string;
  description: string;
  imagePath: string;
  altText: string;
}

export interface Recommendation {
  path: string;
  emoji: string;
  description: string;
  products: RecommendedProduct[];
  ritualName: string;
  ritualDescription: string;
  japaneseWisdom: string;
}

// Define ritual paths based on element combinations
const ritualPaths = {
  mountain: {
    path: "Mountain Path",
    emoji: "🏔️",
    description: "The path of strength and resilience. Your ritual focuses on building inner fortitude and physical stability.",
    japaneseWisdom: "山に登れば登るほど、視界は広がる。 (The higher you climb the mountain, the wider you see.)"
  },
  river: {
    path: "River Path",
    emoji: "🌊",
    description: "The path of flow and adaptability. Your ritual embraces change and cultivates smooth transitions.",
    japaneseWisdom: "水の流れのように、柔軟に。 (Like flowing water, be flexible.)"
  },
  forest: {
    path: "Forest Path",
    emoji: "🌳",
    description: "The path of growth and renewal. Your ritual nurtures deep roots and steady, sustainable progress.",
    japaneseWisdom: "森の静けさに耳を傾けよ。 (Listen to the silence of the forest.)"
  },
  field: {
    path: "Open Field Path",
    emoji: "🌾",
    description: "The path of expansion and possibility. Your ritual creates space for new growth and perspectives.",
    japaneseWisdom: "広い野原で自分を見つける。 (Find yourself in the wide field.)"
  }
};

// Ensure these values match what comes from quiz answers
const validElements = ["mountain", "river", "forest", "field"];

// Simple algorithm to determine the primary element from answers
const determinePrimaryElement = (answers: Record<string, string>): string => {
  // Count occurrences of each element
  const elementCount: Record<string, number> = {};
  
  Object.values(answers).forEach(answer => {
    elementCount[answer] = (elementCount[answer] || 0) + 1;
  });
  
  // Find the most common element
  let maxCount = 0;
  let primaryElement = "mountain"; // Default
  
  Object.entries(elementCount).forEach(([element, count]) => {
    if (count > maxCount) {
      maxCount = count;
      primaryElement = element;
    }
  });
  
  // Ensure the primary element is one of our valid options
  return validElements.includes(primaryElement) ? primaryElement : "mountain";
};

// Get secondary element that complements the primary element
const getComplementaryElement = (primaryElement: string): string => {
  const complementaryPairs: Record<string, string> = {
    mountain: "river", // Stability + Flow
    river: "mountain", // Flow + Stability
    forest: "field",   // Growth + Expansion
    field: "forest",   // Expansion + Growth
  };
  
  return complementaryPairs[primaryElement] || "forest";
};

// Map elements to product indexes
const elementToProductMap: Record<string, number> = {
  mountain: 0, // KAERU GOLD
  river: 1,    // KAERU CLARITY
  forest: 2,   // KAERU VITALITY
  field: 0     // KAERU GOLD (default for now)
};

// Create ritual names based on element combinations
const createRitualName = (primary: string, secondary: string): string => {
  const ritualNameComponents: Record<string, string> = {
    mountain: "Strength",
    river: "Flow",
    forest: "Growth",
    field: "Expansion"
  };
  
  return `${ritualNameComponents[primary] || "Balance"} Through ${ritualNameComponents[secondary] || "Harmony"}`;
};

// Create ritual descriptions based on element combinations
const createRitualDescription = (primary: string, secondary: string): string => {
  const descriptions: Record<string, Record<string, string>> = {
    mountain: {
      river: "This ritual combines stability with adaptability, helping you build core strength while remaining flexible in the face of change.",
      forest: "Rooted strength emerges through this practice, connecting you to both inner resilience and natural vitality.",
      field: "Expand your foundation through this grounding yet expansive ritual that builds both inner and outer strength."
    },
    river: {
      mountain: "Find the balance between flow and structure, allowing movement within supportive boundaries.",
      forest: "This fluid practice nurtures continuous growth, helping you adapt while putting down healthy roots.",
      field: "Open to possibility while maintaining your course through this expansive flow-state ritual."
    },
    forest: {
      mountain: "Grow from a place of stability with this ritual that builds both inner depth and outward expression.",
      river: "Nurture your growth through cycles of release and renewal, embracing the natural rhythm of transformation.",
      field: "Expand your inner landscape while maintaining connection to your roots and authentic self."
    },
    field: {
      mountain: "Ground your expansive vision through this ritual that connects breadth of perspective with depth of presence.",
      river: "Flow into new territories with this ritual designed to help you explore while maintaining your essence.",
      forest: "Expand with intention through practices that honor both growth and the space needed to flourish."
    }
  };
  
  // Check if both primary and secondary keys exist, otherwise provide a default description
  if (descriptions[primary] && descriptions[primary][secondary]) {
    return descriptions[primary][secondary];
  }
  
  return "This personalized ritual combines elements that resonate with your current needs, creating a practice uniquely suited to your nature.";
};

// Calculate recommendation based on quiz answers
export const calculateRecommendation = (answers: Record<string, string>): Recommendation | null => {
  if (Object.keys(answers).length === 0) return null;
  
  // Ensure we have valid answers before processing
  try {
    // Clean and normalize answers
    const normalizedAnswers = Object.entries(answers).reduce((acc, [key, value]) => {
      // Map answer values to our known element types if needed
      let normalizedValue = value;
      
      // If the value isn't one of our valid elements, we could map certain values
      // For example, if answers contain values like "water", map to "river"
      if (!validElements.includes(value)) {
        // Simple mappings for possible answer values
        const mappings: Record<string, string> = {
          water: "river",
          air: "field",
          earth: "mountain",
          fire: "mountain",
          wood: "forest",
          metal: "mountain",
          stillness: "mountain",
          movement: "river",
          structure: "mountain",
          spontaneity: "field",
          dawn: "field",
          day: "mountain",
          dusk: "forest",
          night: "river",
          persistence: "mountain",
          adaptability: "river",
          clarity: "field",
          compassion: "forest"
        };
        normalizedValue = mappings[value.toLowerCase()] || "mountain";
      }
      
      acc[key] = normalizedValue;
      return acc;
    }, {} as Record<string, string>);
    
    // Determine primary element and complementary element
    const primaryElement = determinePrimaryElement(normalizedAnswers);
    const secondaryElement = getComplementaryElement(primaryElement);
    
    // Get ritual path data - default to mountain path if anything is undefined
    const pathData = ritualPaths[primaryElement as keyof typeof ritualPaths] || ritualPaths.mountain;
    
    // Get recommended products - ensure we have valid indexes
    const primaryProductIndex = elementToProductMap[primaryElement] ?? 0;
    const secondaryProductIndex = elementToProductMap[secondaryElement] ?? 1;
    
    // Ensure product data exists
    const primaryProduct = productData[primaryProductIndex] || productData[0];
    const secondaryProduct = productData[secondaryProductIndex] || productData[0];
    
    // Create custom ritual name and description
    const ritualName = createRitualName(primaryElement, secondaryElement);
    const ritualDescription = createRitualDescription(primaryElement, secondaryElement);
    
    return {
      ...pathData,
      products: [
        {
          name: primaryProduct.name,
          subtitle: primaryProduct.subtitle,
          description: primaryProduct.description,
          imagePath: primaryProduct.imagePath,
          altText: primaryProduct.altText
        },
        {
          name: secondaryProduct.name,
          subtitle: secondaryProduct.subtitle,
          description: secondaryProduct.description,
          imagePath: secondaryProduct.imagePath,
          altText: secondaryProduct.altText
        }
      ],
      ritualName,
      ritualDescription,
    };
  } catch (error) {
    console.error("Error calculating recommendation:", error);
    
    // Fallback to a default recommendation if anything goes wrong
    const defaultProduct = productData[0];
    return {
      path: "Mountain Path",
      emoji: "🏔️",
      description: "Your personal ritual path of strength and resilience.",
      japaneseWisdom: "諦めないこと。 (Never give up.)",
      ritualName: "Balanced Strength",
      ritualDescription: "A ritual designed to center your energy and build resilience through mindful practice.",
      products: [
        {
          name: defaultProduct.name,
          subtitle: defaultProduct.subtitle,
          description: defaultProduct.description,
          imagePath: defaultProduct.imagePath,
          altText: defaultProduct.altText
        },
        {
          name: defaultProduct.name,
          subtitle: defaultProduct.subtitle,
          description: defaultProduct.description,
          imagePath: defaultProduct.imagePath,
          altText: defaultProduct.altText
        }
      ]
    };
  }
};
