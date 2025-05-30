
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0 font-bold text-xl text-primary"
            whileHover={{ scale: 1.05 }}
          >
            Coastal Haven
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink onClick={() => scrollToSection('apartment')}>Apartment</NavLink>
              <NavLink onClick={() => scrollToSection('amenities')}>Amenities</NavLink>
              <NavLink onClick={() => scrollToSection('gallery')}>Gallery</NavLink>
              <NavLink onClick={() => scrollToSection('availability')}>Availability</NavLink>
              <NavLink onClick={() => scrollToSection('location')}>Location</NavLink>
              <NavLink onClick={() => scrollToSection('attractions')}>Attractions</NavLink>
              <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <Button size="sm" className="flex items-center gap-2">
              <Phone size={16} />
              <span>Book Now</span>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-foreground hover:bg-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink onClick={() => scrollToSection('apartment')}>Apartment</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('amenities')}>Amenities</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('gallery')}>Gallery</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('availability')}>Availability</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('location')}>Location</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('attractions')}>Attractions</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('contact')}>Contact</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button className="w-full flex items-center justify-center gap-2">
                <Phone size={16} />
                <span>Book Now</span>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({ children, onClick }) => (
  <motion.button
    className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const MobileNavLink = ({ children, onClick }) => (
  <motion.button
    className="text-gray-700 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
    onClick={onClick}
    whileHover={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.button>
);

export default Navbar;
