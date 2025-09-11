
import { motion } from "framer-motion";
import { useState } from "react";

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
  height?: "small" | "medium" | "large";
  priority?: boolean;
}

const ImageWithOverlay = ({
  src,
  alt,
  title,
  subtitle,
  className = "",
  height = "large",
  priority = false
}: ImageWithOverlayProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const heightClass = {
    small: "max-h-[200px]",
    medium: "max-h-[300px]",
    large: "max-h-[500px]"
  };
  
  return (
    <motion.div 
      className={`aspect-video ${heightClass[height]} overflow-hidden relative rounded-sm ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 10 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover object-center"
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setImageLoaded(true)}
        width={1200}
        height={675}
      />
      
      {(title || subtitle) && (
        <div className="absolute bottom-8 left-8 z-20">
          {subtitle && <p className="text-sm tracking-widest text-gold mb-1">{subtitle}</p>}
          {title && (
            <h2 className="font-serif text-xl md:text-2xl text-white max-w-xl">
              {title}
            </h2>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ImageWithOverlay;
