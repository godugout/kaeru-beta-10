import { motion } from 'framer-motion';
import { useLocalization } from '@/contexts/LocalizationContext';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLocalization();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative bg-kaeru-stone/20 border border-kaeru-gold/30 hover:bg-kaeru-gold/10 hover:border-kaeru-gold/50 transition-all duration-300 min-w-[68px] min-h-[36px] px-3"
    >
      <div className="flex items-center justify-center space-x-2 relative w-full">
        <motion.span
          className={`text-xs font-medium transition-colors duration-200 w-6 text-center ${
            language === 'en' ? 'text-kaeru-gold' : 'text-kaeru-fog/60'
          }`}
          animate={{ opacity: language === 'en' ? 1 : 0.6 }}
        >
          EN
        </motion.span>
        
        <div className="h-3 w-px bg-kaeru-gold/30" />
        
        <motion.span
          className={`text-xs font-medium transition-colors duration-200 w-6 text-center ${
            language === 'jp' ? 'text-kaeru-gold' : 'text-kaeru-fog/60'
          } font-japanese`}
          animate={{ opacity: language === 'jp' ? 1 : 0.6 }}
        >
          JP
        </motion.span>
        
        {/* Sliding indicator - properly centered under each label */}
        <motion.div
          className="absolute -bottom-1 h-0.5 bg-kaeru-gold"
          initial={false}
          animate={{
            width: '20px',
            left: language === 'en' ? '6px' : 'calc(100% - 26px)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>
    </Button>
  );
};