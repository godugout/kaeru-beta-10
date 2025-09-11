import { useEffect, useCallback, useState } from 'react';

interface UseKeyboardNavigationProps {
  totalItems: number;
  onItemSelect: (index: number) => void;
  onItemActivate: (index: number) => void;
  isActive?: boolean;
}

export const useKeyboardNavigation = ({
  totalItems,
  onItemSelect,
  onItemActivate,
  isActive = true
}: UseKeyboardNavigationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isActive || totalItems === 0) return;

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        setIsNavigating(true);
        setCurrentIndex((prev) => {
          const newIndex = (prev + 1) % totalItems;
          onItemSelect(newIndex);
          return newIndex;
        });
        break;

      case 'ArrowLeft':
        event.preventDefault();
        setIsNavigating(true);
        setCurrentIndex((prev) => {
          const newIndex = prev === 0 ? totalItems - 1 : prev - 1;
          onItemSelect(newIndex);
          return newIndex;
        });
        break;

      case 'ArrowDown':
        event.preventDefault();
        setIsNavigating(true);
        setCurrentIndex((prev) => {
          const newIndex = Math.min(prev + 3, totalItems - 1); // Move down a row (3 columns)
          onItemSelect(newIndex);
          return newIndex;
        });
        break;

      case 'ArrowUp':
        event.preventDefault();
        setIsNavigating(true);
        setCurrentIndex((prev) => {
          const newIndex = Math.max(prev - 3, 0); // Move up a row (3 columns)
          onItemSelect(newIndex);
          return newIndex;
        });
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        onItemActivate(currentIndex);
        break;

      case 'Escape':
        event.preventDefault();
        setIsNavigating(false);
        // Could be used to close flipped cards or exit navigation mode
        break;

      default:
        break;
    }
  }, [isActive, totalItems, onItemSelect, onItemActivate, currentIndex]);

  useEffect(() => {
    if (isActive) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown, isActive]);

  return {
    currentIndex,
    isNavigating,
    setCurrentIndex,
    setIsNavigating
  };
};