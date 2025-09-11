
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface RevealedContentProps {
  colors: any;
  rewardClaimed: boolean;
  discount: string;
  onClaimReward: (email: string) => void;
}

const RevealedContent: React.FC<RevealedContentProps> = ({ 
  colors,
  rewardClaimed,
  discount,
  onClaimReward
}) => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !rewardClaimed) {
      onClaimReward(email);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full mt-32 md:mt-36 text-center px-4"
    >
      <h2 className="font-serif text-3xl text-gold mb-4">The Return Path Revealed</h2>
      
      {!rewardClaimed ? (
        <>
          <p className="text-white/80 mb-6">
            You've discovered our hidden sanctuary. Join our inner circle for early
            access to limited editions and ancient wisdom.
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
              <span>CLAIM YOUR REWARD</span>
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
            <div className="inline-block mb-6 p-3 rounded-full" style={{ backgroundColor: `${colors.primary}20` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-4xl" style={{ backgroundColor: `${colors.primary}30` }}>
                🎁
              </div>
            </div>
            <h3 className="text-2xl font-serif text-gold mb-2">Your Reward Awaits</h3>
            <p className="text-white/70 mb-6">
              Use this special code for your next purchase:
            </p>
            <div className="bg-black/50 border border-gold/30 rounded-md py-3 px-6 max-w-xs mx-auto mb-8">
              <span className="font-mono text-lg text-gold tracking-wider">{discount}</span>
            </div>
            <p className="text-white/70 text-sm mb-6">
              We'll also notify you about our next limited edition drop before anyone else.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default RevealedContent;
