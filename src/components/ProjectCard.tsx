import Image from 'next/image';

import Chip from '@/components/Chip';
import ExternalLink from '@/components/ExternalLink';
import { ArrowLinkIcon } from '@/components/icons';
import { type Project } from '@/data/projects';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="min-h-[260px] sm:grid sm:grid-cols-4">
      <p className="pl-3 pt-3 text-sm text-neutral-500 sm:pl-0">
        {project.status}
      </p>
      <div className="group col-span-3 flex flex-col rounded-lg p-3 transition-all hover:bg-neutral-100 sm:justify-between dark:hover:bg-neutral-400/5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:ring-0">
          <Image
            src={project.logo}
            width={20}
            height={28}
            alt={`${project.name} logo.`}
            style={{ height: '28px', width: '20px' }}
          />
        </div>
        <h3 className="mt-3 dark:text-white">
          {project.name}
        </h3>
        <p className="text-sm text-neutral-500">
          {project.role}
        </p>
        <p className="mt-3 text-sm dark:text-neutral-300">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1">
          {project.stack.map((tech) => (
            <Chip key={tech}>
              {tech}
            </Chip>
          ))}
        </div>
        <div className="mt-4 flex justify-between text-sm text-neutral-500">
          {project.links.map(({ label, href }) => (
            <ExternalLink
              key={label}
              href={href}
              className="flex gap-1 items-center transition hover:underline group-hover:text-neutral-800 dark:group-hover:text-neutral-300"
            >
              <ArrowLinkIcon className="h-4 w-4 fill-neutral-500 transition group-hover:fill-neutral-800 dark:group-hover:fill-neutral-300" />
              <p>{label}</p>
            </ExternalLink>
          ))}
        </div>
      </div>
    </div>
  );
}
