export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  isLiveAvailable: boolean;
  isGithubAvailable: boolean;
  features: string[];
  overview: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'specialized';
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface WhyWorkPoint {
  title: string;
  description: string;
  detail: string;
}
