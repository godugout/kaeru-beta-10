
import { motion } from "framer-motion";

const CalmVisual = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background texture that's always visible */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjAyIiBudW1PY3RhdmVzPSIzIi8+PGZlRGlzcGxhY2VtZW50TWFwIGluPSJTb3VyY2VHcmFwaGljIiBzY2FsZT0iMjAiLz48L2ZpbHRlcj48cGF0aCBmaWx0ZXI9InVybCgjYSkiIGQ9Ik0wIDBoMjAwdjIwMEgweiIgb3BhY2l0eT0iLjMiLz48L3N2Zz4=')]"></div>
      
      {/* Natural water imagery with low opacity */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80')] bg-center bg-cover opacity-5"></div>
      
      {/* Water ripple effects */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-ocean/20"
            style={{
              width: 100 + i * 50,
              height: 100 + i * 50,
              left: `calc(50% - ${(100 + i * 50) / 2}px)`,
              top: `calc(50% - ${(100 + i * 50) / 2}px)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              borderWidth: ["1px", "0.5px", "1px"]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="absolute left-0 right-0"
        style={{
          top: '20%',
          height: '60%',
          background: 'radial-gradient(circle at center, rgba(51, 195, 240, 0.15) 0%, transparent 70%)',
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
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ y: [-20, 0, -20] }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse", 
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-40 h-40 rounded-full"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 30px rgba(51, 195, 240, 0.2)'
            }}
            animate={{ 
              scale: [1, 0.9, 1], 
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CalmVisual;
