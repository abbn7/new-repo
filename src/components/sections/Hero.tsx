import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

/**
 * HERO SECTION
 * 
 * Design: Bold, modern hero with animated gradient text
 * - Large display typography with gradient effect
 * - Animated subtitle with typewriter effect
 * - Scroll indicator with bounce animation
 * - Social links with hover effects
 * - CTA buttons with magnetic pull effect
 */
export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Frontend Developer & AI Engineer';
  const [index, setIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [index]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/abbn7', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:202402972@pua.edu.eg', label: 'Email' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 scroll-slide-up">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">Building</span>
                <span className="block text-gradient">Digital Experiences</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                I create responsive, user-friendly websites and web applications using modern web technologies. Specializing in React, JavaScript, and AI-assisted development.
              </p>
            </div>

            {/* Typewriter Subtitle */}
            <div className="h-12 flex items-center">
              <span className="text-xl text-primary font-mono">
                {displayedText}
                <span className="animate-blink">|</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
              <a
                href="#contact"
                className="btn-outline"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hidden lg:flex items-center justify-center scroll-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated circles */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border-2 border-accent/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '4s' }} />
              <div className="absolute inset-16 rounded-full border-2 border-primary/30 animate-pulse-subtle" />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-gradient">AN</div>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
