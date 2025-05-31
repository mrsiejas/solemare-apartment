import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            <span>© {currentYear} Solemare Apartament 46. All rights reserved.</span>
            <span className="inline-flex items-center">
              Made with <Heart size={14} className="text-red-500 mx-1" /> by <a href="https://flowcv.me/blazejsiejek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 ml-1">Blazej</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
