
import { Product } from "../types/productTypes";

export const products: Product[] = [
  {
    id: "gold",
    name: "KAERU GOLD",
    description: "Premium CBD Balm",
    color: "#E6B980",
    systems: {
      endocannabinoid: {
        name: "Endocannabinoid System",
        description: "Modulates CB1 and CB2 receptors",
        effect: "Activates and balances the body's natural cannabinoid receptors to promote homeostasis across multiple systems.",
        research: "Research indicates full-spectrum cannabinoids may create an 'entourage effect' enhancing CBD efficacy."
      },
      nervous: {
        name: "Nervous System",
        description: "Calms neural pathways",
        effect: "Reduces sympathetic (fight-or-flight) response while promoting parasympathetic (rest-and-digest) activation.",
        research: "Recent studies show CBD may decrease cortisol production and modulate serotonin receptors."
      },
      immune: {
        name: "Immune System",
        description: "Reduces inflammatory response",
        effect: "Helps modulate cytokine production and immunoregulatory processes to support recovery.",
        research: "Clinical evidence suggests CBD has immunomodulatory properties without compromising immune function."
      }
    }
  },
  {
    id: "clarity",
    name: "KAERU CLARITY",
    description: "Mental Focus CBD Oil",
    color: "#9b87f5",
    systems: {
      endocannabinoid: {
        name: "Endocannabinoid System",
        description: "Targets specific CB receptors",
        effect: "Precisely calibrated to affect endocannabinoid tone in brain regions associated with focus and attention.",
        research: "Studies indicate CBD may enhance anandamide signaling in prefrontal cortex regions."
      },
      nervous: {
        name: "Nervous System",
        description: "Enhances cognitive function",
        effect: "Promotes alpha brain wave activity and reduces mental chatter without sedative effects.",
        research: "EEG studies show increased alpha wave activity during focused tasks when using CBD formulations."
      },
      immune: {
        name: "Immune System",
        description: "Supports neural health",
        effect: "Helps maintain healthy neuro-inflammation levels to support optimal cognitive function.",
        research: "Emerging research suggests CBD's neuroprotective properties may be linked to microglial cell modulation."
      }
    }
  },
  {
    id: "vitality",
    name: "KAERU VITALITY",
    description: "Active Recovery Spray",
    color: "#4CAF50",
    systems: {
      endocannabinoid: {
        name: "Endocannabinoid System",
        description: "Targeted peripheral action",
        effect: "Activates CB2 receptors in muscle and connective tissue to support recovery processes.",
        research: "Topical CBD application shows localized effects without significant systemic circulation."
      },
      nervous: {
        name: "Nervous System",
        description: "Modulates pain signaling",
        effect: "Helps normalize sensory neuron activity in areas of discomfort without numbing effects.",
        research: "CBD has been shown to modulate TRPV1 receptors involved in pain sensation and inflammation."
      },
      immune: {
        name: "Immune System",
        description: "Supports tissue recovery",
        effect: "Helps regulate inflammatory response in active tissue for faster return to optimal function.",
        research: "Studies indicate CBD may balance pro- and anti-inflammatory cytokines during recovery."
      }
    }
  },
  {
    id: "harmony",
    name: "KAERU HARMONY",
    description: "Balance & Wellness Formula",
    color: "#FF9800",
    systems: {
      endocannabinoid: {
        name: "Endocannabinoid System",
        description: "Full-system regulation",
        effect: "Works across multiple receptor systems to promote whole-body balance and homeostasis.",
        research: "Full-spectrum hemp extracts appear to have broader regulatory effects than isolated cannabinoids."
      },
      nervous: {
        name: "Nervous System",
        description: "Stress adaptation support",
        effect: "Helps the nervous system adapt to daily stressors while maintaining emotional balance.",
        research: "Adaptogenic compounds paired with CBD show synergistic effects on stress biomarkers."
      },
      immune: {
        name: "Immune System",
        description: "Immune resilience",
        effect: "Supports healthy immune surveillance and balanced inflammatory response.",
        research: "Traditional Japanese botanicals combined with cannabinoids show promising immunomodulatory effects."
      }
    }
  }
];
