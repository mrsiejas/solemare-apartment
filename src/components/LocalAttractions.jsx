import React from 'react';
import { motion } from 'framer-motion';
import { Palmtree, UtensilsCrossed, Ticket } from 'lucide-react';

const LocalAttractions = () => {
  const attractions = [
    {
      category: "Beaches",
      icon: <Palmtree size={24} />,
      items: [
        {
          name: "South Beach",
          description: "Famous beach with white sand and turquoise waters, perfect for sunbathing and people-watching.",
          distance: "5 min walk"
        },
        {
          name: "North Shore Park",
          description: "Quieter beach with excellent swimming conditions and beautiful sunset views.",
          distance: "15 min walk"
        },
        {
          name: "Haulover Beach",
          description: "Spacious beach with great facilities and water sports rentals available.",
          distance: "10 min drive"
        }
      ]
    },
    {
      category: "Restaurants",
      icon: <UtensilsCrossed size={24} />,
      items: [
        {
          name: "Ocean View Bistro",
          description: "Upscale seafood restaurant with panoramic ocean views and fresh local catches.",
          distance: "5 min walk"
        },
        {
          name: "Coastal Kitchen",
          description: "Farm-to-table restaurant specializing in Mediterranean cuisine with a modern twist.",
          distance: "10 min walk"
        },
        {
          name: "Beachside Taco Shack",
          description: "Casual spot for authentic Mexican street food and refreshing margaritas.",
          distance: "7 min walk"
        }
      ]
    },
    {
      category: "Entertainment",
      icon: <Ticket size={24} />,
      items: [
        {
          name: "New World Symphony",
          description: "World-class concert hall featuring classical music performances and outdoor WALLCAST concerts.",
          distance: "15 min walk"
        },
        {
          name: "Art Deco Historic District",
          description: "Iconic neighborhood with colorful historic buildings and guided walking tours.",
          distance: "10 min walk"
        },
        {
          name: "Pérez Art Museum",
          description: "Contemporary art museum with stunning architecture and waterfront views.",
          distance: "25 min drive"
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
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Local Attractions</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the best beaches, restaurants, shopping, and entertainment options near our apartment.
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
