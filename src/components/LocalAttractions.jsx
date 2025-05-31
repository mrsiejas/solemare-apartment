import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, UtensilsCrossed } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const LocalAttractions = () => {
  const t = useTranslation();

  const attractions = [
    {
      category: t('attractions.categories.attractions'),
      icon: <MapPin size={24} />,
      items: [
        {
          name: t('attractions.items.beach.name'),
          description: t('attractions.items.beach.description'),
          distance: t('attractions.items.beach.distance')
        },
        {
          name: t('attractions.items.vistulaLagoonMuseum.name'),
          description: t('attractions.items.vistulaLagoonMuseum.description'),
          distance: t('attractions.items.vistulaLagoonMuseum.distance')
        },
        {
          name: t('attractions.items.stutthofMuseum.name'),
          description: t('attractions.items.stutthofMuseum.description'),
          distance: t('attractions.items.stutthofMuseum.distance')
        },
        {
          name: t('attractions.items.ropePark.name'),
          description: t('attractions.items.ropePark.description'),
          distance: t('attractions.items.ropePark.distance')
        },
        {
          name: t('attractions.items.pirateTower.name'),
          description: t('attractions.items.pirateTower.description'),
          distance: t('attractions.items.pirateTower.distance')
        },
        {
          name: t('attractions.items.bikeTrails.name'),
          description: t('attractions.items.bikeTrails.description'),
          distance: t('attractions.items.bikeTrails.distance')
        }
      ]
    },
    {
      category: t('attractions.categories.food'),
      icon: <UtensilsCrossed size={24} />,
      items: [
        {
          name: t('attractions.items.livio.name'),
          description: t('attractions.items.livio.description'),
          distance: t('attractions.items.livio.distance')
        },
        {
          name: t('attractions.items.polomarket.name'),
          description: t('attractions.items.polomarket.description'),
          distance: t('attractions.items.polomarket.distance')
        },
        {
          name: t('attractions.items.fishBar.name'),
          description: t('attractions.items.fishBar.description'),
          distance: t('attractions.items.fishBar.distance')
        },
        {
          name: t('attractions.items.tristan.name'),
          description: t('attractions.items.tristan.description'),
          distance: t('attractions.items.tristan.distance')
        },
        {
          name: t('attractions.items.sztutozeria.name'),
          description: t('attractions.items.sztutozeria.description'),
          distance: t('attractions.items.sztutozeria.distance')
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="attractions" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('attractions.title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('attractions.subtitle')}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        {attractions.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-primary">{category.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  className="bg-white rounded-lg shadow-md p-6 attraction-card"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-sm font-medium text-primary">{item.distance}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LocalAttractions;
