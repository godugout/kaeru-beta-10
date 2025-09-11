
import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EmailFormProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  onClaimReward: (email: string) => void;
}

const EmailForm = ({ colors, onClaimReward }: EmailFormProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onClaimReward(email);
    }
  };

  return (
    <div className="mt-6">
      <p className="text-white mb-4">
        Join our inner circle for exclusive access to limited editions and ancient wisdom.
      </p>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 bg-black/50 border text-white rounded focus:outline-none"
            style={{ borderColor: `${colors.primary}50` }}
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 rounded flex items-center justify-center group"
          style={{ backgroundColor: colors.primary, color: '#000' }}
        >
          <span>CLAIM YOUR REWARD</span>
          <Gift size={16} className="ml-2 transition-transform group-hover:scale-110" />
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
