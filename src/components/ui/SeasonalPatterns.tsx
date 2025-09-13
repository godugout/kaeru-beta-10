import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const SeigaihaPattern = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 opacity-5 pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <pattern
            id="seigaiha"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
            patternTransform="scale(2)"
          >
            <path
              d="M0 20 C5 15, 15 15, 20 20"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M-10 20 C-5 15, 5 15, 10 20"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M10 20 C15 15, 25 15, 30 20"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha)" />
      </svg>
    </div>
  );
};

export const SakuraFloating = ({ count = 8 }: { count?: number }) => {
  const [sakuras, setSakuras] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    const newSakuras = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setSakuras(newSakuras);
  }, [count]);

  // Only show sakura in spring months (March, April, May)
  const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 2 && currentMonth <= 4;

  if (!isSpring) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sakuras.map((sakura) => (
        <motion.div
          key={sakura.id}
          className="absolute text-pink-300/30"
          style={{ left: `${sakura.x}%` }}
          initial={{ y: '-10vh', rotate: 0 }}
          animate={{
            y: '110vh',
            rotate: 360,
            x: [0, 20, -10, 15, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: sakura.delay,
            ease: 'linear',
          }}
        >
          <span className="text-2xl">🌸</span>
        </motion.div>
      ))}
    </div>
  );
};

export const SeasonalBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <SeigaihaPattern className="text-kaeru-gold" />
      <SakuraFloating />
      {children}
    </div>
  );
};