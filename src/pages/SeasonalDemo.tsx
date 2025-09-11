
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getFormattedJapaneseDate, seasonalProducts } from '@/theme/seasonalTheme';
import { useSeasonalTheme } from '@/contexts/SeasonalThemeContext';
import { SeasonalThemeProvider } from '@/contexts/SeasonalThemeContext';

// Import our seasonal components
import SeasonalTransition from '@/components/seasonal/SeasonalTransition';
import SeasonalCampaignBanner from '@/components/seasonal/SeasonalCampaignBanner';
import SeasonalHeroBackground from '@/components/seasonal/SeasonalHeroBackground';
import SeasonalThemeSelector from '@/components/seasonal/SeasonalThemeSelector';
import SeasonalProductCard from '@/components/seasonal/SeasonalProductCard';

// Import shared layout components
import ScienceLayout from '@/components/science/ScienceLayout';
import { productData } from '@/data/productData';

const demoProduct = {
  name: "KAERU SEASONAL",
  description: "Experience the changing seasons with this limited edition CBD formulation, designed to align your body with nature's rhythms.",
  imagePath: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
  botanicals: []
};

const SeasonalDemoContent: React.FC = () => {
  const { currentSeason, colors, japaneseLabel } = useSeasonalTheme();
  const [date, setDate] = useState('');
  
  useEffect(() => {
    setDate(getFormattedJapaneseDate());
  }, []);
  
  // Get the seasonal products for the current season
  const campaignProducts = seasonalProducts[currentSeason];
  
  // Update botanicals based on current season
  const seasonalProductData = {
    ...demoProduct,
    botanicals: campaignProducts.botanicals
  };
  
  return (
    <>
      <SeasonalTransition />
      <SeasonalCampaignBanner className="sticky top-0 z-30" />
      
      <SeasonalHeroBackground className="min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="text-sm tracking-widest mb-2" style={{ color: colors.accent }}>
              {japaneseLabel}
            </div>
            <h1 className="font-serif text-4xl md:text-6xl mb-4 text-white">
              Seasonal Harmony
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Experience how our products adapt to the rhythm of Japanese seasons, 
              bringing balance to your wellness journey throughout the year.
            </p>
          </motion.div>
          
          <div className="text-center mb-16">
            <SeasonalThemeSelector />
            <div className="text-white/50 text-xs mt-2">{date}</div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl mb-2 text-white">Current Season: {currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1)}</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              {campaignProducts.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Current season's featured product */}
            <SeasonalProductCard
              name={seasonalProductData.name}
              description={seasonalProductData.description}
              imagePath={seasonalProductData.imagePath}
              botanicals={seasonalProductData.botanicals}
            />
            
            {/* Regular Kaeru products */}
            {productData.slice(0, 2).map((product, index) => (
              <SeasonalProductCard
                key={index}
                name={product.name}
                description={product.description}
                imagePath={product.imagePath}
                botanicals={(campaignProducts.botanicals || []).slice(0, 2)}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block border px-6 py-3 transition-colors cursor-pointer"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              EXPLORE {currentSeason.toUpperCase()} COLLECTION
            </div>
          </div>
        </div>
      </SeasonalHeroBackground>
      
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-white mb-4">Experience the Changing Seasons</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Select different seasons above to see how our digital experience adapts to 
              reflect traditional Japanese seasonal aesthetics.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-sm p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl text-white mb-4">About {japaneseLabel}</h3>
            
            {currentSeason === 'spring' && (
              <div className="text-white/80">
                <p className="mb-4">
                  Spring (Haru) in Japan is a time of renewal and celebration, marked by the famous
                  cherry blossom (Sakura) season. Our spring theme incorporates soft pinks and fresh greens
                  to evoke the feeling of new beginnings.
                </p>
                <p>
                  The spring formulations focus on revitalization and growth, with ingredients chosen to
                  support your body's natural regenerative processes after the winter months.
                </p>
              </div>
            )}
            
            {currentSeason === 'summer' && (
              <div className="text-white/80">
                <p className="mb-4">
                  Summer (Natsu) in Japan brings vibrant festivals, cooling waters, and the soothing sound
                  of wind chimes. Our summer theme uses water patterns and cooling blue tones to provide
                  relief during the warmest season.
                </p>
                <p>
                  The summer formulations emphasize cooling properties and hydration support, helping
                  your body maintain balance during the heat.
                </p>
              </div>
            )}
            
            {currentSeason === 'autumn' && (
              <div className="text-white/80">
                <p className="mb-4">
                  Autumn (Aki) in Japan is a time of breathtaking beauty as maple leaves turn brilliant
                  shades of red and gold. Our autumn theme celebrates transformation and the harvest with
                  warm, golden tones.
                </p>
                <p>
                  The autumn formulations support transition and adaptability, helping your body adjust
                  as temperatures begin to cool and days shorten.
                </p>
              </div>
            )}
            
            {currentSeason === 'winter' && (
              <div className="text-white/80">
                <p className="mb-4">
                  Winter (Fuyu) in Japan is a time of minimalist beauty, with snow-covered landscapes and
                  moments of quiet reflection. Our winter theme uses cool blues and grays to create a
                  sense of calm introspection.
                </p>
                <p>
                  The winter formulations focus on inner warmth, immunity, and restoration, providing comfort
                  during the coldest season.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const SeasonalDemo: React.FC = () => {
  return (
    <SeasonalThemeProvider>
      <ScienceLayout>
        <SeasonalDemoContent />
      </ScienceLayout>
    </SeasonalThemeProvider>
  );
};

export default SeasonalDemo;
