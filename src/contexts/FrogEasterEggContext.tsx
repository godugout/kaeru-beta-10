
import React, { createContext, useContext, useState, useEffect } from 'react';
import useKonamiCode from '@/hooks/useKonamiCode';

type FrogEasterEggContextType = {
  isEasterEggOpen: boolean;
  openEasterEgg: () => void;
  closeEasterEgg: () => void;
};

const FrogEasterEggContext = createContext<FrogEasterEggContextType | undefined>(undefined);

export function FrogEasterEggProvider({ children }: { children: React.ReactNode }) {
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
  const [konamiActivated, resetKonami] = useKonamiCode();
  
  // Listen for Konami code activation
  useEffect(() => {
    if (konamiActivated) {
      openEasterEgg();
      resetKonami();
    }
  }, [konamiActivated, resetKonami]);
  
  const openEasterEgg = () => {
    setIsEasterEggOpen(true);
  };
  
  const closeEasterEgg = () => {
    setIsEasterEggOpen(false);
  };
  
  return (
    <FrogEasterEggContext.Provider value={{ isEasterEggOpen, openEasterEgg, closeEasterEgg }}>
      {children}
    </FrogEasterEggContext.Provider>
  );
}

export const useFrogEasterEgg = () => {
  const context = useContext(FrogEasterEggContext);
  if (context === undefined) {
    throw new Error('useFrogEasterEgg must be used within a FrogEasterEggProvider');
  }
  return context;
};
