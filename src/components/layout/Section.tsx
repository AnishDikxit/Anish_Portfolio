import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { GradientText } from '../ui/GradientText';
import { cn } from '../../lib/utils';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function Section({ id, title, subtitle, children, className, contentClassName }: SectionProps) {
  return (
    <AnimatedSection id={id} className={cn("relative", className)}>
      <div className="max-w-7xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-20">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                <GradientText>{title}</GradientText>
              </h2>
            )}
            {subtitle && (
              <p className="text-text-secondary text-lg md:text-xl max-w-2xl">
                {subtitle}
              </p>
            )}
            
            {title && (
              <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-cyan mt-6 rounded-full" />
            )}
          </div>
        )}
        
        <div className={cn("", contentClassName)}>
          {children}
        </div>
      </div>
    </AnimatedSection>
  );
}
