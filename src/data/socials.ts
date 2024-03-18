import { GithubIcon, LinkedInIcon, AtIcon, GmailIcon } from '@/components/icons';

export const SOCIAL_MEDIA = [
  { 
    name: 'Github', 
    link: 'https://github.com/jfpalchak', 
    icon: GithubIcon 
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/joey-palchak/',
    icon: LinkedInIcon,
  },
  { 
    name: 'Email', 
    link: 'mailto:joey.palchak@gmail.com', 
    icon: GmailIcon 
  },
] as const;
