
import { refinedIngredients, RefinedIngredient as IngredientType } from "@/data/refinedIngredients";
import RefinedIngredientsSection from "@/components/sections/RefinedIngredientsSection";
import { motion } from "framer-motion";

interface IngredientNarrativesSectionProps {
  productName?: string;
}

const IngredientNarrativesSection = ({ productName }: IngredientNarrativesSectionProps) => {
  return <RefinedIngredientsSection productName={productName} />;
};

export default IngredientNarrativesSection;
