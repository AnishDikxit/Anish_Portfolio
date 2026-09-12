import type { ReactNode } from 'react';
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import profileData from '../../data/profile.json';

const iconMap: Record<string, ReactNode> = {
  Github: <GithubLogo size={18} weight="bold" />,
  Linkedin: <LinkedinLogo size={18} weight="bold" />,
  Mail: <EnvelopeSimple size={18} weight="bold" />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-void py-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
        <p className="text-[14px] font-medium tracking-[0.35px] text-ink uppercase">
          {profileData.name}
        </p>
        <div className="flex items-center gap-4">
          {profileData.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-10 place-items-center text-muted transition-colors hover:text-ink"
              aria-label={social.platform}
            >
              {iconMap[social.icon]}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted">
          {currentYear} {profileData.name}
        </p>
      </div>
    </footer>
  );
}
