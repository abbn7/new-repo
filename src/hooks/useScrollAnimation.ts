import { useEffect, useState } from 'react';

/**
 * Hook for triggering animations when elements come into view
 * Uses Intersection Observer API for optimal performance
 */
export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Optional: Stop observing after animation
          // observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, observerOptions);

    // Observe all scroll-animated elements
    const elements = document.querySelectorAll(
      '.scroll-fade, .scroll-slide-up, .scroll-scale'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/**
 * Hook for parallax scroll effect
 */
export function useParallax(speed = 0.5) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('[data-parallax]');

      elements.forEach((element) => {
        const el = element as HTMLElement;
        const offset = el.offsetTop;
        const elementSpeed = parseFloat(el.getAttribute('data-parallax') || '0.5');
        el.style.transform = `translateY(${(scrollY - offset) * elementSpeed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
}

/**
 * Hook for counter animations (counting up numbers)
 */
export function useCounterAnimation(targetValue: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * targetValue);
      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [targetValue, duration]);

  return count;
}

/**
 * Hook for text reveal animations
 */
export function useTextReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-text-reveal]');

    elements.forEach((element) => {
      const text = element.textContent || '';
      element.innerHTML = text
        .split('')
        .map((char, i) => `<span style="animation-delay: ${i * 30}ms">${char}</span>`)
        .join('');
    });
  }, []);
}
