
import { ReactNode } from "react";
import ImageWithOverlay from "@/components/ui/ImageWithOverlay";

interface FounderFeatureImageProps {
  priority?: boolean;
}

const FounderFeatureImage = ({ priority = false }: FounderFeatureImageProps) => {
  return (
    <div className="relative mb-12 rounded-sm overflow-hidden">
      <div className="aspect-video bg-black/70 relative">
        {/* Accent border with subtle gold accent */}
        <div className="absolute inset-0 border border-gold/30 z-20 pointer-events-none"></div>
        
        {/* Gradient overlay with blue accent hint */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-accent-blue/10 z-10"></div>
        
        {/* Updated image with uploaded artwork */}
        <img 
          src="/lovable-uploads/51574481-f300-41de-9b14-a5cdd3dca6bd.png" 
          alt="Kaeru brand identity with frog illustrations and Japanese calligraphy" 
          className="w-full h-full object-contain"
        />
        
        {/* Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-6">
          {/* Decorative element using accent colors */}
          <div className="flex justify-center items-center mb-3">
            <div className="w-12 h-px bg-accent-blue/40"></div>
            <div className="mx-2 w-2 h-2 rounded-full bg-gold"></div>
            <div className="w-12 h-px bg-accent-blue/40"></div>
          </div>
          
          <h2 className="text-sm tracking-widest text-gold mb-4">THE TURNING POINT</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white">
            A moment of clarity changed everything
          </h3>
          
          {/* Subtle accent element */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-gold/60 to-transparent opacity-70"></div>
        </div>
      </div>
      
      {/* Subtle red accent at the corner */}
      <div className="absolute top-0 right-0 w-16 h-1 bg-gradient-to-r from-transparent to-accent-red/30"></div>
      <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-accent-red/30 to-transparent"></div>
    </div>
  );
};

export default FounderFeatureImage;
