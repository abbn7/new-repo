import React, { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParticles } from '@/hooks/useParticles';

/**
 * HOME PAGE - Professional Portfolio
 * 
 * Design Philosophy: Sophisticated, Modern, Intentional
 * - Layered depth with strategic shadows and gradients
 * - Fluid animations that respond to scroll
 * - Premium typography with clear hierarchy
 * - Interactive micro-interactions on hover
 */
export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize scroll animations
  useScrollAnimation();

  // Initialize particles in hero
  useParticles(canvasRef);

  // Track scroll progress for animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0"
        style={{ opacity: 0.5 }}
      />

      {/* Scroll progress indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
