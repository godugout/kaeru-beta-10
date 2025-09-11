
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FrogAmbassadorCard from "./FrogAmbassadorCard";
import { FrogAmbassadorDetail } from "@/types/frogAmbassador";

interface FrogAmbassadorCollectionProps {
  frogs: FrogAmbassadorDetail[];
  title?: string;
  description?: string;
  layout?: "grid" | "tatami" | "scroll";
  maxDisplay?: number;
}

export default function FrogAmbassadorCollection({
  frogs,
  title = "Sacred Ambassadors",
  description,
  layout = "grid",
  maxDisplay = frogs.length
}: FrogAmbassadorCollectionProps) {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [season, setSeason] = useState<"spring" | "summer" | "autumn" | "winter">("spring");
  
  // Get unique collections
  const collections = Array.from(
    new Set(frogs.map(frog => frog.collection))
  );
  
  // Filter frogs by selected collection
  const filteredFrogs = selectedCollection
    ? frogs.filter(frog => frog.collection === selectedCollection)
    : frogs;
  
  // Limit display count
  const displayFrogs = filteredFrogs.slice(0, maxDisplay);
  
  // Layout variants
  const getLayoutClasses = () => {
    switch(layout) {
      case "tatami":
        // Traditional tatami-inspired asymmetrical layout
        return "grid grid-cols-1 md:grid-cols-3 gap-6 [&>*:nth-child(3n+1)]:md:col-span-2 [&>*:nth-child(5n)]:md:row-span-2";
      case "scroll":
        return "flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&>*]:min-w-[280px] [&>*]:snap-center";
      case "grid":
      default:
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
    }
  };
  
  // Seasonal theme names
  const seasonNames = {
    spring: "Spring Awakening",
    summer: "Summer Vitality",
    autumn: "Autumn Reflection",
    winter: "Winter Stillness"
  };

  return (
    <section className="py-12">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-serif text-gold mb-3">{title}</h2>
        {description && (
          <p className="text-white/70 mb-6">{description}</p>
        )}
        
        {/* Collection filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant="goldOutline"
            size="sm"
            onClick={() => setSelectedCollection(null)}
            className={!selectedCollection ? "bg-gold/10" : ""}
          >
            All Collections
          </Button>
          
          {collections.map(collection => (
            <Button
              key={collection}
              variant="goldOutline"
              size="sm"
              onClick={() => setSelectedCollection(collection)}
              className={selectedCollection === collection ? "bg-gold/10" : ""}
            >
              {collection}
            </Button>
          ))}
        </div>
        
        {/* Seasonal theme selector */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/60">Seasonal Theme:</span>
          <div className="flex gap-2">
            {(Object.keys(seasonNames) as Array<keyof typeof seasonNames>).map((key) => (
              <button
                key={key}
                onClick={() => setSeason(key)}
                className={`w-6 h-6 rounded-full border ${
                  season === key ? "border-gold" : "border-transparent"
                } transition-colors`}
                style={{ 
                  backgroundColor: key === "spring" ? "#F2FCE2" : 
                                  key === "summer" ? "#FEF7CD" : 
                                  key === "autumn" ? "#FEC6A1" : 
                                  "#FFDEE2"
                }}
                aria-label={seasonNames[key]}
                title={seasonNames[key]}
              />
            ))}
          </div>
          <span className="text-sm text-gold/80">{seasonNames[season]}</span>
        </div>
      </div>
      
      {/* Frog ambassador cards with staggered animation */}
      <div className={getLayoutClasses()}>
        {displayFrogs.map((frog, index) => (
          <motion.div
            key={frog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <FrogAmbassadorCard 
              frog={frog}
              variant={layout === "scroll" ? "compact" : "detailed"}
              season={season}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
