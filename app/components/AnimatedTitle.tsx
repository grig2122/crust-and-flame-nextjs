'use client';

import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

interface AnimatedTitleProps {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};