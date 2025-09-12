import { motion } from "framer-motion";
import { Sparkles, Mountain, Waves, Flame } from "lucide-react";

const EnhancedMerchandiseDisplay = () => {
  const merchandiseItems = [
    {
      id: "kaeru-tapestry",
      name: "Sacred Tapestry",
      description: "Handwoven meditation wall hanging",
      imagePath: "/lovable-uploads/b6ab7a27-68af-4c40-a8f6-2877f3f77b89.png",
      element: "Earth",
      icon: Mountain,
    },
    {
      id: "warrior-bottle", 
      name: "Warrior's Vessel",
      description: "Ritual glass bottle for ceremonies",
      imagePath: "/lovable-uploads/6a7d0907-7479-41cc-aa80-555793426b49.png",
      element: "Water", 
      icon: Waves,
    },
    {
      id: "kaeru-prints",
      name: "Transformation Prints",
      description: "Four sacred frog artwork collection", 
      imagePath: "/lovable-uploads/1345a103-3995-499e-92fd-d45301514dbe.png",
      element: "Fire",
      icon: Flame,
    }
  ];

  return (
    <div className="relative py-12 px-8 bg-gradient-to-r from-black via-moss-green/10 to-black rounded-lg border border-gold/20 mb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
      
      <div className="relative z-10 text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-gold" />
          <h4 className="text-sm tracking-widest text-gold uppercase">Beyond CBD</h4>
          <Sparkles className="w-4 h-4 text-gold" />
        </div>
        <h5 className="text-2xl font-serif text-white mb-2">Sacred Objects</h5>
        <p className="text-white/60 max-w-2xl mx-auto text-sm">
          Ritual objects to enhance your transformation journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {merchandiseItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
              className="group bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="relative aspect-square mb-3 overflow-hidden rounded">
                <img 
                  src={item.imagePath} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-gold flex items-center gap-1">
                  <IconComponent className="w-3 h-3" />
                  {item.element}
                </div>
              </div>
              <h6 className="text-white text-sm font-medium mb-1">{item.name}</h6>
              <p className="text-white/60 text-xs">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default EnhancedMerchandiseDisplay;