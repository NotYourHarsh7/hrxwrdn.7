import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { type Project } from './data/projects';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll spy
  useEffect(() => {
    if (selectedProject) return; // Don't spy when project detail is open

    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selectedProject]);

  const handleNavigate = useCallback((section: string) => {
    // If we're in project detail view, go back first
    if (selectedProject) {
      setSelectedProject(null);
      // Wait a tick for the DOM to render before scrolling
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedProject]);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackFromProject = useCallback(() => {
    setSelectedProject(null);
    // Scroll back to projects section
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return (
    <div className="relative noise-overlay">
      <CustomCursor />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetail
            key="project-detail"
            project={selectedProject}
            onBack={handleBackFromProject}
          />
        ) : (
          <main key="main">
            <Hero onNavigate={handleNavigate} />
            <About />
            <Projects onSelectProject={handleSelectProject} />
            <Skills />
            <Experience />
            <Contact />
          </main>
        )}
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
