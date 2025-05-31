import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';

const Location = () => {
  const t = useTranslation();

  return (
    <section id="location" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('location.title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('location.description')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden h-[500px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2326.244020818529!2d19.221306!3d54.334995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd3911e28dc331%3A0x760274dbad7fa175!2sApartamenty%20Solemare!5e0!3m2!1spl!2spl!4v1748501307773!5m2!1spl!2spl"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Mapa lokalizacji Apartamenty Solemare w Kątach Rybackich"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Location;
