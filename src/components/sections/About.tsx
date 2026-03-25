import React, { useEffect, useState } from 'react';
import { Code2, Zap, Target } from 'lucide-react';

/**
 * ABOUT SECTION
 * 
 * Design: Split layout with animated stats
 * - Left: Text content with smooth reveal
 * - Right: Stats with counter animations
 * - Highlight key achievements and expertise
 */
export default function About() {
  const [counters, setCounters] = useState({ projects: 0, experience: 0, clients: 0 });

  useEffect(() => {
    // Counter animation
    const intervals = [
      setInterval(() => setCounters(prev => ({ ...prev, projects: Math.min(prev.projects + 1, 10) })), 50),
      setInterval(() => setCounters(prev => ({ ...prev, experience: Math.min(prev.experience + 0.1, 2) })), 100),
      setInterval(() => setCounters(prev => ({ ...prev, clients: Math.min(prev.clients + 1, 50) })), 30),
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and delivering exceptional user experiences',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Pixel-perfect implementations with attention to detail',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 scroll-slide-up">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
              <p className="text-lg text-muted-foreground">
                I'm a passionate frontend developer with a focus on creating beautiful, functional web experiences.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Abdelhamed Nada, a Frontend Developer skilled in building responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and React. I specialize in creating clean, maintainable code that delivers exceptional user experiences.
              </p>
              <p>
                I'm proficient in Git version control and GitHub collaboration workflows. I have hands-on experience with AI tools including ChatGPT, Claude, and Gemini, leveraging advanced prompt engineering to accelerate development and produce high-quality results efficiently.
              </p>
              <p>
                Currently pursuing my B.Sc. in Computer Science & Artificial Intelligence at Tanta University, I'm actively seeking remote frontend opportunities where I can contribute to innovative projects.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group">
                  <Icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-8 scroll-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-6">
              {/* Projects Stat */}
              <div className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-colors group">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {counters.projects}+
                </div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>

              {/* Experience Stat */}
              <div className="p-8 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 hover:border-accent/40 transition-colors group">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {counters.experience.toFixed(1)}+
                </div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Education & Achievements</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'B.Sc. Computer Science & AI',
                    org: 'Tanta University (PUA)',
                    year: '2024',
                  },
                  {
                    title: 'Frontend Development Specialist',
                    org: 'Self-Taught & Online Courses',
                    year: '2022-2024',
                  },
                  {
                    title: 'AI & Prompt Engineering',
                    org: 'Continuous Learning',
                    year: '2023-Present',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 scroll-slide-up" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mt-1" />
                      {i < 2 && <div className="w-0.5 h-12 bg-border my-2" />}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                      <p className="text-xs text-muted-foreground/60">{item.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
