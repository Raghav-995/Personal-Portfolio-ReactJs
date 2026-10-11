import React from 'react';
import {
  Server,
  Cpu,
  Layers,
  Database,
  Cloud,
  Code,
  Terminal,
  Box,
  GitBranch,
  Shield,
  Zap,
  Sparkles,
  Workflow,
  Lock,
  Radio
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  const normalized = name.toLowerCase();

  // IBM watsonx / IBM
  if (normalized.includes('watsonx') || normalized.includes('ibm')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="2.5" fill="#0f62fe" />
        <rect x="4" y="10" width="24" height="2.5" fill="#0f62fe" />
        <rect x="4" y="14" width="24" height="2.5" fill="#0f62fe" />
        <rect x="4" y="18" width="24" height="2.5" fill="#0f62fe" />
        <rect x="4" y="22" width="24" height="2.5" fill="#0f62fe" />
        <circle cx="23" cy="19" r="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
        <path d="M21 19l1.5 1.5 3-3" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // OpenStack
  if (normalized.includes('openstack')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M7 9h18v4H7zM7 15h18v4H7zM7 21h18v4H7z" fill="#dc2626" opacity="0.15" />
        <rect x="6" y="8" width="8" height="4" rx="1" fill="#ef4444" />
        <rect x="18" y="8" width="8" height="4" rx="1" fill="#ef4444" />
        <rect x="6" y="14" width="20" height="4" rx="1" fill="#dc2626" />
        <rect x="6" y="20" width="8" height="4" rx="1" fill="#ef4444" />
        <rect x="18" y="20" width="8" height="4" rx="1" fill="#ef4444" />
      </svg>
    );
  }

  // WebSocket
  if (normalized.includes('websocket')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M11 13l5-4 5 4M21 19l-5 4-5-4" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // JWT / Security Groups / Auth
  if (normalized.includes('jwt') || normalized.includes('security groups') || normalized.includes('owasp')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M16 4l10 4v7c0 7-5 11-10 13-5-2-10-6-10-13V8l10-4z" fill="#fbbf24" opacity="0.2" />
        <path d="M16 4l10 4v7c0 7-5 11-10 13-5-2-10-6-10-13V8l10-4z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 16l2 2 4-4" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // MITRE ATT&CK / Cybersecurity
  if (normalized.includes('mitre') || normalized.includes('cybersecurity')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#f43f5e" strokeWidth="2" />
        <circle cx="16" cy="16" r="6" stroke="#f43f5e" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="#f43f5e" />
        <path d="M16 3v4M16 25v4M3 16h4M25 16h4" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // LLMs / Generative AI / Agentic
  if (normalized === 'llms' || normalized.includes('agentic')) {
    return <Sparkles className={`${className} text-brand-cyan`} />;
  }

  // Java
  if (normalized.includes('java 17') || normalized.includes('java')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M12 25c-4.5.5-6.5 1.5-6.5 2.5 0 1.5 5 2.5 10.5 2.5s10.5-1 10.5-2.5c0-1-2-2-6.5-2.5" stroke="#ea580c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 21c-3 .5-4.5 1.2-4.5 2 0 1.2 4.5 2 10.5 2s10.5-.8 10.5-2c0-.8-1.5-1.5-4.5-2" stroke="#ea580c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M19 14c2-1 3-3 2-5-1-1.5-3-1-4 1-1-2-3-2.5-4-1-1.5 2 0 4 3 6" stroke="#0284c7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (normalized.includes('spring')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M6 16C6 10.477 10.477 6 16 6c3.2 0 6.06 1.5 7.9 3.86L18.5 15a4 4 0 00-4.5 4.5L8.6 24.9A9.97 9.97 0 016 16z" fill="#16a34a"/>
        <circle cx="21" cy="21" r="5" fill="#22c55e"/>
      </svg>
    );
  }

  if (normalized.includes('kafka')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="16" r="4" fill="#38bdf8"/>
        <circle cx="22" cy="9" r="4" fill="#818cf8"/>
        <circle cx="22" cy="23" r="4" fill="#34d399"/>
        <path d="M13 14.5l6-4M13 17.5l6 4" stroke="#94a3b8" strokeWidth="2"/>
      </svg>
    );
  }

  if (normalized.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M16 4l11 6v12l-11 6-11-6V10l11-6z" fill="#dc2626" opacity="0.2"/>
        <path d="M16 4l11 6-11 6-11-6 11-6z" stroke="#ef4444" strokeWidth="2"/>
        <path d="M5 10v12l11 6V16L5 10z" fill="#b91c1c"/>
        <path d="M27 10v12l-11 6V16l11-6z" fill="#ef4444"/>
      </svg>
    );
  }

  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M15.5 4H10a4 4 0 00-4 4v4h8V9.5A1.5 1.5 0 0115.5 8h4.5a3 3 0 003-3v0a1 1 0 00-1-1h-6.5z" fill="#0284c7"/>
        <circle cx="9" cy="8" r="1" fill="#fff"/>
        <path d="M16.5 28H22a4 4 0 004-4v-4h-8v2.5a1.5 1.5 0 01-1.5 1.5H12a3 3 0 00-3 3v0a1 1 0 001 1h6.5z" fill="#facc15"/>
        <circle cx="23" cy="24" r="1" fill="#fff"/>
      </svg>
    );
  }

  if (normalized.includes('pytorch')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#f97316" strokeWidth="2.5"/>
        <circle cx="16" cy="11" r="2.5" fill="#ea580c"/>
        <path d="M16 14v8M12 18l8-4" stroke="#ea580c" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="16" rx="11" ry="4.5" stroke="#38bdf8" strokeWidth="1.8"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.5" stroke="#38bdf8" strokeWidth="1.8" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.5" stroke="#38bdf8" strokeWidth="1.8" transform="rotate(120 16 16)"/>
        <circle cx="16" cy="16" r="2.5" fill="#38bdf8"/>
      </svg>
    );
  }

  if (normalized.includes('typescript')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#2563eb"/>
        <path d="M13 13v10M9 13h8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M22 15c-1-1-3-1-3 1s3 1.5 3 3-2 2-4 1" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (normalized.includes('terraform')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <polygon points="6,6 13,10 13,18 6,14" fill="#818cf8"/>
        <polygon points="14,11 21,15 21,23 14,19" fill="#6366f1"/>
        <polygon points="22,16 29,20 29,28 22,24" fill="#4f46e5"/>
        <polygon points="14,20 21,24 21,32 14,28" fill="#818cf8"/>
      </svg>
    );
  }

  if (normalized.includes('linux')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M16 4c-4 0-7 3-7 7v7c0 4 3 7 7 7s7-3 7-7v-7c0-4-3-7-7-7z" fill="#f8fafc" />
        <ellipse cx="13" cy="11" rx="1.5" ry="2" fill="#0f172a" />
        <ellipse cx="19" cy="11" rx="1.5" ry="2" fill="#0f172a" />
        <polygon points="16,13 13,16 19,16" fill="#f59e0b" />
        <path d="M10 25c-3 1-5 2.5-4 4 1 1 5 0 7-1M22 25c3 1 5 2.5 4 4-1 1-5 0-7-1" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalized.includes('aws')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M8 12l2 6 2-6M13 18l2-6 2 6M19 12l3 6 3-6" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 23c6 3 13 3 19 0" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        <path d="M23 22l3 1-1-3" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }

  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M28 17c-.5-3-3-4.5-5-4.5-.5 0-1 .1-1.5.3-1-2.5-3.5-3.8-6.5-3.8H4v9c0 5 4 9 9 9h6c4.5 0 8.5-3.5 9-9.5z" fill="#0284c7" opacity="0.3"/>
        <rect x="6" y="14" width="3" height="3" fill="#38bdf8"/>
        <rect x="10" y="14" width="3" height="3" fill="#38bdf8"/>
        <rect x="14" y="14" width="3" height="3" fill="#38bdf8"/>
        <rect x="10" y="10" width="3" height="3" fill="#38bdf8"/>
        <rect x="14" y="10" width="3" height="3" fill="#38bdf8"/>
        <path d="M4 18c2 3 6 5 11 5s10-2 13-6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (normalized.includes('postgresql')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" fill="#0284c7" opacity="0.2"/>
        <path d="M12 12c3-4 8-4 10 0 2 4-1 9-6 9-2 0-3.5-1-4-2.5v5.5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (normalized.includes('microservices')) {
    return <Workflow className={`${className} text-brand-cyan`} />;
  }

  if (normalized.includes('cloud')) {
    return <Cloud className={`${className} text-brand-cyan`} />;
  }

  if (normalized.includes('database')) {
    return <Database className={`${className} text-emerald-400`} />;
  }

  return <Code className={`${className} text-slate-400`} />;
};
