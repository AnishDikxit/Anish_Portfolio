import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface GlassCardProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-2xl overflow-hidden",
        hoverEffect && "glass-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
