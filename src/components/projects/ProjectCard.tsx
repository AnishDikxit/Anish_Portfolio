import { ArrowUpRight } from '@phosphor-icons/react';
import type { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { Still } from '../ui/Still';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={cn('flex h-full flex-col', featured && 'md:col-span-2')}>
      <Still src={project.image} alt={project.title} aspect="16 / 9" />

      <div className="flex flex-1 flex-col pt-5">
        <h3 className="text-2xl leading-tight font-normal tracking-[-0.3px] text-ink">
          {project.title}
        </h3>
        <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        {project.urls.github && (
          <a
            href={project.urls.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 text-[14px] font-medium text-ink transition-opacity hover:opacity-70"
          >
            Code
            <ArrowUpRight size={16} weight="bold" />
          </a>
        )}
      </div>
    </article>
  );
}
