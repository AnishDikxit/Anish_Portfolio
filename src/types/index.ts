export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'genai';
  urls: {
    github?: string;
    live?: string;
  };
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'genai' | 'frontend' | 'backend' | 'tools';
  proficiency?: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  socials: SocialLink[];
}
