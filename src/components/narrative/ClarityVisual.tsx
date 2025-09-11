
import { motion } from "framer-motion";

const ClarityVisual = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background texture with reduced opacity */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wMSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjEgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')]"></div>
      
      {/* High-quality mountain imagery with proper resolution */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=100&w=2000')] bg-center bg-cover opacity-5"></div>
      
      {/* Subtle gradient overlay that moves gently */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
        }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      
      {/* Central light source */}
      <motion.div 
        className="absolute"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1]
        }} 
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      
      {/* Light rays - reduced number and made more subtle */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => {
          const angle = (i * 60) % 180;
          return (
            <motion.div
              key={i}
              className="absolute bg-white/5 origin-bottom"
              style={{
                width: '1px',
                height: '40%',
                top: '10%',
                left: '50%',
                transform: `rotate(${angle}deg)`,
              }}
              animate={{ 
                opacity: [0.03, 0.1, 0.03],
                height: ['40%', '42%', '40%']
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          );
        })}
      </div>
      
      {/* Subtle horizontal gradient bands that drift slowly */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-full h-1/3 top-0 opacity-20"
          style={{ 
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03), transparent)' 
          }}
          animate={{ 
            y: ['-5%', '5%', '-5%'] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute w-full h-1/3 top-1/3 opacity-15"
          style={{ 
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03), transparent)' 
          }}
          animate={{ 
            y: ['5%', '-5%', '5%'] 
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute w-full h-1/3 top-2/3 opacity-10"
          style={{ 
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03), transparent)' 
          }}
          animate={{ 
            y: ['-3%', '3%', '-3%'] 
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </div>
  );
};

export default ClarityVisual;
