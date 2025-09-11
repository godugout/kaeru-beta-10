
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCurrentSeason } from "@/data/utils/seasonalUtils";
import type { SeasonalCampaign as SeasonalCampaignType } from "@/data/types/seasonalTypes";
import RipplesToStillness from "@/components/animations/RipplesToStillness";
import { Link } from "react-router-dom";

const SeasonalCampaign = () => {
  const [currentSeason, setCurrentSeason] = useState<SeasonalCampaignType>(getCurrentSeason());
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Optional: Update the season if the component is mounted for a long time
  useEffect(() => {
    const season = getCurrentSeason();
    setCurrentSeason(season);
    
    // Check for season changes once a day
    const interval = setInterval(() => {
      const newSeason = getCurrentSeason();
      if (newSeason.id !== currentSeason.id) {
        setCurrentSeason(newSeason);
      }
    }, 86400000); // 24 hours in milliseconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-widest text-gold mb-4">SEASONAL CAMPAIGN</h2>
          <div className="mb-4">
            <span className="font-serif text-xl text-gold">{currentSeason.japaneseName}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
            {currentSeason.returnTheme}
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Experience the cyclical journey of return through our seasonal rituals
            and limited-edition formulations, inspired by Japanese seasonal traditions.
          </p>
        </div>
        
        {/* Seasonal Product Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Product Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-square rounded-sm overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${currentSeason.product.imagePath})` }}
              ></div>
            </div>
            {/* Seasonal Animation Element */}
            <div className="absolute -bottom-16 -left-16 opacity-50 pointer-events-none">
              <RipplesToStillness size={200} duration={10} />
            </div>
          </motion.div>
          
          {/* Right: Product Info */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div 
              className="absolute inset-0 opacity-10 rounded-sm"
              style={{ backgroundColor: currentSeason.colorPalette.primary }}
            ></div>
            
            <div className="relative p-8">
              <div className="text-gold text-sm mb-2">{currentSeason.product.collection}</div>
              <h4 className="font-serif text-2xl md:text-3xl text-white mb-2">{currentSeason.product.name}</h4>
              <div className="text-white/80 mb-1">{currentSeason.product.subtitle}</div>
              
              <p className="text-white/70 my-6">
                {currentSeason.product.description}
              </p>
              
              {/* Botanicals */}
              <div className="mb-8">
                <div className="text-gold text-sm mb-2">FEATURED BOTANICALS</div>
                <div className="flex flex-wrap gap-2">
                  {currentSeason.product.botanicals.map((botanical, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80"
                    >
                      {botanical}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/ritual-builder"
                  className="px-6 py-3 bg-gold text-black flex items-center justify-center group"
                >
                  EXPERIENCE THE RITUAL
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link
                  to="/journal"
                  className="px-6 py-3 border border-white/20 text-white/80 flex items-center justify-center hover:border-gold/50 transition-colors"
                >
                  EXPLORE JOURNAL ARTICLES
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Seasonal Journal Themes */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <h4 className="font-serif text-2xl text-white mb-4">Seasonal Wisdom</h4>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore our curated content from the Discipline Journal that aligns with 
              this season's theme of {currentSeason.returnTheme.toLowerCase()}.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {currentSeason.journalThemes.map((theme, index) => (
              <motion.div
                key={index}
                className="p-6 border border-white/10 hover:border-gold/30 transition-colors rounded-sm flex gap-4 items-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-2xl text-gold opacity-70 group-hover:opacity-100">
                  {index + 1}
                </div>
                <div>
                  <h5 className="text-white group-hover:text-gold transition-colors">
                    {theme}
                  </h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalCampaign;
