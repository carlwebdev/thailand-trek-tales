
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToDestinations = () => {
    const destinationsSection = document.querySelector('#destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Thailand Temple" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-2 animate-slideDown animate-delay-200">
              <p className="text-caption text-white/80">Experience the Land of Smiles</p>
              <h1 className="heading-xl text-white">Discover the Magic of Thailand</h1>
            </div>
            <p className="text-body text-white/90 max-w-xl mx-auto animate-slideUp animate-delay-400">
              Immerse yourself in ancient temples, pristine beaches, and vibrant culture with our handcrafted luxury journeys through Thailand.
            </p>
            <div className="pt-4 animate-slideUp animate-delay-500">
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/30 hover:border-white/50"
                onClick={scrollToDestinations}
              >
                Explore Destinations
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-float p-2 rounded-full hover:bg-white/10 transition-colors"
        onClick={scrollToDestinations}
        aria-label="Scroll to destinations"
      >
        <ChevronDown className="h-8 w-8 text-white opacity-80" />
      </button>
    </section>
  );
};

export default Hero;
