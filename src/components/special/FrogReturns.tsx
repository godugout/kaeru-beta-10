
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FrogReturnsProps {
  isOpen: boolean;
  onClose: () => void;
}

const FrogReturns: React.FC<FrogReturnsProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, this would send the email to your backend
    }
  };
  
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
            className="relative max-w-2xl w-full bg-gray-900 border border-gold/30 rounded-lg overflow-hidden"
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 text-gold z-10 hover:bg-black/20"
            >
              <X size={20} />
            </Button>
            
            {/* Animation container */}
            <div className="pt-16 pb-8 px-4 md:px-8">
              {/* Frog transformation sequence - placeholder for animation */}
              <div className="relative h-48 mb-10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="w-32 h-32 rounded-full bg-gold/30 flex items-center justify-center"
                  >
                    <span className="text-6xl">🐸</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="font-serif text-3xl text-gold mb-2">The Frog Returns</h2>
                <p className="text-white/70 mb-6">
                  You have chosen the path of return.
                </p>
                
                {!submitted ? (
                  <>
                    <p className="text-white mb-6">
                      You've discovered our hidden sanctuary. Join our inner circle for early access to limited editions and ancient wisdom.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                      <div className="mb-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="w-full px-4 py-3 bg-black border border-gold/30 text-white rounded focus:outline-none focus:border-gold"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gold text-black px-6 py-3 rounded flex items-center justify-center group"
                      >
                        <span>JOIN THE INNER CIRCLE</span>
                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center">
                      <div className="inline-block mb-4 p-2 rounded-full bg-gold/20">
                        <div className="w-16 h-16 rounded-full bg-gold/30 flex items-center justify-center text-4xl">
                          ✨
                        </div>
                      </div>
                      <h3 className="text-2xl font-serif text-gold mb-2">Your Journey Begins</h3>
                      <p className="text-white/70 mb-8">
                        We'll notify you about our next limited edition drop before anyone else.
                      </p>
                      <button
                        onClick={onClose}
                        className="bg-transparent border border-gold text-gold px-8 py-3 rounded flex items-center mx-auto group hover:bg-gold/10"
                      >
                        <span>CONTINUE EXPLORING</span>
                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FrogReturns;
