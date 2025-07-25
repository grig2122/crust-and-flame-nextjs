import { useEffect, useRef, useState } from 'react';

interface IntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
  options: IntersectionOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
  const { freezeOnceVisible = true, ...observerOptions } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (freezeOnceVisible) {
            observer.unobserve(entry.target);
          }
        } else if (!freezeOnceVisible) {
          setIsIntersecting(false);
        }
      },
      { threshold: 0.1, ...observerOptions }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [freezeOnceVisible, observerOptions]);

  return [ref, isIntersecting];
};