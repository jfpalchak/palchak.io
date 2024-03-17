import Image from 'next/image';

import Chip from '@/components/Chip';
import ExternalLink from '@/components/ExternalLink';
import { ArrowLinkIcon } from '@/components/icons';
import { type Project } from '@/data/lifeApi';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="mb-5 min-h-[260px] sm:grid sm:grid-cols-4">
      <p className="pl-3 pt-3 text-sm text-neutral-500 sm:pl-0">
        {project.status}
      </p>
      <div className="group col-span-3 flex flex-col rounded-lg p-3 transition-all hover:cursor-pointer hover:bg-neutral-100 sm:justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5">
          <Image
            src={project.logo}
            width={20}
            height={28}
            alt={`${project.name} logo.`}
            style={{ height: '28px', width: '20px' }}
          />
        </div>
        <h3 className="mt-2">
          {project.name}
        </h3>
        <p className="text-sm text-neutral-500">
          {project.role}
        </p>
        <p className="mt-3 text-sm">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1">
          {project.stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
        <div className="mt-4 flex justify-between text-sm text-neutral-500">
          {project.links.map(({ label, href }) => (
            <ExternalLink
              key={label}
              href={href}
              className="flex gap-1 transition hover:underline group-hover:text-neutral-800"
            >
              {label}
              <ArrowLinkIcon className="h-5 w-4 fill-neutral-500 transition group-hover:fill-neutral-800" />
            </ExternalLink>
          ))}
        </div>
      </div>
    </div>
  );
}
