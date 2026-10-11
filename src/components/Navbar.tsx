import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Education', href: '#education' },
    { label: 'GitHub', href: '#github' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian/85 backdrop-blur-xl border-b border-slate-800/80 shadow-glass py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Handle */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/30 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-brand-cyan/60 group-hover:shadow-glow-cyan">
              <Terminal className="w-5 h-5 text-brand-cyan transition-transform group-hover:rotate-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 tracking-tight text-base sm:text-lg flex items-center gap-1.5">
                Raghav-995
                <span className="inline-block w-2 h-2 rounded-full bg-brand-emerald animate-pulse" title="Ready to interview" />
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-tight hidden sm:block">
                Full Stack & Cloud Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-obsidian-card/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 text-brand-cyan border border-brand-cyan/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions & Social Links */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0077b5] hover:border-slate-700 hover:bg-slate-800/80 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-cyan to-brand-indigo text-obsidian shadow-glow-cyan hover:opacity-95 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30"
            >
              Connect
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-card/95 backdrop-blur-2xl border-b border-slate-800/90 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-brand-cyan transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-brand-cyan text-obsidian shadow-glow-cyan"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
