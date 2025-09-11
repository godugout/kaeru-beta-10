
import { useState } from "react";
import { IngredientNarrative as IngredientNarrativeType } from "@/data/ingredientNarratives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface IngredientNarrativeProps {
  ingredient: IngredientNarrativeType;
}

const IngredientNarrative = ({ ingredient }: IngredientNarrativeProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  
  const handleExpand = (value: string) => {
    setExpanded(expanded === value ? null : value);
  };
  
  return (
    <div className="border border-gold/20 bg-black/30 backdrop-blur-sm rounded-sm p-6 mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-serif text-gold mb-1">{ingredient.name}</h3>
          <p className="text-white/70">{ingredient.japaneseName}</p>
        </div>
        <div className="text-sm text-white/50 mt-2 md:mt-0">
          Found in: {ingredient.productAssociations.join(", ")}
        </div>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="cultural" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-gold text-left py-4">
            Cultural Significance
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            {ingredient.culturalSignificance}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="mythology" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-gold text-left py-4">
            Mythology & Folklore
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            {ingredient.mythology}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="traditional" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-gold text-left py-4">
            Traditional Healing Properties
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            {ingredient.traditionalProperties}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="science" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-gold text-left py-4">
            Scientific Validation
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            {ingredient.scientificValidation}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="origin" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-gold text-left py-4">
            Kaeru Origin Story
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            {ingredient.kaeruOrigin}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="visual" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-gold text-left py-4">
            Visual Essence
          </AccordionTrigger>
          <AccordionContent className="text-white/80">
            {ingredient.visualDescription}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default IngredientNarrative;
