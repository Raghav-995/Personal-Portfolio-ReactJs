import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import {
  Mail,
  Copy,
  Check,
  Send,
  Linkedin,
  Github,
  MapPin,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { contact, personal } = PORTFOLIO_DATA;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);

  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    roleType: 'Full-time Senior / Staff Role',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(personal.github);
    setCopiedGithub(true);
    setTimeout(() => setCopiedGithub(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#38bdf8', '#818cf8', '#34d399', '#ffffff']
      });

      // Clear form
      setFormState({
        name: '',
        email: '',
        roleType: 'Full-time Senior / Staff Role',
        message: '',
      });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 border-t border-slate-800/80">
      {/* Background Accent Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {contact.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <SpotlightCard
              className="p-6 border-slate-800 bg-obsidian-card/90"
              glowColor="rgba(56, 189, 248, 0.16)"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Inquiries</div>
                    <div className="text-sm font-bold text-white">Email Address</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-brand-cyan text-slate-300 hover:text-white transition-all text-xs font-mono"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-emerald" />
                      <span className="text-brand-emerald font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="font-mono text-xs sm:text-sm text-slate-300 bg-slate-950/70 p-3 rounded-lg border border-slate-800/80 truncate">
                {contact.email}
              </div>
            </SpotlightCard>

            {/* Quick Profiles Card */}
            <SpotlightCard
              className="p-6 border-slate-800 bg-obsidian-card/90"
              glowColor="rgba(129, 140, 248, 0.14)"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Engineering Channels
              </div>

              <div className="space-y-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#0077b5]" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">LinkedIn</div>
                      <div className="text-[11px] font-mono text-slate-400">in/raghavendra995</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-brand-cyan">Connect &rarr;</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-200" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">GitHub</div>
                      <div className="text-[11px] font-mono text-slate-400">@raghav-995</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-brand-cyan">Follow &rarr;</span>
                </a>
              </div>
            </SpotlightCard>

            {/* Availability & Location Callout */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-cyan" />
                <span>Base: {personal.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-brand-emerald" />
                <span>Interview Turnaround: Within 24 Hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <SpotlightCard
              className="p-6 sm:p-8 border-slate-800 bg-obsidian-card/95"
              glowColor="rgba(56, 189, 248, 0.16)"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">Send Direct Message</h3>
                  <p className="text-xs text-slate-400 font-mono">Immediate notification routed to primary inbox</p>
                </div>
                <ShieldCheck className="w-5 h-5 text-brand-emerald" />
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-brand-emerald/20 border border-brand-emerald/40 text-brand-emerald flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Dispatched Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I have received your message and will review your opportunity within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-200 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name / Recruiter <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Vance"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Work Email <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="roleType" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      id="roleType"
                      value={formState.roleType}
                      onChange={(e) => setFormState({ ...formState, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-brand-cyan transition-all"
                    >
                      <option value="Full-time Senior / Staff Role">Full-time Senior / Staff Role</option>
                      <option value="Contract / Cloud Architecture">Contract / Cloud Architecture</option>
                      <option value="Generative AI / LLM Consulting">Generative AI / LLM Consulting</option>
                      <option value="Technical Networking / Discussion">Technical Networking / Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Role Overview or Message <span className="text-brand-cyan">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Raghavendra, we loved your distributed systems & GenAI experience. We'd love to chat regarding..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-cyan to-brand-indigo text-obsidian shadow-glow-cyan hover:opacity-95 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Transmitting message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
