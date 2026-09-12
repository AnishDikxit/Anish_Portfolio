import { cn } from '../../lib/utils';

interface StillProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
}

export function Still({ src, alt, className, aspect = '16 / 9' }: StillProps) {
  return (
    <div
      className={cn('overflow-hidden rounded-[8px]', className)}
      style={{ aspectRatio: aspect }}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
