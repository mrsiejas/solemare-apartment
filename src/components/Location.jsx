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
          src={import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa lokalizacji Apartamenty Solemare w Kątach Rybackich"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Location;
