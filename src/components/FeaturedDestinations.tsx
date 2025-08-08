
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { Button } from '@/components/ui/button';

const destinations = [
  {
    id: 1,
    name: 'Bangkok',
    description: 'Explore the vibrant capital city with its ornate shrines, bustling markets, and modern skyline.',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c8dd0b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Urban', 'Culture', 'Gastronomy']
  },
  {
    id: 2,
    name: 'Phuket',
    description: 'Relax on pristine beaches, discover hidden coves, and experience luxury island living.',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Beaches', 'Luxury', 'Island']
  },
  {
    id: 3,
    name: 'Chiang Mai',
    description: 'Immerse yourself in the cultural heart of northern Thailand with ancient temples and mountain landscapes.',
    image: 'https://images.unsplash.com/photo-1598935898639-81631fe31338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Nature', 'Temples', 'Mountains']
  },
  {
    id: 4,
    name: 'Koh Samui',
    description: 'Find your perfect island escape with palm-fringed beaches, clear waters, and luxury resorts.',
    image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Resort', 'Island', 'Beaches']
  }
];

const DestinationCard = ({ destination, index }: { destination: typeof destinations[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeInSection delay={index * 100}>
      <div 
        className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl h-[500px] transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0">
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10 transition-opacity duration-500",
              isHovered ? 'opacity-90' : 'opacity-70'
            )}
          />
          <img 
            src={destination.image} 
            alt={destination.name} 
            className={cn(
              "h-full w-full object-cover transition-all duration-700",
              isHovered ? 'scale-110' : 'scale-100'
            )}
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap mb-3">
              {destination.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-serif font-medium">{destination.name}</h3>
            <p className="text-sm text-white/80 max-w-xs">{destination.description}</p>
            
            <div className={cn(
              "pt-4 transform transition-all duration-500",
              isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              <Button 
                size="sm" 
                className="bg-white text-foreground hover:bg-white/90"
              >
                Explore Destination
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

const FeaturedDestinations = () => {
  return (
    <section id="destinations" className="section-padding bg-background">
      <div className="container-custom">
        <FadeInSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-caption text-primary mb-2">Discover Thailand</p>
          <h2 className="heading-lg mb-4">Featured Destinations</h2>
          <p className="text-body text-muted-foreground">
            From bustling cities to serene beaches and ancient temples, Thailand offers a diverse range of experiences for every traveler.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
