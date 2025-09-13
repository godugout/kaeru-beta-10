import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EmptyCart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      {/* Zen Circle Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-24 h-24 mb-8 relative"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            strokeWidth="2"
            className="text-kaeru-gold/50"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            strokeWidth="1"
            className="text-kaeru-gold/30"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </svg>
        
        {/* Center dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-2 h-2 bg-kaeru-gold rounded-full" />
        </motion.div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl font-serif text-kaeru-gold mb-3"
      >
        Your ritual awaits
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-white/70 mb-8 max-w-sm"
      >
        Begin your journey by selecting products that resonate with your practice
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Button
          asChild
          className="bg-kaeru-gold text-kaeru-black hover:bg-kaeru-gold/90 px-8"
        >
          <Link to="/products">
            Explore Products
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default EmptyCart;