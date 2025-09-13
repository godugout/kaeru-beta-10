import React, { useEffect, useRef } from 'react';
import { useInactivityDetector } from '@/hooks/useInactivityDetector';
import FireflyParticles from './FireflyParticles';

const FrogAmbientMode: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>();
  const { isIdle } = useInactivityDetector({ timeout: 60000 }); // 60 seconds

  useEffect(() => {
    // Create audio element for frog croaking
    if (!audioRef.current) {
      audioRef.current = new Audio();
      // Using a gentle nature sound URL - in production you'd host this
      audioRef.current.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+D0u2MgBjOH0e/VgDE=' // Very short, subtle croak sound
      audioRef.current.volume = 0.1; // Very quiet
      audioRef.current.loop = true;
    }

    if (isIdle) {
      // Start subtle ambient sounds after a delay
      const timer = setTimeout(() => {
        audioRef.current?.play().catch(() => {
          // Ignore autoplay restrictions
        });
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // Stop ambient sounds when user becomes active
      audioRef.current?.pause();
    }
  }, [isIdle]);

  return (
    <>
      <FireflyParticles isActive={isIdle} />
    </>
  );
};

export default FrogAmbientMode;