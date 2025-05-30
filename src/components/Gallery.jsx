
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      alt: "Modern apartment living room with ocean view",
      description: "Spacious living room with comfortable seating and panoramic ocean views"
    },
    {
      id: 2,
      alt: "Luxury bedroom with king size bed",
      description: "Master bedroom with king-size bed, premium linens, and direct balcony access"
    },
    {
      id: 3,
      alt: "Modern kitchen with stainless steel appliances",
      description: "Fully equipped gourmet kitchen with high-end appliances and breakfast bar"
    },
    {
      id: 4,
      alt: "Elegant bathroom with walk-in shower",
      description: "Spa-like bathroom featuring a walk-in rainfall shower and luxury fixtures"
    },
    {
      id: 5,
      alt: "Private balcony with ocean view",
      description: "Private balcony with comfortable seating perfect for enjoying sunset views"
    },
    {
      id: 6,
      alt: "Dining area with ocean view",
      description: "Elegant dining area with seating for six and stunning ocean views"
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="gallery" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Apartment Gallery</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Take a visual tour of our beautiful apartment and imagine your perfect stay.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(index)}
          >
            <img  
              alt={image.alt} 
              className="w-full h-64 object-cover"
             src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 text-white z-10 bg-black/50 hover:bg-black/70"
                onClick={closeLightbox}
              >
                <X size={24} />
              </Button>
              
              <div className="relative">
                <img  
                  alt={images[selectedImage].alt} 
                  className="w-full h-auto max-h-[80vh] object-contain"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(-1);
                  }}
                  disabled={selectedImage === 0}
                >
                  <ChevronLeft size={24} />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(1);
                  }}
                  disabled={selectedImage === images.length - 1}
                >
                  <ChevronRight size={24} />
                </Button>
              </div>
              
              <p className="text-white text-center mt-4">{images[selectedImage].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
