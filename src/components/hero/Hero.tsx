import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ParticleField } from './ParticleField';
import { TypeWriter } from './TypeWriter';
import { GradientText } from '../ui/GradientText';
import { Button } from '../ui/Button';

export function Hero() {
  const roles = [
    "GenAI Developer",
    "Full Stack Engineer",
    "AI Infrastructure Builder"
  ];

  const handleScrollToProjects = () => {
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[var(--color-primary)]">
      {/* Luminous AI Orb Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.img 
          src="/gradient_orb.png"
          alt="Glowing AI Orb"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="w-[800px] h-[800px] object-cover mix-blend-screen opacity-70 blur-[4px]"
        />
        {/* Subtle ambient lighting around the orb */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-accent-purple)_0%,transparent_50%)] opacity-20 blur-[100px]" />
      </div>

      <ParticleField />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <div className="relative px-6 py-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
            <span className="text-sm font-medium text-[var(--color-accent-cyan)] tracking-widest uppercase">
              Welcome to my portfolio
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6 leading-tight"
        >
          I'm <GradientText className="from-[var(--color-accent-purple)] via-[#d946ef] to-[var(--color-accent-cyan)] bg-clip-text text-transparent bg-gradient-to-r drop-shadow-[0_0_30px_rgba(157,78,221,0.3)]">Anish Dixit</GradientText>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-3xl text-[var(--color-text-secondary)] font-medium h-[40px] mb-12"
        >
          <TypeWriter words={roles} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button onClick={handleScrollToProjects} size="lg" className="group relative overflow-hidden bg-white text-black hover:bg-gray-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] border-0 px-8 py-6 text-lg rounded-2xl">
            <span className="relative z-10 font-bold tracking-wide">Explore Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-cyan)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--color-text-muted)] cursor-pointer"
        onClick={handleScrollToProjects}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
