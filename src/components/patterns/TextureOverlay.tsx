import React from 'react';
import { motion } from 'framer-motion';

interface TextureOverlayProps {
  intensity?: 'subtle' | 'medium' | 'strong';
  type?: 'grain' | 'paper' | 'fabric' | 'brush';
  className?: string;
}

export const TextureOverlay: React.FC<TextureOverlayProps> = ({
  intensity = 'medium',
  type = 'grain',
  className = ''
}) => {
  const getIntensityOpacity = () => {
    switch (intensity) {
      case 'subtle': return '0.02';
      case 'strong': return '0.08';
      default: return '0.04';
    }
  };
  
  const getTexturePattern = () => {
    const opacity = getIntensityOpacity();
    
    switch (type) {
      case 'grain':
        return `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${opacity} 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`;
        
      case 'paper':
        return `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence baseFrequency='0.04' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.9 0 0 0 0 0.9 0 0 0 0 0.9 0 0 0 ${opacity} 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E")`;
        
      case 'fabric':
        return `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000' stroke-width='1' opacity='${opacity}'%3E%3Cpath d='M0 0l60 60M0 60l60-60'/%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/svg%3E")`;
        
      case 'brush':
        return `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='brush'%3E%3CfeTurbulence baseFrequency='0.02' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${opacity} 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23brush)'/%3E%3C/svg%3E")`;
        
      default:
        return 'none';
    }
  };

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      style={{
        backgroundImage: getTexturePattern(),
        backgroundRepeat: 'repeat',
        backgroundSize: type === 'grain' ? '200px 200px' : 
                       type === 'paper' ? '100px 100px' : 
                       type === 'fabric' ? '60px 60px' : '120px 120px',
        mixBlendMode: 'multiply'
      }}
    />
  );
};

export default TextureOverlay;