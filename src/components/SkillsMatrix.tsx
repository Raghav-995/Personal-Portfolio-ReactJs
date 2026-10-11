import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { SpotlightCard } from './SpotlightCard';
import { Search, Filter, Layers, CheckCircle, Sparkles } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = PORTFOLIO_DATA.skills.filter((skill) => {
    const matchesCategory =
      selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Expert':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
            PROD EXPERT
          </span>
        );
      case 'Advanced':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-brand-indigo/15 text-brand-indigo border border-brand-indigo/30">
            ADVANCED
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-slate-800 text-slate-300 border border-slate-700">
            PROFICIENT
          </span>
        );
    }
  };

  return (
    <section id="skills" className="relative py-24 border-t border-slate-800/80">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono font-medium mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Engineering Expertise & <span className="text-gradient-cyan">Tech Arsenal</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Battle-tested technologies employed across production microservices, distributed data buses, enterprise RAG engines, and multi-cloud container clusters.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Kafka, AWS, RAG..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-obsidian-card/90 border border-slate-700/80 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PORTFOLIO_DATA.skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 text-brand-cyan border border-brand-cyan/40 shadow-glow-subtle font-semibold'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <SpotlightCard
              key={skill.name}
              className="p-5 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
              glowColor="rgba(56, 189, 248, 0.15)"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center p-2 group-hover:scale-105 group-hover:border-slate-700 transition-transform">
                    <TechIcon name={skill.name} className="w-6 h-6" />
                  </div>
                  {getLevelBadge(skill.level)}
                </div>

                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-slate-100 text-base group-hover:text-brand-cyan transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <div className="text-xs font-mono text-slate-400 mt-1">
                  Category: <span className="text-slate-300">{skill.category}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/70">
                <p className="text-xs text-slate-400 font-mono leading-relaxed flex items-start gap-1.5">
                  <span className="text-brand-cyan font-bold mt-0.5">›</span>
                  <span>{skill.highlight}</span>
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-brand-cyan underline font-mono"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
