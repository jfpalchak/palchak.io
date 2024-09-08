
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
    name: 'TadHealth',
    role: 'Front-End Developer',
    status: 'Jun \'24 - Present',
    stack: [
      'TypeScript',
      'Vue',
      'Vuex',
      'Nuxt.js',
      'SCSS',
      'Tailwind',
    ],
    description:
      'A mental health platform designed to provide accessible resources and support for students, counselors, and organizations.',
    logo: '/logos/tad.svg',
    links: [
      {
        label: 'tadhealth.com',
        href: 'https://tadhealth.com/',
      },
    ],
  },
  {
    name: 'VinoSeeker',
    role: 'Full Stack Developer',
    status: 'Jan \'24 - Jun \'24',
    stack: [
      'JavaScript',
      'React',
      'Redux',
      'Ionic',
      'SCSS',
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
        href: 'https://vinoseeker.com/',
      },
    ],
  },
  {
    name: 'Grimoire',
    role: 'Side Project',
    status: 'Ongoing',
    stack: [
      'TypeScript', 
      'React', 
      'Next.js', 
      'Shadcn', 
      'GraphQL', 
    ],
    description:
      'A D&D 5e SRD reference web app. Search through spells, monsters, rules, and magical items.',
    logo: '/logos/grimoire.svg',
    links: [
      {
        label: 'github.com',
        href: 'https://github.com/jfpalchak/grimoire',
      },
    ],
  },
  {
    name: 'Cranberry',
    role: 'Side Project',
    status: '2023 - 2024',
    stack: [
      'TypeScript', 
      'React', 
      'Redux', 
      'C#', 
      '.NET', 
      'EF Core', 
      'MySQL',
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
        href: 'https://github.com/jfpalchak/cranberry',
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
      'MySQL',
    ],
    description:
      'An early 2000\'s inspired public chat room, with user-to-user private chats.',
    logo: '/logos/eol.svg',
    links: [
      { 
        label: 'eol-app.onrender.com',
        href: 'https://eol-app.onrender.com/',
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
