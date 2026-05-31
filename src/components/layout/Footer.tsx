import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileData from '../../data/profile.json';

const iconMap: Record<string, React.ReactNode> = {
  Github: <FaGithub size={20} />,
  Linkedin: <FaLinkedin size={20} />,
  Twitter: <FaTwitter size={20} />,
  Mail: <Mail size={20} />
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-primary pt-16 pb-8 border-t border-glass-border mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-6 mb-8">
          {profileData.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label={social.platform}
            >
              {iconMap[social.icon]}
            </a>
          ))}
        </div>
        
        <p className="text-text-muted text-sm text-center">
          © {currentYear} {profileData.name}. All rights reserved.
        </p>
        <p className="text-text-muted/60 text-xs text-center mt-2">
          Built with React, Vite & Tailwind v4
        </p>
      </div>
    </footer>
  );
}
