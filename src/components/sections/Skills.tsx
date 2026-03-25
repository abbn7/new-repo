import React from 'react';
import { Code, GitBranch, Zap, Palette, BookOpen, Brain } from 'lucide-react';

/**
 * SKILLS SECTION
 * 
 * Design: Grid layout with skill categories
 * - Icon-based category cards
 * - Skill tags with hover effects
 * - Smooth staggered animations
 */
export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Core',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Responsive Design', 'Flexbox', 'CSS Grid'],
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'Repositories', 'Branches', 'Pull Requests', 'GitHub Pages', 'GitHub Desktop'],
    },
    {
      icon: Brain,
      title: 'AI & Prompting',
      skills: ['ChatGPT', 'Claude', 'Gemini', 'Prompt Engineering', 'AI-Assisted Dev'],
    },
    {
      icon: Zap,
      title: 'Development Tools',
      skills: ['VS Code', 'Browser DevTools', 'Cross-Browser', 'Performance', 'Debugging'],
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: ['Pixel-Perfect', 'Cross-Device', 'Clean UI', 'User Experience', 'Mobile-First'],
    },
    {
      icon: BookOpen,
      title: 'Education',
      skills: ['B.Sc. CS & AI', 'Tanta University', 'Continuous Learning', 'Self-Taught'],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 scroll-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of working on diverse projects
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ icon: Icon, title, skills }, index) => (
            <div
              key={title}
              className="group p-6 rounded-lg border border-border/50 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 scroll-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                {title}
              </h3>

              {/* Skills */}
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/skill"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/skill:bg-primary transition-colors" />
                    {skill}
                  </div>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center scroll-slide-up">
          <p className="text-muted-foreground mb-6">
            Always learning and expanding my skill set with the latest technologies
          </p>
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
