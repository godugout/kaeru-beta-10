
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SeasonalTexture } from "@/components/ui/japanese/Textures";
import { japaneseDesignSystem } from "@/theme/japaneseTheme";
import ScienceHero from "@/components/science/ScienceHero";
import ScienceLayout from "@/components/science/ScienceLayout";
import { Button } from "@/components/ui/button";

const Science = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Optional: Show a message that content has moved
    console.log("Science content has been moved to the Library");
  }, []);
  
  // Get current season for seasonal elements
  const currentSeason = japaneseDesignSystem.getSeason();

  return (
    <ScienceLayout>
      <SeasonalTexture season={currentSeason} className="relative">
        {/* Hero Section */}
        <ScienceHero contentVisible={true} />
        
        {/* Redirect message */}
        <motion.div
          className="max-w-4xl mx-auto text-center py-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">Our Science Content Has Moved</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            We've created a new dedicated Library section where you can explore all our educational content,
            including scientific research, Japanese philosophy, and wellness practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              className="bg-gold hover:bg-gold/80 text-black"
              onClick={() => navigate('/library')}
            >
              Visit Library <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-gold/50 text-gold hover:bg-gold/10"
              onClick={() => navigate('/shop')}
            >
              Browse Products
            </Button>
          </div>
        </motion.div>
      </SeasonalTexture>
    </ScienceLayout>
  );
};

export default Science;
