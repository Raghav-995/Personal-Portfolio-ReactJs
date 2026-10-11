import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll));
      setIsVisible(totalScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-glow-cyan backdrop-blur-md flex items-center justify-center text-brand-cyan hover:scale-110 active:scale-95 transition-all duration-200 group"
    >
      <svg className="w-12 h-12 -rotate-90 pointer-events-none absolute" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r="18"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-slate-800"
          fill="transparent"
        />
        <circle
          cx="22"
          cy="22"
          r="18"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-brand-cyan transition-all duration-100"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
