import Image from "next/image";

import Chip from "@/components/Chip";
import ExternalLink from "@/components/ExternalLink";
import { ArrowLinkIcon } from "@/components/icons";
import { type Project } from "@/data/lifeApi";

interface CardProps {
  project: Project;
}

export default function ProjectCard({ project }: CardProps) {
  return (
    <div className="sm:grid sm:grid-cols-4 mb-5 min-h-[260px]">
      <p className="text-sm text-neutral-500 pt-3 pl-3 sm:pl-0">
        {project.status}
      </p>
      <div className="flex flex-col sm:justify-between p-3 col-span-3 transition-all rounded-lg group hover:bg-neutral-100 hover:cursor-pointer">
        <div className="flex rounded-full ring-1 h-10 w-10 items-center justify-center bg-white shadow-md shadow-neutral-800/5 ring-neutral-900/5">
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
        <p className="text-sm mt-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-4">
          {project.stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-sm text-neutral-500">
          {project.links.map(({ label, href }) => (
            <ExternalLink
              key={label}
              href={href}
              className="flex gap-1 transition group-hover:text-neutral-800 hover:underline"
            >
              {label}
              <ArrowLinkIcon className="w-4 h-5 fill-neutral-500 transition group-hover:fill-neutral-800" />
            </ExternalLink>
          ))}
        </div>
      </div>
    </div>
  );
}