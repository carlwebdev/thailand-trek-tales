import React from 'react';
import { cn } from '@/lib/utils';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const { ref, inView } = useInViewAnimation({ delay });

  const getDirectionClasses = () => {
    const baseClasses = 'transition-all duration-700';
    if (inView) {
      return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
    }
    
    switch (direction) {
      case 'down':
        return `${baseClasses} opacity-0 -translate-y-8`;
      case 'left':
        return `${baseClasses} opacity-0 translate-x-8`;
      case 'right':
        return `${baseClasses} opacity-0 -translate-x-8`;
      default: // 'up'
        return `${baseClasses} opacity-0 translate-y-8`;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getDirectionClasses(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};