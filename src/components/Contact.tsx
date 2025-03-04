
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for your interest! We'll contact you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        travelDate: '',
        message: ''
      });
    }, 1000);
  };

  const contactDetails = [
    { icon: Phone, title: "Call Us", content: "+66 2 123 4567" },
    { icon: Mail, title: "Email Us", content: "info@thailandtrek.com" },
    { icon: MapPin, title: "Visit Our Office", content: "123 Sukhumvit Road, Bangkok, Thailand" }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div 
          ref={ref}
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 transition-all duration-500",
            inView ? "opacity-100" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-caption text-thai-turquoise mb-2">Get In Touch</p>
          <h2 className="heading-lg mb-4">Start Planning Your Journey</h2>
          <p className="text-body text-gray-600">
            Contact our Thailand travel specialists to craft your perfect customized itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className={cn(
              "bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <h3 className="text-2xl font-serif mb-6">Send Us an Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thai-turquoise/50 focus:border-thai-turquoise transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thai-turquoise/50 focus:border-thai-turquoise transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thai-turquoise/50 focus:border-thai-turquoise transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Approximate Travel Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thai-turquoise/50 focus:border-thai-turquoise transition-colors pl-10"
                    placeholder="MM/YYYY or Flexible"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Travel Interests
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thai-turquoise/50 focus:border-thai-turquoise transition-colors resize-none"
                  placeholder="Tell us about your travel preferences, interests, and any specific destinations in Thailand you'd like to visit."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3 px-6 rounded-md text-white font-medium transition-all",
                  isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-thai-turquoise hover:bg-thai-turquoise/90 shadow-sm hover:shadow"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div 
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-thai-turquoise/10 flex items-center justify-center mr-4">
                      <detail.icon className="w-5 h-5 text-thai-turquoise" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{detail.title}</h4>
                      <p className="text-gray-600">{detail.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Thailand Map or Imagery */}
            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Map of Thailand"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
