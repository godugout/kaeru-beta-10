
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import OriginsBackground from "./origins/OriginsBackground";
import OriginsHeader from "./origins/OriginsHeader";
import OriginsContent from "./origins/OriginsContent";
import OriginsImageDisplay from "./origins/OriginsImageDisplay";

const OriginsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation variables for parallax scrolling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  
  return (
    <section 
      id="origins" 
      ref={containerRef}
      className="relative py-24 bg-black min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Background elements with ripple effects */}
      <OriginsBackground containerRef={containerRef} />
      
      <div 
        className="max-w-7xl mx-auto px-4 md:px-8 relative z-10"
      >
        {/* Header section */}
        <OriginsHeader />
        
        {/* Content grid */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center">
          {/* Left column with text */}
          <OriginsContent textY={textY} />
          
          {/* Right column with image */}
          <OriginsImageDisplay imageScale={imageScale} />
        </div>
      </div>
    </section>
  );
};

export default OriginsSection;
