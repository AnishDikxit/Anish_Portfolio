import { cn } from '../../lib/utils';

export type FilterCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'genai';

interface ProjectFilterProps {
  categories: { value: FilterCategory; label: string }[];
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

export function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-6">
      {categories.map((category) => {
        const isActive = activeCategory === category.value;
        return (
          <button
            key={category.value}
            type="button"
            onClick={() => onCategoryChange(category.value)}
            className={cn(
              'text-[14px] font-medium tracking-[0.35px] uppercase transition-colors',
              isActive
                ? 'text-ink'
                : category.value === 'genai'
                  ? 'text-signal hover:text-ink'
                  : 'text-muted hover:text-ink'
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
