
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDestinations = () => {
    const destinationsSection = document.querySelector('#destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 scale-110" 
        ref={parallaxRef}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Thailand Temple" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div 
        className="relative z-20 h-full flex items-center justify-center"
        ref={textContainerRef}
      >
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-2 opacity-0 animate-slideDown" style={{ animationDelay: '200ms' }}>
              <p className="text-caption text-white/80">Experience the Land of Smiles</p>
              <h1 className="heading-xl text-white">Discover the Magic of Thailand</h1>
            </div>
            <p className="text-body text-white/90 max-w-xl mx-auto opacity-0 animate-slideUp" style={{ animationDelay: '400ms' }}>
              Immerse yourself in ancient temples, pristine beaches, and vibrant culture with our handcrafted luxury journeys through Thailand.
            </p>
            <div className="pt-4 opacity-0 animate-slideUp" style={{ animationDelay: '600ms' }}>
              <button 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full px-8 py-3 font-medium transition-all duration-300 hover:shadow-lg"
                onClick={scrollToDestinations}
              >
                Explore Destinations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-float cursor-pointer"
        onClick={scrollToDestinations}
      >
        <ChevronDown className="h-8 w-8 text-white opacity-80" />
      </div>
    </section>
  );
};

export default Hero;
