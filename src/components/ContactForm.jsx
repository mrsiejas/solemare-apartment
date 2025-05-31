import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from '@/lib/i18n';

const ContactForm = () => {
  const { toast } = useToast();
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Sent!",
        description: "We've received your inquiry and will get back to you shortly.",
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        message: ''
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('contact.title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">{t('contact.form.guests')}</Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkIn">{t('contact.form.checkIn')}</Label>
                <Input
                  id="checkIn"
                  name="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkOut">{t('contact.form.checkOut')}</Label>
                <Input
                  id="checkOut"
                  name="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t('contact.form.message')}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t('contact.form.messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
                className="min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>{t('contact.form.submit')}</span>
                </>
              )}
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
