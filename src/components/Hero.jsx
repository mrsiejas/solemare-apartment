import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const Hero = () => {
  const t = useTranslation();

  const scrollToApartment = () => {
    const element = document.getElementById('apartment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/hero-bg.jpg")'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-100 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg"
              onClick={() => {
                const availabilitySection = document.getElementById('availability');
                if (availabilitySection) {
                  availabilitySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('hero.cta')}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          onClick={scrollToApartment}
        >
          <ArrowDown size={24} />
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
