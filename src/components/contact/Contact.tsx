import React from 'react';
import { Section } from '../layout/Section';
import { GradientText } from '../ui/GradientText';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import profileData from '../../data/profile.json';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MagneticWrapper } from '../ui/MagneticWrapper';

export function Contact() {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Github': return <FaGithub className="w-6 h-6" />;
      case 'Linkedin': return <FaLinkedin className="w-6 h-6" />;
      case 'Twitter': return <FaTwitter className="w-6 h-6" />;
      case 'Mail': return <Mail className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <Section id="contact" className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <GlassCard className="p-10 md:p-16 text-center border-accent-purple/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's <GradientText>Connect</GradientText>
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {profileData.socials.map((social) => (
              <MagneticWrapper key={social.platform}>
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all cursor-pointer"
                >
                  {getIcon(social.icon)}
                </motion.a>
              </MagneticWrapper>
            ))}
          </div>

          <Button 
            variant="primary" 
            size="lg" 
            className="w-full md:w-auto"
            onClick={() => window.location.href = `mailto:anish.22053@gmail.com`}
          >
            <Mail className="w-5 h-5 mr-2" />
            Say Hello
          </Button>
        </GlassCard>
      </div>
    </Section>
  );
}
