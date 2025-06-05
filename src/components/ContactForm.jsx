import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from '@/lib/i18n';
import { useForm, ValidationError } from '@formspree/react';
import DatePicker from 'react-datepicker';
import { pl } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";

const ContactForm = () => {
  const { toast } = useToast();
  const t = useTranslation();
  const [state, handleSubmit] = useForm("xovwaplo");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [dateError, setDateError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Function to send email notification using Formspree
  const sendEmailNotification = async (email, subject, message) => {
    try {
      const notificationData = new FormData();
      notificationData.append('email', email);
      notificationData.append('subject', subject);
      notificationData.append('message', message);

      const response = await fetch('https://formspree.io/f/xovwaplo', {
        method: 'POST',
        body: notificationData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        console.error('Error sending notification:', await response.text());
      }
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const email = formData.get('email');

    if (!validateEmail(email)) {
      setIsSubmitting(false);
      return;
    }

    if (!validateDates(checkIn, checkOut)) {
      setIsSubmitting(false);
      return;
    }

    // Add dates to formData
    if (checkIn) {
      const year = checkIn.getFullYear();
      const month = String(checkIn.getMonth() + 1).padStart(2, '0');
      const day = String(checkIn.getDate()).padStart(2, '0');
      formData.set('checkIn', `${year}-${month}-${day}`);
    }
    if (checkOut) {
      const year = checkOut.getFullYear();
      const month = String(checkOut.getMonth() + 1).padStart(2, '0');
      const day = String(checkOut.getDate()).padStart(2, '0');
      formData.set('checkOut', `${year}-${month}-${day}`);
    }

    // Convert FormData to a plain object for n8n
    const data = Object.fromEntries(formData.entries());

    const n8nWebhookUrl = 'https://n8n.izli.eu/webhook/40b6e331-ecd9-4966-aa5c-dc4d637d459c';

    // Send to n8n webhook
    try {
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        console.error('Failed to send form data to n8n:', response.status, response.statusText);
        toast({
          title: t('contact.form.error.title'),
          description: `Failed to send to n8n: ${response.status}`,
          variant: "destructive",
          duration: 5000,
        });
        setIsSubmitting(false);
        return;
      }

      // Get the response from n8n
      const responseData = await response.json();

      // If the response contains alternative dates, send an email notification
      if (responseData.alternativeDates) {
        await sendEmailNotification(
          email,
          'Informacja o rezerwacji - Solemare Apartment',
          responseData.alternativeDates
        );
      }

    } catch (error) {
      console.error('Error sending form data to n8n:', error);
      toast({
        title: t('contact.form.error.title'),
        description: `Error sending to n8n: ${error.message}`,
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
      return;
    }

    // Send to Formspree
    // To disable Formspree submission, comment out the following try-catch block
    try {
      // Create a new FormData instance for Formspree
      const formspreeFormData = new FormData();
      formspreeFormData.append('name', data.name);
      formspreeFormData.append('email', data.email);
      formspreeFormData.append('phone', data.phone);
      formspreeFormData.append('guests', data.guests);
      formspreeFormData.append('checkIn', data.checkIn);
      formspreeFormData.append('checkOut', data.checkOut);
      formspreeFormData.append('message', data.message || '');

      // Submit to Formspree
      const formspreeResponse = await fetch('https://formspree.io/f/xovwaplo', {
        method: 'POST',
        body: formspreeFormData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!formspreeResponse.ok) {
        console.error('Error submitting to Formspree:', await formspreeResponse.text());
      }
    } catch (error) {
      console.error('Error submitting form to Formspree:', error);
      // We don't show error toast for Formspree as it's secondary
    }

    // Show success message and reset form
    toast({
      title: t('contact.form.success.title'),
      description: t('contact.form.success.description'),
      duration: 5000,
    });
    e.target.reset();
    setCheckIn(null);
    setCheckOut(null);
    setEmailError('');
    setDateError('');
    setIsSubmitting(false);
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
                <ValidationError prefix="Name" field="name" errors={state.errors} />
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
                <ValidationError prefix="Email" field="email" errors={state.errors} />
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
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
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
                <ValidationError prefix="Guests" field="guests" errors={state.errors} />
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
                <ValidationError prefix="Check-in" field="checkIn" errors={state.errors} />
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
                <ValidationError prefix="Check-out" field="checkOut" errors={state.errors} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t('contact.form.message')}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t('contact.form.messagePlaceholder')}
                className="min-h-[100px]"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                  {t('contact.form.sending')}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t('contact.form.submit')}
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
