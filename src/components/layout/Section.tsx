import type { ReactNode } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <AnimatedSection id={id} className={className}>
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        {title && (
          <h2 className="mb-10 max-w-[18ch] text-[2.5rem] leading-none font-normal tracking-[-1px] text-ink md:mb-14">
            {title}
          </h2>
        )}
        {children}
      </div>
    </AnimatedSection>
  );
}
