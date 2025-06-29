import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const Availability = () => {
  const t = useTranslation();

  return (
    <section id="availability" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('availability.title')}</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="text-center">
          <p className="text-lg mb-4">
            {t('availability.bookingInfo.bookingComMessage') ||
              (language === 'pl'
                ? 'Sprawdź dostępność i zarezerwuj pobyt bezpiecznie przez Booking.com.'
                : 'Check availability and book securely via Booking.com.')}
          </p>
          <a
            href="https://www.booking.com/Share-ipKSgh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary-dark transition"
          >
            Booking.com
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-blue-50 border-l-4 border-primary rounded-lg p-6"
      >
        <div className="flex items-start gap-4">
          <div className="text-primary mt-1">
            <Info size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('availability.bookingInfo.title')}</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• {t('availability.bookingInfo.minStay')}</li>
              <li>• {t('availability.bookingInfo.checkIn')}</li>
              <li>• {t('availability.bookingInfo.checkOut')}</li>
              <li>• {t('availability.bookingInfo.noAnimals')}</li>
              <li>• {t('availability.bookingInfo.noParties')}</li>
              <li>• {t('availability.bookingInfo.smoking')}</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Availability;
