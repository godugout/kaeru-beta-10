
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import WaterRipple from "@/components/animations/WaterRipple";
import CartIcon from "@/components/cart/CartIcon";
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
    { name: "LIBRARY", href: "/library", id: "library", priority: "secondary" },
    { name: "ORIGINS", href: "/origins", id: "origins", priority: "secondary" }
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
        <WaterRipple className="hidden md:flex space-x-8">
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
                } group`}
              >
                <span>{item.name}</span>
                
                {/* Gold ink underline animation for active items */}
                <motion.div 
                  className={`absolute left-0 bottom-0 h-px bg-gold ${isPrimary ? 'w-full' : 'w-3/4'}`}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ 
                    scaleX: active ? 1 : 0,
                    opacity: active ? 1 : 0,
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for ink flow effect
                  }}
                />
                
                {/* Hover animation (only when not active) */}
                {!active && (
                  <motion.div 
                    className={`absolute left-0 bottom-0 h-px bg-gold/60 ${isPrimary ? 'w-full' : 'w-3/4'}`}
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

        {/* Desktop Cart Icon */}
        <div className="hidden md:flex items-center">
          <CartIcon onClick={toggleCart} />
        </div>

        {/* Mobile Menu Button with water ripple effect */}
        <WaterRipple className="md:hidden">
          <Button 
            variant="ghost" 
            className="text-gold hover:bg-transparent hover:text-gold"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </WaterRipple>
      </div>

      {/* Mobile Navigation with improved animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "100vh" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden pt-24"
          >
            <div className="flex flex-col items-center space-y-10 p-8">
              {navItems.map((item) => {
                const active = isActive(item.href);
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative tracking-widest text-xl transition-colors duration-300 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={active ? 'text-gold' : 'text-white/80 group-hover:text-gold'}>
                      {item.name}
                    </span>
                    
                    {/* Gold ink underline animation */}
                    {active && (
                      <motion.div 
                        className="absolute left-1/2 bottom-0 h-px bg-gold"
                        initial={{ width: 0 }}
                        animate={{ width: "100%", x: "-50%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </Link>
                );
              })}
              
              {/* Mobile Cart */}
              <div className="pt-4">
                <CartIcon onClick={() => { toggleCart(); setIsOpen(false); }} />
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
