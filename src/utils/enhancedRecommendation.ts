import { productData } from "@/data/productData";

export interface EnhancedRecommendation {
  path: string;
  emoji: string;
  description: string;
  products: RecommendedProduct[];
  ritualName: string;
  ritualDescription: string;
  japaneseWisdom: string;
  confidence: number;
  personalizationLevel: 'basic' | 'refined' | 'complete';
  refinementSuggestions?: string[];
}

export interface RecommendedProduct {
  name: string;
  subtitle: string;
  description: string;
  imagePath: string;
  altText: string;
}

// Define ritual paths with confidence modifiers
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

// Enhanced element mapping with approach modifiers
const getElementFromAnswers = (answers: Record<string, string>): string => {
  // Primary element from essence question
  const essence = answers.essence;
  if (['mountain', 'river', 'forest', 'field'].includes(essence)) {
    return essence;
  }
  
  // Fallback mapping for other values
  const mappings: Record<string, string> = {
    gentle: 'forest',
    focused: 'mountain', 
    flowing: 'river',
    grounded: 'mountain',
    morning: 'field',
    midday: 'mountain',
    evening: 'forest', 
    night: 'river',
    transform: 'mountain',
    flow: 'river',
    endure: 'mountain',
    transcend: 'field',
    embodied: 'forest',
    intellectual: 'mountain',
    emotional: 'river',
    spiritual: 'field',
    persistence: 'mountain',
    adaptability: 'river',
    clarity: 'field',
    compassion: 'forest'
  };
  
  // Count element frequencies
  const elementCount: Record<string, number> = {
    mountain: 0,
    river: 0, 
    forest: 0,
    field: 0
  };
  
  Object.values(answers).forEach(answer => {
    const element = mappings[answer] || 'mountain';
    elementCount[element]++;
  });
  
  // Return most frequent element
  return Object.entries(elementCount).reduce((a, b) => 
    elementCount[a[0]] > elementCount[b[0]] ? a : b
  )[0];
};

// Calculate confidence based on answer completeness and consistency
const calculateConfidence = (answers: Record<string, string>): number => {
  const totalQuestions = Object.keys(answers).length;
  const hasCore = answers.essence && answers.approach;
  
  if (!hasCore) return 0.4; // Minimum confidence
  
  let confidence = 0.7; // Base confidence with core answers
  
  // Boost for additional questions
  if (totalQuestions >= 3) confidence += 0.1;
  if (totalQuestions >= 4) confidence += 0.1; 
  if (totalQuestions >= 5) confidence += 0.05;
  if (totalQuestions >= 6) confidence += 0.05;
  
  // Check for consistency (similar elements)
  const elements = Object.values(answers).map(answer => {
    const mappings: Record<string, string> = {
      gentle: 'forest', focused: 'mountain', flowing: 'river', grounded: 'mountain',
      morning: 'field', midday: 'mountain', evening: 'forest', night: 'river',
      transform: 'mountain', flow: 'river', endure: 'mountain', transcend: 'field'
    };
    return mappings[answer] || answer;
  });
  
  const elementCount: Record<string, number> = {};
  elements.forEach(element => {
    elementCount[element] = (elementCount[element] || 0) + 1;
  });
  
  const maxCount = Math.max(...Object.values(elementCount));
  const consistency = maxCount / elements.length;
  
  if (consistency >= 0.6) confidence += 0.1;
  if (consistency >= 0.8) confidence += 0.05;
  
  return Math.min(confidence, 1.0);
};

// Determine personalization level
const getPersonalizationLevel = (answers: Record<string, string>): 'basic' | 'refined' | 'complete' => {
  const questionCount = Object.keys(answers).length;
  if (questionCount >= 5) return 'complete';
  if (questionCount >= 3) return 'refined';
  return 'basic';
};

// Generate refinement suggestions
const getRefinementSuggestions = (answers: Record<string, string>, confidence: number): string[] => {
  const suggestions: string[] = [];
  
  if (confidence < 0.8) {
    suggestions.push("Answer a few more questions to refine your ritual");
  }
  
  if (!answers.timing) {
    suggestions.push("Tell us about your preferred practice timing");
  }
  
  if (!answers.challenge) {
    suggestions.push("Share how you prefer to approach challenges");
  }
  
  if (!answers.wisdom) {
    suggestions.push("Explore your connection to different wisdom traditions");
  }
  
  return suggestions;
};

// Map elements to products with approach consideration
const getRecommendedProducts = (primaryElement: string, answers: Record<string, string>): RecommendedProduct[] => {
  const approach = answers.approach;
  
  // Base product mapping
  const elementToProductMap: Record<string, number> = {
    mountain: 0, // KAERU GOLD
    river: 1,    // KAERU CLARITY  
    forest: 2,   // KAERU VITALITY
    field: 0     // KAERU GOLD
  };
  
  // Modify based on approach
  let primaryIndex = elementToProductMap[primaryElement] || 0;
  let secondaryIndex = (primaryIndex + 1) % productData.length;
  
  if (approach === 'gentle' && primaryElement === 'mountain') {
    primaryIndex = 2; // Vitality for gentle mountain
  } else if (approach === 'focused' && primaryElement === 'river') {
    primaryIndex = 0; // Gold for focused river
  }
  
  const primary = productData[primaryIndex] || productData[0];
  const secondary = productData[secondaryIndex] || productData[1];
  
  return [
    {
      name: primary.name,
      subtitle: primary.subtitle,
      description: primary.description,
      imagePath: primary.imagePath,
      altText: primary.altText
    },
    {
      name: secondary.name,
      subtitle: secondary.subtitle, 
      description: secondary.description,
      imagePath: secondary.imagePath,
      altText: secondary.altText
    }
  ];
};

// Enhanced recommendation calculation
export const calculateEnhancedRecommendation = (answers: Record<string, string>): EnhancedRecommendation | null => {
  if (!answers.essence) return null; // Need at least essence question
  
  try {
    const primaryElement = getElementFromAnswers(answers);
    const confidence = calculateConfidence(answers);
    const personalizationLevel = getPersonalizationLevel(answers);
    const refinementSuggestions = getRefinementSuggestions(answers, confidence);
    
    // Get ritual path data
    const pathData = ritualPaths[primaryElement as keyof typeof ritualPaths] || ritualPaths.mountain;
    
    // Get recommended products
    const products = getRecommendedProducts(primaryElement, answers);
    
    // Create ritual name based on answers
    const approach = answers.approach || 'balanced';
    const ritualName = `${approach.charAt(0).toUpperCase() + approach.slice(1)} ${pathData.path}`;
    
    // Enhanced description based on completeness
    let ritualDescription = pathData.description;
    if (personalizationLevel === 'complete') {
      ritualDescription += ` This fully personalized ritual integrates your unique preferences for timing, challenge approach, and wisdom tradition.`;
    } else if (personalizationLevel === 'refined') {
      ritualDescription += ` This ritual is tailored to your core preferences and can be further refined.`;
    }
    
    return {
      ...pathData,
      products,
      ritualName,
      ritualDescription,
      confidence: Math.round(confidence * 100) / 100,
      personalizationLevel,
      refinementSuggestions: refinementSuggestions.length > 0 ? refinementSuggestions : undefined
    };
    
  } catch (error) {
    console.error("Error calculating enhanced recommendation:", error);
    
    // Fallback recommendation
    return {
      path: "Mountain Path",
      emoji: "🏔️", 
      description: "Your personal ritual path of strength and resilience.",
      japaneseWisdom: "諦めないこと。 (Never give up.)",
      ritualName: "Balanced Strength",
      ritualDescription: "A ritual designed to center your energy and build resilience through mindful practice.",
      products: getRecommendedProducts('mountain', {}),
      confidence: 0.5,
      personalizationLevel: 'basic'
    };
  }
};