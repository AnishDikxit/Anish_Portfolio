import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-accent text-accent-ink hover:opacity-90',
      secondary: 'border border-line bg-transparent text-ink hover:bg-elevated',
      ghost: 'bg-transparent text-muted hover:text-ink',
    };

    const sizes = {
      sm: 'h-9 px-4 text-[14px]',
      md: 'h-11 px-6 text-[14px]',
      lg: 'h-12 px-7 text-[14px]',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-[6px] font-semibold whitespace-nowrap transition-opacity duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
