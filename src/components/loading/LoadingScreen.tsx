
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [opacity, setOpacity] = useState(1);
  
  // Check if loading screen should be shown
  const shouldShowLoading = () => {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem('kaeru_loading_last_shown');
    const isLoggedIn = localStorage.getItem('kaeru_user_logged_in') === 'true';
    const hasViewedAfterLogin = localStorage.getItem('kaeru_loading_viewed_after_login') === 'true';
    
    // If user is logged in and has already seen it, don't show
    if (isLoggedIn && hasViewedAfterLogin) {
      return false;
    }
    
    // If user is not logged in, only show once per day
    if (!isLoggedIn && lastShown === today) {
      return false;
    }
    
    return true;
  };

  const markAsViewed = () => {
    const today = new Date().toDateString();
    const isLoggedIn = localStorage.getItem('kaeru_user_logged_in') === 'true';
    
    localStorage.setItem('kaeru_loading_last_shown', today);
    
    if (isLoggedIn) {
      localStorage.setItem('kaeru_loading_viewed_after_login', 'true');
    }
  };
  
  useEffect(() => {
    if (!shouldShowLoading()) {
      onComplete();
      return;
    }

    // Mark as viewed
    markAsViewed();
    
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
