
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [opacity, setOpacity] = useState(1);
  
  useEffect(() => {
    // Show the loading screen for a set duration
    const timer = setTimeout(() => {
      // Start fading out
      setOpacity(0);
      
      // Notify parent that animation is complete after fade out
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 500); // Give time for the fade-out transition
      
      return () => clearTimeout(completeTimer);
    }, 4000); // Duration of the loading screen
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex justify-center items-center"
      style={{ 
        opacity, 
        transition: 'opacity 500ms ease-out',
        pointerEvents: opacity === 0 ? 'none' : 'auto'
      }}
    >
      <img 
        src="/lovable-uploads/775b98a8-5a04-44fc-bc94-1e4a72b0517e.png"
        alt="KAERU"
        className="w-48 h-auto" 
      />
    </div>
  );
};

export default LoadingScreen;
