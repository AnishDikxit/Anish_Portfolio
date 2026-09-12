import experienceData from '../../data/experience.json';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Badge } from '../ui/Badge';
import type { Experience } from '../../types';

export function ExperienceTimeline() {
  const experiences = experienceData as Experience[];

  return (
    <AnimatedSection id="experience">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <h2 className="mb-12 max-w-[18ch] text-[2.5rem] leading-none font-normal tracking-[-1px] text-ink md:mb-16">
          Experience
        </h2>

        <div className="flex flex-col gap-12 md:gap-16">
          {experiences.map((experience) => (
            <article key={experience.id} className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
              <p className="text-[14px] tracking-[0.35px] text-muted uppercase md:col-span-3 md:pt-1">
                {experience.period}
              </p>
              <div className="md:col-span-9">
                <h3 className="text-2xl leading-tight font-normal tracking-[-0.5px] text-ink md:text-[2rem]">
                  {experience.role}
                </h3>
                <p className="mt-2 text-base text-ink">{experience.company}</p>
                <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">
                  {experience.description}
                </p>
                {experience.highlights.length > 0 && (
                  <ul className="mt-5 max-w-[65ch] list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
