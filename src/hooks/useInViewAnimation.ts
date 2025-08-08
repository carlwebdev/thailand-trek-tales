import { useInView } from 'react-intersection-observer';

interface UseInViewAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useInViewAnimation = (options: UseInViewAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0
  } = options;

  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  const getAnimationClasses = (baseClasses = '') => {
    return `${baseClasses} transition-all duration-700 ${
      inView 
        ? 'opacity-100 translate-y-0 translate-x-0' 
        : 'opacity-0 translate-y-8'
    }`;
  };

  const getStaggeredStyle = (index: number) => ({
    transitionDelay: `${(delay + index * 100)}ms`
  });

  return {
    ref,
    inView,
    getAnimationClasses,
    getStaggeredStyle
  };
};