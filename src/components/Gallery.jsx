import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const t = useTranslation();

  const images = [
    {
      id: 1,
      alt: "Apartament Solemare 46 - Sypialnia",
      description: "Sypialnia z łóżkiem 2 osobowym",
      src: "/images/gallery/IMG-20250419-WA0028.jpg"
    },
    {
      id: 2,
      alt: "Apartament Solemare 46 - Łazienka",
      description: "Łazienka z prysznicem i deszczownicą",
      src: "/images/gallery/IMG-20250419-WA0032.jpg"
    },
    {
      id: 3,
      alt: "Apartament Solemare 46 - Łazienka",
      description: "Łazienka",
      src: "/images/gallery/IMG-20250419-WA0033.jpg"
    },
    {
      id: 4,
      alt: "Solemare Apartament 46 - Kuchnia",
      description: "W  pełni wyposażona kuchnia: średnia lodówka, zmywarka, mikrofalówka i płyta indukcyjna",
      src: "/images/gallery/IMG-20250419-WA0036.jpg"
    },
    {
      id: 5,
      alt: "Solemare Apartament 46 - Korytarz",
      description: "Wejście do mieszkania i korytarz",
      src: "/images/gallery/IMG-20250419-WA0039.jpg"
    },
    {
      id: 6,
      alt: "Solemare Apartament 46 - Duży pokój",
      description: "Przestronny duży pokój z rozkładanym narożnikiem 2 osobowym",
      src: "/images/gallery/IMG-20250419-WA0047.jpg"
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
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('gallery.title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('gallery.subtitle')}
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
              src={image.src}
            />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X size={24} />
              </Button>

              <div className="relative">
                <img
                  alt={images[selectedImage].alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  src={images[selectedImage].src}
                />

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

              <p className="text-white text-center mt-4">{images[selectedImage].description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
