import { motion } from "framer-motion";
import { ProductCollection } from "@/data/productsData";

interface ProductFiltersProps {
  collections: ProductCollection[];
  selectedFilter: string | null;
  onFilterSelect: (filterId: string | null) => void;
}

const ProductFilters = ({ collections, selectedFilter, onFilterSelect }: ProductFiltersProps) => {
  const allCategories = Array.from(new Set(collections.map(c => c.category)));

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <motion.button
        onClick={() => onFilterSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          selectedFilter === null
            ? 'bg-kaeru-gold/20 text-kaeru-gold border-2 border-kaeru-gold/50'
            : 'bg-kaeru-stone/20 text-kaeru-fog/70 border border-kaeru-stone/30 hover:bg-kaeru-stone/30'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        All Collections
      </motion.button>
      
      {allCategories.map((category) => {
        const isSelected = selectedFilter === category;
        return (
          <motion.button
            key={category}
            onClick={() => onFilterSelect(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isSelected
                ? 'bg-kaeru-gold/20 text-kaeru-gold border-2 border-kaeru-gold/50'
                : 'bg-kaeru-stone/20 text-kaeru-fog/70 border border-kaeru-stone/30 hover:bg-kaeru-stone/30'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
};

export default ProductFilters;