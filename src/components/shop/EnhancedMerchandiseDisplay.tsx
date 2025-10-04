import { motion } from "framer-motion";
import { Sparkles, Package, Flame, Droplets, Wind, Mountain, Frame, Palette, Flower2, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const EnhancedMerchandiseDisplay = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const merchandiseItems = [
    // Premium Jars & Containers
    {
      id: "amber-ritual-jar",
      name: "Amber Ritual Jar",
      category: "Vessels",
      price: 28,
      description: "Hand-blown amber glass storage jar with bamboo lid",
      imagePath: "/lovable-uploads/b6ab7a27-68af-4c40-a8f6-2877f3f77b89.png",
      size: "large",
      icon: Package,
      inStock: true,
    },
    {
      id: "ceramic-balm-vessel",
      name: "Ceramic Balm Vessel",
      category: "Vessels",
      price: 35,
      description: "Handcrafted ceramic jar for storing balms",
      imagePath: "/lovable-uploads/6a7d0907-7479-41cc-aa80-555793426b49.png",
      size: "small",
      icon: Package,
      inStock: true,
    },
    
    // Home Decor - Tapestries
    {
      id: "frog-lifecycle-tapestry",
      name: "Frog Lifecycle Tapestry",
      category: "Tapestries",
      price: 68,
      description: "Large woven wall hanging depicting transformation",
      imagePath: "/lovable-uploads/1345a103-3995-499e-92fd-d45301514dbe.png",
      size: "wide",
      icon: Frame,
      inStock: true,
    },
    {
      id: "zen-garden-tapestry",
      name: "Zen Garden Tapestry",
      category: "Tapestries", 
      price: 58,
      description: "Minimalist Japanese garden scene",
      imagePath: "/lovable-uploads/b6ab7a27-68af-4c40-a8f6-2877f3f77b89.png",
      size: "medium",
      icon: Mountain,
      inStock: true,
    },

    // Art Prints
    {
      id: "kaeru-print-set",
      name: "Kaeru Spirit Print Set",
      category: "Art Prints",
      price: 45,
      description: "Set of 4 museum-quality frog spirit prints",
      imagePath: "/lovable-uploads/1345a103-3995-499e-92fd-d45301514dbe.png",
      size: "small",
      icon: Palette,
      inStock: true,
    },
    {
      id: "transformation-poster",
      name: "Transformation Journey Poster",
      category: "Art Prints",
      price: 32,
      description: "Large format poster of the metamorphosis cycle",
      imagePath: "/lovable-uploads/6a7d0907-7479-41cc-aa80-555793426b49.png",
      size: "tall",
      icon: Frame,
      inStock: true,
    },

    // Ritual Objects
    {
      id: "meditation-stones",
      name: "River Stone Set",
      category: "Ritual Objects",
      price: 38,
      description: "Five polished stones for grounding rituals",
      imagePath: "/lovable-uploads/b6ab7a27-68af-4c40-a8f6-2877f3f77b89.png",
      size: "small",
      icon: Mountain,
      inStock: true,
    },
    {
      id: "incense-holder",
      name: "Bamboo Incense Holder",
      category: "Ritual Objects",
      price: 24,
      description: "Handcrafted bamboo holder with ash catcher",
      imagePath: "/lovable-uploads/6a7d0907-7479-41cc-aa80-555793426b49.png",
      size: "small",
      icon: Flame,
      inStock: true,
    },
    {
      id: "water-bowl",
      name: "Ceremonial Water Bowl",
      category: "Ritual Objects",
      price: 42,
      description: "Glazed ceramic bowl for cleansing rituals",
      imagePath: "/lovable-uploads/1345a103-3995-499e-92fd-d45301514dbe.png",
      size: "medium",
      icon: Droplets,
      inStock: true,
    },

    // Specialty Items
    {
      id: "moon-phase-calendar",
      name: "Lunar Ritual Calendar",
      category: "Accessories",
      price: 26,
      description: "Track your rituals with moon phases",
      imagePath: "/lovable-uploads/b6ab7a27-68af-4c40-a8f6-2877f3f77b89.png",
      size: "small",
      icon: Moon,
      inStock: true,
    },
    {
      id: "botanical-incense",
      name: "Sacred Botanical Incense",
      category: "Accessories",
      price: 22,
      description: "Hand-rolled with Japanese botanicals",
      imagePath: "/lovable-uploads/6a7d0907-7479-41cc-aa80-555793426b49.png",
      size: "small",
      icon: Flower2,
      inStock: true,
    },
  ];

  // Get size classes for bento-style grid
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large': return 'col-span-2 row-span-2';
      case 'wide': return 'col-span-2';
      case 'tall': return 'row-span-2';
      case 'medium': return 'col-span-1 row-span-1';
      default: return 'col-span-1';
    }
  };

  return (
    <div className="relative py-20 mb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-kaeru-moss/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            <h4 className="text-xs tracking-[0.3em] text-gold uppercase">Ritual Collection</h4>
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Sacred Objects & Art
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Curated vessels, art, and ritual objects to honor your transformation journey
          </p>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4">
          {merchandiseItems.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredItem === item.id;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-lg border border-white/10 hover:border-gold/40 transition-all duration-500 ${getSizeClasses(item.size)}`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={item.imagePath} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-gold flex items-center gap-1.5 border border-gold/20">
                  <IconComponent className="w-3 h-3" />
                  {item.category}
                </div>

                {/* Stock Badge */}
                {item.inStock && (
                  <div className="absolute top-3 right-3 bg-kaeru-jade/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-kaeru-jade border border-kaeru-jade/30">
                    In Stock
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <motion.div
                    animate={{ y: isHovered ? -10 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h6 className="text-white text-lg md:text-xl font-serif mb-2">
                      {item.name}
                    </h6>
                    <p className="text-white/70 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gold text-xl font-semibold">
                        ${item.price}
                      </span>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : -10 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button 
                          size="sm"
                          className="bg-gold hover:bg-gold/90 text-black"
                        >
                          Add to Cart
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm mb-4">
            Each object is carefully selected to complement your ritual practice
          </p>
          <Button 
            variant="outline" 
            className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50"
          >
            View Full Collection
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedMerchandiseDisplay;