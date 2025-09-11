
import { motion } from "framer-motion";
import { LibrarySection } from "@/types/library";
import LibraryArticleCard from "./LibraryArticleCard";
import { JapaneseSubheading } from "@/components/ui/japanese/Typography";
import { WabiSabiBlock, TatamiGrid } from "@/components/ui/japanese/Layout";

interface LibraryContentProps {
  section: LibrarySection;
}

export const LibraryContent = ({ section }: LibraryContentProps) => {
  return (
    <motion.div
      key={section.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[500px]"
    >
      <WabiSabiBlock className="bg-black/30 p-8 mb-8 rounded">
        <JapaneseSubheading className="text-2xl text-gold mb-4">{section.title}</JapaneseSubheading>
        <p className="text-white/70">{section.description}</p>
      </WabiSabiBlock>
      
      <TatamiGrid columns={2} className="gap-shaku">
        {section.articles.map((article, index) => (
          <LibraryArticleCard 
            key={article.id} 
            article={article} 
            index={index}
          />
        ))}
      </TatamiGrid>
    </motion.div>
  );
};
