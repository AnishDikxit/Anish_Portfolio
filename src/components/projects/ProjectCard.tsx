import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../../types';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Mouse position values for the glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const localMouseX = e.clientX - rect.left;
    const localMouseY = e.clientY - rect.top;
    
    // For 3D tilt
    const xPct = (localMouseX / width) - 0.5;
    const yPct = (localMouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);

    // For Glow
    mouseX.set(localMouseX);
    mouseY.set(localMouseY);
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY
      }}
      className={`h-full ${project.featured ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      layout
    >
      <GlassCard className="h-full flex flex-col group relative overflow-hidden p-0 rounded-2xl border-[var(--glass-border)] bg-[var(--bg-secondary)] hover:border-[var(--accent-purple)]/50 transition-colors duration-300">
        
        {/* Glow effect on hover */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([mx, my]) => `radial-gradient(600px circle at ${mx}px ${my}px, var(--color-glow-purple), transparent 40%)`
            )
          }}
        />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <Badge variant="glow" className="bg-[var(--bg-primary)]/80 backdrop-blur-md border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              Featured
            </Badge>
          </div>
        )}
        
        {/* Thumbnail */}
        <div className="relative h-48 md:h-64 w-full overflow-hidden shrink-0 bg-[var(--bg-primary)]">
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent z-10" />
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
              }}
            />
          ) : (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] opacity-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-accent-purple)_0%,transparent_70%)] opacity-20" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative z-20" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--accent-purple)] group-hover:to-[var(--accent-cyan)] transition-colors">
            {project.title}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm mb-6 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs bg-[var(--bg-primary)]/50">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-auto">
            {project.urls.github && (
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 cursor-pointer z-30 relative"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.urls.github, '_blank', 'noopener,noreferrer');
                }}
              >
                <FaGithub size={16} /> Code
              </Button>
            )}
            {project.urls.live && (
              <Button 
                variant="primary" 
                size="sm" 
                className="gap-2 cursor-pointer z-30 relative"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.urls.live, '_blank', 'noopener,noreferrer');
                }}
              >
                <ExternalLink size={16} /> Live Demo
              </Button>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
