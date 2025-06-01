import React from 'react';
import { motion } from 'framer-motion';
import { Users, BedDouble, Bath, Maximize } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import WeatherWidget from './WeatherWidget';

const ApartmentDetails = () => {
  const t = useTranslation();

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
        <motion.div
          variants={fadeInUp}
          className="rounded-lg overflow-hidden shadow-xl relative group aspect-square max-h-[450px] bg-gradient-to-br from-primary/10 to-background/30 flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-primary/80 relative z-10 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t('apartment.welcome')}
          </motion.h2>
          <div className="relative z-10">
            <WeatherWidget />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <p className="text-lg text-gray-600 mb-6 whitespace-pre-line">
            {t('apartment.description')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <FeatureCard icon={<Users size={24} />} title={t('apartment.features.guests')} value="4" />
            <FeatureCard icon={<BedDouble size={24} />} title={t('apartment.features.beds')} value="2" />
            <FeatureCard icon={<Bath size={24} />} title={t('apartment.features.bathrooms')} value="1" />
            <FeatureCard icon={<Maximize size={24} />} title={t('apartment.features.size')} value="39 m²" />
          </div>
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
