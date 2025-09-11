
import React from 'react';
import { motion } from 'framer-motion';

interface RewardDisplayProps {
  discount: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const RewardDisplay = ({ discount, colors }: RewardDisplayProps) => {
  return (
    <div className="mt-6 bg-black/30 p-6 rounded-lg border" style={{ borderColor: `${colors.accent}30` }}>
      <div className="inline-block mb-4 p-2 rounded-full" style={{ backgroundColor: `${colors.primary}20` }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-4xl" style={{ backgroundColor: `${colors.primary}30` }}>
          ✨
        </div>
      </div>
      <h3 className="text-2xl font-serif mb-2" style={{ color: colors.primary }}>Your Journey Begins</h3>
      <p className="text-white/70 mb-4">
        Use this code to receive 15% off your next order:
      </p>
      <div className="bg-black/50 border px-4 py-3 rounded-lg font-mono text-xl text-center mb-6" style={{ borderColor: colors.accent }}>
        {discount}
      </div>
      <p className="text-white/70 text-sm">
        This code will be sent to your email along with exclusive content about Kaeru's transformative journey.
      </p>
    </div>
  );
};

export default RewardDisplay;
