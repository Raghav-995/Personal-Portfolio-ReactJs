import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Github, Linkedin, Heart, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-obsidian py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-cyan">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">Pathak Raghavendra</span>
              <span className="text-slate-500 ml-2 font-mono">(@raghav-995)</span>
            </div>
          </div>

          {/* Operational Status Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            <span>Systems Optimal &bull; ap-south-1 (Hyderabad)</span>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Built With */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-slate-500">
          <div>
            &copy; {currentYear} Pathak Raghavendra. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="text-brand-cyan font-semibold">React 18</span>
            <span>&bull;</span>
            <span className="text-brand-indigo font-semibold">Tailwind CSS</span>
            <span>&bull;</span>
            <span className="text-brand-violet font-semibold">TypeScript & Vite</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
