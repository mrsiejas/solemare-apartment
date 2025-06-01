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
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('availability.subtitle')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="calendar-container">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=707af2fa11decccd6ba8415cd339e8ad33c32b03a37462b4e50ad02db48a7977%40group.calendar.google.com&ctz=Europe%2FWarsaw&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
            style={{ border: 0 }}
            width="800"
            height="600"
            className="overflow-hidden"
            title="Availability Calendar"
          ></iframe>
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
              <li>• {t('availability.bookingInfo.payment')}</li>
              <li>• {t('availability.bookingInfo.cancellation')}</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Availability;
