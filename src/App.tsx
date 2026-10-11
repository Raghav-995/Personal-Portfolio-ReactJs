import React from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureProcess } from './components/ArchitectureProcess';
import { EducationSection } from './components/EducationSection';
import { GitHubMetrics } from './components/GitHubMetrics';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const activeSection = useScrollSpy([
    'hero',
    'skills',
    'experience',
    'projects',
    'architecture',
    'education',
    'github',
    'contact',
  ]);

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-x-hidden">
      {/* Subtle Interactive Particle Canvas */}
      <ParticleBackground />

      {/* Glassmorphic Navigation with Scroll Spy */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <SkillsMatrix />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureProcess />
        <EducationSection />
        <GitHubMetrics />
        <ContactSection />
      </main>

      {/* Engineering Footer */}
      <Footer />

      {/* Circular Progress Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
