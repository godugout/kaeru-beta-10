import { motion } from 'framer-motion';
import { useLocalization } from '@/contexts/LocalizationContext';

export const JapanesePaymentMethods = () => {
  const { t } = useLocalization();

  const paymentMethods = [
    { name: 'JCB', icon: '💳', color: 'bg-blue-600' },
    { name: 'Konbini', icon: '🏪', color: 'bg-green-600' },
    { name: 'PayPay', icon: '📱', color: 'bg-red-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-kaeru-stone/10 border border-kaeru-gold/20 rounded-sm p-4"
    >
      <h3 className="text-sm font-medium text-kaeru-fog mb-3">
        {t('payment.methods')}
      </h3>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {paymentMethods.map((method) => (
          <motion.div
            key={method.name}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-sm text-white text-xs ${method.color} bg-opacity-90`}
          >
            <span className="text-sm">{method.icon}</span>
            <span className="font-medium">{method.name}</span>
          </motion.div>
        ))}
      </div>
      
      <p className="text-xs text-kaeru-fog/70 italic">
        {t('shipping.international')}
      </p>
    </motion.div>
  );
};