import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter, type FilterCategory } from './ProjectFilter';
import type { Project } from '../../types';
import { AnimatedSection } from '../ui/AnimatedSection';
import projectsData from '../../data/projects.json';

const categories: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'genai', label: 'GenAI & ML' },
];

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Treat the imported JSON data as Project[]
    setProjects(projectsData as Project[]);
  }, []);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <AnimatedSection id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-cyan)]">Work</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            A selection of my recent projects focusing on AI, scalable backends, and modern frontend experiences.
          </p>
        </div>

        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 text-[var(--text-muted)]"
          >
            No projects found in this category.
          </motion.div>
        )}
      </div>
    </AnimatedSection>
  );
}
