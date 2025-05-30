import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Info } from 'lucide-react';

const Availability = () => {
  return (
    <section id="availability" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Check Availability</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          View our calendar to check availability for your desired dates.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="flex items-center gap-2 mb-4 text-primary">
          <Calendar size={24} />
          <h3 className="text-xl font-semibold">Availability Calendar</h3>
        </div>

        <div className="calendar-container">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=707af2fa11decccd6ba8415cd339e8ad33c32b03a37462b4e50ad02db48a7977%40group.calendar.google.com&ctz=Europe%2FWarsaw"
            style={{ border: 0 }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Apartment Availability Calendar"
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
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Booking Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Minimum stay: 3 nights</li>
              <li>• Check-in time: 3:00 PM</li>
              <li>• Check-out time: 11:00 AM</li>
              <li>• 50% deposit required to secure booking</li>
              <li>• Full payment due 30 days before arrival</li>
              <li>• Cancellation policy: Full refund if cancelled 30 days before arrival</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Availability;
