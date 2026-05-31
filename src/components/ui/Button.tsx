import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: "bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] border border-transparent",
      secondary: "bg-tertiary text-text-primary hover:bg-tertiary/80 border border-transparent",
      outline: "bg-transparent border border-glass-border text-text-primary hover:border-accent-purple/50 hover:bg-accent-purple/5",
      icon: "bg-transparent hover:bg-white/10 text-text-secondary hover:text-text-primary p-2"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
      icon: "h-10 w-10 flex items-center justify-center p-0"
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          variant !== 'icon' && sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
