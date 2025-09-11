
import React from 'react';
import { cn } from '@/lib/utils';

interface VerticalRhythmProps {
  children: React.ReactNode;
  spacing?: 'tight' | 'normal' | 'loose';
  className?: string;
}

/**
 * A component that applies Japanese-inspired vertical rhythm to its children
 * Based on traditional Japanese spatial concepts like "ma" (negative space)
 */
const VerticalRhythm = ({
  children,
  spacing = 'normal',
  className,
}: VerticalRhythmProps) => {
  // Different spacing classes based on Japanese proportional systems
  const spacingClasses = {
    tight: 'v-rhythm-tight', // Smaller spacing for denser content
    normal: 'v-rhythm',      // Standard spacing based on Japanese proportions
    loose: 'v-rhythm-loose', // More generous spacing for emphasized content
  };

  return (
    <div className={cn(spacingClasses[spacing], className)}>
      {children}
    </div>
  );
};

export default VerticalRhythm;
