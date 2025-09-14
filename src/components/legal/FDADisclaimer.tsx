import { AlertTriangle } from "lucide-react";

const FDADisclaimer = () => {
  return (
    <div className="bg-amber-50/5 border border-amber-500/20 rounded-lg p-4 mt-8">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="text-amber-500 mt-0.5 flex-shrink-0" size={18} />
        <div className="text-sm text-white/70">
          <p className="font-medium text-amber-200 mb-2">FDA Disclaimer</p>
          <p>
            These statements have not been evaluated by the Food and Drug Administration. 
            This product is not intended to diagnose, treat, cure, or prevent any disease. 
            Our CBD products contain less than 0.3% THC and are derived from hemp as defined by the 2018 Farm Bill.
          </p>
          <p className="mt-2">
            Please consult with your healthcare provider before using CBD products, 
            especially if you are pregnant, nursing, or have a medical condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FDADisclaimer;