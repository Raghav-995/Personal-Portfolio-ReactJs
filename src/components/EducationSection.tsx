import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="relative py-28 border-t border-slate-800/80 bg-obsidian-surface/20">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-indigo/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education & <span className="text-gradient-cyan">Foundations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Formal computer science engineering degree with strong foundations in algorithms, operating systems, and mathematics.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <SpotlightCard
              key={edu.institution}
              className="p-6 sm:p-7 border-slate-800 bg-obsidian-card/95 flex flex-col justify-between"
              glowColor="rgba(129, 140, 248, 0.14)"
            >
              <div>
                {/* Header: Score badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-cyan">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/30">
                    {edu.score}
                  </span>
                </div>

                {/* Degree & Field */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-brand-cyan mb-2">
                  {edu.field}
                </div>

                {/* Institution & Location */}
                <div className="text-xs text-slate-300 font-medium mb-1">
                  {edu.institution}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>

                {/* Details */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {edu.details}
                </p>
              </div>

              {/* Coursework / Highlights */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3 text-brand-indigo" />
                  <span>Key Coursework & Domains</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
