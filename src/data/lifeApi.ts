
export const Summary = 'Full Stack Developer, collaborative story-teller, and a maker of things. Enjoys building creative, dynamic products from start to finish. Focused on delivering intuitive experiences with extra attention to detail.';

export const About = [
  `I'm Joey! I'm a developer based in Portland, Oregon, having grown up in the small town of Colchester, Vermont.`,
  `I have a bachelor's degree in Computer Science from the University of Vermont, and studied Full Stack Web Development at Epicodus, a vocational school in Portland.`,
  `I enjoy programming, dungeons & dragons, hiking with my dog, and every possible iteration of grapefruit-flavored seltzer.`,
];

export const SocialMedia = [
  { name: 'Github', link: 'https://github.com/jfpalchak', icon: '' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/joey-palchak/', icon: '' },
  { name: 'Email', link: 'mailto:joey.palchak@gmail.com', icon: '' },
];

export interface Project {
  name: string;
  status: string;
  role: string;
  stack: string[];
  description: string;
  logo: string; // image path
  links: {
    label: string;
    href: string;
  }[];
};

export const MyProjects: Project[] = [
  {
    name: 'VinoSeeker',
    role: 'Full Stack Developer',
    status: 'Ongoing',
    stack: [
      'JavaScript',
      'React',
      'Redux',
      'Ionic',
      'Tailwind',
      'Node.js',
      'Express.js',
      'PostgreSQL',
    ],
    description: 'A geo-social networking service that allows users to discover wines and wineries, record their experiences, and share with friends.',
    logo: '',
    links: [
      { label: 'vinoseeker.com', href: 'https://vinoseeker.com/' },
    ]
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
      'MySQL',
    ],
    description: 'A play on "quitting cold turkey," Cranberry is a daily tracker with motivating metrics to help users quit smoking.',
    logo: '',
    links: [
      { label: 'github.com', href: 'https://github.com/jfpalchak/cranberry' },
      { label: 'cranberry.onrender.com', href: 'http://cranberry-axec.onrender.com/' },
    ]
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
    description: 'An early 00\'s inspired online-messaging service that allows users to communicate real-time in a public chat room, or one-on-one in a private conversation with another online user.',
    logo: '',
    links: [
      { label: 'github.com', href: 'https://github.com/jfpalchak/EOL.Solution' },
      { label: 'eol-app.onrender.com', href: 'https://eol-app.onrender.com/' },
    ]
  },
  {
    name: 'Dungeon Adventure',
    role: 'Side Project',
    status: '2023',
    stack: [
      'JavaScript',
      'HTML/CSS',
      'webpack'
    ],
    description: 'A text-based adventure game, where the user navigates and interacts with the world via text input.',
    logo: '',
    links: [
      { label: 'github.com', href: 'https://github.com/jfpalchak/text-adventure' },
      { label: 'text-adventure.io', href: 'https://jfpalchak.github.io/text-adventure/' },
    ]
  },
]