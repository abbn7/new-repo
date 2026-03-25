import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

/**
 * PROJECTS SECTION
 * 
 * Design: Grid layout with project cards
 * - Image placeholders with gradient overlays
 * - Hover effects with image zoom
 * - Tech stack badges
 * - Links to GitHub and live demos
 */
export default function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A fully responsive portfolio website built from scratch using HTML, CSS, and JavaScript. Features smooth animations, mobile-first layout, and clean UI structure. Deployed via GitHub Pages.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
      github: 'https://github.com/abbn7',
      live: 'https://abbn7.github.io',
      color: 'from-primary/20 to-accent/20',
    },
    {
      title: 'Interactive Web Application',
      description: 'A dynamic single-page application with clean component architecture and DOM manipulation. Focused on consistent UX, cross-browser compatibility, and performance optimization.',
      tags: ['React', 'JavaScript', 'DOM Manipulation', 'Responsive'],
      github: 'https://github.com/abbn7',
      color: 'from-accent/20 to-primary/20',
    },
    {
      title: 'Landing Page Projects',
      description: 'Multiple pixel-perfect, responsive landing pages from design references. Applied Flexbox and CSS Grid layouts for accurate, cross-device rendering. Focused on clean code and maintainable structure.',
      tags: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid'],
      github: 'https://github.com/abbn7',
      color: 'from-primary/30 to-primary/10',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 scroll-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-lg overflow-hidden border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 scroll-slide-up flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-gradient opacity-50">
                      {index + 1}
                    </div>
                    <p className="text-sm text-muted-foreground">Project</p>
                  </div>
                </div>
                {/* Hover zoom effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm font-medium group/link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center scroll-slide-up">
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my GitHub profile for additional projects
          </p>
          <a href="https://github.com/abbn7" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
