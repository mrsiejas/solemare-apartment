
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BedDouble, Bath, Maximize } from 'lucide-react';

const ApartmentDetails = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="apartment" className="py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Coastal Haven Apartment</h2>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to our luxurious beachfront apartment, where comfort meets elegance. Perfectly situated with stunning ocean views, our modern apartment offers the ideal blend of relaxation and convenience for your perfect getaway.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Recently renovated with high-end finishes, this spacious apartment features an open floor plan, gourmet kitchen, and a private balcony where you can enjoy breathtaking sunsets over the ocean.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <FeatureCard icon={<Users size={24} />} title="Guests" value="4" />
            <FeatureCard icon={<BedDouble size={24} />} title="Bedrooms" value="2" />
            <FeatureCard icon={<Bath size={24} />} title="Bathrooms" value="2" />
            <FeatureCard icon={<Maximize size={24} />} title="Size" value="120 m²" />
          </div>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img  
            alt="Luxury apartment living room with ocean view" 
            className="w-full h-auto rounded-lg"
           src="https://images.unsplash.com/photo-1695259496167-c05f25f1d793" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon, title, value }) => (
  <motion.div 
    className="bg-white p-4 rounded-lg shadow-md text-center"
    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex justify-center text-primary mb-2">{icon}</div>
    <h3 className="font-medium text-gray-500">{title}</h3>
    <p className="text-xl font-bold text-gray-800">{value}</p>
  </motion.div>
);

export default ApartmentDetails;
