import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.3,
    rootMargin = '-50px',
    resetOnExit = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (resetOnExit) {
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, resetOnExit]);

  return { elementRef, isVisible };
};