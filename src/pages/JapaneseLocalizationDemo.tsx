import { useState } from "react";
import { motion } from "framer-motion";
import EnhancedNavigation from "@/components/navigation/EnhancedNavigation";
import Footer from "@/components/ui/footer";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { JapanesePaymentMethods } from "@/components/ui/JapanesePaymentMethods";
import { JapaneseShippingInfo } from "@/components/ui/JapaneseShippingInfo";
import { SeasonalBackground, SeigaihaPattern, SakuraFloating } from "@/components/ui/SeasonalPatterns";
import { useLocalization } from "@/contexts/LocalizationContext";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const JapaneseLocalizationDemo = () => {
  const scrollPosition = useScrollPosition();
  const { language, formatCurrency, t, exchangeRate } = useLocalization();
  
  const sampleProducts = [
    { name: "Calm Essence", price: 80, jpName: "静寂のエッセンス" },
    { name: "Energy Flow", price: 120, jpName: "気の流れ" },
    { name: "Recovery Ritual", price: 95, jpName: "回復の儀式" },
  ];

  return (
    <SeasonalBackground>
      <div className="min-h-screen bg-kaeru-black text-kaeru-fog">
        <EnhancedNavigation scrollPosition={scrollPosition} />
        
        <main className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className={`text-4xl md:text-6xl font-serif mb-6 ${
                language === 'jp' ? 'font-japanese' : ''
              }`}>
                {language === 'jp' ? '日本語ローカライゼーション' : 'Japanese Localization'}
              </h1>
              <p className="text-xl text-kaeru-fog/70 max-w-3xl mx-auto">
                {language === 'jp' 
                  ? 'KAERUの日本語対応機能をご体験ください'
                  : 'Experience KAERU\'s Japanese localization features'
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Language & Currency Demo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-kaeru-stone/10 border border-kaeru-gold/20 rounded-sm p-6 relative overflow-hidden">
                  <SeigaihaPattern className="text-kaeru-gold/10" />
                  
                  <div className="relative z-10">
                    <h2 className="text-2xl font-serif text-kaeru-gold mb-4">
                      {language === 'jp' ? '言語切り替え' : 'Language Toggle'}
                    </h2>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-kaeru-fog/80">Current Language:</span>
                      <LanguageToggle />
                    </div>
                    
                    <div className="text-sm text-kaeru-fog/60">
                      Exchange Rate: 1 USD = {exchangeRate.toFixed(2)} JPY
                    </div>
                  </div>
                </div>

                {/* Product Pricing Demo */}
                <div className="bg-kaeru-jade/10 border border-kaeru-jade/30 rounded-sm p-6">
                  <h3 className="text-xl font-serif text-kaeru-fog mb-4">
                    {t('nav.shop')} - {language === 'jp' ? '価格表示' : 'Dual Currency'}
                  </h3>
                  
                  <div className="space-y-3">
                    {sampleProducts.map((product, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-kaeru-fog/10">
                        <div>
                          <div className={`font-medium ${language === 'jp' ? 'font-japanese' : ''}`}>
                            {language === 'jp' ? product.jpName : product.name}
                          </div>
                          <div className="text-sm text-kaeru-fog/60">
                            {language === 'jp' ? product.name : product.jpName}
                          </div>
                        </div>
                        <div className="text-kaeru-gold font-semibold">
                          {formatCurrency(product.price)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Demo */}
                <div className="bg-kaeru-moss/10 border border-kaeru-moss/30 rounded-sm p-6">
                  <h3 className="text-xl font-serif text-kaeru-fog mb-4">
                    {language === 'jp' ? 'ナビゲーション' : 'Navigation Terms'}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {['nav.shop', 'nav.way', 'nav.rituals', 'nav.library'].map((key) => (
                      <div key={key} className="text-center p-3 bg-kaeru-black/20 rounded-sm">
                        <div className={`font-medium text-kaeru-gold ${
                          language === 'jp' ? 'font-japanese' : ''
                        }`}>
                          {t(key)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Payment & Shipping Demo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <JapanesePaymentMethods />
                <JapaneseShippingInfo />
                
                {/* Typography Demo */}
                <div className="bg-kaeru-stone/10 border border-kaeru-gold/20 rounded-sm p-6">
                  <h3 className="text-xl font-serif text-kaeru-fog mb-4">
                    {language === 'jp' ? 'タイポグラフィー' : 'Typography'}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-kaeru-fog/60 mb-1">Inter Font (English)</div>
                      <div className="font-sans">The way of return - returning to one's true nature</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-kaeru-fog/60 mb-1">Noto Sans JP (Japanese)</div>
                      <div className="font-japanese text-kaeru-jp">
                        帰る道 - 本来の自分に戻ること
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-kaeru-fog/60 mb-1">Crimson Text (Headings)</div>
                      <div className="font-serif text-2xl text-kaeru-gold">
                        {language === 'jp' ? 'かえる' : 'KAERU'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cultural Elements */}
                <div className="bg-gradient-to-br from-kaeru-jade/5 to-kaeru-moss/5 border border-kaeru-jade/20 rounded-sm p-6 relative overflow-hidden">
                  <SeigaihaPattern className="text-kaeru-jade/20" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-serif text-kaeru-fog mb-4">
                      {language === 'jp' ? '文化的要素' : 'Cultural Elements'}
                    </h3>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Seigaiha Waves Pattern</span>
                        <span className="text-2xl">🌊</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Seasonal Sakura (Spring)</span>
                        <span className="text-2xl">🌸</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Traditional Colors</span>
                        <div className="flex space-x-2">
                          <div className="w-4 h-4 bg-kaeru-gold rounded-full"></div>
                          <div className="w-4 h-4 bg-kaeru-jade rounded-full"></div>
                          <div className="w-4 h-4 bg-kaeru-moss rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Features Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="bg-kaeru-black/50 border border-kaeru-gold/30 rounded-sm p-8">
                <h2 className="text-3xl font-serif text-kaeru-gold mb-6">
                  {language === 'jp' ? '実装された機能' : 'Implemented Features'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                  {[
                    { 
                      key: 'Language Toggle',
                      jp: 'JP/EN切り替え',
                      desc: 'Header toggle with localStorage persistence' 
                    },
                    { 
                      key: 'Dual Currency',
                      jp: '二重通貨表示', 
                      desc: 'Live exchange rates from API' 
                    },
                    { 
                      key: 'Japanese Typography',
                      jp: '日本語タイポグラフィー', 
                      desc: 'Noto Sans JP with proper spacing' 
                    },
                    { 
                      key: 'Payment Methods',
                      jp: '支払い方法', 
                      desc: 'JCB, Konbini, PayPay support' 
                    },
                    { 
                      key: 'Shipping Info',
                      jp: '配送情報', 
                      desc: 'Japan-specific delivery times' 
                    },
                    { 
                      key: 'Cultural Patterns',
                      jp: '文化的パターン', 
                      desc: 'Seigaiha waves, seasonal elements' 
                    },
                  ].map((feature, index) => (
                    <div key={index} className="bg-kaeru-stone/10 rounded-sm p-4">
                      <div className={`font-semibold text-kaeru-gold mb-2 ${
                        language === 'jp' ? 'font-japanese' : ''
                      }`}>
                        {language === 'jp' ? feature.jp : feature.key}
                      </div>
                      <div className="text-xs text-kaeru-fog/60">
                        {feature.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </SeasonalBackground>
  );
};

export default JapaneseLocalizationDemo;