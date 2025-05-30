import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Location = () => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Miami Beach coordinates (example)
  const position = [25.7617, -80.1918];

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapContainerRef.current).setView(position, 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);

      L.marker(position).addTo(mapInstanceRef.current)
        .bindPopup('Coastal Haven Apartment <br /> Your perfect getaway.')
        .openPopup();
      
      setMapLoaded(true);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [position]);

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
          Our apartment is perfectly situated to give you easy access to the beach and local attractions.
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
              123 Oceanfront Drive<br />
              Miami Beach, FL 33139<br />
              United States
            </p>
            
            <div className="space-y-3">
              <LocationDetail icon={<MapPin size={18} />} text="5 minutes walk to the beach" />
              <LocationDetail icon={<MapPin size={18} />} text="10 minutes to restaurants and shops" />
              <LocationDetail icon={<MapPin size={18} />} text="15 minutes to downtown" />
              <LocationDetail icon={<MapPin size={18} />} text="25 minutes to the airport" />
            </div>
            
            <Button 
              className="mt-6 w-full flex items-center justify-center gap-2"
              onClick={() => window.open('https://maps.google.com/?q=Miami+Beach,FL', '_blank')}
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
          <div ref={mapContainerRef} id="map-container-direct" className="h-full w-full">
            {!mapLoaded && (
              <div className="h-full w-full flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-gray-500">Loading map...</p>
                </div>
              </div>
            )}
          </div>
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
