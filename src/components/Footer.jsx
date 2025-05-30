
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-xl font-bold text-primary mb-4 block">Coastal Haven</span>
            <p className="text-gray-400 mb-4">
              Your perfect beachfront getaway in the heart of Miami Beach.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="#" icon="instagram" />
              <SocialIcon href="#" icon="twitter" />
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-lg mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <FooterLink href="#apartment">Apartment</FooterLink>
              <FooterLink href="#amenities">Amenities</FooterLink>
              <FooterLink href="#gallery">Gallery</FooterLink>
              <FooterLink href="#availability">Availability</FooterLink>
            </ul>
          </div>
          
          <div>
            <span className="font-semibold text-lg mb-4 block">Explore</span>
            <ul className="space-y-2">
              <FooterLink href="#location">Location</FooterLink>
              <FooterLink href="#attractions">Local Attractions</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          <div>
            <span className="font-semibold text-lg mb-4 block">Legal</span>
            <ul className="space-y-2">
              <FooterLink href="#">Terms & Conditions</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Cancellation Policy</FooterLink>
              <FooterLink href="#">House Rules</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            <span>© {currentYear} Coastal Haven Apartments. All rights reserved.</span>
            <span className="inline-flex items-center">
              Made with <Heart size={14} className="text-red-500 mx-1" /> in Miami
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <i className={`fab fa-${icon}`}></i>
    {icon === 'facebook' && <span className="sr-only">Facebook</span>}
    {icon === 'instagram' && <span className="sr-only">Instagram</span>}
    {icon === 'twitter' && <span className="sr-only">Twitter</span>}
  </motion.a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <motion.a
      href={href}
      className="text-gray-400 hover:text-primary transition-colors duration-300"
      whileHover={{ x: 5 }}
    >
      {children}
    </motion.a>
  </li>
);

export default Footer;
