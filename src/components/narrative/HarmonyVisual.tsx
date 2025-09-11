
import { motion } from "framer-motion";

const HarmonyVisual = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background texture that's always visible */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjUgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')]"></div>
      
      {/* Ocean imagery */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80')] bg-center bg-cover opacity-5"></div>
      
      {/* Two circular flows representing harmony - earth (gold) and water (ocean blue) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Gold/earth circle - left side */}
        <motion.div
          className="absolute rounded-full bg-gold/5 border border-gold/10"
          style={{
            width: '40%',
            height: '40%',
            left: '25%',
            transform: 'translateX(-50%)',
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
        >
          {/* Gold particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gold/30"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                x: ['-50%', '50%', '-50%']
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </motion.div>
        
        {/* Ocean blue circle - right side */}
        <motion.div
          className="absolute rounded-full bg-ocean/5 border border-ocean/10"
          style={{
            width: '40%',
            height: '40%',
            right: '25%',
            transform: 'translateX(50%)',
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            x: [10, -10, 10]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
        >
          {/* Ocean particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-ocean/30"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, -360],
                x: ['50%', '-50%', '50%']
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </motion.div>
        
        {/* Central connecting flow */}
        <motion.div
          className="absolute"
          style={{
            width: '20%',
            height: '8px',
            background: 'linear-gradient(to right, rgba(230, 185, 128, 0.3), rgba(51, 195, 240, 0.3))'
          }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            width: ['20%', '25%', '20%'],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default HarmonyVisual;
