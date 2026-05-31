import React from 'react';
import { Section } from '../layout/Section';
import { GlassCard } from '../ui/GlassCard';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import profileData from '../../data/profile.json';

const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies', value: '10+' }
];

export function About() {
  // 3D Tilt Effect Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high-end feel
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  // Parallax translation elements
  const translateZImage = useSpring(useTransform(y, [-0.5, 0.5], [20, -20]), springConfig);
  const translateZRing = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate cursor distance from card center (-0.5 to 0.5 range)
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Section id="about" title="About Me" subtitle="A brief introduction to who I am and what I do.">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Graphic / Image Placeholder with Premium Animations */}
        <div 
          className="lg:col-span-5 flex justify-center items-center relative"
          style={{ perspective: 1000 }}
        >
          {/* Main 3D Card Container */}
          <motion.div
            className="relative w-full max-w-[400px] aspect-square cursor-pointer select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Spinning Neon Gradient Ring */}
            <motion.div
              className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-accent-purple via-pink-500 to-accent-cyan opacity-80 blur-[2px] z-0"
              style={{
                translateZ: translateZRing,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Glassmorphic Inner Frame */}
            <div 
              className="absolute inset-0 rounded-3xl overflow-hidden border border-[var(--glass-border)] bg-black/40 backdrop-blur-xl z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Internal Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-purple)]/10 via-transparent to-[var(--color-accent-cyan)]/15 z-0" />
              
              {/* Profile Image with 3D Depth */}
              <motion.img 
                src="/profile_3d.png" 
                alt="Anish Dixit" 
                className="w-full h-full object-cover relative z-10 opacity-90 hover:opacity-100 transition-all duration-300 pointer-events-none scale-102"
                style={{
                  translateZ: 30,
                  transformStyle: 'preserve-3d',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex items-center justify-center text-[var(--text-muted)] font-mono text-sm z-20 text-center px-4">
                Please save your image as<br/>public/profile_3d.png
              </div>
            </div>

            {/* Glowing Reflection Layer */}
            <div 
              className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-40 transition-opacity duration-300 pointer-events-none z-20"
              style={{ transform: 'translateZ(45px)' }}
            />
          </motion.div>
          
          {/* Backdrop Blur Glow (Static behind) */}
          <div className="absolute -inset-8 bg-gradient-to-tr from-accent-purple/25 to-accent-cyan/25 opacity-60 blur-3xl -z-10 rounded-full" />
        </div>

        {/* Right Column: Bio & Stats */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-text-primary">
                {profileData.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {profileData.bio}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <GlassCard key={i} className="p-6 text-center hoverEffect">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
