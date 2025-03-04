
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Our Thailand journey exceeded all expectations. The personalized itinerary perfectly balanced cultural experiences with relaxation. Every detail was handled with care, from our luxury accommodations to our knowledgeable local guides."
  },
  {
    id: 2,
    name: "David Chen",
    location: "Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "The team created a flawless experience for our family vacation to Thailand. The kids loved the elephant sanctuary, while we parents appreciated the thoughtful selection of accommodations that were both luxurious and authentic."
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "As a solo traveler, I was looking for both adventure and safety in Thailand. This agency delivered both. My custom itinerary took me from Bangkok's markets to Chiang Mai's mountains and Krabi's beaches with seamless transitions."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col h-full border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-thai-gold fill-current" />
        ))}
      </div>
      
      <p className="text-gray-600 italic flex-grow">{testimonial.text}</p>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section-padding relative bg-white">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-thai-turquoise/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-thai-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <div 
          ref={ref}
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 transition-all duration-500",
            inView ? "opacity-100" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-caption text-thai-turquoise mb-2">Guest Experiences</p>
          <h2 className="heading-lg mb-4">What Our Travelers Say</h2>
          <p className="text-body text-gray-600">
            Read authentic stories from travelers who have experienced Thailand through our carefully crafted journeys.
          </p>
        </div>

        {/* Desktop testimonials grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={cn(
                "transition-all duration-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Mobile testimonials carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === activeIndex ? "bg-thai-turquoise w-4" : "bg-gray-300"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
