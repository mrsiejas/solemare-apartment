import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/lib/i18n.jsx';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ApartmentDetails from '@/components/ApartmentDetails';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import Availability from '@/components/Availability';
import Location from '@/components/Location';
import LocalAttractions from '@/components/LocalAttractions';
import Footer from '@/components/Footer';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
        <Navbar />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />

          <div className="container mx-auto px-4 py-8">
            <ApartmentDetails />

            <div className="section-divider" />

            <Amenities />

            <div className="section-divider" />

            <Gallery />

            <div className="section-divider" />

            <Availability />

            <div className="section-divider" />

            <LocalAttractions />

            <div className="section-divider" />

            <Location />

            <div className="section-divider" />
          </div>

          <Footer />
        </motion.div>
      </div>
    </LanguageProvider>
  );
};

export default App;