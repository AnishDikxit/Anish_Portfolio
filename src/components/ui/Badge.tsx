import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'glow';
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  const variants = {
    default: "bg-tertiary text-text-secondary",
    outline: "border border-glass-border bg-transparent text-text-primary",
    glow: "border border-accent-purple/50 bg-accent-purple/10 text-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.2)]"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-mono font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
