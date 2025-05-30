
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
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
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions or ready to book? Reach out to us and we'll get back to you as soon as possible.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send an Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="+1 (555) 123-4567" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input 
                    id="guests" 
                    name="guests" 
                    type="number" 
                    min="1" 
                    max="6" 
                    value={formData.guests} 
                    onChange={handleChange} 
                    placeholder="2" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="checkIn">Check-in Date</Label>
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
                  <Label htmlFor="checkOut">Check-out Date</Label>
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
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Any special requests or questions?" 
                  rows={4} 
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
                    <span>Send Inquiry</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            
            <div className="space-y-6">
              <ContactInfo 
                icon={<Phone size={24} />} 
                title="Phone" 
                content="+1 (305) 555-1234" 
                action="tel:+13055551234" 
                actionText="Call Us" 
              />
              
              <ContactInfo 
                icon={<Mail size={24} />} 
                title="Email" 
                content="info@coastalhaven.com" 
                action="mailto:info@coastalhaven.com" 
                actionText="Email Us" 
              />
              
              <ContactInfo 
                icon={<MapPin size={24} />} 
                title="Address" 
                content="123 Oceanfront Drive, Miami Beach, FL 33139, United States" 
                action="https://maps.google.com/?q=Miami+Beach,FL" 
                actionText="Get Directions" 
              />
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Business Hours</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content, action, actionText }) => (
  <div>
    <div className="flex items-start gap-4">
      <div className="text-primary mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600 mb-2">{content}</p>
        <a 
          href={action} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:underline text-sm font-medium"
        >
          {actionText}
        </a>
      </div>
    </div>
  </div>
);

export default ContactForm;
