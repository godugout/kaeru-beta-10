
import { useEffect } from "react";
import { trackProductInteraction } from "@/integrations/supabase/analytics";
import { RitualStep } from "@/data/ritualSteps";

interface UseRitualTrackingProps {
  productName: string;
  steps: RitualStep[];
  activeStep: number;
}

export const useRitualTracking = ({ 
  productName, 
  steps, 
  activeStep 
}: UseRitualTrackingProps) => {
  // Track step views
  useEffect(() => {
    if (steps[activeStep]) {
      // Create a synthetic ID since we don't have real IDs from the database yet
      const productId = `temp-${productName.toLowerCase().replace(/\s+/g, '-')}`;
      
      // Create an interaction type that includes step information
      const interactionType = `ritual_step_view_${activeStep + 1}`;
      
      trackProductInteraction(
        productId,
        productName,
        interactionType
      );
    }
  }, [activeStep, productName, steps]);
};

export default useRitualTracking;
