import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Terminal as TerminalIcon,
  Copy,
  Check,
  Play,
  Sparkles,
  MapPin,
  Briefcase,
  Layers,
  ExternalLink,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Hero: React.FC = () => {
  const { personal, heroTerminal } = PORTFOLIO_DATA;

  // Dynamic typing animation state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Terminal state
  const [activeTab, setActiveTab] = useState<'json' | 'bash' | 'health'>('json');
  const [copied, setCopied] = useState(false);
  const [isRunningPing, setIsRunningPing] = useState(false);
  const [pingResult, setPingResult] = useState<string | null>(null);

  // Typing effect loop
  useEffect(() => {
    const fullText = personal.subRoles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(75);

        if (currentText === fullText) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backwards
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personal.subRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, personal.subRoles, typingSpeed]);

  const handleCopyJSON = () => {
    const textToCopy = JSON.stringify(heroTerminal.jsonStatus, null, 2);
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunPing = () => {
    setIsRunningPing(true);
    setPingResult(null);
    setTimeout(() => {
      setIsRunningPing(false);
      setPingResult("HTTP/2 200 OK | p99: 14ms | 0 packet loss | cluster: hyd-prod-01 (ACTIVE)");
    }, 600);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Subtle Background Glow Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[350px] bg-brand-indigo/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Rotating Role, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 shadow-sm mb-6 hover:border-brand-cyan/40 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald" />
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wide">
                {personal.statusBadge}
              </span>
              <span className="text-xs text-slate-500 font-mono hidden sm:inline">|</span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-cyan" /> {personal.location}
              </span>
            </div>

            {/* High-Impact Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] mb-4 text-white">
              Building Resilient <span className="text-gradient-cyan">Microservices</span>, Distributed Cloud Architectures & <span className="text-gradient-accent">GenAI Systems</span>.
            </h1>

            {/* Dynamic Rotating Role Sub-headline */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-mono text-slate-300 min-h-[38px] mb-6">
              <span className="text-brand-cyan font-bold">&gt;</span>
              <span className="text-white font-semibold">{currentText}</span>
              <span className="inline-block w-2.5 h-6 bg-brand-cyan animate-pulse align-middle" />
            </div>

            {/* Tagline / Mission */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              {personal.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-cyan to-brand-indigo text-obsidian shadow-glow-cyan hover:opacity-95 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Flagship Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary Buttons */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-200"
              >
                <span>Get in Touch</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-slate-900/60 text-slate-300 border border-slate-800 hover:bg-slate-800/80 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-200"
              >
                <TerminalIcon className="w-4 h-4 text-brand-cyan" />
                <span>GitHub @{personal.handle}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Key Engineering Pillars Preview */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">Java / Spring</div>
                <div className="text-xs text-slate-400">Kafka & Microservices</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-cyan">AWS / K8s</div>
                <div className="text-xs text-slate-400">Terraform & Docker</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-violet">GenAI / LLMs</div>
                <div className="text-xs text-slate-400">LangChain & Vector DBs</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Terminal / Code Window */}
          <div className="lg:col-span-5 w-full">
            <SpotlightCard
              className="border-slate-700/60 shadow-2xl bg-obsidian-card/95"
              glowColor="rgba(56, 189, 248, 0.16)"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">raghav-node-01</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab('json')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'json'
                        ? 'bg-slate-800 text-brand-cyan border border-brand-cyan/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    status.json
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('bash')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'bash'
                        ? 'bg-slate-800 text-brand-cyan border border-brand-cyan/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    curl.sh
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('health')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'health'
                        ? 'bg-slate-800 text-brand-cyan border border-brand-cyan/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    live_ping
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[340px] flex flex-col justify-between">
                {activeTab === 'json' && (
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800/60 text-slate-400 text-xs">
                      <span>// Live API Profile Response</span>
                      <button
                        type="button"
                        onClick={handleCopyJSON}
                        className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        title="Copy JSON response"
                      >
                        {copied ? (
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

                    <pre className="text-slate-300">
                      <code>
                        {`{\n`}
                        <span className="code-token-property">  "engineer"</span>: <span className="code-token-string">"{personal.name}"</span>,\n
                        <span className="code-token-property">  "status"</span>: <span className="code-token-string">"Ready for high-impact roles"</span>,\n
                        <span className="code-token-property">  "location"</span>: <span className="code-token-string">"Hyderabad, India"</span>,\n
                        <span className="code-token-property">  "openTo"</span>: [\n
                        <span className="code-token-string">    "Full Stack"</span>,\n
                        <span className="code-token-string">    "Backend & Distributed Systems"</span>,\n
                        <span className="code-token-string">    "Cloud/DevOps & GenAI"</span>\n
                        {`  ]`}
                        ,\n
                        <span className="code-token-property">  "coreStack"</span>: [\n
                        <span className="code-token-string">    "Java 21 / Spring Boot 3"</span>,\n
                        <span className="code-token-string">    "React 18 / TypeScript"</span>,\n
                        <span className="code-token-string">    "AWS / Docker / Kubernetes"</span>,\n
                        <span className="code-token-string">    "Python / LangChain / RAG"</span>\n
                        {`  ]`}
                        ,\n
                        <span className="code-token-property">  "uptimeTarget"</span>: <span className="code-token-string">"99.99%"</span>\n
                        {`}`}
                      </code>
                    </pre>
                  </div>
                )}

                {activeTab === 'bash' && (
                  <div>
                    <div className="text-slate-500 mb-2 font-mono"># Query candidate cluster endpoint</div>
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      <code>
                        <span className="text-brand-cyan">$</span> curl -s -X GET https://api.raghav.dev/v1/status \<br />
                        {'  '}-H <span className="code-token-string">"Authorization: Bearer recruiter_token"</span><br /><br />
                        <span className="text-slate-400"># Response:</span><br />
                        <span className="text-brand-emerald">HTTP/2 200 OK</span><br />
                        <span className="text-slate-400">x-cluster-id: hyd-prod-01</span><br />
                        <span className="text-slate-400">x-latency: 18ms</span><br /><br />
                        <span className="text-brand-cyan">{`{`}</span><br />
                        {'  '}<span className="code-token-property">"interviewsAccepted"</span>: <span className="text-emerald-400">true</span>,<br />
                        {'  '}<span className="code-token-property">"preferredCompanies"</span>: [<span className="code-token-string">"FAANG"</span>, <span className="code-token-string">"Tier-1 Startups"</span>],<br />
                        {'  '}<span className="code-token-property">"timezone"</span>: <span className="code-token-string">"IST (Flexible to US/EU)"</span><br />
                        <span className="text-brand-cyan">{`}`}</span>
                      </code>
                    </pre>
                  </div>
                )}

                {activeTab === 'health' && (
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-400">
                        <span>// Distributed System Telemetry</span>
                        <span className="inline-flex items-center gap-1 text-xs text-brand-emerald">
                          <ShieldCheck className="w-3.5 h-3.5" /> All Nodes Healthy
                        </span>
                      </div>

                      <div className="space-y-2.5 text-xs text-slate-300">
                        <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                          <span className="text-slate-400">Agentic AI (Astra Guard):</span>
                          <span className="font-mono text-brand-cyan">Top 50 / 500+ (watsonx)</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                          <span className="text-slate-400">API Optimization:</span>
                          <span className="font-mono text-brand-emerald">~60% P95 latency cut</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                          <span className="text-slate-400">Cloud Lab (Terraform):</span>
                          <span className="font-mono text-brand-indigo">&lt; 10 min vs 3+ hrs</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                          <span className="text-slate-400">Real-Time (CodeShare):</span>
                          <span className="font-mono text-brand-violet">50+ concurrent users</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <button
                        type="button"
                        onClick={handleRunPing}
                        disabled={isRunningPing}
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-mono text-xs transition-colors hover:text-brand-cyan"
                      >
                        {isRunningPing ? (
                          <span>Executing probe...</span>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 text-brand-cyan fill-current" />
                            <span>Run Live Cluster Ping</span>
                          </>
                        )}
                      </button>

                      {pingResult && (
                        <div className="mt-2.5 p-2 rounded bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-mono text-[11px] animate-in fade-in">
                          {pingResult}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Terminal Footer status pill */}
                <div className="pt-3 mt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    status: optimal
                  </span>
                  <span>v2.4.0-prod</span>
                </div>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
};
