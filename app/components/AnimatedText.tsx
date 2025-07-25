'use client';

import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};