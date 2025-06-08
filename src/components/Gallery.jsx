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
      alt: t('gallery.images.bedroom.alt'),
      description: t('gallery.images.bedroom.description'),
      src: "/images/gallery/gallery_01.jpg"
    },
    {
      id: 2,
      alt: t('gallery.images.bathroom1.alt'),
      description: t('gallery.images.bathroom1.description'),
      src: "/images/gallery/gallery_02.jpg"
    },
    {
      id: 3,
      alt: t('gallery.images.bathroom2.alt'),
      description: t('gallery.images.bathroom2.description'),
      src: "/images/gallery/gallery_03.jpg"
    },
    {
      id: 4,
      alt: t('gallery.images.kitchen.alt'),
      description: t('gallery.images.kitchen.description'),
      src: "/images/gallery/gallery_04.jpg"
    },
    {
      id: 5,
      alt: t('gallery.images.hallway.alt'),
      description: t('gallery.images.hallway.description'),
      src: "/images/gallery/gallery_05.jpg"
    },
    {
      id: 6,
      alt: t('gallery.images.beach.alt'),
      description: t('gallery.images.beach.description'),
      src: "/images/gallery/gallery_09.jpg"
    },
    {
      id: 7,
      alt: t('gallery.images.terrace.alt'),
      description: t('gallery.images.terrace.description'),
      src: "/images/gallery/gallery_06.jpg"
    },
    {
      id: 8,
      alt: t('gallery.images.pool.alt'),
      description: t('gallery.images.pool.description'),
      src: "/images/gallery/gallery_07.jpg"
    },
    {
      id: 9,
      alt: t('gallery.images.view.alt'),
      description: t('gallery.images.view.description'),
      src: "/images/gallery/gallery_08.jpg"
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
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                  onClick={closeLightbox}
                >
                  <X size={24} />
                </Button>

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
