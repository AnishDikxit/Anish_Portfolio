import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { ProjectsGrid } from './components/projects/ProjectsGrid';
import { SkillsSection } from './components/skills/SkillsSection';
import { Contact } from './components/contact/Contact';

function App() {
  // Initialize Lenis for buttery-smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-primary font-sans text-text-primary overflow-x-hidden selection:bg-accent-purple/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <ProjectsGrid />
        <SkillsSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
