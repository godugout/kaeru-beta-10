
import React from "react";

interface MaContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A container component that provides consistent max-width and padding
 * based on traditional Japanese spatial principles (Ma).
 */
export const MaContainer = ({ children, className = "" }: MaContainerProps) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
};

interface WabiSabiBlockProps {
  children: React.ReactNode;
  textureType?: "paper" | "washi" | "none";
  className?: string;
}

/**
 * A block-level element with optional textures inspired by Wabi-sabi aesthetics.
 */
export const WabiSabiBlock = ({ children, textureType = "none", className = "" }: WabiSabiBlockProps) => {
  let textureClass = "";
  switch (textureType) {
    case "paper":
      textureClass = "paper-texture";
      break;
    case "washi":
      textureClass = "washi-texture";
      break;
    default:
      textureClass = "";
  }
  
  return (
    <div className={`${textureClass} ${className}`}>
      {children}
    </div>
  );
};

interface TatamiGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: "small" | "medium" | "large";
  className?: string;
  itemMinWidth?: string;
  responsiveBreakpoints?: boolean;
  role?: string;
  "aria-live"?: "off" | "assertive" | "polite";  // Fixed: Restricted to valid ARIA values
  "aria-labelledby"?: string;
}

/**
 * A grid layout inspired by the proportions of traditional Japanese tatami mats.
 * Enhanced with responsive features and customizable gaps.
 */
export const TatamiGrid = ({ 
  children, 
  columns = 2, 
  gap = "medium",
  className = "",
  itemMinWidth = "280px",
  responsiveBreakpoints = true,
  role,
  "aria-live": ariaLive,
  "aria-labelledby": ariaLabelledBy
}: TatamiGridProps) => {
  // Calculate gap size based on Japanese spacing principles
  const gapClass = {
    small: "gap-sun",
    medium: "gap-sun-2",
    large: "gap-shaku"
  }[gap];
  
  // Use either CSS Grid with auto-fit or traditional responsive breakpoints
  const gridClass = responsiveBreakpoints
    ? `grid grid-cols-1 sm:grid-cols-2 ${columns > 2 ? 'lg:grid-cols-3' : ''} ${columns > 3 ? 'xl:grid-cols-4' : ''}`
    : `grid grid-template-columns: repeat(auto-fill, minmax(${itemMinWidth}, 1fr))`;
  
  return (
    <div 
      className={`${gridClass} ${gapClass} ${className}`}
      role={role}
      aria-live={ariaLive}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </div>
  );
};

interface AsymmetricGridProps {
  children: React.ReactNode;
  className?: string;
  withOffset?: boolean;
}

/**
 * A grid layout inspired by traditional Japanese asymmetry principles.
 * Enhanced with offset option for more dynamic arrangements.
 */
export const AsymmetricGrid = ({ 
  children, 
  className = "",
  withOffset = false
}: AsymmetricGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${withOffset ? '[&>*:nth-child(even)]:md:mt-16' : ''} ${className}`}>
      {children}
    </div>
  );
};

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  alignItems?: "start" | "center" | "end";
}

/**
 * A section component with appropriate vertical spacing for scrollable content
 * based on Japanese spatial rhythm principles.
 */
export const ScrollSection = ({ 
  children, 
  className = "", 
  alignItems = "start" 
}: ScrollSectionProps) => {
  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  }[alignItems];

  return (
    <section className={`py-8 ${alignClass} ${className}`}>
      {children}
    </section>
  );
};

interface AsymmetricalCardProps {
  children: React.ReactNode;
  image: string;
  imagePosition?: "right" | "left";
  className?: string;
}

/**
 * A card layout with asymmetrical image placement, inspired by Japanese design principles
 */
export const AsymmetricalCard = ({ 
  children, 
  image, 
  imagePosition = "right",
  className = "" 
}: AsymmetricalCardProps) => {
  return (
    <div className={`flex flex-col ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"} ${className}`}>
      <div className="w-full md:w-2/5 relative min-h-[200px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-${imagePosition === "left" ? "r" : "l"} from-black/50 to-transparent`}
        />
      </div>
      <div className="w-full md:w-3/5 p-6 bg-black/20">
        {children}
      </div>
    </div>
  );
};
