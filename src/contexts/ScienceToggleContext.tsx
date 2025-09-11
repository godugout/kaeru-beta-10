
import { createContext, useContext, useState, ReactNode } from 'react';

interface ScienceToggleContextType {
  revealScience: boolean;
  toggleScienceSection: () => void;
}

const ScienceToggleContext = createContext<ScienceToggleContextType | undefined>(undefined);

export const ScienceToggleProvider = ({ children }: { children: ReactNode }) => {
  const [revealScience, setRevealScience] = useState(true);

  const toggleScienceSection = () => {
    setRevealScience(!revealScience);
    
    // If revealing, scroll to it
    if (!revealScience) {
      setTimeout(() => {
        const scienceSection = document.getElementById('science-section');
        scienceSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <ScienceToggleContext.Provider value={{ revealScience, toggleScienceSection }}>
      {children}
    </ScienceToggleContext.Provider>
  );
};

export const useScienceToggle = () => {
  const context = useContext(ScienceToggleContext);
  if (context === undefined) {
    throw new Error('useScienceToggle must be used within a ScienceToggleProvider');
  }
  return context;
};
