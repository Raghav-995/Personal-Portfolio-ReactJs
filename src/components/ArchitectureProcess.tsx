import React, { useState } from 'react';
import { PORTFOLIO_DATA, ArchitectureStep } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import {
  Layers,
  Cpu,
  Cloud,
  Activity,
  CheckCircle2,
  Workflow,
  ArrowRight,
  Shield,
  Gauge,
  GitPullRequest
} from 'lucide-react';

export const ArchitectureProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const steps = PORTFOLIO_DATA.workProcess;
  const currentStep = steps[activeStepIndex];

  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'layers':
        return <Layers className="w-5 h-5 text-brand-cyan" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-brand-emerald" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-brand-indigo" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-brand-violet" />;
      default:
        return <Workflow className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="architecture" className="relative py-28 border-t border-slate-800/80 bg-obsidian-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/25 text-brand-emerald text-xs font-mono font-medium mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Engineering Differentiator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How I Architect <span className="text-gradient-cyan">Production Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            From formal domain modeling and contract-first API design to containerized orchestration and automated zero-downtime releases.
          </p>
        </div>

        {/* Stepper Tabs Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 relative flex items-start gap-3.5 ${
                  isActive
                    ? 'bg-slate-900/90 border-brand-cyan shadow-glow-subtle'
                    : 'bg-obsidian-card/60 border-slate-800/80 hover:bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-mono text-sm font-bold ${
                    isActive
                      ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40'
                      : 'bg-slate-800/70 text-slate-400 border border-slate-700/60'
                  }`}
                >
                  {step.step}
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">{step.subtitle}</div>
                  <div className="text-sm font-bold text-white mt-0.5 line-clamp-1">
                    {step.title}
                  </div>
                </div>

                {/* Active Indicator Accent Line */}
                {isActive && (
                  <div className="absolute -bottom-px left-4 right-4 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-indigo" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Showcase */}
        <SpotlightCard
          className="p-8 sm:p-10 border-slate-800 bg-obsidian-card/95"
          glowColor="rgba(56, 189, 248, 0.16)"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getStepIcon(currentStep.icon)}
                </div>
                <span className="text-xs font-mono font-semibold text-brand-cyan uppercase tracking-wider">
                  Phase {currentStep.step} &bull; {currentStep.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {currentStep.description}
              </p>

              {/* Core Principles */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Engineering Tenets & Standards</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStep.principles.map((principle, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestone Metric */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs text-slate-300">
                <Gauge className="w-4 h-4 text-brand-emerald" />
                <span className="text-slate-400">Target Outcome:</span>
                <span className="font-bold text-white">{currentStep.metrics}</span>
              </div>
            </div>

            {/* Right Visualization / Architecture Blueprint (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800 font-mono text-xs text-slate-300 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-500">
                  <span>ARCHITECTURE BLUEPRINT</span>
                  <span className="text-brand-cyan">Phase: {currentStep.step}</span>
                </div>

                {activeStepIndex === 0 && (
                  <div className="space-y-3 text-[11px]">
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 text-center text-brand-cyan font-bold">
                      OpenAPI 3.1 & Protobuf Contracts
                    </div>
                    <div className="text-center text-slate-500">&darr; Contract Binding</div>
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        Order Domain (DDD)
                      </div>
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        Settlement Domain
                      </div>
                    </div>
                    <div className="text-center text-slate-500">&darr; Clean Architecture</div>
                    <div className="p-2.5 rounded bg-brand-cyan/10 border border-brand-cyan/30 text-center text-brand-cyan">
                      Hexagonal Core (Ports & Adapters)
                    </div>
                  </div>
                )}

                {activeStepIndex === 1 && (
                  <div className="space-y-3 text-[11px]">
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                      <span>Incoming Ingestion</span>
                      <span className="text-brand-emerald">50,000 req/s</span>
                    </div>
                    <div className="text-center text-slate-500">&darr; Partitioned Topic Stream</div>
                    <div className="p-3 rounded bg-brand-cyan/10 border border-brand-cyan/30 flex justify-between items-center">
                      <span>Apache Kafka Cluster</span>
                      <span className="text-brand-cyan">Consumer Lag = 0</span>
                    </div>
                    <div className="text-center text-slate-500">&darr; Write-Through & Redlock</div>
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                      <span>Redis Distributed Cache</span>
                      <span className="text-brand-indigo">p99 &lt; 2ms</span>
                    </div>
                  </div>
                )}

                {activeStepIndex === 2 && (
                  <div className="space-y-3 text-[11px]">
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                      <span>Multi-stage Dockerfile</span>
                      <span className="text-brand-cyan">&lt; 65MB Distroless</span>
                    </div>
                    <div className="text-center text-slate-500">&darr; Terraform Modular IaC</div>
                    <div className="p-3 rounded bg-brand-indigo/10 border border-brand-indigo/30 flex justify-between items-center">
                      <span>AWS ECS / EKS Cluster</span>
                      <span className="text-brand-indigo">ap-south-1 Multi-AZ</span>
                    </div>
                    <div className="text-center text-slate-500">&darr; Auto-Scaling Policy</div>
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                      <span>Target Tracking HPA</span>
                      <span className="text-brand-emerald">Elastic Scaling</span>
                    </div>
                  </div>
                )}

                {activeStepIndex === 3 && (
                  <div className="space-y-3 text-[11px]">
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                      <span>GitHub Actions Pipeline</span>
                      <span className="text-brand-emerald">Lint &bull; Test &bull; Build</span>
                    </div>
                    <div className="text-center text-slate-500">&darr; Container Image Signing</div>
                    <div className="p-3 rounded bg-brand-emerald/10 border border-brand-emerald/30 flex justify-between items-center">
                      <span>Blue / Green Deployment</span>
                      <span className="text-brand-emerald">0ms Downtime</span>
                    </div>
                    <div className="text-center text-slate-500">&darr; Real-Time Telemetry</div>
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                      <span>Prometheus + OpenTelemetry</span>
                      <span className="text-brand-violet">Full Distributed Trace</span>
                    </div>
                  </div>
                )}

                <div className="pt-2 text-[10px] text-slate-500 text-center font-mono">
                  Continuous Feedback &bull; Automated Rollback on Alert
                </div>
              </div>
            </div>

          </div>
        </SpotlightCard>

      </div>
    </section>
  );
};
