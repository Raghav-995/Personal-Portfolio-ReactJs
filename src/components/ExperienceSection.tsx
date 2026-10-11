import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { TechIcon } from './TechIcon';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Building,
  Sparkles,
  Award
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="relative py-28 border-t border-slate-800/80">
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Work <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Production engineering track record across national public-service microservices, cloud lab infrastructure, and full-stack healthcare platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-12">
          {experience.map((exp, index) => (
            <div key={exp.company} className="relative group">
              
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-slate-900 border-2 border-brand-cyan flex items-center justify-center group-hover:scale-125 transition-transform duration-200 group-hover:shadow-glow-cyan">
                <div className="w-2 h-2 rounded-full bg-brand-cyan" />
              </div>

              {/* Experience Card */}
              <SpotlightCard
                className="p-6 sm:p-8 border-slate-800 bg-obsidian-card/95"
                glowColor="rgba(56, 189, 248, 0.14)"
              >
                {/* Header: Role, Company & Meta */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 mb-5 border-b border-slate-800/80 gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm sm:text-base">
                      <Building className="w-4 h-4 text-brand-indigo" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      <span className="text-slate-200">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-brand-indigo" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points of Impact */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Environment:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/80 text-slate-300 border border-slate-800"
                    >
                      <TechIcon name={tech} className="w-3 h-3" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
