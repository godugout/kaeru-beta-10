import { motion } from 'framer-motion';
import { useLocalization } from '@/contexts/LocalizationContext';
import { Truck, MapPin, Clock } from 'lucide-react';

export const JapaneseShippingInfo = ({ className = '' }: { className?: string }) => {
  const { t, language, formatCurrency, exchangeRate } = useLocalization();

  const freeShippingThreshold = 100; // $100 USD
  const jpyThreshold = Math.round(freeShippingThreshold * exchangeRate);

  const cities = [
    { name: t('shipping.tokyo'), nameEn: 'Tokyo' },
    { name: t('shipping.osaka'), nameEn: 'Osaka' },
    { name: t('shipping.kyoto'), nameEn: 'Kyoto' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`bg-gradient-to-r from-kaeru-stone/10 to-kaeru-jade/10 border border-kaeru-gold/20 rounded-sm p-4 ${className}`}
    >
      {/* Free Shipping Notice */}
      <div className="flex items-start space-x-3 mb-4">
        <div className="p-2 bg-kaeru-gold/20 rounded-sm">
          <Truck className="h-4 w-4 text-kaeru-gold" />
        </div>
        <div>
          <p className="text-sm font-medium text-kaeru-fog mb-1">
            {t('shipping.free')}
            <span className="text-kaeru-gold font-semibold mx-1">
              {language === 'jp' ? `¥${jpyThreshold.toLocaleString('ja-JP')}` : `$${freeShippingThreshold}`}
            </span>
            {language === 'jp' && t('shipping.freeEnd')}
          </p>
          <p className="text-xs text-kaeru-fog/70">
            {t('shipping.international')}
          </p>
        </div>
      </div>

      {/* Delivery Times */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 mb-2">
          <Clock className="h-3 w-3 text-kaeru-gold" />
          <span className="text-xs font-medium text-kaeru-fog/80">
            {language === 'jp' ? '配送予定' : 'Estimated Delivery'}
          </span>
        </div>
        
        <div className="grid grid-cols-1 gap-1">
          {cities.map((city, index) => (
            <motion.div
              key={city.nameEn}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center space-x-2 text-xs"
            >
              <MapPin className="h-3 w-3 text-kaeru-jade" />
              <span className="text-kaeru-fog/70">{city.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Japanese Pattern Decoration */}
      <div className="absolute top-2 right-2 opacity-20">
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-kaeru-gold">
          <circle cx="12" cy="6" r="2" fill="currentColor" />
          <circle cx="6" cy="12" r="2" fill="currentColor" />
          <circle cx="18" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="18" r="2" fill="currentColor" />
        </svg>
      </div>
    </motion.div>
  );
};