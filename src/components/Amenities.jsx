import React from 'react';
import { motion } from 'framer-motion';
import {
  Wifi,
  Tv,
  Car,
  Coffee,
  Soup,
  Wind,
  Waves,
  UtensilsCrossed,
  Dumbbell,
  Lock
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const Amenities = () => {
  const t = useTranslation();

  const amenities = [
    { icon: <Wifi size={24} />, name: t('amenities.items.wifi') },
    { icon: <Tv size={24} />, name: t('amenities.items.tv') },
    { icon: <Car size={24} />, name: t('amenities.items.parking') },
    { icon: <Coffee size={24} />, name: t('amenities.items.coffee') },
    { icon: <Soup size={24} />, name: t('amenities.items.kitchen') },
    { icon: <Wind size={24} />, name: t('amenities.items.ac') },
    { icon: <Waves size={24} />, name: t('amenities.items.pool') },
    { icon: <UtensilsCrossed size={24} />, name: t('amenities.items.dishwasher') },
    { icon: <Dumbbell size={24} />, name: t('amenities.items.gym') },
    { icon: <Lock size={24} />, name: t('amenities.items.security') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="amenities" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('amenities.title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('amenities.subtitle')}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex flex-col items-center">
              <div className="text-primary mb-3">{amenity.icon}</div>
              <h3 className="font-medium text-gray-800">{amenity.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Amenities;
