import { useEffect, useRef } from 'react';

export function useFadeUp(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px 50px 0px' }
    );

    observer.observe(el);

    // Fallback: 1 saniye sonra hala visible değilse zorla visible yap (beyaz ekran kalmasını önler)
    const timer = setTimeout(() => {
      if (el && !el.classList.contains('visible')) {
        el.classList.add('visible');
      }
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return ref;
}

export default useFadeUp;
