
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
  description?: string;
}

interface SumiEMenuProps {
  items: MenuItem[];
  className?: string;
}

const SumiEMenu = ({ items, className = "" }: SumiEMenuProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className={`py-8 ${className}`}>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.path}
              className="block relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center relative">
                {/* Brush stroke background that appears on hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      className="absolute -inset-x-6 -inset-y-2 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* SVG Brush stroke */}
                      <svg 
                        className="w-full h-full" 
                        viewBox="0 0 300 60" 
                        preserveAspectRatio="none"
                      >
                        <motion.path 
                          d="M10,30 Q50,10 100,30 T200,30 T290,30" 
                          stroke="rgba(230, 185, 128, 0.2)"
                          strokeWidth="40"
                          strokeLinecap="round"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="sumi-e-stroke"
                        />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Menu text */}
                <motion.span 
                  className="text-xl font-serif text-white relative z-10"
                  animate={{
                    color: hoveredIndex === index ? '#E6B980' : 'white',
                    x: hoveredIndex === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {item.label}
                </motion.span>
                
                {/* Ink dot */}
                <motion.div 
                  className="ml-3 w-1.5 h-1.5 rounded-full bg-gold opacity-0"
                  animate={{ 
                    opacity: hoveredIndex === index ? 0.8 : 0,
                    scale: hoveredIndex === index ? [0, 1.5, 1] : 0
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              {/* Optional description with ink splatter effect */}
              {item.description && (
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/60 text-sm mt-1 ml-4 relative">
                        {/* Ink splatter decoration */}
                        <span className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                          <motion.svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 20 20"
                            initial={{ rotate: 0, scale: 0 }}
                            animate={{ rotate: -15, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                          >
                            <circle cx="10" cy="10" r="3" fill="rgba(230, 185, 128, 0.4)" />
                            <circle cx="14" cy="8" r="1.5" fill="rgba(230, 185, 128, 0.3)" />
                            <circle cx="7" cy="12" r="1" fill="rgba(230, 185, 128, 0.2)" />
                          </motion.svg>
                        </span>
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SumiEMenu;
