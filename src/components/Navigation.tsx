import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * NAVIGATION COMPONENT
 * 
 * Design: Glassmorphism navbar with smooth animations
 * - Appears on scroll with blur effect
 * - Active link indicator with smooth transition
 * - Mobile hamburger menu with staggered animations
 * - Sticky positioning with auto-hide on scroll down
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg'
          : 'bg-transparent'
      } ${scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-gradient transition-transform hover:scale-105"
        >
          AN<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleNavClick(link.id)}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Get In Touch
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass bg-background/95 backdrop-blur-xl border-b border-border/50 animate-slide-down">
          <div className="container py-4 space-y-3">
            {navLinks.map((link, i) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`block px-4 py-2 rounded-lg transition-all duration-300 animate-slide-down`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block btn-primary text-center w-full animate-slide-down"
              style={{ animationDelay: `${navLinks.length * 50}ms` }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
