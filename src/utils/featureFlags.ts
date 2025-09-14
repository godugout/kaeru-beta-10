// A/B Testing and Feature Flags System

export interface FeatureFlag {
  name: string;
  enabled: boolean;
  variant?: string;
  percentage?: number;
}

export interface ABTest {
  name: string;
  variants: string[];
  activeVariant: string;
  percentage: number;
}

// Feature flag keys
export const FEATURE_FLAGS = {
  GOLDEN_BUTTONS: 'golden_buttons',
  RITUAL_BUILDER_STEPS: 'ritual_builder_steps',
  PRODUCT_CARD_LAYOUT: 'product_card_layout',
  ENHANCED_CHECKOUT: 'enhanced_checkout',
  FROG_ANIMATIONS: 'frog_animations'
} as const;

// A/B Test configurations
const AB_TESTS: Record<string, ABTest> = {
  [FEATURE_FLAGS.GOLDEN_BUTTONS]: {
    name: 'Button Color Test',
    variants: ['gold', 'jade'],
    activeVariant: 'gold',
    percentage: 50
  },
  [FEATURE_FLAGS.RITUAL_BUILDER_STEPS]: {
    name: 'Ritual Builder Steps',
    variants: ['2-step', '3-step'],
    activeVariant: '3-step',
    percentage: 50
  },
  [FEATURE_FLAGS.PRODUCT_CARD_LAYOUT]: {
    name: 'Product Card Layout',
    variants: ['standard', 'enhanced', 'minimal'],
    activeVariant: 'enhanced',
    percentage: 33.33
  }
};

// Get user's test group based on visitor ID
const getUserTestGroup = (testName: string, userId?: string): string => {
  const storedVariant = localStorage.getItem(`ab_test_${testName}`);
  if (storedVariant) {
    return storedVariant;
  }

  const test = AB_TESTS[testName];
  if (!test) {
    return test?.variants[0] || 'control';
  }

  // Use visitor ID for consistent assignment
  const visitorId = userId || localStorage.getItem('kaeru_visitor_id') || 'anonymous';
  const hash = simpleHash(visitorId + testName);
  const variantIndex = Math.floor((hash % 100) / (100 / test.variants.length));
  const selectedVariant = test.variants[variantIndex] || test.variants[0];

  // Store the assignment
  localStorage.setItem(`ab_test_${testName}`, selectedVariant);
  
  return selectedVariant;
};

// Simple hash function for consistent user assignment
const simpleHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

// Check if feature flag is enabled
export const isFeatureEnabled = (flagName: string): boolean => {
  const stored = localStorage.getItem(`feature_flag_${flagName}`);
  if (stored !== null) {
    return stored === 'true';
  }

  // Default feature states
  const defaults: Record<string, boolean> = {
    [FEATURE_FLAGS.GOLDEN_BUTTONS]: true,
    [FEATURE_FLAGS.RITUAL_BUILDER_STEPS]: true,
    [FEATURE_FLAGS.PRODUCT_CARD_LAYOUT]: true,
    [FEATURE_FLAGS.ENHANCED_CHECKOUT]: false,
    [FEATURE_FLAGS.FROG_ANIMATIONS]: true
  };

  return defaults[flagName] || false;
};

// Get A/B test variant
export const getABTestVariant = (testName: string, userId?: string): string => {
  if (!isFeatureEnabled(testName)) {
    return 'control';
  }

  return getUserTestGroup(testName, userId);
};

// Toggle feature flag (for admin/testing)
export const toggleFeatureFlag = (flagName: string): void => {
  const current = isFeatureEnabled(flagName);
  localStorage.setItem(`feature_flag_${flagName}`, (!current).toString());
};

// Force A/B test variant (for admin/testing)
export const setABTestVariant = (testName: string, variant: string): void => {
  localStorage.setItem(`ab_test_${testName}`, variant);
};

// Get all active experiments for analytics
export const getActiveExperiments = (): Record<string, string> => {
  const experiments: Record<string, string> = {};
  
  Object.keys(FEATURE_FLAGS).forEach(flag => {
    if (isFeatureEnabled(flag)) {
      experiments[flag] = getABTestVariant(flag);
    }
  });
  
  return experiments;
};

// Hook for React components
export const useFeatureFlag = (flagName: string) => {
  const enabled = isFeatureEnabled(flagName);
  const variant = enabled ? getABTestVariant(flagName) : 'control';
  
  return { enabled, variant };
};

// Hook for A/B testing
export const useABTest = (testName: string, userId?: string) => {
  const variant = getABTestVariant(testName, userId);
  
  return {
    variant,
    isVariant: (variantName: string) => variant === variantName,
    isControl: variant === 'control'
  };
};