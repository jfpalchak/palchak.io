import { GithubIcon, LinkedInIcon, EnvelopeIcon } from '@/components/icons';

export const SOCIAL_MEDIA = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/joey-palchak/',
    icon: LinkedInIcon,
  },
  { 
    name: 'Github', 
    link: 'https://github.com/jfpalchak', 
    icon: GithubIcon,
  },
  { 
    name: 'Email', 
    link: 'mailto:joey.palchak@gmail.com', 
    icon: EnvelopeIcon,
  },
] as const;
