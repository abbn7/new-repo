import React, { useState } from 'react';
import { ArrowUp, Heart } from 'lucide-react';

/**
 * FOOTER COMPONENT
 * 
 * Design: Rich footer with links and social
 * - Back-to-top button with progress circle
 * - Links and social media
 * - Copyright and credits
 * - Easter egg in console
 */
export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    // Easter egg
    console.log('%c🚀 Welcome to my portfolio!', 'font-size: 24px; font-weight: bold; color: #6366F1;');
    console.log('%cBuilt with React, TypeScript, and Tailwind CSS', 'font-size: 14px; color: #64748B;');
    console.log('%cLet\'s build something amazing together! 💡', 'font-size: 14px; color: #10B981;');

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">AN<span className="text-accent">.</span></h3>
            <p className="text-sm text-muted-foreground">
              Frontend Developer & AI Engineer crafting beautiful digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: 'GitHub', href: 'https://github.com/abbn7' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Email', href: 'mailto:202402972@pua.edu.eg' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold">Let's Connect</h4>
            <p className="text-sm text-muted-foreground">
              Have a project or opportunity? I'd love to hear from you.
            </p>
            <a href="#contact" className="inline-block btn-primary text-sm">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Abdelhamed Nada. All rights reserved.
          </p>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Abdelhamed</span>
          </div>

          {/* Back to Top Button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 animate-slide-up z-40"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
