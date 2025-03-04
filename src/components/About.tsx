
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { Shield, Star, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Expert Local Guides',
    description: 'Our handpicked local guides offer authentic insights and unparalleled knowledge of Thailand\'s hidden gems.',
    icon: Users
  },
  {
    id: 2,
    title: 'Luxury Experience',
    description: 'From boutique hotels to 5-star resorts, we curate accommodations that reflect Thailand\'s unique charm and luxury.',
    icon: Star
  },
  {
    id: 3,
    title: 'Safe Travel Promise',
    description: 'Your safety is our priority with 24/7 support and comprehensive travel insurance options for peace of mind.',
    icon: Shield
  }
];

const About = () => {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div 
            ref={imageRef} 
            className={cn(
              "rounded-lg overflow-hidden relative transition-all duration-700",
              imageInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="aspect-w-4 aspect-h-5 relative">
              <div className="absolute inset-0 bg-thai-turquoise/10 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Traditional Thai longtail boat on tropical water" 
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
            <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 -z-10">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-thai-gold/10 blur-3xl"></div>
            </div>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={cn(
              "transition-all duration-700",
              contentInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <p className="text-caption text-thai-turquoise mb-2">About Us</p>
            <h2 className="heading-lg mb-6">Your Thailand Journey Specialists</h2>
            <p className="text-body text-gray-600 mb-6">
              With over 15 years of experience crafting bespoke journeys through Thailand, 
              we combine local expertise with luxury service to create unforgettable travel experiences.
            </p>
            <p className="text-body text-gray-600 mb-8">
              Our team of travel specialists has explored every corner of Thailand, 
              from hidden beaches to mountain villages, ensuring you experience the authentic heart of this extraordinary country.
            </p>
            
            <div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            >
              {features.map((feature, index) => (
                <div 
                  key={feature.id} 
                  className={cn(
                    "transition-all duration-500",
                    featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-thai-turquoise/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-thai-turquoise" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
