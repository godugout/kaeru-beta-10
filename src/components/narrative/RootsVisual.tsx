
import { motion } from "framer-motion";

const RootsVisual = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background texture that's always visible */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjUgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')]"></div>
      
      {/* Natural imagery */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80')] bg-center bg-cover opacity-5"></div>
      
      {/* Animated particles and shapes for roots */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/20"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60 + 40}%`, // Concentrate on lower part
            }}
            animate={{
              y: [Math.random() * 100, Math.random() * -50, Math.random() * 100],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Vertical lines representing roots */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => {
          const width = Math.random() * 3 + 1;
          const left = 10 + (i * 10) + (Math.random() * 5);
          const height = 30 + Math.random() * 50;
          
          return (
            <motion.div
              key={i}
              className="absolute bg-gold/20 bottom-0"
              style={{
                width: `${width}px`,
                left: `${left}%`,
                height: `${height}%`,
              }}
              animate={{ 
                height: [`${height - 10}%`, `${height + 5}%`, `${height - 10}%`],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0" 
        style={{ height: '40%' }}
      >
        <motion.div 
          className="w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(230, 185, 128, 0.3) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2]
          }} 
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 w-full"
          style={{ height: '80%' }}
          initial={{ y: 100 }}
          animate={{ 
            y: [50, 0, 50]
          }} 
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-gold/30 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RootsVisual;
