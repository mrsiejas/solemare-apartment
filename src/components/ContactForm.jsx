import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation, useLanguage } from '@/lib/i18n';
import DatePicker from 'react-datepicker';
import { pl } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";

const ContactForm = () => {
  const { toast } = useToast();
  const t = useTranslation();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [dateError, setDateError] = useState('');

  // Get tomorrow's date for min check-in
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Get max date (1 year from now)
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const validateDates = (start, end) => {
    if (!start || !end) return true;

    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 2) {
      setDateError(t('contact.form.minStayError'));
      return false;
    }
    if (diffDays > 14) {
      setDateError(t('contact.form.maxStayError'));
      return false;
    }

    setDateError('');
    return true;
  };

  const handleCheckInChange = (date) => {
    setCheckIn(date);
    if (checkOut) {
      validateDates(date, checkOut);
    }
  };

  const handleCheckOutChange = (date) => {
    setCheckOut(date);
    if (checkIn) {
      validateDates(checkIn, date);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(t('contact.form.emailError'));
      return false;
    }
    setEmailError('');
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');

    if (!validateEmail(email)) {
      return;
    }

    if (!validateDates(checkIn, checkOut)) {
      return;
    }

    setIsSubmitting(true);

    // Prepare the data for n8n webhook
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      guests: formData.get('guests'),
      checkIn: checkIn ? checkIn.toISOString().split('T')[0] : null,
      checkOut: checkOut ? checkOut.toISOString().split('T')[0] : null,
      message: formData.get('message') || 'none',
      language: language
    };

    try {
      // Send to n8n webhook
      const response = await fetch('https://n8n.izli.eu/webhook/40b6e331-ecd9-4966-aa5c-dc4d637d459c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Show success message
      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
        duration: 5000,
      });

      // Reset form
      e.target.reset();
      setCheckIn(null);
      setCheckOut(null);
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle phone number input to allow only integers
  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/[^\d]/g, '');
  };

  // Handle email input validation
  const handleEmailInput = (e) => {
    validateEmail(e.target.value);
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
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  onInput={handleEmailInput}
                  placeholder="example@email.com"
                />
                {emailError && (
                  <p className="text-sm text-red-500">{emailError}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9]*"
                  onInput={handlePhoneInput}
                  autoComplete="tel"
                  placeholder="123456789"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">{t('contact.form.guests')}</Label>
                <select
                  id="guests"
                  name="guests"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkIn">{t('contact.form.checkIn')}</Label>
                <div className="w-full">
                  <DatePicker
                    selected={checkIn}
                    onChange={handleCheckInChange}
                    selectsStart
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={tomorrow}
                    maxDate={maxDate}
                    dateFormat="dd/MM/yyyy"
                    locale={pl}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholderText="DD/MM/YYYY"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkOut">{t('contact.form.checkOut')}</Label>
                <div className="w-full">
                  <DatePicker
                    selected={checkOut}
                    onChange={handleCheckOutChange}
                    selectsEnd
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={checkIn || tomorrow}
                    maxDate={maxDate}
                    dateFormat="dd/MM/yyyy"
                    locale={pl}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholderText="DD/MM/YYYY"
                    required
                  />
                </div>
                {dateError && <p className="text-sm text-red-500 mt-1">{dateError}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t('contact.form.message')}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t('contact.form.messagePlaceholder')}
                className="min-h-[100px]"
                required
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
