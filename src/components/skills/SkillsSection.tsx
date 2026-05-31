import React from 'react';
import { Section } from '../layout/Section';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';
import { motion } from 'motion/react';
import skillsData from '../../data/skills.json';
import type { Skill } from '../../types';

export function SkillsSection() {
  const groupedSkills = (skillsData as Skill[]).reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <Section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-accent-purple/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Tech <GradientText>Arsenal</GradientText>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          The tools and technologies I use to build intelligent systems and robust platforms.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <GlassCard key={category} className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-text-primary capitalize">
              {category === 'genai' ? 'Generative AI' : category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:border-accent-purple/50 transition-colors cursor-default"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </Section>
  );
}
