import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectCaseStudy } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { TechIcon } from './TechIcon';
import {
  Github,
  ExternalLink,
  Cpu,
  Layers,
  Sparkles,
  Server,
  Cloud,
  CheckCircle2,
  TrendingUp,
  Terminal,
  Activity,
  ArrowUpRight,
  Shield,
  Trophy,
  Users,
  Radio,
  Clock,
  Gauge
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Gen AI & LLM', 'Enterprise Backend', 'Cloud Native Full Stack'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (p) => selectedFilter === 'All' || p.category === selectedFilter
  );

  const renderProjectVisualMockup = (project: ProjectCaseStudy) => {
    switch (project.mockupType) {
      case 'ai-cybersecurity':
        return (
          <div className="bg-[#0b101d] rounded-xl p-4 font-mono text-xs border border-slate-800 text-slate-300 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80 text-[11px]">
                <span className="text-brand-cyan flex items-center gap-1.5 font-bold">
                  <Shield className="w-3.5 h-3.5 text-brand-cyan" />
                  Astra Guard // watsonx Agent Hub
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-brand-emerald text-[10px] border border-emerald-500/30">
                  TOP 50 FINALIST
                </span>
              </div>

              {/* 6 Specialized Agents Status Grid */}
              <div className="grid grid-cols-2 gap-1.5 mb-3 text-[10px]">
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Threat Detection:</span>
                  <span className="text-brand-emerald font-semibold">Active</span>
                </div>
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Vulnerability Scan:</span>
                  <span className="text-brand-cyan font-semibold">Ready</span>
                </div>
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Incident Response:</span>
                  <span className="text-brand-violet font-semibold">Triaging</span>
                </div>
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Behavior Analytics:</span>
                  <span className="text-brand-emerald font-semibold">Monitoring</span>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] bg-slate-950/70 p-2.5 rounded border border-slate-800/80">
                <div className="text-slate-400">
                  <span className="text-brand-cyan">[MITRE ATT&CK]</span> T1190: Exploit Public-Facing App &rarr; Mapped
                </div>
                <div className="text-slate-400">
                  <span className="text-amber-400">[OWASP A03]</span> Injection risk flagged & isolated
                </div>
                <div className="text-slate-400">
                  <span className="text-brand-emerald">[watsonx LLM]</span> Security policy audit log dispatched (0.42s)
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 flex justify-between text-[10px] text-slate-500">
              <span>Model: IBM watsonx Granite/Llama</span>
              <span className="text-brand-emerald">Zero-Trust Audit Verified</span>
            </div>
          </div>
        );

      case 'collaborative-editor':
        return (
          <div className="bg-[#0b101d] rounded-xl p-4 font-mono text-xs border border-slate-800 text-slate-300 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80 text-[11px]">
                <span className="text-brand-cyan flex items-center gap-1.5 font-bold">
                  <Radio className="w-3.5 h-3.5 text-brand-emerald animate-pulse" />
                  CodeShare // Workspace #ws-4089
                </span>
                <span className="text-brand-emerald font-semibold">WebSocket: 18ms p99</span>
              </div>

              {/* Active Collaborators Presence */}
              <div className="flex items-center justify-between p-2 rounded bg-slate-900/90 border border-slate-800 mb-2.5 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Users className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Active Users:</span>
                  <span className="text-white font-bold">52 Online</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                  Sync: Real-Time
                </span>
              </div>

              <div className="space-y-1.5 text-[11px] bg-slate-950/70 p-2.5 rounded border border-slate-800/80">
                <div className="text-slate-400">
                  <span className="text-brand-emerald">[REDIS-PRESENCE]</span> User @raghav (Line 42, Col 8) typing...
                </div>
                <div className="text-slate-400">
                  <span className="text-brand-cyan">[WS-BROADCAST]</span> Document delta synchronized (v3491)
                </div>
                <div className="text-slate-400">
                  <span className="text-brand-indigo">[JWT-AUTH]</span> Silent token refreshed &bull; Auth failures: 0%
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 flex justify-between text-[10px] text-slate-500">
              <span>Stack: Spring Boot 3 + Redis + React</span>
              <span className="text-brand-emerald">Collision: 0%</span>
            </div>
          </div>
        );

      case 'simulation-orchestrator':
        return (
          <div className="bg-[#0b101d] rounded-xl p-4 font-mono text-xs border border-slate-800 text-slate-300 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80 text-[11px]">
                <span className="text-brand-cyan flex items-center gap-1.5 font-bold">
                  <Cloud className="w-3.5 h-3.5 text-brand-indigo" />
                  CSXP // Lab Automation Core
                </span>
                <span className="text-brand-emerald font-semibold">Setup: &lt; 10 min</span>
              </div>

              {/* Provisioning Comparison Card */}
              <div className="grid grid-cols-2 gap-2 text-[11px] mb-2.5">
                <div className="bg-slate-900/90 p-2.5 rounded border border-slate-800">
                  <div className="text-slate-500 text-[10px]">MANUAL PROVISION</div>
                  <div className="text-sm font-bold text-rose-400 mt-0.5">3+ Hours</div>
                  <div className="text-[10px] text-slate-500">Manual config drift</div>
                </div>
                <div className="bg-slate-900/90 p-2.5 rounded border border-slate-800">
                  <div className="text-slate-500 text-[10px]">TERRAFORM + OPENSTACK</div>
                  <div className="text-sm font-bold text-brand-emerald mt-0.5">&lt; 10 Mins</div>
                  <div className="text-[10px] text-brand-emerald">95% faster setup</div>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] bg-slate-950/70 p-2.5 rounded border border-slate-800/80">
                <div className="text-slate-400">
                  <span className="text-brand-cyan">[TERRAFORM]</span> OpenStack tenant network & routers provisioned
                </div>
                <div className="text-slate-400">
                  <span className="text-brand-emerald">[KAFKA-STREAM]</span> Ingesting real-time attack simulation logs
                </div>
                <div className="text-slate-400">
                  <span className="text-brand-indigo">[REDIS-CACHE]</span> Simulation state & scoring metrics live
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 flex justify-between text-[10px] text-slate-500">
              <span>Security Groups: Micro-segmented</span>
              <span className="text-brand-cyan">Tenant Isolation: 100%</span>
            </div>
          </div>
        );

      case 'api-optimization':
        return (
          <div className="bg-[#0b101d] rounded-xl p-4 font-mono text-xs border border-slate-800 text-slate-300 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80 text-[11px]">
                <span className="text-brand-cyan flex items-center gap-1.5 font-bold">
                  <Gauge className="w-3.5 h-3.5 text-brand-emerald" />
                  Public Services // Microservices Core
                </span>
                <span className="text-brand-emerald font-semibold">P95: -60% Latency</span>
              </div>

              {/* P95 Latency Reduction Metric */}
              <div className="grid grid-cols-2 gap-2 text-[11px] mb-2.5">
                <div className="bg-slate-900/90 p-2.5 rounded border border-slate-800">
                  <div className="text-slate-500 text-[10px]">INITIAL P95 LATENCY</div>
                  <div className="text-sm font-bold text-amber-400 mt-0.5">420 ms</div>
                  <div className="text-[10px] text-slate-500">Database bottleneck</div>
                </div>
                <div className="bg-slate-900/90 p-2.5 rounded border border-slate-800">
                  <div className="text-slate-500 text-[10px]">OPTIMIZED P95 LATENCY</div>
                  <div className="text-sm font-bold text-brand-emerald mt-0.5">168 ms</div>
                  <div className="text-[10px] text-brand-emerald">~60% latency cut</div>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] bg-slate-950/70 p-2.5 rounded border border-slate-800/80">
                <div className="text-slate-400">
                  <span className="text-brand-emerald">[REDIS-CACHE]</span> Cache hit ratio: 96.4% on high-read queries
                </div>
                <div className="text-slate-400">
                  <span className="text-brand-cyan">[SQL-OPT]</span> EXPLAIN ANALYZE index tuning eliminated sequential scans
                </div>
                <div className="text-slate-400">
                  <span className="text-brand-indigo">[KAFKA-ASYNC]</span> Heavy notification dispatch offloaded to background
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 flex justify-between text-[10px] text-slate-500">
              <span>Environment: AWS Cloud Microservices</span>
              <span className="text-brand-emerald">Uptime: Optimal</span>
            </div>
          </div>
        );

      case 'cloud-topology':
        return (
          <div className="bg-[#0b101d] rounded-xl p-4 font-mono text-xs border border-slate-800 text-slate-300 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80 text-[11px]">
                <span className="text-brand-cyan flex items-center gap-1.5 font-bold">
                  <Server className="w-3.5 h-3.5 text-brand-indigo" />
                  IaC // OpenStack Lab Provisioner
                </span>
                <span className="text-brand-emerald font-semibold">Zero-Drift Automation</span>
              </div>

              <div className="space-y-2 text-[11px] mb-2.5">
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Terraform Provider:</span>
                  <span className="text-brand-indigo font-bold">terraform-provider-openstack</span>
                </div>
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Network Topology:</span>
                  <span className="text-brand-cyan font-bold">Neutron Router + Isolated Subnets</span>
                </div>
                <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Security Groups:</span>
                  <span className="text-brand-emerald font-bold">Automated Ingress/Egress Rules</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-400">
                <span className="text-brand-emerald">[CLOUD-INIT]</span> Linux system hardening and tooling applied automatically
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 flex justify-between text-[10px] text-slate-500">
              <span>Repeatability: 100% Automated</span>
              <span className="text-brand-emerald">Zero Manual Ops</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-28 border-t border-slate-800/80">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo text-xs font-mono font-medium mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Production Architecture Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Flagship <span className="text-gradient-cyan">Engineering Systems</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Proven systems developed across agentic AI cybersecurity, real-time collaboration, cloud lab infrastructure, and enterprise microservices.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedFilter === cat
                    ? 'bg-slate-800 text-brand-cyan border border-brand-cyan/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List - Case Study Format */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <SpotlightCard
              key={project.id}
              className="p-6 sm:p-8 border-slate-800 bg-obsidian-card/95"
              glowColor="rgba(56, 189, 248, 0.14)"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left Side: Problem, Impact, Architecture Details (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Header: Category, Counter & Key Achievement Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-slate-700/80 text-brand-cyan">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          CASE STUDY 0{index + 1}
                        </span>
                      </div>

                      {project.achievementBadge && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/30 shadow-sm">
                          <Trophy className="w-3 h-3 text-brand-emerald" />
                          <span>{project.achievementBadge}</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-6">
                      {project.tagline}
                    </p>

                    {/* Quantified Impact Badges */}
                    <div className="mb-6 space-y-2">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-brand-emerald" />
                        <span>Quantified Engineering Impact & Achievements</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {project.impactMetrics.map((metric, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Architecture Highlights */}
                    <div className="mb-6">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>Architectural Highlights</span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
                        {project.architectureHighlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-brand-cyan font-bold font-mono">›</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Pills & Action Buttons */}
                  <div>
                    {/* Tech Stack */}
                    <div className="flex flex-wrap items-center gap-2 mb-6 pt-4 border-t border-slate-800/80">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                        >
                          <TechIcon name={tech} className="w-3.5 h-3.5" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white border border-slate-700 hover:border-brand-cyan hover:bg-slate-800 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>Explore Source Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan/25 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live System / Architecture</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>

                {/* Right Side: High-Fidelity Browser Mockup Frame (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 overflow-hidden shadow-2xl flex flex-col h-full min-h-[340px]">
                    
                    {/* Browser Mockup Chrome Header */}
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex items-center gap-1 px-3 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-400 max-w-[200px] truncate">
                        <span className="text-slate-600">https://</span>
                        <span>{project.id}.raghav.dev</span>
                      </div>
                      <div className="w-8" />
                    </div>

                    {/* Browser Viewport Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      {renderProjectVisualMockup(project)}
                    </div>

                  </div>
                </div>

              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};
