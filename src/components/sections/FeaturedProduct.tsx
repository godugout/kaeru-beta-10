
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturedProductProps {
  title: string;
  description: string;
  imagePath: string;
  altText: string;
  ambassador: string;
}

const FeaturedProduct = ({ 
  title, 
  description, 
  imagePath, 
  altText,
  ambassador
}: FeaturedProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full py-24 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <div className={`relative transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          <div className="bg-white/5 backdrop-blur-sm p-1 rounded-lg">
            <img 
              src={imagePath} 
              alt={altText} 
              className="w-full h-auto rounded shadow-lg" 
            />
          </div>
          {/* Gold accent that appears on hover */}
          <div 
            className={`absolute -inset-1 border border-gold rounded-lg transition-opacity duration-700 ${isHovered ? 'opacity-40' : 'opacity-0'}`}
          ></div>
        </div>
      </div>
      
      {/* Product Information */}
      <div className="w-full md:w-1/2 md:pl-12 lg:pl-24 flex flex-col items-start">
        <div className="mb-2 opacity-60 text-sm tracking-widest">
          {ambassador} COLLECTION
        </div>
        <h3 className="text-3xl md:text-4xl font-serif mb-6 text-white tracking-wider">{title}</h3>
        <p className="text-white/70 mb-8 leading-relaxed max-w-md">{description}</p>
        
        <Button
          variant="outline"
          className={`group border-gold text-gold hover:bg-gold/10 hover:text-white transition-all duration-300 tracking-wider ${isHovered ? 'border-opacity-100' : 'border-opacity-70'}`}
        >
          DISCOVER
          <ArrowRight 
            size={16} 
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
          />
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
