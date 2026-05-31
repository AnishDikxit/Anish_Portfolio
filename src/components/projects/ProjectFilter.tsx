import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';


// Let's also define ProjectCategory in ProjectFilter if it's not in types
// Wait, ProjectCategory is not in types as a standalone export.
// In types/index.ts it's part of Project: category: 'frontend' | 'backend' | 'fullstack' | 'genai';

export type FilterCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'genai';

interface ProjectFilterProps {
  categories: { value: FilterCategory; label: string }[];
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

export function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category.value;
        return (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={cn(
              "relative px-5 py-2.5 text-sm font-medium transition-colors rounded-full overflow-hidden cursor-pointer",
              isActive ? "text-white" : "text-[var(--text-secondary)] hover:text-white hover:bg-[var(--glass-border)]"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
