import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import type { Experience } from '../../types';
import { Calendar, Building2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TimelineCardProps {
  experience: Experience;
  isLeft: boolean;
  index: number;
}

export function TimelineCard({ experience, isLeft, index }: TimelineCardProps) {
  return (
    <div className={cn(
      "relative flex justify-between items-start md:items-center w-full mb-8 md:mb-12 group",
      isLeft ? "md:flex-row-reverse" : "md:flex-row"
    )}>
      {/* Desktop empty side */}
      <div className="hidden md:block w-5/12" />

      {/* Center dot - Desktop (Center) and Mobile (Left) */}
      <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-bg-secondary border-2 md:border-4 border-bg-tertiary shadow-[0_0_15px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] group-hover:border-accent-cyan transition-all duration-300 z-10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent-purple group-hover:bg-accent-cyan transition-colors duration-300" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full md:w-5/12 pl-12 md:pl-0"
      >
        <GlassCard hoverEffect className="p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                {experience.role}
              </h3>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Building2 size={16} className="text-accent-blue" />
                  <span className="font-medium text-text-secondary">{experience.company}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} className="text-accent-purple" />
                  <span>{experience.period}</span>
                </span>
              </div>
            </div>

            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              {experience.description}
            </p>

            {experience.highlights && experience.highlights.length > 0 && (
              <ul className="space-y-2 mt-2">
                {experience.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-cyan mt-1 leading-none text-[10px]">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {experience.technologies && experience.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-glass-border">
                {experience.technologies.map(tech => (
                  <Badge key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
