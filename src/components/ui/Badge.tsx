import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[4px] border border-line px-2.5 py-1 text-[11px] font-medium tracking-[0.35px] text-muted uppercase',
        className
      )}
    >
      {children}
    </span>
  );
}
