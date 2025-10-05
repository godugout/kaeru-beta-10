
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import WaterRipple from "@/components/animations/WaterRipple";
import CartIcon from "@/components/cart/CartIcon";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import CartDrawer from "@/components/cart/CartDrawer";

interface EnhancedNavigationProps {
  scrollPosition?: number;
}

const EnhancedNavigation = ({ scrollPosition = 0 }: EnhancedNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const underlineRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  // Define nav items based on brand architecture with Shop first
  const navItems = [
    { name: "SHOP", href: "/shop", id: "shop", priority: "primary" },
    { name: "THE WAY", href: "/the-way", id: "the-way", priority: "secondary" },
    { name: "RITUALS", href: "/rituals", id: "rituals", priority: "primary" },
    // { name: "LIBRARY", href: "/library", id: "library", priority: "secondary" },
    // { name: "ORIGINS", href: "/origins", id: "origins", priority: "secondary" }
  ];
  
  const isActive = (path: string) => {
    if (path === "/" && isHomePage) return true;
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-500 ${
      scrollPosition > 50 ? 'bg-black/90 backdrop-blur-sm' : ''
    }`}>
      <div className="flex justify-between items-center">
        {/* Logo with water ripple effect */}
        <WaterRipple className="flex items-center">
          <Link 
            to="/" 
            className="transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="/lovable-uploads/775b98a8-5a04-44fc-bc94-1e4a72b0517e.png"
              alt="KAERU" 
              className="h-12 w-auto"
            />
          </Link>
        </WaterRipple>

        {/* Desktop Navigation with improved visual hierarchy */}
        <WaterRipple className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const isPrimary = item.priority === "primary";

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm tracking-widest transition-colors duration-300 ${
                  isPrimary ? 'font-medium' : 'font-normal'
                } ${
                  active ? 'text-gold' : 'text-white hover:text-gold'
                } group pb-1`}
                style={{ display: 'inline-block' }}
              >
                {item.name}
                
                {/* Gold ink underline animation for active items */}
                <motion.div 
                  className={`absolute left-0 bottom-0 h-px bg-gold pointer-events-none ${isPrimary ? 'w-full' : 'w-3/4'}`}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ 
                    scaleX: active ? 1 : 0,
                    opacity: active ? 1 : 0,
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.22, 1, 0.36, 1]
                  }}
                />
                
                {/* Hover animation (only when not active) */}
                {!active && (
                  <motion.div 
                    className={`absolute left-0 bottom-0 h-px bg-gold/60 pointer-events-none ${isPrimary ? 'w-full' : 'w-3/4'}`}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  />
                )}
              </Link>
            );
          })}
        </WaterRipple>

        {/* Desktop Cart Icon and Language Toggle */}
        <div className="hidden md:flex items-center space-x-3">
          <LanguageToggle />
          <CartIcon onClick={toggleCart} />
        </div>

        {/* Mobile Menu Button with water ripple effect */}
        <WaterRipple className="md:hidden">
          <Button 
            variant="ghost" 
            className="text-gold hover:bg-transparent hover:text-gold min-w-[44px] min-h-[44px]"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </WaterRipple>
      </div>

      {/* Full-screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-kaeru-black/98 backdrop-blur-md z-40 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Close button */}
              <div className="flex justify-end p-6">
                <Button 
                  variant="ghost" 
                  className="text-kaeru-gold hover:bg-transparent hover:text-kaeru-gold min-w-[44px] min-h-[44px]"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </Button>
              </div>
              
              {/* Navigation items */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-8">
                {navItems.map((item, index) => {
                  const active = isActive(item.href);
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                    >
                      <Link
                        to={item.href}
                        className="relative tracking-widest text-3xl font-light transition-colors duration-300 group min-h-[44px] flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className={active ? 'text-kaeru-gold' : 'text-kaeru-fog group-hover:text-kaeru-gold'}>
                          {item.name}
                        </span>
                        
                        {/* Gold underline animation */}
                        {active && (
                          <motion.div 
                            className="absolute left-1/2 -bottom-2 h-0.5 bg-kaeru-gold"
                            initial={{ width: 0 }}
                            animate={{ width: "100%", x: "-50%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Mobile Cart and Language Toggle at bottom */}
              <div className="p-8 flex justify-center space-x-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <LanguageToggle />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <CartIcon onClick={() => { toggleCart(); setIsOpen(false); }} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default EnhancedNavigation;
