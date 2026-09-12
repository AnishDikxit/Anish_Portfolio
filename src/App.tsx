import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { ProjectsGrid } from './components/projects/ProjectsGrid';
import { SkillsSection } from './components/skills/SkillsSection';
import { Contact } from './components/contact/Contact';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './lib/theme';
import { ScrollProgress } from './components/ui/scroll-progress';
import { zIndex } from './lib/z-index';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-[100dvh] bg-void font-sans text-ink">
        <div className="grain" aria-hidden="true" />
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
        <div
          className="pointer-events-none fixed bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
          style={{ zIndex: zIndex.overlay }}
        >
          <div className="pointer-events-auto">
            <ScrollProgress sections={sections} />
          </div>
        </div>
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App;
