
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  colors: any;
}

const EasterEggModal: React.FC<EasterEggModalProps> = ({ 
  isOpen, 
  onClose, 
  children,
  colors 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, type: 'spring' }}
            className="relative max-w-2xl w-full min-h-[60vh] bg-gray-900 border rounded-lg overflow-hidden"
            style={{ borderColor: `${colors.primary}30` }}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 text-white z-10 hover:bg-black/20"
            >
              <X size={20} />
            </Button>
            
            {/* Modal content */}
            <div className="relative p-6 md:p-8 h-full">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEggModal;
