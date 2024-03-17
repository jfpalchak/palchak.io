import { GithubIcon, LinkedInIcon, AtIcon, GmailIcon } from '@/components/icons';

export const NAME = 'Joey Palchak';

export const SUMMARY =
  'Full Stack Developer, collaborative story-teller, and a maker of things. Enjoys building creative, dynamic products from start to finish. Focused on delivering intuitive experiences with extra attention to detail.';

export const ABOUT = [
  `Hi, I'm Joey! I'm a developer based in Portland, Oregon, having grown up in the small town of Colchester, Vermont.`,
  `I have a bachelor's degree in Computer Science from the University of Vermont, and studied Full Stack Web Development at Epicodus, a vocational school in Portland.`,
  `I enjoy programming, dungeons & dragons, hiking with my dog, and every possible iteration of grapefruit-flavored seltzer.`,
];

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

export interface Project {
  name: string;
  status: string;
  role: string;
  stack: string[];
  description: string;
  logo: string;
  links: {
    label: string;
    href: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    name: 'VinoSeeker',
    role: 'Full Stack Developer',
    status: 'Ongoing',
    stack: [
      'JavaScript',
      'React',
      'Redux',
      'Ionic',
      'SASS',
      'Tailwind',
      'Node.js',
      'Express.js',
      'PostgreSQL',
    ],
    description:
      'A geo-social networking service that allows users to discover wines and wineries, record their experiences, and share with friends.',
    logo: '/logos/vinoseeker.png',
    links: [
      { 
        label: 'vinoseeker.com', 
        href: 'https://vinoseeker.com/' 
      }
    ],
  },
  {
    name: 'Cranberry',
    role: 'Side Project',
    status: 'Ongoing',
    stack: [
      'TypeScript', 
      'React', 
      'Redux', 
      'C#', 
      '.NET', 
      'EF Core', 
      'MySQL'
    ],
    description:
      'A play on "quitting cold turkey," Cranberry is a daily tracker with motivating metrics to help users quit smoking.',
    logo: '/logos/cranberry.png',
    links: [
      {
        label: 'cranberry.onrender.com',
        href: 'http://cranberry-axec.onrender.com/',
      },
      { 
        label: 'github.com', 
        href: 'https://github.com/jfpalchak/cranberry' 
      },
    ],
  },
  {
    name: 'EOL Messenger',
    role: 'Side Project',
    status: '2023',
    stack: [
      'JavaScript',
      'C#',
      '.NET',
      'SignalR',
      'EF Core',
      'MySQL'
    ],
    description:
      'An early 2000\'s inspired public chat room, with user-to-user private chats.',
    logo: '/logos/eol.svg',
    links: [
      { 
        label: 'eol-app.onrender.com',
        href: 'https://eol-app.onrender.com/' 
      },
      {
        label: 'github.com',
        href: 'https://github.com/jfpalchak/EOL.Solution',
      },
    ],
  },
  {
    name: 'Dungeon Adventure',
    role: 'Side Project',
    status: '2023',
    stack: [
      'JavaScript',
      'Bootstrap',
      'HTML/CSS',
      'webpack',
      'babel'
    ],
    description:
      'A text-based adventure game, where the user navigates and interacts with the world via text input.',
    logo: '/logos/adventure.svg',
    links: [
      {
        label: 'github.io/text-adventure',
        href: 'https://jfpalchak.github.io/text-adventure/',
      },
      {
        label: 'github.com',
        href: 'https://github.com/jfpalchak/text-adventure',
      },
    ],
  },
];
