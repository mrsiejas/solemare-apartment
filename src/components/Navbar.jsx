import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, useLanguage } from '@/lib/i18n.jsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslation();
  const { language, changeLanguage } = useLanguage();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md'
        : 'bg-white/80 backdrop-blur-sm'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/sunset_icon.png"
              alt="Solemare Logo"
              className="w-8 h-8"
            />
            <span className="font-bold text-xl text-black">Solemare Apartament 46</span>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink onClick={() => scrollToSection('apartment')}>{t('nav.apartment')}</NavLink>
              <NavLink onClick={() => scrollToSection('amenities')}>{t('nav.amenities')}</NavLink>
              <NavLink onClick={() => scrollToSection('gallery')}>{t('nav.gallery')}</NavLink>
              <NavLink onClick={() => scrollToSection('availability')}>{t('nav.availability')}</NavLink>
              <NavLink onClick={() => scrollToSection('location')}>{t('nav.location')}</NavLink>
              <NavLink onClick={() => scrollToSection('attractions')}>{t('nav.attractions')}</NavLink>
              <NavLink onClick={() => scrollToSection('contact')}>{t('nav.contact')}</NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('pl')}
                className={`p-1 rounded-full transition-all duration-200 ${language === 'pl' ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-primary/50'
                  }`}
                title="Polski"
              >
                <img
                  src="/images/pl-flag.png"
                  alt="Polski"
                  className="w-6 h-6 rounded-full object-cover"
                />
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`p-1 rounded-full transition-all duration-200 ${language === 'en' ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-primary/50'
                  }`}
                title="English"
              >
                <img
                  src="/images/en-flag.png"
                  alt="English"
                  className="w-6 h-6 rounded-full object-cover"
                />
              </button>
            </div>
            <Button
              size="sm"
              className="flex items-center gap-2"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Phone size={16} />
              <span>{t('nav.book')}</span>
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
            <MobileNavLink onClick={() => scrollToSection('apartment')}>{t('nav.apartment')}</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('amenities')}>{t('nav.amenities')}</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('gallery')}>{t('nav.gallery')}</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('availability')}>{t('nav.availability')}</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('location')}>{t('nav.location')}</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('attractions')}>{t('nav.attractions')}</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('contact')}>{t('nav.contact')}</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-between px-5">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => changeLanguage('pl')}
                  className={`p-1 rounded-full transition-all duration-200 ${language === 'pl' ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-primary/50'
                    }`}
                  title="Polski"
                >
                  <img
                    src="/images/pl-flag.png"
                    alt="Polski"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`p-1 rounded-full transition-all duration-200 ${language === 'en' ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-primary/50'
                    }`}
                  title="English"
                >
                  <img
                    src="/images/en-flag.png"
                    alt="English"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                </button>
              </div>
              <Button
                className="flex items-center justify-center gap-2"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                <Phone size={16} />
                <span>{t('nav.book')}</span>
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
    className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const MobileNavLink = ({ children, onClick }) => (
  <motion.button
    className="text-gray-800 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
    onClick={onClick}
    whileHover={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.button>
);

export default Navbar;
