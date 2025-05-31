import React from 'react';
import { motion } from 'framer-motion';
import { Palmtree, UtensilsCrossed, Ticket } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const LocalAttractions = () => {
  const t = useTranslation();

  const attractions = [
    {
      category: t('attractions.categories.beaches'),
      icon: <Palmtree size={24} />,
      items: [
        {
          name: t('attractions.items.southBeach.name'),
          description: t('attractions.items.southBeach.description'),
          distance: t('attractions.items.southBeach.distance')
        },
        {
          name: t('attractions.items.northShore.name'),
          description: t('attractions.items.northShore.description'),
          distance: t('attractions.items.northShore.distance')
        },
        {
          name: t('attractions.items.hauloverBeach.name'),
          description: t('attractions.items.hauloverBeach.description'),
          distance: t('attractions.items.hauloverBeach.distance')
        }
      ]
    },
    {
      category: t('attractions.categories.restaurants'),
      icon: <UtensilsCrossed size={24} />,
      items: [
        {
          name: t('attractions.items.oceanViewBistro.name'),
          description: t('attractions.items.oceanViewBistro.description'),
          distance: t('attractions.items.oceanViewBistro.distance')
        },
        {
          name: t('attractions.items.coastalKitchen.name'),
          description: t('attractions.items.coastalKitchen.description'),
          distance: t('attractions.items.coastalKitchen.distance')
        },
        {
          name: t('attractions.items.beachsideTaco.name'),
          description: t('attractions.items.beachsideTaco.description'),
          distance: t('attractions.items.beachsideTaco.distance')
        }
      ]
    },
    {
      category: t('attractions.categories.entertainment'),
      icon: <Ticket size={24} />,
      items: [
        {
          name: t('attractions.items.newWorldSymphony.name'),
          description: t('attractions.items.newWorldSymphony.description'),
          distance: t('attractions.items.newWorldSymphony.distance')
        },
        {
          name: t('attractions.items.artDecoDistrict.name'),
          description: t('attractions.items.artDecoDistrict.description'),
          distance: t('attractions.items.artDecoDistrict.distance')
        },
        {
          name: t('attractions.items.perezArtMuseum.name'),
          description: t('attractions.items.perezArtMuseum.description'),
          distance: t('attractions.items.perezArtMuseum.distance')
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
                  <p className="text-sm font-medium text-primary">Distance: {item.distance}</p>
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
