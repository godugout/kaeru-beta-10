
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HabitatBackgroundProps {
  children: ReactNode;
  habitat: 'forest' | 'mountain' | 'water' | 'bamboo' | 'lotus';
  productCollection: string;
}

const HabitatBackground = ({ children, habitat, productCollection }: HabitatBackgroundProps) => {
  // Define habitat-specific styles and textures
  const habitats = {
    forest: {
      background: "bg-gradient-to-b from-black to-[#0A1A0A]",
      texture: "url('/lovable-uploads/68b1efa7-91c9-4b9a-93e8-9378973ceb66.png')",
      textureOpacity: "opacity-[0.07]",
      accentColor: "#96b06f"
    },
    mountain: {
      background: "bg-gradient-to-b from-black to-[#1A191A]",
      texture: "url('/lovable-uploads/9ff9b79d-96a8-404c-9c5e-974346f49b8b.png')",
      textureOpacity: "opacity-[0.08]",
      accentColor: "#b08c6f"
    },
    water: {
      background: "bg-gradient-to-b from-black to-[#0A1A1A]",
      texture: "url('/lovable-uploads/c01640e6-3d5a-438a-bbd8-9e122dbcb19b.png')",
      textureOpacity: "opacity-[0.06]",
      accentColor: "#6fa3b0"
    },
    bamboo: {
      background: "bg-gradient-to-b from-black to-[#0A160A]",
      texture: "url('/lovable-uploads/9c9f5bad-fe60-4e8f-b8fa-89d7e2833889.png')",
      textureOpacity: "opacity-[0.05]",
      accentColor: "#8fb06f"
    },
    lotus: {
      background: "bg-gradient-to-b from-black to-[#190A1A]",
      texture: "url('/lovable-uploads/f0b481a9-b090-4248-80d8-551fdce7108a.png')",
      textureOpacity: "opacity-[0.07]",
      accentColor: "#b06f8c"
    }
  };
  
  const habitatStyles = habitats[habitat];
  
  return (
    <div className={`relative ${habitatStyles.background}`}>
      {/* Subtle texture overlay */}
      <div 
        className={`absolute inset-0 bg-repeat pointer-events-none mix-blend-overlay ${habitatStyles.textureOpacity}`}
        style={{ backgroundImage: habitatStyles.texture }}
      />
      
      {/* Habitat-specific accent elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top accent */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: habitatStyles.accentColor }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.3, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Side accent */}
        <motion.div 
          className="absolute top-0 bottom-0 right-0 w-px"
          style={{ backgroundColor: habitatStyles.accentColor }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.2, scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        />
        
        {/* Collection identifier in the corner */}
        <div className="absolute top-6 right-6 flex flex-col items-end">
          <motion.div
            className="h-px w-16"
            style={{ backgroundColor: habitatStyles.accentColor }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.4, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
          <motion.p 
            className="text-xs mt-1 tracking-wider"
            style={{ color: habitatStyles.accentColor }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {productCollection}
          </motion.p>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HabitatBackground;
