import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

/**
 * EXPERIENCE SECTION
 * 
 * Design: Vertical timeline with smooth animations
 * - Timeline connector lines
 * - Hover effects on timeline items
 * - Staggered animations
 */
export default function Experience() {
  const experiences = [
    {
      title: 'Landing Page Projects',
      company: 'Self-Employed',
      period: '2022 - Present',
      description: 'Multiple pixel-perfect, responsive landing pages from design references. Applied Flexbox and CSS Grid layouts for accurate, cross-device rendering.',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox', 'CSS Grid'],
    },
    {
      title: 'Interactive Web Applications',
      company: 'Self-Employed',
      period: '2023 - Present',
      description: 'Dynamic single-page applications with clean component architecture and DOM manipulation. Focused on consistent UX, cross-browser compatibility, and performance optimization.',
      skills: ['React', 'JavaScript', 'DOM Manipulation', 'Responsive Design'],
    },
    {
      title: 'Personal Portfolio Website',
      company: 'Self-Employed',
      period: '2024 - Present',
      description: 'A fully responsive portfolio website built from scratch. Features smooth animations, mobile-first layout, and clean UI structure. Deployed via GitHub Pages.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Animations'],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 scroll-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey through various roles and projects
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative scroll-slide-up ${index % 2 === 0 ? 'md:text-right' : ''}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10`} />

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-1/2`}>
                    <div className="p-6 rounded-lg border border-border/50 bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                        </div>
                        <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center scroll-slide-up">
          <p className="text-muted-foreground mb-6">
            Looking for more details? Check out my GitHub or get in touch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/abbn7" target="_blank" rel="noopener noreferrer" className="btn-outline">
              View on GitHub
            </a>
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
