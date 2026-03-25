import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

/**
 * CONTACT SECTION
 * 
 * Design: Split layout with contact form and info
 * - Contact form with validation
 * - Contact information cards
 * - Social links
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '202402972@pua.edu.eg',
      href: 'mailto:202402972@pua.edu.eg',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 1096144345',
      href: 'tel:+201096144345',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Egypt',
      href: '#',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 scroll-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8 scroll-slide-up">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors truncate">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="p-6 rounded-lg border-2 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold">Currently Available</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to remote frontend opportunities and freelance projects
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Follow Me</h3>
              <div className="flex gap-3">
                {[
                  { name: 'GitHub', url: 'https://github.com/abbn7' },
                  { name: 'LinkedIn', url: 'https://linkedin.com' },
                  { name: 'Twitter', url: 'https://twitter.com' },
                ].map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="scroll-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? 'Message Sent!' : 'Send Message'}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-sm animate-slide-up">
                  ✓ Thanks for reaching out! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
