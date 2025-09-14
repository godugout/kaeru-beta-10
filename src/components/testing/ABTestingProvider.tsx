import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { getActiveExperiments, FEATURE_FLAGS, useABTest, useFeatureFlag } from '@/utils/featureFlags';
import { trackEvent } from '@/utils/analytics';

interface ABTestingContextType {
  experiments: Record<string, string>;
  isFeatureEnabled: (flagName: string) => boolean;
  getVariant: (testName: string) => string;
}

const ABTestingContext = createContext<ABTestingContextType | undefined>(undefined);

export const useABTesting = () => {
  const context = useContext(ABTestingContext);
  if (context === undefined) {
    throw new Error('useABTesting must be used within an ABTestingProvider');
  }
  return context;
};

interface ABTestingProviderProps {
  children: ReactNode;
}

export const ABTestingProvider: React.FC<ABTestingProviderProps> = ({ children }) => {
  const [experiments, setExperiments] = React.useState<Record<string, string>>({});

  useEffect(() => {
    // Initialize experiments
    const activeExperiments = getActiveExperiments();
    setExperiments(activeExperiments);

    // Track experiment assignments
    Object.entries(activeExperiments).forEach(([experiment, variant]) => {
      trackEvent('experiment_assignment', {
        experiment_name: experiment,
        variant_name: variant,
        timestamp: new Date().toISOString()
      });
    });
  }, []);

  const isFeatureEnabled = (flagName: string): boolean => {
    const { enabled } = useFeatureFlag(flagName);
    return enabled;
  };

  const getVariant = (testName: string): string => {
    const { variant } = useABTest(testName);
    return variant;
  };

  const value: ABTestingContextType = {
    experiments,
    isFeatureEnabled,
    getVariant
  };

  return (
    <ABTestingContext.Provider value={value}>
      {children}
    </ABTestingContext.Provider>
  );
};

// Component-specific A/B test hooks
export const useButtonColorTest = () => {
  const { variant } = useABTest(FEATURE_FLAGS.GOLDEN_BUTTONS);
  
  const getButtonClasses = (baseClasses = '') => {
    const colorClasses = variant === 'jade' 
      ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500'
      : 'bg-gold hover:bg-gold/90 text-kaeru-black border-gold';
    
    return `${baseClasses} ${colorClasses}`;
  };

  return { variant, getButtonClasses };
};

export const useRitualBuilderTest = () => {
  const { variant } = useABTest(FEATURE_FLAGS.RITUAL_BUILDER_STEPS);
  
  const stepCount = variant === '2-step' ? 2 : 3;
  const isThreeStep = variant === '3-step';
  
  return { variant, stepCount, isThreeStep };
};

export const useProductCardTest = () => {
  const { variant } = useABTest(FEATURE_FLAGS.PRODUCT_CARD_LAYOUT);
  
  const getCardClasses = () => {
    switch (variant) {
      case 'minimal':
        return 'bg-transparent border border-white/10 hover:border-gold/30';
      case 'enhanced':
        return 'bg-gradient-to-br from-kaeru-stone/5 to-kaeru-stone/10 backdrop-blur-sm border border-gold/20';
      default:
        return 'bg-kaeru-stone/10 border border-kaeru-stone/20';
    }
  };

  return { variant, getCardClasses };
};