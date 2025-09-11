
import { useState, useEffect, useCallback } from 'react';

// The classic Konami code sequence
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

/**
 * A hook that detects when the Konami code sequence is entered
 * @returns {[boolean, () => void]} - Whether the Konami code has been activated and a reset function
 */
const useKonamiCode = (): [boolean, () => void] => {
  const [keysPressed, setKeysPressed] = useState<string[]>([]);
  const [konamiActivated, setKonamiActivated] = useState(false);

  // Reset the Konami activation state
  const resetKonami = useCallback(() => {
    setKonamiActivated(false);
    setKeysPressed([]);
  }, []);

  useEffect(() => {
    // Handler for keydown events
    const keydownHandler = (event: KeyboardEvent) => {
      // Get the key from the event
      const key = event.key;
      
      // Update keys pressed
      const updatedKeysPressed = [...keysPressed, key];
      
      // Only keep the most recent keys that could match the code length
      if (updatedKeysPressed.length > KONAMI_CODE.length) {
        updatedKeysPressed.shift();
      }
      
      setKeysPressed(updatedKeysPressed);

      // Check if Konami code has been entered (case insensitive)
      const isKonamiCode = updatedKeysPressed.length === KONAMI_CODE.length && 
        updatedKeysPressed.every((k, i) => 
          k.toLowerCase() === KONAMI_CODE[i].toLowerCase()
        );

      if (isKonamiCode && !konamiActivated) {
        setKonamiActivated(true);
        console.log('Konami code activated!');
      }
    };

    // Add event listener
    window.addEventListener('keydown', keydownHandler);

    // Clean up
    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [keysPressed, konamiActivated]);

  return [konamiActivated, resetKonami];
};

export default useKonamiCode;
