import { useMemo, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter, type FilterCategory } from './ProjectFilter';
import type { Project } from '../../types';
import { AnimatedSection } from '../ui/AnimatedSection';
import projectsData from '../../data/projects.json';

const categories: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'genai', label: 'GenAI' },
];

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const projects = projectsData as Project[];

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeCategory === 'all' || project.category === activeCategory),
    [activeCategory, projects]
  );

  return (
    <AnimatedSection id="projects">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <h2 className="mb-8 max-w-[18ch] text-[2.5rem] leading-none font-normal tracking-[-1px] text-ink">
          Projects
        </h2>

        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0 && activeCategory === 'all'}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-muted">No projects in this category.</p>
        )}
      </div>
    </AnimatedSection>
  );
}
