import { TimelineCard } from './TimelineCard';
import experienceData from '../../data/experience.json';
import { AnimatedSection } from '../ui/AnimatedSection';
import type { Experience } from '../../types';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

export function ExperienceTimeline() {
  const experiences = experienceData as Experience[];
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <AnimatedSection className="py-24 relative" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan">
              Experience
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            My professional journey and the impact I've made along the way.
          </p>
        </div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto z-10">
          {/* Timeline Center Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full hidden md:block"></div>
          
          {/* Glowing Scroll Trail Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-[var(--color-accent-purple)] via-[var(--color-accent-cyan)] to-transparent -translate-x-1/2 rounded-full hidden md:block z-0 shadow-[0_0_15px_rgba(157,78,221,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-0">
            {experiences.map((experience, index) => (
              <TimelineCard
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
