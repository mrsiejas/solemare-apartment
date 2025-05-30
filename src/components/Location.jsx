import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  return (
    <section id="location" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Location</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our apartment is perfectly situated in the heart of Kąty Rybackie, giving you easy access to the beach and local attractions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <MapPin size={24} />
              <h3 className="text-xl font-semibold">Our Address</h3>
            </div>

            <p className="text-gray-700 mb-4">
              ul. Polna 3a<br />
              82-110 Kąty Rybackie<br />
              Poland
            </p>

            <div className="space-y-3">
              <LocationDetail icon={<MapPin size={18} />} text="2 minutes walk to the beach" />
              <LocationDetail icon={<MapPin size={18} />} text="5 minutes to restaurants and shops" />
              <LocationDetail icon={<MapPin size={18} />} text="10 minutes to the Cormorant Reserve" />
              <LocationDetail icon={<MapPin size={18} />} text="15 minutes to Krynica Morska" />
            </div>

            <Button
              className="mt-6 w-full flex items-center justify-center gap-2"
              onClick={() => window.open('https://maps.google.com/?q=Kąty+Rybackie+46', '_blank')}
            >
              <Navigation size={18} />
              Get Directions
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2326.244020818529!2d19.221306!3d54.334995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd3911e28dc331%3A0x760274dbad7fa175!2sApartamenty%20Solemare!5e0!3m2!1spl!2spl!4v1748501307773!5m2!1spl!2spl"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Mapa lokalizacji Apartamenty Solemare w Kątach Rybackich"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

const LocationDetail = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    <div className="text-primary">{icon}</div>
    <p className="text-gray-700">{text}</p>
  </div>
);

export default Location;
