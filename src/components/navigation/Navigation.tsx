
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface NavigationProps {
  scrollPosition?: number;
}

const Navigation = ({ scrollPosition = 0 }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { itemCount } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define nav items based on brand architecture with Shop first
  const navItems = [
    { name: "SHOP", href: "/", id: "shop" },
    { name: "THE WAY", href: "/the-way", id: "the-way" },
    { name: "RITUALS", href: "/rituals", id: "rituals" },
    { name: "LIBRARY", href: "/library", id: "library" },
    { name: "ORIGINS", href: "/origins", id: "origins" }
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
        {/* Logo */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-gold text-lg font-serif tracking-widest"
          >
            <img 
              src="/lovable-uploads/775b98a8-5a04-44fc-bc94-1e4a72b0517e.png"
              alt="KAERU"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="group relative"
            >
              <span className={`text-sm tracking-widest transition-colors duration-300 ${
                isActive(item.href) ? 'text-gold' : 'text-white/90 group-hover:text-gold'
              }`}>
                {item.name}
              </span>
              
              {/* Underline indicator for active page */}
              {isActive(item.href) && (
                <motion.div 
                  className="absolute left-0 bottom-[-6px] h-[2px] bg-gold"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Hover indicator */}
              {!isActive(item.href) && (
                <motion.div 
                  className="absolute left-0 bottom-[-6px] h-[1px] bg-gold/50"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Cart Indicator */}
        <div className="hidden md:flex items-center">
          <Link to="/checkout" className="relative flex items-center text-white hover:text-gold transition-colors">
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-gold hover:bg-transparent hover:text-gold"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden pt-24"
          >
            <div className="flex flex-col items-center space-y-10 p-8">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative tracking-widest text-xl transition-colors duration-300 ${
                      active ? 'text-gold' : 'text-white/80 hover:text-gold'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.name}</span>
                    {active && (
                      <motion.div 
                        className="absolute left-0 bottom-[-6px] h-[2px] bg-gold w-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              <Link
                to="/checkout"
                className="flex items-center space-x-2 text-gold"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart size={20} />
                <span>CHECKOUT ({itemCount})</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
